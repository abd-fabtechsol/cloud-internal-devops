import React,{useState,useEffect ,useRef} from 'react'
import {Button,IconButton, Box,FormControlLabel,Grid,TextField,Typography, Switch, Radio, RadioGroup, FormLabel, FormControl } from "@mui/material";
import { Modal } from 'react-bootstrap';
import useApi from "./../../hooks/useApi";
import { toast } from "react-toastify";
import apiClient from "../../api/apiClient";
import { SelectOptionEdit } from '../mui/SelectOption';
import CaptchaButton from '../mui/CaptchaButton';
import colors from '../../config/colors';

const EditPositionModal = ({current,fetchData:fetchData2,show,onHide}) => {

        //console.log(current);
        let empyFields = {
          title:current.title||"",
          description:current.description||"",
          no_of_positions:current.no_of_positions||"",
          status:"",
          request_reason:current.request_reason||"",
          submittal_limit:current.submittal_limit||"",
          general_comments:current.general_comments||"",
          hiring_manager:current.hiring_manager||"",
          report_to:current.report_to||"",
          working_position_owner:current.working_position_owner||"",
          cio:current.cio||"",
          auto_offer:current.auto_offer||true,
          type:"",
          speciality:"",
         
        };
      
      
        const [newPosition, setNewPosition] = useState(empyFields);
        const [message, setMessage] = useState({text:"",color:""});
        const [speciality, setSpeciality] = useState([]);
        const [type, setType] = useState([]);
        const [page, setPage] = useState(1);
        const [pages, setPages] = useState(1);
        const [status, setStatus] = useState([]);
        const [pag, setPag] = useState(1);

      
        const handlePositionChange = (key,value) => {
          setNewPosition({ ...newPosition, [key]: value });
        };
      
      
        function resetErrors(){
          setMessage({message:"",color:""})
        }
        const form1=useRef()
        useEffect(()=>{
          fetchData()
          fetchSpciality()
          fetchType()
          statusDat()
        },[])
        // const apiSpeciality=useApi(()=>apiClient.get("/CandidateStatus/"))
        const apiPositionType=useApi(()=>apiClient.get("/PositionType"))
        const apiPosition=useApi((data)=>apiClient.patch(`/positions/${current.id}/`,data))
          
        async function fetchData(){
      //  await apiSpeciality.request()
      await apiPositionType.request()
         
         }
         async function handleSubmit(e){
          e.preventDefault()
          let result2= form1.current.reportValidity()
          if(!result2) return
          if(!newPosition.type)
          delete newPosition.type
          if(!newPosition.speciality)
          delete newPosition.speciality
          const result= await apiPosition.request({        
            ...newPosition})
            if(!result.ok) return toast.error("Can't Create")
            toast.success("Updated Successfully")
            onHide()
            fetchData2()
      
         }
         async function fetchType(){
          const result=await apiClient.get(`/PositionType/?page=${pages}`)
          //console.log(result,"data")
          if(result.data.results)
          setType([...type,...result.data?.results])
          //console.log(speciality)
          setPages(pages+1)
         }
         async function fetchSpciality(){
          const result=await apiClient.get(`/PositionSpeciality/?page=${page}`)
          //console.log(result,"data")
          if(result.data.results)
          setSpeciality([...speciality,...result.data?.results])
          //console.log(speciality)
          setPage(page+1)
         }
         const handleScroll = (event,type) => {
          const { scrollTop, clientHeight, scrollHeight } = event.target;
          if (scrollTop + clientHeight >= scrollHeight-1) {
            //console.log(type)
         if(type=="type")
          fetchType()
          else if(type=="Speciality")
          fetchSpciality()
          else
          statusDat()
          }
        };
        const statusDat=async ()=>{
          // const result=await apiClient.get(`/CandidateStatus/?page=${pag}`)
          // if(!result.ok) return
          // setStatus([...status,...result.data?.results])
          // setPag(pag+1)
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
                Update  Position
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="d-flex justify-content-between">
                
              <div style={{height:400,maxHeight:400,overflowX:"hidden"}}>
      
             
              <h6 className="text-center">Position</h6>
             <div className="candidate-detail check">
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
                      
                        <SelectOptionEdit
                        
                               
                                    label={"Status"}
                                    name="position"
                                    renderValue={(selected,...props)=>{
                                      //console.log(props,"reMAING DATA")
                                      return(
                                      <p>{selected}</p>
                                    )}}
                                    defaultSelected={current.status}
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={newPosition.status}
                                    onChange={(e)=>handlePositionChange("status",e.target.value)}
                                   
                                    onFocus={resetErrors}
                                    data={status}
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
                      
                      <SelectOptionEdit
                      
                                  label="Type"
                                  name="type"
                                  defaultSelected={current.type}
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
                                      onScroll: (e)=>handleScroll(e,"type"),
                                      style: {
                                        maxHeight: "100px",
                                        overflowY: "auto",
                                      },
                                    },
                                  }}
                                />
                      </Grid>
                      <Grid item xs={12} md={6}>
                      
                      <SelectOptionEdit
                      
                                  label="Speciality"
                                  name="speciality"
                                  defaultSelected={current.speciality}
                                  inputProps={{ maxLength: 150 }}
                                  id="outlined-name"
                                  value={newPosition.speciality}
                                  onChange={(e)=>handlePositionChange("speciality",e.target.value)}
                                 
                                  onFocus={resetErrors}
                                  data={speciality}
                                  fullWidth
                                  size={"small"}
                                  style={{ marginBottom: "25px", width:"100%" }}
                                  MenuProps={{
                                    PaperProps: {
                                      onScroll: (e)=>handleScroll(e,"speciality"),
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
                        <CaptchaButton
                  //  disabled={!loading}
         
                  name="Create"
                  type="submit"
                  size="large"
                  onClick={handleSubmit}
                  style={{
                    backgroundColor: colors.primary,
                    "&:hover": { backgroundColor: "#002370" },
                    whiteSpace: "nowrap",
                    mt: 3,
                    mb: 2,
                  }}
                />
           </Box>
                </form>
              </div>
      
              </div></div>
              
            </Modal.Body>
            {/* <Modal.Footer>
           
           <Button variant="contained" onClick={handleSubmit}>Create</Button>
               
      
            </Modal.Footer> */}
          </Modal>
        );
      }

export default EditPositionModal