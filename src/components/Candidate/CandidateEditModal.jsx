import React,{useState,useEffect ,useRef} from 'react'
import { TfiUpload } from "react-icons/tfi";
import {Button,IconButton, Box,FormControlLabel,Grid,TextField,Typography, Switch, Radio, RadioGroup, FormLabel, FormControl } from "@mui/material";
import { Modal } from 'react-bootstrap';

import { toast } from "react-toastify";
import apiClient from "../../api/apiClient";
import { TiTick } from "react-icons/ti";
import DateField from "./../mui/DateField";
import { SelectOption } from '../mui';
import { SelectOptionEdit } from '../mui/SelectOption';
import ReCAPTCHA from 'react-google-recaptcha';
import { OnInputPhone } from '../../modules/FormHelpers';
const CandidateEditModal = ({current,show,onHide}) => {
        //console.log(current?.tax_id);
        let empyFields = {
          tax_id: current?.tax_id||"",
        resume: "",
        first_name:current?.first_name|| "",
        last_name:current?.last_name|| "",
        dob: current?.dob||"",
        phone_number:current?.phone_number|| "",
        email: current?.email||"",
        };
        const [phone_number,setPhone]=useState(current?.phone_number|| "")
        function validPhone(inputString) {
          const pattern = /^\+?(?!\+)[0-9]+/;
          return pattern.test(inputString);
        }
      
        function handlePhoneChange(value) {
          const strippedValue = value.replace(/[^0-9\+]/g, ""); // remove all non-numeric and non-plus characters
          //console.log(validPhone(strippedValue), "valid");
          //console.log(strippedValue);
          
          let formattedValue = "";
      
          for (let i = 0; i < strippedValue.length; i++) {
            if (i === 3 || i === 7) {
              formattedValue += "-";
            }
            formattedValue += strippedValue[i];
          }
          
          strippedValue = formattedValue;
          setPhone(strippedValue);
        }
        const [newCandidate, setNewCandidate] = useState(empyFields);
        const [attachments, setAttachments] = useState();
      const [valid,setValid] = useState(false)
         const [message, setMessage] = useState({text:"",color:""});
         const [status, setStatus] = useState([]);
         const [count, setcount] = useState(0);
             const [page, setPage] = useState(1);
      
         const verifyTaxId = async(data)=> {
          const result=await apiClient.post("/Tax/",data)
          if(!result.ok) return toast.error("error");
          //console.log(result);
          setValid(!result.data.status)
          if(result.data.status)
          setMessage({text:"exist already",color:"danger"})
          else
          setMessage({text:"doest not exit",color:"success"})
      
        }
      
        const handleChange = (key,value) => {
          if(key=="tax_id"&&value.length<=9){
      if(value.length!=9)
      setMessage({text:"should be 9 digit",color:"danger"})
      else{
      
        resetErrors()
        verifyTaxId({tax_id:value});
      }
      setNewCandidate({ ...newCandidate, [key]: value });
          }
         
          else  if(key!=="tax_id")
          setNewCandidate({ ...newCandidate, [key]: value });
      
        };
      
        const handleSubmit = async () => {
      let formdata=new FormData()
      formdata.append("tax_id",newCandidate.tax_id)
      formdata.append("first_name",newCandidate.first_name)
      formdata.append("last_name",newCandidate.last_name)
      formdata.append("dob",newCandidate.dob)
      formdata.append("phone_number",phone_number)
      formdata.append("email",newCandidate.email)
      formdata.append("status",1)
      formdata.append("status_id",1)
      if(newCandidate.resume)
      formdata.append("resume",newCandidate.resume)
      if(attachments)
      for (const item of attachments) {
        
        formdata.append("candidate_attachments",item)
      }
      const result=await apiClient.put("/candidates/"+current.id,formdata)
      if(!result.ok) return toast.error("Can't create Candidate");
      //console.log(result);
      toast.success("Success added new Candidate")
      onHide()
      //console.log(formdata)
        };
       
        function resetErrors(){
          setMessage({message:"",color:""})
        }
        const form1=useRef()
        const form2=useRef()
        const [step,setStep]=useState(1)
        // async function fetchData(){
        //   // const result= await apiClient.get(`/CandidateStatus/?page=${page}`)
        //   if(!result.ok) return toast.error("error")
        //   //console.log(result) 
        //   if(!count)
        //   setcount(result.data.count)
        //   setStatus([...status,...result.data?.results])
        //   setPage(page+1)
        // }

        const handleScroll = (event) => {
          // const { scrollTop, clientHeight, scrollHeight } = event.target;
          // if (scrollTop + clientHeight >= scrollHeight-1) {
          //   if(count>status.length)
          // fetchData()
          // }
        }
          useEffect(() => {
            // fetchData()
          }, [])
          const [captcha, setCaptucha] = React.useState(false);
          function onChange(value) {
            //console.log('Captcha value:', value);
            setCaptucha(true)
          }
          // const key= process.env.REACT_APP_CAPTCHA_KEY
        
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
               
                Add New Candidate
               
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className=" d-flex justify-content-between px-3">
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
      
              <div className=" d-flex justify-content-between">
                <div>
                  <p className="fs_14">Candidate Check</p>
                </div>
                <div>
                  <p className="fs_14">
                Candidate Info
                </p>
                </div>
                <div>
                <p className="fs_14 text-center">
               Verify Check
                </p>
                </div>
              </div>
              <div className="px-3" style={{height:400,maxHeight:400,overflowX:"hidden"}}>
      
             
              <h3 className="text-center">Add New Candidate</h3>
             {step==1&& <div className="candidate-detail check">
              <form ref={form1}>
                <Grid item xs={12} md={6}>
                        <TextField
                                    required
                                    type={"number"}
                                    label="Tax Details"
                                    inputProps={{ maxLength: 15 }}
                                    id="outlined-name"
                                    value={newCandidate.tax_id}
                                    onChange={(e)=>handleChange("tax_id",e.target.value)}
                                    onFocus={resetErrors}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                                    {message.text&& <div className={`bg-${message.color} p-1 m-1`}>
                        <span>{message.text}</span>
                      </div>}
                        </Grid>
                        </form>
              </div>}
      
              {step==2&&<div className="candidate-info mt-2">
      
      
      <form className="" ref={form2}>
                <Box>
                  <h5>
                  Candidate Resume
                  </h5>
                  <label htmlFor="resumeUp" className="d-flex justify-content-center align-items-center m-3 rounded" style={{height:'300px', borderStyle:"dotted" }}>
                    <div className="d-flex flex-column align-items-center gap-1">
      
                    <TfiUpload size={50}/>
                 
                    {newCandidate.resume&& <p>{newCandidate.resume.name}</p>}
                    </div>
                  </label>
                  <input type="file"
                  formNoValidate
                  onChange={(e)=>handleChange("resume",e.target.files[0])}
                                    
                  name="" id="resumeUp" hidden />
                
      
                        <h4>Personal Information</h4>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                        <TextField
                                    required
                                    label="First Name"
                                    name="position"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={newCandidate.first_name}
                                    onChange={(e)=>handleChange("first_name",e.target.value)}
                                    onFocus={resetErrors}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        
                        <TextField
                                    required
                                    label="Last Name"
                                    name="position"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={newCandidate.last_name}
                                    onChange={(e)=>handleChange("last_name",e.target.value)}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                        </Grid>
                        <Grid item xs={12} md={6}>
                      
                        <DateField
                        required
                        label="DOB"
                        name="position"
                        type="date"
                        inputProps={{ maxLength: 150 }}
                        id="outlined-name"
                        value={newCandidate.dob}
                        onChange={(e)=>handleChange("dob",e.target.value)}
                        onFocus={resetErrors}
                        fullWidth
                        size={"small"}
                        sx={{ marginBottom: "25px" }}
                                  />
                      </Grid>
                      {/* <Grid item xs={12} md={6}>
                      
                      <SelectOptionEdit
                      
                             
                                  label="Status"
                                  name="position"
                                  onFocus={resetErrors}
                                  required
                                  defaultSelected={current.status.title||null}
                                  inputProps={{ maxLength: 150 }}
                                  id="outlined-name"
                                  value={newCandidate.status}
                                  onChange={(e)=>handleChange("status",e.target.value)}                                   
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
                      </Grid>  */}
                      <Grid p={2} md={12}>
                      <h5 className="">
                      Contact Information
                      </h5>
                      <p className="fs_10">
                      Please provide at least one of the contact details in section below
                      </p>
                      </Grid>
                        <Grid item xs={12} md={6}>
                      
                        <TextField
                                    required
                                    label="Phone Number"
                                    name="position"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={phone_number}
                                    onInput={OnInputPhone}
                                    onChange={(e)=>handlePhoneChange(e.target.value)}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                        </Grid>
      
                        <Grid item xs={12} md={6}>
                      
                      <TextField
                                  required
                                  label="Email Address"
                                  type={"email"}
                                  name="position"
                                  inputProps={{ maxLength: 150 }}
                                  id="outlined-name"
                                  value={newCandidate.email}
                                  onChange={(e)=>handleChange("email",e.target.value)}
                                  onFocus={resetErrors}
                                  fullWidth
                                  size={"small"}
                                  sx={{ marginBottom: "25px" }}
                                />
                      </Grid>
      
              
                        <Grid item xs={12} md={6}>
                        <input type="file" multiple
                  formNoValidate
                  onChange={(e)=>setAttachments(e.target.files)}
                          />
                        </Grid>
                        </Grid>
           </Box>
                </form>
      
              </div>}
      
              {step==3 &&<div className="candidate-info mt-2">
                <h3>Candidate summery</h3>
                <div>
                  <h6>Personal Information</h6>
      
                  <p>
                    First Name: <span>{newCandidate.first_name}</span>
                  </p>
                  <p>
                    Last Name: <span>{newCandidate.last_name}</span>
                  </p>
                  <p>
                    DOB: <span>{newCandidate.dob}</span>
                  </p>
                </div>
                <div>
                  <h6>Contact Information</h6>
                  <p>
                    Phone Number: <span>{newCandidate.phone_number}</span>
                  </p>
                  <p>
                    Email Address: <span>{newCandidate.email}</span>
                  </p>
                </div>
                <Grid item xs={12} sx={{display:"flex",justifyContent:"center"}}>
        {/* <ReCAPTCHA
                    sitekey={key}
                    onChange={onChange}
                  /> */}
        </Grid>
              </div>}
      
              </div>
              
            </Modal.Body>
            <Modal.Footer>
            <button className="btn btn-outline-primary" onClick={()=>step>1&&setStep(step-1)}>
              Previous
              </button>
           
            {step==3?<Button variant="contained" disabled={!captcha} onClick={handleSubmit}>Create</Button>
           :<Button variant="contained"  onClick={()=>{
            if(step<3){
             let result
              if(step==1){
      if( valid||newCandidate.tax_id==current.tax_id)
                result=form1.current.reportValidity()
              }
              if(step==2){
                result=form2.current.reportValidity()
                
      
              }
                      
             if(result)
             setStep(step+1)
           }
      
       
           }}>Next</Button>}
             </Modal.Footer>
          </Modal>
        );
      }

export default CandidateEditModal