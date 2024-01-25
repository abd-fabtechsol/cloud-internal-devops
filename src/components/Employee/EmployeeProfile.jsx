import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material';
import { useState } from 'react';
import Professional from './E-components/Professional';
import Employment from './E-components/Employment';
import Education from './E-components/Education';
import References from './E-components/References';
import Forms from './E-components/Forms';
import Benefits from './E-components/Benefits';
import Personal from './E-components/Personal';
import Match from './E-components/Match';
import TimeSheetEmployee from './E-components/TimeSheetEmployee';
import PositionAttachments from '../sidebar/position/PositionAttachments';
import CandidateAttachments from '../sidebar/candidate/CandidateAttachments';
import useApi from '../../hooks/useApi';
import apiClient from '../../api/apiClient';
import { toast } from 'react-toastify';
import EmployeeAttachments from '../sidebar/candidate/EmployeeAttachments';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function EmployeeProfile() {
  const [value, setValue] = useState(0);
 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  


  return (
    <div className='container py-5'>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="PERSONAL" {...a11yProps(0)} />
          {/* <Tab label="PROFESSIONAL" {...a11yProps(1)} /> */}
          <Tab label="Work Experience" {...a11yProps(1)} />
          <Tab label="EDUCATION" {...a11yProps(2)} />
          <Tab label="Matches" {...a11yProps(3)} />
          <Tab label="Timesheets" {...a11yProps(4)} />
          <Tab label="Attachments" {...a11yProps(5)} />
          {/* <Tab label="FORMS" {...a11yProps(5)} />
          <Tab label="BENEFITS" {...a11yProps(6)} /> */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Personal/>
    
       </TabPanel>




      {/* <TabPanel value={value} index={1}>
      <Professional/>
      </TabPanel> */}

      <TabPanel value={value} index={1}>
      <Employment/>
      </TabPanel>

      <TabPanel value={value} index={2}>
      <Education/>
      </TabPanel>

      {/* <TabPanel value={value} index={4}>
       <EmployeeAttachments />
      </TabPanel> */}

      {/* <TabPanel value={value} index={5}>
      <Forms/>
      </TabPanel>

      <TabPanel value={value} index={6}>
      <Benefits/>
      </TabPanel> */}
      <TabPanel value={value} index={3}>
      <Match/>
      </TabPanel>
      <TabPanel value={value} index={4}>
     <TimeSheetEmployee/>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <EmployeeAttachments />
      </TabPanel>
    </div>
  );
}