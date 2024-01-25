import { TableMui } from "../components/mui";
import { AiOutlineSearch } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { Button, Paper, Typography, Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import apiClient from "../api/apiClient";
import useApi from "../hooks/useApi";
import { toast } from "react-toastify";
import PositionData from "../components/hp/PositionData";
import Paginate from "../components/Paginate";
import MyVerticallyCenteredModal from "../components/Position/MyVerticallyCenteredModal";
import EditPositionModal from "../components/Position/EditPositionModal";
import PositionSidebar from "../components/sidebar/PositionSidebar";
import getThemeColor from "../modules/getThemeColor";
import SearchHome from "../components/mui/SearchBar";
import PositionCsvModal from "../components/Position/PositionCsvModal";
import { Helmet } from "react-helmet";
import downloadFile from "../modules/downloadFile";
import DeleteConfirmation from "../components/core/DeleteConfirmation";
import { Modal } from "react-bootstrap";
import { TfiUpload } from "react-icons/tfi";
import { SettingsBrightnessRounded } from "@mui/icons-material";

export default ({ user }) => {
 
  const [bid, setBid] = useState([])
  
 
  const fetchBid=async()=>{
    
    const result =await apiClient.get("/bid")
    console.log(result)
    setBid(result?.data?.results)
  }
    useEffect(()=>{
      fetchBid()
    },[])
  return (
    <div className="">
    <Helmet>
        <title>
          Bids
        </title>
      </Helmet>
      {/* {show && <PositionSidebar values={{current,fetchAllPosition:fetchData, show, setShow }} />}
      */}
       
      <Box className="" component={Paper} sx={{ marginBottom: "20px", padding: "10px",  }}>

     
      <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px", }}>
        <Typography className="" color={"#00000"} variant="h5" sx={{ marginBottom: "10px" }}>
          Bids
        </Typography>

        <Box>
          <TableMui
          onSort={(field,direction)=>{
let value=direction=="asc"?field:"-"+field
           
          }}
            styleTableTh={{
              color: "#ffffff",
              fontWeight: "bold",
              whiteSpace: "nowrap",
            }}
            th={{
              name: "Bidder Name",
              email: "Bidder Email",
              bid_amount: "Bid Price",
             
              bid_status: "Status",
                   }}

           
                    
            td={bid}
            // link={"/admin/new-job-detail/"}

            customFields={[
              
              {
                name: "name",
                data: (value, item) => (
                  
                  <p>{item.bidderId.last_name+" "+item.bidderId.last_name}</p>
                  
                ),
              },
              {
                name: "email",
                data: (value, item) => (
                  
                  <p>{item.bidderId.email}</p>
                  
                ),
              },
             
             
              
              {
                name: "actions",
                data: (value, item) => (
                  <Box className="d-flex justify-content-center gap-3">
                    <Button
                      variant="contained"
                      color="info"
                      style={{ textDecoration: "none" }}
                     
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      style={{ textDecoration: "none" }}
                     
                    >
                      Delete
                    </Button>
                  </Box>
                ),
              },
              {
                name: "approved",
                data: (value, item) => (
                  <>
         <Button
                      variant="contained"
                      color="info"
                      style={{ textDecoration: "none" }}
                      onClick={() => {
                        // handleSwitchChange(item.id)
                      }}
                    >
                      Approve
                    </Button>
                   
                    </>
                ),
              },
            ]}
          />
        </Box>
       {/* <Paginate count={count} onChange={handlePageChange} /> */}
      </Box>
    </Box>
    </div>
  );
};

const ImportModal = ({show,onHide,fetchData}) => {
  const [files,setFiles]=useState()
    const handleSubmit=async(e)=>{
      e.preventDefault()
      let formdata=new FormData()
      formdata.append("file",files)
      const result=await apiClient.post("/PositionCSV/",formdata)
      if(!result.ok) return toast.error(result.data.message||"Error")
      toast.success(result.data.message)
      fetchData()
      onHide()
      // console.log(result);
    }
    const handleDownloadClick = () => {
      const csvUrl = process.env.REACT_APP_POSITION_CSV; 
      
      downloadFile(csvUrl)
    };
      return (
          <Modal 
          show={show}
             onHide={onHide}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              style={{ zIndex: "1300" }}>
          <Modal.Header closeButton>
            <Modal.Title>Import CSV</Modal.Title>
          </Modal.Header>
          <form onSubmit={handleSubmit}>
          <Modal.Body>
            <Grid container>
            <Grid item xs={12} className="d-flex justify-content-between">
              <p>Template file of candidate CSV</p>
              <Button variant="contained" onClick={handleDownloadClick}>Download Template</Button>
            </Grid>
              <Grid item xs={12}>
              <div className="d-flex justify-content-center align-items-center m-3 rounded" style={{height:'300px', borderStyle:"dotted" }}>
                    <div className="d-flex flex-column align-items-center gap-1">
                  <label htmlFor="import">
                  <div className='d-flex justify-content-center'>
                    <TfiUpload size={50}/>
                    </div>
                    <div className='d-flex justify-content-center mt-2'>
                    {files&& <p>{files.name}</p>}
                    {/* <button type="button" className="btn btn-outline-secondary">
                      Browse
                    </button> */}
                    </div>
                  </label>
                    </div>
                  </div>
              <input onChange={(e)=>setFiles(e.target.files[0])} hidden type="file" id="import" />
              </Grid>
            </Grid>
          </Modal.Body>
          <Modal.Footer>
            <div className=" d-flex gap-3">
            <Button variant="contained" onClick={onHide}>
              Cancel
            </Button>
            <Button variant="contained"  type="submit">
              Submit
            </Button>
            </div>
          </Modal.Footer>
            </form>
        </Modal>
      )
  }
