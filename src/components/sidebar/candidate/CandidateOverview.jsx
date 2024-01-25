
import React, { useEffect } from "react";
import { Grid, IconButton } from '@mui/material';
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { Button, Box, Paper, Typography } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { HiDotsVertical } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import Divider from "@mui/material/Divider";
import AddAddress from "../../Candidate/AddAddress";
import AddAdditionalInfoo from "../../Candidate/AddAdditionalInfoo";
import AddCandidateOverview from "../../Candidate/AddCandidateOverview";
import AddCommunication from "../../Candidate/AddCommunication";
import AddCandidateAbout from "../../Candidate/AddCandidateAbout";
import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import apiClient from "../../../api/apiClient";

export default ({fetchData2,current})=>{
 let initialState={
  Interview:0,
  Submittal:0,
  Offer:0,
  Candidate_Accepted:0,
  Full_Placement:0,
 }
 //console.log(current,"curent overview");
    const[candidateInfo,SetCandidateInfo]=useState(false)
    const[candidateAddInfo,SetCandidateAddInfo]=useState(false)
    const[addMethod,setAddMethod]=useState(false)
    const[addLocation,SetAddLocation]=useState(false)
    const[About,SetAbout]=useState(false)
    const[address,SetAddress]=useState()
    const[data,setData]=useState()
    const[communication,setCommunication]=useState()
    const[matches,setMatches]=useState(initialState)
    const {userType:type}=useSelector(state=>state.auth)
    useEffect(() => {
      fetchdata()
      fetchData1()
    },[]);
    const fetchdata=()=>{
      const statusCount={}
      current?.matches?.map((item)=>{
    let status=item.status
   status= status.replace(" ","_")
    if(status in statusCount){
      console.log(statusCount,"2nd");
      statusCount[status]+=1
      //console.log(statusCount,"2nd");


    }else{
      statusCount[status]=1
    }
           }
           )
           console.log(statusCount)
           //console.log(statusCount,",................................................")
           setMatches({...matches,...statusCount})        
    }
    async function  fetchData1() {
      const result=await apiClient.get(`/CommunicationMethod/${current.id}/`)
            //console.log(result,"data")
            if(result.data.results)
            setData(result.data?.results)
    }
    return (
  <Box className="pb-3" component={Paper} sx={{ marginBottom: "20px", padding: "20px",bgcolor:"#F9F9FD" }}>
    {/* <div>
      <Button variant="contained" >Add new match</Button>
      </div> */}
      <Typography variant="h5" sx={{ marginBottom: "10px" }}>
      {/* Currently Working Matches */}
      </Typography>
      
      {/* <div className='mb-2 d-flex align-items-center gap-2'>
        <div>
        <div className='rounded-circle bg-white d-flex justify-content-center align-items-center' style={{height:"80px", width:"80px"}}>
          <div>
            <p className='text-center mb-0'>
              {matches.Submittal }
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
             {matches.Interview }
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
             {matches.Candidate_Accepted }
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
              {matches.Full_Placement}/2
            </p>
          <p className='fs_10 text-center'>
          Full Placement
          </p>
          </div>
        </div>
        </div>
      </div> */}
  
      <Box className="matches_box_bg  shadow">
        <div className='p-3 '>
          <h6>
          Candidate Details
          </h6>
        </div>
      </Box>
      
      <Box>
   
      <Grid container spacing={2}>
    <Grid item sm={12} md={6}>
    <Box component={Paper} > 
    <div className="py-4 d-flex justify-content-between px-2 matches_box_bg">
  
          <p className=' text-center fw-bold mb-0 '>
            Overview
          </p>
           { (type=="AG"||type=="CA")&& <HiDotsVertical onClick={() => SetCandidateInfo(true)}/>}
    </div>
          {/* <Button variant="outlined" >Add</Button> */}
         {candidateInfo&& <AddCandidateOverview fetchdata={fetchData2} current={current} show={candidateInfo} onHide={()=>SetCandidateInfo(false)}/>}
          <Box className="px-3">
          {/* <div className='px-4'>
          <p className='mb-0'>Status</p>
          <Button className='btn  fs_10 m-0' style={{backgroundColor:current.status?.color}} variant='contained'>{current.status?.title}</Button>
          </div> */}
          <Divider sx={{ m: 1 }} />
            <p className='fs_10'>
               First Name
            </p>
            <p className=''>
              {current.first_name}
            </p>
            <Divider sx={{ m: 1 }} />
            <p className='fs_10'>
            Middle Name
            </p>
            <p className=''>
            {current.middle_name}
            </p>
            <Divider sx={{ m: 1 }} />
            <p className='fs_10'>Last Name</p>
            <p className=''>
            {current.last_name}
            </p>
  
            <Divider sx={{ m: 1 }} />
            <p className='fs_10'>
            Date Of Birth
            </p>
            <p className=''>
           {current.dob}
            </p>
            <Divider sx={{ m: 1 }} />
            <div>
            <p className='fs_10'>Looking For</p>
            <div className='d-flex justify-content-between'>
            <p className='fs_10'>{current.looking_for}</p>
            </div>
            </div>
  
            <Divider sx={{ m: 1 }} />
            {/* <p className='fs_10'>Contractor Type</p>
            <p>Corp-to-Corp (F)</p> */}
            <Divider sx={{ m: 1 }} />
            <p className='fs_10'>Desired Annual Rate</p>
            <p>$ {current.target_annual_rate}</p>
            <Divider sx={{ m: 1 }} />
            <p className='fs_10'>Desired Hourly Rate</p>
            <p>$ {current.target_hourly_rate}</p>
            <Divider sx={{ m: 1 }} />
            <p className='fs_10'>Current Title</p>
            <p>{current.current_title}</p>
            <Divider sx={{ m: 1 }} />
            <p className='fs_10'>Available Date</p>
            <p>{current.available_date}</p>
            <Divider sx={{ m: 1 }} />
            <p className='fs_10'>Termination Date</p>
            <p>{current.termination_date}</p>
            <Divider sx={{ m: 1 }} />
            <p className='fs_10'>Termination Reason</p>
            <p>{current.termination_reason}</p>
            <Divider sx={{ m: 1 }} />
  
            
            </Box>
          </Box>

          <Box className="px-3" component={Paper} sx={{}} >
              <div className="py-4 d-flex justify-content-between px-2 ">
              <h6 className="text-center">
              About
              </h6>
           {(type=="AG"||type=="CA")&&    <HiDotsVertical onClick={() => SetAbout(true)}/>}
              </div>
              {About&&<AddCandidateAbout fetchdata={fetchData2} current={current} show={About} onHide={()=>SetAbout(false)}/>}
              <Divider sx={{ m: 1 }} />
              <p className='fs_10'>
              General Comments
              </p>
              <p>
                {current.general_comments}
              </p>
              <Divider sx={{ m: 1 }} />
              <p className=' fs_10'>
              Summary
              </p>
              <p>
               {current.summary}
              </p>
              <Divider sx={{ m: 1 }} />
  
            </Box>
  
            <Box component={Paper} sx={{}}  className='px-3'>
             
           {candidateAddInfo&&   <AddAdditionalInfoo fetchdata={fetchData2} current={current} show={candidateAddInfo} onHide={()=>SetCandidateAddInfo(false)}/>}
         
         
                <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                
              <h6 className="text-center">
              Additional Info
              </h6>
             {(type=="AG"||type=="CA")&&  <IconButton  aria-label="update Info" component="span" onClick={()=>{
               
                SetCandidateAddInfo(true)}}>
            <HiDotsVertical />
          </IconButton>}
              </Box>
              
              <Divider sx={{ m: 1 }} />
              {current.candidate_info?.map((item)=>( 
              <div>
              <p className='fs_10'>
              Lawson 3-4 ID
              </p>
              <p>
                {item.lawson_id}
              </p>
              <Divider sx={{ m: 1 }} />
              <p className='fs_10'>
              Lawson EIN
              </p>
              <p>
              {item.ein}
              </p>
              <Divider sx={{ m: 1 }} />
              <p className='fs_10'>
              Lawson 3/4 ID
              </p>
              <p>
              {item.lawson_id2}
              </p>
              <Divider sx={{ m: 1 }} />
              <p className='fs_10'>
              Previously Employed?
              </p>
              <p>
              {item.pe=="Y"?"Yes":"No"}
              </p>
              <Divider sx={{ m: 1 }} />
              <p className='fs_10'>
              Employee Type
              </p>
              <p>
              {item.et}
              </p>
              <Divider sx={{ m: 1 }} />
              <p className='fs_10'>
              FLSA
              </p>
              <p>
              {item.flsa}
              </p>
              <Divider sx={{ m: 1 }} />
              <p className='fs_10'>
              Visa Type?
              </p>
              <p>
              {item.vt}
              </p>
              <Divider sx={{ m: 1 }} />
              <p className='fs_10'>
              Visa Expiration
              </p>
              <p>
              {item.ve}
              </p>
              <Divider sx={{ m: 1 }} />
              <p className='fs_10'>
              External Reference ID
              </p>
              <p>
              {item.erid}
              </p>
              <Divider sx={{ m: 1 }} />
              <p className='fs_10'>
              NPI Number
              </p>
              <p>
              {item.npi}
              </p>
              <Divider sx={{ m: 1 }} />
              <p className='fs_10'>
              Professional License Number
              </p>
              <p>
              {item.pln}
              </p>
              <Divider sx={{ m: 1 }} />
              <p className='fs_10'>
              Professional License Expiration Date
              </p>
              <p>
              {item.plne}
              </p>
              <Divider sx={{ m: 1 }} />
              <p className='fs_10'>
              Hot Prospect
              </p>
              <p>
              {item.hp}
              </p>
              </div>
          
  ))}
            </Box>

    </Grid>
    <Grid item sm={12} md={6}>
  
          <Box>
  
            <Box component={Paper}>
        {addMethod&&    <AddCommunication fetchdata={fetchData1} item={communication} current={current} show={addMethod} onHide={()=>setAddMethod(false)}/>}
              <Box className="py-4 px-2 matches_box_bg" sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <h6 className=" text-center  ">
              Communication Methods
              </h6>
             {(type=="AG"||type=="CA") &&  <HiDotsVertical onClick={()=>{
            setCommunication()
              setAddMethod(true)}}/>}
              </Box>
          <Box   className='p-3'>
              <Divider sx={{ m: 1 }} />
              <div className="">
               
              {data?.map((item)=>(
                
                <>
               <div className="d-flex justify-content-between">
                <div className=" d-flex gap-2 align-items-center p-2">
                <AiFillStar size={10} className="mb-1"/>
                <p className='fs_10 mb-0'>
                {item.type}
                </p>
                </div>
                {(type=="AG"||type=="CA")&&  <HiDotsVertical onClick={()=>{
            setCommunication(item)
            setAddMethod(true)}}/>}
            </div>
                <p>
               {item.value}
                </p>
                <Divider sx={{ m: 1 }} />
                </>
              ))}
              </div>
              <div className="d-flex gap-2 align-items-center p-2">
              <AiFillStar size={10} className="mb-1"/>
              <p className='fs_10 mb-0'>
              Main Phone
              </p>
              </div>
              <p>
             {current.phone_number}
              </p>
              <Divider sx={{ m: 1 }} />
              <div className="d-flex gap-2 align-items-center p-2">
              <AiFillStar size={10} className="mb-1"/>
              <p className='fs_10 mb-0 '>
              Main Email
              </p>
              </div>
              <p>
              {current.email}
              </p>
              <Divider sx={{ m: 1 }} />
  
            </Box>
            </Box>
  {addLocation&&<AddAddress fetchdata={fetchData2} addresss={address} current={current} show={addLocation} onHide={()=>SetAddLocation(false)}/>}
          <Box component={Paper} sx={{ marginTop: 1 }}>
              <Box className=" matches_box_bg" sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <h6 className=" text-center  p-3">
              Location

              </h6>
            {(type=="AG"||type=="CA")&&   <HiDotsVertical onClick={()=>{  SetAddress("")
            SetAddLocation(true)}}/>}
             </Box>
             {current.candidate_address?.map(item=>( <Box className='p-3' sx={{ m: 1 }}>
              <div className=" p-2 d-flex justify-content-between">
              <p className='fs_10'>
              {item.type}
              </p>
              {(type=="AG"||type=="CA")&&   <HiDotsVertical  onClick={()=>{
                SetAddress(item)
                SetAddLocation(true)}}/>}
              </div>
              <p>
             {item.address_line_1+","+item.city+","+item.country+","+item.zip}
              </p>
            </Box>))}
            </Box>
  
            <Box component={Paper} sx={{ marginTop: 1 }}>
              <h6 className=" text-center matches_box_bg p-3">
             Tax Details
              </h6>
          <Box className='p-3' sx={{ m: 1 }}>
              <div className=" p-2">
              <p className='fs_10'>
              Tax Identification Number
              </p>
              </div>
              <p>
              {current?.tax_id?.slice(0, 2) + '-' + current?.tax_id?.slice(2)}
              </p>
            </Box>
            </Box>
  
            <Box component={Paper} sx={{ marginTop: 1 }}>
              <h6 className=" text-center matches_box_bg p-3">
              People
              </h6>
          <Box className='p-3' sx={{ m: 1 }}>
              <div className=" p-2">
              <p className='fs_10'>
              Candidate Owner
              </p>
              </div>
              <p>
              {current.owner}
              </p>
            </Box>
            </Box>
  
            {/* <Box component={Paper} sx={{ marginTop: 1 }}>
              <h6 className=" text-center matches_box_bg p-3">
              Sharing
              </h6>
          <Box className='p-3' sx={{ m: 1 }}>
              <div className=" p-2">
              <p className='fs_10'>
              Shared With
              </p>
              </div>
              <p>
             -
              </p>
            </Box>
            </Box> */}
  
          </Box>
    </Grid>
   
  </Grid>
         
      
    </Box>
  </Box>
  
    )
  }