import React,{useState,useEffect} from 'react'
import {Button, Box,FormControlLabel,Grid,TextField, Switch } from "@mui/material";
import { Modal } from 'react-bootstrap';
import { toast } from "react-toastify";
import apiClient from "../../api/apiClient";
import { SelectOption } from '../mui';
import CaptchaButton from '../mui/CaptchaButton';
import colors from '../../config/colors';
const AddAddress = ({fetchdata,addresss,current,show,onHide}) => {
        let emptyFields={
          type:addresss?.type||"",
          name:addresss?.name||"",
          address_line_1:addresss?.address_line_1||"",
          address_line_2:addresss?.address_line_2||"",
          city:addresss?.city||"",
          state:addresss?.state||"",
          zip:addresss?.zip||"",
          country:addresss?.country||""
      
        }
       
        const[address,setAddress]=useState(emptyFields)

        const handleChange=(key,value)=>{

          //console.log(key,value)
          if(key=="zip"&&value.length>5) return
          
          setAddress({...address,[key]:value})
        }
        const sendAddress=async(data)=>{
          const result=await apiClient.post(`/CandidateAddress/${current.id}/`,data)
          if(!result.ok) return toast.error("error");
          toast.success("Successfully added ")
          onHide();
          fetchdata()
          //console.log(result);
        }
        const updateAddress=async(data)=>{
          const result=await apiClient.put(`/CandidateAddress/${addresss.id}/`,data)
          if(!result.ok) return toast.error("error");
          toast.success("Successfully Update ")
          onHide();
          fetchdata()
          //console.log(result);
        }
        const handleSubmit=(e)=>{
      e.preventDefault();
      let formdata=new FormData()
          formdata.append("type",address.type)
          formdata.append("name",address.name)
          formdata.append("address_line_1",address.address_line_1)
          formdata.append("address_line_2",address.address_line_2)
          formdata.append("city",address.city)
          formdata.append("country",address.country)
          formdata.append("state",address.state)
          formdata.append("zip",address.zip)
          addresss?updateAddress(formdata):
          sendAddress(formdata)
   
      //console.log(address)
        }
        return(
          <Modal
          show={show}
          onHide={onHide}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              
              style={{ zIndex: "1300" }}>
             
                <form onSubmit={handleSubmit}>
             <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                 
                  {addresss?"Update Location":"Add Location"}
                 
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <div className='py-2' style={{height:400,maxHeight:650,overflowX:"hidden"}}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                          <SelectOption
                      
                      required
                      label="Address Type"
                      name="position"
                      inputProps={{ maxLength: 150 }}
                      id="outlined-name"
                      data={[
                      {id:"Home Address",name:"Home Address"},
                      {id:"Main Address",name:"Main Address"},
                      {id:"Other Address",name:"Other Address"},
                    
                    ]}
                    value={address.type}
                    onChange={(e)=>handleChange("type",e.target.value)}
                      fullWidth
                      size={"small"}
                      style={{ marginBottom: "25px", width:"100%" }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                                    required
                                    label="Name"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={address.name}
                                    onChange={(e)=>handleChange("name",e.target.value)}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                                    required
                                    label="AddressLine 1"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={address.address_line_1}
                                    onChange={(e)=>handleChange("address_line_1",e.target.value)}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                                    required
                                    label="AddressLine 2"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={address.address_line_2}
                                    onChange={(e)=>handleChange("address_line_2",e.target.value)}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                                    required
                                    label="City"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={address.city}
                                    onChange={(e)=>handleChange("city",e.target.value)}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                                    required
                                    label="Zip Code"
                                    type='number'
                                    inputProps={{ maxLength: 5 }}
                                    id="outlined-name"
                                    value={address.zip}
                                    onChange={(e)=>handleChange("zip",e.target.value)}
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
                                    value={address.country}
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
                                    value={address.state}
                                    onChange={(e)=>handleChange("state",e.target.value)}
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

export default AddAddress