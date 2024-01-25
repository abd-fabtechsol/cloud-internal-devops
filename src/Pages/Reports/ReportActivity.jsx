
import { useEffect, useState } from "react";
import TableMui from "../../components/mui/TableMui";
import { Box, Paper, TextField } from "@mui/material";
import { useOutletContext, useParams } from "react-router-dom";
import apiClient from "../../api/apiClient";
import useApi from "../../hooks/useApi";
import Paginate from "../../components/Paginate";
import { Helmet } from "react-helmet";
import * as yup from 'yup';
import { Formik } from "formik";
import AppErrorMessage from "../../components/form/AppErrorMessage";
import { AdminButton, SelectOption ,DateField} from "../../components/mui";
import colors from "../../config/colors";

import moment from "moment";
import FormFieldInput from "../../components/form/FormFieldInput";
import { generateCSV } from "../../modules/csvHelpers";
const validationSchema = yup.object({
  start_date: yup.string().required("Start Date is required").label("Start Date"),
  end_date: yup
    .string()
    .required("End Date is required")
    .test("is-greater", "end date should be later than start date", function(value) {
      const { start_date } = this.parent;
      return moment(value).isSameOrAfter(moment(start_date));
    })
});

const headers={
  "ein": "Candidate EIN",
  "employee": "Candidate Name",
  "facility": "Facility",
  "shift_pay_period": "Shift Pay Period",
  "shift_date": "Shift Date",
  "punch_in": "Punch In",
  "punch_out": "Punch Out",
  "total_hours": "Hours",
  "trans_type": "Trans Type",
  "bill_rate":"Bill Rate",
  "total_billed":"Billed Amount",
  "status":"Timesheet Status",
  "status_date": "Status Date",
  "last_time_status": "Last TimeSheet Status",
  "check_number": "Check Number",
  "rejection": "Timesheet Rejection Reason",
  "ap_hold": "AP Hold Check",
  "sent_to_ap_hold": "Data Sent To AP Hold",
  "epcf": "EPCF"
}
export default  ({user}) => {
  const {type}= useOutletContext();
  const [count, setCount] = useState(0);
  const [result,setResult]=useState()
  const [FilterData,setFilterData]=useState({facility:"",date:""})
  const handleChange=(key,value)=>{
    setFilterData({...FilterData,[key]:value})
  }



 
  const { request, data, loading } = useApi((route) =>apiClient.get(route));
  const csvAPI = useApi((route) =>apiClient.get(route));
  const [sortBy,setSortBy]=useState()
  async function fetchData(page = 1) {
    setResult(null)
    if(page==1&&count)
    setCount(0)
    //console.log("dssdfsfsd");
    const result = await request(`/ReportRemittance/?page=${page}&facility=${FilterData.facility}&shift_date=${FilterData.shift_date}`);
    if (!result.ok) return;
    //console.log(result);
    if (!count||page==1) setCount(result.data.count);
    if(result.data?.count)
    setCount(result.data.count)
  }
  const handlePageChange = (event, value) => {
    fetchData(value);
  };


   

  

  return (
    <div>
       <Helmet>
        <title>
          Timesheets
        </title>
      </Helmet>

      <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px", }}>
      <p >Report Activity</p>
      <Box className="row d-flex flex-wrap justify-content-between align-items-start">

      <form className="col-10" onSubmit={(e)=>{
                e.preventDefault()
                fetchData()}}>

<div className='row justify-content-start gap-2 '>
<div className="col-md-3">
  
<FacilityType fullWidth size="small" value={FilterData.facility} setValue={handleChange}/>
</div>
<div className="col-md-3">

<DateField fullWidth size="small" change={(e)=>handleChange("shift_date",e.target.value)} />
</div>
<div className="col-md-3">

<AdminButton 
                        name="Filter"
                        type="Submit"
                        size="large"
                       loading={loading}
                        style={{
                          backgroundColor: colors.primary,
                          "&:hover": { backgroundColor: "#002370" },
                          whiteSpace: "nowrap"
                        }}
                      />
</div>
</div>

               </form> 
<div className="col-2">

               {result&&<AdminButton 
                        name="Export"
                        size="large"
                        loading={csvAPI.loading}
                        onClick={()=>fetchCsvData(result,csvAPI)}
                        style={{
                          backgroundColor: colors.primary,
                          "&:hover": { backgroundColor: "#002370" },
                          whiteSpace: "nowrap",
                        }}
                      />}  
</div>
      </Box>
   
{data?.length>0&&   <>
   
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
customFields={[{name:"shift_hours",data:(value,{punch_in,punch_out})=>{
  if(!punch_in||!punch_out)
  return
  return(<>{
 moment(punch_in, "HH:mm:ss").format("HH:mm")+"-"+ moment(punch_out, "HH:mm:ss").format("HH:mm")
}</>)}
}]}

         
          />
        </Box>
        <Paginate count={count} onChange={handlePageChange} />
   </>}
      </Box>
    </div>
  );
};



const FacilityType = ({value,setValue,...otherProps}) => {
  

  useEffect(() => {
    fetchData();
  }, []);
const [data,setData]=useState([])
  const { request } = useApi((route) =>apiClient.get(route));
  const [sortBy,setSortBy]=useState()
  async function fetchData(page = 1) {

    
    const result = await request(`/ReportRemittance/`);
    if (!result.ok) return;
    const updatedData=result?.data?.facility?.map(item=>{
      return {
        value:item,name:item
      }
    })
    setData(updatedData)
    //console.log(updatedData);
  
  }
  

  
    return (
        <SelectOption
                      
        required
        label="Facility"
        name="position"
        inputProps={{ maxLength: 150 }}
        id="outlined-name"
        value={value}
        onChange={(e)=>setValue("facility",e.target.value)}
       
        data={data}
        fullWidth
        size={"large"}
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
    generateCSV(data,headers,"ActivityReport")
    }