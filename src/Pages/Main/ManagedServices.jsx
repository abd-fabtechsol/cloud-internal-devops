import { Box, Button, Card, CardContent, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import c1 from "../../assets/managed-service/1.jpg"
import TabsMS from '../../components/mui/TabsMS';
import { useNavigate } from 'react-router-dom';
const ManagedServices = () => {
    const navigate=useNavigate()
  return (
   <>
    <div className='bg-health-care d-flex justify-content-center align-items-center'  >
       <h1 className='fw-bold'>Managed Services Provider (MSP)</h1> 
    </div>
<div className=' container ' >
<Grid container className='' style={{padding:"40px" }}>

<Grid container>
    <Grid item xs={12}>
    <h1 className='fw-bold'>Partner with IsentCare as your healthcare managed service provider (MSP)</h1>
    </Grid>
    <Grid className='px-5 py-2' item xs={12} md={6}>
        <p  style={{textAlign:"left", }}>Healthcare organizations across the nation, from acute care systems and teaching hospitals to senior living long-term care, can benefit from working with IsentCare Healthcare Staffing's managed service program for all your contingent staffing needs. Our managed services offer a way to reduce the stress of recruiting, credentialing, and vetting possible candidates while providing cost-saving solutions.
            As a healthcare MSP provider, we understand how difficult it is to find potential nursing, allied, and non-clinical healthcare professionals, which is why we partner directly with you to solve your staffing needs while managing and optimizing your workforce. Determining the right MSP company is the first step to finding more candidates and getting your hiring initiatives back on track.</p>
    {/* <Button className='fw-bold' variant='contained' style={{backgroundColor:"#FF7600",borderRadius:"30px"}}>Learn more</Button> */}
    </Grid>
    <Grid item xs={12} md={6} >
        <img src={c1} style={{height:"400px",width:"100%",objectFit:"cover"}} />
    </Grid>
</Grid>
</Grid>
</div>

    <div className=' container ' >

<Grid container className='' style={{padding:"40px" }}>

<Grid container>
<Grid item xs={12} md={6} >
        <img src={require("../../assets/kalo.jpg")} style={{height:"400px",width:"100%",objectFit:"cover"}} />
    </Grid>
    <Grid className='px-5 py-2' item xs={12} md={6}>
        <p  style={{textAlign:"left", }}>With IsentCare, you have a single source partner in providing a full range of staffing solution options that meet your organization's specific needs.</p>
    <div className='d-flex gap-2'>
        <StarIcon font-fontSize='small' style={{color:"#ff7600"}}/>
        <p>General consulting</p>
    </div>
    <div className='d-flex gap-2'>
        <StarIcon font-fontSize='small' style={{color:"#ff7600"}}/>
        <p>Recruitment specialist</p>
    </div>
    <div className='d-flex gap-2'>
        <StarIcon font-fontSize='small' style={{color:"#ff7600"}}/>
        <p>Requisition management</p>
    </div>
    <div className='d-flex gap-2'>
        <StarIcon font-fontSize='small' style={{color:"#ff7600"}}/>
        <p>Census tracking integration for real-time scheduling adaptation</p>
    </div>
    <div className='d-flex gap-2'>
        <StarIcon font-fontSize='small' style={{color:"#ff7600"}}/>
        <p>Float pool management</p>
    </div>
    <div className='d-flex gap-2'>
        <StarIcon font-fontSize='small' style={{color:"#ff7600"}}/>
        <p>Credential management</p>
    </div>
    <div className='d-flex gap-2'>
        <StarIcon font-fontSize='small' style={{color:"#ff7600"}}/>
        <p>Vendor on premise</p>
    </div>
    <div className='d-flex gap-2'>
        <StarIcon font-fontSize='small' style={{color:"#ff7600"}}/>
        <p>Vendor management</p>
    </div>
    <div className='d-flex gap-2'>
        <StarIcon font-fontSize='small' style={{color:"#ff7600"}}/>
        <p>Mobilize technology</p>
    </div>
    {/* <Button className='fw-bold' variant='contained' style={{backgroundColor:"#FF7600",borderRadius:"30px"}}>Learn more</Button> */}
    </Grid>
   
</Grid>
</Grid>
    </div> 

<div className='container '>

<Grid container className='' style={{padding:"40px" }}>
<Grid item xs={12} >
    <h1 className='px-5 fw-bold ' style={{color:"#071641"}}>Consider IsentCare as your managed services healthcare staffing partner </h1>
</Grid>
<Grid container>
    <Grid className='px-5 py-2' item xs={12}>
        <p  style={{textAlign:"left", }}>Choose IsentCare as your staffing partner and explore the advantages of managed service providers (MSPs) for recruitment initiatives. MSPs can grant facilities access to hundreds of talented clinicians and non-clinical professionals from a single source, delivering the best-in-class hiring experience.</p>
    {/* <Button variant='contained' style={{backgroundColor:"#FF7600",borderRadius:"30px"}}>Search Jobs Now</Button> */}
    </Grid>
    </Grid>
    </Grid>
    </div>
    
    <div className=' container    ' >

<Grid container className='' style={{padding:"40px" }}>
<Grid className=' d-flex justify-content-center align-items-center' item xs={12} md={4}>
    <Box className='p-3 d-flex justify-content-center align-items-center shadow-sm 'sx={{height:"100%", width:"70%"}} component={Paper}>
        <div>

        <h3>Is it time to re-think your current MSP program?</h3>
    <Button variant='contained fw-bold' style={{backgroundColor:"#FF7600",color:"white",borderRadius:"30px"}} onClick={()=>navigate("/contact-us")}   title='contact us'>CONTACT US</Button> 
        </div>
    </Box>
</Grid>
    <Grid item xs={12} md={8}>
<Grid item xs={12} className='' >
    {/* <h1 className='px-5 fw-bold ' style={{color:"#071641",}}>Our streamlined application process makes onboarding with IsentCare easy</h1> */}
    <p>
    Consider us as your MSP staffing company if:
    </p>
    <div className='d-flex gap-2'>
        <StarIcon font-fontSize='small' style={{color:"#ff7600"}}/>
        <p>You need whole workforce solutions including per diem, permanent placement, and international sourcing   </p>
    </div>
    <div className='d-flex gap-2'>
        <StarIcon font-fontSize='small' style={{color:"#ff7600"}}/>
        <p>You need an accelerated hiring process for temporary and staff employees</p>
    </div>
    <div className='d-flex gap-2'>
        <StarIcon font-fontSize='small' style={{color:"#ff7600"}}/>
        <p>Your contingent labor management needs to be streamlined</p>
    </div>
    <div className='d-flex gap-2'>
        <StarIcon font-fontSize='small' style={{color:"#ff7600"}}/>
        <p>You're looking for sustainable labor cost reduction</p>
    </div>

</Grid>
</Grid>


</Grid>
</div>

<div className=' container    ' >
<Grid container className='' style={{padding:"40px" }}>
<Grid item xs={12} >
    <h1 className='px-5 fw-bold ' style={{color:"#071641"}}>Benefits of choosing IsentCare for contingent workforce management</h1>
</Grid>

    <Grid className='px-5 py-2' item xs={12}>
        <p  style={{textAlign:"left", }}>As a strategic advisor, we work with our clients to diagnose pain points and implement solutions that address their objectives around labor costs, revenues and patient experience. Our suite of strategic workforce solutions includes a full spectrum of benefits.</p>
    {/* <Button variant='contained' style={{backgroundColor:"#FF7600",borderRadius:"30px"}}>Search Jobs Now</Button> */}
    </Grid>
    <Grid className='' container style={{backgroundColor:"#E5F3FB"}}>
        <Grid  className='px-5 py-2'item xs={12} md={6}>
            <p className='fw-bold'>IsentCare provides expert talent, technology, and processes</p>
        </Grid>
        <Grid item xs={12} md={6}>
        <div className='nursing'>
                    <ul >
                      <li>
                      Enterprise-wide staffing solution
                      </li>
                      <li>
                      Local partner with a national reach and international sourcing via global partnership
                      </li>
                      <li>
                      Regulatory compliance with all credentials visible via IsentCare’s Mobilize technology
                      </li>
                    </ul>
         </div>
        </Grid>
    </Grid>

    <Grid className='' container style={{backgroundColor:"#F2F9FD"}}>
        <Grid  className='px-5 py-2'item xs={12} md={6}>
            <p className='fw-bold'>Staffing solutions for nursing, allied and non-clinical needs</p>
        </Grid>
        <Grid item xs={12} md={6}>
        <div className='nursing'>
                    <ul >
                      <li>
                      Travel nursing
                      </li>
                      <li>
                      Allied health
                      </li>
                      <li>
                      Non-clinical
                      </li>
                      <li>
                      Professional staffing
                      </li>
                      <li>
                      Per diem
                      </li>
                      <li>
                      Permanent placement
                      </li>
                      <li>
                      Float pool management
                      </li>
                    </ul>
         </div>
        </Grid>
    </Grid>

    <Grid className='' container style={{backgroundColor:"#E5F3FB"}}>
        <Grid  className='px-5 py-2'item xs={12} md={6}>
            <p className='fw-bold'>Financial savings</p>
        </Grid>
        <Grid item xs={12} md={6}>
        <div className='nursing'>
                    <ul >
                      <li>
                      Cost savings through real-time workforce spend tracking
                      </li>
                      <li>
                      Integrated census tracking for optimal labor management
                      </li>
                      <li>
                      Real-time overtime alerts for cost reduction
                      </li>
                      <li>
                      Consolidation of vendors under one agreement with one point of contact
                      </li>
                      <li>
                      Combined vendor-relations into one invoice
                      </li>
                    </ul>
         </div>
        </Grid>
    </Grid>

    <Grid className='' container style={{backgroundColor:"#F2F9FD"}}>
        <Grid  className='px-5 py-2'item xs={12} md={6}>
            <p className='fw-bold'>More time dedicated to strategic planning and patient experience</p>
        </Grid>
        <Grid item xs={12} md={6}>
        <div className='nursing'>
                    <ul >
                      <li>
                      Save time through operational efficiencies
                      </li>
                      <li>
                      On-demand access 24/7/365 through IsentCare’s National Service Center (NSC)
                      </li>
                      <li>
                      Proprietary Mobilize mobile app to expedite resource engagement, including all vendors and float pool
                      </li>
                    </ul>
         </div>
        </Grid>
    </Grid>


    <Grid className='' container style={{backgroundColor:"#E5F3FB"}}>
        <Grid  className='px-5 py-2'item xs={12} md={6}>
            <p className='fw-bold'>Improves overall satisfaction</p>
        </Grid>
        <Grid item xs={12} md={6}>
        <div className='nursing'>
                    <ul >
                      <li>
                      Tailored affiliate vendor pool to maximize engagement
                      </li>
                      <li>
                      Client decides on affiliate vendors to work with
                      </li>
                      <li>
                      Supplier diversity
                      </li>
                      <li>
                      Increase communication efficacy
                      </li>
                    </ul>
         </div>
        </Grid>
    </Grid>
    </Grid>
    </div>

    <div className=' container ' >
<Grid container className='' style={{padding:"40px" }}>

<Grid container>
    <Grid className='px-5 py-2' item xs={12} md={6}>
    <h1 className='fw-bold'>IsentCare is a next-gen MSP and workforce optimization company</h1>
        <p  style={{textAlign:"left", }}>
        Our contingent labor solutions offer exceptional levels of service at your disposal, and our next generation model provides innovative change through technology and analytics, touchless scheduling, census tracking integration, credentialing and onboarding, and scheduling forecasting. 
        Here are the numbers to prove it.
        </p>
    {/* <Button className='fw-bold' variant='contained' style={{backgroundColor:"#FF7600",borderRadius:"30px"}}>Learn more</Button> */}
    </Grid>
    <Grid item xs={12} md={6} >
    <Card sx={{ maxWidth: 350 }} style={{ position: "relative" }}>
      <CardContent className='d-flex justify-content-between align-items-center' >
        <div >
        <div>
        <p className='mb-0 fw-bold' style={{ fontSize: 60,color:"#FFECDF" }}>
          98%
        </p>
          <p className='fw-bold '>
            Fill rate
          </p>
        </div>
        <div>
        <Typography className='fw-bold' sx={{ fontSize: 72,color:"#FFECDF" }}>
         12%
        </Typography>
        <p className='fw-bold '>
        reduction in <br /> staffing and hard <br /> costs
          </p>
        </div>
        </div>

        <div>
        <div className=''>
        <p className='mb-0 fw-bold' style={{ fontSize: 60,color:"#FFECDF" }}>
          20%
        </p>
          <p className='fw-bold '>
          reduction in <br /> time-to-fill
          </p>
        </div>
        <div className='mb-5'>
        <Typography className='fw-bold' sx={{ fontSize: 72,color:"#FFECDF" }}>
         27%
        </Typography>
        <p className='fw-bold '>
        average time <br /> savings
          </p>
        </div>
        </div>

        
      </CardContent>
    </Card>
    </Grid>
</Grid>
</Grid>
</div>

    <div className='py-5' style={{backgroundColor:"#E6F3FA"}}>
            <div className='container'>
            <p className='text-center' style={{fontSize:"24px"}}> 
            
            “We have worked closely with IsentCare Managed Services and have found <br /> 
            them to be <b>responsive, knowledgeable, </b>  and <b> consistently willing to go <br />
            above and beyond</b> to assist with the dynamic needs of the facilities within <br />
            our Health System.”
           
            </p>
            <p className='text-center' style={{fontSize:"24px"}}>
            - CNO of large hospital system, program partner for 10+ years
            </p>
            </div>
        </div>


        <div className=' container ' >
            <Grid container className='' style={{padding:"40px" }}>

            <Grid container>
                <Grid item xs={12}>
                <h1 className='fw-bold'>Consider IsentCare’s vendor management services (VMS)</h1>
                </Grid>
                <Grid className='px-5 py-2' item xs={12} md={6}>
                    <p  style={{textAlign:"left", }}>
                    VMS software is an invaluable technology tool for healthcare businesses that are looking to simplify their staffing process and efficiently manage both internal and external candidates. As an alternative to MSP, VMS provides an automated system that can quickly streamline procedures and make the recruitment workflow faster and easier than ever before. In addition, it allows businesses to take complete control of every step in their talent acquisition process while also allowing them to continue their MSP strategy if needed. It is therefore a viable option if you're seeking a more self-reliant approach to managing your recruitment operations.
                    </p>
                {/* <Button className='fw-bold' variant='contained' style={{backgroundColor:"#FF7600",borderRadius:"30px"}}>Learn more</Button> */}
                </Grid>
                <Grid item xs={12} md={6} >
                    <img src={require("../../assets/VMS.jpg")} style={{height:"400px",width:"100%",objectFit:"cover"}} />
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={12}>
                <h1 className='fw-bold'>Consider IsentCare’s vendor management services (VMS)</h1>
                </Grid>
                <Grid item xs={12} md={6} >
                    <img src={require("../../assets/vms 2.jpg")} style={{height:"400px",width:"100%",objectFit:"cover"}} />
                </Grid>
                <Grid className='px-5 py-2' item xs={12} md={6}>
                    <p  style={{textAlign:"left", }}>
                    IsentCare’s VMS is a convenient way to handle all your staffing and compliance needs through one powerful platform. It eliminates the need to manage multiple services and vendors; instead, you can use one dedicated partner to keep track of invoicing, reporting, compliance, and staffing. Moreover, our VMS enables employers to hire both internal staff from their own pool and external workers from different vendor agencies. Therefore, companies can find and manage their labor support through this single scheduling tool without any hassle. With IsentCare's VMS, managing even the most complicated staffing data is effortless!
                    </p>
                {/* <Button className='fw-bold' variant='contained' style={{backgroundColor:"#FF7600",borderRadius:"30px"}}>Learn more</Button> */}
                </Grid>
               
            </Grid>
            </Grid>
    </div>

    <div className='container '>

<Grid container className='' style={{padding:"40px" }}>
<Grid item xs={12} >
    <h1 className='px-5 fw-bold ' style={{color:"#071641"}}>
    Benefits of using the IsentCare staffing technology platform:
    </h1>
</Grid>
<Grid container>
    <Grid className='px-5 py-2' item xs={12}>
    <div className='nursing'>
                    <ul >
                      <li>
                      One entry point – through platform or a dedicated account manager
                      </li>
                      <li>
                      Customized to fit your needs
                      <ul style={{listStyle:"circle"}}>
                      <li>
                      Technology integration – order requisition and timekeeping systems
                      </li>
                      <li>
                      Online training and orientation​
                      </li>
                      </ul>
                      </li>
                      
                      <li>
                      DNR list enforcement​
                      </li>
                      <li>
                      Business intelligence and data analytics
                      </li>
                      <li>
                      Intelligent census analytics based on historical trends for schedule planning
                      </li>
                      <li>
                      Dedicated IT team supporting a single technology
                      </li>
                      <li>
                      Web based and thus no IT conflicts​
                      </li>
                      <li>
                      Additional training and assistance available 24/7
                      </li>
                      <ul style={{listStyle:"circle"}}>
                      <li>
                      Webinar and on-site training​
                      </li>
                      </ul>
                      <li>
                      Fully redundant
                      </li>
                      <ul style={{listStyle:"circle"}}>
                      <li>
                      Disaster recoverable and encrypted technology
                      </li>
                      </ul>
                    </ul>
         </div>
    {/* <Button variant='contained' style={{backgroundColor:"#FF7600",borderRadius:"30px"}}>Search Jobs Now</Button> */}
    </Grid>
    </Grid>
    </Grid>
    </div>
    
    <div className=' container    ' >
<Grid container className='' style={{padding:"40px" }}>
<Grid item xs={12} >
    <h1 className='text-center fw-bold ' style={{color:"#071641"}}>MSP vs VMS Overview</h1>
</Grid>
    <Grid container>
    <Grid className='px-5 py-2' item xs={12}>
      
    </Grid>
    <Grid item xs={12}>
        <TabsMS/> 
    </Grid>
    </Grid>
    </Grid>
    </div>

    <div className=' container ' style={{backgroundColor:"#E6F3FA"}}>
    <Grid container className='' style={{padding:"40px" }}>
    <Grid container>
    <Grid item xs={12} md={6}>
        <h1 className=' py-2' style={{textAlign:"left", }}>
        Discover how IsentCare can revolutionize your labor processes and secure workforce sustainability
        </h1>
        <p>
        Are you ready to take your workforce to the next level? Connect with our team today to see how IsentCare can optimize your labor processes and support workforce sustainability.
        </p>
    </Grid>
    <Grid className='shadow p-2 bg-white rounded' item xs={12} md={6} spacing={3}>
    <TextField fullWidth id="outlined-basic" label="First Name" variant="outlined" style={{ marginTop: '10px', marginBottom: '10px' }}  title='Enter your first name' />
    <TextField fullWidth id="outlined-basic" label="Last Name" variant="outlined" style={{ marginTop: '10px', marginBottom: '10px' }} title='Enter your last name'/>
    <TextField fullWidth id="outlined-basic" label="Phone Number" variant="outlined" style={{ marginTop: '10px', marginBottom: '10px' }} title='Enter your phone number' />
    <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" style={{ marginTop: '10px', marginBottom: '10px' }}  title='Enter your email '/>
    <TextField fullWidth id="outlined-basic" label="Company Name" variant="outlined" style={{ marginTop: '10px', marginBottom: '10px' }} title='Enter your company name'/>
    <TextField multiline fullWidth id="outlined-basic" label="Message" variant="outlined" style={{ marginTop: '10px', marginBottom: '10px' }} title='Enter massage' />
    <p className='fs_14'>
    IsentCare Healthcare Staffing is committed to protecting and respecting your data and privacy. You may unsubscribe at any time.
    </p>
    <FormControlLabel control={<Checkbox shape="circular"  />}
    label="I agree to receive other communications from IsentCare Healthcare Staffing."
    />
    <Grid className='d-flex justify-content-center'>
    <Button className=' px-3' variant='contain' style={{backgroundColor:"#FF6700",color:"white",borderRadius:"40px"}}  title='submit'>SUBMIT</Button>
    </Grid>
    </Grid>
</Grid>

</Grid>
</div>

        
   </>
  )
}

export default ManagedServices