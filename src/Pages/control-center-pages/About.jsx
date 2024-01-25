import React from 'react'
import ControlCenterSidebar from '../../components/ControlCenterSidebar'

import { MdPanoramaPhotosphere } from "react-icons/md";

export default () => {
  return (
    <div>
       <div className='row'>
      <div className='col-md-3'>
        <ControlCenterSidebar/>
      </div>
      <div className='col-md-9'>
        <h6>
          About
        </h6>
      <div className='p-3 text-dark'>
      <MdPanoramaPhotosphere size={50}/>
      <p>Version 2023.1.7</p>
      </div>
      </div>
      </div>
    </div>
  )
}
