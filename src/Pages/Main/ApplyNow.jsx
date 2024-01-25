import { FormControlLabel, Switch, TextField, Toolbar } from '@mui/material';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, useParams } from 'react-router-dom';
import apiClient from '../../api/apiClient';
import { LoadingOverlaySmall } from '../../components/mui/LoadingOverlay';
import './styles/job_apply_now.css'
import DateField from '../../components/mui/DateField';
import { TfiUpload } from "react-icons/tfi";
import { toast } from "react-toastify";
import { processErrors } from '../../modules/handleErrors';
export default function ApplyNow() {

  const { iid } = useParams();
  let emptyFields = {
    date:"",
    work_From_Home:true,
    notes:"",
    position:"",
    position_id:iid,
    candidate:"",
    candidate_id:"",
    resume:"",
  };
  const navigate=useNavigate()
  const [addNew, setAddNew] = useState(emptyFields);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({text:"",color:""});
  const handleChange = (name,value) => {
    // const { name, value } = event.target;
    setAddNew({ ...addNew, [name]: value });
  };

   const handleSubmit = async (event) => {
    event.preventDefault();
    const formData=new FormData();
    formData.append("date",addNew.date)
    formData.append("notes",addNew.notes)
    formData.append("work_From_Home",addNew.work_From_Home)
    formData.append("position",addNew.position_id)
    formData.append("candidate",addNew.candidate_id)
    formData.append("attachment",addNew.resume)
    const result=await apiClient.post("/matches/",formData)
    if(!result.ok) return processErrors(result?.data)
    toast.success("Match Successfully Created")
    navigate("/emp-profile")
    //console.log(result);
  };

  async function fetchCandidateData(){
    const result=await apiClient.get(`/candidates `)
    if(!result.ok) return 
    //console.log(result?.data?.results[0],"result"); 
    const result1=await apiClient.get(`/positions/${iid}`)
    if(!result1.ok) return
    //console.log(result1.data,"result1"); 
    const{ first_name,id}=result?.data?.results[0]
    const{ status,speciality,}=result1?.data
    setAddNew({...addNew,candidate:first_name,candidate_id:id,status,position:speciality}) 
    }
    //console.log(addNew,"addnew");

useEffect(() => {
fetchCandidateData()
}, [])
  const fetchCandidate=()=>{
    
  }

  return (
    <div>
       <Helmet>
        <title>Apply Now</title>
      </Helmet>
  {/* <div className='container-fluid' style={{paddingTop : '4rem'}}>
        <div className='container'>
          <div className='row'>
            <div id="demo" class="carousel slide gx-0" data-bs-ride="carousel">
              <div class="carousel-inner" style={{borderRadius:'10px'}}>
                <div class="carousel-item carosal_img active">
                  <img src={require("../../assets/Home/background.png")} class="d-block img-fluid"/>
                  <div class="carousel-caption">
                    <div className='mb-5 h3_fs'>
                    <h3>The largest and most powerful PRN platform in the industry.  </h3>
                    <p>You have joined one of the area's newest innovative company.</p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item carosal_img rounded-3">
                  <img src={require("../../assets/Home/background.png")} class="d-block img-fluid"/>
                  <div class="carousel-caption">
                    <div className='mb-5 h3_fs'>
                    <h3>The largest and most powerful PRN platform in the industry.  </h3>
                    <p>You have joined one of the area's newest innovative company.</p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item carosal_img">
                  <img src={require("../../assets/Home/background.png")} class="d-block img-fluid"/>
                  <div class="carousel-caption">
                    <div className='mb-5 h3_fs'>
                    <h3>The largest and most powerful PRN platform in the industry.  </h3>
                    <p>You have joined one of the area's newest innovative company.</p>
                    </div>
                  </div>
                </div>
              </div>

              <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span className='d-sm-block d-none'><i class="bi bi-chevron-left"></i></span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span className='d-sm-block d-none'><i class="bi bi-chevron-right"></i></span>
              </button>
            </div>
          </div>
        </div>
      </div> */}
  <div className="container " style={{paddingTop:"3rem"}}>
    <div className="row ">
      <div className="col-12 px-sm-0 px-5 mb-3">
        <h5>Create Match</h5>
      </div>
      <form className=" col-lg-9 px-sm-0 px-5" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-6">
            <label htmlFor="" className='mb-1'>Candidate name</label>
            <input type="text"
             name="candidate_name"
             disabled
             value={addNew.candidate}
             required
            className="form-control mb-3" placeholder=""  />
          </div>
          <div className="col-sm-6">
          <label htmlFor="" className='mb-1'>Position</label>
            <input 
            name="position"
            disabled
            value={addNew.position}
            required
            className="form-control mb-3" placeholder=""  />
          </div>
        </div>
        {/* <div className="row">
          <div className="col-sm-6">
          <label htmlFor="" className='mb-1'>Email Address</label>
            <input type="email"
            name="email"
            value={addNew.email}
            onChange={handleChange}
            required
            className="form-control mb-3" placeholder=""  />
          </div>
          <div className="col-sm-6">
          <label htmlFor="" className='mb-1'>Bill Rate</label>
            <input type="number"
            name="bill_rate"
            value={addNew.bill_rate}
            onChange={handleChange}
            required
            className="form-control mb-3" placeholder="" />
          </div>
        </div> */}
        {/* <div className="row">
          <div className="col-sm-6">
          <label htmlFor="" className='mb-1'>Social Security Number</label>
            <input type="number"
            name="social_security_number"
            value={addNew.social_security_number}
            onChange={handleChange}
            required
            className="form-control mb-3" placeholder=""  />
          </div>
          <div className="col-sm-6">
          <label htmlFor="" className='mb-1'>Driver License or State ID</label>
            <input type="text"
            name="driver_license"
            value={addNew.driver_license}
            onChange={handleChange}
            required
            className="form-control mb-3" maxlength="8" placeholder=""  />
          </div>
        </div> */}
        <div className="row">
          <div className="col-sm-6">
          <DateField
                                  
                                  label="Project Start Date"
                                  name="date"
                                  type="date"
                                  id="outlined-name"
                                  onChange={(e)=>handleChange("date",e.target?.value)}
                                  value={addNew?.date}
                                  fullWidth
                                  size={"small"}
                                  sx={{ marginBottom: "25px" }}
                                />
          </div>
          <div className="col-sm-6">
          <FormControlLabel
                          label="Work Home"
                          htmlFor="my-switch"
                              control={
                                <Switch
                                  id="my-switch"
                                  // checked={newPosition.work_From_Home}
                                  // onClick={()=>handleChange("work_From_Home",!newPosition.work_From_Home)}
                                  
                                />
                              }
                              />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
          <TextField
            name="notes"
          id="outlined-multiline-static"
          label="Candidate Note"
          multiline
          rows={4}
          defaultValue=""
          fullWidth
          onChange={(e)=>handleChange("notes", e.target.value)}
          // value={newPosition.notes}
        />
          </div>
          <div className="col-sm-12 mt-3">
           <h5>
                  Candidate Resume
                  </h5>
                  <div className="d-flex justify-content-center align-items-center m-3 rounded" style={{height:'300px', borderStyle:"dotted" }}>
                    <div className="d-flex flex-column align-items-center gap-1">
                  <label htmlFor="resumeUp">
                  <div className='d-flex justify-content-center'>
                    <TfiUpload size={50}/>
                    </div>
                    <div className='d-flex justify-content-center mt-2'>
                    {addNew.resume&& <p>{addNew.resume.name}</p>}
                    {/* <button type="button" className="btn btn-outline-secondary">
                      Browse
                    </button> */}
                    </div>
                  </label>
                    </div>
                  </div>
                  <input type="file" name="" id="resumeUp" hidden onChange={(e)=>handleChange("resume",e.target.files[0])} />
                  
          </div>
         
        </div>
        {message.text&& <div className={`bg-${message.color} p-1 m-1`}>
                  <span>{message.text}</span>
                </div>}
        {loading? <LoadingOverlaySmall open={loading}/>:
        <button type="submit" className="btn btn-primary mb-5 mt-sm-0 mt-3">Send</button>}

      </form>
    </div>
  </div>
</div>

  )
}
