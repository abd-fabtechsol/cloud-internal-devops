import React,{useEffect, useState} from "react";
import TableMui from "../mui/TableMui";
import { AiOutlineSearch } from "react-icons/ai";
import { Box, Button, Drawer,Grid, Paper, TextField, Typography } from "@mui/material";
import TabBars from "../mui/TabBars";
import { RxCross2 } from "react-icons/rx";
import { BsArrowsFullscreen } from "react-icons/bs";
import { AiFillStar, } from "react-icons/ai";
import Divider from "@mui/material/Divider";
import { PopupWithButton } from "../mui";
import apiClient from "../../api/apiClient";
import useApi from "../../hooks/useApi";
import { Stack } from "react-bootstrap";
export default () => {
  return <div className="d-flex gap-5">
        <PostionSpeciality/>
        <PostionTypes/>
        <RateType/>
       </div>;
  };



    function PostionSpeciality(){
    let route="/PositionSpeciality/"
    const [selected,setSelected]=useState()
    const [value,setValue]=useState("")
    const [open,setopen]=useState(false)
    const [edit,setedit]=useState(false)
    const[positionType,setPositionType]=useState([])
    const[page,setPage]=useState(1)
    const [count, setcount] = useState(0);
    useEffect(()=>{
        // fetchData()
        fetchSpciality()
      },[])
      const {request,data,error,loading}=useApi(()=>apiClient.get(route))
    
    //  async function fetchData(){
    //     const result= await request()
    //     if(!result.ok) return 
    //     //console.log(result);
    //   }
      async function fetchSpciality(customPage){
        //console.log(page)
        const result=await apiClient.get(`/PositionSpeciality/?page=${customPage||page}`)
        //console.log(result,"data")
        if(!count)
        setcount(result.data.count)
        if(result.data.results)
        setPositionType([...positionType,...result.data?.results])
        //console.log(positionType)
        setPage(page+1)
       }
       async function resetSpciality(){
        //console.log(page)
        const result=await apiClient.get(`/PositionSpeciality/`)
        //console.log(result,"data")
        if(result.data.results)
        setPositionType(result.data?.results)
        setPage(1)
       }
      const handleScrollSpeciality = (event) => {
        const { scrollTop, clientHeight, scrollHeight } = event.target;
        if (scrollTop + clientHeight >= scrollHeight-1) {
          if(count>positionType.length)
        fetchSpciality();
        }
      };
      const apiSubmit=useApi((data)=>apiClient.post(route,data))
      async function handleSubmit(){
    const result =await apiSubmit.request({name:value})
    if(!result.ok) return
    setopen(false)
    setValue("")
    resetSpciality()
      }
      const apiEdit=useApi((id,data)=>apiClient.put(route+id,data))
      async function handleEdit(){
    const result =await apiEdit.request(selected.id,{name:value})
    if(!result.ok) return
    setopen(false)
    setValue("")
    resetSpciality()
      }
  
         async function deleteType(id) {
      
          const result=   await apiClient.delete(route+id)
          //console.log(result.ok);
          if(!result.ok) return
          resetSpciality()
           }
    return (

        <div>
            {data  &&  <div class="dropdown">
  <button class="btn btn_bg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Position Speciality
  </button>
  <ul class="dropdown-menu" style={{maxHeight:"200px",overflowX:"hidden",overflowY:"auto"}} onScroll={handleScrollSpeciality}>
  <li><button class="dropdown-item" 
                  onClick={()=>setopen(true)}
                   type="button">Add New</button></li>
  <li><hr class="dropdown-divider"/></li>
  {positionType.map(item=>(
    <div className="d-flex justify-content-between me-3">

      <li><button class="dropdown-item" 
      onClick={()=>{
setSelected(item)
setValue(item.name)
        setedit(true)
        setopen(true)
      }}
      type="button">{item.name}</button></li>
         <div onClick={()=>deleteType(item.id)}>

<i className="TEXT_second bi bi-trash3-fill"  />
</div>
    </div>
                ))}
              
  </ul>
</div>}


  <PopupWithButton
  title="New Position Speciality"
  content={<> <Typography  sx={{ marginBottom: "10px" }}>

</Typography>
<Stack m={1}>
              <TextField
          label="Position Speciality"
          size="large"
          value={value}
          fullWidth
          focused
          onChange={(e)=>setValue(e.target.value)}

        />
            </Stack>
  
  </>}
  isOpen={open}
  loading={loading}
  yesName="Yes"
  yesClick={edit?handleEdit:handleSubmit}
  cancelName="Cancel"
  cancelClick={()=>{
    
    setopen(false)
    setValue("")
    }}
/>
        </div>
    )
}

 function PostionTypes(){
    let route="/PositionType/"
    const [selected,setSelected]=useState()
    const [value,setValue]=useState("")
    const [open,setopen]=useState(false)
    const [edit,setedit]=useState(false)
    const[positionType,setPositionType]=useState([])
    const[page,setPage]=useState(1)
    const [count, setcount] = useState(0);
    useEffect(()=>{
        fetchSpciality()
      },[])
      const {request,data,error,loading}=useApi(()=>apiClient.get(route))
    
    //  async function fetchData(){
    //     const result= await request()
    //     if(!result.ok) return 
    //     //console.log(result);
    //   }
    async function fetchSpciality(){
      const result=await apiClient.get(`/PositionType/?page=${page}`)
      //console.log(result,"data")
      if(!count)
      setcount(result.data.count)
      if(result.data.results)
      setPositionType([...positionType,...result.data?.results])
      //console.log(positionType)
      setPage(page+1)
     }
     async function resetSpciality(){
      //console.log(page)
      const result=await apiClient.get(`/PositionType/`)
      //console.log(result,"data")
      if(result.data.results)
      setPositionType(result.data?.results)
      setPage(1)
     }
    const handleScrollSpeciality = (event) => {
      const { scrollTop, clientHeight, scrollHeight } = event.target;
      if (scrollTop + clientHeight >= scrollHeight-1) {
        if(count>positionType.length)
      fetchSpciality();
      }
    };
      const apiSubmit=useApi((data)=>apiClient.post(route,data))
      async function handleSubmit(){
    const result =await apiSubmit.request({name:value})
    if(!result.ok) return
    setopen(false)
    setValue("")
    resetSpciality()
      }
      const apiEdit=useApi((id,data)=>apiClient.put(route+id,data))
      async function handleEdit(){
    const result =await apiEdit.request(selected.id,{name:value})
    if(!result.ok) return
    setopen(false)
    setValue("")
    resetSpciality()
      }
  
         async function deleteType(id) {
      
          const result=   await apiClient.delete(route+id)
          //console.log(result.ok);
          if(!result.ok) return
          resetSpciality()
           }
    return (

        <div>
            {data  && <div class="dropdown">
  <button class="btn btn_bg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Position Type
  </button>
  <ul class="dropdown-menu" style={{maxHeight:200,overflowX:"hidden",overflowY:"auto"}} onScroll={handleScrollSpeciality}>
  <li><button class="dropdown-item" 
                  onClick={()=>setopen(true)}
                   type="button">Add New</button></li>
  <li><hr class="dropdown-divider"/></li>
  {positionType.map(item=>(
    <div className="d-flex justify-content-between me-3">

      <li><button class="dropdown-item" 
      onClick={()=>{
setSelected(item)
setValue(item.name)
setedit(true)
 setopen(true)
      }}
      type="button">{item.name}</button></li>
         <div onClick={()=>deleteType(item.id)}>

<i className="TEXT_second bi bi-trash3-fill"  />
</div>
    </div>
                ))}
  
  </ul>
</div>}


  <PopupWithButton
  title="New Position Type"
  content={<> <Typography  sx={{ marginBottom: "10px" }}>

</Typography>
<Stack m={1}>
              <TextField
          label="Position Type"
          size="large"
          value={value}
          fullWidth
          focused
          onChange={(e)=>setValue(e.target.value)}

        />
            </Stack>
  
  </>}
  isOpen={open}
  loading={loading}
  yesName="Yes"
  yesClick={edit?handleEdit:handleSubmit}
  cancelName="Cancel"
  cancelClick={()=>{
    
    setopen(false)
    setValue("")
    }}
/>
        </div>
    )
}

 function RateType(){
    let route="/RateType/"
    const [selected,setSelected]=useState()
    const [value,setValue]=useState("")
    const [open,setopen]=useState(false)
    const [edit,setedit]=useState(false)
    const[positionType,setPositionType]=useState([])
    const[page,setPage]=useState(1)
    const [count, setcount] = useState(0);
    useEffect(()=>{
      fetchSpciality()
      },[])
      const {request,data,error,loading}=useApi(()=>apiClient.get(route))
    
    //  async function fetchData(){
    //     const result= await request()
    //     if(!result.ok) return 
    //     //console.log(result);
    //   }
    async function fetchSpciality(){
      const result=await apiClient.get(`/RateType/?page=${page}`)
      //console.log(result,"data")
      if(!count)
      setcount(result.data.count)
      if(result.data.results)
      setPositionType([...positionType,...result.data?.results])
      //console.log(positionType)
      setPage(page+1)
     }
     async function resetSpciality(){
      //console.log(page)
      const result=await apiClient.get(`/RateType/`)
      //console.log(result,"data")
      if(result.data.results)
      setPositionType(result.data?.results)
      setPage(1)
     }
    const handleScrollSpeciality = (event) => {
      const { scrollTop, clientHeight, scrollHeight } = event.target;
      if (scrollTop + clientHeight >= scrollHeight-1) {
        if(count>positionType.length)
      fetchSpciality();
      }
    };
      const apiSubmit=useApi((data)=>apiClient.post(route,data))
      async function handleSubmit(){
    const result =await apiSubmit.request({title:value})
    if(!result.ok) return
    setopen(false)
    setValue("")
    resetSpciality()
      }
      const apiEdit=useApi((id,data)=>apiClient.put(route+id,data))
      async function handleEdit(){
    const result =await apiEdit.request(selected.id,{title:value})
    if(!result.ok) return
    setopen(false)
    setValue("")
    resetSpciality()
      }
  
         async function deleteType(id) {
      
          const result=   await apiClient.delete(route+id)
          //console.log(result.ok);
          if(!result.ok) return
          resetSpciality()
           }
    return (

        <div>
            {data  && <div class="dropdown">
  <button class="btn btn_bg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Position Rate
  </button>
  <ul class="dropdown-menu" style={{maxHeight:"200px",overflowX:"hidden",overflowY:"auto"}} onScroll={handleScrollSpeciality}>
  <li><button class="dropdown-item" 
                  onClick={()=>setopen(true)}
                   type="button">Add New</button></li>
  <li><hr class="dropdown-divider"/></li>
  {positionType.map(item=>(
    <div className="d-flex justify-content-between me-3">

      <li><button class="dropdown-item" 
      onClick={()=>{
setSelected(item)
setValue(item.title)
setedit(true)
 setopen(true)
      }}
      type="button">{item.title}</button></li>
         <div onClick={()=>deleteType(item.id)}>

<i className="TEXT_second bi bi-trash3-fill"  />
</div>
    </div>
                ))}
  
  </ul>
</div>}


  <PopupWithButton
  title="New Position Rate Type"
  content={<> <Typography  sx={{ marginBottom: "10px" }}>

</Typography>
<Stack m={1}>
              <TextField
          label="Position Rate Type"
          size="large"
          value={value}
          fullWidth
          focused
          onChange={(e)=>setValue(e.target.value)}

        />
            </Stack>
  
  </>}
  isOpen={open}
  loading={loading}
  yesName="Yes"
  yesClick={edit?handleEdit:handleSubmit}
  cancelName="Cancel"
  cancelClick={()=>{
    
    setopen(false)
    setValue("")
    }}
/>
        </div>
    )
}
