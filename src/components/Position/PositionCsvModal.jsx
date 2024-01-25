import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import apiClient from '../../api/apiClient'
import useApi from '../../hooks/useApi'
import { TfiUpload } from "react-icons/tfi";
import { Button } from '@mui/material';
import { toast } from 'react-toastify';
const PositionCsvModal = ({current,show,onHide}) => {
const [file,setFile]=useState()
  useEffect(()=>{
  },[])




  const handleSubmit=async(e)=>{
    e.preventDefault();
    const formdata=new FormData()
    formdata.append("file",file)
  const result=await apiClient.post("/CSV/",formdata)
  if(!result.ok) return toast.error("Failed")
  //console.log(result.data);
  toast.success("successfuly added")
  onHide()
  }
  return (
    <>
    <Modal
    show={show}
        onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ zIndex: "1300" }}>
    <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
               
    Add Positions
               
              </Modal.Title>
            </Modal.Header>
            <form onSubmit={handleSubmit}>
            <Modal.Body>
          
            <label htmlFor="resumeUp"className="d-flex justify-content-center align-items-center m-3 rounded" style={{height:'300px', borderStyle:"dotted" }}>
                    <div className="d-flex flex-column align-items-center gap-1">
                 
                    <TfiUpload size={50}/>
                
                    </div>
                  </label>
                  <input type="file"  name="" id="resumeUp" hidden onChange={(e)=>setFile(e.target.files[0])} />
                  <Button type='submit' variant='contained'> Submit</Button>
            </Modal.Body>
            </form>
    </Modal>
    </>
  )
}

export default PositionCsvModal