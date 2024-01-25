import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import apiClient from '../../api/apiClient'
import useApi from '../../hooks/useApi'
import moment from 'moment';
import { TfiUpload } from "react-icons/tfi";
import { Button, Grid, TextField } from '@mui/material';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import DateField from '../mui/DateField';
import SelectOption from '../mui/SelectOption';
import TimeField from '../mui/TimeField';
const TimeSheetModal = ({fetchData:fetchSheetData,current,show,onHide}) => {
  let initialState={
shift_pay_period:"",
shift_date : "",
punch_out : "",
punch_in : "",
total_hours : "",
trans_type : "",
bill_rate : "",
status_date : "",
last_time_status : "",
facility:"",
rejection : "",
ap_hold : "",
sent_to_ap_hold : "",
check_number : "",
epcf : "",
    match:"",
    
  }
  const [timeSheet,setTimeSheet]=useState(initialState)
  const [count, setcount] = useState(0);
  const [data, setData] = useState([]);

  const [page, setPage] = useState(1);
  const [sheetData, setSheetData] = useState({
    match:"",
    file:""
  });
  useEffect(()=>{
    fetchData()
  },[])
  let route="/matches/"
  const {request,error,loading}=useApi((route)=>apiClient.get(route))


 async function fetchData(){
    const result= await request(`/matches/?page=${page}`)
    //console.log(error,"error");
    if(error) return
    //console.log(count,"count");
    if(result.data.results)
    setData([...data,...result.data?.results.map(item=>{
      
      return {id:item.id,name:item.candidate_name+","+item.position_title}
    })])
    if(!count)
    setcount(result.data.count)
    setPage(page+1)
  }
  const handleChange=(key,value)=>{
    setTimeSheet({...timeSheet,[key]:value})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
  //   const format = 'hh:mm A'; // Time format with AM/PM
  // const clockIn = moment(timeSheet.punch_in, format);
  // const clockOut = moment(timeSheet.punch_out, format);

  // if (!clockIn.isValid() || !clockOut.isValid()) {
  //   toast.error('Invalid time format');
  //   return;
  // }

  // if (!clockIn.isBefore(clockOut)) {
  //   toast.error('Clock-out time should be after clock-in time');
  //   return;
  // }

  const format = 'hh:mm A'; // Time format with AM/PM
  const clockIn = moment(timeSheet.punch_in, format);
  const clockOut = moment(timeSheet.punch_out, format);

  if (!clockIn.isValid() || !clockOut.isValid()) {
    toast.error('Invalid time format');
    return;
  }

  if (!clockIn.isBefore(clockOut)) {
    toast.error('Clock-out time should be after clock-in time');
    return;
  }

  const duration = moment.duration(clockOut.diff(clockIn));
  const totalHours = duration.asHours();

  // Now you can use the `totalHours` value as needed
  //console.log('Total Hours:', totalHours);
    const formdata=new FormData()
    //console.log(timeSheet);
    // formdata.append("match",sheetData.match)
    // formdata.append("file",sheetData.file)
  const result=await apiClient.post("/TimeSheetCsv/",timeSheet)
  if(!result.ok) return toast.error("Failed")
  //console.log(result.data);
  onHide()
  toast.success("Added")
  fetchSheetData()
  }
  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.target;
    if (scrollTop + clientHeight >= scrollHeight-1) {
      //console.log(data.length,"etreterter");
      //console.log(count>data.length,"bvf");

   if(count>data.length)
    fetchData()
    }}
    useEffect(() => {
      fetchData()
    }, [])
  //console.log(data,"sdadasdasdasdasdas");
  return (
    <>
    <Modal
    show={show}
        onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ zIndex: "1300" }}>
    <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
               
                TimeSheet
               
              </Modal.Title>
            </Modal.Header>
            <form onSubmit={handleSubmit}>
            <Modal.Body>
          
            
            {/* <div className=" d-flex justify-content-center align-items-center m-3 rounded" style={{height:'300px', borderStyle:"dotted" }}>
                    <div className="d-flex flex-column align-items-center gap-1">
                  <label htmlFor="resumeUp">
                    <TfiUpload size={50}/>
                  </label>
                    </div>
                  </div>
                  <input type="file"  name="" id="resumeUp" hidden onChange={(e)=>handleChange("file",e.target.files[0])} /> */}
                  <Grid container my={3} spacing={2}>
                    <Grid item xs={12} md={6}>
                    <SelectOption
                      
                      required
                      label="Matches"
                      inputProps={{ maxLength: 150 }}
                      id="outlined-name"
                      data={data}
                    value={timeSheet.match}
                    onChange={(e)=>handleChange("match",e.target.value)}
                      fullWidth
                     
                      style={{ marginBottom: "25px", width:"100%" }}
                      MenuProps={{
                        PaperProps: {
                          onScroll: (e)=>handleScroll(e),
                          style: {
                            width:"300px",
                            maxHeight: "100px",
                            overflowY: "auto",
                          },
                        },
                      }}
                      
                    />
                   
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <DateField
               label="Shift Pay Period"
               type="date"
               id="outlined-name"
               onChange={(e)=>handleChange("shift_pay_period",e.target.value)}
               value={timeSheet.shift_pay_period}
               fullWidth
               sx={{ marginBottom: "25px" }}
             />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <DateField
               label="Shift Date"
               type="date"
               id="outlined-name"
               onChange={(e)=>handleChange("shift_date",e.target.value)}
               value={timeSheet.shift_date}
               fullWidth
               sx={{ marginBottom: "25px" }}
             />
                    </Grid>
               <Grid item xs={12} md={6}>
                    <TimeField
                                  required
                                  label="Punch In"
                                  name="pounch in"
                                  inputProps={{ maxLength: 150 }}
                                  id="outlined-name"
                                  onChange={(e)=>handleChange("punch_in",e.target.value)}
                                  value={timeSheet.punch_in}
                                  fullWidth
                                 
                                  sx={{ marginBottom: "25px" }}
                                />
             </Grid>
             <Grid item xs={12} md={6}>
                    <TimeField
                                  required
                                  label="Punch Out"
                                  name="pounch out"
                                  inputProps={{ maxLength: 150 }}
                                  id="outlined-name"
                                  onChange={(e)=>handleChange("punch_out",e.target.value)}
                                  value={timeSheet.punch_out}
                                  fullWidth
                                 
                                  sx={{ marginBottom: "25px" }}
                                />
             </Grid>
                    <Grid item xs={12} md={6}>
                    <DateField
               label="Status Date "
               type="date"
               id="outlined-name"
               onChange={(e)=>handleChange("status_date",e.target.value)}
               value={timeSheet.status_date}
               fullWidth
             
               sx={{ marginBottom: "25px" }}
             />
             </Grid>
             <Grid item xs={12} md={6}>
             <TextField  id="outlined-basic" label="Facility " onChange={(e)=>handleChange("facility",e.target.value)}
               value={timeSheet.facility}  style={{ padding: 0 }} fullWidth variant="outlined" />
             </Grid>
             <Grid item xs={12} md={6}>
             <TextField  id="outlined-basic" label="Transaction Type" onChange={(e)=>handleChange("trans_type",e.target.value)}
               value={timeSheet.trans_type}  style={{ padding: 0 }} fullWidth variant="outlined" />
             </Grid>
             <Grid item xs={12} md={6}>
             <TextField  id="outlined-basic" onChange={(e)=>handleChange("bill_rate",e.target.value)}
               value={timeSheet.bill_rate} type='number' label="Bill Rate" fullWidth  variant="outlined" />
             </Grid>
             <Grid item xs={12} md={6}>
             <TextField  id="outlined-basic" onChange={(e)=>handleChange("rejection",e.target.value)}
               value={timeSheet.rejection}label="Rejection " fullWidth  variant="outlined" />
             </Grid>
             <Grid item xs={12} md={6}>
             <DateField
               label="AP Hold Date"
               type="date"
               id="outlined-name"
               onChange={(e)=>handleChange("ap_hold",e.target.value)}
               value={timeSheet.ap_hold}
               fullWidth
               sx={{ marginBottom: "25px" }}
             />
             </Grid>
             <Grid item xs={12} md={6}>
             <DateField
               label="Sent To AP Hold Date"
               type="date"
               id="outlined-name"
               onChange={(e)=>handleChange("sent_to_ap_hold",e.target.value)}
               value={timeSheet.sent_to_ap_hold}
               fullWidth
               sx={{ marginBottom: "25px" }}
             />
             </Grid>
             <Grid item xs={12} md={6}>
             <TextField type='number' id="outlined-basic" onChange={(e)=>handleChange("check_number",e.target.value)}
               value={timeSheet.check_number}label="Check Number " fullWidth  variant="outlined" />
             </Grid>
             <Grid item xs={12} md={6}>
             <TextField  id="outlined-basic" onChange={(e)=>handleChange("epcf",e.target.value)}
               value={timeSheet.epcf}label="ePCF " fullWidth  variant="outlined" />
             </Grid>
                    </Grid>
                  <Grid item xs={12} className='d-flex justify-content-end'>
                  <Button type='submit' variant='contained'> Submit</Button>
                  </Grid>
            </Modal.Body>
            </form>
    </Modal>
    </>
  )
}

export default TimeSheetModal