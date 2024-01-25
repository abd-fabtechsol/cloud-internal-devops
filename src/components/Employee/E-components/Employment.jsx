import { Box, Button, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, Switch, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DateField from '../../mui/DateField'
import { toast } from "react-toastify";
import CircularProgress from '@mui/material/CircularProgress';
import apiClient from "../../../api/apiClient";
import { TableMui } from '../../mui';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { OnInputPhone } from '../../../modules/FormHelpers';
import DeleteConfirmation from '../../core/DeleteConfirmation';
export default () => {
let initialState={
  title: "",
  company: "",
  description: "",
  country: "",
  state: "",
  start_date: "",
  end_date: "",
  et: "",
  tob: "",
  current_employer: false,
  reason_for_leaving: "",
  s_name: "",
  s_phone: "",
  permission: false,
  screening: false,
  positiontype: ""
}
const navigate=useNavigate()
const[addExperi,setAddExperi]=useState(initialState)
const [message, setMessage] = useState({text:"",color:""});
const [id, setId] = useState();
const [work, setWork] = useState([]);
const [load, setLoad] = useState(false);
const [show, setShow] = useState(false);
// const sendExperience= async (data)=>{
//   const result=await apiClient.post(`/WorkExperience/${current.id}/`,data)
//   if(!result.ok) return toast.error("error");
//   toast.success("form submitted")
//   //console.log(result);
// }
const handleChange = (key,value) => {
  setAddExperi({ ...addExperi, [key]: value });
};
const handleSubmit = async (e) => {
  e.preventDefault()
  setLoad(true)
  // let formdata=new FormData()
  // formdata.append("title",addExperi.title)
  // formdata.append("company",addExperi.company)
  // formdata.append("description",addExperi.description)
  // formdata.append("country",addExperi.country)
  // formdata.append("state",addExperi.state)
  // formdata.append("start_date",addExperi.start_date)
  // formdata.append("end_date",addExperi.end_date)
  // formdata.append("et",addExperi.et)
  // formdata.append("tob",addExperi.tob)
  // formdata.append("current_employer",addExperi.current_employer)
  // formdata.append("reason_for_leaving",addExperi.reason_for_leaving)
  // formdata.append("s_name",addExperi.s_name)
  // formdata.append("s_phone",addExperi.s_phone)
  // formdata.append("permission",addExperi.permission)
  // formdata.append("screening",addExperi.screening)
  // formdata.append("positiontype",addExperi.positiontype)

  const result=await apiClient.post(`/WorkExperience/${id}/`,addExperi)
  //console.log(result,"sadadaasd");
  if(!result.ok) return toast.error("error");
  toast.success("New Expereince Added")
  //console.log(result,"result");
  //console.log(addExperi)
  setAddExperi(initialState)
  setChange(false)
  fetchCandidateData()
  
    };
    async function fetchCandidateData(){
     setLoad(true)
      const result=await apiClient.get(`/candidates `)
      if(!result.ok) return
      setWork(result?.data?.results[0].candidate_WorkExperience)
      setLoad(false)
     setId(result?.data?.results[0].id)
      }


      const deleteExperience=async(id)=>{
        setLoad(true)
        const result=await apiClient.delete(`/WorkExperience/${id}/`)
        if(!result.ok) return  toast.error("error");
        toast.success("Deleted") 
        setDeleteModal(false) 
      fetchCandidateData()
      }

useEffect(() => {
  fetchCandidateData()
}, [])
   
    function resetErrors(){
      setMessage({message:"",color:""})
    }
    const [deleteModal, setDeleteModal] = useState(false);
  const [change, setChange] = useState(false);
  const [option, setOption] = useState();
  return (
    <>
   {!load?
    <div>
        <div >
        <h2 className='fw-bold'>Experience</h2>
      </div> 
      <div style={{backgroundColor:"#E7E8E8" }}>
      {deleteModal && <DeleteConfirmation  values={{handleConfirm:()=>deleteExperience(id.id),show:deleteModal,onHide:()=>setDeleteModal(false), message:`Are you sure you want to delete `}} />}
      {show&&<AddExperience fetchCandidateData={fetchCandidateData} current={id} show={show} onHide={()=>setShow(false)}/>}
            <Grid container padding={5}>
        
                <Grid  item xs={12} style={{backgroundColor:"#1682C3",}} className='d-flex justify-content-between'>
                    <h5 className='text-white p-2 mb-0'>
                    Experience</h5>
                    <Button className=' text-white' onClick={()=>{
                        setOption(1)
                        setChange(!change)}} variant="text"> Add work
                     </Button>
                </Grid>
{work.length>0&&<Box className =" w-100">
          <TableMui
            styleTableTh={{
              color: "#ffffff",
              fontWeight: "bold",
              whiteSpace: "nowrap",
            }}
            th={{
              title: "Title",
              start_date: "Start Date",
              end_date: "End Date",
              company: "Company ",
              actions:"Action",
            }}
            td={work}
           
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
                      setDeleteModal(true)
                    }}
                  >
                  Delete
                  </Button>
    </Box>
             
                ),
              },
              
            ]}
          />
        </Box>}
        

            
                
            </Grid>
      </div>
      {change&&(option==1)&&
               <div className='mt-3'>
    
      <div style={{}}>
      
      <div className='p-3'>
        <h2 className='fw-bold'>Add New Experience</h2>
      </div> 
       <form onSubmit={handleSubmit}>   
      <Grid container spacing={2} className='p-3'>
                
                <Grid item xs={12} md={6}>
      <TextField
                 
                 
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
               required
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
               required
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
               
              
               <Grid  item xs={12}  className='d-flex'>
                <Button style={{marginRight:"15px"}} onClick={()=>{
                  setOption(1)
                  setChange(!change)}} variant="contained">Cancel Change</Button>
                <Button  variant="contained" type='submit'>Create</Button>
                 </Grid>
      </Grid>
      </form> 
      
            
      </div>
     
    </div>}
      {/* <div className='p-2 d-flex justify-content-end'>
        <button class="btn btn-primary"  onClick={()=>navigate("/contact-us")}>
          CONTACT US
        </button>
      </div> */}
    </div>:<Box sx={{ display: 'flex',justifyContent:"center" }}>
      <CircularProgress />
    </Box>}
   </>
  )
}


const AddExperience = ({fetchCandidateData,current,show,onHide}) => {
   

  const[addExperi,setAddExperi]=useState(current)
  const [message, setMessage] = useState({text:"",color:""});
  //console.log(show,"show")
  const sendExperience= async (data)=>{
    const result=await apiClient.put(`/WorkExperience/${current.id}/`,data)
    if(!result.ok) return toast.error("Error Expereince Not Update");
    toast.success("Expereince Data Updated")
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
    fetchCandidateData()
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
               
                Update Experience
               
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div style={{height:400,maxHeight:650,overflowX:"hidden"}}>
<Grid container spacing={2} marginTop={2}>
          
          <Grid item xs={12} md={6}>
<TextField
           
           
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
           id="outlined-name"
           value={addExperi.s_phone}
           onInput={OnInputPhone}
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
          required
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
         required
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
         
        
         
</Grid>


         </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="contained" type="submit">Submit</Button>
            </Modal.Footer>
            </form>
        </Modal>
        )
}