import React from 'react'
import apiClient from '../../../api/apiClient'
import { useState } from 'react'
import { useEffect } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import useApi from '../../../hooks/useApi'
import { PopupWithButton, TableMui } from '../../../components/mui'
import Paginate from '../../../components/Paginate'
import DeleteConfirmation from '../../../components/core/DeleteConfirmation'
import { SelectOptionEdit } from '../../../components/mui/SelectOption'
function PostionTypes(){
    let route="/PositionType/"
    const [selected,setSelected]=useState()
    const [value,setValue]=useState("")
    const [open,setopen]=useState(false)
    const [open1,setopen1]=useState(false)
    const [edit,setedit]=useState(false)
    const[positionType,setPositionType]=useState([])
    const[page,setPage]=useState(1)
    const [count, setcount] = useState(0);
    const [sortBy,setSortBy]=useState()
    const [data,setData]=useState()
    const [current, setCurrent] = useState();
    const [specialityValue,setSpecialityValue]=useState()
    const [deleteModal, setDeleteModal] = useState(false);
    useEffect(()=>{
        fetchSpciality()
      },[])
    useEffect(()=>{
        fetchSpciality()
      },[sortBy])
     
   
    async function fetchSpciality(page=1){
      const result=await apiClient.get(`/PositionType/?page=${page}&ordering=${sortBy}`)
      //console.log(result,"data")
      setData(result.data?.results)
      if(!count)
      if (!count||page==1) setcount(result.data.count);
     
     }
     const handlePageChange = (event, value) => {
      fetchSpciality(value);
    };
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
    fetchSpciality()
    resetSpciality()
      }
      const apiEdit=useApi((id,data)=>apiClient.put(route+id+"/",data))
      async function handleEdit(){
    const result =await apiEdit.request(selected.id,{name:value})
    if(!result.ok) return
    setopen(false)
    setValue("")
    fetchSpciality()
    resetSpciality()
      }
  
         async function deleteType(id) {
      
          const result=   await apiClient.delete(route+id)
          //console.log(result.ok);
          if(!result.ok) return
          resetSpciality()
          fetchSpciality()
          setDeleteModal(false)
           }
           async   function handleTransfer() {
            const result=await apiClient.patch(`/PositionTypeTransfer/${selected.id}/`,{to:specialityValue})
            //console.log(result);
            fetchSpciality()
            setSpecialityValue("")
             }
          
    return (

//         <div>
//             {data  && <div class="dropdown">
//   <button class="btn btn_bg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//    Position Type
//   </button>
//   <ul class="dropdown-menu" style={{maxHeight:200,overflowX:"hidden",overflowY:"auto"}} onScroll={handleScrollSpeciality}>
//   <li><button class="dropdown-item" 
//                   onClick={()=>setopen(true)}
//                    type="button">Add New</button></li>
//   <li><hr class="dropdown-divider"/></li>
//   {positionType.map(item=>(
//     <div className="d-flex justify-content-between me-3">

//       <li><button class="dropdown-item" 
//       onClick={()=>{
// setSelected(item)
// setValue(item.name)
// setedit(true)
//  setopen(true)
//       }}
//       type="button">{item.name}</button></li>
//          <div onClick={()=>deleteType(item.id)}>

// <i className="TEXT_second bi bi-trash3-fill"  />
// </div>
//     </div>
//                 ))}
  
//   </ul>
// </div>}


//   <PopupWithButton
//   title="New Position Type"
//   content={<> <Typography  sx={{ marginBottom: "10px" }}>

// </Typography>
// <Stack m={1}>
//               <TextField
//           label="Position Type"
//           size="large"
//           value={value}
//           fullWidth
//           focused
//           onChange={(e)=>setValue(e.target.value)}

//         />
//             </Stack>
  
//   </>}
//   isOpen={open}
//   loading={loading}
//   yesName="Yes"
//   yesClick={edit?handleEdit:handleSubmit}
//   cancelName="Cancel"
//   cancelClick={()=>{
    
//     setopen(false)
//     setValue("")
//     }}
// />
//         </div>

<>
<div className='d-flex justify-content-end p-2'>
<Button
          variant="contained" 
          color="info"
            style={{ textDecoration: "none" }}
            onClick={()=>{
              // setSelected(item)
              // setValue(item.name)
              setedit(false)
               setopen(true)
                    }}
        >
          Add Type
          </Button>
          </div>
<PopupWithButton
  title="Transfer Jobs"
  content={<> <Typography  sx={{ marginBottom: "10px" }}>

</Typography>
<Stack m={1} style={{width:300}}>{open1&&<PositionTypeDropdown defaultSelected={selected.name} value={specialityValue}  handleChange={setSpecialityValue} />}
            </Stack>
  
  </>}
  isOpen={open1}
  yesName="Yes"
  yesClick={()=>{handleTransfer()
    setopen1(false)
    
    setValue("")
  }}
  cancelName="Cancel"
  cancelClick={()=>{
    
    setopen1(false)
    setValue("")
    }}
/>
<PopupWithButton
  title={edit?"Edit Position Type":"New Position Type"}
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
  yesName="Yes"
  yesClick={edit?handleEdit:handleSubmit}
  cancelName="Cancel"
  cancelClick={()=>{
    
    setopen(false)
    setValue("")
    }}
/>
{deleteModal && <DeleteConfirmation  values={{handleConfirm:()=>deleteType(current.id),show:deleteModal,onHide:()=>setDeleteModal(false), message:`Are you sure you want to delete Type ${current.name}`}} />}
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
      
      name:"Title",
      total_jobs:'Total Jobs',
      actions:"Actions"
    
    }}
    td={ data}
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
              setValue(item.name)
              setedit(true)
               setopen(true)
                    }}
        >
          Edit
          </Button>
<Button
          variant="contained" 
          color="info"
          disabled={item.total_jobs === 0}
            style={{ textDecoration: "none" }}
            onClick={()=>{
              setSelected(item)
              setValue(item.name)
              setedit(true)
               setopen1(true)
                    }}
        >
          Transfer
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

export default PostionTypes

const PositionTypeDropdown = ({value,handleChange,defaultSelected,...otherProps}) => {
  
  const [data, setData] = useState([]);
  const [page,setPage]=useState(1)
  const [count,setCount]=useState()
  const {request}=useApi((route)=>apiClient.get(route))
useEffect(()=>{

  fetchData()
},[])

 
  async function fetchData(){
    const result=await request(`/PositionType/?page=${page}&page_size=10`)
    //console.log(result,"data")
    if(result.data.results)
    setData([...data,...result.data?.results.filter(x=>x.name!==defaultSelected)])
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
              defaultSelected={defaultSelected}
      required
      label="Speciality"
      name="position"
      value={value}
      inputProps={{ maxLength: 150 }}
      id="outlined-name"
      onChange={(e)=>handleChange(e.target.value)}
     
      data={data}
      fullWidth
      size={"small"}
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