import { Grid } from '@mui/material'
import React from 'react'

export default () => {
  return (
    <div>
        <div>
          <h2 className='fw-bold'>MY PROFILE - FORMS</h2>
         </div> 
      <div style={{backgroundColor:"#E7E8E8" }}>
              <Grid container padding={5}>
                <Grid className=' d-flex justify-content-between '  item xs={12} style={{backgroundColor:"#1682C3",}}>
                    <h5 className='text-white p-2 mb-0'>
                    Pay Stub</h5>
                </Grid>
                <p className='border border-secondary px-2 w-100 py-2'>
                  Click <a href="">Here </a>  to access Pay Stubs.
                </p>

                <Grid className=' d-flex justify-content-between '  item xs={12} style={{backgroundColor:"#1682C3",}}>
                    <h5 className='text-white p-2 mb-0'>
                    W4 Information</h5>
                </Grid>
                <p className='border border-secondary px-2 w-100 py-2'>
                  Click <a href="">Here </a>  to access W4 information.
                </p>


                <Grid className=' d-flex justify-content-between '  item xs={12} style={{backgroundColor:"#1682C3",}}>
                    <h5 className='text-white p-2 mb-0'>
                    Vaccine Declarations</h5>
                </Grid>
                <p className='border border-secondary px-2 w-100 py-2'>
                For your convenience we suggest the forms below be viewed, printed, and completed prior to your interview. Click the items below to review the documents.
                </p>

                <Grid className=' d-flex justify-content-between '  item xs={12} style={{backgroundColor:"#1682C3",}}>
                    <h5 className='text-white p-2 mb-0'>
                    Printable Tests</h5>
                </Grid>
                <p className='border border-secondary px-2 w-100 py-2'>
                For your convenience we suggest the forms below be viewed, printed, and completed prior to your interview. Click the items below to review the documents.
                </p>

                <Grid className=' d-flex justify-content-between '  item xs={12} style={{backgroundColor:"#1682C3",}}>
                    <h5 className='text-white p-2 mb-0'>
                    Employment Agreement</h5>
                </Grid>
                <div className='border border-secondary px-2 w-100 py-2'>
                  <p>
                 Accepted: 1 Not Accepted: 0
                  </p>
                  <div className='d-flex justify-content-between flex-wrap px-2'>
                      <a href="">
                     Health Self-Assessment
                      </a>
                  <p>
                  Date Agreed: 4/27/2023
                  </p>
                  <div>
                    <input type="checkbox" name="" id="" />
                    <span className='ps-2'>
                   I agree
                    </span>
                  </div>
                  <p>
                  ver.1
                  </p>
                  </div>
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
