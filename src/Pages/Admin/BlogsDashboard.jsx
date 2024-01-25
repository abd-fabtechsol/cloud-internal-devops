import {  Paper, Typography,Button } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React, {  useState } from 'react';
import {AdminButton, TableMui} from '../../components/mui';
import Paginate from '../../components/Paginate';
import useApi from '../../hooks/useApi';
import apiClient from '../../api/apiClient';
import { useEffect } from 'react';
import { trimDate, trimDates } from '../../components/trimDate';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import DeleteConfirmation from '../../components/core/DeleteConfirmation';
import ControlCenterSidebar from '../../components/ControlCenterSidebar';
let limit=10
const BlogsDashboard=()=>{
    const [count,setCount]=useState(0)
    const [blogs,setBlogs]=useState()
    const [loading, setLoading] = useState(false);
    const [current, setCurrent] = useState();
    const [deleteModal, setDeleteModal] = useState(false);
    const {data,error,request}=useApi((endpoint)=>apiClient.get(endpoint))
    const navigate = useNavigate();
    const [offset,setOffset]=useState(0)

    let Endpoint = `blogs/?limit=${limit}`;
    useEffect(()=>{
      fetchData(Endpoint)
    },[])
    const fetchData = async (endpoint) => {
      setLoading(true)
     const response= await request(endpoint)
     if(error)
     return 
    if(!count)
    setCount(response.data.count)
    const afterTrimming = trimDates(response.data.results, "created_at");

    afterTrimming && setBlogs(afterTrimming);
    setLoading(false)


    }



    const handlePageChange = (event,value) => {

      value=((value - 1) * limit)
      fetchData(Endpoint)
      setOffset(value)



    }

    const handleDelete= async (id)=>{
    
      const response= await apiClient.delete(`blog/${id}/`)
      if(response.status!=204)
      return 
      else{
       fetchData(Endpoint+offset)
        toast.success('deleted success fully')
 
        setDeleteModal(false)
      }
     }
     const handleTrash= async (id)=>{
    
      const response= await apiClient.put(`blog/${id}/`,{status:"T"})
      if(!response.ok)
      return 
     
      toast.success('Trashed successfully')
       fetchData(Endpoint)
 
     
     }
     const blogDetail=(item)=>{
    
    
      navigate('/manager/blog/detail/'+item.id,{state:item});
  
      }
    const blogEdit=(item)=>{
  
  
      navigate('/manager/blog/edit/'+item.id,{state:item});
  
      }
      return (
<div className='row'>
      <div className='col-md-3'>
        <ControlCenterSidebar/>
      </div>
      <div className='col-md-9'>
        <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
           <Helmet>
        <title>Blogs</title>
      </Helmet>
      {deleteModal && <DeleteConfirmation  values={{handleConfirm:()=>handleDelete(current.id),show:deleteModal,onHide:()=>setDeleteModal(false), message:`Are you sure you want to delete Candidate ${current.title}`}} />}
 
         <AdminButton onClick={()=>navigate('/manager/blog/add-new/')}
                              name="Add New"

                            />
        <Typography variant="h5" sx={{ marginBottom: "10px" }}>
      Blogs
        </Typography>

          <Box>
            <TableMui
              styleTableTh={{ fontWeight: "bold", whiteSpace: "nowrap" }}
              loading={loading}
              th={{
                title: "Title",
                    description: "Description",
                    created_at: "Date",
                    status:"Status",
                    actions:"Action",
              }}
              td={blogs}

              customFields={[
                {name:"status",data:(value,item)=>(
                <>
                   {value == "D" ? "Draft" : value == "T" ? "Trash" : "Publish"}
                    </> 
                  )},
                
                {name:"actions",data:(value,item)=>(
                <div className='d-flex gap-3 justify-content-center'>
            
             <AdminButton onClick={()=>handleTrash(item.id)}
                                        name="Trash"
                                        style={{backgroundColor:'red',"&:hover": { backgroundColor: "#e32636" }}}
                                        disabled={item.status=="T"}
                                      />
                <AdminButton onClick={()=>blogDetail(item)}
                                        name="Detail"
          
          
                                      />
                <AdminButton onClick={()=>blogEdit(item)}
                                        name="Edit"
                                        style={{  backgroundColor: "#b09150",
                                        "&:hover": { backgroundColor: "#c9a55a" }}}
                                      />
          
                <AdminButton className="btn btn-danger" style={{backgroundColor:'red',"&:hover": { backgroundColor: "#e32636" }}} onClick={()=>{
          
                  setCurrent(item)
                  setDeleteModal(true)
                }}
                                        name="Delete"
          
          
                                      />
                </div>
              )}]}
                />

          </Box>
          <Paginate count={count} limit={limit} onChange={handlePageChange}/>
          </Box>
          </div>
          </div>

      )
    }
    export default BlogsDashboard




