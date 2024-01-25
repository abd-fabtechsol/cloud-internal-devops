import React from 'react'
import ControlCenterSidebar from '../../components/ControlCenterSidebar'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import { Button,  Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Modal } from 'react-bootstrap';
import ToolModal from './ToolModal';

export default () => {
  const [show,setShow]=React.useState(false)
  //console.log(show)
  function createData(name, calories, fat, carbs, protein) {
    return {name, calories, fat, carbs, protein };
  }
  const rows = [
    createData('Notification', "Position published to my agency"),
    createData('Email', 237, 9.0, 37, 4.3),
    createData('In-app', 262, 16.0, 24, 6.0),
  ];
  return (
    <div>
       <div className='row'>
      <div className='col-md-3'>
        <ControlCenterSidebar/>
      </div>
      <div className='col-md-9'>
        <h3>
      Tool
        </h3>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{fontSize:"12px",fontWeight:"600"}}>
              Mass Ownership Change
              </TableCell>
              <TableCell >This tool is used for mass candidate and match ownership change from one owner to the other.</TableCell>
              <TableCell >
                <Button variant='outlined' onClick={()=>setShow(true)} sx={{fontSize:"12px" ,lineHeight:"12px",color:"grey",borderColor:"gray"}}>open tool</Button>
                  </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <ToolModal show={show} onHide={()=>setShow(false)}/>
      </div>
      </div>
    </div>


  )
}
