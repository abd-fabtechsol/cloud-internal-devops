import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import "./styles/About_us.css";
import { Box, Typography, Grid } from "@mui/material";
import Accordions from "../../components/mui/Accordian";
import { Button } from "react-bootstrap";
function AboutUs(props) {
  const [text, setText] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <Helmet>
        <title>AboutUs</title>
      </Helmet>

      <div className="pt-3">
        <div className="bg-about d-flex align-items-center justify-content-center">
          <Typography variant="h4" className="text-light fw-bold">
            ABOUT US
          </Typography>
        </div>
      </div>

      <Box sx={{ flexGrow: 1 }} style={{ marginTop: "8rem" }}>
        <Grid
          container
          style={{
            maxWidth: "1200px",
            margin: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            style={{
              maxWidth: "600px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            md={12}
            lg={6}
          >
            <div className="p-4">
              <img
                src={require("../../assets/about1.jpg")}
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </Grid>
          <Grid
            item
            style={{
              maxWidth: "600px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            md={12}
            lg={6}
          >
            <div className="p-4">
              <Typography variant="h4" className="mb-2 fw-bold">
                ABOUT US
              </Typography>

              <p
                style={{
                  textAlign: "justify",
                  paddingBottom: "1rem",
                }}
              >
                IsentCare opened its doors to provide staffing for Skilled
                nursing facilities, Rehabilitation centers, Hospitals, Medical
                doctor’s offices, Assisted living facilities, Diagnostic
                centers, and Corporations. At IsentCare we also provide home
                care for seniors and others in the privacy of their own homes
                and in communities.
              </p>
              <p
                style={{
                  textAlign: "justify",
                  paddingBottom: "1rem",
                }}
              >
                We provide healthcare professionals including allied health,
                offering a full range of on demand staffing, contract and
                traveling assignments as well as temp to hire and permanent
                placement.
              </p>
              <p
                style={{
                  textAlign: "justify",
                  paddingBottom: "1rem",
                }}
              >
                We help Healthcare professionals to find Jobs. We help RNs,
                LPNs, CNAs, HHAs land a job that is suitable for their skills.
                For companies and other healthcare institutions, we help them
                meet their staffing needs and help them keep shift filled with
                qualified and reliable nursing and healthcare staff so that they
                can provide the care needed by their patients.
              </p>
            </div>
          </Grid>
        </Grid>
      </Box>

      <div className="container-fluid" style={{ paddingTop: "4rem" }}>
        {/* <div className='container'>
          <div className=' row'>
            <div id="demo" class="carousel slide gx-0" data-bs-ride="carousel">
              <div class="carousel-inner" style={{ borderRadius: '10px' }}>
                <div class="carousel-item carosal_img active">
                  <img src={require("../../assets/Home/background.png")} class="d-block img-fluid" />
                  <div class="carousel-caption">
                    <div className='mb-5 h3_fs'>
                      <h3>The largest and most powerful PRN platform in the industry.  </h3>
                      <p>You have joined one of the area's newest innovative company.</p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item carosal_img rounded-3">
                  <img src={require("../../assets/Home/background.png")} class="d-block img-fluid" />
                  <div class="carousel-caption">
                    <div className='mb-5 h3_fs'>
                      <h3>The largest and most powerful PRN platform in the industry.  </h3>
                      <p>You have joined one of the area's newest innovative company.</p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item carosal_img">
                  <img src={require("../../assets/Home/background.png")} class="d-block img-fluid" />
                  <div class="carousel-caption">
                    <div className='mb-5 h3_fs'>
                      <h3>The largest and most powerful PRN platform in the industry.  </h3>
                      <p>You have joined one of the area's newest innovative company.</p>
                    </div>
                  </div>
                </div>
              </div>

              <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span className='d-sm-block d-none'><i class="bi bi-chevron-left"></i></span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span className='d-sm-block d-none'><i class="bi bi-chevron-right"></i></span>
              </button>
            </div>
          </div>
        </div> */}
      </div>
      <Box className="container">
        <Typography
          className=" text_color"
          sx={{ p: 2 }}
          variant="h4"
          color="initial"
        >
          A Legacy of Staffing Healthcare Professionals
        </Typography>
        <Typography
          variant="body2"
          color="initial"
          sx={{ textAlign: "justify" }}
        >
          IsentCare, part of Acacium Group, has set the
          industry standard for quality, service and integrity in healthcare
          staffing for over 40 years. We provide a full range of workforce
          solutions including local per diem and travel staffing options for
          nursing and allied health professionals, as well as permanent
          placement, float pool management, and VMS and MSP programs. As one of
          the industry’s fastest growing staffing providers, our mission is to
          create jobs and provide qualified and dependable talent whenever,
          wherever needed. Our people-focused mentality and core value of
          putting others before self has been at the forefront of our company
          culture since we opened in 1981.
        </Typography>
      </Box>
      <Box className="container" sx={{ p: 2 }}>
        <Typography variant="h4" color="Highlight">
          Our History
        </Typography>
      </Box>
      <Box className="container" sx={{ p: 2 }}>
        <Typography variant="h5" color="">
          IsentCare’s success stems from the quality and commitment of our
          employees.
        </Typography>
      </Box>
      <Box className=" d-flex justify-content-center container">
        <Accordions />
      </Box>

      <div className="container-fluid" style={{ paddingTop: "5rem" }}>
        <div className="row">
          <div className="col">
            <div className="container gap-3">
              <div className="row table table-responsive">
                <table className=" table-borderless">
                  <tr className="bottom_border_none">
                    <td>
                      <img
                        src={require("../../assets/ContactUs/OurPartner_1.png")}
                        className="OurPartner_style"
                        alt=""
                      />
                    </td>
                    <td>
                      <img
                        src={require("../../assets/ContactUs/OurPartner_2.png")}
                        className="OurPartner_style"
                        alt=""
                      />
                    </td>
                    <td>
                      <img
                        src={require("../../assets/ContactUs/OurPartner_3.png")}
                        className="OurPartner_style"
                        alt=""
                      />
                    </td>
                    <td>
                      <img
                        src={require("../../assets/ContactUs/OurPartner_4.png")}
                        className="OurPartner_style"
                        alt=""
                      />
                    </td>
                    <td>
                      <img
                        src={require("../../assets/ContactUs/OurPartner_5.png")}
                        className="OurPartner_style"
                        alt=""
                      />
                    </td>
                    <td>
                      <img
                        src={require("../../assets/ContactUs/OurPartner_6.png")}
                        className="OurPartner_style"
                        alt=""
                      />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid bg_sky py-5 mt-5">
        <div className="container">
          <div className=" text-center">
            <h1>Leadership</h1>
          </div>
          <div className="">
            <div className="">
              <div className="p-2 d-flex justify-content-center">
                <img
                  height={"350px"}
                  src={require("../../assets/AboutUs/Christopher-Brink-Web-Square.jpg")}
                  alt=""
                />
              </div>
              <div className="">
                <h5 style={{ textAlign: "center" }}>Christopher Brink</h5>
                <h5 style={{ textAlign: "center", color: "#1F51FF" }}>
                  Chief Executive Officer
                </h5>
                <p style={{ textAlign: "center" }}>
                  Christopher Brink was named Chief Executive Officer of
                  IsentCare Healthcare Staffing and Chief Operating Officer of US
                  Healthcare Solutions for Acacium Group in January 2022. Brink
                  joined IsentCare in 2000 as Controller and was subsequently
                  promoted to Chief Financial Officer where he played a pivotal
                  role in logistics for emergency response management. In
                  January 2019, he was promoted to Chief Operations Officer and
                  then to President in 2020 where he served in this influential
                  role to provide strategic enterprise-wide workforce solutions
                  to our healthcare partners. Under his leadership, IsentCare has
                  moved in to the top 10 of the US largest healthcare staffing
                  firms. Christopher led IsentCare Healthcare Staffing through
                  the acquisition process to join the Acacium Group in December
                  2021.
                </p>
              </div>
            </div>
            <div
              className=" d-flex row  justify-content-center"
              style={{ textAlign: "center", alignItems: "center" }}
            >
              <div className="col-md-6">
                <img
                  height={"350px"}
                  src={require("../../assets/AboutUs/Megan-Web-Square.jpg")}
                  alt=""
                  style={{ padding: "10px", paddingTop: "40px" }}
                />
                <div
                  style={{
                    textAlign: "center",
                    alignItems: "center",
                    marginLeft: "-50px",
                  }}
                >
                  <h5 style={{ textAlign: "center" }}>Megan Barnes</h5>
                  <h6
                    style={{
                      textAlign: "center",
                      alignItems: "center",
                      color: "#1F51FF",
                    }}
                  >
                    Chief People Officer
                  </h6>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  height={"350px"}
                  src={require("../../assets/AboutUs/craig-resized.jpg")}
                  alt=""
                  style={{ padding: "10px", paddingTop: "40px" }}
                />
                <div style={{ textAlign: "center", alignItems: "center" }}>
                  <h5 style={{ textAlign: "center" }}>Craig Lynam</h5>
                  <h6
                    style={{
                      textAlign: "center",
                      alignItems: "center",
                      color: "#1F51FF",
                    }}
                  >
                    Chief Information Officer
                  </h6>
                </div>
              </div>
            </div>
            <div
              className=" d-flex row justify-content-center"
              style={{ textAlign: "center", alignItems: "center" }}
            >
              <div className="col-md-6">
                <img
                  height={"350px"}
                  src={require("../../assets/AboutUs/David-Opperman-scaled.jpg")}
                  alt=""
                  style={{ padding: "10px", paddingTop: "40px" }}
                />
                <div
                  style={{
                    textAlign: "center",
                    alignItems: "center",
                    marginLeft: "-50px",
                  }}
                >
                  <h5 style={{ textAlign: "center" }}>David Opperman</h5>
                  <h6
                    style={{
                      textAlign: "center",
                      alignItems: "center",
                      color: "#1F51FF",
                    }}
                  >
                    Chief Financial Officer
                  </h6>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  height={"350px"}
                  src={require("../../assets/AboutUs/Randy-Web-Square.jpg")}
                  alt=""
                  style={{ padding: "10px", paddingTop: "40px" }}
                />
                <div
                  style={{
                    textAlign: "center",
                    alignItems: "center",
                    marginLeft: "70px",
                  }}
                >
                  <h5 style={{ textAlign: "center" }}>Randy Sparks</h5>
                  <h6
                    style={{
                      textAlign: "center",
                      alignItems: "center",
                      color: "#1F51FF",
                    }}
                  >
                    Chief Sales Officer
                  </h6>
                </div>
              </div>
            </div>
            <div
              className=" d-flex row justify-content-center"
              style={{ textAlign: "center", alignItems: "center" }}
            >
              <div className="col-md-6">
                <img
                  height={"350px"}
                  src={require("../../assets/AboutUs/Keenan-Driver-Web-Square.jpg")}
                  alt=""
                  style={{ padding: "10px", paddingTop: "40px" }}
                />
                <div
                  style={{
                    textAlign: "center",
                    alignItems: "center",
                    marginLeft: "-50px",
                  }}
                >
                  <h5 style={{ textAlign: "center" }}>Keenan Driver</h5>
                  <h6
                    style={{
                      textAlign: "center",
                      alignItems: "center",
                      color: "#1F51FF",
                    }}
                  >
                    Senior Vice President, Branch Sales and Operations
                  </h6>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  height={"350px"}
                  src={require("../../assets/AboutUs/Corey-Shepard-Web-Square.jpg")}
                  alt=""
                  style={{ padding: "10px", paddingTop: "40px" }}
                />
                <div
                  style={{
                    textAlign: "center",
                    alignItems: "center",
                    marginLeft: "70px",
                  }}
                >
                  <h5 style={{ textAlign: "center" }}>Corey Shepard</h5>
                  <h6
                    style={{
                      textAlign: "center",
                      alignItems: "center",
                      color: "#1F51FF",
                    }}
                  >
                    Senior Vice President, Divisional Operations
                  </h6>
                </div>
              </div>
            </div>
            <div
              className="d-flex row justify-content-center"
              style={{ textAlign: "center", alignItems: "center" }}
            >
              <div className="col-md-6">
                <img
                  height={"350px"}
                  src={require("../../assets/AboutUs/Michael-Bellari-Web-Square.jpg")}
                  alt=""
                  style={{ padding: "10px", paddingTop: "40px" }}
                />
                <div
                  style={{
                    textAlign: "center",
                    alignItems: "center",
                    marginLeft: "-50px",
                  }}
                >
                  <h5 style={{ textAlign: "center" }}>Michael Bellari</h5>
                  <h6
                    style={{
                      textAlign: "center",
                      alignItems: "center",
                      color: "#1F51FF",
                    }}
                  >
                    Vice President, Branches
                  </h6>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  height={"350px"}
                  src={require("../../assets/AboutUs/Paul-Brown-Web-Square.jpg")}
                  alt=""
                  style={{ padding: "10px", paddingTop: "40px" }}
                />
                <div
                  style={{
                    textAlign: "center",
                    alignItems: "center",
                    marginLeft: "70px",
                  }}
                >
                  <h5 style={{ textAlign: "center" }}>Paul Brown</h5>
                  <h6
                    style={{
                      textAlign: "center",
                      alignItems: "center",
                      color: "#1F51FF",
                    }}
                  >
                    Vice President, Transformation
                  </h6>
                </div>
              </div>
            </div>
            <div
              className="d-flex row justify-content-center"
              style={{ textAlign: "center", alignItems: "center" }}
            >
              <div className="col-md-6">
                <img
                  height={"350px"}
                  src={require("../../assets/AboutUs/Nicole-Olson-Web-Square.jpg")}
                  alt=""
                  style={{ padding: "10px", paddingTop: "40px" }}
                />
                <div
                  style={{
                    textAlign: "center",
                    alignItems: "center",
                    marginLeft: "-50px",
                  }}
                >
                  <h5 style={{ textAlign: "center" }}>Nicole Olson</h5>
                  <h6
                    style={{
                      textAlign: "center",
                      alignItems: "center",
                      color: "#1F51FF",
                    }}
                  >
                    Vice President, Managed Services and Operations Center
                  </h6>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  height={"350px"}
                  src={require("../../assets/AboutUs/Jeremy-Smoot-scaled.jpg")}
                  alt=""
                  style={{ padding: "10px", paddingTop: "40px" }}
                />
                <div
                  style={{
                    textAlign: "center",
                    alignItems: "center",
                    marginLeft: "70px",
                  }}
                >
                  <h5 style={{ textAlign: "center" }}>Jeremy Smoot</h5>
                  <h6
                    style={{
                      textAlign: "center",
                      alignItems: "center",
                      color: "#1F51FF",
                    }}
                  >
                    Vice President, Marketing
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

<Grid container  className="d-flex justify-content-center ">
  <Grid item xs={12} md={6} className="p-4 "style={{border:" 2px solid black",borderRadius:"20px"}}>
  <Grid item xs={12} className="d-flex justify-content-center ">
    <h2 style={{color:"#00175A",padding:"10px" ,borderBottom:"3px solid #00175A"}}>ISENTCARE</h2>
  </Grid>
  <Grid item xs={12} mt={3}>
    <p style={{color:"#00175A",lineHeight: 1.5,fontSize:"20px"}}>We started IsentCare with the goal of providing dedicated care. This has been made 
      possible by the great talent that our candidates have. We acknowledge the amazing talent,
       hard work and dedication to provide care. We have built a strong relationship with our candidates
        and strong ties with our clients. We specialize in providing healthcare facilities with staffing on per diem,
         contract, temp-to-hire, and direct hire. We also provide home care services
       at home and provide private duty at hospital and other healthcare settings.</p>
  </Grid>
  <Grid item xs={12} className="d-flex justify-content-center ">
    <Button variant="contained" style={{backgroundColor:"#00175A",color:"white"}}>Read More</Button>
  </Grid>
  </Grid>
  </Grid>





      <div className="container-fluid bg_sky py-3 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7 col-sm-12">
              <div className="d-flex align-items-baseline ">
                <img src="./hand_image.png" alt="" />
                <h2>Our</h2>
              </div>
              <h2>Mission Statement </h2>
              <div id="section">
                <div className="article">
                  <p>
                    Our mission at HHI is to help companies meet their staffing
                    needs. We will provide superior health care. HHI will work
                    with organizations of all sizes, providing them with
                    productive and efficient temporary personnel. HHI markets
                    personnel to business, industry, government and healthcare
                    facilities as well as to individuals at home. HHI complies
                    with The Joint Commission Accreditation of Health Care
                    Organizations standards. Ensuring consistent operating
                    policies and procedures is critical to the clients we serve.
                    Below is a summary of the type of healthcare personnel we
                    hire:
                  </p>
                  <p
                    className="moretext"
                    style={!text ? { display: "none" } : { display: "block" }}
                  >
                    Clinical: Registered Nurses, Licensed Practical Nurses,
                    Certified Home Health Aides, Physical Therapist, Nursing
                    Assistants, Respiratory Therapists and a variety of Allied
                    Health Professionals. Keeping both employee and client happy
                    is our goal. We must be aware of the needs of our clients so
                    that they are fully satisfied with every assignment for
                    which we are responsible. Our growth will be evidence that
                    we do this well. We will retained clients who have the
                    skills and the experience from the very inception of our
                    business.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setText(!text)}
                  className="btn btn-link moreless-button"
                >
                  {!text ? "Read More" : "Read Less"}
                </button>
                {/* <a class="moreless-button" href="#">Read more</a> */}
              </div>
            </div>
            <div className="col-sm-12 col-md-5 col-lg-6 text-end">
              <img
                src={require("../../assets/AboutUs/our_mission_image.png")}
                className="img-fluid img_width  pt-md-5 pt-0"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row mb-5 pb-5">
          <div className="col-md-9 text-center text-md-start WHY_JOIN_ANGLED">
            <h2>WHY JOIN Isentcare</h2>
            <p>
              To be trusted as the most devoted place to provide quality
              healthcare and financial solutions.
            </p>
          </div>
          <div className="col-md-3 text-center text-md-start my-auto pb-5">
            <button
              onClick={() => navigate("/jobs")}
              className="px-5 py-2 btn btn-outline-primary"
            >
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid bg_sky div_posetion">
        <div className="container">
          <div className="row justify-content-center gap-5">
            <div className="col-sm-6 col-md-3 img_posetion">
              <img
                src={require("../../assets/AboutUs/about_img_1.png")}
                className="img-fluid"
                alt=""
              />
              <div className="text_on_img">
                <p className="inside_position w-100 text-white">
                  We will provide superior health care.
                </p>
                <h4 className="position_h4 w-100">FLEXIBILITY</h4>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 img_posetion">
              <img
                src={require("../../assets/AboutUs/about_img_2.png")}
                className="img-fluid"
                alt=""
              />
              <div className="text_on_img">
                <p className="inside_position w-100 text-white">
                  HHI markets personnel to business, industry, government and
                  healthcare facilities
                </p>
                <h4 className="position_h4 w-100">EARN MORE</h4>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 img_posetion">
              <img
                src={require("../../assets/AboutUs/about_img_2.png")}
                className="img-fluid"
                alt=""
              />
              <div className="text_on_img">
                <p className="inside_position w-100 text-white">
                  Ensuring consistent operating policies and procedures is
                  critical to the clients we serve.
                </p>
                <h4 className="position_h4 w-100">SIMPLICITY</h4>
              </div>
            </div>
            <div className="text-center btn_posetion">
              <button
                type="button"
                onClick={() => navigate("/jobs")}
                className="btn btn-primary px-5"
                title="Join Now "
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid my-5 bg_sky">
        <div className="container">
          <div className="row text-center py-5">
            <div className="col-12">
              <p>
                Got more questions? Find answers to frequently asked questions
                on our FAQs
              </p>
            </div>
            <div className="col-12 pt-3">
              <button
                type="button"
                className="btn btn-primary px-5"
                onClick={() => navigate("/contact-us")}
                title="Contact"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
