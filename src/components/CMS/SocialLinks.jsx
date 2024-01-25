import { Button, FormControl, Grid, InputLabel, MenuItem, Select, Table, TableCell, TableRow, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { TableMui } from '../mui'
import { UserMenuOptions } from '../mui/FieldEditDropdown'
import apiClient from '../../api/apiClient'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import ErrorMessage from '../form/FieldErrorMessage'

const SocialLinks = () => {
    const [sortBy,setSortBy]=useState()
    const [data,setData]=useState()
    const [current,setCurrent]=useState()
    const [show,setShow]=useState(false)
    const fetchData=async()=>{
        const result=await apiClient.get("/CMSSettings/")
        if(!result.ok) return
        console.log(result);
        setData(result.data.results)

    }
   useEffect(() => {
     fetchData()
   }, [])
   console.log(data,"object");
  return (
    <div style={{color:"black"}}>
    {/* <div className='d-flex justify-content-end'>
  <Button  variant="contained" onClick={()=>setShow(true)}>ADD</Button>
    </div> */}
  {show && <AddLinks show={show} onHide={()=>setShow(false)} current={current} fetchData={fetchData}/>}
  <div className='d-flex justify-content-end'>
  <Button variant='contained' onClick={()=>{setCurrent(data[0])
                        setShow(true)
                    }}>
                        Edit
                    </Button>
                    </div>
                    <div className='table-container'>
      <Table  className="" >      
          <TableRow  className='row-style'>
              <TableCell variant="head">Facebook</TableCell>
              <TableCell>{data && data[0]?.facebook}</TableCell>
             
          </TableRow>     
          <TableRow  className='row-style'>
              <TableCell variant="head">Linkedin</TableCell>
              <TableCell>{data && data[0]?.linkedin}</TableCell>
          </TableRow>       
          <TableRow  className='row-style'>
              <TableCell variant="head">Instagram</TableCell>
              <TableCell>{data && data[0]?.instagram}</TableCell>
          </TableRow>     
          <TableRow  className='row-style'>
              <TableCell variant="head">Twitter</TableCell>
              <TableCell>{data && data[0]?.twitter}</TableCell>
          </TableRow>       
          <TableRow  className='row-style'>
              <TableCell variant="head">Height</TableCell>
              <TableCell>{data && data[0].height}</TableCell>
          </TableRow>       
          <TableRow  className='row-style'>
              <TableCell variant="head">Speed</TableCell>
              <TableCell>{data && data[0].speed}</TableCell>
          </TableRow>       
      </Table>
      </div>
    
    {/* <TableMui

            styleTableTh={{
              color: "#ffffff",
              fontWeight: "bold",
              whiteSpace: "nowrap",
            }}
            th={{
                facebook:"Facebook",
                instagram:"Instagram",
                linkedin:"Linkedin",
                twitter:"Twitter",
                height:"Poster Height",
                speed:"Carosal Speed",
                actions: "Actions" 
            }}

            // sortDisable={["status","worksite"]}
            // loading={loading}
            td={data}
            // link={"/admin/new-job-detail/"}

            customFields={[
           
                {
                    name: "facebook",
                    data: (value, item) => (
                     
                       <p title={value}>
                        {value.length > 20 ? value.slice(0, 20) + "...":value}
                        </p>
                    ),
                  },
                {
                    name: "instagram",
                    data: (value, item) => (
                     
                       <p title={value}>
                        {value.length > 20 ? value.slice(0, 20) + "...":value}
                        </p>
                    ),
                  },
                {
                    name: "twitter",
                    data: (value, item) => (
                     
                       <p title={value}>
                        {value.length > 20 ? value.slice(0, 20) + "...":value}
                        </p>
                    ),
                  },
                {
                    name: "linkedin",
                    data: (value, item) => (
                     
                       <p title={value}>
                        {value.length > 20 ? value.slice(0, 20) + "...":value}
                        </p>
                    ),
                  },
               
            
              {
                name: "actions",
                data: (value, item) => (
                    <Button variant='contained' onClick={()=>{setCurrent(item)
                        setShow(true)
                    }}>
                        Edit
                    </Button>
                
        
                ),
              },
            ]}
          /> */}
    </div>
  )
}

export default SocialLinks


const AddLinks = ({show,onHide,current,fetchData}) => {
    let initialState={
        facebook:current?.facebook||"",
        instagram:current?.instagram||"",
        linkedin:current?.linkedin||"",
        twitter:current?.twitter||"",
        speed:current?.speed||"",
        height:current?.height||"",
    }

    const [errors, setErrors] = useState();
    const[links,setLinks]=useState(initialState)
    const handleChange=(key,value)=>{
        setLinks({...links,[key]:value})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        // let socialErrors=validateSocialLinks(links)
        // if(Object.keys(socialErrors)?.length>0)
        // return setErrors(socialErrors)
        const result=await apiClient.patch(`/CMSSettings/${current.id}/`,links)
        if(!result.ok){
          if(result.data.non_field_errors)
          return toast.error(result.data.non_field_errors.join("\n"))
         else
          return setErrors(result.data)}
        toast.success("Update Successfully")
        fetchData()
        onHide()
       
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
                 
                 Update Social Link
                 
                </Modal.Title>
              </Modal.Header>
             <form onSubmit={handleSubmit}>
              <Modal.Body>
              <Grid container spacing={2}>
    
    
    <Grid item xs={12} md={6}>
    <TextField required id="outlined-basic" value={links.facebook} onChange={(e)=>handleChange("facebook",e.target.value)} fullWidth label="Facebook" type='url'  placeholder='Enter FaceBook Link Here'  
    InputLabelProps={{
          shrink: true,
        }}
         variant="outlined" />
           <ErrorMessage errors={errors?.facebook} />
    </Grid>
    <Grid item xs={12} md={6}>
    <TextField required id="outlined-basic" value={links.linkedin} onChange={(e)=>handleChange("linkedin",e.target.value)} fullWidth label="Linkedin" type='url' placeholder='Enter Linkedin Link Here'  
    InputLabelProps={{
          shrink: true,
        }}
         variant="outlined" />
           <ErrorMessage errors={errors?.linkedin} />
    </Grid>
    <Grid item xs={12} md={6}>
    <TextField required id="outlined-basic" value={links.twitter} onChange={(e)=>handleChange("twitter",e.target.value)} fullWidth label="Twitter"  type='url'placeholder='Enter Twitter Link Here'  
    InputLabelProps={{
          shrink: true,
        }}
         variant="outlined" />
           <ErrorMessage errors={errors?.twitter} />
    </Grid>
    <Grid item xs={12} md={6}>
    <TextField required id="outlined-basic" value={links.instagram} onChange={(e)=>handleChange("instagram",e.target.value)} fullWidth label="Instagram" type='url' placeholder='Enter Instagram Link Here'  
    InputLabelProps={{
          shrink: true,
        }}
         variant="outlined" />
           <ErrorMessage errors={errors?.instagram} />
    </Grid>
    <Grid item xs={12} md={6}>
    <TextField required id="outlined-basic" value={links.speed} 
       inputProps={{
        min:0,
        max:10
      }}
  helperText="Speed in Seconds"
    onChange={(e)=>handleChange("speed",e.target.value)} fullWidth label="Speed" type='Number' placeholder='Enter Carosal Speed'  
    InputLabelProps={{
          shrink: true,
        }}
         variant="outlined" />
           <ErrorMessage errors={errors?.speed} />
    </Grid>
    <Grid item xs={12} md={6}>
    <TextField
    
    inputProps={{
      min:300,
      max:600
    }}
    
    required id="outlined-basic" value={links.height} onChange={(e)=>handleChange("height",e.target.value)} fullWidth label="Height" type='Number' placeholder='Enter Poster Height'  
    helperText="Height in Pixels"
   InputLabelProps={{
          shrink: true,
        }}
         variant="outlined" />
           <ErrorMessage errors={errors?.height} />
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