import React, { useContext, useLayoutEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import {
  Outlet,
  Link,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./styles/Navstyle.css";
import "./styles/Layout.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/counterSlice";
import { Button, Grid } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useEffect } from "react";
import apiClient from "../api/apiClient";
const Layout = () => {
  const { isLoggedIn, userType } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formEnable, setFormEnable] = useState(false);
  const [socialLogin, setSocialLogin] = useState();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  useLayoutEffect(() => {
    if (ref?.current) setHeight(ref.current.clientHeight);
  }, []);

  function getUserRoute() {
    if (userType == "AG") return "/agencies/";
    else if (userType == "HO") return "/hospitals/";
    else if (userType == "AD") return "/manager/";
    else if (userType == "CA") return "/emp-profile/";
  }

  useEffect(() => {
    // fetchdata1();
  }, []);

  const li = document.querySelectorAll("li.dropdown a");
  const btn = document.querySelector(".nav-btn");
  const nav = document.querySelector("ul.nav");

  btn?.addEventListener("click", (e) => {
    nav.classList.toggle("toggle");
  });

  li?.forEach((each) => {
    if (each.nextElementSibling !== null) {
      each.addEventListener("click", (e) => {
        if (window.innerWidth < 768) {
          e.target.parentElement.classList.toggle("active");
        }
      });
    }
  });

  const location = useLocation();
  if (location?.pathname?.includes("emp-profile") && !isLoggedIn)
    return <Outlet context={{ open, setOpen, formEnable, setFormEnable }} />;
  const fetchdata1 = async () => {
    const result = await apiClient.get("CMSSettings");
    if (!result.ok) return;
    setSocialLogin(result.data.results[0]);
  };
  // console.log(socialLogin,"socialLogin");

  return (
    <>
      <nav
        className="site navbar navbar-expand-lg navbar-dark   fixed-top  w-100 custom-navbar navbar-flow text-black"
        ref={ref}
      >
        <div className={` container-fluid mx-sm-5 ${userType && "me-sm-0"}`}>
          <Link className=" navbar-brand" to="/">
            <img
              src={require("../assets/isent.png")}
              className="img-fluid logo_img_size"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="">
              <i class="bi bi-list"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <div class="my-component">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li style={{ paddingY: "0rem" }} className="nav-item homee ">
                  <NavLink
                    style={{ paddingY: 2,fontSize:'20px' }}
                    className="nav-link "
                    exact
                    activeClassName="active"
                    end="/"
                    to="/"
                    title="Home"
                  >
                    Home
                  </NavLink>
                </li>

                <li style={{ paddingY: "0rem" }} className="nav-item homee">
                  <NavLink
                    className="nav-link"
                    style={{ fontSize:'20px' }}
                    exact
                    activeClassName="active"
                    to="/facilities"
                    title="Facilities"
                  >
                    Facilities
                  </NavLink>
                </li>

                <li style={{ paddingY: "0rem" }} className="nav-item homee">
                  <NavLink
                    className="nav-link white_space"
                    exact
                    activeClassName="active"
                    to="/profession"
                    title="Healthcare"
                    style={{ fontSize:'20px' }}
                  >
                    Healthcare Professionals
                  </NavLink>
                </li>

                {/* <li style={{ paddingY: "0rem" }} className="nav-item homee">
                  <NavLink
                    className="nav-link"
                    exact
                    activeClassName="active"
                    to="/hospitals/register"
                    title="Signup"
                  >
                    Signup
                  </NavLink>
                </li> */}

                <li style={{ paddingY: "0rem" }} className="nav-item homee">
                  <NavLink
                    className="nav-link"
                    exact
                    style={{ fontSize:'20px' }}
                    activeClassName="active"
                    to="/jobs"
                    title="Jobs"
                  >
                    Jobs
                  </NavLink>
                </li>
                <li style={{ paddingY: "0rem" }} className="nav-item homee">
                  <NavLink
                    className="nav-link white_space"
                    exact
                    activeClassName="active"
                    to="/about-us"
                    title="About Us"
                    style={{ fontSize:'20px' }}
                  >
                    Our Company
                  </NavLink>
                </li>
                {/* <li style={{ paddingY: "0rem" }} className="nav-item homee">
                  <NavLink
                    className="nav-link"
                    exact
                    activeClassName="active"
                    to="/clients"
                    title="Clients"
                  >
                    Clients
                  </NavLink>
                </li> */}
                <li style={{ paddingY: "0rem" }} className="nav-item homee">
                  <NavLink
                    className="nav-link white_space"
                    exact
                    activeClassName="active"
                    to="/contact-us"
                    style={{ fontSize:'20px' }}
                    title="Contact Us"
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li style={{ paddingY: "0rem" }} className="nav-item homee">
                  <NavLink
                    className="nav-link white_space"
                    exact
                    style={{ fontSize:'20px' }}
                    activeClassName="active"
                    to="/blogs"
                    title="Blogs"
                  >
                    Our Blogs
                  </NavLink>
                </li>
                <li class="dropdown nav-item ">
              {/* <a className="nav-link white_space" title='Services'  style={{ fontSize:'20px' }}>Job Seekers <ArrowDropDownIcon/></a> */}
             
                  <ul className='p-3 ' style={{color:"white  ",borderRadius:'20px'}}>
               
            {/* <li><Link to={'/per-deim'} class="dropdown-item" title='Per Diem' >Per Diem</Link></li>
            <li><Link to={'/direct-hire'} class="dropdown-item" title='Direct Hire'>Direct Hire</Link></li>
            
            <li><Link to={'/travel-nurse'} class="dropdown-item" title='Travel Nursing'>Travel Nursing</Link></li>
            <li><Link to={'/emergency-services'} class="dropdown-item" title='Emergency Services' >Emergency Services</Link></li>*/}
            <li><Link to={'/staffing-services'} class="dropdown-item text-wrap" title='Permanent Placement'>Permanent Placement</Link></li> 
            <li><Link to={'/allied-health-care'} class="dropdown-item" title='Allied Health' >Allied Health</Link></li>
            <li><Link to={'/employee-benefits'} class="dropdown-item" title='Fixed Term'>Fixed Term</Link></li>
            <li><Link to={'/non-clinic'} class="dropdown-item" title='Non-Clinical'>Non-Clinical</Link></li>
              </ul>
            </li>
                {/* <li class=" dropdown nav-item">
          <a className="nav-link" title='Services'>Services <ArrowDropDownIcon/></a>
          <ul className='navbar-nav  p-3' style={{color:"rgb(45,128,192)",borderRadius:'20px'}}>
            <li class="dropdown  ">
              <p title='Job Seekers'>Job Seekers <ArrowDropDownIcon/></p>
             
                  <ul className='p-3' style={{color:"white  ",borderRadius:'20px'}}>
               
            <li><Link to={'/per-deim'} class="dropdown-item" title='Per Diem' >Per Diem</Link></li>
            <li><Link to={'/direct-hire'} class="dropdown-item" title='Direct Hire'>Direct Hire</Link></li>
            
            <li><Link to={'/travel-nurse'} class="dropdown-item" title='Travel Nursing'>Travel Nursing</Link></li>
            <li><Link to={'/emergency-services'} class="dropdown-item" title='Emergency Services' >Emergency Services</Link></li>
            <li><Link to={'/staffing-services'} class="dropdown-item" title='Healthcare Carrers'>Healthcare Carrers</Link></li>
            <li><Link to={'/allied-health-care'} class="dropdown-item" title='Allied Health' >Allied Health</Link></li>
            <li><Link to={'/employee-benefits'} class="dropdown-item" title='Benefits'>Benefits</Link></li>
            <li><Link to={'/non-clinic'} class="dropdown-item" title='Non-Clinical'>Non-Clinical</Link></li>
              </ul>
            </li>
            <li class="dropdown">
              <p title='Employers'>Employers <ArrowDropDownIcon/></p>
              <ul className='p-3' style={{color:"white  ",borderRadius:'20px'}}>
              <li><Link to={'/hire-talent'} class="dropdown-item" title='Hire Talent'>Hire Talent</Link></li>
            <li><Link to={'/managed-service'} class="dropdown-item" title='Managed Services'>Managed Services</Link></li>
            <li><Link to={'/flat-pool-management'} class="dropdown-item" title='Management' >Flat Pool <br /> Management</Link></li>
                    </ul>
            </li>
         
            <li class="dropdown">
              <p title='Resources'>Resources <ArrowDropDownIcon/></p>
              <ul className='p-3' style={{color:"white  ",borderRadius:'20px'}}>
            <li><Link to={'/location'} class="dropdown-item" title='Location'>Location</Link></li>
            <li><Link to={'/flat-pool-management'} class="dropdown-item" title='Careers' >Corporate Career</Link></li>
            <li><Link to={'/referal'} class="dropdown-item" title='Referal'>Referal</Link></li>
            <li><Link to={'/faqs'} class="dropdown-item" title='FAQS'> FAQS</Link></li>
                    </ul>
            </li>
          </ul>
        </li> */}
                <div class="mobile-nav">
                  <span>Menu</span>
                  <div class="nav-btn">
                    <i class="fas fa-bars"></i>
                  </div>
                </div>
              </ul>
            </div>

            <div className="row justify-content-end   mx-1">
              {isLoggedIn ? (
                <>
                  <div
                    className={`col-lg-12 d-flex justify-content-between align-items-center mb-3 mb-lg-0 text-white gap-2`}
                  >
                    <Button
                      onClick={() => dispatch(logout())}
                      variant="outlined"
                      title="Log out"
                    >
                      Log out
                    </Button>

                    {userType && (
                      <div>
                        <Button
                          variant="contained"
                          onClick={() => {
                            navigate(getUserRoute());
                          }}
                          title="Dashboard"
                        >
                          {" "}
                          Dashboard{" "}
                        </Button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="col-lg-12  d-flex gap-3 mb-3 mb-lg-0 text-white  gx-0">
                    <div class="dropdown">
                      <button
                        class="btn btn-nav bg-blue clr-white dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        title="Login"
                      >
                        Login
                      </button>
                      <ul class="dropdown-menu">
                        {/* <li><button class="dropdown-item" >Client</button></li> */}
                        {/* <li><button class="dropdown-item" onClick={()=>{
     navigate("/agencies/login")
    }} title='Agency'>Agency</button></li> */}
                        <li>
                          <button
                            class="dropdown-item"
                            onClick={() => {
                              navigate("/employee/login");
                            }}
                            title="Epmloyee"
                          >
                            Healthcare Professional
                          </button>
                        </li>
                        <li>
                          <button
                            class="dropdown-item"
                            onClick={() => {
                              navigate("/hospitals/login");
                            }}
                            title="Hospitals"
                          >
                            Healthcare Facilities
                          </button>
                        </li>
                        {/* <li>
                          <button
                            class="dropdown-item"
                            onClick={() => {
                              navigate("/manager/login");
                            }}
                            title="Manager"
                          >
                            Admin
                          </button>
                        </li> */}
                      </ul>
                    </div>

                    <div class="btn-group" >
                      <button
                        class="btn btn-nav bg-blue clr-white dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        title="Login"
                      >
                       Start Today
                      </button>
                      <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start" >
                        <li className="p-3">
                          
                            <div>
                              <h5 className="white_space">
                                Nursing Professional
                              </h5>
                              <button onClick={()=>navigate("/hospitals/register")} className="btn btn-nav bg-blue clr-white">
                                Join Our Team
                              </button>
                            </div>
                          <hr />

                          
                            <div>
                              <h5 className="white_space">
                                Nursing Facilities
                              </h5>
                              <button onClick={()=>navigate("/apply")} className="btn btn-nav bg-blue clr-white">
                                Talk To Us
                              </button>
                            </div>
                            
                          
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              )}

              {/* <div className="col-lg-6 mb-3 mb-lg-0 text-white  gx-1">
                <div class="dropdown">
                  <button
                    class="btn btn-nav bg-blue clr-white dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    title="Login"
                  >
                    Other JobSeekers
                  </button>
                  <ul class="dropdown-menu">
                   
                    <li>
                      <button
                        class="dropdown-item"
                       
                        title="Epmloyee"
                      >
                        Permanent Placement
                      </button>
                    </li>
                    <li>
                      <button
                        class="dropdown-item"
                        // onClick={() => {
                        //   navigate("/hospitals/login");
                        // }}
                        title="Hospitals"
                      >
                        Fixed Term
                      </button>
                    </li>
                    <li>
                      <button
                        class="dropdown-item"
                        // onClick={() => {
                        //   navigate("/manager/login");
                        // }}
                        title="Manager"
                      >
                        Non Clinical
                      </button>
                    </li>
                    <li>
                      <button
                        class="dropdown-item"
                        // onClick={() => {
                        //   navigate("/manager/login");
                        // }}
                        title="Manager"
                      >
                        Allied Health
                      </button>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </nav>

      <div style={{ marginTop: height }}>
        <Outlet context={{ open, setOpen, formEnable, setFormEnable }} />
      </div>

      <footer
        class=" text-white p-md-4 p-2"
        style={{ backgroundColor: "#000000" }}
      >
        <div class=" container">
          <div className="row">
            <div className="col d-flex justify-content-between">
              <div>
                <img
                  src={require("../assets/isent.png")}
                  className="img-fluid logo_img_size"
                />
              </div>
            </div>
          </div>
          <hr className="text-white"></hr>
          {/* <div class=""><img src={require('../assets/logo.png')}  className="img-fluid" style={{ borderRadius: '8px', width: '13rem' }} alt="Nav"/></div> */}
          <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 ps-lg-5">
              <p class="text-upper_case mt-2 text-white">
                We make job finding very easy. We are best job provider company
                where any user can apply for different jobs created by our
                admin.
              </p>
              <div>
                <div className="text-white text-upper_case mt-3">
                  © 2022 all rights reserved developed and maintain by{" "}
                  <a href="https://www.fabtechsol.com/" target="_blank">
                    Fabtechsol
                  </a>{" "}
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-8  mt-4 mt-sm-4 mt-md-0 mt-lg-0 mt-xl-0">
              <div className="row justify-sm-content-center">
                <div className="col-6 col-sm-3 style-none">
                  <h5 class="mb-2 text-white" title="Company">
                    Company
                  </h5>
                  <Link to={"/about-us"} className="decoration-none text-white">
                    <p className="mb-1" title="About us">
                      About Us
                    </p>
                  </Link>
                  <Link to={"/blogs"} className="decoration-none text-white">
                    <p className="mb-1" title="Blog">
                      Blog
                    </p>
                  </Link>
                  <a href="#">
                    <p className="mb-1" title="Careers">
                      Corporate Careers
                    </p>
                  </a>
                </div>
                <div className="col-6 col-sm-3 style-none">
                  <h5 class="mb-2 text-white" title="Services">
                    Services
                  </h5>
                  <Link to={"/jobs"} className="decoration-none">
                    <p className="mb-1 text-white" title="Job Search">
                      Job Search
                    </p>
                  </Link>
                  <a href="#">
                    <p className="mb-1 text-white" title="Travel">
                      Travel
                    </p>
                  </a>
                  <a href="#">
                    <p className="mb-1 text-white" title="Per Diem">
                      Per Diem
                    </p>
                  </a>
                  <a href="#">
                    <p className="mb-1 text-white" title="Placement">
                      Permanent Placement
                    </p>
                  </a>
                  <a href="#">
                    <p className="mb-1 text-white" title="Allied">
                      Allied
                    </p>
                  </a>
                </div>
                <div className="col-6 col-sm-3 style-none">
                  <h5 class="mb-2 text-white" title="Resources">
                    Resources
                  </h5>
                  <Link to={"/jobs"} className="decoration-none text-white">
                    <p className="mb-1  text-white" title="Job Search">
                      Job Search
                    </p>
                  </Link>
                  <a href="#">
                    <p className="mb-1 text-white" title="Clients">
                      Our clients
                    </p>
                  </a>
                  {/* <a href="#"><p>Heading</p></a> */}
                </div>
                <div className=" col-6 col-sm-3 style-none">
                  <h5 class="mb-2 text-white">Social</h5>
                  <div className="">
                    <a
                      href={`${socialLogin?.twitter || "www.twitter.com"}`}
                      target="_blank"
                      className="decoration-none"
                    >
                      {/* <img src={require("../assets/twetter.png")}  className="img-fluid img_size" title='Twitter'/> */}
                      <TwitterIcon style={{ color: "white" }} />
                    </a>
                    <a
                      href={`${socialLogin?.facebook || "www.facebook.com"}`}
                      target="_blank"
                      className="decoration-none"
                    >
                      {/* <img src={require("../assets/facebook.png")}  className="img-fluid mx-3 img_size" title='Facebook'/> */}
                      <FacebookIcon style={{ color: "white" }} />
                    </a>
                    {/* <a href={`${socialLogin?.linkedin||"www.linkedin.com"}`} target='_blank' className='decoration-none'>
            <img src={require("../assets/linkedin.png")}  className="img-fluid  img_size" title='Linkedin'/>
            </a> */}
                    {/* <a href={`${socialLogin?.instagram||"www.instagram.com"}`} target='_blank' className='decoration-none'>
            <img src={require("../assets/instagram.png")}  className="img-fluid ms-2 img_size" title='Instagram'/>
          </a> */}
                  </div>
                </div>
                <div class="col-sm-6  my-auto gx-0 style-none">
                  {/* <form>
              <div class="d-flex">
                <input class="form-control email_color email_width" type="email" name="" placeholder="Email" required/>
                <button class="btn email_color" type="submit" value="Submit"><img src={require("../assets/send.png")} className="img-fluid"/></button>
              </div>
            </form> */}
                  {/* <div class="d-flex mt-4">
              <img src={require("../assets/phone_icon.png")} style={{ height:'40px', width:'40px'}} className="img-fluid"/>
              <div style={{ fontSize: '12px'}} class="ms-2 text-dark">
                <label for="">+1 3218 232 232 3</label>
                <p>Call to Expert</p>
              </div>
            </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
