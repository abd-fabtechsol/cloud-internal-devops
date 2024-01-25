import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default () => {
    const navigate=useNavigate()
  return (
    <div>
        <div className='background_Allied_color'>
                <div className='h-100 d-flex justify-content-center align-items-center'>
                    <h1 className='fw-bold text-center'>
                   Allied Health Care
                    </h1>

                </div>
                </div>

                <div className=' container '>

            <Grid container className='' style={{padding:"40px" }}>
            <Grid item xs={12} >
                <h1 className=''>What is allied health?</h1>
            </Grid>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    Allied health professionals play an important role in the healthcare industry, providing invaluable support to medical professionals and patients. Allied health is a broad field describing professionals who support the medical community in a variety of ways, from direct patient care to essential administrative services.
                    </p>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    If you are an allied healthcare professional, working with IsentCare Healthcare Staffing can help you maximize the value of your healthcare experience. With our dedication to offering a wide variety of positions, you're sure to be able to find the perfect fit for your experience and credentials. From contract work, temp to perm opportunities, and direct hire jobs, our recruiters work with you to find the allied health job that best meets your needs.
                    </p>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    A few well-known allied health positions include CT technologists, radiology technologists, certified surgical techs, sterile processing techs, medical assistants, phlebotomists, and respiratory therapists. Together these important roles make up an estimated 60% of the healthcare workforce across the country and have a profound effect on overall patient well-being.
                    </p>
                </Grid>
                <Grid className='rounded d-flex justify-content-center' item xs={12} md={6} >
                    <div style={{width:'30rem'}}>
                    <img width={'100%'} src={require("../../assets/alliedImg.jpg")}/>
                    </div>
                </Grid>
                <Grid container>
                    <Grid item xs={12} md={3}>
                    <h5>Get started</h5>
                    <Button className=' px-5' variant='contain' style={{backgroundColor:"#FF6700",color:"white",borderRadius:"40px"}} onClick={()=>navigate("/jobs")}  title='Search Jobs'>SEARCH JOBS</Button>
                    </Grid>
                <Grid item xs={12} md={9}>
                <p className='py-2' style={{textAlign:"left", }}>
                Our commitment to helping you find top-tier healthcare jobs means that you have the opportunity to establish lasting relationships with premier hospitals, surgery centers, physician offices, medical centers, and clinics in your desired location. Start your allied health career with IsentCare today!
                </p>
                </Grid>
                </Grid>
            </Grid>

            </Grid>
        </div> 

        <div className='container'>
            <Grid container style={{padding:"40px"}}>
            <Grid item xs={12} >
                <h1 className=''>Explore allied health job opportunities with IsentCare</h1>
            </Grid>
            <Grid>
                <p>
                With over 40 years of experience staffing a wide range of allied health roles, IsentCare Healthcare Staffing is the perfect choice allied health professionals nationwide. Our team of expert recruiters are eager to help you find the perfect role that caters to your skills and qualifications, whether it's within rehabilitation facilities, surgical centers, long-term acute care, or other areas.
                </p>
            </Grid>
            </Grid>

            <Grid container style={{padding:"40px", backgroundColor:"#E5F3FB"}}>
                <Grid item xs={12} md={4}>
                    <h5>
                    Rehab and therapy
                    </h5>
                </Grid>
                <Grid item xs={12} md={8}>
                <Grid className='nursing'>
                    <ul >
                      <li>
                      Speech language pathologist
                      </li>
                      <li>
                      Speech language therapist
                      </li>
                      <li>
                      Therapy assistants
                      </li>
                      <li>
                      Physical therapist
                      </li>
                      <li>
                      Occupational therapist
                      </li>
                    </ul>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container style={{padding:"40px", backgroundColor:"#F2F9FD"}}>
                <Grid item xs={12} md={4}>
                    <h5>
                    Radiology and imaging
                    </h5>
                </Grid>
                <Grid item xs={12} md={8}>
                <Grid className='nursing'>
                    <ul >
                      <li>
                      Cardiovascular radiology tech
                      </li>
                      <li>
                      Cath lab technologist
                      </li>
                      <li>
                      Interventional radiology tech
                      </li>
                      <li>
                      EP lab tech
                      </li>
                      <li>
                      CT technologist
                      </li>
                      <li>
                      MRI technician
                      </li>
                        <li>
                        Vascular technologist
                        </li>
                        <li>
                        Radiology technologist
                        </li>
                        <li>
                        Ultrasound technician
                        </li>
                        <li>
                        Mammographer
                        </li>
                        <li>
                        Echo technologist
                        </li>
                        <li>
                        X-ray technician
                        </li>
                        <li>
                        EEG & EKG technician
                        </li>
                        <li>
                        Radiation therapist
                        </li>
                        <li>
                        Nuclear med tech
                        </li>

                    </ul>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container style={{padding:"40px", backgroundColor:"#E5F3FB"}}>
                <Grid item xs={12} md={4}>
                    <h5>
                    Surgical services
                    </h5>
                </Grid>
                <Grid item xs={12} md={8}>
                <Grid className='nursing'>
                    <ul >
                      <li>
                      Certified surgical tech
                      </li>
                      <li>
                      Operating room technician
                      </li>
                      <li>
                      Anesthesia tech
                      </li>
                      <li>
                      Cardiovascular operating room technician
                      </li>
                      <li>
                      Surgical first assistant
                      </li>
                      <li>
                      Sterile processing tech
                      </li>
                    </ul>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container style={{padding:"40px", backgroundColor:"#F2F9FD"}}>
                <Grid item xs={12} md={4}>
                    <h5>
                    Behavioral health and social work
                    </h5>
                </Grid>
                <Grid item xs={12} md={8}>
                <Grid className='nursing'>
                    <ul >
                      <li>
                      Case manager
                      </li>
                      <li>
                      Clinician
                      </li>
                      <li>
                      Counselor 
                      </li>
                      <li>
                      Social worker
                      </li>
                      <li>
                      Mental health technician
                      </li>
                    </ul>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container style={{padding:"40px", backgroundColor:"#E5F3FB"}}>
                <Grid item xs={12} md={4}>
                    <h5>
                    Laboratory
                    </h5>
                </Grid>
                <Grid item xs={12} md={8}>
                <Grid className='nursing'>
                    <ul >
                      <li>
                      Medical laboratory scientist
                      </li>
                      <li>
                      Medical laboratory technician
                      </li>
                      <li>
                      Pathology assistant 
                      </li>
                      <li>
                      Lab assistant
                      </li>
                      <li>
                      Phlebotomist
                      </li>
                      <li>
                      Histotechnologist
                      </li>

                      <li>
                      Cytotechnologist
                      </li>
                      <li>
                      Medical technologist
                      </li>
                    </ul>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container style={{padding:"40px", backgroundColor:"#F2F9FD"}}>
                <Grid item xs={12} md={4}>
                    <h5>
                    Pharmacy
                    </h5>
                </Grid>
                <Grid item xs={12} md={8}>
                <Grid className='nursing'>
                    <ul >
                      <li>
                      Pharmacist
                      </li>
                      <li>
                      Pharmacy technician
                      </li>
                    </ul>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container style={{padding:"40px", backgroundColor:"#E5F3FB"}}>
                <Grid item xs={12} md={4}>
                    <h5>
                    Dental
                    </h5>
                </Grid>
                <Grid item xs={12} md={8}>
                <Grid className='nursing'>
                    <ul >
                      <li>
                      Dental assistant
                      </li>
                      <li>
                      Dental hygienist
                      </li>
                    </ul>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container style={{padding:"40px", backgroundColor:"#F2F9FD"}}>
                <Grid item xs={12} md={4}>
                    <h5>
                    Emergency services
                    </h5>
                </Grid>
                <Grid item xs={12} md={8}>
                <Grid className='nursing'>
                    <ul >
                      <li>
                      Paramedic
                      </li>
                      <li>
                      Emergency medical technician
                      </li>
                      <li>
                      Emergency room technician
                      </li>
                    </ul>
                    </Grid>
                </Grid>
            </Grid>

        </div>


        <div className=' container '>

            <Grid container className='' style={{padding:"40px" }}>
            <Grid item xs={12} >
                <h1 className=''>Expand your allied health career with IsentCare</h1>
            </Grid>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    Since 2012, IsentCare has worked with companies to provide youth care workers, case aides and case managers, clinicians, teachers and teachers’ aides, medical assistants, and nurses including RNs and LPNs or LVNs as medical and non-medical support at emergency shelters nationwide. We have employed thousands of personnel over the years who have provided support at medical shelters due to a gas explosion and at emergency shelters for unaccompanied minors.
                    </p>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    As one of the top allied health staffing agencies in the United States, IsentCare Healthcare Staffing is the ideal choice for allied health professionals. With access to the best facilities and top employers in the country, your dedicated recruiter will work with you to find the perfect job based on your experience, qualifications, and needs.
                    </p>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    IsentCare Healthcare Staffing has temp-to-perm, direct hire, local and travel assignment options available, allowing you flexibility when considering a job. With so many possibilities, you are sure to find the opportunity that works best for you.
                    </p>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    Don't wait – apply with us today to get one step closer to securing an amazing position with IsentCare healthcare staffing!
                    </p>
                </Grid>
                <Grid className='rounded d-flex justify-content-center' item xs={12} md={6} >
                    <div style={{width:'35rem'}}>
                    <img width={'100%'} src={require("../../assets/allied health care.jpg")}/>
                    </div>
                </Grid>
            </Grid>

            </Grid>
        </div>

        <div className='py-5' style={{backgroundColor:"#E6F3FA"}}>
            <div className='container p-5'>
            <h3 className='text-center'> 
            “Best travel healthcare company!!! Great staff and helpful recruiters!!”
            </h3>
            <h6 className='text-center'>
            - Katie H. -- Anesthesia Technologist
            </h6>
            </div>
        </div>

        <Grid className='container'  >
            <h1 className='py-3 fw-bold text-center'>
            Our streamlined application process will <br /> make your allied health career easy
            </h1>
            <p className='text-center'>
            If you are looking for an allied position, apply with IsentCare Healthcare Staffing today! We have streamlined the application process so all you have to do is complete these easy-to-follow steps. If you are interested in exploring a new allied health career, apply today! Your dream job with IsentCare starts here.
            </p>

        </Grid>

        <div className=' container    ' >

<Grid container className='' style={{padding:"40px" }}>

<div className='d-flex gap-3'>
<Card sx={{ maxWidth: 300 }} style={{ position: "relative" }}>
      <CardContent >
        <Typography  className='fw-bold' sx={{ fontSize: 16,color:"black" }}>
          Job Type
        </Typography>
        <div style={{position:"absolute",right:5,top:3}}>
        <Typography className='fw-bold' sx={{ fontSize: 72,color:"pink" }}>
         1
        </Typography>
        </div>
        
        <Typography sx={{ mt:2}} color="text.secondary">
        When applying to IsentCare Healthcare Staffing, the first step is to decide which type of job you are looking for. You can choose from a variety of positions such as registered nurses, respiratory therapists and many other clinical and non-clinical occupations.
        </Typography>
      </CardContent>
    </Card>
<Card sx={{ maxWidth: 300 }} style={{ position: "relative" }}>
      <CardContent >
        <Typography className='fw-bold' sx={{ fontSize: 16,color:"black" }}>
        Contact Information
        </Typography>
        <div style={{position:"absolute",right:5,top:3}}>
        <Typography className='fw-bold' sx={{ fontSize: 72,color:"pink" }}>
         2
        </Typography>
        </div>
        
        <Typography sx={{ mt:2}} color="text.secondary">
        The next step is to provide your contact information, such as your name, phone number and email address. This ensures that you receive all updates regarding job openings and other relevant news from IsentCare.
        </Typography>
      </CardContent>
    </Card>
<Card sx={{ maxWidth: 300 }} style={{ zIndex:1,position: "relative" }}>
      <CardContent >
        <Typography className='fw-bold' sx={{ fontSize: 16,color:"black" }}>
        Employment History
        </Typography>
        <div style={{position:"absolute",right:5,top:3}}>
        <Typography className='fw-bold' sx={{ fontSize: 72,color:"pink" }}>
         3
        </Typography>
        </div>
        
        <Typography sx={{ mt:2}} color="text.secondary">
        A key part of the application process is providing detailed employment history information. This includes all prior employers you have worked for in the past year or more and explains what duties were performed at each job site.
        </Typography>
      </CardContent>
    </Card>
    </div>
</Grid>
</div>


        <Grid className='container py-5'  >
            <p className='text-center'>
            We are always looking for quality talent to join our allied team and invite all allied health professionals to take advantage of our exclusive jobs and flexible schedules. Our current job listings are updated regularly, so no matter what expertise you bring to the table, there is a perfect fit for you. Search through our current list of openings and see if we can help you take your career to the next level!
            </p>
            <div className='d-flex justify-content-center'>
            <Button className=' px-5' variant='contain' style={{backgroundColor:"#FF6700",color:"white",borderRadius:"40px"}} onClick={()=>navigate("/jobs")}  title='Search Jobs'>SEARCH JOBS</Button>
            </div>


        </Grid>


        <div className='py-5' style={{backgroundColor:"#E6F3FA"}}>
            <div className='container p-5'>
            <h3 className='text-center'> 
            “I enjoyed working for IsentCare Healthcare Staffing. They were organized and professional in all aspects from hotel stay to hospital schedules. They were always available to answer any questions I might have and in a timely manner. They made sure my flight was on schedule and made arrangements daily for transportation to and from the hospital.”
            </h3>
            <h6 className='text-center'>
            - Respiratory Therapist (Former Employee)
            </h6>
            </div>
        </div>


 <div className=' container '>

<Grid container className='' style={{padding:"40px" }}>
<Grid item xs={12} >
    <h1 className=''>Earn extra money with IsentCare’s employee referral program</h1>
</Grid>
<Grid container>
    <Grid item xs={12} md={6}>
        <p className=' py-2' style={{textAlign:"left", }}>
        Do you know an allied health professional that is looking for a new job opportunity? Refer them to IsentCare! Our referral bonus program is open to employees and non-employees alike. For every referral you make to IsentCare, you have the chance to earn extra money as a reward for helping us find the best talent out there. Refer your friends, family, or colleagues in the healthcare community to IsentCare Healthcare Staffing today!
        </p>
        {/* <Button className=' px-5' variant='contain' style={{backgroundColor:"#FF6700",color:"white",borderRadius:"40px"}} title='Refer Someone'>REFER SOMEONE TODAY</Button> */}
    </Grid>
    <Grid className='rounded d-flex justify-content-center' item xs={12} md={6} >
        <div style={{width:'35rem'}}>
        <img width={'100%'} src={require("../../assets/referral program.jpg")}/>
        </div>
    </Grid>
</Grid>

</Grid>
</div>



    </div>
  )
}
