import { Button } from '@mui/material';
import { FaClipboardList } from "react-icons/fa";
import TableMui from '../components/mui/TableMui';
import SyncIcon from '@mui/icons-material/Sync';
import { Link, useOutletContext } from 'react-router-dom';
import { Box, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useApi from '../hooks/useApi';
import apiClient from '../api/apiClient';
import Paginate from '../components/Paginate';
import PositionSidebar from '../components/sidebar/PositionSidebar';
import { Helmet } from "react-helmet";
import SideBarCandidate from '../components/sidebar/SideBarCandidate';

export default ({user}) => {
  const {type}=useOutletContext()
  const [countData,setCountData]=useState({
    open_position:"0",
    submitted_matches:"0",
    working_matches:"0",
    timesheet_pending:"0",

  })
  function getUserRoute(){
    if(type=="AG")
    return "/agencies/"
    else if(type=="HO")
    return "/hospitals/"
    else if(type=="AD")
    return "/manager/"
    }
    const routeType=getUserRoute()
useEffect(()=>{
fetchData()
},[])
 async function fetchData(){
  let obj={}
    const positionData=await apiClient.get("/positions/?status=OP")
    if(positionData.data.count)
    obj={open_position:positionData.data?.count}
    const matchesData=await apiClient.get("/matches/?")
    if(matchesData.data.count)
    obj={...obj,submitted_matches:matchesData.data?.count}
    const currentData=await apiClient.get("/matches/?status=FP")
    if(currentData.data.count)
    obj={...obj,working_matches:currentData.data?.count}
    const timeSheetData=await apiClient.get("/TimeSheetCsv/?")
    if(timeSheetData.data.count)
    obj={...obj,timesheet_pending:timeSheetData.data?.count}
    console.log(obj,"timesheet");
    setCountData({...countData,...obj})
  }
  //console.log(countData)
  return (
    <div>
      <Helmet>
        <title>
          2ndCar Dashboard
        </title>
      </Helmet>
    <div className='main'>     
    <section className="taskd-sec p-3 d-flex justify-content-end">
         <div className="d-flex gap-2">
          <Button onClick={()=>fetchData()} variant="contained" className='btn_bg' startIcon={<SyncIcon />}>
          Refresh dashboard
          </Button>
            {/* <Button variant="contained" className='btn_bg' startIcon={<CreateIcon />}>
          Edit Dashboard
          </Button> */}
          </div>
     </section>
      {/*---------------- Activity::a Section ----------------*/}
      <section className="activity-sec mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 col-xxl-3 mt-3">
              <div className="bg-white rounded-3 shadow p-3 d-flex align-items-center">
              <div className='text-danger new-off p-3  rounded-3'>
                  <FaClipboardList size={35}/>
                </div>
                {/* <Link to={routeType+"positions"} style={{textDecoration:"none"}}> */}
                <div className="ps-">
                  <h5 className="fs-6 text-secondary white_space mb-0  ">Total User</h5>
                  <p className="fs-4 text-dark mont-font lh-1 mt-2 mb-0">{countData.open_position}</p>
                </div>
                {/* </Link> */}
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xxl-3 mt-3 ">
              <div className="bg-white rounded-3 shadow p-3 d-flex align-items-center">
                <div className='text-danger new-off p-3  rounded-3'>
                <FaClipboardList size={35}/>
                </div>
                {/* <Link to= {routeType+"matches"} style={{textDecoration:"none"}}> */}
                <div className="">
                  <h5 className="fs-6 text-secondary white_space mb-0 text-wrap">Total Car Posts</h5>
                
                  <p className="fs-4 text-dark mont-font lh-1 mt-2 mb-0">{countData.submitted_matches}</p>
                </div>
                {/* </Link> */}
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xxl-3 mt-3">
              <div className="bg-white rounded-3 shadow p-3 d-flex align-items-center">
                <div className='text-danger new-off p-3  rounded-3'>
                <FaClipboardList size={35}/>
                </div>
                {/* <Link to= {routeType+"matches"} style={{textDecoration:"none"}}> */}
                <div className="">
                  {/* <h5 className="fs-6 text-secondary white_space mb-0 ">Currently Working Matches</h5> */}
                  <h5 className="fs-6 text-secondary white_space mb-0 text-wrap ">Total Bids</h5>
                  <p className="fs-4 text-dark mont-font lh-1 mt-2 mb-0">{countData.working_matches}</p>
                </div>
                {/* </Link> */}
              </div>
            </div>
           {user==2|| <div className="col-md-6 col-lg-4 col-xxl-3 mt-3 px-2">
              <div className="bg-white rounded-3 shadow p-3 d-flex align-items-center">
                <div className='text-danger new-off p-3  rounded-3'>
                <FaClipboardList size={35}/>
                </div>
                {/* <Link to= {routeType+"time-sheets"} style={{textDecoration:"none"}}> */}
                <div className="">
                  <h5 className="fs-6 text-secondary white_space mb-0  text-wrap">Pending Verfification</h5>
                  <p className="fs-4 text-dark mont-font lh-1 mt-2 mb-0">{countData.timesheet_pending}</p>
                </div>
                {/* </Link> */}
              </div>
            </div>}
          </div>
        </div>
      </section>
      {/* <div className="m-2">
       <Jobs type={"OP"}/>
      </div>
      <div className="m-2">
       <CurrentlyWorkingJobs type={"FP"}/>
      </div>
{type!=="AG"&&      <div className="m-2">
       <CurrentlyWorkingJobs type={"CL"}/>
      </div>} */}
      
    </div>
    </div>
  )
}
const Jobs = ({type}) => {
  const [current, setCurrent] = useState();
  const [show, setShow] = useState(false);
  const [count,setCount]=useState(0)
  const [sortBy,setSortBy]=useState()
  const [page, setPage] = useState(1);
  const { request, data, loading } = useApi((route) => apiClient.get(route));

  useEffect(() => {
    fetchData(page);
  }, [page, sortBy]);

  async function fetchData(pageCount = 1) {

    const result = await request(
      `/positions/?status=${type}&page=${pageCount}&ordering=${sortBy}`
    );
    if (!result.ok) return;
    setCount(result.data.count);
  }

  const handlePageChange = (_, value) => setPage(value);
const dummy=[
  {title:"Position",
  type:"Position Type",  
  company_name:"Company",
  no_of_positions:"Total shift",
  submittal_limit:"Submital Limit",
  projected_start_date:"Projected Start Date",
},
  {title:"Position",
  type:"Position Type",  
  company_name:"Company",
  no_of_positions:"Total shift",
  submittal_limit:"Submital Limit",
  projected_start_date:"Projected Start Date",
},
  {title:"Position",
  type:"Position Type",  
  company_name:"Company",
  no_of_positions:"Total shift",
  submittal_limit:"Submital Limit",
  projected_start_date:"Projected Start Date",
},
]

  return (
    <div>
      {show && <PositionSidebar values={{ current, show, setShow }} />}
     
<Box component={Paper} elevation={6} sx={{ marginBottom: "20px", padding: "20px" }}>
    <Typography variant="h5" sx={{ marginBottom: "10px", color:"#00000" }}>
     Open Shift
    </Typography>

     <Box >
     <TableMui
     onSort={(field,direction)=>{
      let value=direction=="asc"?field:"-"+field
                  setSortBy(value)
                }}
  styleTableTh={{color:"#ffffff", fontWeight: "bold", whiteSpace: "nowrap", }}
  th={{
    title:"Position",
    type:"Position Type",  
    ...(type === "CL" ? { candidate_name: "Candidate" } : {}),
    // status:"Status",
    company_name:"Company",
    no_of_positions:"Total shift",
    submittal_limit:"Submital Limit",
    projected_start_date:"Projected Start Date",
   
  }}
  sortDisable={["status","worksite"]}
  td={dummy}
  loading={loading}
//   customFields={[
   
//     {name:"title",data:(value,item)=>(
//   <Button  style={{ textDecoration: "underline", color:"#000000", fontWeight:"bold" }} onClick={() => {
//     setCurrent(item.id);
//     setShow(true);
//   }} title={value}>
//     {value}
//   </Button>
//   )},
//     {name:"candidate_name",data:(value,item)=>(
//       <>
//       {console.log(item.matches.status,"matchess")}
// {/* item.matches=="Full Placement"&&<p>{console.log(item.matches,"asdfd")}</p> */}
// </>
//   )},
//   {name:"company_name",data:(value,item)=>(
//     < >
//       {item.company.company}
//     </>
//     )},
//   {name:"projected_start_date",data:(value,item)=>(
//    <>
//    {item.schedule.projected_start_date}
//    </>
//     )}
  
//   ]}
/>

 </Box>
 <Paginate count={count}  onChange={handlePageChange}/>
  </Box>
  

    </div>
  )
}

const CurrentlyWorkingJobs = ({type}) => {
  const [current, setCurrent] = useState();
  const [show, setShow] = useState(false);
  const [count,setCount]=useState(0)
  const [sortBy, setSortBy] = useState();
  const [page, setPage] = useState(1);
  const[candidate,setCandidate]=useState(false)
  const { request, data, loading } = useApi((route) => apiClient.get(route));
  
  useEffect(() => {
    fetchData(page);
  }, [page, sortBy]);

  async function fetchData(pageCount = 1) {


    const result = await request(
      `/matches/?status=${type}&page=${pageCount}&ordering=${sortBy}`
    );
    if (!result.ok) return;
    setCount(result.data.count);
  }

  const handlePageChange = (_, value) => setPage(value);

  return (
    <div>
      {show && <PositionSidebar values={{ current, show, setShow }} />}
      {candidate && <SideBarCandidate values={{ current,show: candidate, setShow:setCandidate }} />}
<Box component={Paper} elevation={6} sx={{ marginBottom: "20px", padding: "20px" }}>
    <Typography variant="h5" className='' sx={{ marginBottom: "10px", color:"#00000" }}>
    {type=="FP"?   "Currently Working":"Closed Positions"}
{/* Currently Working */}
    </Typography>

     <Box className='' >
     <TableMui
      onSort={(field,direction)=>{
        let value=direction=="asc"?field:"-"+field
                    setSortBy(value)
                  }}
        styleTableTh={{color:"#ffffff", fontWeight: "bold", whiteSpace: "nowrap" }}
        th={{
          position_title:"Position",
          candidate_name:"Candidate",
          position_type:"Position Type",  
          status:"Status",
          position_owner:"Company",
          modified_at:type=="CL"?"Close Date":"Placement Date",
          projected_start_date :"Projected Start Date",
          projected_end_date:"Projected End Date",
        
        }}
        td={data}
        loading={loading}
        customFields={[ 
   
    {name:"position_title",data:(value,item)=>(
  <Button style={{ textDecoration: "underline", color:"#000000", fontWeight:"bold" }} onClick={() => {
    setCurrent(item.position);
    setShow(true);
  }}>
    {value}
  </Button>
  )},
    {name:"candidate_name",data:(value,item)=>(
  <Button style={{ textDecoration: "underline", color:"#000000", fontWeight:"bold" }} onClick={() => {
    setCurrent(item.candidate_id);
    setCandidate(true);
  }}>
    {value}
  </Button>
  )},
  {name:"company_name",data:(value,item)=>(
    < >
      {item.company.company}
    </>
    )},
  // {name:"projected_start_date",data:(value,item)=>(
  //  <>
  //  {item.schedule.projected_start_date}
  //  </>
  //   )}
  
  ]}
/>

 </Box>
 <Paginate count={count}  onChange={handlePageChange}/>
  </Box>
  

    </div>
  )
}


