import { Box, CssBaseline, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Link, useNavigate, Navigate } from "react-router-dom";
// import AuthContext from '../../auth/auth-context';
import Header from './Header';
import Navbar from './Navbar';
import SideNav from './SideNav';




const DashboardLayout = ({type}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const {userType,debugMode} = useSelector((state) => state.auth)
  const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
  };
  // const auth = useContext(AuthContext);
  const navigate=useNavigate()
  // useEffect(()=>{
  //  if(!auth.isLoggedIn)
  //         navigate('/')

  // },[])

  // if(!debugMode)
  // if(userType!==type)
  // return <Navigate to={userType=="HO"&&"hostpitals"||userType=="AG"&&"/agencies"}/>
return (

  <Box sx={{ display: "flex" }}>
  <CssBaseline />
  <Header />
  <Box 
    component="main"
    sx={{
      flexGrow: 1,
      p: 3,
      width: { md: `calc(100% - ${240}px)`, overflow: "auto" },
    }}
  >
    <Toolbar />




      <Outlet context={{type}}/>


      </Box>
      </Box>
)
};

export default DashboardLayout;
