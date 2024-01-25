import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Facilities = () => {
  return (
    <>
      <div className="bg-facilities d-flex align-items-center justify-content-start mb-5">
        <div className="col-md-6 ms-5 mb-5">
          <h1 className="text-light fw-bold">Give Your Residents</h1>
          <h1 className="text-light fw-bold">the Care They Deserve</h1>
        </div>
      </div>

      <div className=" container d-flex align-items-center gap-3 justify-content-center py-3">
        <div>
          <button
            className="text-white btn btn_bg"
            // onClick={() => navigate("/apply")}
            title="Quick Apply"
          >
            Sign with us
          </button>
        </div>
        <div>
          <p className="mb-0 fw-bold fs-1 text-muted">
            Flexible on demand staffing
          </p>
        </div>
      </div>

      <div className=" container mb-5">

      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 ">
          <ul style={{listStyle:"none"}}>
            <li>
              <div className="d-flex align-items-center white_space">
            <div class="bg-white my-auto mx-2 p-2 border_radu d-flex ">
                <img
                  src={require("../../assets/tick-inside-circle.png")}
                  style={{ width: "35px", height: "35px" }}
                />
            </div>
              
              <Link style={{ textDecoration: "none", }}> 
              <h5>
                Simple to use
                </h5>              
              </Link>
              </div>
            </li>

            <li>
              <div className="d-flex align-items-center white_space">
            <div class="bg-white my-auto mx-2 p-2 border_radu d-flex ">
                <img
                  src={require("../../assets/tick-inside-circle.png")}
                  style={{ width: "35px", height: "35px" }}
                />
            </div>
              
              <Link style={{ textDecoration: "none", }}> 
              <h5>
              Get staff
                </h5>              
              </Link>
              </div>
            </li>

            <li>
              <div className="d-flex align-items-center white_space">
            <div class="bg-white my-auto mx-2 p-2 border_radu d-flex ">
                <img
                  src={require("../../assets/tick-inside-circle.png")}
                  style={{ width: "35px", height: "35px" }}
                />
            </div>
              
              <Link style={{ textDecoration: "none", }}> 
              <h5>
              Cover your shift
                </h5>              
              </Link>
              </div>
            </li>

          </ul>
        </div>        
      
        <div className="col-md-6">
          <div className="col-md-8">
          <img className="img-fluid" src={require("./homeassets/Applyjobs.png")} alt="" />
          </div>
        </div>
   
      </div>



        <div className="py-4">
          <h1 className="text-primary text-center py-4">How it works</h1>
          <div className="row">
          <div className="col-md-6">
          <ul style={{listStyle:"none"}}>
          <li>
              <div className="d-flex align-items-center white_space">
            <div class="bg-white my-auto mx-2 p-2 border_radu d-flex ">
                <img
                  src={require("../../assets/tick-inside-circle.png")}
                  style={{ width: "35px", height: "35px" }}
                />
            </div>
              
              <Link style={{ textDecoration: "none", }}> 
              <h5>
              Sign up with Isentcare
                </h5>              
              </Link>
              </div>
            </li>

            <li>
              <div className="d-flex align-items-center white_space">
            <div class="bg-white my-auto mx-2 p-2 border_radu d-flex ">
                <img
                  src={require("../../assets/tick-inside-circle.png")}
                  style={{ width: "35px", height: "35px" }}
                />
            </div>
              
              <Link style={{ textDecoration: "none", }}> 
              <h5>
              Post your open shift
                </h5>              
              </Link>
              </div>
            </li>

            <li>
              <div className="d-flex align-items-center white_space">
            <div class="bg-white my-auto mx-2 p-2 border_radu d-flex ">
                <img
                  src={require("../../assets/tick-inside-circle.png")}
                  style={{ width: "35px", height: "35px" }}
                />
            </div>
              
              <Link style={{ textDecoration: "none", }}> 
              <h5>
              Review request from our <br /> healthCare professional ask approve
                </h5>              
              </Link>
              </div>
            </li>


          </ul>
          </div>

          <div className="col-md-6">
          <div className="col-md-8">
          <img className="img-fluid" src={require("./homeassets/mack book.png")} alt="" />
          </div>
        </div>

          </div>
        </div>


        <div className="py-4">
          <h1 className="text-primary text-center py-5">We can Help with</h1>
          <div className="row">
          <div className="col-md-6">
          <ul style={{listStyle:"none"}}>
          <li>
              <div className="d-flex align-items-center white_space">
            <div class="bg-white my-auto mx-2 p-2 border_radu d-flex ">
                <img
                  src={require("../../assets/tick-inside-circle.png")}
                  style={{ width: "35px", height: "35px" }}
                />
            </div>
              
              <Link style={{ textDecoration: "none", }}> 
              <h5>
              Temp fixed term contract
                </h5>              
              </Link>
              </div>
            </li>

            <li>
              <div className="d-flex align-items-center white_space">
            <div class="bg-white my-auto mx-2 p-2 border_radu d-flex ">
                <img
                  src={require("../../assets/tick-inside-circle.png")}
                  style={{ width: "35px", height: "35px" }}
                />
            </div>
              
              <Link style={{ textDecoration: "none", }}> 
              <h5>
              Direct Hire
                </h5>              
              </Link>
              </div>
            </li>

            <li>
              <div className="d-flex align-items-center white_space">
            <div class="bg-white my-auto mx-2 p-2 border_radu d-flex ">
                <img
                  src={require("../../assets/tick-inside-circle.png")}
                  style={{ width: "35px", height: "35px" }}
                />
            </div>
              
              <Link style={{ textDecoration: "none", }}> 
              <h5>
              Allied Health
                </h5>              
              </Link>
              </div>
            </li>

            <li>
              <div className="d-flex align-items-center white_space">
            <div class="bg-white my-auto mx-2 p-2 border_radu d-flex ">
                <img
                  src={require("../../assets/tick-inside-circle.png")}
                  style={{ width: "35px", height: "35px" }}
                />
            </div>
              
              <Link style={{ textDecoration: "none", }}> 
              <h5>
             Non clinical
                </h5>              
              </Link>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center white_space">
            <div class="bg-white my-auto mx-2 p-2 border_radu d-flex ">
                <img
                  src={require("../../assets/tick-inside-circle.png")}
                  style={{ width: "35px", height: "35px" }}
                />
            </div>
              
              <Link style={{ textDecoration: "none", }}> 
              <h5>
              Home Health
                </h5>              
              </Link>
              </div>
            </li>


          </ul>
        </div>

          <div className="col-md-6">
          <div className="col-md-8">
          <img className="img-fluid" src={require("./homeassets/Applyjobs.png")} alt="" />
          </div>
        </div>

          </div>
        </div>





        <div className="d-flex justify-content-center">
          <button
            className="text-white btn btn_bg"
            // onClick={() => navigate("/apply")}
            title="Quick Apply"
          >
            Fill Request form
          </button>
        </div>
        <div></div>
      </div>

      <div className="container w-50 text-center mb-5">
        <p className="fs-1 fw-bold text-primary">
          {/* Scared That Staff Turnover Is Hurting Care Consistency at Your
          Healthcare Facility? */}
          Experiencing Staffing Challenges Wan't your shift convert?
        </p>
        <p className="fs-5 text-dark">
        Join our easy to use flexible temporary hosting platform  to access our nursing and Healthcare professionals

          {/* Looking for per-diem nurses to fill your staffing needs? Tap into
          IsentCare's team of over 50,000  to keep your healthcare
          facility staffed with qualified and engaged nursing professionals. */}
        </p>
        <Link to={"/apply"}>
          <button className="btn btn-primary rounded-pill">Talk to us</button>
        </Link>
      </div>

      <div className="container w-50 mb-5">
        <p className="fs-1 fw-bold text-center text-primary">
          Healthcare Staffing Done Right
        </p>
      </div>

      <div className="container d-flex justify-content-center flex-wrap gap-5">
        <div class="card border-0" style={{ width: "22rem" }}>
          <img
            src={require("../../assets/fab.jpg")}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body px-0 text-justify">
            <h5 class="card-title text-primary fs-4">
              Skilled Nursing Facilities &  Rehabilitation facilities
            </h5>
            <p class="card-text fs-5 text-dark">
            Put an end to unsafe staffing ratios at your nursing home facility. IsentCare's team of thousands of RNs, LPNs, CMAs, and CNAs has your SNF covered. Skilled nursing facilities work with us when they have staffing problems so that they can provide safe care to their patients.
            </p>
            <p class="card-text fs-5 text-dark">
            Skilled nursing facilities work with us when they have staffing problems so that they can provide safe care to their patients.
            </p>
          </div>
        </div>
        <div class="card border-0" style={{ width: "22rem" }}>
          <img
               src={require("../../assets/fab3.jpg")}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body px-0 text-justify">
            <h5 class="card-title text-primary fs-4">
              {/* Rehabilitation Facilities */}

              Assisted Living facilities
            </h5>
            <p class="card-text fs-5 text-dark">
              Ensure the continuity of care at your rehab center by teaming up
              with IsentCare’s pre-qualified and trained rehabilitation
             
            </p>
            <p class="card-text fs-5 text-dark">
            We provide Healthcare staff to assisted living facilities to cover your open and hard-to-fill shifts.
             
            </p>
          </div>
        </div>
        <div class="card border-0" style={{ width: "22rem" }}>
          <img
               src={require("../../assets/fa2.jpg")}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body px-0 text-justify">
            <h5 class="card-title text-primary fs-4">
              {/* Senior & Assisted Living Facilities */}
              Hospital , schools and other Healthcare facilities.
            </h5>
            <p class="card-text fs-5 text-dark">
            Achieve your optimal fill rates with training to provide
              specialized care to seniors with severe illnesses or injuries.
              While Hospitals continue to experience staffing shortages, We are always able to step in to help with our specialized Healthcare professional
            </p>
          </div>
        </div>
      </div>

      <Box sx={{ flexGrow: 1 }} style={{ marginTop: "4rem" }}>
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
                  src={require("../../assets/fa5.jpg")}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderBottomRightRadius:"100px"
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
              <Typography variant="h4" className="mb-2 text-primary fw-bold">
                Professionalish Your Healthcare Facility
              </Typography>

              <p
                className="fs-5"
                style={{
                  textAlign: "justify",
                  paddingBottom: "1rem",
                }}
              >
                IsentCare vets each of our IsentCarePros to ensure full compliance
                with federal, state, and local regulations, accreditation
                bodies, and your healthcare facility’s specific requirements.
                During the credential verification process, we’re checking for
                work licenses, state-required criminal record checks, Medicare &
                Medicaid Sanction Reports, and more to keep you and residents
                protected.
              </p>
            </div>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
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
              <Typography variant="h4" className="mb-2 text-primary fw-bold">
                Providing the Highest Quality lntegrity Care
              </Typography>

              <p
                className="fs-5"
                style={{
                  textAlign: "justify",
                  paddingBottom: "1rem",
                }}
              >
                IsentCare employs a Quality Assurance team of former DPH/DOH
                auditors, Directors of Nursing, staff nurses, and more. If
                there’s an incident or allegation at your healthcare facility,
                our QA team will conduct a workplace investigation and
                immediately follow up with our administration and clinical
                leadership.
              </p>
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
              <img
                  src={require("../../assets/employers-4.jpg")}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderBottomLeftRadius:"100px"
                }}
              />
            </div>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
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
                   src={require("../../assets/fa.jpg")}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderBottomRightRadius:"100px"
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
              <Typography variant="h4" className="mb-2 text-primary fw-bold">
                 Accountability
              </Typography>

              <p
                className="fs-5"
                style={{
                  textAlign: "justify",
                  paddingBottom: "1rem",
                }}
              >
                We incentivize our nurses and nursing assistants to be at their
                professional best. The IsentCare app provides training and
                information specific to your healthcare facility and our levels
                system rewards our IsentCare employee to not release shifts at the last
                minute or show up late. Plus, the IsentCare platform lets you
                track and rate the clinical performance and professionalism of
                the individuals working in your building.
              </p>
            </div>
          </Grid>
        </Grid>
      </Box>

      <div className="container px-5 mt-5 mb-5">
        <div className="row bg-primary rounded-3">
          <div className="col-md-6 pt-5 pb-5 ms-3">
            <Typography variant="h4" className="mb-2 text-light fw-bold">
             Our technology
                         </Typography>

            <p
              className="fs-6 text-light"
              style={{
                textAlign: "justify",
                paddingBottom: "1rem",
              }}
            >
      
      Isencare's technology is simple easy to use and gives quick access to our Nursing and Healthcare professionals.
            </p>
            <Link to={"/hospitals/register"}>
              <button className="btn btn-primary bg-light text-primary rounded-pill">
                Talk to us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Facilities;
