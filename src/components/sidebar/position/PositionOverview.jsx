import{BsThreeDots } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import { Button, Paper, Typography, Box, Grid } from '@mui/material';
import { AiFillStar } from "react-icons/ai";
import Divider from "@mui/material/Divider";
import { useEffect, useState } from "react";
import ModalType from "../../Position/ModalType";
import ScheduleModal from "../../Position/ScheduleModal";
import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";

const headers = ['Type','Rate']
const fields = ['type','value']
export default ({fetchData,current})=>{
  let initialState={
    Interview:0,
    Submittal:0,
    Offer:0,
    Candidate_Accepted:0,
    Full_Placement:0,
   }
   const {userType:type}=useSelector(state=>state.auth)
  const[rates,setRates]=useState(false);
  const[schedule, setSchedule]=useState(false);
  const[matches,setMatches]=useState(initialState)
  useEffect(() => {
    fetchdata()
  },[]);
  const fetchdata=()=>{
    const statusCount={}
    current?.matches?.map((item)=>{
  let status=item.status
 status= status.replace(" ","_")
//  console.log(status);
  if(status in statusCount){
    statusCount[status]+=1

  }else{
    statusCount[status]=1
  }
         }
         )
        //  console.log(statusCount,",................................................")
         setMatches({...matches,...statusCount})        
  }
  if(current)
    return (
      <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px", bgcolor:"#F9F9FD" }}>
        {/* <div>
          <Button variant="contained" >Add new match</Button>
          </div> */}
          <Typography variant="h5" sx={{ marginBottom: "10px" }}>
          {/* Currently Working Matches */}
          </Typography>
          <div className='mb-2 d-flex align-items-center gap-2'>
            <div>
            <div className='rounded-circle bg-white d-flex justify-content-center align-items-center' style={{height:"80px", width:"80px"}}>
              <div>
                <p className='text-center mb-0'>
                  {matches.Submittal}
                </p>
              <p className='fs_10 text-center'>
              Submittals
              </p>
              </div>
            </div>
            </div>
            <div>
            <BsThreeDots/>
            </div>
      
            <div>
            <div className='rounded-circle bg-white d-flex justify-content-center align-items-center' style={{height:"80px", width:"80px"}}>
              <div>
                <p className='text-center mb-0'>
                  {matches.Interview}
                </p>
              <p className='fs_10 text-center'>
              Interview
              </p>
              </div>
            </div>
            </div>
            <div>
            <BsThreeDots/>
            </div>
      
            <div>
            <div className='rounded-circle bg-white d-flex justify-content-center align-items-center' style={{height:"80px", width:"80px"}}>
              <div>
                <p className='text-center mb-0'>
                 {matches.Offer}
                </p>
              <p className='fs_10 text-center'>
              Offers
              </p>
              </div>
            </div>
            </div>
            <div>
            <BsThreeDots/>
            </div>
      
            <div>
            <div className='rounded-circle bg-white d-flex justify-content-center align-items-center' style={{height:"80px", width:"80px"}}>
              <div>
                <p className='text-center mb-0'>
                 {matches.Candidate_Accepted}
                </p>
              <p className='fs_10 text-center'>
              Candidate Accepted
              </p>
              </div>
            </div>
            </div>
            <div>
            <BsThreeDots/>
            </div>
      
            <div>
            <div className='rounded-circle bg-white d-flex justify-content-center align-items-center' style={{height:"100px", width:"100px"}}>
              <div>
                <p className='text-center mb-0'>
                  {matches.Full_Placement}/ {current?.no_of_positions}
                </p>
              <p className='fs_10 text-center'>
              Full Placement
              </p>
              </div>
            </div>
            </div>
          </div>
      
          <Box className="matches_box_bg  shadow">
            <div className='p-3 '>
              <h6>
              Position Details
              </h6>
            </div>
          </Box>
      
          <Box>
          <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
        <Box component={Paper} > 
              <p className='py-4 text-center fw-bold  matches_box_bg'>
                Overview
              </p>
              <Box className="px-3">
              <div className='px-4'>
              <p className='mb-0'>Status</p>
              <Button className='btn btn_bg fs_10 m-0' variant='contained'>{current?.status}</Button>
              </div>
              <Divider sx={{ m: 1 }} />
                <p className='fs_10'>
                No. of Positions  
                </p>
                <p className=''>
               {current?.no_of_positions}
                </p>
                <Divider sx={{ m: 1 }} />
                <p className='fs_10 fw-bold'>
                Position Description
                </p>
                <p className='fs_10 '>
                {current?.description}
               </p>
                <Divider sx={{ m: 1 }} />
                <p className='fs_10'>Position Title</p>
                <p className=' fs_10 fw-bold'>
                {current?.title}
                </p>
      
                <Divider sx={{ m: 1 }} />
                <p className='fs_10'>
                Position Type
                </p>
                <p className='fs_10 fw-bold'>
                {current?.type}
                </p>
                <Divider sx={{ m: 1 }} />
                <p className='fs_10'>Position Request Reason</p>
                <p>{current?.request_reason}</p>
                <Divider sx={{ m: 1 }} />
                <p className='fs_10'>Submittal Limit</p>
                <p>{current?.submittal_limit}</p>
                <Divider sx={{ m: 1 }} />
                <p className='fs_10'>Remaining Submittals</p>
                <p>-</p>
                <Divider sx={{ m: 1 }} />
                <p className='fs_10'>General Comments</p>
                <p>{current?.general_comments}</p>
                <Divider sx={{ m: 1 }} />
                <p className='fs_10'>Specialty</p>
                <p className='fs_10 fw-bold'>{current?.speciality}</p>
                <Divider sx={{ m: 1 }} />
      
                
                </Box>
              </Box>
              <Box component={Paper}>
                <div className="py-4 d-flex justify-content-between px-2 matches_box_bg">
                    <p className=' text-center fw-bold mb-0 '>
                    Schedule
                    </p>
                    {/* {type=="HO"&&current?.status!=="Closed"&&<HiDotsVertical onClick={() => setSchedule(true)}/>} */}
                </div>
                {schedule &&<ScheduleModal current={current} show={schedule} onHide={()=>setSchedule(false)}/>}
              
                          <Box className='px-3 '>
                            <Divider sx={{ m: 1 }} />
                            <p className='fs_10'>
                            Years Experience
                            </p>
                            <p>
                            {current?.schedule?.experience}
                            </p>
                            <Divider sx={{ m: 1 }} />
                            <p className='fs_10'>
                            Duration
                            </p>
                            <p className='fs_10 fw-bold'>
                            {current?.schedule?.duration}
                            </p>
                            <Divider sx={{ m: 1 }} />
                            <p className='fs_10'>
                            Projected Start Date
                            </p>
                            <p className='fs_10 fw-bold'>
                            {current?.schedule?.projected_start_date}
                            </p>
                            <Divider sx={{ m: 1 }} />
                            <p className='fs_10'>
                            Projected End Date
                            </p>
                            <p className='fs_10 fw-bold'>
                            {current?.schedule?.projected_end_date}
                            </p>
                            <Divider sx={{ m: 1 }} />
                            <p className='fs_10'>
                            Shift Types
                            </p>
                            <p className='fs_10 fw-bold'>
                            {current?.schedule?.shift_type}
                            </p>
                            <Divider sx={{ m: 1 }} />
                            <p className='fs_10'>
                            Start Time
                            </p>
                            <p className='fs_10 fw-bold'>
                            {current?.schedule?.start_time
                            
                            }
                            </p>
                            <Divider sx={{ m: 1 }} />
                            <p className='fs_10'>
                            End Time
                            </p>
                            <p className='fs_10 fw-bold'>
                            {current?.schedule?.end_time}
                            </p>
                            <Divider sx={{ m: 1 }} />
      
                          </Box>
                </Box>
        </Grid>
        <Grid item sm={12} md={6}>
      
              <Box  >
                <Box component={Paper}>
                  <h6 className=" text-center matches_box_bg p-3">
                  Location
                  </h6>
              <Box   className='p-3'>
                  <Divider sx={{ m: 1 }} />
                  <div className="d-flex gap-1 align-items-center p-2">
                  <AiFillStar size={10}/>
                  <p className='fs_10 mb-0'>
                  Worksite
                  </p>
                  </div>
                  <p className='fs_10 fw-bold '> 
                  {current?.company?.address+","+current?.company?.state}
                  {/* 1701 S Creasy Lane, Lafayette, IN 47905 */}
                  </p>
                  {/* <p className='fs_10'>
                  Franciscan Health Lafayette East
                  </p> */}
                  <Divider sx={{ m: 1 }} />
                </Box>
                </Box>
      
      
              </Box>
            <Box sx={{marginTop:1}} >
                <Box component={Paper}>
                  <div className="py-4 d-flex justify-content-between px-2 matches_box_bg">
                         <p className=' text-center fw-bold mb-0 '>
                                 Rates Overview
                         </p>
                        { type=="HO"&& current?.status!=="Closed"&&  <HiDotsVertical onClick={() => setRates(true)}/>}
                </div>
               {rates&& <ModalType fetchDataSide={fetchData} current={current} show={rates} onHide={()=>setRates(false)}/>}
              <Box sx={{p:4}} className=''>
                <Box className=' border p-2 rounded'>
                  <Divider sx={{ m: 1 }} />
                  <div className=" table-responsive ">
              <table className=" table table-hover">
                <thead className="  text-white">
                  <tr className id="table-color">
                    {headers.map(item => (
                      <th className=" white_space">
                        <p className="mb-0 white_space">{item}</p>
                      </th>
                    ))}

                  </tr>
                </thead>
                <tbody>
                  {current?.rates?.map(item => (

                    <tr className=" " id="table-color">
                      {fields.map(field =>{
if(field=="type")
return <> <td >{item.title}</td></>
                      return(
                        <td >
                          {field == "value" &&<p>{item?.value}</p>}
                          
                        </td>
                      )
                      })}
                    </tr>
                  ))}


                </tbody>
              </table>
            </div>
                  {/* {current?.rates.map((rate)=>
                  <div className="">
                    <p className='fs_10 mb-0'>
                    {rate.name+":"+ rate.value}
                    </p>
                  </div>)} */}
                  <Divider sx={{ m: 1 }} />
                </Box>
                </Box>
                </Box>
      
      
              </Box>
      
              <Box sx={{marginTop:1}} >
                <Box component={Paper}>
                  <h6 className=" text-center matches_box_bg p-3">
                  People
                  </h6>
              <Box className='p-2'>
                  <Divider sx={{ m: 1 }} />
                  <div className="">
                    <p className='fs_10 mb-0'>
                    Reports To
                    </p>
                  </div>
                  <p className='fs_10 fw-bold mb-0'>
                  {current.report_to}
                  </p>
                  <Divider sx={{ m: 1 }} />
                  <p className='fs_10 mb-0'>
                  Working Position Owner
                  </p>
                  <p className='fs_10 fw-bold mb-0'>
                  {current.working_position_owner}
                  </p>
                </Box>
                </Box>
              </Box>
      
              <Box sx={{marginTop:1}} >
                <Box component={Paper}>
                  <h6 className=" text-center matches_box_bg p-3">
                  Additional Info
                  </h6>
              <Box className='p-2'>
                  <Divider sx={{ m: 1 }} />
                  <div className="">
                    <p className='fs_10 mb-0'>
                    VP/Field CIO
                    </p>
                  </div>
                  <p className='fs_10 fw-bold mb-0'>
                    {current?.cio}
                  </p>
                  <Divider sx={{ m: 1 }} />
                  <p className='fs_10 mb-0'>
                  Auto-Offer?
                  </p>
                  <p className='fs_10 fw-bold mb-0'>
                  {current?.auto_offer?"Yes":"No"}
                  </p>
                </Box>
                </Box>
              </Box>
        </Grid>
       
      </Grid>
             
          
        </Box>
      </Box>
      
        )
}