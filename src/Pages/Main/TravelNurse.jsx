
import React from 'react'
import backimg from "../../assets/travel/travel-nurse.jpg"
import map from "../../assets/travel/map.png"
import c1 from "../../assets/travel/1.jpg"
import c2 from "../../assets/travel/2.jpg"
import c3 from "../../assets/travel/3.jpg"
import c4 from "../../assets/travel/4.jpg"
import c5 from "../../assets/travel/5.jpg"
import c6 from "../../assets/travel/6.jpg"
import c7 from "../../assets/travel/7.jpg"

import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const TravelNurse = () => {
    const navigate=useNavigate()
  return (
    <>
     <div className='bg-travel d-flex justify-content-center align-items-center'  >
       <h1 className='fw-600'>Travel Nursing</h1> 
    </div>

    <div className=' container    ' >

<Grid container className='' style={{padding:"40px" }}>
<Grid item xs={12} >
    <h1 className='px-5 fw-bold ' style={{color:"#071641"}}>What is travel nursing?</h1>
</Grid>
<Grid container>
    <Grid className='px-5 py-2' item xs={12} md={6}>
        <p  style={{textAlign:"left", }}>Travel nursing is an attractive option for experienced nurses looking to explore new places and gain professional experience. With travel nursing, advanced practice nurses (APRN), registered nurses (RN), and licensed practical nurses (LPN) have the opportunity to work in different healthcare facilities across the United States on assignments that last anywhere from 4-13 weeks. This shorter time frame often translates into generous pay, as travel RNs and LPNs are in high demand, providing added financial benefits and flexibility for those looking to travel.

IsentCare Healthcare Staffing offers an abundance of travel nursing opportunities that are ideal for nurses who want to enjoy the flexibility of a short-term assignment. Whether traveling for pleasure, a change in scenery, or career advancement, discover your dream job with IsentCare Healthcare Staffing today!</p>
    <Button variant='contained' style={{backgroundColor:"#FF7600",borderRadius:"30px"}} onClick={()=>navigate("/jobs")}  title='Search Jobs'>Search Jobs Now</Button>
    </Grid>
    <Grid item xs={12} md={6} >
        <img src={c1} style={{height:"400px",width:"100%",objectFit:"cover"}} />
    </Grid>
</Grid>
</Grid>
</div> 

<div className=' container    ' >

        <Grid container className='' style={{padding:"40px" }}>
        <Grid item xs={12} >
            <h1 className='px-5 fw-bold ' style={{color:"#071641"}}>How to become a travel nurse </h1>
        </Grid>
        <Grid container>
        <Grid item className='px-5 py-2' xs={12} md={6} >
                <img src={c2} style={{height:"300px",width:"100%",objectFit:"cover"}} />
            </Grid>
            <Grid item  xs={12} md={6}>
                <p  style={{textAlign:"left", }}>Becoming a travel nurse first starts with becoming a licensed nurse. Education requirements depend on the specialty and the employer but usually include having an Associate degree in Nursing (ADN) and successfully passing the NCLEX-RN exam administered by the National Council of State Boards of Nursing to receive your nursing license. Having a Bachelor of Science in Nursing (BSN) could potentially open up more job opportunities. If travel nursing is something you're interested in, make sure you have the required education, and an active nursing license to ensure success in this profession.</p>
                {/* <div className='d-flex flex-column flex-md-row  gap-2'>
                <Button variant='contain' style={{backgroundColor:"#FF6700",color:"white",borderRadius:"40px"}}>Apply Now</Button>
                <Button variant='outlined' style={{color:"blue ",border:"1px solid blue",borderRadius:"40px"}}>Find a Job</Button>
                    </div> */}
            </Grid>
            
        </Grid>
        <Grid container>
    <Grid className='px-5 py-2' item xs={12} md={6}>
        <p  style={{textAlign:"left", }}>Travel nursing is an attractive option for experienced nurses looking to explore new places and gain professional experience. With travel nursing, advanced practice nurses (APRN), registered nurses (RN), and licensed practical nurses (LPN) have the opportunity to work in different healthcare facilities across the United States on assignments that last anywhere from 4-13 weeks. This shorter time frame often translates into generous pay, as travel RNs and LPNs are in high demand, providing added financial benefits and flexibility for those looking to travel.

IsentCare Healthcare Staffing offers an abundance of travel nursing opportunities that are ideal for nurses who want to enjoy the flexibility of a short-term assignment. Whether traveling for pleasure, a change in scenery, or career advancement, discover your dream job with IsentCare Healthcare Staffing today!</p>
    {/* <Button variant='contained' style={{backgroundColor:"#FF7600",borderRadius:"30px"}}>Search Jobs Now</Button> */}
    </Grid>
    <Grid item xs={12} md={6} >
        <img src={c7} style={{height:"400px",width:"100%",objectFit:"cover"}} />
    </Grid>
</Grid>
        </Grid>
    </div> 


    <div className=' container    ' >

<Grid container className='' style={{padding:"40px" }}>
<Grid item xs={12} >
    <h1 className='px-5 fw-bold ' style={{color:"#071641"}}>The best travel nursing experience starts with IsentCare</h1>
</Grid>
<Grid container>
    <Grid className='px-5 py-2' item xs={12} md={6}>
        <p  style={{textAlign:"left", }}>As one of the top travel nursing agencies in the United States, IsentCare Healthcare Staffing is the ideal choice for healthcare professionals interested in becoming a travel nurse. With a dedicated recruiter, you can be assured that each assignment is selected with your best interests in mind. Your recruiter will work hard to find the perfect job for you and will provide you with support throughout the length of your travel nursing assignment. 

Make IsentCare Healthcare Staffing your go-to staffing agency for the best travel nursing experience – apply today!</p>
    <Button variant='contained' style={{backgroundColor:"#FF7600",borderRadius:"30px"}} onClick={()=>navigate("/apply")}  title='Apply Now'>Apply Now</Button>
    </Grid>
    <Grid item xs={12} md={6} >
        <img src={c3} style={{height:"400px",width:"100%",objectFit:"cover"}} />
    </Grid>
</Grid>
</Grid>
</div> 
    <div className=' container    ' >

<Grid container className='' style={{padding:"40px" }}>
<Grid item xs={12} >
    <h1 className='px-5 fw-bold ' style={{color:"#071641"}}>The best travel nursing experience starts with IsentCare</h1>
</Grid>
<div className='d-flex gap-3'>
<Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={c1}
          alt="green iguana"
        />
        <CardContent>
            <div className='d-flex justify-content-between'>
                <p style={{color:"#ff7600"}}>Travel Nursing</p>
                <p style={{color:"#ff7600"}}>1 min</p>
            </div>
          <Typography gutterBottom variant="h5" component="div">
            Travel Nurse Education and Information 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Travel nurse have the opportunity to help other while traveling the country.Here are the education requirements to become travel nurse
          </Typography>
          <Button className='fw-bold' variant='outlined' style={{color:"black",borderRadius:"40px"}} title='Read blog'>Read The blogs</Button>
        </CardContent>
      </CardActionArea>
    </Card>
<Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={c3}
          alt="green iguana"
        />
        <CardContent>
            <div className='d-flex justify-content-between'>
                <p style={{color:"#ff7600"}}>Travel Nursing</p>
                <p style={{color:"#ff7600"}}>1 min</p>
            </div>
          <Typography gutterBottom variant="h5" component="div">
            Travel Nurse Education and Information 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Travel nurse have the opportunity to help other while traveling the country.Here are the education requirements to become travel nurse
          </Typography>
          <Button className='fw-bold' variant='outlined' style={{color:"black",borderRadius:"40px"}} title='Read blog'>Read The blogs</Button>
        </CardContent>
      </CardActionArea>
    </Card>
<Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={c4}
          alt="green iguana"
        />
        <CardContent>
            <div className='d-flex justify-content-between'>
                <p style={{color:"#ff7600"}}>Travel Nursing</p>
                <p style={{color:"#ff7600"}}>1 min</p>
            </div>
          <Typography gutterBottom variant="h5" component="div">
            Travel Nurse Education and Information 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Travel nurse have the opportunity to help other while traveling the country.Here are the education requirements to become travel nurse
          </Typography>
          <Button className='fw-bold' variant='outlined' style={{color:"black",borderRadius:"40px"}} title='Read blog'>Read The blogs</Button>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
</Grid>
</div> 

<div className='bg-travel2 p-5 '  >
    <div className='container'>
       <h3 className='fw-bold   text-center'>“Kiley is simply the best! She is compassionate, caring, and understanding. Kiley has shown nothing but the best support in wanting to see others be successful. She has made traveling nursing a comfortable and great experience as a first-time traveler.”</h3> 
   <p className='text-center fw-bold'>- Maria M – Registered Nurse</p>
    </div>
    </div>
<div className='container'>

    <Grid container>
        <Grid item className='px-5 py-2' xs={12} md={6} >
                <img src={c4} style={{height:"350px",width:"100%",objectFit:"cover"}} />
            </Grid>
            <Grid item  xs={12} md={6}>
                <h1 className='fw-bold'>Our streamlined application process will make your travel nursing journey easy</h1>
                <p  style={{textAlign:"left", }}>Ready to make the leap and begin a career as a travel nurse? We have streamlined the application process so all you have to do is complete these easy-to-follow steps. Your dream of becoming a traveling nurse with IsentCare starts here.</p>
               <Button className='fw-bold' variant='outlined' style={{borderRadius:"30px",color:"black",}} onClick={()=>navigate("/jobs")}  title='Search Job'>serach jobs</Button>
            </Grid>
            
        </Grid>
</div>

<div className=' p-5 '  >
    <div className='container'>
       <h3 className='fw-bold   text-center'>Applying has never been easier!</h3> 
   <p className='text-center '>Ready to jumpstart an exciting new career in healthcare? Applying at IsentCare Healthcare Staffing is as easy as 1-2-3! Our streamlined three-step process helps experienced professionals and newcomers alike find the job of their dreams with ease. There's never been a better time to get started - let us help you start your journey with IsentCare today!</p>
    </div>
    </div>
    <div className=' container    ' >

<Grid container className='' style={{padding:"40px" }}>

<div className='d-flex gap-3'>
<Card sx={{ maxWidth: 300 }} style={{ position: "relative" }}>
      <CardContent >
        <Typography className='fw-bold' sx={{ fontSize: 16,color:"black" }}>
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
 
<div className='container' >

<Grid container className='' style={{padding:"40px" }}>
<Grid item xs={12} >
    <h1 className='px-5 fw-bold ' style={{color:"#071641"}}>The best travel nursing jobs in every state – find your perfect fit today!</h1>
</Grid>
<Grid  container>
    <Grid className='px-5 py-2' item xs={12} >
    <p>If you are an experienced and licensed nurse looking for the chance to travel, IsentCare Healthcare Staffing has got you covered! We offer unique nursing positions in some of the most sought-after destinations in the U.S. From busy hospitals in California to bustling clinics in New York, nurses have the chance to explore new environments and healthcare facilities when traveling with IsentCare.</p>
    </Grid>
    <Grid className='px-5 py-2' item xs={12} >
    <p>If you're looking for travel opportunities with an added layer of convenience, IsentCare also has travel nursing jobs in states that recognize the Nurse Licensure Compact (NLC) to make travel nursing even easier. With this type of license, you have the added convenience of exploring other states while still providing excellent patient care without having to worry about obtaining additional licensure.</p>
    </Grid>
    <Grid item className='px-5 py-2' xs={12}>
        <img width={"100%"} src={map} />
    </Grid>
    <Grid item className='px-5 py-2' xs={12}>
        <p>With exciting possibilities for adventure, new professional experiences, and personal growth, now is the perfect time to take your nursing career to the next level. IsentCare can make your travel dreams come true with top-notch job placements in the best healthcare facilities and destinations around the United States – connect with a recruiter today!</p>
    </Grid>
    <Grid item className='d-flex justify-content-center px-5 py-2' xs={12}>
        <Button variant='contained' className='fw-bold' style={{backgroundColor:"#ff7600",borderRadius:"30px"}} onClick={()=>navigate("/contact-us")}  title='Contact us'>Contact us</Button>
    </Grid>
</Grid>
</Grid>
</div> 

<div className=' container    ' >

<Grid container className='' style={{padding:"40px" }}>
<Grid item xs={12} >
    <h1 className='px-5 fw-bold ' style={{color:"#071641"}}>Explore other nursing job opportunities with IsentCare</h1>
</Grid>
<Grid container>
    <Grid className='px-5 py-2' item xs={12} md={6}>
        <p  style={{textAlign:"left", }}>If you are looking for more freedom and flexibility in your nursing career, but you want to remain in your local area, per diem (PRN) nursing might be the perfect option for you. At IsentCare Healthcare Staffing, our per diem nurses enjoy the many benefits of temporary assignments without having to commit to a long-term position or travel. As a per diem nurse, you'll be able to pick up local jobs when it works for you and take advantage of competitive pay rates and desirable locations. Discover what per diem nursing with IsentCare has to offer. View our current per diem opportunities now to find something perfect for you!</p>
    {/* <Button variant='contained' style={{backgroundColor:"#FF7600",borderRadius:"30px"}} title='Explore per diem'>Explore per diem</Button> */}
    </Grid>
    <Grid item xs={12} md={6} >
        <img src={c5} style={{height:"400px",width:"100%",objectFit:"cover"}} />
    </Grid>
</Grid>
</Grid>
</div> 

<div className='bg-travel2 p-5 '  >
    <div className='container'>
       <h3 className='fw-bold   text-center'>“IsentCare Healthcare is an amazing company to work for!! They care for their employees and everyone there is treated like family. If you love adventure then IsentCare is the best company to work for!”</h3> 
   <p className='text-center fw-bold'>- Covid-19 Field Outreach Specialist (Former Employee)</p>
    </div>
    </div>

    <div className=' container    ' >

        <Grid container className='' style={{padding:"40px" }}>
        <Grid item xs={12} >
            <h1 className='px-5 fw-bold ' style={{color:"#071641"}}>Earn extra money with IsentCare’s employee referral program</h1>
        </Grid>
        <Grid container>
        <Grid item className='px-5 py-2' xs={12} md={6} >
                <img src={c6} style={{height:"300px",width:"100%",objectFit:"cover"}} />
            </Grid>
            <Grid item  xs={12} md={6}>
                <p  style={{textAlign:"left", }}>Do you know a nurse that is interested in travel opportunities? Refer them to IsentCare! Our referral bonus program is open to employees and non-employees alike. For every referral you make to IsentCare, you have the chance to earn extra money as a reward for helping us find the best nursing talent out there. Refer your friends, family, or colleagues in the nursing community to IsentCare Healthcare Staffing today!</p>
                <div className='d-flex flex-column flex-md-row  gap-2'>
                {/* <Button variant='contain' style={{backgroundColor:"#FF6700",color:"white",borderRadius:"40px"}} title='Refer to someone'>refer someone today</Button> */}
                {/* <Button variant='outlined' style={{color:"blue ",border:"1px solid blue",borderRadius:"40px"}}>Find a Job</Button> */}
                    </div>
            </Grid>
            
        </Grid>
       
        </Grid>
    </div> 
    </>
  )
}

export default TravelNurse