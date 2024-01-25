import React, { useState } from "react";
import TableMui from "../../mui/TableMui";
import { AiOutlineSearch } from "react-icons/ai";
import { Box, Paper, Typography,Button } from "@mui/material";
import useApi from "../../../hooks/useApi";
import apiClient from "../../../api/apiClient";
import { toast } from "react-toastify";
import { type } from "@testing-library/user-event/dist/type";
import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import SideBarCandidate from "../SideBarCandidate";
import PositionSidebar from "../PositionSidebar";


export default ({current,fetchData}) => {
  const {userType:type}=useSelector(state=>state.auth)
  const {request,error,loading}=useApi((data,id)=>apiClient.patch(`/matches/${id}/`,data))
  const [position, setPosition] = useState(false)
  const [candidate, setCandidate] = useState(false)
    const[current1,setCurrent1]=useState()
  async function handleSubmit(value,id){
      const result =await request({status:value},id)
      //console.log(result);
      if(!result.ok) return toast.error("Failed to Update Status")
      toast.success("Updated")
      fetchData()
  }
 
    return (
      <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
        <Typography variant="h5" sx={{ marginBottom: "10px" }}>
          {/* Currently Working Matches */}
        </Typography>
  
        {/* <div className='col-md-7'>
      <div class="input-group mb-3">
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon1"
              >
                <AiOutlineSearch />
              </button>
              <input
                type="search"
                class="form-control"
                placeholder="Search by match ID or candidate name"
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
            </div>
      </div> */}
    {candidate && <SideBarCandidate values={{ current:current1, show: candidate, setShow: setCandidate }} />}
      {position && <PositionSidebar values={{ current:current1, show: position, setShow: setPosition }} />}
       <Box>
       <TableMui
    styleTableTh={{color:"#ffffff", fontWeight: "bold", whiteSpace: "nowrap" }}
  th={{
    candidate_name: "Candidate",
    position_title: "Position",
    position_type: "Position Type",
    projected_start_date: "Start Date",
    projected_end_date: "End Date",
    status: "Status",
    action: "Action",
  }
  
  }
  td={current?.matches}
  customFields={[
    {
      name: "status",
      data: (value, item) => {
       return (
        <>{value}</>
       )

      }
    },
    {
      name: "candidate_name",
      data: (value,item) => (
        <Button
          style={{ textDecoration: "underline", color:"#000000", fontWeight:"bold" }}
          onClick={() => {
            setCurrent1(item.candidate);
            setCandidate(true);
          }}
          title={value}
        >
          {value}
        </Button>
      ),
    },
    {
      name: "position_title",
      data: (value,item) => (
        <Button
          style={{ textDecoration: "underline", color:"#000000", fontWeight:"bold" }}
          onClick={() => {
            setCurrent1(item.position);
            setPosition(true);
          }}
          title={value}
        >
          {value}
        </Button>
      ),
    },
    {
      name: "action",
      data: (value, item) => {
        if(current?.status=="Placement Reached")
        return
        if(type=="HO")
        switch(item.status){
          case "Submittal" :
          case "Rejected":
            return(

           <Box className="d-flex justify-content-center gap-3">
                    <Button
                      variant="contained"
                      color="info"
                      style={{ textDecoration: "none" }}
                      onClick={() => {
                        handleSubmit("IN",item.id)
                       }}
                    >
                      Interview
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      style={{ textDecoration: "none" }}
                      onClick={() => {
                        handleSubmit("RE",item.id)
                       }}
                    >
                      Reject
                    </Button>
                  </Box>
        
           
            
          )
          case "Interview":
            case "Offer":
            return(
              <Box className="d-flex justify-content-center gap-3">
              <Button
                variant="contained"
                color="info"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  handleSubmit("OF",item.id)
                 }}
              >
              Offer
              </Button>
              <Button
                      variant="contained"
                      color="error"
                      style={{ textDecoration: "none" }}
                      onClick={() => {
                        handleSubmit("RE",item.id)
                       }}
                    >
                      Reject
                    </Button>
              
              
            
            </Box>
            
          )
          
          case "Candidate Accepted":
           return(
              <Box className="d-flex justify-content-center gap-3">
              <Button
                variant="contained"
                color="success"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  handleSubmit("FP",item.id)
                 }}
              >
              Full Placement
              </Button>
            
            </Box>
            
          )
        }
        else if((type=="AG" || type=="CA")&&item.status=="Offer")
        return(
          <Box className=" d-flex  gap-3">
            
          <Button
            variant="contained"
            color="success"
            style={{ textDecoration: "none" }}
            onClick={() => {
              handleSubmit("CA",item.id)
             }}
          >
          Accept Offer
          </Button>
        
        </Box>
        
      )

      }
    },
  
  ]}
  />
  
   </Box>
  
    </Box>
    )
  }