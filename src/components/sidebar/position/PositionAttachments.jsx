
import { TableMui } from '../../mui';
import { AiOutlineSearch } from "react-icons/ai";
import { Paper, Box } from '@mui/material';

export default ()=>{
    const data=[  {    "name": "Driver's License",    "status": "Active",    "effective_date": "2022-01-01",    "exp_date": "2027-12-31",    "states": "California"  },  {    "name": "CPR Certification",    "status": "Expired",    "effective_date": "2019-05-01",    "exp_date": "2022-04-30",    "states": "Multiple States"  }]
  
  
    return (
  <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
      {/* <Typography variant="h5" sx={{ marginBottom: "10px" }}>
      Currently Working Matches
      </Typography> */}
        <div className='col-md-5'>
    <div class="input-group mb-3">
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon1"
            >
              <AiOutlineSearch />
            </button>
            <input
              type="search"
              class="form-control"
              placeholder="Search by name"
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
          </div>
    </div>
  
       <Box>
       <TableMui
    styleTableTh={{color:"#ffffff", fontWeight: "bold", whiteSpace: "nowrap" }}
  th={{
    "name": "Name",
    "status": "Status",
    "effective_date": "Effective Date",
    "exp_date": "Exp. Date",
    "states": "States"
  }
  
  }
  td={data}
  
  />
  
   </Box>
  
    </Box>
    )
  }