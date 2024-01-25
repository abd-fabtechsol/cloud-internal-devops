import { Grid } from '@mui/material'
import React from 'react'

export default () => {
  return (
    <div>
        <div >
        <h2 className='fw-bold'>MY PROFILE - BENEFITS</h2>
      </div> 
      <div style={{backgroundColor:"#E7E8E8" }}>
            <Grid container padding={5}>
                <Grid className='d-flex justify-content-between align-items-center'  item xs={12} style={{backgroundColor:"#1682C3",}}>
                    <h5 className='text-white p-2 mb-0'>
                    Benefits</h5>
                </Grid>
                <p className='py-2'>
                Click <a href="#">HERE </a>  to access benefits information
                </p>
                <div className='text-danger'>
                  Disclaimer:
                  <p>
                    In order to enroll in benefits, all employees must first meet the eligibility criteria.
                    Employees that are currently enrolled must meet the annual requirements in order to maintain benefits eligibility.
                  </p>
                </div>
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
