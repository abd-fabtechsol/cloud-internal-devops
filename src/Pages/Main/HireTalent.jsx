import { CheckBox } from '@mui/icons-material'
import { Button, Grid, TextField, FormControlLabel, Checkbox } from '@mui/material'
import React from 'react'

export default () => {
  return (
    <div>
        <div className='mt-5 background_hireTalent'>
                <div className='h-100 d-flex justify-content-center align-items-center'>
                    <h1 className='fw-bold text-center'>
                    Talent Management
                    </h1>

            </div>
         </div>

         <div className=' container '>

                <Grid container className='' style={{padding:"40px" }}>
                <Grid item xs={12} >
                    <h1 className='text-center'>Enterprise-wide talent management</h1>
                    <h3 className='text-center'>
                    Hospital staffing and workforce solutions designed for you
                    </h3>
                </Grid>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <p className=' py-2' style={{textAlign:"left", }}>
                        At IsentCare Healthcare Staffing, we want to be more than just your healthcare staffing agency; we want to be your trusted staffing partner. Our quality workforce solutions are tailored to meet the organizational needs of our clients. We know providing the best patient care is always the number one priority for healthcare providers, it's our mission to help provide you with talent management tools that allows you to focus on that.

                        </p>
                        <p>
                        With an unwavering commitment to trust and quality, our goal is to provide your organization with talented clinical and non-clinical professionals that bring the skills necessary for a successful healthcare operation. Let us be your go-to for workforce staffing solutions - after all, as a leader and innovator in healthcare staffing services, it's what we do best.
                        </p>
                    </Grid>
                    <Grid className='rounded d-flex justify-content-center' item xs={12} md={6} >
                        <div style={{width:'30rem'}}>
                        <img width={'100%'} src={require("../../assets/hospital staffing.jpg")}/>
                        </div>
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
            <TextField fullWidth id="outlined-basic" label="First Name" variant="outlined" style={{ marginTop: '10px', marginBottom: '10px' }} title='Enter your first name ' />
            <TextField fullWidth id="outlined-basic" label="Last Name" variant="outlined" style={{ marginTop: '10px', marginBottom: '10px' }} title='Enter your last name '/>
            <TextField fullWidth id="outlined-basic" label="Phone Number" variant="outlined" style={{ marginTop: '10px', marginBottom: '10px' }} title='Enter your phone number '/>
            <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" style={{ marginTop: '10px', marginBottom: '10px' }}  title='Enter your email  '/>
            <TextField fullWidth id="outlined-basic" label="Company Name" variant="outlined" style={{ marginTop: '10px', marginBottom: '10px' }} title='Enter your company name ' />
            <TextField multiline fullWidth id="outlined-basic" label="Message" variant="outlined" style={{ marginTop: '10px', marginBottom: '10px' }} title='Enter message ' />
            <p className='fs_14'>
            IsentCare Healthcare Staffing is committed to protecting and respecting your data and privacy. You may unsubscribe at any time.
            </p>
            <FormControlLabel control={<Checkbox shape="circular"  />}
            label="I agree to receive other communications from IsentCare Healthcare Staffing."
            />
            <Grid className='d-flex justify-content-center'>
            <Button className=' px-3' variant='contain' style={{backgroundColor:"#FF6700",color:"white",borderRadius:"40px"}} title='submit'>SUBMIT</Button>
            </Grid>
            </Grid>
        </Grid>

        </Grid>
        </div>

        <div className=' container '>
                <Grid container className='' style={{padding:"40px" }}>
                <Grid item xs={12} >
                    <h1 className='text-center'>A legacy of staffing healthcare <br /> professionals since 1981</h1>
                </Grid>
                <Grid container>
                <Grid className='rounded d-flex justify-content-center' item xs={12} md={6} >
                        <div style={{width:'30rem'}}>
                        <img width={'100%'} src={require("../../assets/hospital staffing.jpg")}/>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <p className=' py-2' style={{textAlign:"left", }}>
                        For over 40 years, IsentCare Healthcare Staffing has led the way in providing hospital staffing solutions, setting the industry standard for quality, service, and integrity. In 2022, we joined Acacium Group to become the first global healthcare staffing and workforce solutions specialist, which will give exclusive access to the world’s premiere healthcare professionals through international sourcing.
                        </p>
                        <p>
                        As a growing provider of workforce solutions, our mission is to create jobs and provide qualified and dependable talent whenever, wherever needed. This commitment starts with the company culture – we believe in putting others before ourselves and have lived out this core value since day one. We are a proven leader in the healthcare staffing industry with local per diem and travel staffing options for nurses and allied health professionals.
                        </p>
                        <div className='nursing'>
                    <ul >
                      <li>
                      Standard hiring practices
                      </li>
                      <li>
                      Standard terms and conditions
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
                    <h1 className=''>Our nursing, allied, and non-clinical services</h1>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    Finding the right people or services to meet your company's standards can be challenging. Fortunately, IsentCare offers comprehensive staffing solutions and vendor management to ensure you get quality candidates that match the unique needs of your business. With our experienced and dedicated team, you can rest assured we will deliver the results that meet your company's exacting standards. 
                    </p>
                    <h2>
                    IsentCare is a healthcare managed service provider (MSP)
                    </h2>
                    <p>
                    Healthcare organizations across the nation can benefit from working with IsentCare Healthcare Staffing's managed service program (MSP) for all your contingent staffing needs. Our managed services offer acute care systems and teaching hospitals to senior living long-term care a way to reduce the stress of recruiting, credentialing, and vetting possible candidates while providing cost-saving solutions.
                    </p>

                    <div className='nursing'>
                    <ul >
                      <li style={{ marginTop: '10px', marginBottom: '10px' }}>
                      <span className='fw-bold'>An innovative approach to your staffing and workforce needs. </span>  We’ll help ensure your company is staffed and managed so you can finally take your mind off the contingent staff issues holding you back and focus on something new.
                      </li>
                      <li style={{ marginTop: '10px', marginBottom: '10px' }}>
                      <span className='fw-bold'>General Consulting.  </span>  We can manage the time sheets of all your vendors and route timecards accordingly to ensure timely compensation to the employee and fast, reconciled invoicing to you.
                      </li>
                      <li style={{ marginTop: '10px', marginBottom: '10px' }}>
                      <span className='fw-bold'>Human Capital Management. </span>  Application management, certification records, immunization tracking, OSHA requirements, facility specific training — we can handle these on boarding processes and more.
                      </li>
                      <li style={{ marginTop: '10px', marginBottom: '10px' }}>
                        <span className='fw-bold'> Financial Cost Savings. </span>  We can help effectively predict, plan, and manage expenditures.
                      </li>
                      <li style={{ marginTop: '10px', marginBottom: '10px' }}>
                      <span className='fw-bold'> Technology</span> . We lessen the burden of multiple phone calls, invoices, and employee files, and consolidate them in a centralized platform.
                      </li>
                      <li style={{ marginTop: '10px', marginBottom: '10px' }}>
                      <span  className='fw-bold'>Complete Vendor Management. </span>  IsentCare will oversee and contract, invoice, and manage all your contingent staff, regardless of the vendor they come from.
                      </li>
                    </ul>
                    </div>
                </Grid>
                <Grid className=' d-flex justify-content-center' xs={12}>
                <Button className=' px-3' variant='contain' style={{backgroundColor:"#FF6700",color:"white",borderRadius:"40px"}}  title='explore service'>EXPLORE THE MANAGED SERVICE PROGRAM</Button>
                </Grid>
               

                </Grid>
        </div>

        <div className=' container '>
                <Grid container className='' style={{padding:"40px" }}>
                <Grid item xs={12} >
                    <h1 className=''>Partner with IsentCare for your healthcare float pool management</h1>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    Float pool management has become increasingly important in healthcare organizations to effectively manage staffing needs and shortages associated with the continuously changing workforce. Float pools provide a cost-effective solution that not only allows hospitals and other healthcare facilities to reduce clinical labor costs but maintain high-quality patient care and employee engagement levels.
                    </p>
                    <div className='nursing'>
                    <ul >
                      <li style={{ marginTop: '10px', marginBottom: '10px' }}>
                      <span className='fw-bold'> Cost savings.</span>  Our work-as-needed model is more economical than having full-time employees work overtime or hiring temporary contract labor, and the schedule visibility empowers managers to prioritize core and per diem staff over agency.  
                      </li>
                      <li style={{ marginTop: '10px', marginBottom: '10px' }}>
                      <span className='fw-bold'>General Consulting.  </span>  We can manage the time sheets of all your vendors and route timecards accordingly to ensure timely compensation to the employee and fast, reconciled invoicing to you.
                      </li>
                      <li style={{ marginTop: '10px', marginBottom: '10px' }}>
                      <span className='fw-bold'>Process efficiency. </span>  Quickly adjust staffing levels based on fluctuating patient volume and available full-time employees to ensure the highest level of patient care.  
                      </li>
                      <li style={{ marginTop: '10px', marginBottom: '10px' }}>
                      <span className='fw-bold'>Consistency in patient care and increased employee engagement. </span>  Streamline your workforce with qualified float pool resources who provide a high-level of patient care, and are already familiar with the facility, physicians, policies, and procedures. As an extension of your team, engaging with these skilled resources eliminates the time it takes for your full-time staff to train and orient temporary workers each shift, freeing up their time to focus on providing quality patient care.
                      </li>
                    </ul>
                    </div>
                </Grid>
                <Grid className=' d-flex justify-content-center' xs={12}>
                <Button className=' px-3' variant='contain' style={{backgroundColor:"#FF6700",color:"white",borderRadius:"40px"}}  title='Explore float pool'>EXPLORE FLOAT POOL MANAGEMENT</Button>
                </Grid>
               

                </Grid>
        </div>

        <div className='py-5' style={{backgroundColor:"#E6F3FA"}}>
            <div className='container'>
            <h3 className='text-center'> 
            “My recruiter has been marvelous. Throughout the hiring process she has been patient, kind and extremely helpful every step of the way. She is a doll to work with and I love that she is so personable. She really knows her job and I could not have gotten through this without her help.”
            </h3>
            <h6 className='text-center'>
            - Bettie H. -- Registered Nurse
            </h6>
            </div>
        </div>
        <div className=' container '>

            <Grid container className='' style={{padding:"40px" }}>
           
            <Grid container>

                <Grid item xs={12} md={6}>
                <h1 className=''>Staffing of healthcare executives and professionals </h1>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    IsentCare Healthcare Staffing specializes in connecting healthcare executives and professionals to the opportunities they need. From helping healthcare executives connect to the C-suite, to assisting medical companies with their recruiting needs, and placing school-based healthcare professionals into learning institutions, we make sure everyone is backed by the resources they need to thrive in their roles. 
                    </p>
                </Grid>

                <Grid className='rounded d-flex justify-content-center' item xs={12} md={6} >
                    <div style={{width:'20rem'}}>
                    <img width={'100%'} src={require("../../assets/healthcare staffing.jpg")}/>
                    </div>
                 </Grid>
               
            </Grid>

            </Grid>
        </div>

        <div className=' container '>
            <Grid container className='' style={{padding:"40px" }}>
            <Grid container>
            <Grid className='rounded d-flex justify-content-center' item xs={12} md={6} >
                    <div style={{width:'25rem'}}>
                    <img width={'100%'} src={require("../../assets/perdaim staffing.jpg")}/>
                    </div>
                 </Grid>

                <Grid item xs={12} md={6}>
                <h1 className=''>Per diem staffing agency of nurses and allied health professionals</h1>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    IsentCare Healthcare Staffing specializes in connecting healthcare executives and professionals to the opportunities they need. From helping healthcare executives connect to the C-suite, to assisting medical companies with their recruiting needs, and placing school-based healthcare professionals into learning institutions, we make sure everyone is backed by the resources they need to thrive in their roles. 
                    </p>
                    <Grid className='d-flex justify-content-center'>
                      <Button className=' px-3' variant='contain' style={{backgroundColor:"#FF6700",color:"white",borderRadius:"40px"}}  title='Explore per diem'>EXPLORE PER DIEM</Button>
                    </Grid>
                </Grid>
               
            </Grid>

            </Grid>
        </div>

        <div className=' container '>
            <Grid container className='' style={{padding:"40px" }}>
            <Grid container>
                <Grid item xs={12} md={6}>
                <h1 className=''>IsentCare is a travel nursing agency for local and national staffing</h1>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    Our nurses and allied health staff are eager to fill your healthcare organization's local or national travel staffing needs. Our pre-screening process ensures that everyone we hire is fully vetted and highly qualified in their respective field. We understand the urgency of the situation, so we strive to make our hiring process as quick and efficient as possible without compromising on quality. No matter what type of healthcare challenges your location might have, you can be sure that our staff will be available with all the skills necessary to provide exceptional patient care.
                    </p>
                    <Grid className='d-flex justify-content-center'>
                    <Button className=' px-3' variant='contain' style={{backgroundColor:"#FF6700",color:"white",borderRadius:"40px"}} title='explore travel'>EXPLORE TRAVEL NURSING</Button>
                </Grid>
                </Grid>

                <Grid className='rounded d-flex justify-content-center' item xs={12} md={6} >
                    <div style={{width:'30rem'}}>
                    <img width={'100%'} src={require("../../assets/travel nursing.jpg")}/>
                    </div>
                 </Grid>
                 
            </Grid>

            </Grid>
        </div>

        <div className='py-5' style={{backgroundColor:"#E6F3FA"}}>
            <div className='container'>
            <h3 className='text-center'> 
            “IsentCare healthcare has been a great place to work. All the staff is so prompt and willing to help in order to give us nurses the best working experience possible Thank you all”
            </h3>
            <h6 className='text-center'>
            - Melissa Fourmann – From Google Reviews
            </h6>
            </div>
        </div>

        <div className=' container '>
            <Grid container className='' style={{padding:"40px" }}>
            <Grid container>
            <Grid className='rounded d-flex justify-content-center' item xs={12} md={6} >
                    <div >
                    <img style={{width:'30rem', height:'30rem'}}  src={require("../../assets/long-trem-recurit.jpg")}/>
                    </div>
             </Grid>
                <Grid item xs={12} md={6}>
                <h1 className=''>Direct hire is your long-term recruitment solution</h1>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    Direct hire staffing, often referenced as permanent placement or direct placement, is always a great way to reduce staffing shortages in the long term, rather than relying solely on short-term options such as per diem or contract staffing. Hiring permanent employees does require an initial investment, however with the right level of competitive compensation, you can create a long-term recruitment solution with potential for long-term success. Once filled, direct hires are able to give your organization greater control over their resources and also enable them to provide excellent patient care. Furthermore, it allows organizations to focus on optimizing care continuity while being more cost-effective compared to revolving through multiple temporary staff members. 
                    </p>
                    <Grid className='d-flex justify-content-center'>
                    <Button className=' px-3' variant='contain' style={{backgroundColor:"#FF6700",color:"white",borderRadius:"40px"}}  title='Explore Hire'>EXPLORE DIRECT HIRE</Button>
                </Grid>
                </Grid>
            </Grid>

            </Grid>
        </div>

        <div className=' container '>
            <Grid container className='' style={{padding:"40px" }}>
            <Grid item xs={12} >
                    <h1 className='text-center'>Emergency clinical and non-clinical staffing agency</h1>
            </Grid>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <p className=' py-2' style={{textAlign:"left", }}>
                    Our nurses and allied health staff are eager to fill your healthcare organization's local or national travel staffing needs. Our pre-screening process ensures that everyone we hire is fully vetted and highly qualified in their respective field. We understand the urgency of the situation, so we strive to make our hiring process as quick and efficient as possible without compromising on quality. No matter what type of healthcare challenges your location might have, you can be sure that our staff will be available with all the skills necessary to provide exceptional patient care.
                    </p>
                    <Grid className='d-flex justify-content-center'>
                    <Button className=' px-3' variant='contain' style={{backgroundColor:"#FF6700",color:"white",borderRadius:"40px"}}  title='Explore Travel'>EXPLORE TRAVEL NURSING</Button>
                </Grid>
                </Grid>

                <Grid className='rounded d-flex justify-content-center' item xs={12} md={6} >
                    <div style={{width:'30rem'}}>
                    <img width={'100%'} src={require("../../assets/clinicl staffing.jpg")}/>
                    </div>
                 </Grid>
                 
            </Grid>

            </Grid>
        </div>


    </div>
  )
}
