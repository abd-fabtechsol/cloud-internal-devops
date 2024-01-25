import React,{useState,useEffect} from 'react'
import {Button, Box,FormControlLabel,Grid,TextField, Switch } from "@mui/material";
import { Modal } from 'react-bootstrap';
import { toast } from "react-toastify";
import apiClient from "../../api/apiClient";
import DateField from '../mui/DateField';
import CaptchaButton from '../mui/CaptchaButton';
import colors from '../../config/colors';

const AddExperience = ({current,show,onHide}) => {
   

        const[addExperi,setAddExperi]=useState({
          screening:false,
          permission:false,
          current_employer:false
        })
        const [message, setMessage] = useState({text:"",color:""});
        //console.log(show,"show")
        const sendExperience= async (data)=>{
          const result=await apiClient.post(`/WorkExperience/${current.id}/`,data)
          if(!result.ok) return toast.error("error");
          toast.success("form submitted")
          //console.log(result);
        }
        const handleChange = (key,value) => {
          setAddExperi({ ...addExperi, [key]: value });
        };
        const handleSubmit = async (e) => {
          e.preventDefault()
          let formdata=new FormData()
          formdata.append("title",addExperi.title)
          formdata.append("company",addExperi.company)
          formdata.append("description",addExperi.description)
          formdata.append("country",addExperi.country)
          formdata.append("state",addExperi.state)
          formdata.append("start_date",addExperi.start_date)
          formdata.append("end_date",addExperi.end_date)
          formdata.append("et",addExperi.et)
          formdata.append("tob",addExperi.tob)
          formdata.append("current_employer",addExperi.current_employer)
          formdata.append("reason_for_leaving",addExperi.reason_for_leaving)
          formdata.append("s_name",addExperi.s_name)
          formdata.append("s_phone",addExperi.s_phone)
          formdata.append("permission",addExperi.permission)
          formdata.append("screening",addExperi.screening)
          formdata.append("positiontype",addExperi.positiontype)
          sendExperience(formdata)
          // const result=await apiClient.post("/candidates/",formdata)
          // if(!result.ok) return //console.log(result);
          // //console.log(result);
          // toast.success("Success added new Candidate")
          // props.onHide()
          // //console.log(formdata)
          //console.log(addExperi)
          onHide();
            };
           
            function resetErrors(){
              setMessage({message:"",color:""})
            }
            return(
              <Modal
              show={show}
              onHide={onHide}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                  
                  style={{ zIndex: 2000 }}>
                 <form onSubmit={handleSubmit} >
                 <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                     
                      Add Experience
                     
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <div className='py-2' style={{height:400,maxHeight:650,overflowX:"hidden"}}>
      <Grid container spacing={2}>
                
                <Grid item xs={12} md={6}>
      <TextField
                 required
                 
                 label="Title"
                 inputProps={{ maxLength: 150 }}
                 id="outlined-name"
                 value={addExperi.title}
                 onChange={(e)=>handleChange("title",e.target.value)}
                 onFocus={resetErrors}
                 fullWidth
                 size={"small"}
                 sx={{ marginBottom: "25px" }}
               />
               </Grid>
              <Grid item xs={12} md={6}>
      <TextField
                 required
                
                 label="Company"
                 inputProps={{ maxLength: 150 }}
                 id="outlined-name"
                 value={addExperi.company}
                 onChange={(e)=>handleChange("company",e.target.value)}
                 onFocus={resetErrors}
                 fullWidth
                 size={"small"}
                 sx={{ marginBottom: "25px" }}
               />
               </Grid>
               <Grid item xs={12} md={6}>
      <TextField
                 required
                
                 label="Description"
                 inputProps={{ maxLength: 150 }}
                 id="outlined-name"
                 value={addExperi.descrption}
                 onChange={(e)=>handleChange("description",e.target.value)}
                 onFocus={resetErrors}
                 fullWidth
                 size={"small"}
                 sx={{ marginBottom: "25px" }}
               />
               </Grid>
               <Grid item xs={12} md={6}>
      <TextField
                 required
                
                 label="Country"
                 inputProps={{ maxLength: 150 }}
                 id="outlined-name"
                 value={addExperi.country}
                 onChange={(e)=>handleChange("country",e.target.value)}
                 onFocus={resetErrors}
                 fullWidth
                 size={"small"}
                 sx={{ marginBottom: "25px" }}
               />
               </Grid>
               <Grid item xs={12} md={6}>
      <TextField
                 required
                
                 label="State"
                 inputProps={{ maxLength: 150 }}
                 id="outlined-name"
                 value={addExperi.state}
                 onChange={(e)=>handleChange("state",e.target.value)}
                 onFocus={resetErrors}
                 fullWidth
                 size={"small"}
                 sx={{ marginBottom: "25px" }}
               />
               </Grid>
               <Grid item xs={12} md={6}>
      <TextField
                 required
                
                 label="Employement Type"
                 inputProps={{ maxLength: 150 }}
                 id="outlined-name"
                 value={addExperi.et}
                 onChange={(e)=>handleChange("et",e.target.value)}
                 onFocus={resetErrors}
                 fullWidth
                 size={"small"}
                 sx={{ marginBottom: "25px" }}
               />
               </Grid>
               <Grid item xs={12} md={6}>
      <TextField
                 required
                
                 label="Type of bussiness"
                 inputProps={{ maxLength: 150 }}
                 id="outlined-name"
                 value={addExperi.tob}
                 onChange={(e)=>handleChange("tob",e.target.value)}
                 onFocus={resetErrors}
                 fullWidth
                 size={"small"}
                 sx={{ marginBottom: "25px" }}
               />
               </Grid>
               <Grid item xs={12} md={6}>
                        <FormControlLabel
                          label="Is Current Employee"
                          htmlFor="my-switch"
                              control={
                                <Switch
                                  id="my-switch"
                                  checked={addExperi.current_employer}
                                  onClick={()=>handleChange("current_employer",!addExperi.current_employer)}
                                  
                                />
                              }
                            
                            />
                        </Grid>
               <Grid item xs={12} md={6}>
      <TextField
                 required
                
                 label="Reason For Leaving"
                 inputProps={{ maxLength: 150 }}
                 id="outlined-name"
                 value={addExperi.reason_for_leaving}
                 onChange={(e)=>handleChange("reason_for_leaving",e.target.value)}
                 onFocus={resetErrors}
                 fullWidth
                 size={"small"}
                 sx={{ marginBottom: "25px" }}
               />
               </Grid>
               <Grid item xs={12} md={6}>
      <TextField
                 required
                
                 label="Supervisor Name"
                 inputProps={{ maxLength: 150 }}
                 id="outlined-name"
                 value={addExperi.s_name}
                 onChange={(e)=>handleChange("s_name",e.target.value)}
                 onFocus={resetErrors}
                 fullWidth
                 size={"small"}
                 sx={{ marginBottom: "25px" }}
               />
               </Grid>
               <Grid item xs={12} md={6}>
      <TextField
                 required
                
                 label="Supervisor Phone"
                 inputProps={{ maxLength: 150 }}
                 onInput={(e) => {
                  let value = e.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
                  value = value.slice(0, 10); // Limit maximum length to 12 characters
              
                  if (value.length > 3) {
                    value = value.slice(0, 3) + '-' + value.slice(3);
                  }
                  if (value.length > 7) {
                    value = value.slice(0, 7) + '-' + value.slice(7);
                  }
              
                  e.target.value = value;
                }}
                 id="outlined-name"
                 value={addExperi.s_phone}
                 onChange={(e)=>handleChange("s_phone",e.target.value)}
                 onFocus={resetErrors}
                 fullWidth
                 size={"small"}
                 sx={{ marginBottom: "25px" }}
               />
               </Grid>
               <Grid item xs={12} md={6}>
      <TextField
                 required
                
                 label="position type"
                 inputProps={{ maxLength: 150 }}
                 id="outlined-name"
                 value={addExperi.positiontype}
                 onChange={(e)=>handleChange("positiontype",e.target.value)}
                 onFocus={resetErrors}
                 fullWidth
                 size={"small"}
                 sx={{ marginBottom: "25px" }}
               />
               </Grid>
               <Grid item xs={12} md={6}>
                        <FormControlLabel
                          label="Permission granted to contact supervisor"
                          htmlFor="my-switch"
                              control={
                                <Switch
                                  id="my-switch"
                                  checked={addExperi.permission}
                                  onClick={()=>handleChange("permission",!addExperi.permission)}
                                  
                                />
                              }
                            
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <FormControlLabel
                          label="Include in Screening"
                          htmlFor="my-switch"
                              control={
                                <Switch
                                  id="my-switch"
                                  checked={addExperi.screening}
                                  onClick={()=>handleChange("screening",!addExperi.screening)}
                                  
                                />
                              }
                            
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
               <DateField
               
               label="Start Date"
               
               type="date"
               id="outlined-name"
               onChange={(e)=>handleChange("start_date",e.target.value)}
               value={addExperi.start_date}
               onFocus={resetErrors}
               fullWidth
               size={"small"}
               sx={{ marginBottom: "25px" }}
             />
               </Grid>   
               <Grid item xs={12} md={6}>
               <DateField
               
               label="End Date"
               
               type="date"
               id="outlined-name"
               onChange={(e)=>handleChange("end_date",e.target.value)}
               value={addExperi.end_date}
               onFocus={resetErrors}
               fullWidth
               size={"small"}
               sx={{ marginBottom: "25px" }}
             />
               </Grid>
               
              
               
      </Grid><CaptchaButton
                            
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
                  <Button variant="contained" type="submit">Submit</Button>
                  </Modal.Footer> */}
                  </form>
              </Modal>
              )
      }

export default AddExperience