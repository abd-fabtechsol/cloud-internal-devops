import { Button, Grid } from '@mui/material'
import img from "../../assets/healthcare/healthcare.png"
import i1 from "../../assets/healthcare/1.jpg"
import i2 from "../../assets/healthcare/2.jpg"
import i3 from "../../assets/healthcare/3.jpg"
import i4 from "../../assets/healthcare/4.jpg"
import i5 from "../../assets/healthcare/5.jpg"
import i6 from "../../assets/healthcare/6.jpg"
import i7 from "../../assets/healthcare/7.jpg"
import i8 from "../../assets/healthcare/8.jpg"
import i9 from "../../assets/healthcare/9.jpg"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { Link } from 'react-router-dom';

import React from 'react'
import { useNavigate } from 'react-router-dom'
const HealthCareProfession = () => {
    const navigate=useNavigate()

    const data=[
        {
        img:i4,
        title:'CLINICAL & NURSING SERVICES',
        desc: ["Physicians & Physician Assistants","Anesthesiologists","Nurse Practitioners","Registered Nurses","Licensed Practical Nurses","Certified Nurse Assistants","Patient Care Technicians","HHA"]
    },
        {
        img:i1,
        title:'NURSE EXECUTIVES, LEADERSHIP & MANAGEMENT',
        desc: ["Chief Nursing Officers","Directors of Nursing","Executive directors","Nurse Managers & Supervisors","Nurse Educators & Staff developers","MDS, MMQ"]
    },
        {
        img:i2,
        title:'PHYSICAL MEDICINE & REHABILITATION',
        desc: ["Physical Therapists & Occupational Therapists","Speech & Language Pathology","COTA","PTA","Respiratory Therapists"]
    },
        {
        img:i9,
        title:'IMAGING/RADIOLOGIC',
        desc: ["General Radiology Techss","MRI Technologists","US & Echo Technologists","Mammography Technologists","CT & PET Scan Technologists","Nuclear Medicine Technologists","Radiation Therapists"]
    },
        {
        img:i3,
        title:'DIATARY SERVICES',
        desc: ["Dietary Aides & Cooks","Registered Dieticians & Nutritionists"]
    },
        {
        img:i5,
        title:'SOCIAL SERVICES',
        desc: ["LCSW/LMSW/MSW","Director of Social services","Social Workers","Care & Care Managers"]
    },
        {
        img:i6,
        title:'MEDICAL SUPPORT STAFF',
        desc: ["Medical Assistants","Phlebotomists","EKG, EEG & Endo Technicians","Ophthalmic Technicians","Central Sterilization Techs","Surgical Technicians","Surgical Technologists"]
    },
        {
        img:i7,
        title:'PHARMACISTS',
        desc: ["Pharmacistss","Pharmacy Tech"]
    },
        {
        img:i8,
        title:'LABORATORY SERVICES',
        desc: ["Lab Technologists & Technicians","Specimen Accessioners"]
    },
]
    return (
      <>
       <div className=' bg-health-care d-flex justify-content-center align-items-center'  >
         <h1 className='fw-bold'>Health Care Professional</h1> 
      </div>
  
      <div className=' container'>

        <div style={{padding:"40px" }}>
       
        <div className='d-flex gap-4 align-items-start' >         
          <div>
          <div className='d-flex align-items-center'>
            <div class="bg-white my-auto mx-2 p-2 border_radu d-flex ">
                <img
                  src={require("../../assets/tick-inside-circle.png")}
                  style={{ width: "35px", height: "35px" }}
                />
            </div>
            <Link style={{ textDecoration: "none", }}> 
              <h5 className="fw-bold" style={{color:"#00175A"}}>
            Flexibility 
            </h5>
            </Link>
            {/* <CheckIcon className='fw-bold' style={{color:"#1882C1"}} /> */}
          </div>

          <div className='d-flex align-items-center'>
            <div class="bg-white my-auto mx-2 p-2 border_radu d-flex ">
                <img
                  src={require("../../assets/tick-inside-circle.png")}
                  style={{ width: "35px", height: "35px" }}
                />
            </div>
            <Link style={{ textDecoration: "none", }}> 
              <h5 className="fw-bold" style={{color:"#00175A"}}>
            Easy to use Platform 
            </h5>
            </Link>
          </div>
          </div>

          <button className='btn btn_bg'>
            Apply now
          </button>
        </div>

        <div className='py-3'>
          <div className="py-4">
          <h1 className=" text-center py-5" style={{color:"#00175A"}}>How its workes</h1>
          <div className="row">
          <div className="col-md-6">
          <ul style={{listStyle:"none"}}>
          <li>
              <div className="d-flex align-items-center white_space">
            <div class="bg-white my-auto mx-2 p-2 border_radu d-flex ">
                <img
                  src={require("../../assets/tick-inside-circle.png")}
                  style={{ width: "35px", height: "35px" }}
                />
            </div>
              
              <Link style={{ textDecoration: "none", }}> 
              <h5 className="fw-bold" style={{color:"#00175A"}}>
              Download app and signup
                </h5>              
              </Link>
              </div>
            </li>

            <li>
              <div className="d-flex align-items-center white_space">
            <div class="bg-white my-auto mx-2 p-2 border_radu d-flex ">
                <img
                  src={require("../../assets/tick-inside-circle.png")}
                  style={{ width: "35px", height: "35px" }}
                />
            </div>
              
              <Link style={{ textDecoration: "none", }}> 
              <h5 className="fw-bold" style={{color:"#00175A"}}>
              Apply, We will call for a quick interview.
                </h5>              
              </Link>
              </div>
            </li>

            <li>
              <div className="d-flex align-items-center white_space">
            <div class="bg-white my-auto mx-2 p-2 border_radu d-flex ">
                <img
                  src={require("../../assets/tick-inside-circle.png")}
                  style={{ width: "35px", height: "35px" }}
                />
            </div>
              
              <Link style={{ textDecoration: "none", }}> 
              <h5 className="fw-bold" style={{color:"#00175A"}}>
              Upload Credentials
                </h5>              
              </Link>
              </div>
            </li>

            <li>
              <div className="d-flex align-items-center white_space">
            <div class="bg-white my-auto mx-2 p-2 border_radu d-flex ">
                <img
                  src={require("../../assets/tick-inside-circle.png")}
                  style={{ width: "35px", height: "35px" }}
                />
            </div>
              
              <Link style={{ textDecoration: "none", }}> 
              <h5 className="fw-bold" style={{color:"#00175A"}}>
              We will review your application and Credentials.
                </h5>              
              </Link>
              </div>
            </li>

            <li>
              <div className="d-flex align-items-center white_space">
            <div class="bg-white my-auto mx-2 p-2 border_radu d-flex ">
                <img
                  src={require("../../assets/tick-inside-circle.png")}
                  style={{ width: "35px", height: "35px" }}
                />
            </div>
              
              <Link style={{ textDecoration: "none", }}> 
              <h5 className="fw-bold" style={{color:"#00175A"}}>
            Start picking up shift.             
              </h5>              
              </Link>
              </div>
            </li>

          


          </ul>
        </div>

          <div className="col-md-6 d-flex justify-content-end">
          <div className="col-md-8">
          <img className="img-fluid" src={require("./homeassets/Applyjobs.png")} alt="" />
          </div>
        </div>

          </div>
        </div>






        <div className="py-4">
          <h1 style={{color:"#00175A"}} className=" text-center py-5">  Looking for</h1>
          <div className="row">
          <div className="col-md-6">
          <ul style={{listStyle:"none"}}>
          <li>
              <div className="d-flex align-items-center white_space">
            <div class="bg-white my-auto mx-2 p-2 border_radu d-flex ">
                <img
                  src={require("../../assets/tick-inside-circle.png")}
                  style={{ width: "35px", height: "35px" }}
                />
            </div>
              
              <Link style={{ textDecoration: "none", }}> 
              <h5 className="fw-bold" style={{color:"#00175A"}}>
              Temp Fixed Terms Contract
                </h5>              
              </Link>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center white_space">
            <div class="bg-white my-auto mx-2 p-2 border_radu d-flex ">
                <img
                  src={require("../../assets/tick-inside-circle.png")}
                  style={{ width: "35px", height: "35px" }}
                />
            </div>
              
              <Link style={{ textDecoration: "none", }}> 
              <h5 className="fw-bold" style={{color:"#00175A"}}>
              Direct Hire            
              </h5>              
              </Link>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center white_space">
            <div class="bg-white my-auto mx-2 p-2 border_radu d-flex ">
                <img
                  src={require("../../assets/tick-inside-circle.png")}
                  style={{ width: "35px", height: "35px" }}
                />
            </div>
              
              <Link style={{ textDecoration: "none", }}> 
              <h5 className="fw-bold" style={{color:"#00175A"}}>
              Allied Health
                </h5>              
              </Link>
              </div>
            </li>
          <li>
              <div className="d-flex align-items-center white_space">
            <div class="bg-white my-auto mx-2 p-2 border_radu d-flex ">
                <img
                  src={require("../../assets/tick-inside-circle.png")}
                  style={{ width: "35px", height: "35px" }}
                />
            </div>
              
              <Link style={{ textDecoration: "none", }}> 
              <h5 className="fw-bold" style={{color:"#00175A"}}>
              Non clinical
                </h5>              
              </Link>
              </div>
            </li>

            <li>
              <div className="d-flex align-items-center white_space">
            <div class="bg-white my-auto mx-2 p-2 border_radu d-flex ">
                <img
                  src={require("../../assets/tick-inside-circle.png")}
                  style={{ width: "35px", height: "35px" }}
                />
            </div>
              
              <Link style={{ textDecoration: "none", }}> 
              <h5 className="fw-bold" style={{color:"#00175A"}}>
              Temp to Hire           
              </h5>              
              </Link>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center white_space">
            <div class="bg-white my-auto mx-2 p-2 border_radu d-flex ">
                <img
                  src={require("../../assets/tick-inside-circle.png")}
                  style={{ width: "35px", height: "35px" }}
                />
            </div>
              
              <Link style={{ textDecoration: "none", }}> 
              <h5 className="fw-bold" style={{color:"#00175A"}}>
              Per Diem Staffing          
              </h5>              
              </Link>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center white_space">
            <div class="bg-white my-auto mx-2 p-2 border_radu d-flex ">
                <img
                  src={require("../../assets/tick-inside-circle.png")}
                  style={{ width: "35px", height: "35px" }}
                />
            </div>
              
              <Link style={{ textDecoration: "none", }}> 
              <h5 className="fw-bold" style={{color:"#00175A"}}>
              Permanent Placement         
              </h5>              
              </Link>
              </div>
            </li>


            <li>
              <div className="d-flex align-items-center white_space">
            <div class="bg-white my-auto mx-2 p-2 border_radu d-flex ">
                <img
                  src={require("../../assets/tick-inside-circle.png")}
                  style={{ width: "35px", height: "35px" }}
                />
            </div>
              
              <Link style={{ textDecoration: "none", }}> 
              <h5 className="fw-bold" style={{color:"#00175A"}}>
              Home Health Aides
                </h5>              
              </Link>
              </div>
            </li>

           

            

            

            
          </ul>
        </div>

          <div className="col-md-6 d-flex justify-content-end">
          <div className="col-md-8">
          <img className="img-fluid" src={require("./homeassets/mack book.png")} alt="" />
          </div>
        </div>

          </div>
        </div>
        </div>


        </div>
      
  
  <Grid container className='' style={{padding:"40px" }}>
  <Grid item xs={12} >
      <h1 className='px-5 fw-bold ' style={{color:"#071641"}}>The top staffing agency for healthcare professionals nationwide </h1>
  </Grid>
  <Grid item xs={12} >
      <p className='px-5  '>At IsentCare, we know how important your career is to you. We partner with the best healthcare organizations across the country to provide exceptional career opportunities to experienced nursing, allied health, and non-clinical professionals. Whether you are looking for more flexibility to allow for a better work-life balance or for your next big adventure in your career, IsentCare can help you find your dream job. </p>
  </Grid>
  <div className=' w-100 d-flex justify-content-center'>
         <button className='btn btn_bg' onClick={()=>navigate("/apply")}>
            Pickup Shift
          </button>
  </div>
  
  </Grid>
  <Grid container className='' spacing={2}  style={{padding:"40px" }}>
    {data?.map((data)=>
  <Grid item xs={12} md={4} >
  <ActionAreaCard data={data}/>
  </Grid>)}
  
  </Grid>
  </div> 
  

  
      </>
    )}

export default HealthCareProfession




 function ActionAreaCard({data}) {
    console.log(data)
  return (
    <Card sx={{ minWidth: 245,minHeight:"450px" }}>
      <CardActionArea>
        <CardMedia
        className='p-3'
          component="img"
          height="200"
          image={data.img}
          alt="green iguana"
        />
        <CardContent>
          <h4 gutterBottom variant="h2" component="div" style={{color:"#00175A"}}>
            {data.title}
          </h4>
          {data?.desc.map((data)=>
          <div className='d-flex gap-3'>
            <KeyboardArrowRightIcon style={{backgroundColor:"#00175A",color:"white",borderRadius:"50px",fontSize:"16px"}}/>
          <Typography variant="body2" >
            {data}
          </Typography>
          </div>)}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}