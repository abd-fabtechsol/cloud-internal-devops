import React from 'react'
import apiClient from '../../../api/apiClient'
import { useState } from 'react'
import { useEffect } from 'react'
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material'
import { PopupWithButton, TableMui } from '../../../components/mui'
import useApi from '../../../hooks/useApi'
import DeleteConfirmation from '../../../components/core/DeleteConfirmation'
import { toast } from 'react-toastify';
import Paginate from '../../../components/Paginate'
import ReCAPTCHA from 'react-google-recaptcha'
const Status = () => {
    let route="/CandidateStatus/"
    const [selected,setSelected]=useState()
    const [deleteModal, setDeleteModal] = useState(false);
  const [current, setCurrent] = useState();
    const [value,setValue]=useState("")
    const [color,setColor]=useState("#f6b73c")
    const [open,setopen]=useState(false)
    const [edit,setedit]=useState(false)
    const [status, setStatus] = useState([]);
    const [count, setcount] = useState(0);
    const [page, setPage] = useState(1);
    const [sortBy,setSortBy]=useState()
    //  const [data,setData]=useState()
    
    useEffect(()=>{
        fetchData()
      },[])
    useEffect(()=>{
        fetchData()
      },[sortBy])
      const {request,data,error,loading}=useApi((route)=>apiClient.get(route))
      const handlePageChange = (event, value) => {
        fetchData(value);
      };
     async function fetchData(page=1){
        if(page==1&&count)
        setcount(0)
        const result= await request(`${route}?page=${page}&ordering=${sortBy}`)
        if(!result.ok) return 
        if(!count)
        if (!count||page==1) setcount(result.data.count);
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
         setDeleteModal(false)
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
    <>
    <div className='d-flex justify-content-end p-2'>
<Button
          variant="contained" 
          color="info"
            style={{ textDecoration: "none" }}
            onClick={()=>{
              // setSelected(item)
              // setValue(item.name)
              // setedit(true)
               setopen(true)
                    }}
        >
          Add Status
          </Button>
          </div>
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
    {deleteModal && <DeleteConfirmation  values={{handleConfirm:()=>deleteType(current.id),show:deleteModal,onHide:()=>setDeleteModal(false), message:`Are you sure you want to delete Position ${current.title}`}} />}
<TableMui
  onSort={(field,direction)=>{
    let value=direction=="asc"?field:"-"+field
                setSortBy(value)
              }}
    styleTableTh={{
      color: "#ffffff",
      fontWeight: "bold",
      whiteSpace: "nowrap",
      // bgcolor:getThemeColor(type,"primary")
    }}
    th={{
      
      title:"Title",
      actions:"Actions"
    
    }}
    td={data}
    // link={"/admin/new-job-detail/"}
  
    customFields={[
     
      {
        name: "actions",
        data: (value,item) => (
          <Box  className="d-flex  gap-3">
<Button
          variant="contained" 
          color="info"
            style={{ textDecoration: "none" }}
            onClick={()=>{
                setSelected(item) 
    setValue(item.title)
    setColor(item.color)
    setedit(true)
    setopen(true)
                      }}
          >
          Edit
          </Button>
<Button
          variant="contained" 
          color="error"
            style={{ textDecoration: "none" }}
            onClick={
                    ()=>{
                      setCurrent(item)
                      setDeleteModal(true)
                    }

            }
          >
          Delete
          </Button>
</Box>
     
        ),
      },
      
    ]}
  />
  <Paginate style={{ color: "white" }} count={count}  onChange={handlePageChange}/>
    </>
  )
}

export default Status
