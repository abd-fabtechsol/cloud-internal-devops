import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'


export default () => {
  const[change,setChange]=useState(false)
  const [option,setOption]=useState()
  return (
    <div>
        <div >
        <h2 className='fw-bold'>MY PROFILE - REFERENCES</h2>
      </div> 
      <div style={{backgroundColor:"#E7E8E8" }}>
            <Grid container padding={5}>
                <Grid className='d-flex justify-content-between align-items-center'  item xs={12} style={{backgroundColor:"#1682C3",}}>
                    <h5 className='text-white p-2 mb-0'>
                    Professional References</h5>
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
                <Grid  item xs={12} md={4} >
                <TextField id="outlined-basic" fullWidth label="Employer Name" variant="outlined" />
                 </Grid>
                <Grid  item xs={12} md={4}  >
                <TextField id="outlined-basic" fullWidth label="Supervisor Name / Title" variant="outlined" />
                 </Grid>
                <Grid  item xs={12} md={4}  >
                <TextField id="outlined-basic" fullWidth label="Email Address" variant="outlined" />
                 </Grid>
                <Grid  item xs={12} md={4}  >
                <TextField id="outlined-basic" fullWidth label="Phone" variant="outlined" />
                 </Grid>
                <Grid  item xs={12}  >
                <p className='fw-bold'>THP Info</p>
                 </Grid>
                <Grid  item xs={12} md={6}  >
                <TextField id="outlined-basic" fullWidth label="Your Position Held" variant="outlined" />
                 </Grid>
                <Grid  item xs={12} md={6}  >
                <TextField id="outlined-basic" fullWidth label="Your Discipline" variant="outlined" />
                 </Grid>
                <Grid  item xs={12} md={6}  >
                <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Employed From Date</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
 
    label="Employed From Date"
    // onChange={handleChange}
  >
    <MenuItem value={1}>Jan</MenuItem>
    <MenuItem value={2}>Feb</MenuItem>
    <MenuItem value={3}>Mar</MenuItem>
    <MenuItem value={4}>Apr</MenuItem>
    <MenuItem value={5}>May</MenuItem>
    <MenuItem value={6}>Jun</MenuItem>
    <MenuItem value={7}>July</MenuItem>
    <MenuItem value={8}>Aug</MenuItem>
    <MenuItem value={9}>Sep</MenuItem>
    <MenuItem value={10}>Oct</MenuItem>
    <MenuItem value={11}>Nov</MenuItem>
    <MenuItem value={12}>Dec</MenuItem>
  </Select>
</FormControl>
                 </Grid>
                <Grid  item xs={12} md={6}  >
                <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Employed From Date</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
 
    label="Employed From Date"
    // onChange={handleChange}
  >
    <MenuItem value={1}>Jan</MenuItem>
    <MenuItem value={2}>Feb</MenuItem>
    <MenuItem value={3}>Mar</MenuItem>
    <MenuItem value={4}>Apr</MenuItem>
    <MenuItem value={5}>May</MenuItem>
    <MenuItem value={6}>Jun</MenuItem>
    <MenuItem value={7}>July</MenuItem>
    <MenuItem value={8}>Aug</MenuItem>
    <MenuItem value={9}>Sep</MenuItem>
    <MenuItem value={10}>Oct</MenuItem>
    <MenuItem value={11}>Nov</MenuItem>
    <MenuItem value={12}>Dec</MenuItem>
  </Select>
</FormControl>
                 </Grid>
                 <Grid  item xs={12} md={6}  >
                <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label"> Year</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
 
    label="Graduation Year"
    // onChange={handleChange}
  >
    <MenuItem value={10}>1998</MenuItem>
    <MenuItem value={20}>1999</MenuItem>
    <MenuItem value={30}>2000</MenuItem>
  </Select>
</FormControl>
                 </Grid>
                 <Grid  item xs={12} md={6}  >
                <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label"> Year</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
 
    label="Graduation Year"
    // onChange={handleChange}
  >
    <MenuItem value={10}>1998</MenuItem>
    <MenuItem value={20}>1999</MenuItem>
    <MenuItem value={30}>2000</MenuItem>
  </Select>
</FormControl>
                 </Grid>
                 <Grid  item xs={12} md={6}  >
                <TextField id="outlined-basic" fullWidth label="Address 1" variant="outlined" />
                 </Grid>
                 <Grid  item xs={12} md={6}  >
                <TextField id="outlined-basic" fullWidth label="Address 2" variant="outlined" />
                 </Grid>
                 <Grid  item xs={12} md={6}  >
                <TextField id="outlined-basic" fullWidth label="City" variant="outlined" />
                 </Grid>
                 <Grid  item xs={12} md={6}  >
                 <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">State/Provience</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
   
    label="State/Provience"
    //  onChange={handleChange}
  >
    <MenuItem value={10}>America</MenuItem>
    <MenuItem value={20}>New York</MenuItem>
    <MenuItem value={30}>lowa</MenuItem>
  </Select>
</FormControl>
                 </Grid>
                 <Grid  item xs={12} md={6}  >
                <TextField id="outlined-basic" fullWidth label="Zip" variant="outlined" />
                 </Grid>
                 <Grid  item xs={12} md={6}  >
                <TextField multiline id="outlined-basic" fullWidth label="comment" variant="outlined" />
                 </Grid>
                 
                
                <Grid  item xs={12}  className='d-flex'>
                <Button style={{marginRight:"15px"}} onClick={()=>{
                        setOption(1)
                        setChange(!change)}} variant="contained">Cancel Change</Button>
                <Button  variant="contained">Update </Button>
                 </Grid>
                </Grid>}
                  <p>Education: 	College • Athena Hardy • G.E.D. • 1967
</p>
</Grid>
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
