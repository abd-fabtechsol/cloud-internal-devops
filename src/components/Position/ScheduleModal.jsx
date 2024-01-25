import React,{useState,useEffect ,useRef} from 'react'
import { Modal } from 'react-bootstrap';
import { AdminButton }from '../mui'
import {Button,IconButton, Box,FormControlLabel,Grid,TextField,Typography, Switch, Radio, RadioGroup, FormLabel, FormControl, Divider } from "@mui/material";
import { SelectOption } from '../mui';
import useApi from '../../hooks/useApi';
import apiClient from '../../api/apiClient';
import DateField from '../mui/DateField';
import TimeField from '../mui/TimeField';
import { LoadingOverlaySmall } from '../mui/LoadingOverlay';
import CaptchaButton from '../mui/CaptchaButton';
import colors from '../../config/colors';

const ScheduleModal = ({current,show,onHide}) => {
 
    const [message, setMessage] = useState({text:"",color:""});
        const [selected,setSelected]=useState()
        const [schedule, setSchedule] = useState(current?.schedule||{});
        const [rate,setRate]=useState()
        const [page,setPage]=useState(1)
  
    
      function resetErrors(){
        setMessage({message:"",color:""})
      }
      
     
     

      function handleSubmit(event) {
        event.preventDefault();
        console.log(schedule);
      //  const result=apiClient.put(`positionsche`)
      }
      
        return (
      <>
      <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ zIndex: "1300" }}
          >
          
          <form className="" onSubmit={handleSubmit}>
          <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                 Schedule
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
          <Box>
              
      
              <div className='py-2' style={{height:400,maxHeight:400,overflowX:"hidden"}}>
              <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                  <TextField
                    required
                    type="number"
                    label="Experience"
                    name="position"
                    inputProps={{ maxLength: 150 }}
                    id="outlined-name"
                    onFocus={resetErrors}
                    fullWidth
                    size={"small"}
                    style={{ marginBottom: "25px", width:"100%" }}
                    value={schedule.experience}
                    onChange={(e) => setSchedule({...schedule, experience: e.target.value})}
                  />
                </Grid>

                        <Grid item xs={12} md={6}>
                        <TextField
                        
                                    required
                                    
                                    label="Duration"
                                    name="position"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    onFocus={resetErrors}
                                    fullWidth
                                    size={"small"}
                                    style={{ marginBottom: "25px", width:"100%" }}
                                    value={schedule.duration}
                                    onChange={(e)=>setSchedule({...schedule, duration: e.target.value})}
                                  />
                        </Grid>
                        <Grid item xs={12} md={6}>
                      
                      <TimeField
                                  required
                                  label="Start Time"
                                  name="position"
                                  inputProps={{ maxLength: 150 }}
                                  id="outlined-name"
                                  value={schedule.start_time}
                                  onChange={(e)=>setSchedule({...schedule, Start_time: e.target.value})}                                  onFocus={resetErrors}
                                  fullWidth
                                  size={"small"}
                                  sx={{ marginBottom: "25px" }}
                                />
                      </Grid>
                        <Grid item xs={12} md={6}>
                      
                        <TimeField
                                    required
                                    label="End Time"
                                    name="position"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={schedule.end_time}
                                    onChange={(e)=>setSchedule({...schedule, end_time: e.target.value})}
                                    onFocus={resetErrors}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                        </Grid>
      
                        <Grid item xs={12} md={6}>
                      
                      <DateField
                                  required
                                  label="Start Date"
                                  name="position"
                                  type="date"
                                  inputProps={{ maxLength: 150 }}
                                  id="outlined-name"
                                  value={schedule.projected_start_date}
                                  onChange={(e)=>setSchedule({...schedule, projected_start_date: e.target.value})}
                                  onFocus={resetErrors}
                                  fullWidth
                                  size={"small"}
                                  sx={{ marginBottom: "25px" }}
                                />
                      </Grid>
      
                         <Grid item xs={12} md={6}>
                      
                      <DateField
                                  required
                                  label="End Date"
                                  name="position"
                                  type="date"
                                  inputProps={{ maxLength: 150 }}
                                  id="outlined-name"
                                  value={schedule.projected_end_date}
                                  onChange={(e)=>setSchedule({...schedule, projected_end_date: e.target.value})}
                                  onFocus={resetErrors}
                                  fullWidth
                                  size={"small"}
                                  sx={{ marginBottom: "25px" }}
                                />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                        
                                    required
                                    label="Shift Type"
                                    name="position"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={schedule.shift_type}
                                    onChange={(e)=>setSchedule({...schedule, shift_type: e.target.value})}
                                    onFocus={resetErrors}
                                    fullWidth
                                    size={"small"}
                                    style={{ marginBottom: "25px", width:"100%" }}
                                  />
                        </Grid>
                        
           <CaptchaButton name="submit"
                  type="submit"
                  size="large"
                                   style={{
                    backgroundColor: colors.primary,
                    "&:hover": { backgroundColor: "#002370" },
                    whiteSpace: "nowrap",
                    mt: 3,
                    mb: 2,}}/>
                    
    
                </Grid>
                </div>
      
      </Box>
      </Modal.Body>
      {/* <Modal.Footer>
            <button className='btn btn-primary'>submit</button>
      </Modal.Footer> */}
           </form>
           </Modal>
          
          </>
        )
      }

export default ScheduleModal