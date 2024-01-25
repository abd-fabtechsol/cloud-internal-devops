import React, { useEffect, useState } from 'react'
import apiClient, { mediaURL } from '../../api/apiClient';
import ControlCenterSidebar from '../../components/ControlCenterSidebar'
import { Helmet } from 'react-helmet';
import { Avatar } from '@mui/material';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

export default () => {
let initialState={
  first_name:"",
  last_name:""
}
  const [file, setFile] = useState(require("../../assets/profile.png"));
  const [data, setData] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState(initialState);
const dispatch=useDispatch()
  const handleChange = async(e) => {
    // alert("helijlo")
    // //console.log("first")
    // window.location.reload(true);
    const formdata=new FormData()
    formdata.append("logo",e.target.files[0])
    const result= await apiClient.patch(`/user/${data.id}/`,formdata)
    if(!result.ok) return
    //console.log("reload")
    
  };
  useEffect(()=>{
    fetchData()
  },[])

 async function fetchData(){
    const result= await apiClient.get("/UserInfo/")
    if(!result.ok) return 
    //console.log(result);
    setData(result.data)
    if(result?.data?.email)
    setEmail(result.data.email)
    if(result?.data?.first_name && result?.data?.last_name )
    setName({...name,first_name:result?.data?.first_name,last_name:result?.data?.last_name})

  }
  //console.log(name,"name");
  async function handleSubmitEmail(e){
    e.preventDefault()
    const result= await apiClient.patch(`/user/${data.id}/`,{email:email})
    if(!result.ok) return  toast.error("Failed Changed Email")
    toast.success("Changed Email")
     
    //console.log(result);
  }
  async function handleSubmitPassword(e){
    e.preventDefault()
    const result= await apiClient.patch(`/user/${data.id}/`,{password})
    if(!result.ok) return toast.error("Failed Changed Password")
    toast.success("Changed Password")
     
  }
  async function handleSubmitName(e){
    e.preventDefault()
    const result= await apiClient.patch(`/user/${data.id}/`,name)
    if(!result.ok) return toast.error("Failed Changed Name")
    toast.success("Changed Name")
   
  }
  const handleChangeName=(key,value)=>{
    setName({...name,[key]:value})
  }
  return (
    <div>
       <Helmet>
        <title>
          Control Center
        </title>
      </Helmet>
      <div className='row'>
      <div className='col-md-3'>
        <ControlCenterSidebar/>
      </div>
      <div className='col-md-9'>


      <p className='text-muted'>
      Personalize your account
      </p>
      {/* <p className='text-primary'>
      Supported extensions are jpeg, jpg & png. Maximum file size is 5 MB.
      </p> */}

      <div className='' >
      {/* <img className='img-fluid rounded-circle' src={data?.logo?(mediaURL+data.logo):file} alt="profile" /> */}
        <Avatar alt="Remy Sharp" src={data?.logo||file}   sx={{ width: 150, height: 150 }} />
        {/* <img width={"100%"} className=' rounded-circle' src={data?.logo||file} alt="profile" /> */}
      </div>
      <input hidden id="upload-img" type="file" onChange={handleChange} />

      <div className='mt-2 d-flex gap-2'>
      <label htmlFor='upload-img' className='btn btn_bg'>
        
        Upload Profile Picture
      </label>
      </div>

      <div className='col-md-8 mt-2'>
        <form onSubmit={handleSubmitEmail}>
        <label htmlFor="" style={{color:"black"}}>
         Login email
        </label>

      
      <div>
        <div className='d-flex justify-content-center align-items-center gap-3'>
        <input
        
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
     
     className='form-control' type="email" name="" id="" placeholder='google@gmail.com'  />
      
      <div>
      <button className='btn btn-outline-secondary'>
         Change
      </button>
        </div>
        </div>
       
      </div>
    
    
      </form>
      <form onSubmit={handleSubmitPassword}>
        <label htmlFor="" className='' style={{color:"black"}}>
         Password
        </label>

      
      <div >
        <div className='d-flex justify-content-center align-items-center gap-3'>
        <input
        placeholder='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
     
     className='form-control' type="password"   />
      
      <div>
      <button className='btn btn-outline-secondary'>
  Change
      </button>
        </div>
        </div>
       
      </div>
    
    
      </form>


      <form onSubmit={handleSubmitName}>
        <label htmlFor="" className='' style={{color:"black"}}>
         First Name
        </label>

      
      <div >
        <div className='d-flex justify-content-center align-items-center gap-3'>
        <input
        placeholder='First Name'
        value={name.first_name}
        onChange={(e)=>handleChangeName("first_name",e.target.value)}
     
     className='form-control'  />
      
      <div>
      <button className='btn btn-outline-secondary'>
  Change
      </button>
        </div>
        </div>
       
      </div>
        <label htmlFor="" className='' style={{color:"black"}}>
         Last Name
        </label>

      
      <div >
        <div className='d-flex justify-content-center align-items-center gap-3'>
        <input
        placeholder='Last Name'
        value={name.last_name}
        onChange={(e)=>handleChangeName("last_name",e.target.value)}
     
     className='form-control'  />
      
      <div>
      <button className='btn btn-outline-secondary'>
  Change
      </button>
        </div>
        </div>
       
      </div>
    
    
      </form>

      </div>




      </div>
      </div>
      </div>
      
  )
}


