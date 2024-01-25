import React from 'react'
import ControlCenterSidebar from '../../components/ControlCenterSidebar'


export default () => {
  return (
    <div>
       <div className='row'>
      <div className='col-md-3'>
        <ControlCenterSidebar/>
      </div>
      <div className='col-md-9'>
        <h6>
        Apperaance
        </h6>
        <div className='d-flex flex-column flex-md-row gap-2'>
        <div>
          <img   src={require("../../assets/light.png")} alt="" />
          <div>
          <label className='pe-2' htmlFor="light">Light Theme</label>
          <input className='' type="radio" name="theme" id="light" />
          </div>
        </div>
        <div>
          <img   src={require("../../assets/dark.png")} alt="" />
          <div>
          <label className='pe-2' htmlFor="dark">Dark Theme</label>
          <input type="radio" name="theme" id="dark" />
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}
