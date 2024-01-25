import { AppBar ,Hidden,IconButton,Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu'
import colors from '../../../config/colors';

  function Navbar({handleDrawerToggle}) {

    return (


    <Box sx={{ flexGrow: 1 }}>
           <AppBar position="fixed" sx={{ backgroundColor: "#447BAB" }}>
  <Toolbar variant="dense" style={{display:'flex',
    justifyContent:'flex-end',minHeight:'65px'}} >
            <Typography className=' d-flex justify-content-center' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hospitals
              </Typography>

           

    <Box >



<Hidden
mdUp
>
  <IconButton onClick={handleDrawerToggle}>
    <MenuIcon style={{color:"white"}} />
  </IconButton>
  </Hidden>

</Box>
  </Toolbar>
</AppBar>
        </Box>
    );
}

export default Navbar;
