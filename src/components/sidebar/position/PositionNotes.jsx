import { FaUserCircle } from "react-icons/fa";
import { Paper, Typography, Box } from '@mui/material';

export default ()=>{
    const data=[  {    "name": "Driver's License",    "status": "Active",    "effective_date": "2022-01-01",    "exp_date": "2027-12-31",    "states": "California"  },  {    "name": "CPR Certification",    "status": "Expired",    "effective_date": "2019-05-01",    "exp_date": "2022-04-30",    "states": "Multiple States"  }]
  
  
    return (
  <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
      <Typography variant="h5" sx={{ marginBottom: "10px" }}>
      {/* Currently Working Matches */}
      </Typography>
       <Box className="d-flex gap-2">
        <FaUserCircle size={30}/>
  
        <input className='form-control' type="text" name="" id="" placeholder='Add comment' />
  
    </Box>
    <div className="d-flex justify-content-end mt-2">
      <button type="button" class="btn btn-outline-primary">send</button>
      </div>
  
     </Box>
    )
  }
  