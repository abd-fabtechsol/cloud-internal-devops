import { Box, Paper,  FormControl,
    InputAdornment,
    TextField,
    Typography,
    Autocomplete,
    Button,IconButton,Chip,Stack,Modal, Select, MenuItem, InputLabel, Checkbox, ListItemText, ListItemIcon, Pagination } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import AdminButton from '../../../components/mui/AdminButton';
import CloseIcon from '@mui/icons-material/Close';
import ClearIcon from '@mui/icons-material/Clear';
import React, { useState } from 'react';
import colors from '../../../config/colors';

import { AiOutlineClockCircle} from 'react-icons/ai';
import { CiLocationOn} from 'react-icons/ci';


const CorporateCareer = () => {
    return (
        <div className='container ' style={{backgroundColor:"#F0F1F2"}}>
            <Box component={Paper} style={{minHeight:"40vh"}}>
                <img style={{width:"100%"}}  src={require('../../../assets/AboutUs/corporate-banner.png')}/>
              
              <div className='mt-2'>
<div className='d-flex gap-3'>

                <FormControl className="m-0">
        <TextField
          size="small"
          variant="outlined"
        //   onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          
          }}
        />
      </FormControl>
      <AdminButton name={"Search"}/>
</div>
<JobFilters/>


              </div>
            
            </Box>
            <div className='row'>
<div className='col-6'>

            <Jobs/>
</div>
<div className='col-6'>

           <AboutSection/>
</div>
            </div>

        </div>
    );
};

export default CorporateCareer;




const CustomDropdown = ({ options, selected, setSelected, placeholder }) => {
  const handleChange = (event) => {
    const selectedOptions = event.target.value;
    setSelected(selectedOptions);
  };

  return (
    <FormControl sx={{ minWidth: 200 }}>
      <InputLabel id="multi-select-label" shrink={false}>{placeholder}</InputLabel>
      <Select
        labelId="multi-select-label"
        id="multi-select"
        multiple
        value={selected}
        onChange={handleChange}
        renderValue={() => null}
      >
        {options.map((item) => (
          <MenuItem key={item.value} value={item.label}>
            <Checkbox checked={selected.includes(item.label)} />
            <ListItemText primary={item.label} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
const CustomChip = ({ label, onDelete }) => {
  return (
    <Chip
      label={label}
      onDelete={onDelete}
      deleteIcon={<CloseIcon />}
    sx={{backgroundColor:colors.light}}
      variant="outlined"
    />
  );
};


const JobFilters = () => {
  const [selected, setSelected] = useState({
    location: [],
    employmentType: [],
    jobCategory: [],
  });

  const locationOptions = [
    { label: 'Boston, MA', value: 'c248107434b61001be5276abd69a0000' },
    { label: 'Brookfield, WI', value: 'c248107434b61001be52a37cd6350000' },
    { label: 'Chesterfield, MO', value: 'c248107434b61001be52791a016e0000' },
  ];

  const employmentTypeOptions = [
    { label: 'Full-time', value: 'full-time' },
    { label: 'Part-time', value: 'part-time' },
  ];

  const jobCategoryOptions = [
    { label: 'Category 1', value: 'category1' },
    { label: 'Category 2', value: 'category2' },
    { label: 'Category 3', value: 'category3' },
  ];

  const handleSelect = (field, values) => {
    setSelected((prevState) => ({ ...prevState, [field]: values }));
  };

  function handleDelete(key,item) {
  
  let data=  selected[key].filter(x=>x!==item)
  //console.log(data);

  handleSelect(key,data)
  }
  return (
    <div className='m-2'>

    <div className='d-flex gap-2'>
      <CustomDropdown
        options={locationOptions}
        selected={selected.location}
        setSelected={(values) => handleSelect('location', values)}
        placeholder="Location"
      />
      <CustomDropdown
        options={employmentTypeOptions}
        selected={selected.employmentType}
        setSelected={(values) => handleSelect('employmentType', values)}
        placeholder="Full/Part-time"
      />
      <CustomDropdown
        options={jobCategoryOptions}
        selected={selected.jobCategory}
        setSelected={(values) => handleSelect('jobCategory', values)}
        placeholder="Job Category"
      />

    </div>
      <div className="d-flex gap-2 py-3">
        {Object.entries(selected).flatMap(([key,values]) =>
          values.map((item) => <CustomChip  label={item} onDelete={()=>handleDelete(key,item)}/>)
        )}
      </div>
    </div>
  );
};

const Jobs = () => {

  const data=[
    {
      recruiter:"Recruiter (Travel Division)",
      location:"Overland Park, KS",
      date_posted:"Yesterday",
      street:"R-270"

    },
    {
      recruiter:"Recruiter",
      location:"Overland Park, KS",
      date_posted:"Yesterday",
      street:"R-270"

    },
    {
      recruiter:"Recruiter",
      location:"Overland Park, KS",
      date_posted:"Yesterday",
      street:"R-270"

    },
    {
      recruiter:"Recruiter",
      location:"Overland Park, KS",
      date_posted:"Yesterday",
      street:"R-270"

    },
    {
      recruiter:"Recruiter",
      location:"Overland Park, KS",
      date_posted:"Yesterday",
      street:"R-270"

    },
    {
      recruiter:"Recruiter",
      location:"Overland Park, KS",
      date_posted:"Yesterday",
      street:"R-270"

    },
    {
      recruiter:"Recruiter",
      location:"Overland Park, KS",
      date_posted:"Yesterday",
      street:"R-270"

    },
    {
      recruiter:"Recruiter",
      location:"Overland Park, KS",
      date_posted:"Yesterday",
      street:"R-270"

    },
    {
      recruiter:"Recruiter (Travel Division)",
      location:"Overland Park, KS",
      date_posted:"Yesterday",
      street:"R-270"

    },
    {
      recruiter:"Recruiter (Travel Division)",
      location:"Overland Park, KS",
      date_posted:"Yesterday",
      street:"R-270"

    },
    {
      recruiter:"Recruiter (Travel Division)",
      location:"Overland Park, KS",
      date_posted:"Yesterday",
      street:"R-270"

    },
    {
      recruiter:"Recruiter (Travel Division)",
      location:"Overland Park, KS",
      date_posted:"Yesterday",
      street:"R-270"

    },
    {
      recruiter:"Recruiter (Travel Division)",
      location:"Overland Park, KS",
      date_posted:"Yesterday",
      street:"R-270"

    },
    {
      recruiter:"Recruiter (Travel Division)",
      location:"Overland Park, KS",
      date_posted:"Yesterday",
      street:"R-270"

    },
    {
      recruiter:"Recruiter (Travel Division)",
      location:"Overland Park, KS",
      date_posted:"Yesterday",
      street:"R-270"

    },
  ]
    return (
        <Box component={Paper} className=' py-2'>
          <p className='px-3' style={{color:colors.medium}}><strong>32 Jobs Found</strong></p>
          <div className='border-top border-1' style={{borderColor:colors.medium}}></div>
            {data.map(item=>(
              <div className='px-3 '>
                <p style={{textDecoration:"underline"}}><strong>{item.recruiter}</strong></p>
            
            <div className="d-flex align-items-center gap-2 mb-1">


<CiLocationOn size={20}/> 



             <p className='mb-0'>{item.location}</p>

            </div>
            <div className="d-flex align-items-center gap-2 mb-1">

<AiOutlineClockCircle size={20}/>  <p className='mb-0'>{item.date_posted}</p>
</div>
               
                <p>{item.street}</p>
                <div className='border-top border-1' style={{borderColor:colors.medium}}></div>
              </div>
            ))}
            <Pagination/>
        </Box>
    );
};
const AboutSection = () => {
  const [text, setText] = useState(false)
    return (
        <Box component={Paper} className='p-3'>
            <div   >
              <div>

<img src={require("../../../assets/logo.png")}/>
              </div>
              <div id="section">
                <div className="article">
                  <p>
                   IsentCare is the nation’s premier provider of healthcare professionals, offering a full range of per diem, allied health, contract, and travel assignments, as well as permanent  </p>
                  <p className="moretext" style={!text ? { display: 'none' } : { display: 'block' }}>
                  placement opportunities. “IsentCare continues to set the industry standard for quality, service and integrity in healthcare staffing and services.
                    </p>
                </div>
                <button type="button" onClick={() => setText(!text)} className="btn btn-link moreless-button">{!text ? "Read More" : "Read Less"}</button>
                {/* <a class="moreless-button" href="#">Read more</a> */}
              </div>
            </div>
            <div>
              <h6>Introduce Yourself - "Future Applications"</h6>
           
           <p>This is for anyone who would like to submit their application and resume to IsentCare for us to have because you do not see a listed opening that fits your skill set.  If you are excited and want to join IsentCare, please record all of your information here.</p>
           <div className='d-flex justify-content-center'>

           <AdminButton variant='outlined' name={"Get Started"} />
           </div>
            </div>
        </Box>
    );
};




