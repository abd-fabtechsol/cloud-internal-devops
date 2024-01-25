
import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect } from "react";
import { useState } from "react";
import { TableMui } from "../../mui";
import apiClient from "../../../api/apiClient";

export default ()=>{
    const[data,setData]=useState()
    async function fetchCandidateData(){
       
         const result=await apiClient.get(`/candidates `)
         if(!result.ok) return
         setData(result?.data?.results[0].timesheets)
        
         }

         useEffect(() => {
            fetchCandidateData()
          }, [])   
  
  
    return (
  <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
      <Typography variant="h5" sx={{ marginBottom: "10px" }}>
      {/* Currently Working Matches */}
      </Typography>
      <div className='col-md-7'>
      {/* <div class="input-group mb-3">
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
                placeholder="Search by ID"
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
            </div> */}
      </div>
  
       <Box>
       <TableMui
    styleTableTh={{color:"#ffffff", fontWeight: "bold", whiteSpace: "nowrap" }}
  th={{
    id:"Timesheet",
    match: "Match",
    position_name: "Position",
    candidate_name: "Candidate",
    shift_pay_period:"Shift Pay Period",
    facility:"Facility",
shift_date:"Shift Date",
punch_in:"Punch In",
punch_out:"Punch Out",
total_hours:"Total Hours",
trans_type:"Transaction Type",
bill_rate:"Bill Rate",
total_billed:"Total Billed",
status_date:"Status Date",
last_time_status:"Last Time Status",
rejection:"Rejection",
ap_hold:"Ap Hold",
sent_to_ap_hold:"Sent To Ap Hold",
check_number:"Check Number",
epcf:"ePCF",
  }
  
  }
  td={data}
  
  />
  
   </Box>
  
    </Box>
    )
  }