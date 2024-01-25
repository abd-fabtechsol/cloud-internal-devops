
import { FaPlus } from "react-icons/fa";
import { Typography, Drawer } from '@mui/material';
import { useEffect, useState } from 'react';
import TabBars from '../mui/TabBars';
import MyVerticallyInsideDrawer from '../Position/MyVericallyInsideDrawer';
import PositionOverview from "./position/PositionOverview";
import Matches from "./common/Matches";
import PositionAttachments from "./position/PositionAttachments";
import PositionNotes from "./position/PositionNotes";
import Credentials from "./common/Credentials";
import { RxCross2 } from "react-icons/rx";
import { BsArrowsFullscreen } from "react-icons/bs";
import { useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import apiClient from "../../api/apiClient";
import useApi from "../../hooks/useApi";
import Skeletons from "../mui/Skeletons";
import { useSelector } from "react-redux";
import { processErrors } from "../../modules/handleErrors";

export default ({ values })=> {
 
    const { current:id, show, setShow,fetchAllPosition } = values;
    const [current,setCurrent]=useState()
    const [full, setFull] = useState(false);
    const [showAddMatch, setShowAddMatch] = useState(false);
    const [loading, setLoading] = useState(false);
    const {userType:type}=useSelector(state=>state.auth)
  const {request,error}=useApi(()=>apiClient.get(`/positions/${id}/`))
  useEffect(()=>{ 
    fetchData()
  },[])
  async function fetchData(){
    setLoading(true)
      const result =await request()
      setLoading(false)
      if(!result.ok) return processErrors(result.data)
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
        {loading?<Skeletons/>:
        <>
         <div className="d-flex  align-items-center p-2">
          <RxCross2 size={35} onClick={() => setShow(false)} />
          <BsArrowsFullscreen size={25} onClick={() => setFull(!full)} />
        </div>
          <div style={{maxWidth:"100%",overflowX:"hidden"}}>
        <div className='d-flex justify-content-between px-2'>
          <Typography variant='h5' sx={{mt:3}}>
        {current?.title}
          </Typography>
        <div>
              {type=="AG"&&current?.status=="Open"&&<button className="btn btn_bg" onClick={() => setShowAddMatch(true)}>
                New Match
                <FaPlus className="ps-1" />
              </button>}
             {showAddMatch&& <MyVerticallyInsideDrawer values={{current,fetchData,fetchAllPosition,show,onHide:()=>setShowAddMatch(false),hideSideBar:()=>setShow(false)}} />}
          </div>
        
       
        </div>
      
        <TabBars
          Titles={[
            "Overview",
            // "CREDENTIALS",
            "MATCHES",
            // "ATTACHMENTS",
            // "Notes",
          ]}
          Contents={[<PositionOverview fetchData={fetchData} current={current}/>, 
          // <Credentials current={current}/>,
           <Matches current={current} fetchData={fetchData}/>,
            // <PositionAttachments current={current}/>,
            // <PositionNotes current={current}/>
          ]}
        />
          </div>
          </>}
      </Drawer>
    );
  }