import { Toolbar } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Helmet } from 'react-helmet';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import apiClient from '../../api/apiClient';
import { LoadingOverlaySmall } from '../../components/mui/LoadingOverlay';
import './styles/Contact_Us.css'
import TextField from '@mui/material/TextField';
import VerticalTabs from '../../components/mui/Tabs';

function Clients(props) {
const emptyFields={
first_name:'',
last_name:'',
title:'',
email:'',
comment:'',
}

const navigate=useNavigate()
const { formEnable, setFormEnable,open,setOpen } = useOutletContext();
  const [contactUs,setContactUs]=useState(emptyFields)
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({text:"",color:""});
  function handleChange(name,value){
setContactUs({...contactUs,[name]:value})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    resetErrors()
    setLoading(true)
    const response= await apiClient.post('/contact_us/',contactUs)
    setLoading(false)
    if(response.status!=201)
    return setMessage({text:"Error occured while Submiting Data try again",color:"danger"})
    setMessage({text:"Successfully Added",color:"success"})
  }

  function resetErrors(){
    setMessage({text:"",color:""})
  }
return (
<div>
<Helmet>
<title>Clients</title>
 </Helmet>
  <div className="container-fluid py-5">
    <div className="row back_Client my-3 mx-0 mx-sm-4 p-4 justify-content-center">
      <div className=" pt-3 ps-sm-5 my-auto col-md-10">
        <h3>
        Medical Staffing & <br /> Workforce Solutions <br /> Designed For You.    
        </h3>
        <p>
        What we do is simple: we find the best candidates for your company. Through a quality, trust and commitment that is unparalleled, IsentCare Healthcare Staffing will make it possible for you to put your energy where it matters most – your patients. Let us take care of the rest.
        </p>
        <h6 className='fw-bold'>
        Quality that meets your standards 
        </h6>
        <p>
        Whether you’re looking for staffing solutions or complete vendor management, IsentCare’s comprehensive range of services will get you the highest quality candidates. We’ll match the unique needs of your company.
        </p>
        <h6 className='fw-bold'>
        Peace of mind 
        </h6>
        <p>
        Proudly Joint Commission Certified, our commitment to timeliness and accuracy means you can rest easy. 
        </p>
        <h6 className='fw-bold'>
        Commitment to you, 24/7
        </h6>
        <p>
        Actions speak louder than words. With a National Operations Center that is always open, our team is here for you 24 hours a day, 365 days a year. Let us be the agency that gives you the commitment and dedication you deserve.
        </p>
      </div>
    </div>
  </div>



  <div className="container-fluid">
      <div className="row">
        
      </div>
</div>

  <div className="container my-5">
    <div className="row pb-5">
      <div className="col-md-9 text-center text-md-start WHY_JOIN_ANGLED">
        <h2 className='text-muted'>Enterprise-Wide Workforce Solutions</h2>
        <VerticalTabs/>
        
    </div>
    </div>
  </div>
  <div className=" container py-3">
          <div class="row">
            <div className="background_img">
              <div className="background_border d-flex align-items-center p-3">
                <div class="bg_bag_plus my-auto mx-2">
                  <i class="bi bi-bag-plus-fill bag_style p-2 text-white"></i>
                </div>
                <p className="mb-0 mx-2 text-white">“IsentCare has a long history of clinical staffing expertise, quality assurance and customer service. They have been a reliable partner, including providing significant resources following an EF-5 tornado in our region several years ago.” </p>
              </div>
                <p className="text-white text-center ">
                – Jan
                </p>
            </div>
          </div>
        </div>
</div>

    );
}

export default Clients;
