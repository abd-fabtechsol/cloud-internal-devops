import React, { useState } from 'react'
import { FaUserCircle, FaQuestionCircle  } from "react-icons/fa";
import { AiFillSetting,  } from "react-icons/ai";
import { MdNotificationsActive,  } from "react-icons/md";
import { GoTools,  } from "react-icons/go";
import { MdError,  } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import { Link, NavLink, useOutletContext } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
export default () => {
    const {type} =useOutletContext()
    function getUserRoute(){
        if(type=="AG")
        return "/agencies/"
        else if(type=="HO")
        return "/hospitals/"
        else if(type=="AD")
        return "/manager/"
        }
        const routeType=getUserRoute()
        
  return (
    <div>
        <ul className=' control_center_sidebar rounded d-flex flex-row flex-md-column justify-content-center border' style={{listStyle:"none", backgroundColor:"grey", overflowX:"auto"}}>
               <NavLink className="" activeClassName="" to={routeType+"profile"} style={{textDecoration:'none', color:'black',}}>
                <li className=' p-2 cursor_pointer list_text' style={{color:"#FFFFFF"}}>
                <FaUserCircle size={30} className='list_text' style={{color:"#FFFFFF"}}/>
                    <span className='ps-2' style={{color:"#FFFFFF"}}>
                    Profile
                    </span>
                </li>
               </NavLink>
               {/* <NavLink activeClassName="" to={routeType+"data-preference"} style={{textDecoration:'none', color:'black',}}>
                <li className='p-2 cursor_pointer'>
                    <AiFillSetting size={30}/>
                    <span className='ps-2'>
                    Data Preferences
                    </span>
                </li>
               </NavLink> */}

        <NavLink activeClassName=""  to={routeType+"notification"} style={{textDecoration:'none', color:'black',}}
                component={NavLink}
               >
                <li className='p-2 cursor_pointer'>
                    <MdNotificationsActive size={30} className='list_text' style={{color:"#FFFFFF"}}/>
                    <span className='ps-2 list_text' style={{color:"#FFFFFF"}}>
                    Notifications
                    </span>

                </li>
               </NavLink>
 {type!=="AD"&& type!=="AG"&&      <NavLink activeClassName=""  to={routeType+"setting"} style={{textDecoration:'none', color:'black',}}
                component={NavLink}
               >
                <li className='p-2 cursor_pointer'>
                    <SettingsIcon size={30}className='list_text' style={{color:"#FFFFFF"}}/>
                    <span className='ps-2 list_text' style={{color:"#FFFFFF"}}>
                    Setting 
                    </span>

                </li>
               </NavLink>}

               {/* <NavLink activeClassName=""  to={routeType+"tools"} style={{textDecoration:'none', color:'black',}}>
                <li className='p-2 cursor_pointer'>
                    <GoTools size={30}/>
                    <span className='ps-2'>
                    Tools
                    </span>

                </li>
               </NavLink> */}

{type=="AD"&&
 <>
  <NavLink activeClassName=""  to={routeType+"help"} style={{textDecoration:'none', color:'black',}}>
                <li className='p-2 cursor_pointer white-space'>
                    <FaQuestionCircle size={30} className='list_text' style={{color:"#FFFFFF"}}/>
                    <span className='ps-2 list_text' style={{color:"#FFFFFF"}}>
                    Help / FAQ
                    </span>

                </li>
               </NavLink>


               {/* {
      label: "Blogs ",
      icon: <LiveHelpIcon size={23} />,
      link: "/manager/blogs",
    }, */}


  <NavLink activeClassName=""  to={"/manager/blogs"} style={{textDecoration:'none', color:'black',}}>
                <li className='p-2 cursor_pointer white-space'>
                <LiveHelpIcon size={30} className='list_text' style={{color:"#FFFFFF"}} />
                    <span className='ps-2 list_text' style={{color:"#FFFFFF"}}>
                    Blog
                    </span>

                </li>
               </NavLink>

               <NavLink activeClassName=""  to={routeType+"about"} style={{textDecoration:'none', color:'black',}}>
                <li className='p-2 cursor_pointer'>
                    <MdError size={30} className='list_text' style={{color:"#FFFFFF"}}/>
                    <span className='ps-2 list_text' style={{color:"#FFFFFF"}}>
                    About
                    </span>

                </li>
               </NavLink>

               {/* <NavLink activeClassName=""  to={routeType+"appearance"} style={{textDecoration:'none', color:'black',}}>
                <li className='p-2 cursor_pointer'>
                    <IoIosColorPalette size={30}/>
                    <span className='ps-2'>
                    Appearance
                    </span>

                </li>
               </NavLink> */}
                       {type=="AD"&& <NavLink activeClassName=""  to={routeType+"user-role/employee"} style={{textDecoration:'none', color:'black',}}>
                <li className='p-2 cursor_pointer'>
                <FaUserCircle size={30} className='list_text' style={{color:"#FFFFFF"}}/>
                    <span className='ps-2 list_text' style={{color:"#FFFFFF"}}>
                  Candidates
                    </span>

                </li>
               </NavLink>}
              {type=="AD"&& <NavLink activeClassName=""  to={routeType+"user-role/agency"} style={{textDecoration:'none', color:'black',}}>
                <li className='p-2 cursor_pointer'>
                <FaUserCircle size={30} className='list_text' style={{color:"#FFFFFF"}}/>
                    <span className='ps-2 list_text' style={{color:"#FFFFFF"}}>
                    Agencies
                    </span>

                </li>
               </NavLink>}
              
              </> 
}
{type=="AD"&&<NavLink activeClassName=""  to={routeType+"user-role/hospital"} style={{textDecoration:'none', color:'black',}}>
                <li className='p-2 cursor_pointer'>
                <FaUserCircle size={30} className='list_text' style={{color:"#FFFFFF"}}/>
                    <span className='ps-2 list_text' style={{color:"#FFFFFF"}}>
                  Hospitals
                    </span>

                </li>
               </NavLink>
}
{type=="AD"&&<NavLink activeClassName=""  to='/manager/cms' style={{textDecoration:'none', color:'black',}}>
                <li className='p-2 cursor_pointer'>
                <FaUserCircle size={30} className='list_text' style={{color:"#FFFFFF"}}/>
                    <span className='ps-2 list_text' style={{color:"#FFFFFF"}}>
                  CMS
                    </span>

                </li>
               </NavLink>
}

            </ul>

    </div>
  )
}
