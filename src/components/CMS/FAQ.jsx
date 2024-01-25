import { Box, Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { TableMui } from '../mui'
import { UserMenuOptions } from '../mui/FieldEditDropdown'
import { toast } from 'react-toastify'
import apiClient from '../../api/apiClient'
import { useEffect } from 'react'
import Paginate from '../Paginate'
const faqs=[
  {
      question:"I am interested in traveling with IsentCare. What do I do?",
      answer:" You can view our current local or travel contract assignments here and apply to job, or you can apply directly here. If you have any questions about our travel nursing jobs, please call 800-755-1411.",
      color:"#E6F3FA"
  },
  {
      question:"I am interested in per diem work with IsentCare. What do I do?",
      answer:" You can view our current per diem assignments here and apply to a job, or you can apply directly here. If you have any questions about our per diem jobs, please contact your local branch office.",
      color:"#E6F3FA"
  },
  {
      question:"I am an allied health professional and am interested in working with IsentCare. What do I do?",
      answer:" You can view our current allied health assignments here and apply to a job, or you can apply directly here. If you have any questions about our allied health jobs, please call 866-535-1412.",
      color:"#E6F3FA"
  },
  {
      question:"I am interested in non-clinical job opportunities with IsentCare. What do I do?",
      answer:" Thank you for your interest in working at IsentCare! You can view our current corporate and branch job openings here.",
      color:"#E6F3FA"
  },
  {
      question:"I am interested in working at IsentCare’s corporate office or one of IsentCare’s local branch offices. Do you have any open jobs?",
      answer:" With over 25 local branch offices nationwide, we offer a wide variety of nursing, allied health, and non-clinical jobs at hospitals, surgery centers, long-term acute care facilities, nursing homes, assisted living facilities, rehab hospitals, schools, physician offices, behavior health facilities, and more. You can search our current jobs near you here.",
      color:"#E6F3FA"
  },
  {
      question:"What facilities do you staff?",
      answer:" With over 25 local branch offices nationwide, we offer a wide variety of nursing, allied health, and non-clinical jobs at hospitals, surgery centers, long-term acute care facilities, nursing homes, assisted living facilities, rehab hospitals, schools, physician offices, behavior health facilities, and more. You can search our current jobs near you here.",
      color:"#E6F3FA"
  },
  {
      question:"What are your pay rates?",
      answer:" Most jobs on our website include pay rate information. Pay rates can vary based on individual candidate experience, work type, client worksites, shift time, schedule, and more. For a pay rate on a specific job, please contact us..",
      color:"#E6F3FA"
  },
  {
      question:"What benefits does IsentCare offer?",
      answer:" IsentCare offers eligible employees a variety of benefits including health, dental, and vision insurance, paid vacation and sick time, paternal and disability leave, life insurance, 401k and Roth IRA retirement plans with an employer match, flexible work schedules, and more. You can view information on the benefits we offer here. If you have any questions about benefits that IsentCare offers or about your existing benefit plan, please email benefits@IsentCarestaffing.com.  ",
      color:"#E6F3FA"
  },
  {
      question:"I filled out an application on your website. What is the next step?",
      answer:"Thank you for your interest in working with IsentCare! A recruiter should be in touch soon; however, you can call 913-383-9734 to speak with a recruiter.",
      color:"#E6F3FA"
  },
  {
      question:"When can I start working?",
      answer:"The on-boarding process can vary based on the type of employment you are interested in, and requirements can also vary by client. Once you have met all IsentCare and client specific hiring criteria, you can begin working. For more on-boarding information, please contact your local branch office..",
      color:"#E6F3FA"
  },
  {
      question:"Do I have to work a set number of shifts or hours per week to remain active?",
      answer:" To remain in active status with IsentCare, you need to work at least one shift every 90 days. Aside from what is necessary to remain in active status, you can work as much or as little as you like, and you can submit your availability in our mobile app. You can view all our part-time and full-time jobs near you here.",
      color:"#E6F3FA"
  },
  {
    question:"I am unable to log into my employee profile on IsentCare’s website. What do I do?",
    answer:" From IsentCare’s website, in the Worker Login window you can click the “Forgot Password” button to reset your password. If you need further assistance logging into your employee profile, please call our 24/7 Customer Service line at 888-427-7019.",
    color:"#E6F3FA"
},
{
    question:"Where do I go in my employee profile on IsentCare’s website to find my skills and exams?",
    answer:" YOnce you are logged into your employee profile, click on the hamburger menu, from the menu click “Profile” to access your employee profile. Once in your profile, click the hamburger menu again and then click “Skills and Exams” to access your skills and exams. If you need further assistance logging into your employee profile, please call our 24/7 Customer Service line at 888-427-7019.",
    color:"#E6F3FA"
},
{
    question:"I am unable to log into UNA to complete my testing. What do I do?",
    answer:" To access your testing through UNA, log into your employee profile on IsentCare’s website. Once you are logged in, click on the hamburger menu, from the menu click “Profile” to access your employee profile. Once in your profile, click the hamburger menu again and then click “Skills and Exams”. From the Skills and Exams page you can access UNA and reset your password with the “Forgot Password” link. If you need further assistance logging into your employee profile, please call our 24/7 Customer Service line at 888-427-7019.",
    color:"#E6F3FA"
},
{
    question:"I am unable to log into my profile on the IsentCare mobile app. What do I do?",
    answer:" For assistance logging into the IsentCare mobile app, please call our 24/7 Customer Service line at 888-427-7019.",
    color:"#E6F3FA"
},
{
    question:"I am unable to log into Workday. What do I do?",
    answer:" For assistance logging into Workday, please call our 24/7 Customer Service line at 888-427-7019.",
    color:"#E6F3FA"
},
{
    question:"How do I update my direct deposit information?",
    answer:"You can update your direct deposit information in Workday. If you need assistance logging into Workday, please call our 24/7 Customer Service line at 888-427-7019.",
    color:"#E6F3FA"
},
{
    question:"How do I update my W4 information?",
    answer:" You can update your W4 information in Workday. If you need assistance logging into Workday, please call our 24/7 Customer Service line at 888-427-7019..",
    color:"#E6F3FA"
},
{
    question:"How can I access my W2?",
    answer:"You can access your 2021 and 2022 W2 in Workday. If you need assistance logging into Workday, please call our 24/7 Customer Service line at 888-427-7019. ",
    color:"#E6F3FA"
},
{
    question:"I need to cancel my shift. What do I do?",
    answer:"Please call your local branch office.",
    color:"#E6F3FA"
},
{
    question:"I have a question about my paycheck. What do I do?",
    answer:"If you have any questions about your paycheck, please call your local branch office.",
    color:"#E6F3FA"
},
{
    question:"If I am going to visit another state, can I work in that state with IsentCare?",
    answer:" You may work in another state provided you have a current nursing license for that state or a compact state (multi-state) license that allows you to work in other compact states. Contact a local branch office for assistance with finding work in the state you are visiting.",
    color:"#E6F3FA"
},
{
    question:"How can I get a letter verifying my employment with IsentCare Healthcare Staffing?",
    answer:" To receive an employment verification letter for your work at IsentCare please email employmentverifications@IsentCareStaffing.com.",
    color:"#E6F3FA"
},
{
    question:"How do I get in touch with someone in customer service?",
    answer:" To speak with a customer service representative from our 24/7 National Service Center please call 888-427-7019 or email customerservice@IsentCarestaffing.com.",
    color:"#E6F3FA"
},
]

const FAQ = () => {
    const [sortBy,setSortBy]=useState()
    const [show,setShow]=useState(false)
    const [data,setData]=useState()
    const [count, setCount] = useState(0);
    const [current, setCurrent] = useState();
    const fetchData=async(page = 1)=>{
      if(page==1&&count)
    setCount(0)
      const result=await apiClient.get(`/FAQ/?page=${page}`)
      if(!result.ok) return
      setData(result.data.results)
      // console.log(result);
      if (!count||page==1) setCount(result.data.count);

    }

    const postData=async()=>{
      for (const item of faqs) {
        const {color,...data}=item
        const res=await apiClient.post("/FAQ/",data)
        if(!res.ok)
        {
          console.log(res.data)
          break
        }
      }
    }
    useEffect(() => {
    fetchData()
    // postData()
    }, [])
    const handlePageChange = (event, value) => {
      fetchData(value);
    };
    const handleDelete=async(id)=>{
      const result=await apiClient.delete(`/FAQ/${id}/`)
      if(!result.ok) return toast.error("Can't Delete")
      toast.success("Delete Successfully!")
      fetchData()
     }
    //  console.log(current);
  return (
    <div style={{color:"black"}}>
    <div className='d-flex justify-content-end'>
  <Button  variant="contained" onClick={()=>{
    setCurrent()
    setShow(true)}}>ADD</Button>
    </div>
  { show &&<AddFaq show={show} onHide={()=>setShow(false)} fetchData={fetchData} item={current}/>}
  
  <Box>
    <TableMui
          onSort={(field,direction)=>{
let value=direction=="asc"?field:"-"+field
            setSortBy(value)
          }}
            styleTableTh={{
              color: "#ffffff",
              fontWeight: "bold",
              whiteSpace: "nowrap",
            }}
            th={{
                question:"Question",
                answer:"Answer",
                actions: "Actions" 
            }}

            // sortDisable={["status","worksite"]}
            // loading={loading}
            td={data}
            // link={"/admin/new-job-detail/"}

            customFields={[
           
                {
                    name: "question",
                    data: (value, item) => (
                     <p className='mb-0' title={value}>
                       
                        {value.length > 20 ? value.slice(0, 70) + "...":value}
                        </p>
                    ),
                  },
                {
                    name: "answer",
                    data: (value, item) => (
                     <p className='mb-0'  title={value}>
                      
                        {value.length > 20 ? value.slice(0, 70) + "...":value}
                       
                        </p>
                    ),
                  },
               
            
              {
                name: "actions",
                data: (value, item) => (
                  <UserMenuOptions   
                    onEdit={() => {
                    setCurrent(item)
                    setShow(true)
                    setShow(true)
                  }}
                  
                  onDelete={() => {
                            // setCurrent(item)
                            handleDelete(item.id)
                          }}
                  />
        
                ),
              },
            ]}
          />
          </Box>
          
           <Paginate style={{ color: "white" }} count={count}  onChange={handlePageChange}/>
        
    </div>
  )
}

export default FAQ

const AddFaq = ({show,onHide,fetchData,item}) => {
  // console.log(item,"item");
   let initialSate={
    question:item?.question || "",
    answer:item?.answer ||"",
   }
   const [faq,setFaq]=useState(initialSate)
   const handleChange=(key,value)=>{
    setFaq({...faq,[key]:value})
   }
   const handleSubmit=async(e)=>{
    e.preventDefault()
    let result;
    if(item){ result=await apiClient.patch(`/FAQ/${item.id}/`,faq)}
    else{
       result=await apiClient.post('/FAQ/',faq)
    }
   
    if(!result.ok) return toast.error("FAQ not submit")
    toast.success("FAQ Created")
    setFaq(initialSate)
    onHide()
    fetchData()
    // console.log(faq);
   }
  
    return (
      <>
      <Modal
             show={show}
             onHide={onHide}
             size="lg"
             aria-labelledby="contained-modal-title-vcenter"
             centered
             style={{ zIndex: "1300" }}
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                 
                 Add FAQs
                 
                </Modal.Title>
              </Modal.Header>
             <form onSubmit={handleSubmit}>
              <Modal.Body>
              <Grid container spacing={2}>
    
    <Grid item xs={12} md={6}>
    <TextField id="outlined-basic" fullWidth label="Question" value={faq.question} onChange={(e)=>handleChange("question",e.target.value)} placeholder='Enter Question Here'  InputLabelProps={{
          shrink: true,
        }} variant="outlined" />
    </Grid>
    <Grid item xs={12} md={6}>
    <TextField id="outlined-basic" fullWidth label="Answer" placeholder='Enter Answer Here' value={faq.answer} onChange={(e)=>handleChange("answer",e.target.value)}   InputLabelProps={{
          shrink: true,
        }} variant="outlined" />
    </Grid>
    
    </Grid>
            
              </Modal.Body>
              <Modal.Footer className="d-flex gap-2">
              
                  <Button type="submit" variant="contained">Submit</Button>
  
              </Modal.Footer>
              </form>
              </Modal>
      </>
    )
  }