
import React, { useState } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import TableMui from "../../mui/TableMui";
import { AiOutlineSearch } from "react-icons/ai";
import AddCredential from "./AddCredential";


export default  ({current}) => {
  const [show,setShow]=useState(false)
  
  
    return (
      
      <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
        <Typography variant="h5" sx={{ marginBottom: "10px" }}>
          {/* Currently Working Matches */}
        </Typography>
        <div className="mb-2" style={{display:"flex" ,justifyContent:"space-between"}}>
        <div className='col-md-5 ' >
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
                placeholder="Search by name"
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
            </div> */}
            
            </div>
              <button className="btn btn_bg" onClick={()=>setShow(true)} variant="contained">Add Credential</button>
      </div>

  
      <AddCredential current={current} show={show} onHide={()=>setShow(false)}/>
        <Box>
          <TableMui
            styleTableTh={{
              color: "#ffffff",
              fontWeight: "bold",
              whiteSpace: "nowrap",
            }}
            th={{
              name: "Name",
              credential_type: "Type",
              status: "status",
              effective_date: "Effective Date",
              expiration_date: "Exp. Date",
              rejection_reason: "Rejection Reason",
              state: "state",
              required_for_placement: "Required for Placement",
            
            }}
            td={current?.credential}
          />
        </Box>
      </Box>
    );
  };