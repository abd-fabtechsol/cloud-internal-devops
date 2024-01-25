import React from 'react'
import backimg from "../../assets/DirectHire/direct-hire.jpg"
import dh from '../../assets/DirectHire/d-h.jpg'
import el from '../../assets/DirectHire/e-l.jpg'
import fp from '../../assets/DirectHire/f-p.jpg'
import rp from '../../assets/DirectHire/r-p.jpg'
import ts from '../../assets/DirectHire/t-s.jpg'
import { Grid } from '@mui/material'
import { Button } from 'react-bootstrap'
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom'
const DirectHire = () => {
    const navigate=useNavigate()
  return (
    <>
    <div className='bg-direct-hire' >
        <div className='d-flex justify-content-center align-items-center h-100'>
         <h1 className='fw-bold'>Direct Hire Jobs</h1> 
        </div>
    </div> 
    <div className=' container    ' >

        <Grid container className='' style={{padding:"40px" }}>
        <Grid item xs={12} >
            <h1 className='px-5 fw-bold ' style={{color:"#071641"}}>Direct hire careers in healthcare</h1>
        </Grid>
        <Grid container>
            <Grid item xs={12} md={6}>
                <p className='px-5 py-2' style={{textAlign:"left", }}>Direct hire jobs are an excellent option if you are looking for a full-time job as a staff nurse or a healthcare professional. At IsentCare Healthcare Staffing, we match you with employers in need of committed and skilled staff, allowing you to find the right permanent job with longevity and stability.
                Direct hire and temp to perm jobs offer the chance to gain experience in different specialties and the opportunity to establish your medical career. As one of the top healthcare staffing agencies in the United States, IsentCare has the best jobs for nurses and healthcare professionals at acute care and rehab hospitals, physician offices, assisted living facilities, schools, and more!</p>
            </Grid>
            <Grid item xs={12} md={6} >
                <img src={dh} style={{height:"350px",width:"100%",objectFit:"cover"}} />
            </Grid>
        </Grid>
        </Grid>
    </div>        
    <div className=' container    ' >

        <Grid container className='' style={{padding:"40px" }}>
        <Grid item xs={12} >
            <h1 className='px-5 fw-bold ' style={{color:"#071641"}}>Find the perfect direct hire job with IsentCare</h1>
        </Grid>
        <Grid container>
        <Grid item className='px-5 py-2' xs={12} md={6} >
                <img src={fp} style={{height:"350px",width:"100%",objectFit:"cover"}} />
            </Grid>
            <Grid item  xs={12} md={6}>
                <p  style={{textAlign:"left", }}>IsentCare Healthcare Staffing can help you find the perfect direct hire career to fit your professional needs and lifestyle. Our dedicated placement consultants assess your individual career goals and ambitions to understand exactly what kind of job best suits your skill set and experience level.

With access to exclusive healthcare facilities nationwide, IsentCare has opportunities for registered nurses, nurse practitioners, nurse anesthetists, licensed practical nurses, certified nursing assistants, medical assistants, front and back-office staff, and a wide range of allied health roles. Apply with IsentCare today and let us show you how we can help you find your dream career in healthcare.</p>
                <div className='d-flex flex-column flex-md-row  gap-2'>
                <Button variant='contain' style={{backgroundColor:"#FF6700",color:"white",borderRadius:"40px"}} onClick={()=>navigate("/apply")} title='Apply Now'>Apply Now</Button>
                <Button variant='outlined' style={{color:"blue ",border:"1px solid blue",borderRadius:"40px"}} onClick={()=>navigate("/jobs")} title='Find Job'>Find a Job</Button>
                    </div>
            </Grid>
            
        </Grid>
        </Grid>
    </div> 
    <div className=' container    ' >

        <Grid container className='' style={{padding:"40px" }}>
        <Grid item xs={12} >
            <h1 className='px-5 fw-bold ' style={{color:"#071641"}}>Talent solutions for all your part-time, full-time, and temp to perm needs</h1>
        </Grid>
        <Grid container>
            <Grid item xs={12} md={6}>
                <p className='px-5 py-2' style={{textAlign:"left", }}>At IsentCare Healthcare Staffing, we understand that full-time direct hire and temp to perm options are an affordable way of counteracting staffing shortages. Our recruitment and talent solutions are designed to achieve optimal outcomes including improved fill rates, decreased time to hire, reduced early-stage turnover, and minimized administrative effort.

For over four decades, we have served the healthcare staffing industry with commitment and personalized solutions, helping countless organizations fill their open positions quickly without sacrificing quality.</p>
            </Grid>
            <Grid item xs={12} md={6} >
                <img src={ts} style={{height:"350px",width:"100%",objectFit:"cover"}} />
            </Grid>
        </Grid>
        </Grid>
    </div>  
    <div className='container' >

        <Grid container className='' style={{padding:"40px" }}>
        <Grid item xs={12} className='mb-0' >
            <p className='px-5'>We specialize in direct hire, temp to perm, and temporary staffing solutions and have the experience, commitment, and resources to help you staff your facility and stay competitive. Hire with ease, expertise, and confidence when you choose IsentCare Healthcare Staffing.</p>
        </Grid>
        <Grid item className='px-5 mb-0' xs={12}>
            <div className='d-flex gap-3'>
            <StarIcon fontSize='medium' style={{color:"#FF6700"}}/>
            <p>Outpatient physician offices</p>
            </div>
        </Grid>
        <Grid item className='px-5 mb-0' xs={12}>
            <div className='d-flex gap-3'>
            <StarIcon fontSize='medium' style={{color:"#FF6700"}}/>
            <p>Assisted living facilities, nursing homes, and rehab hospitals</p>
            </div>
        </Grid>
        <Grid item className='px-5 mb-0' xs={12}>
            <div className='d-flex gap-3'>
            <StarIcon fontSize='medium' style={{color:"#FF6700"}}/>
            <p>Acute care hospitals and surgery centers</p>
            </div>
        </Grid>
        <Grid item className='px-5 mb-0' xs={12}>
            <div className='d-flex gap-3'>
            <StarIcon fontSize='medium' style={{color:"#FF6700"}}/>
            <p>Home health and hospice</p>
            </div>
        </Grid>
        <Grid item className='px-5 mb-0' xs={12}>
            <div className='d-flex gap-3'>
            <StarIcon fontSize='medium' style={{color:"#FF6700"}}/>
            <p>Drug and alcohol treatment facilities</p>
            </div>
        </Grid>
        <Grid item className='px-5 mb-0' xs={12}>
            <div className='d-flex gap-3'>
            <StarIcon fontSize='medium' style={{color:"#FF6700"}}/>
            <p>Behavioral health facilities</p>
            </div>
        </Grid>
        <Grid item className='px-5 mb-0' xs={12}>
            <div className='d-flex gap-3'>
            <StarIcon fontSize='medium' style={{color:"#FF6700"}}/>
            <p>Development disability programs</p>
            </div>
        </Grid>
        <Grid item className='px-5 mb-0' xs={12}>
            <div className='d-flex gap-3'>
            <StarIcon fontSize='medium' style={{color:"#FF6700"}}/>
            <p>Schools</p>
            </div>
        </Grid>
        <Grid item className='px-5 mb-0' xs={12}>
            <div className='d-flex gap-3'>
            <StarIcon fontSize='medium' style={{color:"#FF6700"}}/>
            <p>Youth shelters</p>
            </div>
        </Grid>
            <Grid item className='px-5 mb-0' xs={12}>
                <div className='d-flex gap-3'>
                <StarIcon fontSize='medium' style={{color:"#FF6700"}}/>
                <p>Telehealth</p>
                </div>
            </Grid>
        </Grid>
        </div> 
        <div className=' container    ' >

<Grid container className='' style={{padding:"40px" }}>
<Grid item xs={12} >
    <h1 className='px-5 fw-bold ' style={{color:"#071641"}}>Recruitment process outsourcing</h1>
</Grid>
<Grid container>
    <Grid item xs={12} md={6}>
        <p className='px-5 py-2' style={{textAlign:"left", }}>IsentCare Healthcare Staffing is the premier provider of direct hire recruitment services with proven results in reducing costs, decreasing time-to-fill, and improving new hire retention rates. Our expert recruiters have a proven track record of delivering cost savings on average of 24%, an average 45% reduction in the time needed to fill positions, and an impressive 55% increase in new hire retention.

At IsentCare, our commitment to exceeding customer expectations has made us a leader in the staffing industry for over 40 years. By working closely with our healthcare clients, we are able to offer customized solutions to fill a wide variety of nursing and allied health needs ensuring that your expectations are exceeded every time. </p>
    </Grid>
    <Grid item xs={12} md={6} >
        <img src={rp} style={{height:"350px",width:"100%",objectFit:"cover"}} />
    </Grid>
</Grid>
</Grid>
</div> 
<div className='container' >

<Grid container className='' style={{padding:"40px" }}>
<Grid item xs={12} className='mb-0' >
    <h1 className='px-5 fw-bold ' style={{color:"#071641"}}>Nursing and allied health roles</h1>
</Grid>
<Grid item className='px-5 mb-0' xs={12}>
    <div className='d-flex gap-3'>
    <StarIcon fontSize='medium' style={{color:"#FF6700"}}/>
    <p>Advanced practice nurses (APRN), including physician assistants (PA) and nurse practitioners (NP)</p>
    </div>
</Grid>
<Grid item className='px-5 mb-0' xs={12}>
    <div className='d-flex gap-3'>
    <StarIcon fontSize='medium' style={{color:"#FF6700"}}/>
    <p>Certified registered nurse anesthetist</p>
    </div>
</Grid>
<Grid item className='px-5 mb-0' xs={12}>
    <div className='d-flex gap-3'>
    <StarIcon fontSize='medium' style={{color:"#FF6700"}}/>
    <p>Registered nurses (RN), licensed practical nurses (LPN) / licensed vocational nurses (LVN)</p>
    </div>
</Grid>
<Grid item className='px-5 mb-0' xs={12}>
    <div className='d-flex gap-3'>
    <StarIcon fontSize='medium' style={{color:"#FF6700"}}/>
    <p>Certified nursing assistants (CNA)</p>
    </div>
</Grid>
<Grid item className='px-5 mb-0' xs={12}>
    <div className='d-flex gap-3'>
    <StarIcon fontSize='medium' style={{color:"#FF6700"}}/>
    <p>Allied health professionals including medical assistants (MA) and certified surgical techs (CST)</p>
    </div>
</Grid>
<Grid item className='px-5 mb-0' xs={12}>
    <div className='d-flex gap-3'>
    <StarIcon fontSize='medium' style={{color:"#FF6700"}}/>
    <p>Department and unit managers</p>
    </div>
</Grid>
<Grid item className='px-5 mb-0' xs={12}>
    <div className='d-flex gap-3'>
    <StarIcon fontSize='medium' style={{color:"#FF6700"}}/>
    <p>Office managers and medical receptionists</p>
    </div>
</Grid>
<Grid item className='px-5 mb-0' xs={12}>
    <div className='d-flex gap-3'>
    {/* <StarIcon fontSize='medium' style={{color:"#FF6700"}}/> */}
    <h5>IsentCare Healthcare Staffing is your single source for all your healthcare employment needs. Contact us today for all your direct hire staffing needs!</h5>
    </div>
</Grid>
<Grid item xs={12} className='d-flex justify-content-center'>
<Button className='px-4' variant='contain' style={{backgroundColor:"#FF6700",color:"white",borderRadius:"70px"}} onClick={()=>navigate("/contact-us")}  title='Contact Us'>Contact us</Button>
</Grid>

</Grid>
</div>  
<div className=' container    ' >

<Grid container className='' style={{padding:"40px" }}>
<Grid item xs={12} >
    <h1 className='px-5 fw-bold ' style={{color:"#071641"}}>Executive-level nursing and healthcare professional services </h1>
</Grid>
<Grid container>
    <Grid item xs={12} md={6}>
        <p className='px-5 py-2' style={{textAlign:"left", }}>
        IsentCare Healthcare Staffing provides professional, specialized assistance to companies that are seeking to hire executive level employees in the healthcare industry. With our recruiting process, we are able to help identify and hire qualified employees at any level. We have extensive experience in sourcing, selecting, recruiting and placing individuals in the executive roles of Chief Medical Officers, Chief Nurse Officers and Clinical Department Managers. Our skill and attention to detail provides employers with peace of mind that they will be able to hire the right candidates with the correct qualifications and skill set to meet the role’s requirements. 
        </p>
    </Grid>
    <Grid item xs={12} md={6} >
        <img src={el} style={{height:"350px",width:"100%",objectFit:"cover"}} />
    </Grid>
</Grid>
</Grid>
</div>     
    </>
  )
}

export default DirectHire