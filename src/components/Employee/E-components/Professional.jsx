import { Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'

export default () => {
  const[change,setChange]=useState(false)
  const[option,setOption]=useState()
  return (
    <div>
        <div>
        <h2 className='fw-bold'>MY PROFILE - PROFESSIONAL</h2>
      </div> 
      <div style={{backgroundColor:"#E7E8E8" }}>
            <Grid container padding={5}>
                <Grid  item xs={12} style={{backgroundColor:"#1682C3",}}>
                    <h5 className='text-white p-2 mb-0'>
                          Profession</h5>
                </Grid>
                
                <Grid  item xs={6} md={12} style={{display:"flex",justifyContent:"space-between", paddingTop:"10px"}}>
                    <p> <span>Profession: </span>Account Creation Specialist</p>
                </Grid>

                <Grid className='d-flex justify-content-between align-items-center'  item xs={12} style={{backgroundColor:"#1682C3",}}>
                    <h5 className='text-white p-2 mb-0'>
                    Licenses</h5>
                    <Button variant='text' className='text-white p-2 mb-0' onClick={()=>{
                      setOption(1)
                      setChange(!change)
                    }}>
                    create
                    </Button>
                </Grid>
                <Grid container className='py-3'>
                  <Grid>
                  {change&&(option==1)&&
                <Grid container spacing={3}  >
                <Grid  item xs={12} md={4} lg={3}>
                <TextField id="outlined-basic" fullWidth label="License/Cert. Number" variant="outlined" />
                 </Grid>
                <Grid  item xs={12} md={4} lg={3} >
                <TextField id="outlined-basic" fullWidth label="Expiration Date" variant="outlined" />
                 </Grid>
                <Grid  item xs={12} md={4} lg={3} >
                <TextField id="outlined-basic" fullWidth label="State/Province" variant="outlined" />
                 </Grid>
                
                
                <Grid  item xs={12}  className='d-flex'>
                <Button style={{marginRight:"15px"}} onClick={()=>{
                        setOption(1)
                        setChange(!change)}} variant="contained">Cancel Change</Button>
                <Button  variant="contained">Update </Button>
                 </Grid>
                </Grid>}
                  <p>Licensure: 	#563  in RI  expires on 02/02/1999</p>
                  </Grid>
                </Grid>

                <Grid className='mt-3 d-flex justify-content-between align-items-center'  item xs={12} style={{backgroundColor:"#1682C3",}}>
                    <h5 className='text-white p-2 mb-0'>
                    Specialty Certifications</h5>
                    <Button variant='text' className='text-white p-2 mb-0' onClick={()=>{
                      setOption(2)
                      setChange(!change)
                    }}>
                    create
                    </Button>
                </Grid>
                <Grid container className='py-3'>
                  <Grid>
                  {change&&(option==2)&&
                <Grid container spacing={3}  >
                <Grid  item xs={12} md={4} lg={3}>
                <TextField id="outlined-basic" fullWidth label="Certification Type" variant="outlined" />
                 </Grid>
                <Grid  item xs={12} md={4} lg={3} >
                <TextField id="outlined-basic" fullWidth label="Other Description" variant="outlined" />
                 </Grid>
                <Grid  item xs={12} md={4} lg={3} >
                <TextField id="outlined-basic" fullWidth label="Expiration Date" variant="outlined" />
                 </Grid>
                
                
                <Grid  item xs={12}  className='d-flex'>
                <Button style={{marginRight:"15px"}} onClick={()=>{
                        setOption(1)
                        setChange(!change)}} variant="contained">Cancel Change</Button>
                <Button  variant="contained">Update </Button>
                 </Grid>
                </Grid>}
                  <p>Certification: 	for NRP  expires on 02/02/1996.   Omnis quae ut ut et
</p>
                  </Grid>
                </Grid>

                <Grid className='mt-3'  item xs={12} style={{backgroundColor:"#1682C3",}}>
                    <h5 className='text-white p-2 mb-0'>
                    Areas of Specialization</h5>
                </Grid>
                
                <Grid  item xs={6} md={12} style={{display:"flex",justifyContent:"space-between", paddingTop:"10px"}}>
                    <p> <span>If you need to update your specialization(s) please contact </span></p>
                </Grid>
            </Grid>
      </div>
      <div className='p-2 d-flex justify-content-end'>
        <button class="btn btn-primary">
          CONTACT US
        </button>
      </div>
    </div>
  )
}
