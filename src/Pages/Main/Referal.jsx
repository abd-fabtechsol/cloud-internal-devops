import { Button, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import img from "../../assets/referal.jpg"

const Referal = () => {
    const bonus=[
        {
        bonus:"Earn up to $2,400 per referral for:",
        value:"Neonatal intensive care unit (NICU), labor & delivery, and operating room registered nurses, nurse practitioners, physician assistants",
        color:"#E5F3FB"
    },
        {
        bonus:"Earn up to $1,500 per referral for:",
        value:"All other specialty registered nurses",
        color:"#F2F9FD"
    },
        {
        bonus:"Earn up to $250  per referral for:",
        value:"Licensed practical nurses (LPN), Licensed vocational nurses (LVN)",
        color:"#E5F3FB"
    },
        {
        bonus:"Earn up to $100  per referral for:",
        value:"Certified nursing assistants (CNAs), mental health techs, home health aides",
        color:"#F2F9FD"
    },
]

const nurse_bonous=[
    { bonus:"Earn up to $1,500  per referral for:",
    value:"udiologist, Cardiovascular rad tech, Certified respiratory therapist, CT technologist, Cath lab technologist, CVOR technician, Certified occupational therapist asst., Cytotechnologist, Registered dental hygienist, Echo technologist, Histotechnologist, Interventional rad tech, Mammographer, MRI technologist, Medical technologist, Nuclear medicine technologist, Occupational therapist, Registered dietitian, Pharmacist, Polysomnographer, Physical therapist, Physical therapy assistant, Radiology technician, Radiation therapist, Registered respiratory therapist, Social worker, Speech therapist, Ultrasound technician, Vascular technologist",
    color:"#E5F3FB"},
    {
        bonus:"$750 referral bonus for:",
        value:"Certified surgical technician",
        color:"#F2F9FD"
    },
    {
        bonus:"$500  referral bonus for:",
        value:"OR technician, Sterile processing technician",
        color:"#E5F3FB"
    },
    {
        bonus:"$250   referral bonus for:",
        value:"Anesthesia technician, Dental assistant, Dialysis technician, EEG technician Emergency medical technician, Medical lab technician, Pharmacy technician, Project coordinator, Sleep lab technician, X-ray technician",
        color:"#F2F9FD"
    },
    {
        bonus:"$100  referral bonus for:",
        value:"Admin. asst./secretary, Cook, Customer service representative, Dietary aide EKG technician, Environmental services, Medical coder, Medical collector, Medical receptionist, Medical transcriptionist, Monitor technician, Nutritional services, Orthopedic technician, Phlebotomist, Unit clerk",
        color:"#E5F3FB"
    },
]
const medicalAreas=[
    "Cardiology",
    "Dermatology",
    "Endocrinology",
    "Gastroenterology",
    "Hematology",
    "Nephrology",
    "Neurology",
    "Obstetrics and Gynecology",
    "Oncology",
    "Ophthalmology",
    "Orthopedics",
    "Otolaryngology (ENT)",
    "Pediatrics",
    "Psychiatry",
    "Pulmonology",
    "Radiology",
    "Rheumatology",
    "Urology",
    "Anesthesiology",
    "Emergency Medicine",
    "Family Medicine",
    "Internal Medicine",
    "Physical Medicine and Rehabilitation",
    "General Surgery",
    "Plastic Surgery"
  ]
  return (
  <>
  <div>
      <div className='mt-5 background_benefits'>
                <div className='h-100 d-flex justify-content-center align-items-center'>
                    <h1 className='fw-bold text-center'>
                    IsentCare Healthcare <br /> Staffing Employee <br /> Benefits
                    </h1>

            </div>
         </div>

         <div className=' container '>
            <Grid container className='' style={{padding:"40px" }}>
            <Grid item xs={12} >
                <h1 className=''>Earn Extra Money with Our Employee Referral Bonus Programs</h1>
            </Grid>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    At IsentCare, we understand the value referral programs offer our hardworking employees and we designed our referral bonus program with that in mind. Through our referral program, bonuses can be earned when referring friends to become part of the IsentCare team. Not only are referral bonuses advantageous for the referral, but they also provide the referrer with the ability to earn extra money while bringing valuable talent to the organization.
                    </p>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    Our employee referral program is quick and easy to take advantage of – simply complete the form below or ensure your referral includes your name in their online application and you’re set! Once your referral starts working with IsentCare, you will automatically receive reward payouts for every 50 hours your referral works, up to a maximum rate for the class and specialty type. As a referrer, you can earn top-dollar rewards, so don't miss out on this fantastic chance to make extra money and bring great talent to IsentCare!
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
                <h1 className=''>How to qualify for IsentCare’s employee referral program</h1>
            </Grid>
            <Grid container>
            <Grid className='rounded d-flex justify-content-center' item xs={12} md={6} >
                    <div style={{width:'30rem'}}>
                    <img width={'100%'} src={require("../../assets/paid time off.jpg")}/>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} className='px-3'>
                    <p className=' ' style={{textAlign:"left", }}>
                    IsentCare Healthcare Staffing is proud to offer our employees a referral program that rewards you for bringing qualified talent to IsentCare. To be eligible for our employee referral program, as a referrer, you must be in active working status with IsentCare at the time of the referral, and the referred healthcare professional must provide your name as their referral source upon applying with IsentCare. Qualified referrals cannot have previously worked for IsentCare.
                    </p>
                    <p className='' style={{textAlign:"left", }}>
                    Referral bonuses will be paid to the referrer in installments based on the hours of billable service provided from the referral. A bonus payout installment will be paid for every 50 hours of billable service provided, up to 250 hours, not including cancel pay, on-call, and orientation. All 250 hours must be completed within 180 days (6 months) of the referred employee’s hire date for all installments to be issued.
                    </p>
                    <p style={{fontsize:"8px"}}>Employees referred for state projects or assignments do not qualify for the referral bonus program.</p>
               <Button variant='contained' style={{backgroundColor:"#ff6700",borderRadius:"20px"}} title='Refer now'>REFER NOW</Button>
                </Grid>
                
            </Grid>

            </Grid>
        </div>

        <div className=' container '>
            <Grid container className='' style={{padding:"40px" }}>
            <Grid item xs={12} >
                <h1 className=''>Nurse referral bonus program</h1>
            </Grid>
            <Grid container>
                {bonus.map((bonus)=>
                <Grid className='p-4'  item xs={12} style={{backgroundColor:`${bonus.color}`}} >
                   <Grid container>
                    <Grid className=''  item xs={12} md={4}>
                        <h5>{bonus.bonus}</h5>
                    </Grid>
                    <Grid item xs={12} md={8}>{bonus.value}
                    </Grid>
                </Grid>
                </Grid>
                )}
            </Grid>
            </Grid>
        </div>


        <div className=' container '>
            <Grid container className='' style={{padding:"40px" }}>
            <Grid item xs={12} >
                <h1 className=''>Allied health professional referral bonus</h1>
            </Grid>
            <Grid container >
                {nurse_bonous.map((bonus)=>
                <Grid className='p-4' item xs={12} style={{backgroundColor:`${bonus.color}`}} >
                   <Grid container>
                    <Grid className=''  item xs={12} md={4}>
                        <h5>{bonus.bonus}</h5>
                    </Grid>
                    <Grid item xs={12} md={8}>{bonus.value}
                    </Grid>
                </Grid>
                </Grid>
                )}
            </Grid>
            </Grid>
        </div>

        <div className=' container '>
            <Grid container className='' style={{padding:"40px" }}>
            <Grid item xs={12} >
                <h1 className=''>IsentCare’s non-employee referral program</h1>
            </Grid>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    IsentCare Healthcare Staffing is excited to offer a referral program that rewards anyone for referring healthcare professionals. If you are not currently employed by IsentCare but know a healthcare professional looking for a job, this program is for you!
                    </p>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    Our non-employee referral bonuses range from $50 for first-time per diem referrals, $200 for first-time contract referrals, and $250 for permanent placement referrals. Once your referral starts working with IsentCare, we will issue your referral bonus payment. If you know a healthcare professional that would be interested in working with IsentCare, simply complete the form below or ensure your referral includes your name in their online application.
                    </p>
                    <Button variant='contained' style={{backgroundColor:"#ff6700",borderRadius:"20px"}} title='Refer now'>REFER NOW</Button>
                </Grid>
                <Grid className='rounded d-flex justify-content-center' item xs={12} md={6} >
                    <div style={{width:'25rem'}}>
                    <img width={'100%'} src={img} style={{height:"auto",width:"100%"}}/>
                    </div>
                </Grid>
            </Grid>
            </Grid>
        </div>

        <div className=' container-fluid d-flex justify-content-center' style={{backgroundColor:"#E6F3FA"}}>

<Grid container maxWidth={"sm"} className='px-5' style={{padding:"40px" }}>
<Grid container  spacing={3} className='shadow p-5 bg-white rounded'>
    
<Grid item xs={12} className='d-flex justify-content-center'>
        <h4 style={{color:"#ff6700"}}>Your Contact Information</h4>
    </Grid>
    <Grid  item xs={12} md={6} className='px-0' >
    <TextField fullWidth id="outlined-basic" label="First Name" variant="outlined" style={{ marginTop: '10px', marginBottom: '10px' }} title='Enter your first name'/>
    </Grid>

    <Grid  item xs={12} md={6} spacing={3} > 
   <TextField fullWidth id="outlined-basic" label="Last Name" variant="outlined" style={{ marginTop: '10px', marginBottom: '10px' }} title='Enter your last name'/>
   </Grid>
    <TextField fullWidth id="outlined-basic" label="Phone Number" variant="outlined" style={{ marginTop: '10px', marginBottom: '10px' }} title='Enter your phone number'/>
    
    <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" style={{ marginTop: '10px', marginBottom: '10px' }} title='Enter your email '/>
    <Grid item xs={12} className='d-flex justify-content-center'>
        <h4 style={{color:"#ff6700"}}>Referral's Contact Info</h4>
    </Grid>
    <TextField fullWidth id="outlined-basic" label="Full Name" variant="outlined" style={{ marginTop: '10px', marginBottom: '10px' }} title='Enter your full name'/>
    <TextField fullWidth id="outlined-basic" label="Phone Number" variant="outlined" style={{ marginTop: '10px', marginBottom: '10px' }} title='Enter your phone number'/>
    
    <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" style={{ marginTop: '10px', marginBottom: '10px' }} title='Enter your email' />
    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label" >Select Area</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    title='select area'
    label="Select Area"
    
  >
    {medicalAreas.map((item)=>
    <MenuItem value={item}>{item}</MenuItem>
    )}
  </Select>
</FormControl>
    <p className='fs_14 py-2'>
    IsentCare Healthcare Staffing is committed to protecting and respecting your data and privacy. You may unsubscribe at any time.
    </p>
    <FormControlLabel control={<Checkbox shape="circular"  />}
    label="I agree to receive other communications from IsentCare Healthcare Staffing."
    />
    <Grid item xs={12} className='d-flex justify-content-center'>
    <Button className=' px-3' variant='contain' style={{backgroundColor:"#FF6700",color:"white",borderRadius:"40px"}} title='submit'>SUBMIT</Button>
    </Grid>
 
</Grid>

</Grid>
</div>


</div>
  </>
  )
}

export default Referal