import React ,{useState,useEffect}from 'react'
import { PopupWithButton } from "../components/mui";
import apiClient from "../api/apiClient";
import useApi from "../hooks/useApi";
import { Stack } from "react-bootstrap";
import { Chip, Grid, TextField, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'react-toastify';
const StatusCheck = ({filter,setFilter}) => {
  let route="/CandidateStatus/"
    const [selected,setSelected]=useState()
    const [value,setValue]=useState("")
    const [color,setColor]=useState("#f6b73c")
    const [open,setopen]=useState(false)
    const [edit,setedit]=useState(false)
    const [status, setStatus] = useState([]);
    const [count, setcount] = useState(0);
    const [page, setPage] = useState(1);
    
    useEffect(()=>{
        fetchData()
      },[])
      const {request,data,error,loading}=useApi((route)=>apiClient.get(route))
    
     async function fetchData(){
        // const result= await request(`${route}?page=${page}`)
        // if(!result.ok) return 
        // if(!count)
        // setcount(result.data.count)
        // setStatus([...status,...result.data?.results])
        // setPage(page+1)
      }
      async function reset(){
        const result= await request(`${route}`)
        if(!result.ok) return 
        setcount(result.data.count)
        setStatus(result.data?.results)
        setPage(page+1)
      }
      const apiSubmit=useApi((data)=>apiClient.post(route,data))
      async function handleSubmit(){
    const result =await apiSubmit.request({title:value,color})
    if(!result.ok) return
    setopen(false)
    setValue("")
    fetchData()
      }
      const apiEdit=useApi((id,data)=>apiClient.put(route+id,data))
      async function handleEdit(){
    const result =await apiEdit.request(selected.id,{title:value,color})
    if(!result.ok) return toast.error("error")
    toast.success("Succesfully Submitted")
    setopen(false)
    setValue("")
    fetchData()
    await reset()
      }
  
         async function deleteType(id) {
      
          const result=   await apiClient.delete(route+id)
          //console.log(result.ok);
          if(!result.ok) return
         fetchData()
         await reset()
           }
           
    
        const handleScroll = (event) => {
          const { scrollTop, clientHeight, scrollHeight } = event.target;
          if (scrollTop + clientHeight >= scrollHeight-1) {
            if(count>status.length)
          fetchData()
          }
        };
        const [captcha, setCaptucha] = React.useState(false);
          function onChange(value) {
            //console.log('Captcha value:', value);
            setCaptucha(true)
          }
          const key= process.env.REACT_APP_CAPTCHA_KEY
        
   
  return (

    <div>
        {data  &&  <div class="dropdown">
<button class="btn btn_bg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
{filter?.title? filter.title:"Status"}
</button>
<ul class="dropdown-menu" style={{maxHeight:"200px",overflowX:"hidden",overflowY:"auto"}} onScroll={handleScroll}>
<li><button class="dropdown-item" 
              onClick={()=>setopen(true)}
               type="button">Add New</button></li>
<li><hr class="dropdown-divider"/></li>
{status.map((item,key)=>(
<div className="d-flex justify-content-between me-3">

  <li style={{marginBottom:"5px"}} >
  <Chip style={{backgroundColor:item.color}} label={item.title}  onClick={()=>{{
    
    setFilter(item)
  
    }}} />
  </li>
  <div>
  <EditIcon onClick={()=>{setSelected(item) 
    setValue(item.title)
    setColor(item.color)
    setedit(true)
    setopen(true)}}/>
  <DeleteIcon onClick={()=>deleteType(item.id)}/>
    </div>
</div>
            ))}

</ul>
</div>}


<PopupWithButton
title="Status"
content={
<> <Typography  sx={{ marginBottom: "10px" }}>

</Typography>
<Stack m={1}>
          <TextField
      label="Text"
      size="large"
      name="title"
      value={value}
      fullWidth
      onChange={(e)=>setValue(e.target.value)}

    />
    <div style={{marginTop:"10px"}} >
    <label for="body">Select Color</label>
<input type="color" id="body" value={color} onChange={(e)=>setColor(e.target.value)} />

</div>
        </Stack>
        <Grid item xs={12} mt={2} sx={{display:"flex",justifyContent:"center"}}>
        {/* <ReCAPTCHA
                    sitekey={key}
                    onChange={onChange}
                  /> */}
        </Grid>

</>}
isOpen={open}
loading={loading}
yesName="Yes"
yesClick={edit?handleEdit:handleSubmit}
cancelName="Cancel"
captcha={!captcha}
cancelClick={()=>{

setopen(false)
setValue("")
}}
/>
    </div>
)
}

export default StatusCheck