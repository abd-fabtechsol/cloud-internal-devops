import React from 'react'
import c1 from "../../assets/nonclinic/1.jpg"
import c2 from "../../assets/nonclinic/2.png"
import c3 from "../../assets/nonclinic/3.jpg"
import c4 from "../../assets/nonclinic/4.jpg"
import c5 from "../../assets/nonclinic/5.jpg"
import { Box, Button, Grid, Paper } from '@mui/material'
import VerticalTabs from '../../components/mui/Tabpanel'
import { useNavigate } from 'react-router-dom'
const NonClinic = () => {
    const navigate=useNavigate()
  return (
   <>
    <div className='bg-health-care d-flex justify-content-center align-items-center'  >
       <h1 className='fw-bold'>Non-Clinical Healthcare Jobs</h1> 
    </div>
    <div className=' container    ' >

<Grid container className='' style={{padding:"40px" }}>
<Grid item xs={12} >
    <h1 className='px-5 fw-bold ' style={{color:"#071641"}}>What are non-clinical careers in healthcare?</h1>
</Grid>
<Grid container>
    <Grid className='px-5 py-2' item xs={12} md={6}>
        <p  style={{textAlign:"left", }}>Non-clinical roles in the healthcare field are a critical part of the medical system. The importance of non-clinical jobs in healthcare is often overlooked, but those working in non-clinical positions play a vital part in helping hospitals and other medical facilities run efficiently so that the clinical staff can focus on providing the best care for patients.

Non-clinical positions typically do not involve direct patient care and usually revolve around anything behind the scenes at hospitals and other healthcare facilities. While some non-clinical jobs are specific to healthcare like hospital executives or medical billers and coders, many jobs in departments like human resources, information technology (IT), and facility maintenance exist in other industries. These non-clinical careers generally do not require prior healthcare experience and are often an excellent way to get into the medical field leading to a rewarding and meaningful career in the medical profession.</p>
    {/* <Button variant='contained' style={{backgroundColor:"#FF7600",borderRadius:"30px"}}>Search Jobs Now</Button> */}
    </Grid>
    <Grid item xs={12} md={6} >
        <img src={c1} style={{height:"400px",width:"100%",objectFit:"cover"}} />
    </Grid>
    <Grid className='px-5 py-2'  xs={12}>
        <p>
        IsentCare Healthcare Staffing provides non-clinical professionals exciting career opportunities at top healthcare organizations nationwide. With multiple employment options available including contract work, temp to perm opportunities, and direct hire jobs, our dedicated recruiters can help you find the perfect non-clinical job near you!
        </p>
            
        <div className='d-flex justify-content-center'>
        <Button variant='contained'className='fw-bold' style={{backgroundColor:"#FF7600",borderRadius:"30px"}} onClick={()=>navigate("/jobs")}  title='Search Jobs'>Search Jobs </Button>
        </div>
    </Grid>
</Grid>
</Grid>
</div> 

<div className=' container    ' >

<Grid container className='' style={{padding:"40px" }}>
<Grid item xs={12} >
    <h1 className='px-5 fw-bold ' style={{color:"#071641"}}>Explore non-clinical healthcare career opportunities with IsentCare </h1>
</Grid>
<Grid container>
    <Grid className='px-5 py-2' item xs={12}>
        <p  style={{textAlign:"left", }}>The types of non-clinical roles available are as vast as the range of unique requirements and skill sets needed to work in these positions. Our recruiters are experienced with navigating the different backgrounds, certifications, and degrees healthcare facilities require for employment. At IsentCare, we know how important your career is, and we work with you to select the job that meets your needs and utilizes your individual experience. </p>
    {/* <Button variant='contained' style={{backgroundColor:"#FF7600",borderRadius:"30px"}}>Search Jobs Now</Button> */}
    </Grid>
    <Grid item xs={12}>
        <VerticalTabs/> 
    </Grid>
    </Grid>
    </Grid>
    </div>
    
    <div className=' container    ' >

<Grid container className='' style={{padding:"40px" }}>
<Grid item xs={12} className='' >
    <h1 className='px-5 fw-bold ' style={{color:"#071641",textAlign:"center"}}>Experience the advantage of working with IsentCare</h1>
</Grid>

</Grid>
</div>

<div className=' container    ' >

<Grid container className='' style={{padding:"40px" }}>
    <Grid item xs={12} md={8}>
<Grid item xs={12} className='' >
    <h1 className='px-5 fw-bold ' style={{color:"#071641",}}>Our streamlined application process makes onboarding with IsentCare easy</h1>
    <p>
    Are you looking for a new job in your healthcare career? IsentCare can assist you in finding a role best suited to your experience and needs. Our easy application process takes minutes to complete and by applying directly, you can eliminate hours spent hunting through job postings. Our experienced recruiters will guide you through the hiring process and help you find your next dream non-clinical job in healthcare. Get started by applying today!
    </p>
</Grid>
</Grid>
<Grid className=' d-flex justify-content-center align-items-center' item xs={12} md={4}>
    <Box className='p-3 d-flex justify-content-center align-items-center shadow-sm 'sx={{height:"70%", width:"70%"}} component={Paper}>
        <div>

        <h3>Gets Started</h3>
    <Button variant='contained fw-bold' style={{backgroundColor:"#FF7600",borderRadius:"30px"}} onClick={()=>navigate("/apply")}  title='Apply'>Apply Now</Button> 
        </div>
    </Box>
</Grid>

</Grid>
</div>

<div className=' container    ' >

<Grid container className='' style={{padding:"40px" }}>

<Grid container>
<Grid item xs={12} md={6} >
        <img src={c1} style={{height:"400px",width:"100%",objectFit:"cover"}} />
    </Grid>
    <Grid className='px-5 py-2' item xs={12} md={6}>
        <h1 className='fw-bold'>Search for non-clinical jobs on the go with IsentCare’s mobile app</h1>
        <p  style={{textAlign:"left", }}>Finding jobs near you is now as easy as opening IsentCare Healthcare Staffing’s mobile app. With our app, you can search for new non-clinical job opportunities and save job searches to receive alerts when a new job matches your search criteria. You can also add your schedule availability and instantly book per diem shifts when they are available. Try out our mobile app today!</p>
   <div className='d-flex gap-3 flex-column flex-md-row'>
    {/* <Button className='fw-bold' variant='contained' style={{backgroundColor:"#FF7600",borderRadius:"30px"}} title='App Store'>Apple App Store</Button>
    <Button className='fw-bold' variant='contained' style={{backgroundColor:"blue",borderRadius:"30px"}} title='Play Store '>Google Play Store</Button> */}
   </div>
   
    </Grid>
    
</Grid>
</Grid>
</div> 

<div className=' container    ' >

<Grid container className='' style={{padding:"40px" }}>

<Grid container>
    <Grid className='px-5 py-2' item xs={12} md={6}>
        <h1 className='fw-bold'>24/7 support for when you need it most</h1>
        <p  style={{textAlign:"left", }}>IsentCare Healthcare Staffing’s National Service Center provides non-clinical healthcare professionals support any time of the day. We know that working in the healthcare field sometimes requires support after normal business hours; to ensure excellent customer service experience, we make ourselves available at all hours of the day and night – 365 days a year. </p>
    <Button className='fw-bold' variant='contained' onClick={()=>navigate("/contact-us")}  style={{backgroundColor:"#FF7600",borderRadius:"30px"}} title='Contact us '>Contact us</Button>
    </Grid>
    <Grid item xs={12} md={6} >
        <img src={c3} style={{height:"400px",width:"100%",objectFit:"cover"}} />
    </Grid>
</Grid>
</Grid>
</div> 

<div className=' container    ' >

<Grid container className='' style={{padding:"40px" }}>

<Grid container>
<Grid item xs={12} md={6} >
        <img src={c4} style={{height:"400px",width:"100%",objectFit:"cover"}} />
    </Grid>
    <Grid className='px-4 py-2' item xs={12} md={6}>
        <h1 className='fw-bold'>Earn extra money with IsentCare’s employee referral program</h1>
        <p  style={{textAlign:"left", }}>Do you know a non-clinical health professional that is looking for a new job opportunity? Refer them to IsentCare! Our referral bonus program is open to employees and non-employees alike. For every referral you make to IsentCare, you have the chance to earn extra money as a reward for helping us find the best talent out there. Refer your friends, family, or colleagues in the healthcare community to IsentCare Healthcare Staffing today!</p>
   <div className='d-flex gap-3 flex-column flex-md-row'>
    {/* <Button className='fw-bold' variant='contained' style={{backgroundColor:"#FF7600",borderRadius:"30px"}} title='Refer someone'>REFER SOMEONE TODAY</Button> */}
    {/* <Button className='fw-bold' variant='contained' style={{backgroundColor:"blue",borderRadius:"30px"}}>Google Play Store</Button> */}
   </div>
   
    </Grid>
    
</Grid>
</Grid>
</div>
 <Grid container style={{backgroundColor:"#E6F3FA"}}>
 <div className=' container    ' >

<Grid container className='' style={{padding:"40px" }}>

<Grid container>
    <Grid className='px-5 py-2' item xs={12} md={6}>
        <h1 className='fw-bold'>Explore other career opportunities with IsentCare</h1>
        <p  style={{textAlign:"left", }}>IsentCare Healthcare Staffing is dedicated to supporting our communities in crisis. For years, we have provided non-clinical and clinical personnel support to government and local state entities to assist with disaster relief efforts, emergency response, staffing shortages, and more. The staffing services we provide are critical for emergency management in cities across the United States. Learn more about our emergency services or search our current job openings to see how you can help. </p>
   <div className='d-flex gap-3 flex-column flex-md-row justify-content-center'>
    
    {/* <Button className='fw-bold' variant='contained' style={{backgroundColor:"#FF7600",borderRadius:"30px"}} title='Emergency services'>EMERGENCY SERVICES</Button> */}
    <Button className='fw-bold' variant='outlined' onClick={()=>navigate("/jobs")}  style={{borderColor:"blue",borderRadius:"30px"}} title='Search Job'>Search Jobs</Button>
   </div>
    </Grid>
    <Grid item xs={12} md={6} >
        <img src={c5} style={{height:"400px",width:"100%",objectFit:"cover"}} />
    </Grid>
</Grid>
</Grid>
</div> 
  </Grid> 
   </>
  )
}

export default NonClinic