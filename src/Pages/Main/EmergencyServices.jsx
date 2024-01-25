import { Button, Grid } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default () => {
    const navigate=useNavigate()
  return (
    <div>
                <div className='background_emergency'>
                <div className='h-100 d-flex justify-content-center align-items-center'>
                    <h1 className='fw-bold text-center'>
                    Emergency Management & <br /> Disaster Response
                    </h1>

                </div>
                </div>

            <div className=' container '>

            <Grid container className='' style={{padding:"40px" }}>
            <Grid item xs={12} >
                <h1 className=''>We are a staffing agency experienced in emergency management and disaster response</h1>
            </Grid>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    IsentCare Healthcare Staffing has been a trusted staffing partner in the healthcare industry since 1981 and has years of experience working with government and local state entities coordinating disaster and emergency responses. We have provided rapid response deployments of nursing, allied health, and non-clinical personnel for disaster relief, emergency shelters, COVID crisis response needs, and nationwide staffing shortages.
                    </p>
                </Grid>
                <Grid className='rounded d-flex justify-content-center' item xs={12} md={6} >
                    <div style={{width:'30rem'}}>
                    <img width={'100%'} src={require("../../assets/management disaster.jpg")}/>
                    </div>
                </Grid>
                <p className=' py-2' style={{textAlign:"left", }}>
                As a company with a people-centric mentality and a core value focused on always putting others before self, we are dedicated to serving and supporting our communities through any crisis. Our recruitment team understands that rapid deployment at the local, regional, and national level is critical in crisis situations.  With an extensive database of clinical and non-clinical personnel, we can coordinate immediate deployments of nurses and non-medical professionals across the country. 
                </p>
            </Grid>

            </Grid>
        </div> 

        <div className=' container '>

            <Grid container className='' style={{padding:"40px" }}>
            <Grid container>
            <Grid className='rounded d-flex justify-content-center' item xs={12} md={6} >
                    <div style={{width:'30rem'}}>
                    <img width={'100%'} src={require("../../assets/black woman.jpg")}/>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    With a strong local presence of over 25 branch offices and a National Service Center that operates 24/7, IsentCare provides unmatched speed and service. By providing on-site logistics coordinators, we coordinate everything from requisitions and screening to credential management, scheduling, and more. Our senior leadership team has extensive experience with large project staffing and oversees operations to ensure service level commitments and the needs of our on-site personnel are being met.
                    </p>
                </Grid>
            </Grid>

            </Grid>
        </div> 

        <div className=' container '>

            <Grid container className='' style={{padding:"40px" }}>
            <Grid item xs={12} >
                <h1 className=''>Proven performance deploying personnel for frontline crisis and emergency response</h1>
            </Grid>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    Nursing and allied health professionals innately have a passion for helping people, and over the years have risen to the occasion as frontline workers and emergency responders. IsentCare Healthcare Staffing employs clinical and non-clinical personnel for emergency response assignments nationwide. If you are a healthcare professional interested in working with IsentCare, you can apply directly here, and if you are a healthcare facility or emergency management company and would like more information on our services, you can fill out our client services form here.
                    </p>
                </Grid>
                <Grid className='rounded d-flex justify-content-center' item xs={12} md={6} >
                    <div style={{width:'30rem'}}>
                    <img width={'100%'} src={require("../../assets/perfomace.jpg")}/>
                    </div>
                </Grid>
            </Grid>

            </Grid>
        </div> 

        <div className=' container '>

            <Grid container className='' style={{padding:"40px" }}>
            <Grid container>
                <Grid className='rounded d-flex justify-content-center' item xs={12} md={6} >
                    <div>
                    <img style={{width:'20rem', height:'25rem '}}  src={require("../../assets/natural disater relif.jpg")}/>
                    </div>
                </Grid>
            {/* <Grid item xs={12} >
            </Grid> */}
                <Grid item xs={12} md={6}>
                <h1 className=''>Natural disaster relief</h1>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    Beginning in 2011 with a tornado that touched down in Joplin, MO, to hurricane Ian that ravaged Florida’s west coast in 2022, IsentCare Healthcare Staffing has provided frontline staffing support to communities suffering from natural disasters. We have deployed registered nurses and other medical support staff in response to floods, hurricanes, and tornadoes across the country.
                    </p>
                    <div className='nursing'>
                    <ul >
                      <li>
                      2011 tornado in Joplin, MO
                      </li>
                      <li>
                      2012 hurricane Sandy
                      </li>
                      <li>
                      2013 flood in Boulder, CO
                      </li>
                      <li>
                      2016 hurricane Harvey
                      </li>
                      <li>
                      2017 hurricane Irma
                      </li>
                      <li>
                      2018 hurricane Michael
                      </li>
                      <li>
                      2019 hurricane Barry
                      </li>
                      <li>
                      2022 hurricane Ian
                      </li>
                    </ul>
                    </div>
                   
                </Grid>
            </Grid>

            </Grid>
        </div>

        <div className=' container '>

            <Grid container className='' style={{padding:"40px" }}>
            <Grid item xs={12} >
                <h1 className=''>Emergency shelters</h1>
            </Grid>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    Since 2012, IsentCare has worked with companies to provide youth care workers, case aides and case managers, clinicians, teachers and teachers’ aides, medical assistants, and nurses including RNs and LPNs or LVNs as medical and non-medical support at emergency shelters nationwide. We have employed thousands of personnel over the years who have provided support at medical shelters due to a gas explosion and at emergency shelters for unaccompanied minors.
                    </p>
                </Grid>
                <Grid className='rounded d-flex justify-content-center' item xs={12} md={6} >
                    <div style={{width:'30rem'}}>
                    <img width={'100%'} src={require("../../assets/shelters.jpg")}/>
                    </div>
                </Grid>
            </Grid>

            </Grid>
        </div> 

        <div className=' container '>

            <Grid container className='' style={{padding:"40px" }}>
           
            <Grid container>

            <Grid className='rounded d-flex justify-content-center' item xs={12} md={6} >
                    <div style={{width:'20rem'}}>
                    <img width={'100%'} src={require("../../assets/covid-19.jpg")}/>
                    </div>
            </Grid>
                <Grid item xs={12} md={6}>
                <h1 className=''>COVID-19 emergency response </h1>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    From the onset of the COVID-19 pandemic in 2020, IsentCare Healthcare Staffing has partnered with state emergency management agencies and divisions, departments of public health, and departments of human services to provide medical and non-clinical staff for emergency response staff. We have deployed personnel for contact tracing, COVID-19 testing sites, infection control and stabilization, vaccine administration, and surge staffing due to staffing shortages.
                    </p>
                    <div className='nursing'>
                    <ul >
                      <li>
                      Florida Division of Emergency Management in 2020
                      </li>
                      <li>
                      Iowa Homeland Security and Emergency Management 2020-2021
                      </li>
                      <li>
                      Department of Human Services and Oregon Health Authority in 2021
                      </li>
                      <li>
                      California Department of Public Health in 2021
                      </li>
                      <li>
                      Illinois Emergency Management Agency 2020-2023
                      </li>
                    </ul>
                    </div>
                </Grid>
               
            </Grid>

            </Grid>
        </div>

        <div className='py-5' style={{backgroundColor:"#E6F3FA"}}>
            <div className='container'>
            <h3 className='text-center'> 
            “IsentCare Healthcare is an amazing company to work for!! They care for their employees and everyone there is treated like family. If you love adventure then IsentCare is the best company to work for!” 
            </h3>
            <h6 className='text-center'>
            - Covid-19 Field Outreach Specialist (Former Employee)
            </h6>
            </div>
        </div>


        <div className=' container '>

            <Grid container className='' style={{padding:"40px" }}>
            <Grid item xs={12} >
                <h1 className=''>Employment options designed with you in mind</h1>
            </Grid>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    For over 40 years IsentCare Healthcare Staffing has provided career opportunities for nurses, allied health professionals, and non-clinical personnel at top facilities across the United States. Whether you are a nurse interested in exploring travel assignments or in need of the flexibility that per diem work provides, or you are an allied health professional looking for your next career move, we can help you find your dream job. From direct hire and temp to perm, to local or travel assignments, we have a job that fits your needs! Check out our current job openings near you or apply directly today!          
                    </p>
                    <Button className='py-0 px-3' variant='contain' style={{backgroundColor:"#FF6700",color:"white",borderRadius:"40px"}} onClick={()=>navigate("/jobs")}  title='Find Jobs'>FIND JOBS</Button>
                </Grid>
                <Grid className='rounded d-flex justify-content-center' item xs={12} md={6} >
                    <div style={{width:'30rem'}}>
                    <img width={'100%'} src={require("../../assets/option design.jpg")}/>
                    </div>
                </Grid>
            </Grid>

            </Grid>
        </div> 

<div className=' container '>

<Grid container className='' style={{padding:"40px" }}>
<Grid item xs={12} >
    <h1 className=''>Refer your friends to IsentCare and benefit from our referral programs.</h1>
</Grid>
<Grid container>
    <Grid className='rounded d-flex justify-content-center' item xs={12} md={6} >
        <div style={{width:'30rem'}}>
        <img width={'100%'} src={require("../../assets/benifits.jpg")}/>
        </div>
    </Grid>
    <Grid item xs={12} md={6}>
        <p className=' py-2' style={{textAlign:"left", }}>
        Do you know a nurse or allied health professional looking for a new career opportunity? Refer them to IsentCare and earn extra money with our referral bonus program! We offer employee and non-employee referrals and as a reward for referring top talent to IsentCare, you have the chance to earn extra money once your referral begins working with us. Refer your friends, family, or colleagues in the healthcare community to IsentCare Healthcare Staffing today!
        </p>
        {/* <Button className='py-0 px-3' variant='contain' style={{backgroundColor:"#FF6700",color:"white",borderRadius:"40px"}} title='Refer someone'>REFER SOMEONE TODAY</Button> */}
    </Grid>
</Grid>

</Grid>
</div> 

<div className=' container '>

<Grid container className='' style={{padding:"40px" }}>
<Grid item xs={12} >
    <h1 className=''>Client Services</h1>
</Grid>
<Grid container>
    <Grid className='rounded d-flex justify-content-center' item xs={12} md={6} >
        <div style={{width:'30rem'}}>
        <img width={'100%'} src={require("../../assets/client services.jpg")}/>
        </div>
    </Grid>
    <Grid item xs={12} md={6}>
        <p className=' py-2' style={{textAlign:"left", }}>
        Do you know a nurse or allied health professional looking for a new career opportunity? Refer them to IsentCare and earn extra money with our referral bonus program! We offer employee and non-employee referrals and as a reward for referring top talent to IsentCare, you have the chance to earn extra money once your referral begins working with us. Refer your friends, family, or colleagues in the healthcare community to IsentCare Healthcare Staffing today!
        </p>
        <Button className='py-0 px-3' variant='contain' style={{backgroundColor:"#FF6700",color:"white",borderRadius:"40px"}} onClick={()=>navigate("/contact-us")}  title='Contact us'>CONTACT US </Button>
    </Grid>
</Grid>

</Grid>
</div> 

<div className='py-5' style={{backgroundColor:"#E6F3FA"}}>
            <div className='container'>
            <h3 className='text-center'> 
            "It is always a pleasure working with IsentCare Healthcare Staffing and their management team.  They made staffing healthcare workers during a pandemic more manageable. Thank you for all of your help with our staffing needs!"
            </h3>
            <h6 className='text-center'>
            - Denise S. – Nurse Manager (hospital)
            </h6>
            </div>
        </div>

    </div>
  )
}
