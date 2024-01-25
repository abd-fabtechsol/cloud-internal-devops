import React from 'react'
import { Helmet } from 'react-helmet'
import ControlCenterSidebar from '../../components/ControlCenterSidebar'
import TabBars from '../../components/mui/TabBars'
import Home_Screen from '../../components/CMS/Home_Screen'
import FAQ from '../../components/CMS/FAQ'
import SocialLinks from '../../components/CMS/SocialLinks'
const CMS = () => {
  return (
    <>
     <Helmet>
        <title>
          Control Center
        </title>
      </Helmet>
      <div className='row'>
      <div className='col-md-3'>
        <ControlCenterSidebar/>
      </div>
      <div className='col-md-9'>
      <div style={{maxWidth:"100%",overflowX:"hidden"}}>
  
      
  <TabBars
    Titles={[
      "Home Screen Slider",
      "FAQ",
      "Home Settings"
    //   "WORK EXP./EDUCATION",
      // "CREDENTIALS",
    //   "MATCHES",
    //   "TIMESHEET",
    //   "ATTACHMENTS",
    ]}
    // <Credentials current={current}/>,
    Contents={[<Home_Screen />,
     <FAQ />,
     <SocialLinks />,
    //    <Matches current={current} fetchData={fetchData}/>,<CandidateTimesheet current={current}/>,<CandidateAttachments current={current}/>,
    ]}
  />
    </div>
      </div>
      </div>
    </>
  )
}

export default CMS