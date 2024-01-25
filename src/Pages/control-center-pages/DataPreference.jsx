import React,{useState} from 'react'
import ControlCenterSidebar from '../../components/ControlCenterSidebar'

export default () => {
 
  const [preference,setPreference]=useState({position:"",
  location:""}) 
  const handleChange=(key,value)=>{
    setPreference({...preference,[key]:value})
  }
  //console.log(preference)
  return (
    <div>
       <div className='row'>
      <div className='col-md-3'>
        <ControlCenterSidebar/>
      </div>
      <div className='col-md-9'>
        <h6>
        Data Preferences
        </h6>

        <div>
              <label htmlFor="">
              Select position types:
              </label>

              <select class="form-select" aria-label="Default select example" onChange={(e)=>handleChange("position",e.target.value)}>
                <option selected></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
      </div>
      
      <div className='mt-2'>
        <label htmlFor="">
        Select location:
        </label>
        <select class="form-select" aria-label="Default select example" onChange={(e)=>handleChange("location",e.target.value)} >
          <option selected>12</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
      </select>
      </div>

      </div>
      </div>
    </div>
  )
}
