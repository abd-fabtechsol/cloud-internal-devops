import { Button, FormControl, Grid, IconButton, InputLabel, Menu, MenuItem, Select } from '@mui/material'
import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Location = () => {
    const options = [
        'Alabama',
        'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming'
      ];
      
      
      const ITEM_HEIGHT = 48;
        const [anchorEl, setAnchorEl] = React.useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
          setAnchorEl(null);
        };
  return (
   <div className='container'>
    <Grid style={{padding:"40px" }} container>
     <Grid item xs={12}>
        <h1 className='fw-bold' style={{color:"#071641"}}>IsentCare is a top national staffing agency</h1>
        <p>We have the resources and expertise to help you find your next great assignment. Find your perfect fit with our nationwide network of facilities. Search for a branch location near you and get connected with a recruiter!</p>
     </Grid>
     <Grid item xs={12}>
        <h1 className='fw-bold'style={{color:"#071641"}}>
        Customer focus
        </h1>
        <p>We have over 25 branch offices across the country that provide our local clients a nationwide presence. The branches are full-service offices, and they have a first-hand relationship with their clients which allows them to foster long-term relationships. Our branch staff are seasoned professionals who really understand the business of staffing.</p>
     </Grid>
     <Grid item xs={12}>
        <h1 className='fw-bold' style={{color:"#071641"}}>
        Local support
        </h1>
        <p>Choose your state from the dropdown menu or map below to find a IsentCare Healthcare Staffing office near you.</p>
     </Grid>
     <Grid item xs={12}className=''>
     <Button className='fw-bold'
  aria-label="more"
  id="long-button"
  aria-controls={open ? 'long-menu' : undefined}
  aria-expanded={open ? 'true' : undefined}
  aria-haspopup="true"
  onClick={handleClick}
  style={{ width: '100%', display: 'flex',justifyContent: 'space-between', alignItems: 'center',color:"#FF6700" }}
  endIcon={<KeyboardArrowDownIcon/>}
>
  select country
</Button>
<Menu
className=''
  id="long-menu"
  MenuListProps={{
    'aria-labelledby': 'long-button',
  }}
  anchorEl={anchorEl}
  open={open}
  onClose={handleClose}
  PaperProps={{
    style: {
      width: '100%', // Set the width to 100%
      maxWidth: '630px', // Remove the maximum width restriction
      maxHeight: ITEM_HEIGHT * 4.5,
    },
  }}
>
  {options.map((option) => (
    <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
      {option}
    </MenuItem>
  ))}
</Menu>

     </Grid>
     <Grid item xs={12}>
       
     </Grid>
     </Grid>
   </div>
  )
}

export default Location