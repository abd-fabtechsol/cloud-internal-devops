import { Box, Button, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, Switch, TextField } from '@mui/material'
import React, { useState } from 'react'
import apiClient from '../../../api/apiClient'
import { toast } from "react-toastify";
import CaptchaButton from '../../mui/CaptchaButton';
import DateField from '../../mui/DateField';
import colors from '../../../config/colors';
import { useEffect } from 'react';
import { TableMui } from '../../mui';
import { Modal } from 'react-bootstrap';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import DeleteConfirmation from '../../core/DeleteConfirmation';
export default () => {
  const navigate=useNavigate()
  const[change,setChange]=useState(false)
  const [option,setOption]=useState()
  const [id, setId] = useState();
  const [edu, setEdu] = useState([]);
  const [load, setLoad] = useState(false);
  const [show, setShow] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  
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
    const result=await apiClient.post(`/EducationHistory/${id}/`,data)
    if(!result.ok) return toast.error("error");
    toast.success("Education Added")
  
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
    fetchCandidateData()
    setChange(false)
//console.log(addEduc)
  }
  function resetErrors(){
    setMessage({message:"",color:""})
  }
  async function fetchCandidateData(){
    setLoad(true)
     const result=await apiClient.get(`/candidates `)
     if(!result.ok) return
     setLoad(false)
     //console.log(result?.data?.results[0].candidate_EducationHistory,"sdghfghfg ssdssds  asdasdsaf");
     setEdu(result?.data?.results[0].candidate_EducationHistory)
    setId(result?.data?.results[0].id)
     }
 const handleDelete=async(id)=>{
const result=await apiClient.delete(`/EducationHistory/${id}/`)
if(!result.ok)  return toast.error("error");
toast.success("Delete Successfully")
setDeleteModal(false)
fetchCandidateData()
 }
  useEffect(() => {
    fetchCandidateData()
  }, [])
  //console.log(edu.length,"eduuuuuu");
  return (
    <>
    {!load?
    <div>
      {deleteModal && <DeleteConfirmation  values={{handleConfirm:()=>handleDelete(id.id),show:deleteModal,onHide:()=>setDeleteModal(false), message:`Are you sure you want to delete `}} />}
      {show&& <AddEducation fetchCandidateData={fetchCandidateData}  current={id} show={show} onHide={()=>setShow(false)}/>}
<div>
        <h2 className='fw-bold'>EDUCATION</h2>
      </div> 
      <div style={{backgroundColor:"#E7E8E8" }}>
       
        <Grid container padding={5}>
                <Grid  item xs={12} style={{backgroundColor:"#1682C3",}} className='d-flex justify-content-between'>
                    <h5 className='text-white p-2 mb-0'>
                    Education </h5>
                    <Button variant='text' className='text-white p-2 mb-0' onClick={()=>{
                      setOption(1)
                      setChange(!change)
                    }}>
                    Add Education
                    </Button>
                </Grid>
          { edu.length>0 &&      <Box className =" w-100">
          <TableMui
            styleTableTh={{
              color: "#ffffff",
              fontWeight: "bold",
              whiteSpace: "nowrap",
            }}
            th={{
              degree: "Degree",
              institution: "Institution",
              start_date: "Start Date",
              end_date: "End Date",
              majors:"Majors",
              actions:"Action",
            }}
            td={edu}
           
            customFields={[
              {
                name: "actions",
                data: (value,item) => (
                  <Box  className="d-flex  gap-3">
                 <Button
                  variant="contained" 
                  color="info"
                    style={{ textDecoration: "none" }}
                    onClick={()=>{
                      //console.log(item.id,"sdddddddddddddddddddddddddddd");
                      setId(item)
                      setShow(true)}}
                  >
                  Edit
                  </Button>
    <Button
                  variant="contained" 
                  color="error"
                    style={{ textDecoration: "none" }}
                    onClick={()=>{setId(item)
                    setDeleteModal(true)}}
                  >
                  Delete
                  </Button>
    </Box>
             
                ),
              },
              
            ]}
          />
        </Box>
        }
                </Grid>
            <Grid container padding={5}>
              
                {/* <Grid className='d-flex justify-content-between align-items-center'  item xs={12} style={{backgroundColor:"#1682C3",}}>
                    <h5 className='text-white p-2 mb-0'>
                    Educational Achievements</h5>
                    <Button variant='text' className='text-white p-2 mb-0' onClick={()=>{
                      setOption(1)
                      setChange(!change)
                    }}>
                    create
                    </Button>
                </Grid> */}
               
            </Grid>
      </div>
      <Grid container className='py-3'>
                  <Grid>
                  {change&&(option==1)&&
<form onSubmit={handleSubmit}>
<Box>
<h4>Add Education </h4>
<div style={{height:400,maxHeight:650,overflowX:"hidden"}}>
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
</form>
                }
                  </Grid>
                </Grid>
      {/* <div className='p-2 d-flex justify-content-end'>
        <button class="btn btn-primary" onClick={()=>navigate("/contact-us")}>
          CONTACT US
        </button>
      </div> */}

    </div>:<Box sx={{ display: 'flex',justifyContent:"center" }}>
      <CircularProgress />
    </Box>}
    </>
  )
}


const AddEducation = ({fetchCandidateData, current,show,onHide}) => {
    
  let initialState={
   

  }
  
  const[addEduc,setAddEduc]=useState(current)
  const [message, setMessage] = useState({text:"",color:""});
  const handleChange=(key,value)=>{
    setAddEduc({...addEduc,[key]:value})
  }
  const sendEducationHistory = async(data)=> {
    const result=await apiClient.put(`/EducationHistory/${current.id}/`,data)
    if(!result.ok) return toast.error("Error Education Not Update");
    toast.success("Education Updated")
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
    fetchCandidateData()
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
           
            Update Education 
           
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Box>
                  
                  <div style={{height:400,maxHeight:650,overflowX:"hidden"}}>
                <Grid container spacing={2} marginTop={2}>
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
