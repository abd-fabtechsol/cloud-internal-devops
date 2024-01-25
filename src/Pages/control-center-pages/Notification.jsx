import React from 'react'
import ControlCenterSidebar from '../../components/ControlCenterSidebar'
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import apiClient from '../../api/apiClient';

export default () => {
  let initialState={
    candidate_app:false,
    candidate_email:false,
    credential_app:false,
    credential_email:false,
    matches_app:false,
    matches_email:false,
    position_app:false,
    position_email:false,
    timeSheet_app:false,
    timeSheet_email:false
  }
  const[data,setData]=useState(initialState)
const[id,setId]=useState()

  useEffect(()=>{
    fetchData()
  },[])

 async function fetchData(){
    const result= await apiClient.get(`/NotificationSetting/`)
    if(!result.ok) return 
    if (result.data.results && result.data.results.length > 0) {
      
     setData(result.data.results[0]);
      setId(result.data.results[0].id);
      //console.log(result.data.results[0].id)
      
    }
   
  
  }
  
  function createData(name, calories, fat, carbs, protein) {
    return {name, calories, fat, carbs, protein };
  }
  const rows = [
    createData('Notification', "Position published to my agency"),
    createData('Email', 237, 9.0, 37, 4.3),
    createData('In-app', 262, 16.0, 24, 6.0),
  ];



  const handleSwitchChange = async(key,value) => {
    
    setData({...data,[key]:value})
    const result= await apiClient.patch(`/NotificationSetting/${id}/`,{[key]:!data[key]})
    if(!result.ok) return 
    //console.log(result)
  };

  return (
    <div>
       <div className='row'>
      <div className='col-md-3'>
        <ControlCenterSidebar/>
      </div>
      <div className='col-md-9'>
        <h6>
        Notifications
        </h6>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Notification</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">In-app</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
             
              <TableCell component="th" scope="row">
              
             Candidate 
              </TableCell>
              
              <TableCell align="center">
                <Switch  checked={data.candidate_email} onChange={(e)=>handleSwitchChange("candidate_email",e.target.checked)} inputProps={{'aria-label': 'controlled'}}  />
              </TableCell>

              
              <TableCell align="center">  <Switch checked={data.candidate_app} onChange={(e)=>handleSwitchChange("candidate_app",e.target.checked)} inputProps={{'aria-label': 'controlled'}} /></TableCell>
            </TableRow>
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
             
              <TableCell component="th" scope="row">
              
             Position 
              </TableCell>
              
              <TableCell align="center">
                <Switch  checked={data.position_email} onChange={(e)=>handleSwitchChange("position_email",e.target.checked)} inputProps={{'aria-label': 'controlled'}}  />
              </TableCell>

              
              <TableCell align="center">  <Switch checked={data.position_app} onChange={(e)=>handleSwitchChange("position_app",e.target.checked)} inputProps={{'aria-label': 'controlled'}} /></TableCell>
            </TableRow>
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
             
              <TableCell component="th" scope="row">
              
             Match 
              </TableCell>
              
              <TableCell align="center">
                <Switch  checked={data.matches_email} onChange={(e)=>handleSwitchChange("matches_email",e.target.checked)} inputProps={{'aria-label': 'controlled'}}  />
              </TableCell>

              
              <TableCell align="center">  <Switch checked={data.matches_app} onChange={(e)=>handleSwitchChange("matches_app",e.target.checked)} inputProps={{'aria-label': 'controlled'}} /></TableCell>
            </TableRow>
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
             
              <TableCell component="th" scope="row">
              
             Time Sheet 
              </TableCell>
              
              <TableCell align="center">
                <Switch  checked={data.timeSheet_email} onChange={(e)=>handleSwitchChange("timeSheet_email",e.target.checked)} inputProps={{'aria-label': 'controlled'}}  />
              </TableCell>

              
              <TableCell align="center">  <Switch checked={data.timeSheet_app} onChange={(e)=>handleSwitchChange("timeSheet_app",e.target.checked)} inputProps={{'aria-label': 'controlled'}} /></TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
      </div>
      </div>
    </div>
  )
}
