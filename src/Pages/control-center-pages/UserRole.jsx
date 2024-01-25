import { Button, FormControlLabel, FormGroup, Paper, Switch, Typography } from '@mui/material'
import { current } from '@reduxjs/toolkit'
import React,{useContext, useEffect, useState} from 'react'
import ControlCenterSidebar from '../../components/ControlCenterSidebar'
import AddUserModal from './AddUserModal'
import Delpopup from '../../components/mui/Delpopup'
import useApi from '../../hooks/useApi'
import apiClient from '../../api/apiClient'
import { toast } from 'react-toastify'
import Paginate from '../../components/Paginate'
import DeleteConfirmation from '../../components/core/DeleteConfirmation'
import { Box } from '@mui/system'
import { TableMui } from '../../components/mui'
import { UserMenuOptions } from '../../components/mui/FieldEditDropdown'
import { useLocation, useParams } from 'react-router-dom'
import { useSelector } from "react-redux";
import { SocketContext } from '../../socket/SocketProvider'
import SideBarCandidate from '../../components/sidebar/SideBarCandidate'
import SearchHome from '../../components/mui/SearchBar'
export default ({role}) => {
  const location=useLocation()
 
    const [show,setShow]=useState(false)
    const [show1,setShow1]=useState(false)
    const [show2,setShow2]=useState(false)
    const [current,setCurrent]=useState()
    const [deleteModal, setDeleteModal] = useState(false);
    const [sortBy,setSortBy]=useState()
    const {token}=useSelector(state=>state.auth)
    const [keyword,setKeyword]=useState("");
    const [search,setSearch]=useState();
const [count,setCount]=useState(0)
const [page, setPage] = useState(1);
const queryParams = new URLSearchParams(location?.search);
const id=queryParams.get('id')


const [selectedValue,setSelectedValue]=useState()
const { request, data, loading } = useApi((route) => apiClient.get(route));

useEffect(() => {
  fetchData();
}, [page,role, sortBy,search,location]);


async function fetchData() {
  const result = await request(
    `/user/?page=${page}&role=${role}&ordering=${sortBy}&${keyword||"search"}=${search||""}&id=${id||""}`
  );
  if (!result.ok) return;
  setCount(result.data.count);
}

const handlePageChange = (_, value) => setPage(value);


async function handleDelete(id){
    const result=await apiClient.delete(`/user/${id}/`)
    if(!result.ok) return toast.error("Failed to delete")
    toast.success("Deleted Successfully")
    setDeleteModal(false)
    fetchData()
}

const handleApprove = async(id,key,e) => {
  if(isConnected){
console.log("...")
    socket.send(JSON.stringify({"type":"Candidate_Approve","Candidate_ID":id}));

  }
  else{
 
    console.log("xxx");
  }
  //   const result= await apiClient.patch(`/user/${id}/`,{[key]:value})
  //   if(!result.ok) return 
  


  };
  const handleSwitchChange = async(id,key,value) => {

      const result= await apiClient.patch(`/user/${id}/`,{[key]:value})
      if(!result.ok) return 
      fetchData()
    
  
  
    };
  
const handleDefaultAgency = async(id) => {
    
  const result= await apiClient.patch(`/SetDefaultAgency/${id}/`)
  if(!result.ok) return 
 fetchData()
};

const { socket, isConnected, subscribe,unsubscribe } = useContext(SocketContext);



  useEffect(() => {
    const handleSocketMessage = (data) => {
      console.log(``);
      
    //  data=JSON.parse(data)
    //   if(data?.type=="Candidate_Approve")
    //   fetchData()
      // Handle the received message specifically in this component
    };
  
    if (socket) 
      subscribe(handleSocketMessage);

      return () => {
        unsubscribe(handleSocketMessage);
      };
  }, [socket, subscribe,unsubscribe]);

//console.log(current,"curentttttttt");
// toast.error("No Data Found")
 //console.log("error");
 
  return (
    <div>
        {show&&<AddUserModal role={role} fetchData={fetchData} current={current} show={show} onHide={()=>setShow(false)}/>}
        {deleteModal && <DeleteConfirmation  values={{handleConfirm:()=>handleDelete(current.id),show:deleteModal,onHide:()=>setDeleteModal(false), message:`Are you sure you want to delete User ${current.first_name}`}} />}
    
        {show1&&current && <SideBarCandidate values={{ current, show:show1, setShow:setShow1 }} />}
        <div className='row'>
            <div className='col-md-3'>
                <ControlCenterSidebar/>
            </div>
            <div className='col-md-9'>
              
           
            <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px", }}>
      
            <div className='d-flex justify-content-between px-2 mb-2'>
                <Typography className="" color={"#00000"} variant="h5" sx={{ marginBottom: "10px" }}>
          {role=="HO"?"Hospitals":role=="AG"?"Agencies":"Candidates"}
        </Typography>
      {role=="AG"&&  <div class="agency-status align-items-center">
  <span >Default Agency  = &nbsp; </span>
  <span class="status-circle"></span>
</div>}

               {!location?.pathname?.includes("employee")&& <Button variant='contained' onClick={()=>{
                setCurrent(null)
                setShow(true)
                }}>{role=="AG"?"Add Agency":"Add Hospital"}</Button>}
                </div>
                <div className="d-flex flex-column align-items-center flex-md-row gap-2">
          <div class=" mb-3">
  

                <SearchHome 
              defaultLabel="Name or Email"
              
            data={[]}
            search={search}
            setSearch={setSearch} setKeyword={setKeyword} keyword={keyword}
            style={{ width: "255px"}}
            />
          </div>
        </div>
             
        <Box>
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
                first_name:"First Name",
                last_name:"Last Name",
                ...(role !== "CA" ? {  company:"Company" } : {}),
                email:"Email",
                is_active:"Active",
               
                ...(role === "HO" ? {  auto_listing:"Job Auto Approval" } : {}),
             
          actions: "Actions" 

            }}

            sortDisable={["status","worksite"]}
            loading={loading}
            td={data}
            // link={"/admin/new-job-detail/"}

            customFields={[
              {
                name: "first_name",
                data: (value,item) => (
                role=="CA"?  <Button className=''
                    style={{ textDecoration: "underline", color:"#000000", fontWeight:"bold" }}
                    onClick={
                            ()=>{
                              if(!item.candidate)
                              return
                              setCurrent(item.candidate)
                              setShow1(true)
                            }
    
                    }
                    title={value}
                  >
                    {value}
                  </Button>:<>{value}</>
                ),
              },
    
//               {
//                 name: "first_name",
//                 data: (value, item) => (
// item.is_default_agency?<span className='bg-success p-2 rounded' >{value}</span>:
// <span >{value}</span>
//                 ),
//               },
              {
                name: "is_active",
                data: (value, item) => (
                    <Switch  defaultChecked={value} disabled={!isConnected} onChange={(e)=>handleApprove(item.id,"is_active",e)} inputProps={{'aria-label': 'controlled'}}  />
            
               
                ),
              },
              {
                name: "auto_listing",
                data: (value, item) => (
                    <Switch  defaultChecked={value} onChange={(e)=>{handleSwitchChange(item.id,"auto_listing",e.target.checked)}} inputProps={{'aria-label': 'controlled'}}  />
            
               
                ),
              },
              {
                name: "actions",
                data: (value, item) => (
                  <UserMenuOptions     onEdit={() => {
                    setCurrent(item)
                    setShow(true)
                  }}
                  
                  onDelete={() => {
                            setCurrent(item)
                            setDeleteModal(true)
                          }}
                          onSelectDefaultAgency={() => {
                                 handleDefaultAgency(item.id)
                                  }}
                  role={role}
                  />
        
                ),
              },
            ]}
          />
        </Box>
     {data&&  <Paginate count={count} onChange={handlePageChange} />}
      </Box>
            </div>
           
        </div>

        </div>
  )
}


