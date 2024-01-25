import React,{useState,useEffect} from 'react'
import {Button, Box,FormControlLabel,Grid,TextField, Switch } from "@mui/material";
import { Modal } from 'react-bootstrap';
import { toast } from "react-toastify";
import apiClient from "../../api/apiClient";
import DateField from '../mui/DateField';
import { SelectOption } from '../mui';
import CaptchaButton from '../mui/CaptchaButton';
import colors from '../../config/colors';
import { processErrors } from '../../modules/handleErrors';
const AddAdditionalInfoo = ({fetchdata,current,show,onHide}) => {
    const oldData=current?.candidate_info[0]
        const[additionInfo,setAdditionInfo]=useState(oldData||{})
        const [message, setMessage] = useState({text:"",color:""});
        //console.log(show,"show")
        const handleChange = (key,value) => {
          //console.log(key,value);
          setAdditionInfo({ ...additionInfo, [key]: value });
        };
        const sendAdditionInfo=async (data)=>{
          let result
          if(oldData){
const {id,...otherData}=data
            result=await apiClient.put(`/CandidateInfo/${current?.candidate_info[0].id}/`,otherData)
          }
          else
          result=await apiClient.post(`/CandidateInfo/${current.id}/`,data)
          if(!result.ok) return processErrors(result.data)
          toast.success(oldData?"Updated Info":"Successfully added")
          onHide()
          fetchdata()
          //console.log(result);
        }
      
      const handleSubmit = async (e) => {
      e.preventDefault()
      let formdata=new FormData()
      formdata.append("lawson_id",additionInfo.lawson_id)
      formdata.append("ein",additionInfo.ein)
      formdata.append("lawson_id2",additionInfo.lawson_id2)
      formdata.append("pe",additionInfo.pe)
      formdata.append("et",additionInfo.et)
      formdata.append("flsa",additionInfo.flsa)
      formdata.append("vt",additionInfo.vt)
      formdata.append("ve",additionInfo.ve)
      formdata.append("erid",additionInfo.erid)
      formdata.append("npi",additionInfo.npi)
      formdata.append("pln",additionInfo.pln)
      formdata.append("hp",additionInfo.hp)
      sendAdditionInfo(additionInfo)
      // const result=await apiClient.post("/candidates/",formdata)
      // if(!result.ok) return //console.log(result);
      // //console.log(result);
      // toast.success("Success added new Candidate")
      // props.onHide()
      // //console.log(formdata)
      //console.log(additionInfo)
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
            
            style={{ zIndex: "1300" }}>
            <form  onSubmit={handleSubmit}>
           
           <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
               
                Addition Info
               
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className='py-2' style={{height:400,maxHeight:650,overflowX:"hidden"}}>
              <Grid container spacing={2}>
                
                                   <Grid item xs={12} md={6}>
                        <TextField
                                    required
                                    
                                    label="lawson 3-4 id "
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={additionInfo.lawson_id}
                                    onChange={(e)=>handleChange("lawson_id",e.target.value)}
                                    onFocus={resetErrors}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                                  </Grid>
                                 <Grid item xs={12} md={6}>
                        <TextField
                                    required
                                   
                                    label="Lawson EIN"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={additionInfo.ein}
                                    onChange={(e)=>handleChange("ein",e.target.value)}
                                    onFocus={resetErrors}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                                  </Grid>
                                  <Grid item xs={12} md={6}>
                        <TextField
                                    required
                                   
                                    label="Lawson 3/4"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={additionInfo.lawson_id2}
                                    onChange={(e)=>handleChange("lawson_id2",e.target.value)}
                                    onFocus={resetErrors}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                                  </Grid>
                                  {/* <Grid item xs={12} md={6}>
                        <TextField
                                    required
                                   
                                    label="Prvious Employee"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={additionInfo.pe}
                                    onChange={(e)=>handleChange("pe",e.target.value)}
                                    onFocus={resetErrors}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                                  </Grid> */}
                                   <Grid item xs={12} md={6}>
                          <SelectOption
                      
                      required
                      label="Previous Employee"
                      inputProps={{ maxLength: 150 }}
                      id="outlined-name"
                      data={[
                      {id:"Y",name:"Yes"},
                      {id:"N",name:"No"},
                      
                    
                    ]}
                    value={additionInfo.pe}
                    onChange={(e)=>handleChange("pe",e.target.value)}
                      fullWidth
                      size={"small"}
                      style={{ marginBottom: "25px", width:"100%" }}
                      
                    />
                </Grid>
                                  <Grid item xs={12} md={6}>
                        <TextField
                                    required
                                   
                                    label="Employee Type"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={additionInfo.et}
                                    onChange={(e)=>handleChange("et",e.target.value)}
                                    onFocus={resetErrors}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                                  </Grid>
                                  {/* <Grid item xs={12} md={6}>
                        <TextField
                                    required
                                   
                                    label="FLSA"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={additionInfo.flsa}
                                    onChange={(e)=>handleChange("flsa",e.target.value)}
                                    onFocus={resetErrors}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                                  </Grid> */}
                                   <Grid item xs={12} md={6}>
                          <SelectOption
                      
                      required
                      label="FLSA"
                      inputProps={{ maxLength: 150 }}
                      id="outlined-name"
                      data={[
                      {id:"EX",name:"Exempt"},
                      {id:"NE",name:"Non Exempt"},
                      {id:"CP",name:"Computer Profession"},
                    
                    ]}
                    value={additionInfo.flsa}
                    onChange={(e)=>handleChange("flsa",e.target.value)}
                      fullWidth
                      size={"small"}
                      style={{ marginBottom: "25px", width:"100%" }}
                    />
                </Grid>
                                  <Grid item xs={12} md={6}>
                        <TextField
                                    required
                                   
                                    label="Visa Type"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={additionInfo.vt}
                                    onChange={(e)=>handleChange("vt",e.target.value)}
                                    onFocus={resetErrors}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                                  </Grid>
                                  <Grid item xs={12} md={6}>
                        {/* <TextField
                                    required
                                   
                                    label="Visa Expiration"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={additionInfo.ve}
                                    onChange={(e)=>handleChange("ve",e.target.value)}
                                    onFocus={resetErrors}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  /> */}
                                  <DateField
               
               label="Visa Expiration"
               
               type="date"
               id="outlined-name"
               onChange={(e)=>handleChange("ve",e.target.value)}
               value={additionInfo.ve}
               onFocus={resetErrors}
               fullWidth
               size={"small"}
               sx={{ marginBottom: "25px" }}
             />
                                  </Grid>
                                  <Grid item xs={12} md={6}>
                        <TextField
                                    required
                                   
                                    label="External Refernce ID"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={additionInfo.erid}
                                    onChange={(e)=>handleChange("erid",e.target.value)}
                                    onFocus={resetErrors}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                                  </Grid>
                                  <Grid item xs={12} md={6}>
                        <TextField
                                    required
                                   
                                    label="NPI number"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={additionInfo.npi}
                                    onChange={(e)=>handleChange("npi",e.target.value)}
                                    onFocus={resetErrors}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                                  </Grid>
                                  <Grid item xs={12} md={6}>
                        <TextField
                                    required
                                   
                                    label="Profession License Number"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={additionInfo.pln}
                                    onChange={(e)=>handleChange("pln",e.target.value)}
                                    onFocus={resetErrors}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                                  </Grid>
                                  <Grid item xs={12} md={6}>
                        {/* <TextField
                                    required
                                   
                                    label="Profession License Expiration Date"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={additionInfo.plne}
                                    onChange={(e)=>handleChange("plne",e.target.value)}
                                    onFocus={resetErrors}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  /> */}
                                  <DateField
               
               label="Profession License Expiration Date"
               
               type="date"
               id="outlined-name"
               onChange={(e)=>handleChange("plne",e.target.value)}
               value={additionInfo.plne}
               onFocus={resetErrors}
               fullWidth
               size={"small"}
               sx={{ marginBottom: "25px" }}
             />
                                  </Grid>
                                  <Grid item xs={12} md={6}>
                        <TextField
                                    required
                                   
                                    label="Hot Prospect"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={additionInfo.hp}
                                    onChange={(e)=>handleChange("hp",e.target.value)}
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
              <Button variant="contained" type="submit">Submitt</Button>
            </Modal.Footer> */}
                         </form>
        </Modal>
        )
      }

export default AddAdditionalInfoo