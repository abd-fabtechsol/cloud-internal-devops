
import { useEffect, useState } from "react";
import TableMui from "../../components/mui/TableMui";
import { Box, Paper } from "@mui/material";
import apiClient from "../../api/apiClient";
import useApi from "../../hooks/useApi";
import Paginate from "../../components/Paginate";
import { Helmet } from "react-helmet";
import { AdminButton, SelectOption } from "../../components/mui";
import colors from "../../config/colors";

import { generateCSV } from "../../modules/csvHelpers";

const headers={
  "candidate_name":"Candidate Name",
  "facility":"Facility",
  "candidate_ein":"EIN",
  "candidate_3_4_id":"Candidate 3/4 ID",
  "candidate_owner":" Candidate Owner",
  "position_title":"Position Title",
  "position_type":"Position Type",
  "start_date":"Start Date",
  "end_date":"End Date",
  "bill_rate":"Bill Rate"
}

export default  ({user}) => {
  const [count, setCount] = useState(0);

  const initial={start_date:"",end_date:""}
  const [FilterData,setFilterData]=useState({status:"",type:""})
  const [result,setResult]=useState()
  const handleChange=(key,value)=>{
    setFilterData({...FilterData,[key]:value})
  }

  useEffect(() => {
    if(FilterData.status&&FilterData.type)
    fetchData();
  }, []);

  const { request, data, loading } = useApi((route) =>apiClient.get(route));
  const csvAPI = useApi((route) =>apiClient.get(route));
  async function fetchData(page = 1) {
    setResult(null)
    if(page==1&&count)
    setCount(0)
    
    const result = await request(`/ReportMatch/?page=${page}&type=${FilterData.type}&status=${FilterData.status}`);
    if (!result.ok) return;
    //console.log(result);
    if (!count||page==1) setCount(result.data.count);
    if(result.data?.count)
    setResult(result)
  }
  const handlePageChange = (event, value) => {
    fetchData(value);
  };
  const apiPositionType=useApi((route)=>apiClient.get(route))

   


  return (
    <div>
       <Helmet>
        <title>
          Timesheets
        </title>
      </Helmet>

      <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px", }}>
      <p >Report Match</p>
<div className="row align-items-start">

               <form className="col-10" onSubmit={(e)=>{
                e.preventDefault()
                fetchData()}}>

<div className='row d-flex flex-wrap justify-content-start gap-2 '>
<div className="col-md-3">

<PositionType value={FilterData.type} setValue={handleChange}/>
</div>
<div className="col-md-3">

<MatchStatus value={FilterData.status} setValue={handleChange}/>
</div>
<div className="col-md-3">
<AdminButton 
                        name="Filter"
                        type="Submit"
                        size="medium"
                        loading={loading}
                        style={{
                          backgroundColor: colors.primary,
                          "&:hover": { backgroundColor: "#002370" },
                          whiteSpace: "nowrap",
                        }}
                      />
</div>


</div>

               </form>  
               <div className="col-2">

               {result&&<AdminButton 
                        name="Export"
                        size="medium"
                        loading={csvAPI.loading}
                        onClick={()=>fetchCsvData(result,csvAPI)}
                        style={{
                          backgroundColor: colors.primary,
                          "&:hover": { backgroundColor: "#002370" },
                          whiteSpace: "nowrap",
                        }}
                      />} 
                </div> 
</div>

   
{data?.length>0&&  <>

        <Box>
          <TableMui
          
            styleTableTh={{
              color: "#ffffff",
              fontWeight: "bold",
              whiteSpace: "nowrap",
              // bgcolor:getThemeColor(type,"primary")
            }}
            th={headers}
            td={data}


         
          />
        </Box>
        <Paginate count={count} onChange={handlePageChange} />
   </>
   }
      </Box>
    </div>
  );
};




const PositionType = ({value,setValue,...otherProps}) => {
  
    const [data, setData] = useState([]);
    const [page,setPage]=useState(1)
    const [count,setCount]=useState()
    const {request}=useApi((route)=>apiClient.get(route))
useEffect(()=>{

    fetchData()
},[])
   
    async function fetchData(){
      const result=await request(`/PositionType/?page=${page}`)
      //console.log(result,"data")
      if(result.data.results)
      setData([...data,...result.data?.results])
      setPage(page+1)
      if(!count)
      setCount(result.data.count)
     }
    
     const handleScroll = (event) => {
      const { scrollTop, clientHeight, scrollHeight } = event.target;
      if (scrollTop + clientHeight >= scrollHeight-1) {
        //console.log(count>data.length,count,data.length);
        if(count>data.length)
        fetchData();
      }
    };

    return (
        <SelectOption
                      
        required
        label="Type"
        name="position"
        inputProps={{ maxLength: 150 }}
        id="outlined-name"
        value={value}
        onChange={(e)=>setValue("type",e.target.value)}
       
        data={data}
        fullWidth
        size={"small"}
        style={{ marginBottom: "25px", width:"100%" }}
        MenuProps={{
          PaperProps: {
            onScroll: handleScroll,
            style: {
              maxHeight: "300px",
              overflowY: "auto",
            },
          },
        }}
        {...otherProps}
      />
    );
};
const MatchStatus = ({value,setValue,...otherProps}) => {
  


  
const data=[
  {value:"SU",name:"Submittal"},
  {value:"RE",name:"Rejected"},
  {value:"IN",name:"Interview"},
  {value:"OF",name:"Offer"},
  {value:"FP",name:"Full Placement"},
  {value:"CA",name:"Candidate Accepted"},
  {value:"PR",name:"Present"},

]

  return (
      <SelectOption
                    
      required
      label="Status"
      name="position"
      inputProps={{ maxLength: 150 }}
      id="outlined-name"
      value={value}
      onChange={(e)=>setValue("status",e.target.value)}
     
      data={data}
      fullWidth
      size={"small"}
      style={{ marginBottom: "25px", width:"100%" }}

      {...otherProps}
    />
  );
};


async function fetchCsvData(resultData,csvAPI){
 
  let data=resultData.data.results
  let response=resultData
  while (response.next) {

    const result=await csvAPI.request(response.next)
    if(!result.ok) 
    break
    if(result.data?.results)
    data=[...data,result.data.results]
    response=result
    
  }
  data= data.map(item=>{

    
    let orderedItem = {};
    const headerKeys = Object.keys(headers);
    
    headerKeys.forEach(key => {
      orderedItem[key] = item[key];
    });
    
    return orderedItem;
      })
  generateCSV(data,headers,"MatchesReport")
  }