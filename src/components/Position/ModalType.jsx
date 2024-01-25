import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { AdminButton }from '../mui'
import { Button, Box, Grid, TextField } from "@mui/material";
import apiClient from '../../api/apiClient';
import { toast } from 'react-toastify';
import { SelectOptionEdit } from '../mui/SelectOption';
import { processErrors } from '../../modules/handleErrors';
const ModalType = ({fetchDataSide,current,show,onHide}) => {
        
        const [selected,setSelected]=useState("")
        const [rate,setRate]=useState()
        const [page,setPage]=useState(1)
        const [pages,setPages]=useState(1)
        const [record,setRecord]=useState([])
        const [ratesType,setRatesType]=useState([])
        const [editItem,setEditItem]=useState()


        async function fetchData(){
          let result=await apiClient.get(`/RateType/?page=${page}`)
          if(result.data.results)
          setRatesType([...ratesType,...result.data?.results])
          setPage(page+1)
             }
     
     
      useEffect(()=>{
        fetchData()
        fetchRecord()
      },[])
      const handleScroll = (event) => {
        const { scrollTop, clientHeight, scrollHeight } = event.target;
        //console.log(scrollTop,clientHeight,scrollHeight);
        if (scrollTop + clientHeight >= scrollHeight-1) {
          fetchData();
        }
      };
const fetchRecord=async()=>{
  const result=await apiClient.get(`/PositionRates/${current.id}/?page=${pages}`)
        //console.log(result,"data")
        if(result.data.results)
        setRecord(result.data?.results)
        // setPages(pages+1)
}
  
      const handleSubmitt=async(e)=>{
        e.preventDefault()
        if(editItem){
          let data={value:rate}
          if(selected)
          data={...data,ratesType:selected}
          const result=await apiClient.put(`/PositionRates/${editItem?.id}/`,data)
        if(!result.ok) return processErrors(result.data)
        }else{
        const result2=await apiClient.post(`/PositionRates/${current.id}/`,{ratetype:selected,value:rate})
        if(!result2.ok) return processErrors(result2.data)
      }
      fetchDataSide()
        await reset()
      }
      const reset=async()=>{
        setSelected("")
        setRate("")
        const result=await apiClient.get(`/PositionRates/${current.id}/`)
        //console.log(result,"data")
        if(result.data.results)
        setRecord(result.data?.results)
        fetchDataSide()
      }

     
 

      const deleteRecord=async(id)=>{
        const result=await apiClient.delete(`/PositionRates/${id}/`)
        if(!result.ok) return toast.error("error");
        await reset()
        fetchData()
      }
for (const item of record) {
  //console.log(item)
}
      
        return (
      <>
      <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ zIndex: "1300" }}
          >
          
          <form className="" onSubmit={handleSubmitt} >
          <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
               Rate Overview
              </Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
          <Box>
              
      
              <Grid container spacing={2}>
      
                 <Grid item  xs={12} md={6}>   
                      <SelectOptionEdit     
                                  required
                                  label="Rate Type"
                                  name="position"
                                  inputProps={{ maxLength: 150 }}
                                  defaultSelected={editItem?.title}           
                                  id="outlined-name"
                                  value={selected}
                                  onChange={(e)=>setSelected(e.target.value)}
                                  data={ratesType}
                                  fullWidth
                                  size={"small"}
                                  style={{ marginBottom: "25px", width:"100%" }}
                                  MenuProps={{
                                    PaperProps: {
                                      onScroll: (e)=>handleScroll(e,"status"),
                                      style: {
                                        maxHeight: "100px",
                                        overflowY: "auto",
                                      },
                                    },
                                  }}
                                />
                      </Grid>
         
               <Grid item xs={12} md={6}>
                
      
               { (editItem ||selected)&&<><TextField
                            required
                            type="number"
                            label="Rate"
                            name="position"
                            inputProps={{ maxLength: 150 }}
                            id="outlined-name"
                            value={rate}
      
                            onChange={(e)=>{setRate(e.target.value)}}
                            fullWidth
                            size={"small"}
                            style={{  width:"80%" }}
                          />
                          <AdminButton type="submit"
                          name="Add"
                          />
                          {/* <Button variant="contained" >{selected=="show"? "Edit":"Add"}</Button> */}
                          </>}
                </Grid>      
                </Grid>
                <Grid container>
                                   
                  
                   
                    <table class="table">
  <thead>
    <tr>
      
      <th scope="col">Type</th>
      <th scope="col">Value</th>
      <th scope="col">Action</th>
      
    </tr>
  </thead>
  {record.map((item,key)=>{

return (
 <>
  <tbody>
    <tr>
      
      <td>{item.title}</td>
      <td>{item.value}</td>
      <td><Button variant="contained" onClick={()=>{                       
                      setEditItem(item)
                      setRate(item.value)
                        }}>Edit</Button>
                        <Button sx={{backgroundColor:'red',marginLeft:"5px"}} onClick={()=>deleteRecord(item.id)} variant="contained">Delete</Button>
                        </td>
    </tr>
   
  </tbody>
  </>
                   )
                   })}
</table>
                   
                 
                </Grid>
      
      
      </Box>
      </Modal.Body>
           </form>
           </Modal>
          
          </>
        )
      }

export default ModalType