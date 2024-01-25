import { Button, Grid } from '@mui/material'
import React from 'react'
import backimg from "../../assets/DirectHire/direct-hire.jpg"
import { useNavigate } from 'react-router-dom'

export default () => {
    const navigate=useNavigate()
  return (
    <div>
            <div className=''>
                <div className='background_per_deim'>
                <div className='h-100 d-flex justify-content-center align-items-center'>
                    <h1 className='fw-bold'>
                    Per Diem Nursing
                    </h1>

                </div>
                </div>
            </div>
            <div className=' container '>

            <Grid container className='' style={{padding:"40px" }}>
            <Grid item xs={12} >
                <h1 className=''>What is per diem nursing?</h1>
            </Grid>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    Per diem (PRN) work allows nurses to pick up shifts on an as-needed basis, sometimes across multiple healthcare facilities, without committing to full-time employment. Per diem work offers high pay, flexibility, and the ability to choose where you work. Working per diem with IsentCare Healthcare Staffing offers a range of benefits for nurses. IsentCare is the ideal choice for nurses who want extra hours or occasional shifts, without committing to a full-time staff nursing position. 
                    </p>
                  <Button variant='contain' style={{backgroundColor:"#FF6700",color:"white",borderRadius:"40px"}} onClick={()=>navigate("/blogs")} title='Read Blog Post'>READ BLOG POST</Button>
                </Grid>
                <Grid className='rounded d-flex justify-content-center' item xs={12} md={6} >
                    <div style={{width:'20rem'}}>
                    <img width={'100%'} src={require("../../assets/nursing.jpg")}/>
                    </div>
                </Grid>
            </Grid>

            </Grid>
        </div> 

        <div className=' container '>
            <Grid container className='' style={{padding:"40px" }}>
            <Grid item xs={12} >
                <h1 className=''>Earn high pay with per diem shifts</h1>
            </Grid>
            <Grid container>

             <Grid className='rounded d-flex justify-content-center' item xs={12} md={6} >
                    <div style={{width:'50rem'}}>
                    <img width={'100%'} src={require("../../assets/knee.jpg")}/>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <p className='px-3 py-2'>
                    Per diem nursing is an attractive work option, as it offers the opportunity to earn higher pay than many part-time or full-time staff nursing jobs can offer. Per diem nursing is mutually beneficial for both the nurse and the healthcare facility because the nurse can pick up per diem shifts at higher pay rates and the facility benefits by being able to provide adequate patient coverage.
                    </p>
                    <p className='px-3 py-2'>
                    When working per diem with IsentCare, you gain access to top healthcare facilities close to you, increasing your opportunities and elevating your experience as an employed per diem nurse. Per diem nursing offers competitive pay rates without having to sacrifice flexibility, so if you’re looking to make more career connections while maintaining the lifestyle you want, per diem work with IsentCare is the ideal way forward.
                    </p>
                </Grid>
               
            </Grid>

            </Grid>
        </div> 

       

        <div className=' container '>
            <Grid container className='' style={{padding:"40px" }}>
            <Grid item xs={12} >
                <h1 className=''>Achieve flexibility with your <br /> work schedule</h1>
            </Grid>
            <Grid container>

             
                <Grid item xs={12} md={6}>
                    <p className='px-3 py-2'>
                    Per diem nursing is an attractive work option, as it offers the opportunity to earn higher pay than many part-time or full-time staff nursing jobs can offer. Per diem nursing is mutually beneficial for both the nurse and the healthcare facility because the nurse can pick up per diem shifts at higher pay rates and the facility benefits by being able to provide adequate patient coverage.
                    </p>
                    <p className='px-3 py-2'>
                    When working per diem with IsentCare, you gain access to top healthcare facilities close to you, increasing your opportunities and elevating your experience as an employed per diem nurse. Per diem nursing offers competitive pay rates without having to sacrifice flexibility, so if you’re looking to make more career connections while maintaining the lifestyle you want, per diem work with IsentCare is the ideal way forward.
                    </p>
                </Grid>

                <Grid className='rounded d-flex justify-content-center' item xs={12} md={6} >
                    <div style={{width:'20rem'}}>
                    <img width={'100%'} src={require("../../assets/facilities.jpg")}/>
                    </div>
                </Grid>
               
            </Grid>

            </Grid>
        </div> 

        <div className=' container '>
            <Grid container className='' style={{padding:"40px" }}>
            <Grid item xs={12} >
                <h1 className=''>Choose what facilities you work at <br /> and when</h1>
            </Grid>
            <Grid container>

             
                <Grid item xs={12} md={6}>
                    <p className='px-3 py-2'>
                    Per diem nursing is an attractive work option, as it offers the opportunity to earn higher pay than many part-time or full-time staff nursing jobs can offer. Per diem nursing is mutually beneficial for both the nurse and the healthcare facility because the nurse can pick up per diem shifts at higher pay rates and the facility benefits by being able to provide adequate patient coverage.
                    </p>
                    <p className='px-3 py-2'>
                    When working per diem with IsentCare, you gain access to top healthcare facilities close to you, increasing your opportunities and elevating your experience as an employed per diem nurse. Per diem nursing offers competitive pay rates without having to sacrifice flexibility, so if you’re looking to make more career connections while maintaining the lifestyle you want, per diem work with IsentCare is the ideal way forward.
                    </p>
                </Grid>

                <Grid className='rounded d-flex justify-content-center' item xs={12} md={6} >
                    <div style={{width:'20rem'}}>
                    <img width={'100%'} src={require("../../assets/workschedule.jpg")}/>
                    </div>
                </Grid>
               
            </Grid>

            </Grid>
        </div> 

        <div style={{backgroundColor:"#E6F3FA"}}>
        <div className=' container ' >
            <Grid container className='' style={{padding:"40px" }}>
            <Grid item xs={12} >
                <h1 className=''>Start your per diem <br /> nursing career with <br /> IsentCare today</h1>
            </Grid>
            <Grid container>

                <Grid item xs={12} md={6}>
                    <p className='px-3 py-2'>
                    Looking to apply to nursing jobs and gain the flexibility and freedom to work per diem? IsentCare is the perfect place to start. Our easy application process takes minutes and eliminates the hours spent hunting for job postings. With guidance from our experienced recruiters, we can help you find the best per diem nursing opportunities for your individual career goals. Get started today and explore what the world of per diem nursing has in store for you!
                    </p>
                    <Button className='py-0 px-3' variant='contain' style={{backgroundColor:"#FF6700",color:"white",borderRadius:"40px"}} onClick={()=>navigate("/apply")} title='Apply now'>APPLY NOW</Button>
                </Grid>

                <Grid className='rounded d-flex justify-content-center' item xs={12} md={6} >
                    <div style={{width:'30rem'}}>
                    <img width={'100%'} src={require("../../assets/fav.jpg")}/>
                    </div>
                </Grid>
               
            </Grid>

            </Grid>
                
        </div> 
        </div>


        <div className='py-5'>
            <div className='container'>
            <h3 className='text-center'> 
            “This is a very good nursing staffing agency, offering a variety of open shifts in various facilities. You just use the app and pick up the shifts you want.”
            </h3>
            <h6 className='text-center'>
            - Staff Nurse (Former Employee)
            </h6>
            </div>
        </div>


        <div style={{backgroundColor:"#E6F3FA"}}>
        <div className=' container ' >
            <Grid container className='' style={{padding:"40px" }}>
            
            <Grid container>

                <Grid className='rounded d-flex justify-content-center' item xs={12} md={6} >
                    <div style={{width:'30rem'}}>
                    <img width={'100%'} src={require("../../assets/mobile.png")}/>
                    </div>
                </Grid>

                <Grid item xs={12} md={6}>
                <Grid item xs={12} >
                <h1 className=''>Start your per diem <br /> nursing career with <br /> IsentCare today</h1>
                 </Grid>
                    <p className='px-3 py-2'>
                    Looking to apply to nursing jobs and gain the flexibility and freedom to work per diem? IsentCare is the perfect place to start. Our easy application process takes minutes and eliminates the hours spent hunting for job postings. With guidance from our experienced recruiters, we can help you find the best per diem nursing opportunities for your individual career goals. Get started today and explore what the world of per diem nursing has in store for you!
                    </p>
                    {/* <div className='d-flex gap-2 flex-column-flex-md-row'>
                    <Button className='py-0 px-3' variant='contain' style={{backgroundColor:"#FF6700",color:"white",borderRadius:"40px"}} title='App Store'>APPLE APP STORE</Button>
                    <Button className='py-0 px-3' variant='contain' style={{backgroundColor:"#0086D7",color:"white",borderRadius:"40px"}} title='Play Store'>GOOGLE PLAY STORE</Button>
                    </div> */}
                </Grid>

                
               
            </Grid>

            </Grid>
                
        </div> 
        </div>

        <div className=' container ' >
            <Grid container className='' style={{padding:"40px" }}>
            
            <Grid className=' d-flex justify-content-center' container>
                <h1 className='text-center'>
                Local presence and 24/7 customer and <br /> client support
                </h1>
            </Grid>
            <Grid container className=' d-flex justify-content-center'>
                <h4 className='text-justify'>
                Our branch locations make it easier to find a job near you
                </h4>
            </Grid>
            <Grid container className=' d-flex justify-content-center'>
                <p className='text-justify'>
                Looking for local per diem opportunities? IsentCare Healthcare Staffing has over 25 branch offices located across the United States, making it easy to find the best PRN nursing jobs near you. No matter where you are, we can help you advance your nursing career. Check out our interactive map to see which branch location is closest to you. Our experienced team of staffing professionals is ready to guide you through our application and onboarding process and will be with you every step of the way!
                </p>
            </Grid>

            <Grid className=' d-flex justify-content-center' container>
                <h1 className='text-center'>
                24/7 support from your IsentCare staffing company
                </h1>
            </Grid>
            <Grid container className=' d-flex justify-content-center'>
                <p className='text-justify'>
                IsentCare Healthcare Staffing's National Service Center makes life easier for per diem nurses by helping employees at any time of day. We understand that per diem nursing sometimes requires support after normal business hours; to ensure the best customer service experience, we make ourselves available at all hours of the day and night – 365 days a year.
                </p>
            </Grid>

            </Grid>
                    <div className='d-flex justify-content-center'>
                    <Button className='py-0 px-3' variant='contain' style={{backgroundColor:"#ff6700",color:"white",borderRadius:"40px"}} onClick={()=>navigate("/contact-us")} title='Contact Us'>CONTACT US</Button>
                    </div>
                
        </div> 


    </div>
  )
}
