import React,{useState,useEffect} from 'react'
import {Button,IconButton, Box,FormControlLabel,Grid,TextField,Typography, Switch, Radio, RadioGroup, FormLabel, FormControl } from "@mui/material";
import { Modal } from 'react-bootstrap';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import apiClient from '../../api/apiClient';
import { toast } from 'react-toastify';
const AddCommunication = ({fetchdata,item,current,show,onHide}) => {
    
      const initial={
type:item?.type||"",
value:item?.value||"",
comment:item?.comment||""
      }

        const[method,setMethod]=useState(initial)
        const[data,setData]=useState()
        const [page,setPage]=useState(1)
        const [editItem,setEditItem]=useState(item)
        const [message, setMessage] = useState({text:"",color:""});
        const handleChange = (key,value) => {
          setMethod({ ...method, [key]: value });
        };

        useEffect(()=>{
          fetchData()
        },[])
        const handleScroll = (event) => {
          const { scrollTop, clientHeight, scrollHeight } = event.target;
          //console.log(scrollTop,clientHeight,scrollHeight);
          if (scrollTop + clientHeight >= scrollHeight-1) {
            fetchData();
          }
        };
  async function  fetchData() {
    const result=await apiClient.get(`/CommunicationMethod/${current.id}/?page=${page}`)
          //console.log(result,"data")
          if(result.data.results)
          setData(result.data?.results)
          setPage(page+1)
  }
    
        
     
  
       
   
  
        const deleteRecord=async(id)=>{
          const result=await apiClient.delete(`/CommunicationMethod/${id}/`)
          if(!result.ok) return toast.error("error");
          await reset()
        }
        const reset=async()=>{
          const result=await apiClient.get(`/CommunicationMethod/${current.id}/`)
          //console.log(result,"data")
          if(result.data.results)
          setData(result.data?.results)
  
        }
  
        const handleSubmit = async (e) => {
          e.preventDefault()
          
          if(editItem){

            const result=await apiClient.put(`/CommunicationMethod/${editItem.id}/`,method)
            if(!result.ok) return //console.log(result);
            //console.log(result);
            toast.success("Success Updated new Communication Method")
            setMethod(initial)
            fetchdata()
           await reset()
          }
          else{
            const result=await apiClient.post(`/CommunicationMethod/${current.id}/`,method)
            if(!result.ok) return //console.log(result);
            //console.log(result);
            toast.success("Successfully added  Communication Method")
            fetchdata()
            reset()
          }
          onHide()
        
            };
           
      function resetErrors(){
              setMessage({message:"",color:""})
            }      
    
            
            return(
              <Modal
              show={show}
              onHide={onHide}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                  
                  style={{ zIndex: 2000 }}>
                 
                 <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                     
                      Communication Method
                     
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <form onSubmit={handleSubmit}>
                <Box>
                      <Grid container spacing={2} >
                        <Grid item xs={12} md={3} >
                        <TextField
                                    required
                                    label="Type"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={method.type}
                                    onChange={(e)=>handleChange("type",e.target.value)}
                                    onFocus={resetErrors}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                        </Grid>
                        <Grid item xs={12} md={3}>
                        
                        <TextField
                                    required
                                    label="Value"
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={method.value}
                                    onChange={(e)=>handleChange("value",e.target.value)}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                        </Grid>
                        <Grid item xs={12} md={3}>
                        <TextField
                                    required
                                    multiline
                                    label="Comment"
                                  
                                    inputProps={{ maxLength: 150 }}
                                    id="outlined-name"
                                    value={method.comment}
                                    onChange={(e)=>handleChange("comment",e.target.value)}
                                    fullWidth
                                    size={"small"}
                                    sx={{ marginBottom: "25px" }}
                                  />
                        </Grid>
                      
      </Grid>
      <Button className='my-2' variant="contained" type='submit'>Submit</Button>
           </Box>
                </form>
                {/* <Grid container>
                                   
                  
                   
                                   <table class="table">
                 <thead>
                   <tr>
                     
                     <th scope="col">Type</th>
                     <th scope="col">Value</th>
                     <th scope="col">Action</th>
                     
                   </tr>
                 </thead>
                 {data?.map((item,key)=>{
               
               return (
                <>
                 <tbody>
                   <tr>
                     
                     <td>{item.type}</td>
                     <td>{item.value}</td>
                     <td><Button variant="contained" onClick={()=>{  
                      setEditItem(item)      
                      const {id,...newData}=item               
                                     setMethod(newData)
                                       }}>Edit</Button>
                                       <Button sx={{backgroundColor:'red',marginLeft:"5px"}} onClick={()=>deleteRecord(item.id)} variant="contained">Delete</Button>
                                       </td>
                   </tr>
                  
                 </tbody>
                 </>
                                  )
                                  })}
               </table>
                                  
                                
                               </Grid> */}
                  </Modal.Body>
                  <Modal.Footer>
                   
                  </Modal.Footer>
              </Modal>
              )
      }

export default AddCommunication