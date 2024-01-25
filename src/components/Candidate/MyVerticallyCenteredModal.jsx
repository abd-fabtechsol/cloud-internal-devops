import React,{useState,useEffect ,useRef} from 'react'
import { TfiUpload } from "react-icons/tfi";
import {Button,IconButton, Box,FormControlLabel,Grid,TextField,Typography, Switch, Radio, RadioGroup, FormLabel, FormControl, CircularProgress } from "@mui/material";
import { Modal } from 'react-bootstrap';

import { toast } from "react-toastify";
import apiClient from "../../api/apiClient";
import { TiTick } from "react-icons/ti";
import DateField from "./../mui/DateField";
import { SelectOption } from '../mui';
import { SelectOptionEdit } from '../mui/SelectOption';
import ReCAPTCHA from 'react-google-recaptcha';
import { LoadingOverlaySmall } from '../mui/LoadingOverlay';
import useApi from '../../hooks/useApi';
import { OnInputPhone } from '../../modules/FormHelpers';
const MyVerticallyCenteredModal = ({fetchData,show,onHide}) => {
        let empyFields = {
          role:"CA",
          tax_id: "",
        resume: "",
        first_name: "",
        last_name: "",
        dob: "",
        phone_number: "",
        email: "",
        c_type: "",
        c_name: "",
        c_address: "",
        c_city: "",
        c_zip: "",
        c_country: "",
        c_state: "",
        password:"",
        };
        
       
        const [newCandidate, setNewCandidate] = useState(empyFields);
        const [attachments, setAttachments] = useState();
        const [reg, setReg] = useState()
        if (attachments) {
          //console.log(attachments);
         
        }
      const [valid,setValid] = useState(false)
      const [loading,setLoading] = useState(false)
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
          // else
          // setMessage({text:"doest not exit",color:"success"})
      
        }
      
        const handleChange = (key,value) => {
          if(key=="tax_id"&&value.length<=10){
      if(value.length!=10)
      setMessage({text:"should be 9 digit",color:"danger"})
      else{
      
        resetErrors()
        verifyTaxId({tax_id:value.replace("-","")});
      }
      setNewCandidate({ ...newCandidate, [key]: value });
          }
          else if(key!=="tax_id")
          setNewCandidate({ ...newCandidate, [key]: value });
      
        };
        const { request, error } = useApi((data) => apiClient.post('/register/', data))
        const handleSubmit = async (e) => {
          e.preventDefault()
      let formdata=new FormData()
      formdata.append("tax_id",newCandidate.tax_id.replace("-",""))
      formdata.append("first_name",newCandidate.first_name)
      formdata.append("last_name",newCandidate.last_name)
      formdata.append("dob",newCandidate.dob)
      formdata.append("phone_number",newCandidate.phone_number)
      formdata.append("email",newCandidate.email)
      formdata.append("status",1)
      formdata.append("status_id",1)
      formdata.append("resume",newCandidate.resume)
      formdata.append("candidate_address.type",newCandidate.c_type)
      formdata.append("candidate_address.name",newCandidate.c_name)
      formdata.append("candidate_address.address_line_1",newCandidate.c_address)
      formdata.append("candidate_address.city",newCandidate.c_city)
      formdata.append("candidate_address.zip",newCandidate.c_zip)
      formdata.append("candidate_address.country",newCandidate.c_country)
      formdata.append("candidate_address.state",newCandidate.c_state)
      formdata.append("password",newCandidate.password)
      formdata.append("role",newCandidate.role)
      let result1
      if (!reg) {
       result1 = await request(formdata)
      if (!result1.ok) return toast.error("Can't register");
      setReg(result1?.data.user.id)}
      //console.log(result1,"result1 ssdjkfhsdjkfhsjkfhsdjkfh,");
      formdata.append("user", reg||result1?.data.user.id);
      for (const item of attachments) {
        
        formdata.append("candidate_attachments",item)
      }
      setLoading(true)
      const result=await apiClient.post("/candidates/",formdata)
      setLoading(false)
      if(!result.ok) return toast.error("Can't create Candidate");
      //console.log(result);
      const employeeResult=await apiClient.patch(`/user/${result1.data.user.id}/`,{is_active:true})
      toast.success("Success added new Candidate")
      onHide()
      fetchData()
      //console.log(formdata)
        };
       
        function resetErrors(){
          setMessage({message:"",color:""})
        }
        const form1=useRef()
        const form2=useRef()
        const form3=useRef()
        const [step,setStep]=useState(1)

        async function fetchData(){
          // const result= await apiClient.get(`/CandidateStatus/?page=${page}`)
          // if(!result.ok) return toast.error("error")
          // //console.log(result) 
          // if(!count)
          // setcount(result.data.count)
          // setStatus([...status,...result.data?.results])
          // setPage(page+1)
        }

        const handleScroll = (event) => {
          // const { scrollTop, clientHeight, scrollHeight } = event.target;
          // if (scrollTop + clientHeight >= scrollHeight-1) {
          //   if(count>status.length)
          // fetchData()
          // }
        }
          useEffect(() => {
            fetchData()
          }, [])
          const [captcha, setCaptucha] = React.useState(false);
          function onChange(value) {
            //console.log('Captcha value:', value);
            setCaptucha(true)
          }
          const key= process.env.REACT_APP_CAPTCHA_KEY
          useEffect(() => {
            if (newCandidate.tax_id.length > 2) 
        {
          const valueWithoutHyphen = newCandidate.tax_id.replace(/-/g, '')
              setNewCandidate({...newCandidate,tax_id:valueWithoutHyphen.slice(0, 2) + '-' + valueWithoutHyphen.slice(2)});
        }
           
          }, [newCandidate.tax_id]);
          const eighteenYearsAgo = new Date();
 eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
 const maxDateValue = `${eighteenYearsAgo.getFullYear()}-${(eighteenYearsAgo.getMonth() + 1)
   .toString()
   .padStart(2, '0')}-${eighteenYearsAgo.getDate().toString().padStart(2, '0')}`;
          
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
                  <p className=" fs_14">
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
      
             
              
             {step==1&& <div className="candidate-detail check">
              <form ref={form1}>
                <Grid item xs={12} md={6} className='mt-2'>
                        <TextField
                                    required
                                   
                                    type={""}
                                    label="Tax Details"
                                    inputProps={{ maxLength: 15 }}
                                    id="outlined-name"
                                    value={newCandidate.tax_id}
                                    onChange={(e)=>handleChange("tax_id",e.target.value)}
                                    onFocus={resetErrors}
                                    fullWidth
                                    onInput={(e)=>{
                                      e.target.value = e.target.value.slice(0, 10).replace(/[^\d-]/g, '')
                                    }}
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
                  Candidate Resume *
                  </h5>
                  <label  htmlFor="resumeUp" className="d-flex justify-content-center align-items-center m-3 rounded" style={{height:'300px', borderStyle:"dotted" }}>
               
                    <div className="d-flex flex-column align-items-center gap-1">
                 
                    <TfiUpload size={50}/>
                    {newCandidate.resume&& <p>{newCandidate.resume.name}</p>}
                    <div>
                    </div>
              
                    </div>
                
                  </label>
                  <input type="file"
                  
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
                        inputProps={{ maxLength: 150,max: maxDateValue }}
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
                      
                        <SelectOption
                        
                                    label="Status"
                                    name="position"
                                    onFocus={resetErrors}
                                    required
                                    // defaultSelected={current.status}
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
                                    type={"Text"}
                                    name="position"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    onInput={OnInputPhone}
                                    value={newCandidate.phone_number}
                                    onChange={(e)=>handleChange("phone_number",e.target.value)}
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
                      
                      <TextField
                                  required
                                  label="Password"
                                  name="password"
                                  type='password'
                                  inputProps={{ maxLength: 150 }}
                                  id="outlined-name"
                                  value={newCandidate.password}
                                  onChange={(e)=>handleChange("password",e.target.value)}
                                  onFocus={resetErrors}
                                  fullWidth
                                  size={"small"}
                                  sx={{ marginBottom: "25px" }}
                                />
                      </Grid>
                        <Grid p={2} md={12}>
                      <h5 className="">
                     Address
                      </h5>
                     
                      </Grid>
      
                      <Grid item xs={12} md={6}>
                      
                      
                      <SelectOption
                      
                                  required
                                  label="Address Type"
                                  name="position"
                                  inputProps={{ maxLength: 150 }}
                                  id="outlined-name"
                                  data={[
                                  {id:"Billing Address",name:"Billing Address"},
                                  {id:"Main Address",name:"Main Address"},
                                  {id:"Home Address",name:"Home Address"},
                                  {id:"Business Address",name:"Business Address"},
                                  {id:"Other Address",name:"Other Address"},
                                
                                ]}
                                value={newCandidate.c_type}
                                onChange={(e)=>handleChange("c_type",e.target.value)}
                                  fullWidth
                                  size={"small"}
                                  style={{ marginBottom: "25px", width:"100%" }}
                                />
                      </Grid>
                      <Grid item xs={12} md={6}>
                      
                      <TextField
                                  required
                                  label="Name"
                                  name="position"
                                  inputProps={{ maxLength: 150 }}
                                  id="outlined-name"
                                  value={newCandidate.c_name}
                                    onChange={(e)=>handleChange("c_name",e.target.value)}
                                  onFocus={resetErrors}
                                  fullWidth
                                  size={"small"}
                                  sx={{ marginBottom: "25px" }}
                                />
                      </Grid>
                      <Grid item xs={12} md={12}>
                      
                      <TextField
                                  required
                                  label="Address Line 1"
                                  name="position"
                                  inputProps={{ maxLength: 150 }}
                                  id="outlined-name"
                                  value={newCandidate.c_address}
                                    onChange={(e)=>handleChange("c_address",e.target.value)}
                                  onFocus={resetErrors}
                                  fullWidth
                                  size={"small"}
                                  sx={{ marginBottom: "25px" }}
                                />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                        
                                    required
                                    label="City"
                                    name="position"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                 
                                    value={newCandidate.c_city}
                                    onChange={(e)=>handleChange("c_city",e.target.value)}
                                    fullWidth
                                    size={"small"}
                                    style={{ marginBottom: "25px", width:"100%" }}
                                  />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <TextField
                        
                                    required
                                    label="ZIP"
                                    name="position"
                                    type='number'
                                    onInput={(e)=>{
                                      e.target.value = e.target.value.slice(0,5).replace(/[^\d-]/g, '')
                                    }}
                                    inputProps={{ maxLength: 5 }}
                                    id="outlined-name"
                                 
                                    value={newCandidate.c_zip}
                                    onChange={(e)=>handleChange("c_zip",e.target.value)}
                                    fullWidth
                                    size={"small"}
                                    style={{ marginBottom: "25px", width:"100%" }}
                                  />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <TextField
                        
                                    required
                                    label="Country"
                                    name="position"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={newCandidate.c_country}
                                    onChange={(e)=>handleChange("c_country",e.target.value)}
                                   
                                    fullWidth
                                    size={"small"}
                                    style={{ marginBottom: "25px", width:"100%" }}
                                  />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <TextField
                        
                                    required
                                    label="State"
                                    name="State"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={newCandidate.c_state}
                                    onChange={(e)=>handleChange("c_state",e.target.value)}
                                   
                                    fullWidth
                                    size={"small"}
                                    style={{ marginBottom: "25px", width:"100%" }}
                                  />
                        </Grid>
                        <Grid p={2} md={12}>
                      <h5 className="">
                    Other Attachments *
                      </h5>
                      
                      </Grid>
                        <Grid item xs={12} md={12}>
                        <label htmlFor='fileees' className="d-flex justify-content-center align-items-center m-3 rounded" style={{height:'300px', borderStyle:"dotted" }}>
                    <div className="d-flex flex-column align-items-center gap-1">
    
                    <TfiUpload size={50}/>
                    {attachments && (
  <div className='d-flex gap-3'>
    {Array.from(attachments).map((file, index) => (
      <div >
      <p key={index}>{file.name}</p>
      </div>
    ))}
  </div>
)}
                    <div>
                    </div>
              
                    </div>
                  </label>
                        <input type="file" multiple id="fileees" 
                  required hidden
                  onChange={(e)=>setAttachments(e.target.files)}
                  />
                
                  
                        </Grid>
                        </Grid>
           </Box>
                </form>
      
              </div>}
      
              {step==3 &&<div className="candidate-info mt-2">
                <h5 className='text-center' >Candidate summery</h5>
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
      
            {/* {step==3&&  <div className="step-3">
                <h4>Potential Duplicates</h4>
                <p className="fs_10">
                  Below are potential duplicates found based on the information that
                  you supplied. Please select one of the candidates if you wish to
                  update existing candidate record, or proceed with saving your new
                  candidate record
                </p>
                <div className="d-flex justify-content-center">
                  <FaCheckCircle className="" size={35} color={"green"} />
                </div>
                <p className="text-center">No duplicate Candidates found</p>
              </div>} */}
              
              </div>
              
            </Modal.Body>
            <Modal.Footer>
          {step>1&&  <button className="btn btn-outline-primary" onClick={()=>step>1&&setStep(step-1)}>
              Previous
              </button>}
           
            {step==3?
            <>
            {loading?<CircularProgress/>:
            <Button variant="contained" disabled={!captcha} onClick={handleSubmit}>Create</Button>
              }
            </>
           :<Button variant="contained"  onClick={()=>{
            if(step<3){
             let result
              if(step==1 && valid)
            result=form1.current.reportValidity()
              if(step==2)
            result=form2.current.reportValidity()
                      
             if(result)
             setStep(step+1)
           }
      
       
           }}>Next</Button>}
             </Modal.Footer>
          </Modal>
        );
      }

export default MyVerticallyCenteredModal

