import React,{useState,useEffect} from 'react'
import {Button, Box,FormControlLabel,Grid,TextField, Switch } from "@mui/material";
import { Modal } from 'react-bootstrap';
import DateField from '../mui/DateField';
import { toast } from "react-toastify";
import apiClient from "../../api/apiClient";
import CaptchaButton from '../mui/CaptchaButton';
import colors from '../../config/colors';
const AddEducation = ({ current,show,onHide}) => {
    
        let initialState={
         
      
        }
        
        const[addEduc,setAddEduc]=useState({ minors:false,
          has_graduated:false,
          screening:false})
        const [message, setMessage] = useState({text:"",color:""});
        const handleChange=(key,value)=>{
          setAddEduc({...addEduc,[key]:value})
        }
        const sendEducationHistory = async(data)=> {
          const result=await apiClient.post(`/EducationHistory/${current.id}/`,data)
          if(!result.ok) return toast.error("error");
          toast.success("form submitted")
          onHide()
          //console.log(result);
        }
        const handleSubmit=(e)=>{
      e.preventDefault();
      let formdata=new FormData()
          formdata.append("degree",addEduc.degree)
          formdata.append("institution",addEduc.institution)
          formdata.append("start_date",addEduc.start_date)
          formdata.append("end_date",addEduc.end_date)
          formdata.append("country",addEduc.country)
          formdata.append("state",addEduc.state)
          formdata.append("city",addEduc.city)
          formdata.append("has_graduated",addEduc.has_graduated)
          formdata.append("graduation_year",addEduc.graduation_year)
          formdata.append("gpa",addEduc.gpa)
          formdata.append("majors",addEduc.majors)
          formdata.append("minors",addEduc.minors)
          formdata.append("comments",addEduc.comments)
          formdata.append("screening",addEduc.screening)
          sendEducationHistory(addEduc)
      //console.log(addEduc)
      onHide();
        }
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
             
                <form onSubmit={handleSubmit}>
             <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                 
                  Add Education History
                 
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Box>
                        
                        <div className='py-2' style={{height:400,maxHeight:650,overflowX:"hidden"}}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                        <TextField
                                    required
                                    label="Degree"
                                    
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={addEduc.degree}
                                    onChange={(e)=>handleChange("degree",e.target.value)}
                                    onFocus={resetErrors}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        
                        <TextField
                                    required
                                    label="Institution"
                                    name="position"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={addEduc.institution}
                                    onChange={(e)=>handleChange("institution",e.target.value)}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                        </Grid>
                        <Grid item xs={12} md={6}>
                      
                        <DateField
                        required
                        label="Start Date"
                        
                        type="date"
                        inputProps={{ maxLength: 150 }}
                        id="outlined-name"
                        value={addEduc.start_date}
                        onChange={(e)=>handleChange("start_date",e.target.value)}
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
                       
                        type="date"
                        inputProps={{ maxLength: 150 }}
                        id="outlined-name"
                        value={addEduc.end_date}
                        onChange={(e)=>handleChange("end_date",e.target.value)}
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
                                    value={addEduc.country}
                                    onChange={(e)=>handleChange("country",e.target.value)}
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
                                    value={addEduc.state}
                                    onChange={(e)=>handleChange("state",e.target.value)}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <TextField
                                    required
                                    label="city"
                                   
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={addEduc.city}
                                    onChange={(e)=>handleChange("city",e.target.value)}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                        </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                                    required
                                    label="Graduation Year"
                                  
                                    type={"number"}
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={addEduc.graduation_year}
                                    onChange={(e)=>handleChange("graduation_year",e.target.value)}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                        </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                                    required
                                    label="GPA"
                                   
                                    type={"number"}
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={addEduc.gpa}
                                    onChange={(e)=>handleChange("gpa",e.target.value)}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <TextField
                                    required
                                    label="Majors"
                                   
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={addEduc.majors}
                                    onChange={(e)=>handleChange("majors",e.target.value)}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                        </Grid>
                        {/* <Grid item xs={12} md={6}>
                        <TextField
                                    required
                                    label="Minors"
                                   
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={addEduc.minors}
                                    onChange={(e)=>handleChange("minors",e.target.value)}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                        </Grid> */}
      
                        <Grid item xs={12} md={6}>
                        <FormControlLabel
                          label="Minors"
                          htmlFor="my-switch"
                              control={
                                <Switch
                                  id="my-switch"
                                  checked={addEduc.minors}
                                  onClick={(e)=>handleChange("minors",e.target.value)}
                                  
                                />
                              }
                            
                            />
                      </Grid>
      
                        <Grid item xs={12} md={6}>
                        <TextField
                                    required
                                    multiline
                                    label="Comments"
                                    name="Comment"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={addEduc.comments}
                                    onChange={(e)=>handleChange("comments",e.target.value)}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <FormControlLabel
                          label="Has Graduated"
                          htmlFor="my-switch"
                              control={
                                <Switch
                                  id="my-switch"
                                  checked={addEduc.has_graduated}
                                  onClick={(e)=>handleChange("has_graduated",!addEduc.has_graduated)}
                                  
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
                                  checked={addEduc.screening}
                                  onClick={(e)=>handleChange("screening",!addEduc.screening)}
                                  
                                />
                              }
                            
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
           </Box>
                
              </Modal.Body>
              {/* <Modal.Footer>
                <Button variant="contained" type="submit">Submitt</Button>
              </Modal.Footer> */}
              </form>
          </Modal>
          )
      }

export default AddEducation