import React, { useEffect } from "react";
import { useState } from "react";
import TableMui from "../components/mui/TableMui";
import { AiOutlineSearch } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { Button, Box, Paper, Typography, Chip, Grid } from "@mui/material";
import useApi from "../hooks/useApi";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";
import Paginate from "../components/Paginate";
import StatusCheck from "./StatusCheck";
import SideBarCandidate from "../components/sidebar/SideBarCandidate";
import MyVerticallyCenteredModal from "../components/Candidate/MyVerticallyCenteredModal";
import CandidateEditModal from "../components/Candidate/CandidateEditModal";
import { useOutletContext } from "react-router-dom";
import getThemeColor from '../modules/getThemeColor';
import SearchHome from "../components/mui/SearchBar";
import { Helmet } from "react-helmet";
import downloadFile from "../modules/downloadFile";
import DeleteConfirmation from "../components/core/DeleteConfirmation";
import { Modal } from "react-bootstrap";
import { TfiUpload } from "react-icons/tfi";
export default ({user}) => {
 
  const {type}=useOutletContext()
  const [modalShow, setModalShow] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [imporShow, setImportShow] = useState(false);
  const [current, setCurrent] = useState();
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const [filter,setFilter]=useState({id:""});
  const [search,setSearch]=useState("");
  const [keyword,setKeyword]=useState("");
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchData();
  }, [filter,search]);

  const { request, data, loading } = useApi((route) =>
    apiClient.get(route)
  );
 async function getFileLink(){
  const result=await apiClient.get("/CandidateExport/")
  if(result.ok)
  downloadFile(result.data.FileUrl)
 }
 const [sortBy,setSortBy]=useState()
  async function fetchData(page = 1) {

    if(page==1&&count)
    setCount(0)
    const result = await request(`/candidates/?page=${page}&status=${filter?.id}&${keyword||"search"}=${search}&ordering=${sortBy}`);
    if (!result.ok) return;
    //console.log(result);
    if (!count||page==1) setCount(result.data.count);
  }
  const handlePageChange = (event, value) => {
    fetchData(value);
  };

  async function handleDelete(id) {
    const result = await apiClient.delete("/candidates/" + id);
    if (!result.ok) return toast.error("Failed to Delete");
    toast.success("Deleted");
    fetchData();
    setCount(0);
    setDeleteModal(false)
  }
  useEffect(()=>{
    //console.log(sortBy);
        fetchData()
      },[sortBy])
      const handleChange=async(value)=>{
        // console.log(value);
        let formdata=new FormData()
        formdata.append("file",value)
        const result=await apiClient.post("/CandidateBulkCreate/",formdata)
        if(!result.ok) return toast.error("Error")
        // console.log(result);
      }

  return (
    <div>
      <Helmet>
        <title>
          User
        </title>
      </Helmet>
     
     <Box className="" component={Paper} sx={{ marginBottom: "20px", padding: "20px",  }}>

      <Box className="" component={Paper} sx={{ marginBottom: "20px", padding: "20px", bgcolor:getThemeColor(type,"secondary")}}>
    <Typography variant="h5" sx={{ marginBottom: "10px" , color:"#00000"}}>
    Users
    </Typography>

     <Box >
 
     <TableMui
      onSort={(field,direction)=>{
        let value=direction=="asc"?field:"-"+field
                    setSortBy(value)
                  }}
        styleTableTh={{
          color: "#ffffff",
          fontWeight: "bold",
          whiteSpace: "nowrap",
          // bgcolor:getThemeColor(type,"primary")
        }}
        th={{
          first_name: "Name",
          // status: "Status",
          // current_title: "Title",
          email: "Email",
          phone_number:"Phone Number",
          available_date:"CNIC Number",
          location: "Location",
           actions: "Actions" 
             
        }}
        td={ data}
        // link={"/admin/new-job-detail/"}
        btnName="Detail"
        customFields={[
          // {
          //   name: "status",
          //   data: (value,item) => (
          //    <Chip size="small" sx={{backgroundColor:value.color}} label={value.title} />
          //   ),
          // },
          {
            name: "first_name",
            data: (value,item) => (
              <Button
                style={{ textDecoration: "underline", color:"#000000", fontWeight:"bold" }}
                onClick={
                        ()=>{
                          setCurrent(item.id)
                          setShow(true)
                        }

                }
                title={value}
              >
                {value}
              </Button>
            ),
          },
          {
            name: "location",
            data: (value,item) => (
              
                
                item.candidate_address[0].address_line_1+","+item.candidate_address[0].city+","+item.candidate_address[0].state
             
            ),
          },
   
          {
            name: "country",
            data: (value,item) => (
              
                
                item.candidate_address[0].country
             
            ),
          },
   
          {
            name: "actions",
            data: (value,item) => (
              <Box  className="d-flex justify-content-center gap-3">
<Button
              variant="contained" 
              color="info"
                style={{ textDecoration: "none" }}
                onClick={
                        ()=>{
                          setCurrent(item)
                          setEditShow(true)
                        }

                }
              >
              Edit
              </Button>
<Button
              variant="contained" 
              color="error"
                style={{ textDecoration: "none" }}
                onClick={
                        ()=>{
                          setCurrent(item)
                          setDeleteModal(true)
                        }

                }
              >
              Delete
              </Button>
</Box>
         
            ),
          },
          
        ]}
      />
 </Box>
 <Paginate style={{ color: "white" }} count={count}  onChange={handlePageChange}/>
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
    const result=await apiClient.post("/CandidateBulkCreate/",formdata)
    if(!result.ok) return toast.error(result.data.message||"Error")
    toast.success(result.data.message)
    fetchData()
    onHide()
    // console.log(result);
  }
  const handleDownloadClick = () => {
    const csvUrl = process.env.REACT_APP_CANDIDATE_CSV; 
    
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
            <label htmlFor="import" className="d-flex justify-content-center align-items-center m-3 rounded" style={{height:'300px', borderStyle:"dotted" }}>
                    <div className="d-flex flex-column align-items-center gap-1">
                  
                  <div className='d-flex justify-content-center'>
                    <TfiUpload size={50}/>
                    </div>
                    <div className='d-flex justify-content-center mt-2'>
                    {files&& <p>{files.name}</p>}
                    {/* <button type="button" className="btn btn-outline-secondary">
                      Browse
                    </button> */}
                    </div>
              
                    </div>
                  </label>
            <input onChange={(e)=>setFiles(e.target.files[0])}  hidden type="file" id="import" />
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