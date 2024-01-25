import React,{useState} from 'react'
import {Button, Box, Drawer, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Typography, IconButton } from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import apiClient from '../../../api/apiClient';
import { TfiUpload } from 'react-icons/tfi';
import { TableMui } from '../../mui';
import { LoadingOverlaySmall } from '../../mui/LoadingOverlay';
import useApi from '../../../hooks/useApi';
import CaptchaButton from '../../mui/CaptchaButton';
import colors from '../../../config/colors';
import DownloadIcon from '@mui/icons-material/Download';
const EmployeeAttachments=( {current})=>{
    const data=[  {    "name": "Driver's License",    "status": "Active",    "effective_date": "2022-01-01",    "exp_date": "2027-12-31",    "states": "California"  },  {    "name": "CPR Certification",    "status": "Expired",    "effective_date": "2019-05-01",    "exp_date": "2022-04-30",    "states": "Multiple States"  }]
  const [uplaod,setUpload]=useState(false)

  //console.log(current)
    return (
  <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
    <AddAttach current={current} onHide={(()=>setUpload(false)) } show={uplaod}/>
      <Typography variant="h5" sx={{ marginBottom: "10px" }}>
      {/* Currently Working Matches */}
      </Typography>
      <div className="row "  style={{display:"flex", justifyContent:"space-between",alignContent:"center"}}>
      {/* <div className='col-md-4'>
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
                placeholder="Search by Name"
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
            </div>
      </div> */}
      <div className="col-md-12 " style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
      <div className="">
        <p className='fw-bold' htmlFor="">
          Select Attachment to upload
        </p>
      <Button color="primary" variant="outlined" sx={{fontSize:"12px",}} onClick={()=>setUpload(true)}>Upload file <span><i class="bi bi-arrow-bar-up"></i></span></Button>
      </div>
    {current?.candidate_attachments[0]?.attachments && <div className="">
    <p className='fw-bold' htmlFor="">
          Download Attachment
    </p>
      <Button  
      

      onClick={() => {
        for (const item of current?.candidate_attachments) {
          
        
        const fileUrl = item.attachments;
        const fileName = fileUrl.substring(fileUrl.lastIndexOf('/') + 1);
        const extension = fileName.split('.').pop();
      
        fetch(fileUrl, {
          method: 'GET',
          headers: {
            'Content-Type': `application/${extension}`,
          },
        })
        .then((response) => response.blob())
        .then((blob) => {
          // Create blob link to download
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', fileName);
      
          // Append to html link element page
          document.body.appendChild(link);
      
          // Start download
          link.click();
      
          // Clean up and remove the link
          link.parentNode.removeChild(link);
        });
      }}}
       color="primary" variant="contained"  sx={{fontSize:"12px"}}>
        Download file <span><i class="bi bi-arrow-bar-down"></i></span></Button>
      </div>}
      </div>
      </div>
      <div>
        {current?.candidate_attachments?.map((item)=>{
       
         return (
          <></>
        //  <ItemTable item={item}/>
         )
         } )}
      </div>
      
       {/* <Box>
       <TableMui
          styleTableTh={{color:"#ffffff", fontWeight: "bold", whiteSpace: "nowrap" }}
        th={{
          "name": "Name",
          "status": "Status",
          "effective_date": "Effective Date",
          "exp_date": "Exp. Date",
          "states": "States"
        }
        
        }
        td={data}
  
    />
  
   </Box> */}
  
    </Box>
    )
  }
  export default EmployeeAttachments
  function AddAttach({ current,show,onHide}){
  
    const[file,setFile]=useState({})
    const handleChange=(key,value)=>{
      setFile({...file,[key]:value})
    }
    const {request,error,loading}=useApi((data)=>apiClient.post(`/CandidateAttachment/${current.id}/`,data))
  
    const handleSubmit=async(e)=>{

  e.preventDefault();
  let formdata=new FormData()
  formdata.append("resume",file.resume)
  for (const item of file.attachments) {
    formdata.append("attachments",item)
  }
  //console.log("post")
  // const result =await request(formdata)
  // if(!result.ok) return toast.error("error");
  
   toast.success("Attachment successfull submitted");
  //console.log(result);
  onHide()
    }
    return(
      <Modal
      show={show}
      onHide={onHide}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          
          style={{ zIndex: 2000 }}>
         
            <form onSubmit={handleSubmit}>
         <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
             
              Add Attachment
             
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
     
                  <p className='fw-bold'>
                    Upload Resume
                  </p>
            <label htmlFor="resumeUp" className="d-flex justify-content-center align-items-center m-3 rounded" style={{height:'300px', borderStyle:"dotted" }}>
                <div className="d-flex flex-column align-items-center gap-1">
      
                <TfiUpload size={50}/>
                {file.resume&& <p>{file.resume.name}</p>}
                </div>
              </label>
              <input type="file"  name="" id="resumeUp" hidden onChange={(e)=>handleChange("resume",e.target.files[0])} />
              <p className='fw-bold'>
                Upload Attachment
              </p>
              <label htmlFor='uploadAttachment' className="d-flex justify-content-center align-items-center m-3 rounded" style={{height:'300px', borderStyle:"dotted" }}>
                    <div className="d-flex flex-column align-items-center gap-1">
    
                    <TfiUpload size={50}/>
                    {file.attachments && (
  <div className='d-flex gap-3'>
    {Array.from(file.attachments).map((file, index) => (
      <div >
      <p key={index}>{file.name}</p>
      </div>
    ))}
  </div>
)}
                    <div>
                    </div>
              
                    </div>
                  </label>
              <input id='uploadAttachment' hidden type="file" multiple   onChange={(e)=>handleChange("attachments",e.target.files)} />
              {loading?<LoadingOverlaySmall open={loading}/>: <CaptchaButton
                   disabled={!loading}
         
                  name="Submit"
                  type="submit"
                  size="large"
                  
                  style={{
                    backgroundColor: colors.primary,
                    "&:hover": { backgroundColor: "#002370" },
                    whiteSpace: "nowrap",
                    mt: 3,
                    mb: 2,
                  }}
                />}
          </Modal.Body>
          {/* <Modal.Footer>
           {loading?<LoadingOverlaySmall open={loading}/>:<Button variant="contained" type="submit">Submitt</Button>}
          </Modal.Footer> */}
          </form>
      </Modal>
      )
  }   
  function ItemTable({item}){
    const [name,setName]=useState(false)
return (
 <>
 <div>
 <IconButton aria-label="delete">
<DownloadIcon onClick={() => {
//console.log(item,"item")
const fileUrl = item.attachments
const fileName = fileUrl.substring(fileUrl.lastIndexOf('/') + 1);
const extension = fileName.split('.').pop();

fetch(fileUrl, {
  method: 'GET',
  headers: {
    'Content-Type': `application/${extension}`,
  },
})
.then((response) => response.blob())
.then((blob) => {
  // Create blob link to download
  const url = window.URL.createObjectURL(new Blob([blob]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', fileName);

  // Append to html link element page
  document.body.appendChild(link);

  // Start download
  link.click();

  // Clean up and remove the link
  link.parentNode.removeChild(link);
});
}} />
</IconButton>
 {/* {item.attachments.split("Attachmenets/")[1]} */}
</div>
 </>)
  }