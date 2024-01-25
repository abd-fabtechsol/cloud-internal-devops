import React,{useState,useEffect} from 'react'
import { toast } from "react-toastify";
import apiClient from "../../api/apiClient";
import { Modal } from 'react-bootstrap';
import { Button } from '@mui/material';
import { TfiUpload } from "react-icons/tfi";
import colors from '../../config/colors';
import CaptchaButton from '../mui/CaptchaButton';
const AddAttach = ({ current,show,onHide}) => { 
        const[file,setFile]=useState({})
        const handleChange=(key,value)=>{
          setFile({...file,[key]:value})
        }
      
      
        const handleSubmit=async(e)=>{
      e.preventDefault();
      let formdata=new FormData()
      formdata.append("resume",file.resume)
      for (const item of file.attachments) {
        formdata.append("attachments",item)
      }
      //console.log("post")
      const result =await apiClient.post(`/CandidateAttachment/${current.id}/`,formdata)
      if(!result.ok) return toast.error("error");
      toast.success("Successfully added")
      onHide();
      //console.log(result);
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
         
                <label htmlFor="resumeUp" className="d-flex justify-content-center align-items-center m-3 rounded" style={{height:'300px', borderStyle:"dotted" }}>
                    <div className="d-flex flex-column align-items-center gap-1">
               
                    <TfiUpload size={50}/>
                 
                    </div>
                  </label>
                  <input type="file"  name="" id="resumeUp" hidden onChange={(e)=>handleChange("resume",e.target.files[0])} />
                  <input type="file" multiple   onChange={(e)=>handleChange("attachments",e.target.files)} />
                  <CaptchaButton
                   disabled={!loading}
         
                  name="Submit"
                  type="submit"
                  size="large"
                  fullWidth={true}
                  style={{
                    backgroundColor: colors.primary,
                    "&:hover": { backgroundColor: "#002370" },
                    whiteSpace: "nowrap",
                    mt: 3,
                    mb: 2,
                  }}
                />
              </Modal.Body>
              {/* <Modal.Footer>
                <Button variant="contained" type="submit">Submitt</Button>
              </Modal.Footer> */}
              </form>
          </Modal>
          )
      }

export default AddAttach