import React,{useState,useEffect} from 'react'
import {Button,IconButton, Box,FormControlLabel,Grid,TextField,Typography, Switch, Radio, RadioGroup, FormLabel, FormControl } from "@mui/material";
import { Modal } from 'react-bootstrap';
import { toast } from "react-toastify";
import apiClient from "../../api/apiClient";
import CaptchaButton from '../mui/CaptchaButton';
import colors from '../../config/colors';
const AddCandidateAbout = ({fetchdata,current,show,onHide}) => { 
        let empyFields = {
          general_comments: current.general_comments||"",
          summary: current.summary||"",
        };
        
       
        const [newCandidate, setNewCandidate] = useState(empyFields);
        // const [attachments, setAttachments] = useState();
        // const [addCandidate, setAddCandidate] = useState(empyFields)
      
         const [message, setMessage] = useState({text:"",color:""});
      
        const handleChange = (key,value) => {
          //console.log(key,value);
          setNewCandidate({ ...newCandidate, [key]: value });
        };
      
      const handleSubmit = async (e) => {
      e.preventDefault()
      const result=await apiClient.patch(`/candidates/${current.id}/`,newCandidate)
      if(!result.ok) return //console.log(result);
      //console.log(result);
      toast.success("Updated Candidate About")
      onHide()
      fetchdata()
      //console.log(newCandidate)
        };
       
        function resetErrors(){
          setMessage({message:"",color:""})
        }
        return (
          <Modal
          show={show}
          onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ zIndex: "1300" }}
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
              Edit Candidate      
              </Modal.Title>
            </Modal.Header>
            <form onSubmit={handleSubmit} >
            <Modal.Body>
              <div className="px-3 py-2" style={{height:400,maxHeight:400,overflowX:"hidden"}}>
      
              {/* <h3 className="text-center">Add New Candidate</h3> */}
            <div className="candidate-detail check">
             
              <Grid container spacing={2}>
                
                                   <Grid item xs={12} md={12}>
                                <TextField
                                    required
                                    label="General Comments"
                                    multiline
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    type={"text"}
                                   
                                    value={newCandidate.general_comments}
                                    onChange={(e)=>handleChange("general_comments",e.target.value)}
                                    onFocus={resetErrors}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                                  </Grid>
                                   <Grid item xs={12} md={12}>
                                <TextField
                                    required
                                    label="Summary"
                                    multiline
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    type={"text"}
                                    
                                    value={newCandidate.summary}
                                    onChange={(e)=>handleChange("summary",e.target.value)}
                                    onFocus={resetErrors}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                                  </Grid>
                                  
                        </Grid>
                        
             
              </div>
              <CaptchaButton                          
                  name="Submit"
                  type="submit"
                  size="large"
                  style={{
                    backgroundColor: colors.primary,
                    "&:hover": { backgroundColor: "#002370" },
                    whiteSpace: "nowrap",
                    mt: 3,
                    mb: 2,
                  }}/>
              </div>
              
            </Modal.Body>
            </form>
            
          </Modal>
        );
      }

export default AddCandidateAbout