import React,{useState,useEffect ,useRef} from 'react'
import { TfiUpload } from "react-icons/tfi";
import {Button,IconButton, Box,FormControlLabel,Grid,TextField,Typography, Switch, Radio, RadioGroup, FormLabel, FormControl, CircularProgress } from "@mui/material";
import { Modal } from 'react-bootstrap';
import useApi from "./../../hooks/useApi";
import TimeField from './../mui/TimeField';
import { toast } from "react-toastify";
import apiClient from "../../api/apiClient";
import { TiTick } from "react-icons/ti";
import DateField from "./../mui/DateField";
import { SelectOption } from '../mui'; 
import PositionForm2 from './PositionForm2';
import moment from 'moment';
const MyVerticallyCenteredModal = (props) => {
        let empyFields = {
          title:"",
          description:"",
          s_date:"",
          e_date:"",
          s_date:"",
          e_date:"",
          no_of_positions:"",
          status:"",
          request_reason:"",
          submittal_limit:"",
          remaining_submittals:"",
          general_comments:"",
          hiring_manager:"",
          report_to:"",
          working_position_owner:"",
          cio:"",
          auto_offer:true,
          type:"",
          speciality:"",
         
        };
        let scheduleEmptyFileds={
          experience: "",
          duration: "",
          projected_start_date: "",
          projected_end_date: "",
          shift_type: "",
          start_time: "",
          end_time: ""
        }
      
        const [newPosition, setNewPosition] = useState(empyFields);
        const [schedule, setSchedule] = useState(scheduleEmptyFileds);
        const [rates,setRates]=useState([])
        const [positionType, setPositionType] = useState([]);
        const [loading,setLoading] = useState(false)
        const [shift, setShift] = useState([{"id":2,"name":"Night Shift"},{"id":1,"name":"Day Shift"}]);
        const [message, setMessage] = useState({text:"",color:""});
        const [type, setType] = useState([{"id":1,"name":"RN"},{"id":2,"name":"LPN,LVN"},{"id":3,"name":"CNAI,SANA,GNA,LNA,STNA,NAC"},{"id":4,"name":"CAM,QMAP,MAPS,LMA,CMT,RMA,UAP,AMAP"},{"id":5,"name":"CG,HHA"}]);



      const limit=5
      const [offset,setOffset]=useState(0)
      
        const handlePositionChange = (key,value) => {
          setNewPosition({ ...newPosition, [key]: value });
        };
        const handleScheduleChange = (key,value) => {
          setSchedule({ ...schedule, [key]: value });
        };
      
      
        function resetErrors(){
          setMessage({message:"",color:""})
        }
        const form1=useRef()
        const form2=useRef()
        const form3=useRef()
        const [step,setStep]=useState(1)
        const [page,setPage]=useState(1)
      
        useEffect(()=>{
          fetchData()
          fetchType()
          fetchSpciality()
        },[])
        const apiSpeciality=useApi((route)=>apiClient.get(route))
        const apiPositionType=useApi((route)=>apiClient.get(route))
        const apiRateType=useApi(()=>apiClient.get("/RateType"))
        const apiPosition=useApi((data)=>apiClient.post("/positions/",data))
          
        async function fetchData(){
      await apiSpeciality.request()
      await apiPositionType.request()
      await apiRateType.request()
         
         }
         async function fetchType(){
          // await apiPositionType.request()
          const result=await apiPositionType.request(`/PositionType/?page=${page}`)
          //console.log(result,"data")
          if(result.data.results)
          setType([...type,...result.data?.results])
          setPage(page+1)
         }
         async function fetchSpciality(){
          const result=await apiSpeciality.request(`/PositionSpeciality/?page=${page}`)
          //console.log(result,"data")
          if(result.data.results)
          setPositionType([...positionType,...result.data?.results])
          //console.log(positionType)
          setPage(page+1)
         }
         async function handleSubmit(){

          // const format = 'hh:mm A'; // Time format with AM/PM
          // const clockIn = moment(schedule.start_time, format);
          // const clockOut = moment(schedule.end_time, format);
        
          // if (!clockIn.isValid() || !clockOut.isValid()) {
          //   toast.error('Invalid time format');
          //   return;
          // }
        
          // if (!clockIn.isBefore(clockOut)) {
          //   toast.error('Start time should be after End time');
          //   return;
          // }



          let result2= form3.current.reportValidity()
          if(!result2) return
          setLoading(true)
          const result= await apiPosition.request({
         
            ...newPosition,
            rates,
            schedule})
            setLoading(false)
            if(!result.ok) return toast.error("Can't Create")
            toast.success("Created Successfully")
            props.onHide()
      
         }
         const handleScroll = (event) => {
          const { scrollTop, clientHeight, scrollHeight } = event.target;
          if (scrollTop + clientHeight >= scrollHeight-1) {
            fetchType();
          }
        };
         const handleScrollSpeciality = (event) => {
          const { scrollTop, clientHeight, scrollHeight } = event.target;
          if (scrollTop + clientHeight >= scrollHeight-1) {
          fetchSpciality();
          }
        };
       
      
      
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ zIndex: "1300" }}
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Add New Positionsdds
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="d-flex justify-content-between">
                <div
                  className={`rounded-circle border d-flex align-items-center justify-content-center ${step>=1&&"bg-primary"}`}
                  style={{ width: "2rem", height: "2rem" }}
                >
      
                  {step>=1?<TiTick/>:"1"}
                </div>
                <hr className="" />
                <div
                  className={`rounded-circle border d-flex align-items-center justify-content-center ${step>=2&&"bg-primary"}`}
                  style={{ width: "2rem", height: "2rem" }}
                >
                 
                 {step>=2?<TiTick/>:"2"}
                </div>
                <hr lassName="border" />
                <div
                  className={`rounded-circle border d-flex align-items-center justify-content-center ${step==3&&"bg-primary"}`}
                  style={{ width: "2rem", height: "2rem" }}
                >
                 
                 {step>=3?<TiTick/>:"3"}
                </div>
              </div>
              {/* <NewJob/> */}
              <div style={{height:400,maxHeight:400,overflowX:"hidden"}}>
      
             
              <h6 className="text-center">Add New Position</h6>
             {step==1&& <div className="candidate-detail check">
             <form className="" ref={form1}>
                <Box>
                  
      
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                        <TextField
                                    required
                                    label="Title"
                                    name="position"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={newPosition.title}
                                    onChange={(e)=>handlePositionChange("title",e.target.value)}
                                    
                                    onFocus={resetErrors}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        
                        <TextField
                                    required
                                    multiline
                                    minRows={2}
                                    label="Description"
                                    name="position"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={newPosition.description}
                                    onChange={(e)=>handlePositionChange("description",e.target.value)}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                        </Grid>
                        <Grid item xs={12} md={6}>
                      
                      <TextField
                      
                                  required
                                 label="Start Date"
                                  type="date"
                                  name="s_date"
                                  inputProps={{ maxLength: 150 }}
                                  id="outlined-name"
                                  value={newPosition.s_date}
                                  onChange={(e)=>handlePositionChange("s_date",e.target.value)}
                                 
                                  onFocus={resetErrors}
                                  fullWidth
                                  size={"small"}
                                  style={{ marginBottom: "25px", width:"100%" }}
                                />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      
                      <TextField
                      
                                  required
                                  label="End Date"
                                  type="date"
                                  name="e_date"
                                  inputProps={{ maxLength: 150 }}
                                  id="outlined-name"
                                  value={newPosition.e_date}
                                  onChange={(e)=>handlePositionChange("e_date",e.target.value)}
                                 
                                  onFocus={resetErrors}
                                  fullWidth
                                  size={"small"}
                                  style={{ marginBottom: "25px", width:"100%" }}
                                />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      
                      <TextField
                      
                                  required
                                label="start time"
                                  type="time"
                                  name="s_time"
                                  inputProps={{ maxLength: 150 }}
                                  id="outlined-name"
                                  value={newPosition.s_time}
                                  onChange={(e)=>handlePositionChange("s_time",e.target.value)}
                                 
                                  onFocus={resetErrors}
                                  fullWidth
                                  size={"small"}
                                  style={{ marginBottom: "25px", width:"100%" }}
                                />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      
                      <TextField
                      
                                  required
                                label="End time"
                                  type="time"
                                  name="e_time"
                                  inputProps={{ maxLength: 150 }}
                                  id="outlined-name"
                                  value={newPosition.e_time}
                                  onChange={(e)=>handlePositionChange("e_time",e.target.value)}
                                 
                                  onFocus={resetErrors}
                                  fullWidth
                                  size={"small"}
                                  style={{ marginBottom: "25px", width:"100%" }}
                                />
                    </Grid>
                        <Grid item xs={12} md={6}>
                      
                        <TextField
                        
                                    required
                                    label="No Of Positions"
                                    type="number"
                                    name="position"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={newPosition.no_of_positions}
                                    onChange={(e)=>handlePositionChange("no_of_positions",e.target.value)}
                                   
                                    onFocus={resetErrors}
                                    fullWidth
                                    size={"small"}
                                    style={{ marginBottom: "25px", width:"100%" }}
                                  />
                      </Grid>
                        {/* <Grid item xs={12} md={6}>
                      
                        <SelectOption
                        
                                    required
                                    label="Status"
                                    name="position"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={newPosition.status}
                                    onChange={(e)=>handlePositionChange("status",e.target.value)}
                                   
                                    onFocus={resetErrors}
                                    data={[{id:"OP",name:"Active"},{id:"OP2",name:"Active2"}]}
                                    fullWidth
                                    size={"small"}
                                    style={{ marginBottom: "25px", width:"100%" }}
                                  />
                        </Grid> */}
      
                        <Grid item xs={12} md={6}>
                      
                      <TextField
                                  required
                                  label="Request Reason"
                                  name="position"
                                  inputProps={{ maxLength: 150 }}
                                  id="outlined-name"
                                  value={newPosition.request_reason}
                                  onChange={(e)=>handlePositionChange("request_reason",e.target.value)}
                                  onFocus={resetErrors}
                                  fullWidth
                                  size={"small"}
                                  sx={{ marginBottom: "25px" }}
                                />
                      </Grid>
      
                         <Grid item xs={12} md={6}>
                      
                      <TextField
                                  required
                                  label="Submittal Limit"
                                  name="position"
                                  type="number"
                                  inputProps={{ maxLength: 150 }}
                                  id="outlined-name"
                                  value={newPosition.submittal_limit}
                                    onChange={(e)=>handlePositionChange("submittal_limit",e.target.value)}
                                  onFocus={resetErrors}
                                  fullWidth
                                  size={"small"}
                                  sx={{ marginBottom: "25px" }}
                                />
                      </Grid>
                    
                        <Grid item xs={12} md={6}>
                        <TextField
                        
                                    required
                                    label="General Comments"
                                    name="position"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={newPosition.general_comments}
                                    onChange={(e)=>handlePositionChange("general_comments",e.target.value)}
                                   
                                    fullWidth
                                    size={"small"}
                                    style={{ marginBottom: "25px", width:"100%" }}
                                  />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <TextField
                        
                                    required
                                    label="Hiring Manger"
                                    name="position"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={newPosition.hiring_manager}
                                    onChange={(e)=>handlePositionChange("hiring_manager",e.target.value)}
                                   
                                    fullWidth
                                    size={"small"}
                                    style={{ marginBottom: "25px", width:"100%" }}
                                  />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <TextField
                        
                                    required
                                    label="Report to"
                                    name="position"
                                    inputProps={{ maxLength: 150 }}
                                    value={newPosition.report_to}
                                    onChange={(e)=>handlePositionChange("report_to",e.target.value)}
                                   
                                    id="outlined-name"
                                 
                                    fullWidth
                                    size={"small"}
                                    style={{ marginBottom: "25px", width:"100%" }}
                                  />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <TextField
                        
                                    required
                                    label="Working position owner"
                                    name="position"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={newPosition.working_position_owner}
                                    onChange={(e)=>handlePositionChange("working_position_owner",e.target.value)}
                                   
                                    fullWidth
                                    size={"small"}
                                    style={{ marginBottom: "25px", width:"100%" }}
                                  />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <TextField
                        
                                    required
                                    label="Cio"
                                    name="position"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={newPosition.cio}
                                    onChange={(e)=>handlePositionChange("cio",e.target.value)}
                                   
                                    fullWidth
                                    size={"small"}
                                    style={{ marginBottom: "25px", width:"100%" }}
                                  />
                        </Grid>
                        <Grid item xs={12} md={6}>
                      
                      <SelectOption
                    
                                  required
                                  label="Type"
                                  name="position"
                                  inputProps={{ maxLength: 150 }}
                                  id="outlined-name"
                                  value={newPosition.type}
                                  onChange={(e)=>handlePositionChange("type",e.target.value)}
                                 
                                  onFocus={resetErrors}
                                
                                  data={type}
                                  fullWidth
                                  size={"small"}
                                  style={{ marginBottom: "25px", width:"100%" }}
                                  MenuProps={{
                                    PaperProps: {
                                      onScroll: handleScroll,
                                      style: {
                                        maxHeight: "100px",
                                        overflowY: "auto",
                                      },
                                    },
                                  }}
                                />
                      </Grid>
                      <Grid item xs={12} md={6}>
                      
                      <SelectOption
                      
                                  required
                                  label="Speciality"
                                  name="position"
                                  inputProps={{ maxLength: 150 }}
                                  id="outlined-name"
                                  value={newPosition.speciality}
                                  onChange={(e)=>handlePositionChange("speciality",e.target.value)}
                                 
                                  onFocus={resetErrors}
                                  data={positionType}
                                  fullWidth
                                  size={"small"}
                                  style={{ marginBottom: "25px", width:"100%" }}
                                  MenuProps={{
                                    PaperProps: {
                                      onScroll: handleScrollSpeciality,
                                      style: {
                                        maxHeight: "100px",
                                        overflowY: "auto",
                                      },
                                    },
                                  }}
                                />
                      </Grid>
      
                        <Grid item xs={12} md={6}>
                        <FormControlLabel
                          label="Auto Offer"
                          htmlFor="my-switch"
                              control={
                                <Switch
                                  id="my-switch"
                                  checked={newPosition.auto_offer}
                                  onClick={()=>handlePositionChange("auto_offer",!newPosition.auto_offer)}
                                  
                                />
                              }
                            
                            />
                        </Grid>
      
                        </Grid>
           </Box>
                </form>
              </div>}
      
            <PositionForm2 values={{step,form2,apiRateType,rates,setRates}}/>
      
            {step==3&&  <div className="step-3">
      
      
            <form className="" ref={form3} >
                <Box>
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
                                    onChange={(e)=>handleScheduleChange("experience",e.target.value)}
                                  />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <TextField
                        
                                    required
                                    type=""
                                    label="Duration"
                                    name="position"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    onFocus={resetErrors}
                                    fullWidth
                                    size={"small"}
                                    style={{ marginBottom: "25px", width:"100%" }}
                                    value={schedule.duration}
                                    onChange={(e)=>handleScheduleChange("duration",e.target.value)}
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
                                  onChange={(e)=>handleScheduleChange("start_time", e.target.value)}
                                  onFocus={resetErrors}
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
                                    onChange={(e)=>handleScheduleChange("end_time", e.target.value)}
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
                                  onChange={(e)=>handleScheduleChange("projected_start_date", e.target.value)}
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
                                  onChange={(e)=>handleScheduleChange("projected_end_date", e.target.value)}
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
                                    onChange={(e)=>handleScheduleChange("shift_type", e.target.value)}
                                    onFocus={resetErrors}
                                    fullWidth
                                    size={"small"}
                                    style={{ marginBottom: "25px", width:"100%" }}
                                  />
                        </Grid>
                 
      
                        </Grid>
                        
            
           </Box>
                </form>
              </div>}
              </div>
              
            </Modal.Body>
            <Modal.Footer>
         <button className="btn btn-outline-primary" onClick={()=>step>1&&setStep(step-1)}>
              Previous
              </button>
           
            {step==3?
            <>
            {loading? <CircularProgress />:
            <Button variant="contained"  onClick={handleSubmit}>Create</Button>
              }
            </>
           :<Button variant="contained" onClick={()=>{
                 if(step<3){
                  let result
                   if(step==1)
                 result=form1.current.reportValidity()
                   if(step==2){
                    if(rates.length==0)
      toast.error("Please add atleast 1 rate")
      else
      result=true
                   }
                   if(step==3)
                 result=form3.current.reportValidity()
                  if(result)
                  setStep(step+1)
                }
      
            
                }}>Next</Button>}
               
      
            </Modal.Footer>
          </Modal>
        );
      }
      

export default MyVerticallyCenteredModal