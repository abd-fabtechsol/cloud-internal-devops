import { Button, Grid } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default () => {
    const navigate=useNavigate()
  return (
    <div>
      <div className='mt-5 background_benefits'>
                <div className='h-100 d-flex justify-content-center align-items-center'>
                    <h1 className='fw-bold text-center'>
                   Fixed Term
                    </h1>

            </div>
         </div>

         <div className=' container '>
            <Grid container className='' style={{padding:"40px" }}>
            <Grid item xs={12} >
                <h1 className=''>Medical, dental, vision, and life insurance plans offered to IsentCare employees</h1>
            </Grid>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    We know how essential it is for you to have access to affordable health insurance, that is why IsentCare Healthcare Staffing offers eligible employees medical insurance plan options including dental and vision insurance plans. Temporary healthcare professionals on a local or travel assignment with IsentCare are eligible for health insurance benefits effective on the first day of your assignment. Branch and corporate employees are eligible for health insurance coverage on the first of the month upon hire.
                    </p>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    Our medical plan* options include a high deductible plan with a health savings account (HSA), a traditional preferred provider organization (PPO) plan, and an Affordable Care Act (ACA) minimum coverage plan. In addition to the medical plan options we offer, we also offer dental insurance and vision insurance plans. IsentCare also offers our eligible employees basic life insurance and travel insurance. Voluntary life insurance plans are available for eligible employees to purchase.
                    </p>
                </Grid>
                <Grid className='rounded d-flex justify-content-center' item xs={12} md={6} >
                    <div style={{width:'25rem'}}>
                    <img width={'100%'} src={require("../../assets/medical dental.jpg")}/>
                    </div>
                </Grid>
            </Grid>
            </Grid>
        </div>

        <div className=' container '>
            <Grid container className='' style={{padding:"40px" }}>
            <Grid item xs={12} >
                <h1 className=''>Paid time off and leave benefits offered to IsentCare employees</h1>
            </Grid>
            <Grid container>
            <Grid className='rounded d-flex justify-content-center' item xs={12} md={6} >
                    <div style={{width:'30rem'}}>
                    <img width={'100%'} src={require("../../assets/paid time off.jpg")}/>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    At IsentCare we understand how important it is for you to have work-life balance, and we are proud to offer our eligible employees paid time off including vacation time, sick and bereavement leave, paid holidays, disability and parental leave, and flexible work opportunities. We offer our eligible employees paid sick time that is awarded on the first day of each year.
                    </p>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    Eligible employees also earn paid vacation time which accrues and is awarded throughout the calendar year. Employees can roll over and bank up to a certain number of hours of paid vacation and sick time. Eligibility for paid time off including vacation time, sick leave, and paid holidays can vary by employment type with IsentCare and your location.
                    </p>
                </Grid>
                
            </Grid>

            <Grid container className='py-4'>
                <Grid item xs={12} md={6}>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    Eligible employees at IsentCare also qualify for short-term and long-term disability as well as pregnancy disability leave and paid parental leave benefits. Our paid pregnancy disability leave policy provides coverage for when a birthing parent is disabled or unable to work because of pregnancy, childbirth, or a related medical condition, and our paid parental leave policy allows for both non-birthing and birthing parents to take paid parental leave.
                    </p>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    At IsentCare we strive to accommodate the individual needs of our corporate and branch employees and offer qualifying employees flexible work schedules and work from home opportunities. However, each department is different and will have its own unique needs and expectations.
                    </p>
                </Grid>

                <Grid className='rounded d-flex justify-content-center' item xs={12} md={6} >
                    <div style={{width:'30rem'}}>
                    <img width={'100%'} src={require("../../assets/fav-2.jpg")}/>
                    </div>
                </Grid>
                
            </Grid>



            </Grid>
        </div>


        <div className=' container '>
            <Grid container className='' style={{padding:"40px" }}>
            <Grid item xs={12} >
                <h1 className=''>401k and Roth retirement plans with IsentCare employer match</h1>
            </Grid>
            <Grid container>

            <Grid className='rounded d-flex justify-content-center' item xs={12} md={6} >
                    <div style={{width:'25rem'}}>
                    <img width={'100%'} src={require("../../assets/401k employ.jpg")}/>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    We know your future and what you invest in your retirement is important to you, that’s why at IsentCare we offer our eligible employees a six percent match of their retirement plan contributions. With pre-tax 401k and post-tax Roth retirement plan options, you can choose how you save and invest in your future. Branch and corporate employees are eligible to participate in IsentCare’s retirement plan on the first month upon being hired, and temporary healthcare professionals employed by IsentCare are eligible to participate after working a full 12 months and working 1,000 hours in that time period, or after working 1,000 hours in any subsequent calendar year.
                    </p>
                </Grid>
                
            </Grid>
            </Grid>
        </div>

        <div className='py-5' style={{backgroundColor:"#E6F3FA"}}>
            <div className='container p-5'>
            <h3 className='text-center'> 
            Are you interested in job opportunities with IsentCare Healthcare Staffing?
            </h3>
            <p className='text-center'>
            You can view all of our healthcare jobs here and our corporate and branch careers here:
            </p>
            </div>
            <div className='d-flex justify-content-center gap-2 flex-column flex-md-row'>
            {/* <Button className=' px-4' variant='contain' style={{backgroundColor:"#FF6700",color:"white",borderRadius:"40px"}} title='Healthcare Jobs'>HEALTHCARE JOBS</Button> */}
            <Button className=' px-4' variant='contain' style={{backgroundColor:"#2994D8",color:"white",borderRadius:"40px"}} onClick={()=>navigate("/jobs")}  title='Corporate jobs'>CORPORATE JOBS</Button>
            </div>
        </div>


        <div className=' container '>
            <Grid container className='' style={{padding:"40px" }}>
            <Grid item xs={12} >
                <h1 className='text-center'>Advantages of working with <br /> IsentCare Healthcare Staffing</h1>
            </Grid>
            <Grid container>

            <Grid className='rounded d-flex justify-content-center' item xs={12} md={6} >
                    <div style={{width:'25rem'}}>
                    <img width={'100%'} src={require("../../assets/mobile.png")}/>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <h4>
                    Manage your schedule on the go with IsentCare’s mobile app
                    </h4>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    With IsentCare’s mobile app you can search for new job opportunities, receive notifications on saved job searches, add your availability and instantly book shifts, and submit your timecard electronically. Download the IsentCare mobile app from the Apple App Store or the Google Play Store today.
                    </p>
                        {/* <div className='d-flex justify-content-start gap-2 flex-column flex-md-row'>
                        <Button className=' px-4' variant='contain' style={{backgroundColor:"#FF6700",color:"white",borderRadius:"40px"}} title='AppStore'>APPLE APP STORE</Button>
                        <Button className=' px-4' variant='contain' style={{backgroundColor:"#2994D8",color:"white",borderRadius:"40px"}} title='Play Store'>GOOGLE PLAY STORE</Button>
                        </div> */}
                </Grid>
                
            </Grid>
            </Grid>
        </div>

        <div className=' container '>
            <Grid container className='' style={{padding:"40px" }}>
            <Grid item xs={12} >
                <h1 className=''>24/7 customer service support for when you need it most</h1>
            </Grid>
            <Grid container>

            <Grid item xs={12} md={6}>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    We know your future and what you invest in your retirement is important to you, that’s why at IsentCare we offer our eligible employees a six percent match of their retirement plan contributions. With pre-tax 401k and post-tax Roth retirement plan options, you can choose how you save and invest in your future. Branch and corporate employees are eligible to participate in IsentCare’s retirement plan on the first month upon being hired, and temporary healthcare professionals employed by IsentCare are eligible to participate after working a full 12 months and working 1,000 hours in that time period, or after working 1,000 hours in any subsequent calendar year.
                    </p>
                </Grid>
            <Grid className='rounded d-flex justify-content-center' item xs={12} md={6} >
                    <div style={{width:'25rem'}}>
                    <img width={'100%'} src={require("../../assets/customer-services.jpg")}/>
                    </div>
                </Grid>
                
            </Grid>
            </Grid>
        </div>


        <div className=' container '>
            <Grid container className='' style={{padding:"40px" }}>
            <Grid item xs={12} >
               
            </Grid>
            <Grid container>
            <Grid className='rounded d-flex justify-content-center' item xs={12} md={6} >
                    <div style={{width:'25rem'}}>
                    <img width={'100%'} src={require("../../assets/bonus.jpg")}/>
                    </div>
                </Grid>

            <Grid item xs={12} md={6}>
            <h1 className=''>Earn extra money with IsentCare’s referral bonus programs</h1>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    We know your future and what you invest in your retirement is important to you, that’s why at IsentCare we offer our eligible employees a six percent match of their retirement plan contributions. With pre-tax 401k and post-tax Roth retirement plan options, you can choose how you save and invest in your future. Branch and corporate employees are eligible to participate in IsentCare’s retirement plan on the first month upon being hired, and temporary healthcare professionals employed by IsentCare are eligible to participate after working a full 12 months and working 1,000 hours in that time period, or after working 1,000 hours in any subsequent calendar year.
                    </p>
                </Grid>
            
                
            </Grid>
            </Grid>
        </div>

        <div className='pt-5' style={{backgroundColor:"#E6F3FA"}}>
            <div className='container p-5'>
                <h3 className='text-center'> 
                * Cigna's Approach: legal notices and information - machine readable files
                </h3>
            </div>
        </div>


    </div>
  )
}
