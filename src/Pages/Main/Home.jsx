import React, { useRef } from "react";
import { useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import apiClient from "../../api/apiClient";
import useApi from "../../hooks/useApi";
import "./styles/Home.css";
import { LoadingOverlaySmall } from "../../components/mui/LoadingOverlay";
import Paginate from "../../components/Paginate";
import { useEffect } from "react";
import { TiTick } from "react-icons/ti";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import {
  Avatar,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import img from "../../assets/Home/background.png";
import { Carousel } from "react-bootstrap";
let limit = 12;
function Home(props) {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { formEnable, setFormEnable, open, setOpen } = useOutletContext();
  const [loading, setLoading] = useState(false);
  const [sociallink, setSocialLink] = useState();

  const [speciality, setSpeciality] = useState("");

  const [count, setCount] = useState(0);

  //   const {data,error,request}=useApi((endpoint)=>apiClient.get(endpoint))
  // const [offset,setOffset]=useState(0)
  const [loadingSpeciality, setLoadingSpeciality] = useState(false);
  //   let offsetEndpoint = `&limit=${limit}&offset=`;
  //   let newJobEndpoint = `specialities/?`;
  useEffect(() => {
    // fetchNewJobs(newJobEndpoint+offsetEndpoint+offset)
    fetchData();
  }, []);
  //   const fetchNewJobs = async (endpoint) => {
  //     setLoadingSpeciality(true)
  //    const response= await request(endpoint)

  //    if(error)
  //    return //console.log("error while retrieve")
  // if(!count)
  // setCount(response.data.count)
  // setLoadingSpeciality(false)

  //   }

  const handlePageChange = async (event, value) => {
    const result = await apiClient.get(
      `/PositionSpeciality/?in_job=True&page=${value}&page_size=12`
    );
    //console.log(result.data.results, "data")
    setPositionSpeciality(result?.data?.results);
    setCount(result?.data?.count);
    // setPage(page+1)
  };

  const jobsBySpeciality = () => {
    const { speciality, location } = FilterData;
    const queryParams = new URLSearchParams();

    speciality && queryParams.set("speciality", speciality);

    location && queryParams.set("location", location);

    navigate(`/jobs/?${queryParams.toString()}`);
  };
  const handleSpecialityNavigate = (speciality) => {
    const queryParams = new URLSearchParams();

    speciality && queryParams.set("speciality", speciality);

    navigate(`/jobs/?${queryParams.toString()}`);
  };

  const [page, setPage] = useState(1);
  const [positionSpeciality, setPositionSpeciality] = useState();
  async function fetchData() {
    const result = await apiClient.get(
      `/PositionSpeciality/?page=${page}&page_size=12&in_job=True`
    );
    //console.log(result.data.results, "data")
    setPositionSpeciality(result?.data?.results);
    setCount(result?.data?.count);
    setPage(page + 1);
  }

  const [FilterData, setFilterData] = useState({
    location: "",
    speciality: "",
  });
  const handleChange = (key, value) => {
    setFilterData({ ...FilterData, [key]: value });
  };


 const [showFullContent1, setShowFullContent1] = useState(false);
 const [showFullContent2, setShowFullContent2] = useState(false);
 const [showFullContent3, setShowFullContent3] = useState(false);
 const [showFullContent4, setShowFullContent4] = useState(false);
  


  return (
    <div className="" style={{overflow:'hidden'}}>
      <Helmet>
        <title>Isentcare</title>
      </Helmet>
      <HomeCarosal
        values={{
          isLoggedIn,
          FilterData,
          setFilterData,
          handleChange,
          jobsBySpeciality,
        }}
      />

<div className="container bg-white mt-4 pt-4 ">
        <div class="container mb-5">
        <div class=" row justify-content-center align-items-center px-sm-5">
        <h1  className="text-primary text-center">Easy Platforms to use</h1>
          <div className="col-md-6 ">
          <div class="text-center d-flex align-items-center white_space">
                      {/* <TiTick size={"27"} className="text-primary" /> */}
                      <div class="bg-white my-auto mx-2 p-2 border_radu">
                <img
                  src={require("../../assets/tick-inside-circle.png")}
                  style={{ width: "35px", height: "35px" }}
                />
                </div>
          <h5 className="mb-0 text-primary " style={{cursor:"pointer"}} onClick={()=>navigate("/apply")}>Apply</h5>
          </div>
          <div class="text-center d-flex align-items-center white_space">
                      {/* <TiTick size={"27"} className="text-primary" /> */}
                      <div class="bg-white my-auto mx-2 p-2 border_radu">
                <img
                  src={require("../../assets/tick-inside-circle.png")}
                  style={{ width: "35px", height: "35px" }}
                />
                </div>
          <h5 className="mb-0 text-primary " style={{cursor:"pointer"}} onClick={()=>navigate("/")}>Upload Credential</h5>
          </div>
          <div class="text-center d-flex align-items-center white_space">
             {/* <TiTick size={"27"} className="text-primary" /> */}
             <div class="bg-white my-auto mx-2 p-2 border_radu">
                <img
                  src={require("../../assets/tick-inside-circle.png")}
                  style={{ width: "35px", height: "35px" }}
                />
                </div>
          <h5 className="mb-0 text-primary " style={{cursor:"pointer"}} onClick={()=>navigate("/")}>Start Working</h5>
          </div>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src={require("./homeassets/mack book.png")} alt="" />
          </div>
         
          </div>
          </div>
          </div>



      <div className="container bg-white mt-4 pt-4  ">
        <div class="container mb-5 ">
        <div class="row ">
 
  <div class="col-sm-6 mt-2">
    <div class="card px-3 " style={{backgroundColor:"#00175A"}}>
      <div class="card-body" >
        <h5 class="card-title fw-bold" style={{color:"white"}} >Licensed Practical Nurses</h5>
        <p class="card-text" style={{color:"white"}}>
        {showFullContent1 ? <> LPNs play an important role in providing quality patient care, and we know your value. Contact us today and advance your career.
          <Button onClick={()=>setShowFullContent1(false)} >read less</Button>
        </>:<> LPNs play an important role in providing quality patient care, and we know your value. Contact ....
        <Button onClick={()=>setShowFullContent1(true)} >read more</Button>
        </>
        }</p>
        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  </div>
  <div class="col-sm-6 mt-2">
    <div class="card px-3 " style={{backgroundColor:"#00175A"}}>
      <div class="card-body" >
        <h5 class="card-title fw-bold" style={{color:"white"}} >Home Health Aid</h5>
        <p class="card-text" style={{color:"white"}}>
        {showFullContent2 ? <>Meeting every need for reliable home health care is what we strive to pursue every day. At IsentCare we deliver excellent home care services to its finest.
          <Button onClick={()=>setShowFullContent2(false)} >read less</Button>
        </>:
        <>Meeting every need for reliable home health care is what we strive to pursue every day. At IsentCare we...
         <Button onClick={()=>setShowFullContent2(true)} >read more</Button></>
        }
        </p>
        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  </div>
  
  <div class="col-sm-6 mt-2">
    <div class="card px-3 " style={{backgroundColor:"#00175A"}}>
      <div class="card-body" >
        <h5 class="card-title fw-bold" style={{color:"white"}} >Certified Nursing Assistants</h5>
        <p class="card-text" style={{color:"white"}}>
          {showFullContent3 ? <>IQualified nursing assistants are constantly in demand in medical facilities.Apply today and be part of our growing family. We will match you with employment opportunities based on your skills and availability.
            <Button onClick={()=>setShowFullContent3(false)} >read less</Button>
          </>:
          <>IQualified nursing assistants are constantly in demand in medical facilities.Apply today and be part of our...
          <Button onClick={()=>setShowFullContent3(true)} >read more</Button>
          </>
          }
            </p>
        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  </div>
  <div class="col-sm-6 mt-2">
    <div class="card px-3 " style={{backgroundColor:"#00175A"}}>
      <div class="card-body" >
        <h5 class="card-title fw-bold" style={{color:"white"}} >Registered Nurses</h5>
        <p class="card-text" style={{color:"white"}}>
          
        {showFullContent4 ? <>IsentCare is committed to seeing you discover a fulfilling career path in the evolving world of healthcare. Apply today for a wide range of opportunities available to you as an RN.
          <Button onClick={()=>setShowFullContent4(false)} >read less</Button>
        </>:<>IsentCare is committed to seeing you discover a fulfilling career path in the evolving world of ....
          <Button onClick={()=>setShowFullContent4(true)} >read more</Button>
        </>}
        </p>
        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  </div>
  
  
</div>
        </div>

        <div class="container ">
          <div class="  justify-content-center px-sm-5">
            <h2 className=" text-center fw-bold" style={{color:"#00175A"}}>Looking For</h2>
           
            <div className=" mb-3 ">
              <div className=" row justify-content-center align-items-center m-auto">
                <div className="col-md-6 bg-white">
                  <div class="">
                    {/* <div class=" white_space">
                      <TiTick size={"27"} style={{ color: "#1882C1" }} />
                      <label class="fs_14 mb-0">Temp Contracts fixed term contract</label>
                    </div> */}

                      <div class="text-center d-flex align-items-center white_space">
                        {/* <TiTick size={"27"} className="text-primary" /> */}
                       <div class="bg-white my-auto mx-2 p-2 border_radu">
                        <img
                          src={require("../../assets/tick-inside-circle.png")}
                          style={{ width: "35px", height: "35px" }}
                        />
                        </div>
                        <h5 className="mb-0 text-wrap fw-bold" style={{cursor:"pointer",color:"#00175A"}} onClick={()=>navigate("/")}>Temporary Fixed Term Contract</h5>
                      </div>

                    {/* <div class=" white_space">
                      <TiTick size={"30"} style={{ color: "#1882C1" }} />
                      <label class="fs_14">Direct Hire</label>
                    </div> */}

                    <div class="text-center d-flex align-items-center white_space">
                        {/* <TiTick size={"27"} className="text-primary" /> */}
                              <div class="bg-white my-auto mx-2 p-2 border_radu">
                        <img
                          src={require("../../assets/tick-inside-circle.png")}
                          style={{ width: "35px", height: "35px" }}
                        />
                        </div>
                        <h5 className="mb-0 fw-bold" style={{cursor:"pointer",color:"#00175A"}} onClick={()=>navigate("/")}>Direct Hire</h5>
                      </div>




                    {/* <div class=" white_space">
                      <TiTick size={"27"} style={{ color: "#1882C1" }} />
                      <label class=" fs_14">Allied Health</label>
                    </div> */}

                    <div class="text-center d-flex align-items-center white_space">
                        {/* <TiTick size={"27"} className="text-primary" /> */}
                              <div class="bg-white my-auto mx-2 p-2 border_radu">
                        <img
                          src={require("../../assets/tick-inside-circle.png")}
                          style={{ width: "35px", height: "35px" }}
                        />
                        </div>
                        <h5 className="mb-0 fw-bold" style={{cursor:"pointer",color:"#00175A"}} onClick={()=>navigate("/")}>Allied Health</h5>
                      </div>



                    {/* <div class=" white_space">
                      <TiTick size={"27"} style={{ color: "#1882C1" }} />
                      <label class=" fs_14">Non-Clinic</label>
                    </div> */}


                    <div class="text-center d-flex align-items-center white_space">
                        {/* <TiTick size={"27"} className="text-primary" /> */}
                        <div class="bg-white my-auto mx-2 p-2 border_radu">
                        <img
                          src={require("../../assets/tick-inside-circle.png")}
                          style={{ width: "35px", height: "35px" }}
                        />
                        </div>
                        <h5 className="mb-0 fw-bold" style={{cursor:"pointer",color:"#00175A"}} onClick={()=>navigate("/")}>Non-Clinical</h5>
                      </div>



                    {/* <div class=" white_space">
                      <TiTick size={"27"} style={{ color: "#1882C1" }} />
                      <label class=" fs_14">Home Health Aids</label>
                    </div> */}

                    <div class="text-center d-flex align-items-center white_space">
                        {/* <TiTick size={"27"} className="text-primary" /> */}
                              <div class="bg-white my-auto mx-2 p-2 border_radu">
                        <img
                          src={require("../../assets/tick-inside-circle.png")}
                          style={{ width: "35px", height: "35px" }}
                        />
                        </div>
                        <h5 className="mb-0 fw-bold" style={{cursor:"pointer",color:"#00175A"}} onClick={()=>navigate("/")}>Home Health Aides </h5>
                      </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <img className="img-fluid" src={require("./homeassets/Applyjobs.png")} alt="" />
                </div>
                {/* <div className="col-md-2 bg-white rounded ">
                  <div className=" d-flex justify-content-center">
                    <div class="   text-center " style={{ width: "2.5rem" }}>
                      <img
                        width={"100%"}
                        src={require("../../assets/coin.png")}
                        alt=""
                      />
                    </div>
                  </div>

                  <h6 className="text-center py-2 fw-bold">Great Benifits</h6>
                  <div class="row">
                    <div class="text-center white_space">
                      <TiTick size={"27"} style={{ color: "#1882C1" }} />
                      <label class="fs_14">Competitive Pay</label>
                    </div>
                    <div class="text-center white_space">
                      <TiTick size={"27"} style={{ color: "#1882C1" }} />
                      <label class="fs_14">Referral Bonuses</label>
                    </div>
                    <div class="text-center white_space">
                      <TiTick size={"27"} style={{ color: "#1882C1" }} />
                      <label class="fs_14">Diverse Assignments</label>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 bg-white rounded ">
                  <div className=" d-flex justify-content-center">
                    <div class="   text-center " style={{ width: "2.5rem" }}>
                      <img
                        width={"100%"}
                        src={require("../../assets/smartphone-and-tablet.png")}
                        alt=""
                      />
                    </div>
                  </div>
                  <h6 className="text-center py-2 fw-bold">Mobile App</h6>
                  <div class="">
                    <div class="text-center white_space">
                      <TiTick size={"27"} style={{ color: "#1882C1" }} />
                      <label class="fs_14">Search Jobs</label>
                    </div>
                    <div class="text-center white_space">
                      <TiTick size={"27"} style={{ color: "#1882C1" }} />
                      <label class="fs_14">Submit Jobs</label>
                    </div>
                    <div class="text-center white_space">
                      <TiTick size={"27"} style={{ color: "#1882C1" }} />
                      <label class="fs_14">Get your shift</label>
                    </div>
                  </div>
                </div> */}

                {/* <div className="col-md-2 bg-white rounded ">
                  <div className=" d-flex justify-content-center">
                    <div class=" " style={{ width: "2.5rem" }}>
                      <img
                        width={"100%"}
                        src={require("../../assets/support.png")}
                        alt=""
                      />
                    </div>
                  </div>
                  <h6 className="text-center py-2 fw-bold">24/7 Support</h6>
                  <div class="">
                    <div class="text-center white_space">
                      <TiTick size={"27"} style={{ color: "#1882C1" }} />
                      <label class="fs_14">Live Recruiters</label>
                    </div>
                    <div class="text-center white_space">
                      <TiTick size={"27"} style={{ color: "#1882C1" }} />
                      <label class="fs_14">Available Weekends</label>
                    </div>
                    <div class="text-center white_space">
                      <TiTick size={"27"} style={{ color: "#1882C1" }} />
                      <label class="fs_14"> Available Holidays</label>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="d-flex justify-content-center pt-2 ">
                <button
                  className="text-white btn btn_bg"
                  onClick={() => navigate("/apply")}
                  title="Quick Apply"
                >
                  Talk to us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <Grid container className="test" style={{backgroundColor:"white"}}>
        <Grid item xs={12} className="d-flex justify-content-center">
          <h2>OUR SERVICES</h2>
        </Grid>
        <Grid item xs={12} md ={6} className="d-flex justify-content-center  ">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{width:"250px",height:"250px"}}/>
        <div><ArrowRightIcon/></div>
      <p>Healthcare Staffing</p>
      <p>Per Diem Staffing</p>
      <p>Per Diem Staffing</p>
      <p>Per Diem Staffing</p>
        </Grid>
        
       </Grid> */}

        <div className="container py-2 ">
          <div class="row">
            <div className="background_img">
              <div className="background_border d-flex align-items-center p-3">
                <div class="bg_bag_plus my-auto mx-2">
                  <i class="bi bi-bag-plus-fill bag_style p-2 text-white"></i>
                </div>
                <p className="mb-0 mx-2 text-white">
                  “IsentCare is great!! They make you feel
                  like family. I would recommend them to anyone.”
                </p>
              </div>
              <p className="text-white text-center p-2">Paula, Travel RN</p>
            </div>
          </div>
        </div>

        {/* <div className="test container ">
          <div className="row px-sm-5">
            <div className="col-md-7 col-12 fs_md_12">
              <h2>About Us</h2>
              <p className>
              We make job finding very easy. We are best job provider company where any user <br/>
              can apply for different jobs created by our admin. We have agencies working with us <br/>
               who can apply for their employees. As an admin we choose who we want to assign the <br/>
               job n the basis of capabilities.<br/>
                We have jobs for almost every specialty. So that we can engage as many employees as <br/>
                 we can.
              </p>
              <button className="btn btn-primary mb-md-0 mb-4" type="button" onClick={()=>{
                if(auth.isLoggedIn)
                {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                    return
                }
  if(isMobile)
  setOpen(true)
  else
  window.scrollTo({
   top: 0,
   behavior: 'smooth',
 });
   navigate('/')
  setFormEnable(true)
 }}>
                Get Started{" "}
              </button>
            </div>
            <div className="col-md-5 col-12 mb-3">
              <img
                src={require("../../assets/Home/mission-pic.png")}
                alt="missionStatement"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div> */}
      </div>

      <div>
        <h4 className="text-center">
          <span className="text_color fw-bold">Why IsentCare?</span>
          Streamline the entire healthcare staffing process
        </h4>
      </div>

      <div className=" container-fluid">
        <div class="row my-5 " style={{ backgroundColor: "#00175A" }}>
          <div class="col">
            <div class="row  py-5">
              <div className=" col-sm-6 d-flex justify-content-end">
                <div style={{ width: "30rem" }}>
                  <img
                    width={"100%"}
                    src={require("../../assets/iphone-mock.png")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-sm-6 ps-md-5 d-flex justify-content-center justify-content-sm-start">
                <div>
                  <div className="py-3 d-flex align-items-center">
                    <div class="bg-white my-auto mx-2 p-2 border_radu">
                      <img
                        src={require("../../assets/tick-inside-circle.png")}
                        style={{ width: "40px", height: "40px" }}
                      />
                    </div>
                    <div>
                      <h3 className="mb-0 text-white">
                        Search Jobs <br />
                      </h3>
                      <p className="mb-0 text-white">
                        Match availability to open positions
                      </p>
                    </div>
                  </div>
                  <div className="py-3 d-flex">
                    <div class="bg-white my-auto mx-2 p-2 border_radu">
                      <img
                        src={require("../../assets/tick-inside-circle.png")}
                        style={{ width: "40px", height: "40px" }}
                      />
                    </div>
                    <div>
                      <h3 className="mb-0 text-white">
                        Manage Your Schedule <br />
                      </h3>
                      <p className="mb-0 text-white">
                        View calendar of scheduled shifts
                      </p>
                    </div>
                  </div>
                  <div className="py-3 d-flex">
                    <div class="bg-white my-auto mx-2 p-2 border_radu">
                      <img
                        src={require("../../assets/tick-inside-circle.png")}
                        style={{ width: "40px", height: "40px" }}
                      />
                    </div>
                    <div>
                      <h3 className="mb-0 text-white">
                        Submit Timecards <br />
                      </h3>
                      <p className="mb-0 text-white">
                        Conveniently document and submit timecards
                      </p>
                    </div>
                  </div>
                  <div className="py-3 d-flex align-items-center">
                    <div class="bg-white my-auto mx-2 p-2 border_radu">
                      <img
                        src={require("../../assets/tick-inside-circle.png")}
                        style={{ width: "40px", height: "40px" }}
                      />
                    </div>
                    <div>
                      <h3 className="mb-0 text-white">
                        Get Notified <br />
                      </h3>
                      <p className="mb-0 text-white">
                        receive notifications on saved job searches
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className=" d-flex justify-content-center align-items-center">
            <div class=" " style={{width:"12rem"}}>
               <img width={'100%'} src={require("../../assets/andoride.png")} alt="" />
            </div>
            <div class=" " style={{width:"10rem"}}>
               <img width={'100%'} src={require("../../assets/appstore-lrg.png")} alt="" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;

const HomeCarosal = ({ values }) => {
  const { isLoggedIn, FilterData, handleChange, jobsBySpeciality } = values;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const [service, setService] = useState("HealthcareStaffing");
  console.log(service, "asd");
  useEffect(() => {
    fetchData();
    fetchDataCMS();
  }, []);

  const { request, data, error, loading } = useApi(() =>
    apiClient.get("/Advertisement/")
  );

  async function fetchData() {
    const result = await request();
    if (!result.ok) return;
    // console.log(result);
  }

  const apiCMS = useApi(() => apiClient.get("/CMSSettings/"));

  async function fetchDataCMS() {
    const result = await apiCMS.request();
    if (!result.ok) return;
    // console.log(result?.data);
  }

  // console.log(apiCMS.data)

  if (apiCMS.loading) return null;

  return (
    <div className="position-relative">
      <Carousel
        prevIcon={
          <span aria-hidden="true">
            <i className="bi bi-arrow-left-circle" style={{ fontSize: 27 }}></i>
          </span>
        }
        nextIcon={
          <span aria-hidden="true">
            <i
              className="bi bi-arrow-right-circle"
              style={{ fontSize: 27 }}
            ></i>
          </span>
        }
        // Set the interval in milliseconds (3 seconds)
      >
        {/* {data?.length==0&& <Carousel.Item className="carousel-item home-poster" 
  
         style={{
          height: apiCMS?.data[0]?.height || 450
         
        }}
       >
          <div className="d-flex justify-content-center position-absolute w-100" style={{ top: 80 }}>
            <div className="">
              <h1 className="font50px text-white mb-4 mt-sm-0  text-center">BROWSE JOBS BY SPECIALITY</h1>
              <h2 className="text-white mb-4  text-center">
                We make job finding very easy. We are the best job provider company where any user can apply for different
                jobs created by our admin.
              </h2>
            </div>
          </div>
        </Carousel.Item>} */}

        <Carousel.Item
          className={`carousel-item home-poster`}
          style={{
            height: 490,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          {/* <div
            className="d-flex justify-content-center position-absolute w-100"
            style={{ top: 80 }}
          ></div> */}
        </Carousel.Item>
      </Carousel>

      <div
        className="position-absolute w-100 text-light mt-5"
        style={{ top:3, left: 10, textAlign: "center" }}
      >
        <Typography variant="overline" className="fs-3 fw-bold">
          Our Platform Link Healthcare Facilities with
        </Typography>
        <Typography variant="overline" className="fs-3 fw-bold d-block">
          Healthcare Professionals to provide care
        </Typography>
      </div>

      <div className=" container-fluid  home_page">
        <div className="row">
      <div className="d-flex align-items-end justify-content-center col text-light my-5 text-light"
        style={{  zIndex: 999 }}
      >
        {!isLoggedIn && (   <>
        <div>
        <div>
        <Typography variant="overline" style={{fontSize:"26px"}} className=" text-primary fw-bold">
          For Facilities
        </Typography>
        </div>
    
        {/* <Typography variant="h6">Stabilize your healthcare </Typography>
        <Typography variant="h6">workforce and reduce</Typography>
        <Typography variant="h6">nursing burnout</Typography> */}
        <div>
        <Link to="/hospitals/register">
          <button
            className="btn lg btn-lg btn-primary text-white px-4 mt-1"
            style={{
              textDecoration: "none",
              border: "none",
              borderRadius: "5px",
              width:"130px"
            }}
          >
            Let's Talk
          </button>
        </Link>
      </div>
        </div>
        </> )}

      </div>
      
      <div className="col my-5">
        <div className="row   justify-content-start flex-column flex-md-row g-0 mb-5">
          <form onSubmit={jobsBySpeciality} className="col-12 col-lg-6">
            <div className=" row d-flex justify-content-end">
              {/* <div>
                <FormControl className="fw-bold" style={{ color: "white" }}>
                  <FormLabel
                    id="demo-row-radio-buttons-group-label"
                    style={{ color: "white" }}
                  >
                    Select Service
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <FormControlLabel
                      value="HealthcareStaffing"
                      control={<Radio style={{ color: "white" }} />}
                      label="Per Diem Staffing"
                    />
                    <FormControlLabel
                      value="Homecare"
                      control={<Radio style={{ color: "white" }} />}
                      label="Others"
                    />
                  </RadioGroup>
                </FormControl>
              </div> */}
              <div className="">
                {/* <SelectDropdown
                  placeholder="Speciality"
                  className="home_input"
                  label="Position Speciality"
                  sx={{ backgroundColor: "white" }}
                  endpoint="PositionSpeciality"
                  value={FilterData.speciality}
                  name="speciality"
                  handleChange={handleChange}
                  title="Specility"
                /> */}
                {service == "HealthcareStaffing" && (
                  <FormControl fullWidth style={{ color: "white" }}>
                    {/* <InputLabel
                      id="demo-simple-select-label "
                      style={{ color: "white" }}
                    >
                      Per Diem Staffing
                    </InputLabel>
                    <Select
                      style={{ color: "white" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="Healthcare Staffing"
                      // onChange={handleChange}
                    >
                      <MenuItem value={10}>Per Diem Staffing</MenuItem>
                      <MenuItem value={20}>Fixed Term Staffing</MenuItem>
                      <MenuItem value={30}>Temp to Hire</MenuItem>
                      <MenuItem value={30}>Permanent Placement</MenuItem>
                    </Select> */}
                  </FormControl>
                )}
                {service == "Homecare" && (
                  <div className="d-flex align-items-center gap-3">
                  <FormControl fullWidth style={{ color: "white" }}>
                    <InputLabel
                      id="demo-simple-select-label "
                      style={{ color: "white" }}
                    >
                     Select Hire
                    </InputLabel>
                    <Select
                      style={{ color: "white" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={20}
                      label="Home Care"
                      // onChange={handleChange}
                    >
                      {/* <MenuItem value={10}>In-Home Care</MenuItem>
                      <MenuItem value={20}>Hospital Private Duty</MenuItem>
                      <MenuItem value={30}>
                        Assisted Living Facility Private Duty
                      </MenuItem>
                      <MenuItem value={30}>
                        Nursing Facility Private Duty
                      </MenuItem> */}
                      <MenuItem value={20} >Fixed Term Staffing</MenuItem>
                      <MenuItem value={30}>Temp to Hire</MenuItem>
                      <MenuItem value={30}>Permanent Placement</MenuItem>
                    </Select>
                  </FormControl>
                   <div className="col-2">
                   <button
                     type="submit"
                     className="web-btn bg-green clr-white h-100 white_space"
                     style={{
                       textDecoration: "none",
                       border: "none",
                       borderRadius: "5px",
                     }}
                     title="Let's Go"
                   >
                     Let's Go
                   </button>
                 </div>
                  </div>
                )}
              </div>
              <div className="">
                {/* <LocationDropdown
                  placeholder="Location"
                  FilterData={FilterData}
                  sx={{ backgroundColor: "white" }}
                  label="Location"
                  endpoint="PositionLocation"
                  value={FilterData.location}
                  name="location"
                  handleChange={handleChange}
                  title="Location"
                /> */}

                {/* <FormControl fullWidth style={{ color: "white" }}>
                  <InputLabel
                    id="demo-simple-select-label "
                    style={{ color: "white" }}
                  >
                    Location
                  </InputLabel>
                  <Select
                    style={{ color: "white" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Location"
                    // onChange={handleChange}
                  >
                    <MenuItem value={10}> North Andover, MA 845</MenuItem>
                    <MenuItem value={20}> North Andover, MA 845</MenuItem>
                    <MenuItem value={30}> North Andover, MA 845</MenuItem>
                  </Select>
                </FormControl> */}

              </div>
             
            </div>
          </form>
        </div>

        {!isLoggedIn && ( 
          <div className="">
            <div className="text-center mb-2">
          <Typography variant="overline" style={{fontSize:"26px"}} className=" text-primary fw-bold">
          For Healthcare Professionals
        </Typography>
            </div>

          <div className="d-flex justify-content-center  w-100">
            <Link to="/apply">
              <button
                className="btn btn-primary btn-lg text-white px-4"
                style={{
                  textDecoration: "none",
                  border: "none",
                  borderRadius: "5px",
                  width:"130px"
                }}
                title="Apply"
              >
                 Join Us 
              </button>
            </Link>
          </div>
          </div>
        )}
      </div>
        </div>
      </div>

    </div>
  );
};

const SelectDropdown = ({
  endpoint,
  name,
  value,
  handleChange,
  ...otherProps
}) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState();
  const { request } = useApi((route) => apiClient.get(route));
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    //console.log("first")
    const result = await request(`/${endpoint}/?page=${page}&in_job=True`);
    //console.log(result, "data")
    if (result.data.results) setData([...data, ...result.data?.results]);
    setPage(page + 1);
    if (!count) setCount(result.data.count);
  }

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.target;
    if (scrollTop + clientHeight >= scrollHeight - 1) {
      //console.log(count > data.length, count, data.length);
      if (count > data.length) fetchData();
    }
  };

  return (
    <SelectOption
      fieldNames={{ value: "name", name: "name" }}
      inputProps={{ maxLength: 150 }}
      id="outlined-name"
      value={value}
      onChange={(e) => handleChange(name, e.target.value)}
      size={"small"}
      data={data}
      fullWidth
      style={{ width: "100%" }}
      MenuProps={{
        PaperProps: {
          onScroll: handleScroll,
          style: {
            maxHeight: "300px",
            overflowY: "auto",
          },
        },
      }}
      {...otherProps}
    />
  );
};
const LocationDropdown = ({
  endpoint,
  name,
  FilterData,
  value,
  handleChange,
  ...otherProps
}) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState();
  const { request } = useApi((route) => apiClient.get(route));
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    setPage(1); // Reset the page to 1
    resetData();
  }, [FilterData.speciality]);

  async function fetchData(myPage) {
    const currentPage = myPage || 1; // Use myPage if provided, otherwise default to 1
    const result = await request(
      `/${endpoint}/?page=${currentPage}&in_job=True&speciality=${FilterData.speciality}`
    );
    //console.log(result, "data");

    if (result.data?.results)
      setData([
        ...data,
        ...result.data?.results?.map((item) => {
          return {
            name: item.address + "," + item.state,
            value: item.address + " " + item.state,
          };
        }),
      ]);

    setPage(currentPage + 1);

    if (!count) {
      setCount(result);
    }
  }
  async function resetData() {
    const currentPage = 1; // Use myPage if provided, otherwise default to 1
    const result = await request(
      `/${endpoint}/?page=${currentPage}&in_job=True&speciality=${FilterData.speciality}`
    );
    //console.log(result, "data");

    if (result.data?.results)
      setData([
        ...result.data?.results?.map((item) => {
          return {
            name: item.address + "," + item.state,
            value: item.address + " " + item.state,
          };
        }),
      ]);

    setPage(currentPage + 1);

    if (!count) {
      setCount(result);
    }
  }

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.target;
    if (scrollTop + clientHeight >= scrollHeight - 1) {
      //console.log(count > data.length, count, data.length);
      if (count > data.length) fetchData(page);
    }
  };

  return (
    <SelectOption
      fieldNames={{ value: "name", name: "name" }}
      inputProps={{ maxLength: 150 }}
      id="outlined-name"
      value={value}
      onChange={(e) => handleChange(name, e.target.value)}
      size={"small"}
      data={data}
      fullWidth
      style={{ width: "100%" }}
      MenuProps={{
        PaperProps: {
          onScroll: handleScroll,
          style: {
            maxHeight: "300px",
            overflowY: "auto",
          },
        },
      }}
      {...otherProps}
    />
  );
};

const SelectOption = ({
  name,
  label,
  value,
  onChange,
  data,
  style,
  size,
  selectCss,
  labelStyle,
  onFocus,
  onScroll,
  fieldNames,
  placeholder,
  ...props
}) => {
  if (!fieldNames && data[0] && Object.keys(data[0])?.length > 2) {
    const fieldWithLabel = Object.keys(data[0]).find(
      (field) => field === "title" || field === "name"
    );
    if (fieldWithLabel) {
      fieldNames = { value: "id", name: fieldWithLabel };
    }
  }

  return (
    <FormControl size={size} sx={style}>
      {/* <InputLabel  sx={labelStyle} id={name} >{label}</InputLabel> */}
      <Select
        displayEmpty
        renderValue={(selected) => {
          if (!selected) {
            return placeholder;
          }

          return selected;
        }}
        defaultValue={""}
        inputProps={{ "aria-label": "Without label" }}
        labelId={name}
        id={name}
        value={value || ""}
        name={name}
        label={label}
        onChange={onChange}
        sx={selectCss}
        onFocus={onFocus}
        {...props}
      >
        {fieldNames
          ? data?.map((info, index) => {
              return (
                <MenuItem key={index} value={info[fieldNames.value]}>
                  {info[fieldNames.name]}
                </MenuItem>
              );
            })
          : data?.map((info, index) => {
              const values = Object.values(info);
              return (
                <MenuItem key={index} value={values[0]}>
                  {values[1]}
                </MenuItem>
              );
            })}
      </Select>
    </FormControl>
  );
};
