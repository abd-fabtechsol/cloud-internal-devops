import React from 'react'
import apiClient from '../../../api/apiClient'
import { useState } from 'react'
import { useEffect } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { PopupWithButton, TableMui } from '../../../components/mui'
import useApi from '../../../hooks/useApi'
import DeleteConfirmation from '../../../components/core/DeleteConfirmation'
import Paginate from '../../../components/Paginate'
import SelectOption, { SelectOptionEdit } from '../../../components/mui/SelectOption'
const PositionSpeciality = () => {
  let route="/PositionSpeciality/"
    const [sortBy,setSortBy]=useState()
    const [data,setData]=useState()
    const [open,setopen]=useState(false)
    const [open1,setopen1]=useState(false)
    const [edit,setedit]=useState(false)
    const [deleteModal, setDeleteModal] = useState(false);
    const [value,setValue]=useState("")
  const [current, setCurrent] = useState();
  const [selected,setSelected]=useState()
    
    const[positionType,setPositionType]=useState([])
    const[page,setPage]=useState(1)
    const [count, setcount] = useState(0);
    async function fetchData(page=1) {
      if(page==1&&count)
        setcount(0)
      const result = await apiClient.get(`/PositionSpeciality/?page=${page}&ordering=${sortBy||""}`)
      if (!result.ok) return;
      //console.log(result.data.results,"jhjhjhj");
      setData(result.data.results)

        if (!count||page==1) setcount(result.data.count);
     
    }
    useEffect(() => {
      fetchData();
    }, []);
    useEffect(() => {
      if(sortBy)
      fetchData();
    }, [sortBy]);
    const handlePageChange = (event, value) => {
      fetchData(value);
    };

    async function resetSpciality(){
      //console.log(page)
      const result=await apiClient.get(`/PositionSpeciality/`)
      //console.log(result,"data")
      if(result.data.results)
      setPositionType(result.data?.results)
      setPage(1)
     }

    const apiSubmit=useApi((data)=>apiClient.post(route,data))
    async function handleSubmit(){
  const result =await apiSubmit.request({name:value})
  if(!result.ok) return
  setopen(false)
  setValue("")
  resetSpciality()
  fetchData();
    }
    const apiEdit=useApi((id,data)=>apiClient.put(route+id+"/",data))
    async function handleEdit(){
  const result =await apiEdit.request(selected.id,{name:value})
  if(!result.ok) return
  setopen(false)
  setValue("")
  resetSpciality()
  fetchData();
    }

       async function deleteType(id) {
    
        const result=   await apiClient.delete(route+id)
        setDeleteModal(false)
        //console.log(result.ok);
        if(!result.ok) return
        resetSpciality()
        fetchData();
         }

      async   function handleTransfer() {
        const result=await apiClient.patch(`/PositionSpecialityTransfer/${selected.id}/`,{to:specialityValue})
        //console.log(result);
        fetchData()
        setSpecialityValue("")
         }
         //console.log(value,"valuesfdfsd sdfs");
         const [specialityValue,setSpecialityValue]=useState()
         //console.log(data,"dsdsdsds");
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
              setedit(false)
               setopen(true)
                    }}
        >
          Add Speciality
          </Button>
          </div>
    <PopupWithButton
  title="Tranfer jobs"
  content={<> <Typography  sx={{ marginBottom: "10px" }}>

</Typography>
<Stack m={1} style={{width:300}}>
{open1&&<PositionSpecialityDropdown defaultSelected={selected.name} value={specialityValue} handleChange={setSpecialityValue} />}
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
  title={edit?"Edit Position Speciality":"New Position Speciality"}
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
  
  yesName="Yes"
  yesClick={edit?handleEdit:handleSubmit}
  cancelName="Cancel"
  cancelClick={()=>{
    
    setopen(false)
    setValue("")
    }}
/>
      
{deleteModal && <DeleteConfirmation  values={{handleConfirm:()=>deleteType(current.id),show:deleteModal,onHide:()=>setDeleteModal(false), message:`Are you sure you want to delete Speciality ${current.name}`}} />}
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
      
      name:"Speciality",
      total_jobs:'Total Jobs',
      actions:"Actions"
    
    }}
    td={data}
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
          Edit {data.total_jobs}
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

export default PositionSpeciality


const PositionSpecialityDropdown = ({value,handleChange,defaultSelected,...otherProps}) => {
  
  const [data, setData] = useState([]);
  const [page,setPage]=useState(1)
  const [count,setCount]=useState()
  const {request}=useApi((route)=>apiClient.get(route))
useEffect(()=>{

  fetchData()
},[])

 
  async function fetchData(){
    const result=await request(`/PositionSpeciality/?page=${page}&page_size=10`)
    //console.log(result,"data")
    if(result.data.results)
    setData([...data,...result.data?.results.filter(x=>x.name!==defaultSelected)])
    setPage(page+1)
    if(!count)
    setCount(result.data.count)
   }
   console.log(data,"data");
  
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