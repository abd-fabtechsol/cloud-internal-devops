import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Navigate, useLocation, useNavigate } from "react-router-dom";
import { AdminButton } from "../../components/mui";
import colors from "../../config/colors";
import useApi from "../../hooks/useApi";
import apiClient from "../../api/apiClient";
import { toast } from "react-toastify";
import { LoadingOverlaySmall } from "../../components/mui/LoadingOverlay";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ReCAPTCHA from "react-google-recaptcha";
import CaptchaButton from "../../components/mui/CaptchaButton";
import { Helmet } from "react-helmet";
import { login } from "../../redux/counterSlice";

export default function Login({role}) {
  
      const {state}=useLocation()
      const navigate=useNavigate()
      //console.log(state);
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
    const dispatch=useDispatch()
    async function handleSubmit(e) {
      e.preventDefault();
      console.log("first")
      const logins={
        "email":email,
        "password":password
      }
      const result =await apiClient.post("/auth/login",logins)
      console.log(result)
      if(!result.ok) return toast.error("Error")
      dispatch(login({token: result.data?.token, userType: role}));
    navigate("/dashboard")
      
    }
  


    return (
      <>
     
      
    <Container style={{minHeight:"100vh"}}  className="d-flex align-items-center  ">

  
            <Grid container spacing={2} className="justify-content-center">
<Grid xs={10} sm={8} md={6} lg={4} >
<Box elevation={6}
component={Paper}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
        
              }}
              className="p-4"
            >
              <Box className="text-start w-100">
                <Typography
                  component="h1"
                  variant="h5"
                  sx={{ color: colors.primary, fontWeight: "bold" }}
                >
                  Login Now
                </Typography>
              
               
              </Box>
              <form onSubmit={handleSubmit}>
              <Box
               
                sx={{ mt: 3 }}
              >
               

                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                    
                      required
                      fullWidth
                      label="Email"
                      type="email"
                      name="username"
                      title='Enter your email'
                      autoComplete="username"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                    
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      title='Enter your password'
                      autoComplete="new-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Grid container >
                  <Grid item xs={12}> 
                <CaptchaButton
                  //  disabled={!loading}
         
                  name="Login"
                  type="submit"
                  size="large"
                  // onClick={() => navigate(routeType )}
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
  
     
               
       
                <Grid container justifyContent="space-around">
                  <Grid item>
                
             {/* {role!=="AD"&& role!=="CA" &&    
              <AdminButton
                    // onClick={()=>navigate(routeType+"register")}
                      variant="body2"
                      name="Create an Account"
                      
                      style={{color:colors.blue,"&:hover":{color:colors.light,backgroundColor:"transparent"}}}
                      />} */}
             {/* {role=="CA" &&    
              <AdminButton
                    onClick={()=>navigate("/apply")}
                      variant="body2"
                      name="Create an Account"
                      
                      style={{color:colors.blue,"&:hover":{color:colors.light,backgroundColor:"transparent"}}}
                      />} */}
                  </Grid>
                </Grid>
              </Box>
              </form>
            </Box>
</Grid>
            </Grid>
            </Container>
           
       </>
    );
  }
