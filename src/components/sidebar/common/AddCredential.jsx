import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { clearAllListeners } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react'
import { Modal, ModalBody } from 'react-bootstrap'
import { toast } from 'react-toastify';
import apiClient from '../../../api/apiClient';
import useApi from '../../../hooks/useApi';
import { SelectOption } from '../../mui';
import DateField from '../../mui/DateField';

const AddCredential = ({current,show,onHide}) => {
    let initialState={

Status:"",
credential_type:"",
required_for_placement:"",
rejection_reason:"",
effective_date:"",
expiration_date:"",
state:"",
issue_date:"",
candidate:current.id,
name:""
    }
    let route="/Credentials/"
  const {request,error,data,loading}=useApi((route,data)=>apiClient.post(route,data))
   const[credential,setCredenlial] =useState(initialState)
   const handleChange=(key,value)=>{
setCredenlial({...credential,[key]:value})
   }
   const handleSubmitt=async(e)=>{
    e.preventDefault()
    const result=await request(route,credential)
    if(!result.ok) return toast.error("error")
    // toast.success(" Successfully submit")
    onHide()
    //console.log(credential)
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
               
                TimeSheet
               
              </Modal.Title>
            </Modal.Header>
            <form onSubmit={handleSubmitt} >
            <ModalBody>
                <Grid container spacing={2}>
                     <Grid item xs={12} md={6} >
                <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Status</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={credential.Status}
    label="Status"
    onChange={(e)=>handleChange("Status",e.target.value)}
  >
    <MenuItem value={"UC"}>Unconfirm</MenuItem>
    <MenuItem value={"CO"}>Confirm</MenuItem>
    
  </Select>
</FormControl>
                    </Grid>
                    <Grid item xs={12} md={6} >
                <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Required for replacement</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={credential.required_for_placement}
    label="Status"
    onChange={(e)=>handleChange("required_for_placement",e.target.value)}
  >
    <MenuItem value={"Y"}>Yes</MenuItem>
    <MenuItem value={"N"}>No</MenuItem>
    
  </Select>
</FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField id="outlined-basic"
                    value={credential.name}
                    fullWidth
                    onChange={(e)=>handleChange("name",e.target.value)}
                    label="Name" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField id="outlined-basic"
                    value={credential.credential_type}
                    fullWidth
                    onChange={(e)=>handleChange("credential_type",e.target.value)}
                    label="Credential Type" variant="outlined" />
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                    <DateField
                                  
                                  label="Effective Date"
                                  
                                  type="date"
                                  id="outlined-name"
                                  onChange={(e)=>handleChange("effective_date",e.target.value)}
                                  value={credential.effective_date}
                                  fullWidth
                                  size={"small"}
                                  sx={{ marginBottom: "25px" }}
                                />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <DateField
                                  
                                  label="Expiration Date"
                                  type="date"
                                  id="outlined-name"
                                  onChange={(e)=>handleChange("expiration_date",e.target.value)}
                                  value={credential.expiration_date}
                                  fullWidth
                                  size={"small"}
                                  sx={{ marginBottom: "25px" }}
                                />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <DateField
                                  
                                  label="Issue Date"
                                  type="date"
                                  id="outlined-name"
                                  onChange={(e)=>handleChange("issue_date",e.target.value)}
                                  value={credential.issue_date}
                                  fullWidth
                                  size={"small"}
                                  sx={{ marginBottom: "25px" }}
                                />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField id="outlined-basic"
                    fullWidth
                    value={credential.rejection_reason}
                    onChange={(e)=>handleChange("rejection_reason",e.target.value)}
                    label="Reason for rejection" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField id="outlined-basic"
                    fullWidth
                    value={credential.state}
                    onChange={(e)=>handleChange("state",e.target.value)}
                    label="State" variant="outlined" />
                    </Grid>
                </Grid>
            </ModalBody>
            <Modal.Footer>
                <Button variant='contained' type='submit'>submitt</Button>
            </Modal.Footer>
            </form>
    </Modal>
    </>
  )
}

export default AddCredential