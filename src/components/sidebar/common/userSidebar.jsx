import { Drawer,} from "@mui/material";
import { useEffect, useState } from "react";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { Typography } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { BsArrowsFullscreen } from "react-icons/bs";
import { toast } from "react-toastify";

import { useSelector } from "react-redux";
import Skeletons from "../../mui/Skeletons";
import useApi from "../../../hooks/useApi";
import apiClient from "../../../api/apiClient";
export default function({ values }) {
 
    const { current:id, show, setShow } = values;
    const [current,setCurrent]=useState()
    //console.log(id,"curerrenrenrnert");
    const [full, setFull] = useState(false);
    const [showAddMatch, setShowAddMatch] = useState(false);
    const [loading, setLoading] = useState(false);
    const {userType:type}=useSelector(state=>state.auth)
  const {request,error}=useApi(()=>apiClient.get(`/user/${id}/`))
  useEffect(()=>{
    fetchData()
  },[id])
  async function fetchData(){
    setLoading(true)
      const result =await request()
      setLoading(false)
      if(!result.ok) return toast.error("Failed to Fetch Data")
 setCurrent(result.data)

  }
    return (
      <Drawer
        anchor={"right"}
        sx={{
          display: { md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            mt: "65px",
            width: {
              xs: full ? "100%" : "80%",
              md: full ? window.innerWidth - 240 : "60%",
            },
            zIndex: { md: 1100, xs: 1200 },
          },
        }}
        open={show}
        onClose={() => setShow(false)}
      >
        {!current?<Skeletons />:
        <>
        <div className="d-flex  align-items-center p-2">
          <RxCross2 size={35} onClick={() => setShow(false)} />
          <BsArrowsFullscreen size={25} onClick={() => setFull(!full)} />
        </div>
  
          <div className='d-flex justify-content-between px-2'>
          <Typography variant='h5' sx={{mt:3}}>
        {/* {current.candidate_address.name} */}
          </Typography>
        
        
       
        </div>
  
      
          </>
          }
      </Drawer>
    );
  }