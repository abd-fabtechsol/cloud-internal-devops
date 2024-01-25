import { Box, Button, Grid, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'
import { TableMui } from '../mui'
import { UserMenuOptions } from '../mui/FieldEditDropdown'
import { Modal, ModalFooter } from 'react-bootstrap'
import apiClient from '../../api/apiClient'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import ErrorMessage from '../form/FieldErrorMessage'
const Home_Screen = () => {
    const [sortBy,setSortBy]=useState()
    const [show,setShow]=useState(false)
    const[current,setCurrent]=useState()
    const [data,setData]=useState()
    const fetchdata=async()=>{
      const result =await apiClient.get('/Advertisement/')
      if(!result.ok) return
      // console.log(result);
      setData(result.data.results)

    }
const handleDelete=async(id)=>{
  const result =await apiClient.delete(`/Advertisement/${id}/`)
  if(!result.ok) return
  toast.success("Delete Successfully!")
  fetchdata()
}

    useEffect(()=>{
      fetchdata()
    },[])
  return (
   <div style={{color:"black"}}>
    <div className='d-flex justify-content-end'>
  <Button  variant="contained" onClick={()=>{
    setCurrent()
    setShow(true)}}>ADD</Button>
    </div>
  {show &&<AddContent show={show} onHide={()=>setShow(false)} fetchdata={fetchdata} current={current}/>}
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
                title:"Title",
                subtitle:"Sub Title",
                link:"Link",
                actions: "Actions" 
            }}

            // sortDisable={["status","worksite"]}
            // loading={loading}
            td={data}
            // link={"/admin/new-job-detail/"}

            customFields={[
              {
                name: "title",
                data: (value, item) => (
                 
                   <p title={value}>
                    {value.length > 20 ? value.slice(0, 20) + "...":value}
                    </p>
                ),
              },
              {
                name: "subtitle",
                data: (value, item) => (
                 
                   <p title={value}>
                    {value.length > 20 ? value.slice(0, 20) + "...":value}
                    </p>
                ),
              },
              {
                name: "link",
                data: (value, item) => (
                 
                   <p title={value}>
                    {value.length > 20 ? value.slice(0, 20) + "...":value}
                    </p>
                ),
              },
    
               
            
              {
                name: "actions",
                data: (value, item) => (
                  <UserMenuOptions   
                    onEdit={() => {
                    setCurrent(item)
                    // setShow1(false)
                    // setShow2(true)
                    setShow(true)
                  }}
                  
                  onDelete={() => {
                           
                        handleDelete(item.id)
                
                          }}
                  />
        
                ),
              },
            ]}
          />     
  
   </div>
   )
}

export default Home_Screen



const AddContent = ({show,onHide,current,fetchdata}) => {
  let initial={
    title:current?.title||"",
    subtitle:current?.subtitle||"",
    link:current?.link||"",
    image:current?.image||"",
  }
  const [errors, setErrors] = useState();
   const [banner,setBanner]=useState(initial)
   const handleChange=(key,value)=>{
    setBanner({...banner,[key]:value})
   }

   const handleSubmit=async(e)=>{
    e.preventDefault()
    let formdata=new  FormData()
    formdata.append("title",banner.title)
    formdata.append("subtitle",banner.subtitle)
    formdata.append("link",banner.link)
    formdata.append("image",banner.image)
    let result;
    if(current){ result=await apiClient.patch(`/Advertisement/${current.id}/`,formdata)}
    else{ result=await apiClient.post("/Advertisement/",formdata)}
    if(!result.ok){
      if(result.data.non_field_errors)
      return toast.error(result.data.non_field_errors.join("\n"))
     else
      return setErrors(result.data)}
    toast.success("Banner Created!")
    fetchdata()
    onHide()
    // console.log(formdata);
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
               
               Add Content
               
              </Modal.Title>
            </Modal.Header>
           <form onSubmit={handleSubmit}>
            <Modal.Body>
            <Grid container spacing={2}>
  
  <Grid item xs={12} md={6}>
  <TextField id="outlined-basic" required fullWidth  value={banner.title} onChange={(e)=>handleChange("title",e.target.value)} label="Title" placeholder='Enter Title Here'  InputLabelProps={{
        shrink: true,
      }} variant="outlined" />
        <ErrorMessage errors={errors?.title} />
  </Grid>
  <Grid item xs={12} md={6}>
  <TextField id="outlined-basic" required value={banner.subtitle} onChange={(e)=>handleChange("subtitle",e.target.value)} 
  //  inputProps={{
  //       maxLength: 80,
  //     }}
        fullWidth label="Sub Title" placeholder='Enter Sub Title Here'  InputLabelProps={{
        shrink: true,
      }} variant="outlined" />
       <ErrorMessage errors={errors?.subtitle} />
  </Grid>
  <Grid item xs={12} md={6}>
  <TextField id="outlined-basic"required value={banner.link} onChange={(e)=>handleChange("link",e.target.value)}fullWidth label="Link" placeholder='Enter link Here' type='url'  InputLabelProps={{
        shrink: true,
      }} variant="outlined" />
       <ErrorMessage errors={errors?.link} />
  </Grid>
  <Grid item xs={12} md={6}>
  <TextField id="outlined-basic" required onChange={(e)=>handleChange("image",e.target.files[0])}fullWidth label="Background Image" type='file'   InputLabelProps={{
        shrink: true,
      }} variant="outlined" />
       <ErrorMessage errors={errors?.image} />
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





