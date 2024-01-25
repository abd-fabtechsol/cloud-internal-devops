import React from 'react'
import ControlCenterSidebar from '../../components/ControlCenterSidebar';
import { TableMui } from '../../components/mui';
import { Box, Button, Chip } from '@mui/material';
import apiClient from '../../api/apiClient';
import { useEffect } from 'react';
import { useState } from 'react';
import TabBars from '../../components/mui/TabBars';
import PositionSpeciality from './PositionControl.jsx/PositionSpeciality';
import PositionRate from './PositionControl.jsx/PositionRate';
import PositionType from './PositionControl.jsx/PositionType';
import { useSelector } from 'react-redux';
import Status from './PositionControl.jsx/Status';

const Setting = () => {
  const {userType}=useSelector(state=>state.auth)

  return (
   <>
   <div className='row'>
<div className='col-md-3'>
 <ControlCenterSidebar/>
</div>
<div className='col-md-9'>
  {userType=="HO"&&
        <TabBars
        Titles={[
          "Position Speciality",
           "Position Rate",
          "Position Type",
          // "ATTACHMENTS",
          // "Notes",
        ]}
        Contents={[
        <PositionSpeciality />, 
        <PositionRate/>,
         <PositionType/>,
        ]}
      />
    //   :<TabBars
    //   Titles={[
    //     "Status",
      
    //     // "ATTACHMENTS",
    //     // "Notes",
    //   ]}
    //   Contents={[
    //   <Status/>
    
    //   ]}
    // />
    }
</div>
</div>
   </>
  )
}

export default Setting
