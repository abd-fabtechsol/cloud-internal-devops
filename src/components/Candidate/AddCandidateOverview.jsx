import React,{useState,useEffect} from 'react'
import {Button, Box,FormControlLabel,Grid,TextField, Switch, Radio, RadioGroup, FormLabel, FormControl } from "@mui/material";
import { Modal } from 'react-bootstrap';
import { toast } from "react-toastify";
import apiClient from "../../api/apiClient";
import DateField from '../mui/DateField';
import { SelectOption } from '../mui';
import colors from '../../config/colors';
import CaptchaButton from '../mui/CaptchaButton';
const AddCandidateOverview = ({fetchdata,current,show,onHide}) => {
     console.log(current,"asd");
        let empyFields = {
          first_name:current.first_name|| "",
          middle_name: current.middle_name||"",
          last_name: current.last_name||"",
          gender:current.gender|| "",
          dob: current.dob||"",
          looking_for: getContractValue(current.looking_for),
          min_annual_rate:current.min_annual_rate|| "",
          target_annual_rate: current.target_annual_rate||"",
          min_hourly_rate: current.min_hourly_rate||"",
          target_hourly_rate:current.target_hourly_rate|| "",
          current_title:current. current_title|| "",
          available_date:current.available_date|| "",
          termination_date:current.termination_date|| "",
          termination_reason:current.termination_reason|| "",
        };
        
      function getContractValue(value){
        if(value=="Contract")
        return "CON"
       
        else if(value=="Perm")
        return "PRM"
        else  
        return "CTP"
      }
        const [canidateOverview, setCandidateOverView] = useState(empyFields);
        const [attachments, setAttachments] = useState();
        const [addCandidate, setAddCandidate] = useState(empyFields)
      
         const [message, setMessage] = useState({text:"",color:""});
         const [status, setStatus] = useState([]);
         const [count, setcount] = useState(0);
             const [page, setPage] = useState(1);
      
        const handleChange = (key,value) => {
          //console.log(key,value);
          setCandidateOverView({ ...canidateOverview, [key]: value });
        };
      
      const handleSubmit = async (e) => {
        e.preventDefault();
      let formdata=new FormData()
      formdata.append("status",canidateOverview.status)
      formdata.append("first_name",canidateOverview.first_name)
      formdata.append("last_name",canidateOverview.last_name)
      formdata.append("middle_name",canidateOverview.middle_name)
      formdata.append("dob",canidateOverview.dob)
      formdata.append("looking_for",canidateOverview.looking_for)
      formdata.append("min_annual_rate",canidateOverview.min_annual_rate)
      formdata.append("target_annual_rate",canidateOverview.target_annual_rate)
      formdata.append("min_hourly_rate",canidateOverview.min_hourly_rate)
      formdata.append("target_hourly_rate",canidateOverview.target_hourly_rate)
      formdata.append("current_title",canidateOverview.current_title)
      formdata.append("available_date",canidateOverview.available_date)
      formdata.append("termination_date",canidateOverview.termination_date)
      formdata.append("termination_reason",canidateOverview.termination_reason)
      
      const result=await apiClient.patch(`/candidates/${current.id}/`,formdata)
      if(!result.ok) return toast.error("Error");
      //console.log(result) ;
      toast.success("Successfully Update ")
      onHide()
      fetchdata()
      // //console.log(formdata)
     
        };
       
        function resetErrors(){
          setMessage({message:"",color:""})
        }
        async function fetchData(){
          // const result= await apiClient.get(`/CandidateStatus/?page=${page}`)
          // if(!result.ok) return toast.error("error")
          // //console.log(result) 
          // if(!count)
          // setcount(result.data.count)
          // setStatus([...status,...result.data?.results])
          setPage(page+1)
        }

        const handleScroll = (event) => {
          const { scrollTop, clientHeight, scrollHeight } = event.target;
          if (scrollTop + clientHeight >= scrollHeight-1) {
            if(count>status.length)
          fetchData()
          }}
          useEffect(() => {
            fetchData()
          }, [])
        if(current)
        return (
          <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ zIndex: "1300" }}
          >
             <form onSubmit={handleSubmit}  >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
               
               Overview
               
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="px-3 py-2" style={{height:400,maxHeight:650,overflowX:"hidden"}}>
      
          
              <Grid container spacing={2}>
                
              {/* <Grid item xs={12} md={6}>
                            <SelectOption
                                  
                                  label="Status"
                                  inputProps={{ maxLength: 150 }}
                                  id="outlined-name"
                                  data={status}
                                value={canidateOverview.status}
                                onChange={(e)=>handleChange("status",e.target.value)}
                                  fullWidth
                                  size={"small"}
                                  style={{ marginBottom: "25px", width:"100%" }}
                                  MenuProps={{
                                    PaperProps: {
                                      onScroll: (e)=>handleScroll(e,"status"),
                                      style: {
                                        maxHeight: "100px",
                                        overflowY: "auto",
                                      },
                                    },
                                  }}
                                />
                                  </Grid> */}
                                
                                 <Grid item xs={12} md={6}>
                        <TextField
                                    
                                   
                                    label="First Name"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={canidateOverview.first_name}
                                    onChange={(e)=>handleChange("first_name",e.target.value)}
                                    onFocus={resetErrors}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                                  </Grid>
                                  <Grid item xs={12} md={6}>
                        <TextField
                                    
                                   
                                    label="Middle Name"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={canidateOverview.middle_name}
                                    onChange={(e)=>handleChange("middle_name",e.target.value)}
                                    onFocus={resetErrors}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                                  </Grid>
                                  <Grid item xs={12} md={6}>
                        <TextField
                                    
                                   
                                    label="Last Name"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={canidateOverview.last_name}
                                    onChange={(e)=>handleChange("last_name",e.target.value)}
                                    onFocus={resetErrors}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                                  </Grid>
      
                                 <Grid item xs={12} md={6}>
                            <SelectOption
                                  
                                  label="Gender"
                                  inputProps={{ maxLength: 150 }}
                                  id="outlined-name"
                                  data={[
                                  {id:"1",name:"Male"},
                                  {id:"2",name:"Female"},
                                  {id:"3",name:"other"},
                                 
                                
                                ]}
                                value={canidateOverview.gender}
                                onChange={(e)=>handleChange("gender",e.target.value)}
                                  fullWidth
                                  size={"small"}
                                  style={{ marginBottom: "25px", width:"100%" }}
                                />
                                  </Grid>
      
                                  <Grid item xs={12} md={6}>
                                  <DateField
                                  
                                  label="Date Of Birth"
                                  
                                  type="date"
                                  id="outlined-name"
                                  onChange={(e)=>handleChange("dob",e.target.value)}
                                  value={canidateOverview.dob}
                                  onFocus={resetErrors}
                                  fullWidth
                                  size={"small"}
                                  sx={{ marginBottom: "25px" }}
                                />
                                  </Grid>
      
                                  <Grid item xs={12} md={12}>
                                  <FormControl required>
        <FormLabel id=" demo-row-radio-buttons-group-label" required>Looking For</FormLabel>
        <RadioGroup
           row
           required
           aria-labelledby="demo-row-radio-buttons-group-label"
           name="row-radio-buttons-group" 
          value={canidateOverview.looking_for}
          onChange={(e)=>handleChange("looking_for",e.target.value)}
        >
          <FormControlLabel value="CON" control={<Radio />} label="Contract" />
          <FormControlLabel value="CTP" control={<Radio />} label="Contract to perm" />
          <FormControlLabel value="PRM" control={<Radio />} label="Perm" />
        </RadioGroup>
      </FormControl>
                                  </Grid>
      
      
                                  <Grid item xs={12} md={6}>
                        <TextField
                                    
                                    label="Min Annual Rate"
                                    type={"Number"}
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={canidateOverview.min_annual_rate}
                                    onChange={(e)=>handleChange("min_annual_rate",e.target.value)}
                                    onFocus={resetErrors}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                                  </Grid>
      
      
                                  <Grid item xs={12} md={6}>
                        <TextField
                                    
                                   
                                    label="Target Annual Rate"
                                    type={"Number"}
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={canidateOverview.target_annual_rate}
                                    onChange={(e)=>handleChange("target_annual_rate",e.target.value)}
                                    onFocus={resetErrors}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                                  </Grid>
      
                                  <Grid item xs={12} md={6}>
                                   <TextField
                                    
                                    label="Min Hourly Rate"
                                    type={"Number"}
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={canidateOverview.min_hourly_rate}
                                    onChange={(e)=>handleChange("min_hourly_rate",e.target.value)}
                                    onFocus={resetErrors}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                    />
                                  </Grid>
      
                                  <Grid item xs={12} md={6}>
                                <TextField
                                    
                                    label="Target Hourly Rate"
                                    type={"Number"}
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={canidateOverview.target_hourly_rate}
                                    onChange={(e)=>handleChange("target_hourly_rate",e.target.value)}
                                    onFocus={resetErrors}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                                  </Grid>
      
                                  <Grid item xs={12} md={6}>
                        <TextField
                                    
                                    label="Current Title"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={canidateOverview.current_title}
                                    onChange={(e)=>handleChange("current_title",e.target.value)}
                                    onFocus={resetErrors}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                                  </Grid>
                                 
                                  <Grid item xs={12} md={6}>
                                  <DateField
                                  
                                  label="Available Date"
                                  
                                  type="date"
                                  id="outlined-name"
                                  onChange={(e)=>handleChange("available_date",e.target.value)}
                                  value={canidateOverview.available_date}
                                  onFocus={resetErrors}
                                  fullWidth
                                  size={"small"}
                                  sx={{ marginBottom: "25px" }}
                                />
                                  </Grid>
      
                                  <Grid item xs={12} md={6}>
                                  <DateField
                                  
                                  label="Termination Date"
                                  
                                  type="date"
                                  id="outlined-name"
                                  onChange={(e)=>handleChange("termination_date",e.target.value)}
                                  value={canidateOverview.termination_date}
                                  onFocus={resetErrors}
                                  fullWidth
                                  size={"small"}
                                  sx={{ marginBottom: "25px" }}
                                />
                                  </Grid>
                                  <Grid item xs={12} md={6}>
                        <TextField
                                    
                                    label="Terminating Reason"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={canidateOverview.termination_reason}
                                    onChange={(e)=>handleChange("termination_reason",e.target.value)}
                                    onFocus={resetErrors}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                                  </Grid>
                                 
                                  
                        </Grid>
                        <CaptchaButton
                            
                            name="submit"
                            type="submit"
                            size="large"
                            
                            style={{
                              backgroundColor: colors.primary,
                              "&:hover": { backgroundColor: "#002370" },
                              whiteSpace: "nowrap",
                              mt: 3,
                              mb: 2,
                            }}
                          />
              </div>                         
            </Modal.Body>
            {/* <Modal.Footer>
              <Button variant="contained" type="submit" >Submitt</Button>
            </Modal.Footer> */}
            </form>
          </Modal>
        );
      }

export default AddCandidateOverview