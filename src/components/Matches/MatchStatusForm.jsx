
import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { Modal, Stack } from 'react-bootstrap'
import { toast } from 'react-toastify'
import apiClient from '../../api/apiClient'
import colors from '../../config/colors'
import useApi from '../../hooks/useApi'
import { PopupWithButton } from '../mui'
import CaptchaButton from '../mui/CaptchaButton'
import { SelectOptionEdit } from '../mui/SelectOption'

export default function MatchStatusForm({values}) {
const {current, show,setShow,fetchData}=values
const onHide=()=>setShow(false)
    const [data]=useState([
        {value:"FP",name:"Full Placement"},
        {value:"RE",name:"REJECTED"},
        {value:"PR",name:"PRESENT"},
        {value:"SU",name:"SUBMITTAL"},
      
    ])
  //   SUBMITTAL = "SU", "Submittal"
  //   REJECTED = "RE", "Rejected"
  //   INTERVIEW = "IN", "Interview"
  //   OFFER = "OF", "Offer"
  //   FULL_PLACEMENT = "FP", "Full Placement",
  //   CA: "Candidate Accepted",
  // PR: "Present"
    const [value,setValue]=useState()

  
      const {request,error,loading}=useApi((data)=>apiClient.patch(`/matches/${current.id}/`,data))
    
async function handleSubmit(e){
    e.preventDefault()
    const result =await request({status:value})
    if(!result.ok) return toast.error("Failed to Update Status")
    toast.success("Updated")
    onHide()
    fetchData()
}
  return (

      <Modal
      show={show}
      onHide={onHide}
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        
        >
     
         <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
             Update Match Status
             
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className='px-5'>

<form onSubmit={handleSubmit}>
<Grid container>
    <Grid item xs={12}>
    <Stack m={1} >
              <SelectOptionEdit
          label="Match Status"
          size="large"
          defaultSelected={current.status}
          data={data}
          value={value}
          fullWidth
          focused
          onChange={(e)=>setValue(e.target.value)}

        />
            </Stack>
    </Grid>
    <Grid item xs={3}>
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
    </Grid>

</Grid>
          </form>

 
          
          </Modal.Body>
      </Modal>
  )
}
