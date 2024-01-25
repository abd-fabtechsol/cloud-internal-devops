import * as React from 'react';
import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { Box, Grid, Paper, TextField } from '@mui/material';
import useApi from '../../hooks/useApi';
import apiClient from '../../api/apiClient';
import { useEffect } from 'react';
import { AdminButton, SelectOption } from '../../components/mui';
import colors from '../../config/colors';
import { SelectOptionEdit } from '../../components/mui/SelectOption';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default ({values}) => {
  
const {fetchData,loading,FilterData,handleChange,state,clearFilter}=values
const theme = useTheme();
const isMdScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      
        <div className='container-fluid py-5'>
          <Grid container className='  px-3'>
            <Grid item xs={12} md={6} >
              <div>
              <img src={require("../../assets/job-search.png")} alt=""  style={{ width: isMdScreen?"100%":"", height:isMdScreen? "auto":"",objectFit:"contain"}} />
              </div>
            </Grid>   
       
             <Grid item xs={12} md={6} component={Paper} className=' p-3'>
             <form onSubmit={(e)=>{
                e.preventDefault()
                fetchData()}}>
              <div className=''>
              <div className='w-100'>
              <h4>
              Take Control of Your Career
              </h4>
              <p className=''>
              What kind of job are you looking for with IsentCare?
              </p>
              
                <Grid item xs={12} className=''>
              <SelectDropdown fullWidth label="Position Type" placeholder="Position Type"  endpoint={"PositionType"} value={FilterData.type} name={"type"} handleChange={handleChange} title='Position Type'/>
                </Grid>
                {/* <Grid item xs={8}>

                <MatchStatus sx={{ m: 1, width: 400 }}  value={FilterData.status}  handleChange={handleChange} title='Status'/>
          
                </Grid> */}
                <Grid item xs={12}>

                <LocationDropdown  defaultSelected={state?.location} label="Location"   endpoint={"PositionLocation"} value={FilterData.location} name={"location"}  title='Location' handleChange={handleChange}/>
          
          
                </Grid>
                {/* <Grid item sx={8}>
                <TextField  sx={{ m: 1, width: 400 }} id="outlined-basic" label="Choose a city" variant="outlined" />
                </Grid>

                <Grid item xs={8}>

<FormControl sx={{ m: 1, width: 400 }}>
  <InputLabel id="demo-multiple-checkbox-label">Select Class</InputLabel>
  <Select
    labelId="demo-multiple-checkbox-label"
    id="demo-multiple-checkbox"
    multiple
    value={personName}
    onChange={handleChange}
    input={<OutlinedInput label="Tag" />}
    renderValue={(selected) => selected.join(', ')}
  >
    {States.map((state) => (
      <MenuItem key={state} value={state}>
        <Checkbox checked={personName.indexOf(state) > -1} />
        <ListItemText primary={state  } />
      </MenuItem>
    ))}
  </Select>
</FormControl>
    </Grid> */}
    <Grid item xs={12}>

    <SelectDropdown  defaultSelected={state?.speciality}    label="Position Speciality"  endpoint={"PositionSpeciality"} title='Speaciality' value={FilterData.speciality} name="speciality" handleChange={handleChange}/>
          
    </Grid>

               
               
              
              </div>
              </div>
              <div className='  d-flex justify-content-between'>
              <AdminButton 
              title="Filter"
                        name="Filter"
                        type="Submit"
                        size="medium"
                        loading={loading}
                        style={{
                          backgroundColor: colors.primary,
                          "&:hover": { backgroundColor: "#002370" },
                          whiteSpace: "nowrap",
                        }}/>
              <AdminButton 
              title="Clear Filter"
                        name="Clear Filter"
                        // type="Submit"
                        onClick={clearFilter}
                        size="medium"
                        // loading={loading}
                        style={{
                          backgroundColor: colors.primary,
                          "&:hover": { backgroundColor: "#002370" },
                          whiteSpace: "nowrap",
                        }}/>
                        </div>
              </form>   
            </Grid>
     
                 
          </Grid>
        </div>
        
        </div>
  )
}


const SelectDropdown = ({endpoint,name,value, handleChange,...otherProps}) => {
  
  const [data, setData] = useState([]);
  const [page,setPage]=useState(1)
  const [count,setCount]=useState()
  const {request}=useApi((route)=>apiClient.get(route))
useEffect(()=>{

  fetchData()
},[])
 
  async function fetchData(){
    const result=await request(`/${endpoint}/?page=${page}&in_job=True`)
    //console.log(result,"data")
    if(result.data.results)
    setData([...data,...result.data?.results])
    setPage(page+1)
    if(!count)
    setCount(result.data.count)
   }
  
   const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.target;
    if (scrollTop + clientHeight >= scrollHeight-1) {
      //console.log(count>data.length,count,data.length);
      if(count>data.length)
      fetchData();
    }
  };

  return (
      <SelectOptionEdit
      fieldNames={{value:"name",name:"name"} } 
    fullWidth
      inputProps={{ maxLength: 150 }}
      id="outlined-name"
      value={value}
      onChange={(e)=>handleChange(name,e.target.value)}
    
      data={data}
     
      style={{ marginBottom: "25px", width:"100%" }}
      MenuProps={{
        PaperProps: {
          onScroll: handleScroll,
          style: {
            maxHeight: "300px",
            overflowY: "auto",
          },
        },
      }}
      {...otherProps}
    />
  );
};

const MatchStatus = ({value,handleChange,...otherProps}) => {
  


  
  const data=[
    {value:"OP",name:"Open"},
    {value:"PA",name:"Pending Approval"},
    {value:"AP",name:"Approved"},
    {value:"OH",name:"On Hold"},
    {value:"CL",name:"Closed"},
  
  ]
  


    return (
        <SelectOption
                      
      
        label="Status"
        name="position"
        inputProps={{ maxLength: 150 }}
        id="outlined-name"
        value={value}
        onChange={(e)=>handleChange("status",e.target.value)}
       
        data={data}
        fullWidth
        style={{ marginBottom: "25px", width:"100%" }}
  
        {...otherProps}
      />
    );
  };

  const LocationDropdown = ({endpoint,name,value, handleChange,...otherProps}) => {
  
    const [data, setData] = useState([]);
    const [page,setPage]=useState(1)
    const [count,setCount]=useState()
    const {request}=useApi((route)=>apiClient.get(route))
  useEffect(()=>{
  
    fetchData()
  },[])
   
    async function fetchData(){
      const result=await request(`/${endpoint}/?page=${page}&in_job=True`)
      //console.log(result,"data")
      if(result.data.results)
      setData([...data,...result.data?.results.map(item=>{
     return   {name:item.address+","+item.state,value:item.address+" "+item.state}
      })])
      setPage(page+1)
      if(!count)
      setCount(result)
     }
    
     const handleScroll = (event) => {
      const { scrollTop, clientHeight, scrollHeight } = event.target;
      if (scrollTop + clientHeight >= scrollHeight-1) {
        //console.log(count>data.length,count,data.length);
        if(count>data.length)
        fetchData();
      }
    };
  
    return (
      <SelectOptionEdit
      fieldNames={{value:"value",name:"name"} } 

      inputProps={{ maxLength: 150 }}
      id="outlined-name"
      value={value}
      onChange={(e)=>handleChange(name,e.target.value)}
     
      data={data}
      fullWidth
      style={{ marginBottom: "25px", width:"100%" }}
      MenuProps={{
        PaperProps: {
          onScroll: handleScroll,
          style: {
            maxHeight: "300px",
            overflowY: "auto",
          },
        },
      }}
      {...otherProps}
    />
  );
  };