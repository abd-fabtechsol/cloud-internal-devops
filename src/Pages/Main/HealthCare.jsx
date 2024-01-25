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
import React from 'react'
import { useNavigate } from 'react-router-dom'

const HealthCare = () => {
    const navigate=useNavigate()
  return (
    <>
     <div className='bg-health-care d-flex justify-content-center align-items-center'  >
       <h1 className='fw-bold'>Permanent Placement</h1> 
    </div>

    <div className=' container    ' >

<Grid container className='' style={{padding:"40px" }}>
<Grid item xs={12} >
    <h1 className='px-5 fw-bold ' style={{color:"#071641"}}>The top staffing agency for healthcare professionals nationwide </h1>
</Grid>
<Grid item xs={12} >
    <p className='px-5  '>At IsentCare Healthcare Staffing, we know how important your career is to you. We partner with the best healthcare organizations across the country to provide exceptional career opportunities to experienced nursing, allied health, and non-clinical professionals. Whether you are looking for more flexibility to allow for a better work-life balance or for your next big adventure in your career, IsentCare can help you find your dream job. </p>
</Grid>

</Grid>
</div> 

<div className=' container    ' >

<Grid container className='' style={{padding:"40px" }}>

<Grid container>
    <Grid className='px-5 py-2' item xs={12} md={6}>
        <h1 className='fw-bold'>Nursing</h1>
        <p  style={{textAlign:"left", }}>Starting out as IsentCare Nurses in 1981, IsentCare Healthcare Staffing has been providing career opportunities to nurses for over 40 years! We employ a variety of nursing disciplines and specialties including advanced practice nurses like physician assistants (PAs) and nurse practitioners (NPs), registered nurses (RNs), licensed practical nurses (LPNs) or licensed vocational nurses (LVNs), and certified nursing assistants (CNAs). </p>
    <Button className='fw-bold' variant='contained' style={{backgroundColor:"#FF7600",borderRadius:"30px"}} title='Learn More'>Learn more</Button>
    </Grid>
    <Grid item xs={12} md={6} >
        <img src={i1} style={{height:"400px",width:"100%",objectFit:"cover"}} />
    </Grid>
</Grid>
</Grid>
</div> 
<div className=' container    ' >

<Grid container className='' style={{padding:"40px" }}>

<Grid container>
<Grid item xs={12} md={6} >
        <img src={i2} style={{height:"400px",width:"100%",objectFit:"cover"}} />
    </Grid>
    <Grid className='px-5 py-2' item xs={12} md={6}>
        <h1 className='fw-bold'>Allied Health</h1>
        <p  style={{textAlign:"left", }}>At IsentCare we have decades of experience staffing the wide ranges of allied health roles within the medical community. Whatever your certification or experience, we can help you find your next job whether it's in rehab and therapy, radiology and imaging, social work and behavioral health, pharmacy, laboratory, or dentistry.  </p>
    <Button className='fw-bold' variant='contained' style={{backgroundColor:"#FF7600",borderRadius:"30px"}} title='Learn More'>Learn more</Button>
    </Grid>
    
</Grid>
</Grid>
</div> 
<div className=' container    ' >

<Grid container className='' style={{padding:"40px" }}>

<Grid container>
    <Grid className='px-5 py-2' item xs={12} md={6}>
        <h1 className='fw-bold'>Non-Clinical</h1>
        <p  style={{textAlign:"left", }}>Our dedicated recruiters are experienced in navigating the unique responsibilities non-clinical personnel provide the healthcare community. Whether you are in human resources, information technology (IT), or environmental services, we can find your dream job at top healthcare facilities including hospitals, physician offices, and long-term care facilities across the country.</p>
    <Button className='fw-bold' variant='contained' style={{backgroundColor:"#FF7600",borderRadius:"30px"}} title='Learn More'>Learn more</Button>
    </Grid>
    <Grid item xs={12} md={6} >
        <img src={i3} style={{height:"400px",width:"100%",objectFit:"cover"}} />
    </Grid>
</Grid>
</Grid>
</div> 
<div className=' container    ' >

<Grid container className='' style={{padding:"40px" ,}}>
<Grid item xs={12} >
    <h1 className='px-5 fw-bold ' style={{color:"#071641"}}>Flexible employment options to fit your needs</h1>
</Grid>
<Grid item xs={12} >
    <p className='px-5  '>At IsentCare Healthcare Staffing, we pride ourselves on providing a range of employment options to fit your needs and schedule. We offer permanent direct hire jobs, as needed per diem jobs, and contract assignments including short-term and long-term travel and local assignments.</p>
</Grid>

</Grid>
</div>

<div className=' container    ' >

<Grid container className='' style={{padding:"40px" }}>

<Grid container>
<Grid item xs={12} md={6} >
        <img src={i4} style={{height:"400px",width:"100%",objectFit:"cover"}} />
    </Grid>
    <Grid className=' px-5 py-2' item xs={12} md={6}>
        <h1 className='fw-bold'>Direct Hire</h1>
        <p className=''  style={{textAlign:"left", }}>Direct hire jobs are an excellent option if you are looking for a part-time or full-time permanent job as a staff nurse or a healthcare professional. Our placement consultants match you with employers in need of committed and skilled staff, allowing you to find the right permanent job providing you with longevity and stability. IsentCare has direct hire jobs for nurse anesthetists, nurse practitioners, registered nurses, licensed practical nurses, certified nursing assistants, front and back-office staff, and a wide range allied health roles including medical assistants, certified surgical technicians, and more. Find your dream direct hire job with IsentCare today!  </p>
    <Button className='fw-bold' variant='contained' style={{backgroundColor:"#FF7600",borderRadius:"30px"}} title='Learn More'>Learn more</Button>
    </Grid>
    
</Grid>
</Grid>
</div> 

<div className=' container    ' >

<Grid container className='' style={{padding:"40px" }}>

<Grid container>

    <Grid className=' px-5 py-2' item xs={12} md={6}>
        <h1 className='fw-bold'>Per Diem</h1>
        <p className=''  style={{textAlign:"left", }}>Per diem, or PRN, work allows nurses to pick up shifts on an as-needed basis, sometimes across multiple healthcare facilities, without committing to full-time employment. Per diem work offers high pay, flexibility, and the ability to choose where you work and when. With per diem nursing, you can control and manage your schedule by choosing the days and hours you work on a per-shift basis. No matter where you are located, with over 25 branch offices located across the United States, IsentCare can help you find the best PRN nursing jobs near you. </p>
    <Button className='fw-bold' variant='contained' style={{backgroundColor:"#FF7600",borderRadius:"30px"}} title='Learn More'>Learn more</Button>
    </Grid>
    <Grid item xs={12} md={6} >
        <img src={i5} style={{height:"400px",width:"100%",objectFit:"cover"}} />
    </Grid>
    
</Grid>
</Grid>
</div>

<div className=' container    ' >

<Grid container className='' style={{padding:"40px" }}>

<Grid container>
<Grid item xs={12} md={6} >
        <img src={i6} style={{height:"400px",width:"100%",objectFit:"cover"}} />
    </Grid>
    <Grid className=' px-5 py-2' item xs={12} md={6}>
        <h1 className='fw-bold'>Travel Assignments</h1>
        <p className=''  style={{textAlign:"left", }}>Short-term or long-term travel assignments give travel nurses and allied health professionals the opportunity to work in different healthcare facilities nationwide on assignments that typically last anywhere from 4-13 weeks. While temporary, travel assignments offer you higher pay rates, the flexibility of choosing where you want to work, and the ability to develop your skills at top facilities including teaching hospitals, acute care hospitals, medical centers, and more. Explore the country while you advance your healthcare career on a travel assignment with IsentCare! </p>
    <Button className='fw-bold' variant='contained' style={{backgroundColor:"#FF7600",borderRadius:"30px"}} title='Learn More'>Learn more</Button>
    </Grid>
    
</Grid>
</Grid>
</div> 

<div className=' container    ' >

<Grid container className='' style={{padding:"40px" }}>
<Grid item xs={12} >
    <h1 className='px-5 fw-bold ' style={{color:"#071641"}}>Non-traditional employment opportunities with IsentCare Healthcare Staffing</h1>
</Grid>
<Grid item xs={12} >
    <p className='px-5  '>Unlike most of our healthcare staffing competitors, IsentCare offers nursing, allied health, and non-clinical professionals a full range of employment options from traditional travel nursing and per diem work, to more niche opportunities like school nursing, corrections, and government assignments for emergency management and disaster response. </p>
</Grid>

</Grid>
</div>  

<div className=' container    ' >

<Grid container className='' style={{padding:"40px" }}>

<Grid container>
<Grid item xs={12} md={6} >
        <img src={i7} style={{height:"400px",width:"100%",objectFit:"cover"}} />
    </Grid>
    <Grid className=' px-5 py-2' item xs={12} md={6}>
        <h1 className='fw-bold'>School Nursing</h1>
        <p className=''  style={{textAlign:"left", }}>School nurses and healthcare professionals are crucial to creating a safe and healthy learning environment by providing healthcare services to students and faculty in schools, colleges, and universities. Responsible for treating illnesses and injuries on site, dispensing medications and administering injections, providing medical supervision and health advice, school nurses provide necessary care to members of our communities. Interested in school nurse jobs near you? Search our current job openings or apply with IsentCare today!</p>
    <div className='d-flex gap-3 flex-column flex-md-row'>
    <Button className='fw-bold' variant='contained' style={{backgroundColor:"#FF7600",borderRadius:"30px"}}  onClick={()=>navigate("/jobs")} title='Search Jobs'>Search Jobs</Button>
    <Button className='fw-bold' variant='contained' style={{backgroundColor:"blue",borderRadius:"30px"}}  onClick={()=>navigate("/apply")} title='Apply'>Apply</Button>
   </div>
    </Grid>
    
</Grid>
</Grid>
</div> 

<div className=' container    ' >

<Grid container className='' style={{padding:"40px" }}>

<Grid container>

    <Grid className=' px-5 py-2' item xs={12} md={6}>
        <h1 className='fw-bold'>Correctional Nursing</h1>
        <p className=''  style={{textAlign:"left", }}>Correctional nurses and healthcare professionals play a vital role in healthcare by providing nursing care that promotes, protects, and optimizes the health of individuals under the jurisdiction of the justice system. From assessing healthcare needs to providing healthcare treatments, such as pain management and mental health interventions, correctional nurses have a wide scope of responsibilities and serve as advocates for their patients. They strive to reduce suffering through diagnosis and treatment and by respecting the dignity of everyone they care for. Looking for correctional nursing jobs near you? Search our current job openings or apply with IsentCare today!</p>
    <div className='d-flex gap-3 flex-column flex-md-row'>
    <Button className='fw-bold' variant='contained' style={{backgroundColor:"#FF7600",borderRadius:"30px"}}  onClick={()=>navigate("/jobs")}  title='Search Job'>Search Jobs</Button>
    <Button className='fw-bold' variant='contained' style={{backgroundColor:"blue",borderRadius:"30px"}}  onClick={()=>navigate("/apply")}  title='Apply '>Apply</Button>
   </div>
    </Grid>
    <Grid item xs={12} md={6} >
        <img src={i8} style={{height:"400px",width:"100%",objectFit:"cover"}} />
    </Grid>
    
</Grid>
</Grid>
</div> 

<div className=' container    ' >

<Grid container className='' style={{padding:"40px" }}>

<Grid container>
<Grid item xs={12} md={6} >
        <img src={i9} style={{height:"400px",width:"100%",objectFit:"cover"}} />
    </Grid>
    <Grid className=' px-5 py-2' item xs={12} md={6}>
        <h1 className='fw-bold'>Emergency management and disaster response</h1>
        <p className=''  style={{textAlign:"left", }}>IsentCare Healthcare Staffing has provided nursing, allied health, and non-clinical personnel support for government and state staffing needs for years. Our employees have been part of disaster relief response units for hurricanes, tornadoes, and floods; emergency shelters for gas explosions and unaccompanied minors; emergency response units for COVID testing sites, vaccine administration, infection control, and for staffing shortages nationwide. With our people-centric mentality, combined with a core value focused on always putting others before self, IsentCare is dedicated to supporting our communities in crisis. For more information visit our emergency services page.</p>
    <div className='d-flex gap-3 flex-column flex-md-row'>
    <Button className='fw-bold' variant='contained' style={{backgroundColor:"#FF7600",borderRadius:"30px"}} title='Learn More'>Learn More</Button>
    {/* <Button className='fw-bold' variant='contained' style={{backgroundColor:"blue",borderRadius:"30px"}}>Apply</Button> */}
   </div>
    </Grid>
    
</Grid>
</Grid>
</div> 



    </>
  )
}

export default HealthCare