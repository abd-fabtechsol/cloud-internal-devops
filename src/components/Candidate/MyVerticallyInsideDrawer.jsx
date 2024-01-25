import React,{useState,useEffect} from 'react'
import {Button, Box,FormControlLabel,Grid,TextField,Typography, Switch, Radio, RadioGroup, FormLabel, FormControl } from "@mui/material";
import { Modal } from 'react-bootstrap';
import { TfiUpload } from "react-icons/tfi";
import apiClient from "../../api/apiClient";
import DateField from '../mui/DateField';
import { SelectOption } from '../mui';
import { toast } from 'react-toastify';
import colors from "../../config/colors";
import { LoadingOverlaySmall } from '../mui/LoadingOverlay';
import CaptchaButton from '../mui/CaptchaButton';
const MyVerticallyInsideDrawer = ({current,show,onHide}) => {
        let empyFields = {
        date:"",
        work_From_Home:true,
        notes:"",
        position:"",
        candidate:current?.first_name,
        resume:"",
        };
        const [newPosition, setNewPosition] = useState(empyFields);
        const [loading, setLoading] = useState(false);
        const [positionType, setPositionType] = useState([]);
        const [message, setMessage] = useState({text:"",color:""});
      const limit=5
      const [offset,setOffset]=useState(0)
      
        const handleChange = (key,value) => {
         
          setNewPosition({ ...newPosition, [key]: value });
       
        };
        useEffect(()=>{
          fetchPositionData()
        },[])
      async function fetchPositionData(){
        setLoading(true)
      const result=await apiClient.get(`/positions/?status=OP&limit=${limit}&offset=${offset}`)
      setLoading(false)
      if(!result.ok) return
      let newData=[]
      for (const item of result.data?.results) {
        newData.push({id:item.id,value:item.title})
      }
      //console.log(newData);
      setPositionType([...positionType,...newData])
      setOffset(offset+limit)
      }
      const handleScroll = (event) => {
        const { scrollTop, clientHeight, scrollHeight } = event.target;
        //console.log(scrollTop,clientHeight,scrollHeight);
        if (scrollTop + clientHeight >= scrollHeight-1) {
          fetchPositionData();
        }
      };
      
        const handleSubmit = async (event) => {
          event.preventDefault();
          const formData=new FormData();
          formData.append("date",newPosition.date)
          formData.append("notes",newPosition.notes)
          formData.append("work_From_Home",newPosition.work_From_Home)
          formData.append("position",newPosition.position)
          formData.append("candidate",current.id)
          formData.append("attachment",newPosition.resume)
          const result=await apiClient.post("/matches/",formData)
          if(!result.ok) return toast.error("error")
          toast.success("Match Successfully Created")
          onHide()
          //console.log(result);
        };
        function resetErrors(){
          setMessage({message:"",color:""})
        }
        console.log(newPosition.resume,"asd");
        const [step,setStep]=useState(1)
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
          <form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Add New Match
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               
              
      
             
         
            
              <div style={{height:400,maxHeight:400,overflowX:"hidden"}}>
                <div className="candidate-info mt-2">
               <Box sx={{display:"flex",justifyContent:"center"}}>
                  
      
                      <Grid container spacing={2} maxWidth={"sm"} >
                        {/* <Grid item xs={12}>
                          <Typography fontSize={24} fontWeight={600}>Select Match</Typography>
                        </Grid> */}
                        <Grid item xs={12}>
                          <Typography fontSize={12} fontWeight={300}>Please Provide information</Typography>
                        </Grid>
                        <Grid item xs={12} >
                      
                      <TextField
                      
                                  required
                                  disabled
                                  label="Candidate"
                                  name="candidate"
                                  inputProps={{ maxLength: 150 }}
                                  id="outlined-name"
                                  onChange={(e)=>handleChange("candidate",e.target.value)}
                                  value={newPosition.candidate}
                                  onFocus={resetErrors}
                                  fullWidth
                                  size={"small"}
                                  style={{ marginBottom: "25px", width:"100%" }}
                                />
                    </Grid>
                      <Grid item xs={12} >
                      
                      <SelectOption
                                  required
                                  label="Positions"
                                  name="position"
                                  inputProps={{ maxLength: 150 }}
                                  id="outlined-name"
                                  onChange={(e)=>handleChange("position",e.target.value)}
                                  value={newPosition.position}
                                  onFocus={resetErrors}
                                  data={positionType}
                                  fullWidth
                                  size={"small"}
                                  style={{ marginBottom: "25px", width:"100%"}}
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
                 
                     
                    <Grid item xs={12}>
            <TextField
            name="notes"
          id="outlined-multiline-static"
          label="Candidate Note"
          multiline
          rows={4}
          defaultValue=""
          fullWidth
          onChange={(e)=>handleChange("notes", e.target.value)}
          value={newPosition.notes}
        />
            </Grid>
                        <Grid item xs={12} >
                        <FormControlLabel
                          label="Work Home"
                          htmlFor="my-switch"
                              control={
                                <Switch
                                  id="my-switch"
                                  checked={newPosition.work_From_Home}
                                  onClick={()=>handleChange("work_From_Home",!newPosition.work_From_Home)}
                                  
                                />
                              }
                            
                            />
                        </Grid>
                        {/* <Grid item xs={12}>
                        <FormControl>
        <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="true"
          name="work_From_Home"
          onChange={(e)=>handleChange("work_From_Home",e.target.value)}
        >
          <FormControlLabel value="Work Home" control={<Radio />} label="Work From Home"  sx={{fontSize:"18px",fontWeight:"500"}} />
          <FormControlLabel value="Site Work" control={<Radio />} label="Site Work"  sx={{fontSize:"18px",fontWeight:"500"}} />
        </RadioGroup>
      </FormControl>
                        </Grid> */}
                        {/* <Grid  item xs={12} >
                        
                        <TextField
                                    required
                                    multiline
                                    label="Work Site"
                                    name="work_From_Home"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    onChange={(e)=>handleChange("work_From_Home",e.target.value)}
                                    value={newPosition.work_From_Home}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                        </Grid> */}
                       
                        <Grid item xs={12}>
                   <DateField
                                  
                                  label="Project Start Date"
                                  name="date"
                                  type="date"
                                  id="outlined-name"
                                  onChange={(e)=>handleChange("date",e.target.value)}
                                  value={newPosition.date}
                                  onFocus={resetErrors}
                                  fullWidth
                                  size={"small"}
                                  sx={{ marginBottom: "25px" }}
                                />
                   </Grid>
      
                      {/* <Grid item xs={12}>
                      <input type="file" name="resume" id="resumeUp" onChange={(e)=>handleChange("resume",e.target.files[0])}/>
                      </Grid> */}
      
                      <Grid item xs={12}>
                        <h5>
                  Candidate Resume
                  </h5>
                  <label htmlFor="resumeUp"className="d-flex justify-content-center align-items-center m-3 rounded" style={{height:'300px', borderStyle:"dotted" }}>
                    <div className="d-flex flex-column align-items-center gap-1">
                  
                    <TfiUpload size={50}/>
                    {newPosition.resume&& <p>{newPosition.resume.name}</p>}
                    </div>
                  </label>
                  <input type="file" name="" id="resumeUp" hidden onChange={(e)=>handleChange("resume",e.target.files[0])} />
                  
                        </Grid>
      
                        </Grid>
      {/*     
              <AdminButton
                    name="Submit"
                    type="submit"
                    size="medium"
                    style={{
                      backgroundColor: "#00184c",
                      "&:hover": { backgroundColor: "#002370" },
                      whiteSpace: "nowrap",
                    }}
                  /> */}
      
      
      
      
           </Box>
           {/* ------------------------------------- */}
           <Grid item xs={12} sx={{display:'flex',justifyContent:"center"}}>
           </Grid>
           {loading?<LoadingOverlaySmall open={loading}/>:
           <CaptchaButton name="submit"
                  type="submit"
                  size="large"
                                   style={{
                    backgroundColor: colors.primary,
                    "&:hover": { backgroundColor: "#002370" },
                    whiteSpace: "nowrap",
                    mt: 3,
                    mb: 2,}}/>
                    }
           </div>
           </div>
              
             
      
             
              
            </Modal.Body>
            
            {/* <Modal.Footer>
            <Button type="submit" variant="contained" >Submit</Button>
        
            </Modal.Footer> */}
          </form>
          </Modal>
        );
      }

export default MyVerticallyInsideDrawer