import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import apiClient from '../../../api/apiClient'
import { toast } from 'react-toastify'
import LoadingOverlay from '../../mui/LoadingOverlay'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { SelectOption, TableMui } from '../../mui'
import CaptchaButton from '../../mui/CaptchaButton'
import colors from '../../../config/colors'
import { Modal } from 'react-bootstrap';
import { OnInputPhone } from '../../../modules/FormHelpers'
import CandidateOverview from '../../sidebar/candidate/CandidateOverview'
import EmployeeOverview from './EmployeeOverview'
// dummy data for table

export default () => {
  let initialState={
    first_name:"",
    last_name:"",
    middle_name:"",
    dob:"",
    email:"",
    gender:"",
    type:"",
    name:"",
    address_line_1:"",
    address_line_2:"",
    city:"",
    state:"",
    zip:"",
    country:"",
    phone_number:"",
    tax_id:""
  }
  const[personalinfo,setPersonalinfo]=useState(initialState)
    const [change, setChange] = useState(false);
    const [id, setId] = useState();
    const [addressId, setAddressId] = useState();
    const [option, setOption] = useState();
    const [candidate, setCandidate] = useState();
    const [load, setLoad] = useState(false);
    const [show, setShow] = useState(false);
    const [address, setAddress] = useState([]);
    const handleChange=(key,value)=>{
      setPersonalinfo({...personalinfo,[key]:value})
    }
    // const handleChange2=(key,value)=>{
    //   setAddress({...address,[key]:value})
    // }
    const handeSubmit =async (e) => {
      e.preventDefault();
    setLoad(true)
      // Create a new object with only the filled fields
      const filledFields = {};
      for (const key in personalinfo) {
        if (personalinfo[key] !== "") {
          filledFields[key] = personalinfo[key];
          //console.log(key,"key");
        }
      }
    
      // Log the object with filled fields
      //console.log(filledFields);
      // const result= await apiClient.patch(`/candidates/${id}/`,filledFields)
      // if(!result.ok) return toast.error("error")
      //console.log(result);
      toast.success("Successfully update")
      setPersonalinfo(initialState);
      // fetchCandidateData()
    }

    const deleteAddress=async(id)=>{
      setLoad(true)
      //console.log(id,"fsdfsdfsdfsdgfsdfsdfsdfsdfsd");
      const result=await apiClient.delete(`/CandidateAddress/${id}/`)
      if(!result.ok) return  toast.error("error");
      toast.success("Deleted")  
    // fetchCandidateData()
    }

const [data,setData]=useState()

    // async function fetchCandidateData(){
    //   setLoad(true)
    //   const result=await apiClient.get(`/candidates `)
    //   if(!result.ok) return
    //   //console.log(result?.data?.results[0],"result"); 
    //   const{ first_name,last_name, middle_name, dob, email, gender,phone_number,tax_id}=result?.data?.results[0]
    //   setData(result?.data?.results[0])
    //   const{  type,name,address_line_1, address_line_2, city,state, zip,country}=result?.data?.results[0].candidate_address[0]
    //   setAddress(result?.data?.results[0].candidate_address)
    //   setPersonalinfo({...personalinfo,first_name,last_name, middle_name, dob, email, gender,  type,name,address_line_1, address_line_2, city,state, zip,country,phone_number,tax_id})
    //   setLoad(false)
    //   setId(result?.data?.results[0]?.id)     
    //   }

useEffect(() => {
  // fetchData()
  // fetchCandidateData()
}, [])


  return (
    <div>
      
    <div>
  
      <div style={{backgroundColor:"#E7E8E8" }}>
            <Grid container padding={5}>
                <Grid  item xs={12} style={{backgroundColor:"#1682C3",}}>
                    <h3 className='text-white p-2 mb-0'>Personal Information</h3>
                </Grid>
              
                <div className='w-100'>
               
                  
                    
                          


              {/* {data&&  <EmployeeOverview fetchCandidateData={fetchCandidateData} current={data}/>} */}
                </div>
            </Grid>
            
            
      </div>
    
    </div>
    {/* <Box sx={{ display: 'flex',justifyContent:"center" }}>
      <CircularProgress />
    </Box> */}
    </div>
  )
}



const AddAddress = ({current,show,onHide}) => {
  let emptyFields={
    type:"",
    name:"",
    address_line_1:"",
    address_line_2:"",
    city:"",
    state:"",
    zip:"",
    country:""

  }
  const[address,setAddress]=useState(emptyFields)

  const handleChange=(key,value)=>{

    //console.log(key,value)
    if(key=="zip"&&value.length>10) return
    
    setAddress({...address,[key]:value})
  }
  const sendAddress=async(data)=>{
    const result=await apiClient.post(`/CandidateAddress/${current}/`,data)
    if(!result.ok) return toast.error("error");
    // toast.success("Successfully added ")
    onHide();
    //console.log(result);
  }
  const handleSubmit=(e)=>{
e.preventDefault();
let formdata=new FormData()
    formdata.append("type",address.type)
    formdata.append("name",address.name)
    formdata.append("address_line_1",address.address_line_1)
    formdata.append("address_line_2",address.address_line_2)
    formdata.append("city",address.city)
    formdata.append("country",address.country)
    formdata.append("state",address.state)
    formdata.append("zip",address.zip)
    sendAddress(formdata)
//console.log(address)
  }
  return(
    <Modal
    show={show}
    onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        
        style={{ zIndex: "1300" }}>
       
          <form onSubmit={handleSubmit}>
       <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           
            Add Address
           
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div style={{height:400,maxHeight:650,overflowX:"hidden"}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
                    <SelectOption
                
                required
                label="Address Type"
                name="position"
                inputProps={{ maxLength: 150 }}
                id="outlined-name"
                data={[
                {id:"Home Address",name:"Home Address"},
                {id:"Main Address",name:"Main Address"},
                {id:"Other Address",name:"Other Address"},
              
              ]}
              value={address.type}
              onChange={(e)=>handleChange("type",e.target.value)}
                fullWidth
                size={"small"}
                style={{ marginBottom: "25px", width:"100%" }}
              />
          </Grid>
          <Grid item xs={12} md={6}>
          <TextField
                              required
                              label="Name"
                              inputProps={{ maxLength: 150 }}
                              id="outlined-name"
                              value={address.name}
                              onChange={(e)=>handleChange("name",e.target.value)}
                              fullWidth
                              size={"small"}
                              sx={{ marginBottom: "25px" }}
                            />
          </Grid>
          <Grid item xs={12} md={6}>
          <TextField
                              required
                              label="Street"
                              inputProps={{ maxLength: 150 }}
                              id="outlined-name"
                              value={address.address_line_1}
                              onChange={(e)=>handleChange("address_line_1",e.target.value)}
                              fullWidth
                              size={"small"}
                              sx={{ marginBottom: "25px" }}
                            />
          </Grid>
          
          <Grid item xs={12} md={6}>
          <TextField
                              required
                              label="City"
                              inputProps={{ maxLength: 150 }}
                              id="outlined-name"
                              value={address.city}
                              onChange={(e)=>handleChange("city",e.target.value)}
                              fullWidth
                              size={"small"}
                              sx={{ marginBottom: "25px" }}
                            />
          </Grid>
          <Grid item xs={12} md={6}>
          <TextField
                              required
                              label="State"
                              inputProps={{ maxLength: 150 }}
                              id="outlined-name"
                              value={address.state}
                              onChange={(e)=>handleChange("state",e.target.value)}
                              fullWidth
                              size={"small"}
                              sx={{ marginBottom: "25px" }}
                            />
          </Grid>
          <Grid item xs={12} md={6}>
          <TextField
                              required
                              label="Zip Code"
                              type='number'
                              inputProps={{ maxLength: 10 }}
                              id="outlined-name"
                              value={address.zip}
                              onChange={(e)=>handleChange("zip",e.target.value)}
                              fullWidth
                              size={"small"}
                              sx={{ marginBottom: "25px" }}
                            />
          </Grid>
          <Grid item xs={12} md={6}>
          <TextField
                              required
                              label="Country"
                              inputProps={{ maxLength: 150 }}
                              id="outlined-name"
                              value={address.country}
                              onChange={(e)=>handleChange("country",e.target.value)}
                              fullWidth
                              size={"small"}
                              sx={{ marginBottom: "25px" }}
                            />
          </Grid>
         
          <Grid item xs={12} md={6}>
          <TextField
                              required
                              label="AddressLine 2"
                              inputProps={{ maxLength: 150 }}
                              id="outlined-name"
                              value={address.address_line_2}
                              onChange={(e)=>handleChange("address_line_2",e.target.value)}
                              fullWidth
                              size={"small"}
                              sx={{ marginBottom: "25px" }}
                            />
          </Grid>
        </Grid>
        <CaptchaButton
                      
            name="submit"
            type="submit"
            size="large"
            
            style={{
              backgroundColor: colors.primary,
              "&:hover": { backgroundColor: "#002370" },
              whiteSpace: "nowrap",
              mt: 3,
              mb: 2,
            }}
          />
        </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="contained" type="submit">Submitt</Button>
        </Modal.Footer> */}
        </form>
    </Modal>
    )
}