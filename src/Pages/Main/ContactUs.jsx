import { Toolbar } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { isMobile } from "react-device-detect";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import apiClient from "../../api/apiClient";
import { LoadingOverlaySmall } from "../../components/mui/LoadingOverlay";
import "./styles/Contact_Us.css";
import { toast } from "react-toastify";
// import * as yup from 'yup';
// import { isValidEmail } from '../../services/validator';
// import Joi from "joi-browser";
// import { func } from 'joi';

// const validateCOntactUs = (user) => {
//   const schema = Joi.object({
//     email: Joi.string().email().required(),
//   });

//   const val = schema.validate(user);
//   if (val.error) return val.error.message;
// };

function ContactUs(props) {
  const emptyFields = {
    f_name: "",
    l_name: "",
    title: "",
    email: "",
    description: "",
  };

  const navigate = useNavigate();
  const { formEnable, setFormEnable, open, setOpen } = useOutletContext();
  const [contactUs, setContactUs] = useState(emptyFields);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", color: "" });
  function handleChange(key, value) {
    setContactUs({ ...contactUs, [key]: value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    resetErrors();
    setLoading(true);
    const response = await apiClient.post("/ContactUs/", contactUs);
    setLoading(false);
    if (response.status != 201)
      return toast.error("Error occured while Submiting Data try again");
    toast.success("Message Sent");
    setContactUs(emptyFields);
  };

  function resetErrors() {
    setMessage({ text: "", color: "" });
  }
  return (
    <div>
      <Helmet>
        <title>ContactUs</title>
      </Helmet>
      {/* <div className='container-fluid mb-5' style={{paddingTop : '2rem'}}>
    <div className='row'>
      <div className='col text-center'>
      <video className='' width="95%" height="350" autoPlay muted  style={{borderRadius : '15px', border :'1px solid black'}} >
      <source src={require("../../assets/Blogs/video.mp4")} type="video/mp4"/>
     </video>
     <div class="overlay">
        <h2>Contact Us</h2>
        <button className='btn Apply'>Sign in to Apply</button>
        <button className='btn playbtn'><img src={require("../../assets/Blogs/play-circle.png")} /></button>
    </div>
      </div>
    </div>
  </div> */}
      <div className="container-fluid py-5">
        <div className="row back_img my-3 mx-0 mx-sm-4">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 pt-3 ps-sm-5 my-auto">
            <h1 className="Hfs_16">Contact Us</h1>
            {/* {!auth.isLoggedIn&&<button type="button"
        onClick={()=>{
          if(isMobile)
          setOpen(true)
          else
          window.scrollTo({
           top: 0,
           behavior: 'smooth',
         });
           navigate('/')
          setFormEnable(true)
         }}
        className="px-4 py-2 mt-3 Contact_btn" >Sign in to Apply</button>} */}
            <img
              src={require("../../assets/Blogs/play-circle.png")}
              alt=""
              className="play_img ms-3"
            />
          </div>
        </div>
      </div>

      <div className="container py-2  mt-5">
        <div className="row pb-2 mt-5  ">
          <div className="col-md-9 text-center text-md-start  WHY_JOIN_ANGLED">
            <h2>WHY JOIN Isentcare INC</h2>
            <p>
              Our mission at HHI is to help companies meet their staffing needs.
              We will provide superior health care.
            </p>
          </div>
          {/* <div className="col-md-3 text-center text-md-start my-auto pb-5">
            <button
              onClick={() => navigate("/jobs")}
              className="px-5 py-2 btn btn-outline-primary"
              title="Join"
            >
              Join
            </button>
          </div> */}
        </div>
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col mb-4">
                  <input
                    type="text"
                    value={contactUs.title}
                    className="form-control"
                    placeholder="Title"
                    name="title"
                    title="Enter yourTitle"
                    required
                    onChange={(e) => handleChange("title", e.target.value)}
                    onFocus={resetErrors}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 mb-4">
                  <input
                    type="text"
                    value={contactUs.f_name}
                    className="form-control"
                    placeholder="First Name"
                    name="firstname"
                    title="Enter your First Nmae"
                    required
                    onChange={(e) => handleChange("f_name", e.target.value)}
                    onFocus={resetErrors}
                  />
                </div>
                <div className="col-sm-6 mb-4">
                  <input
                    type="text"
                    value={contactUs.l_name}
                    className="form-control"
                    placeholder="Last Name"
                    name="lastname"
                    title="Enter your Last Name"
                    required
                    onChange={(e) => handleChange("l_name", e.target.value)}
                    onFocus={resetErrors}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col mb-4">
                  <input
                    type="text"
                    value={contactUs.email}
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    title="Enter Email"
                    required
                    onChange={(e) => handleChange("email", e.target.value)}
                    onFocus={resetErrors}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col mb-4">
                  <textarea
                    className="form-control"
                    value={contactUs.description}
                    rows={5}
                    id="comment"
                    name="text"
                    placeholder="Message"
                    defaultValue={""}
                    required
                    onChange={(e) =>
                      handleChange("description", e.target.value)
                    }
                    onFocus={resetErrors}
                  />
                </div>
              </div>
              {message.text && (
                <div className={`bg-${message.color} p-1 m-1`}>
                  <span>{message.text}</span>
                </div>
              )}
              {!loading ? (
                <button
                  type="submit"
                  className="btn btn-primary px-3 mb-4"
                  title="Send Message"
                >
                  Send Message
                </button>
              ) : (
                <LoadingOverlaySmall open={loading} />
              )}
            </form>
          </div>
          {/* <div className="col-12 col-sm-12 col-md-6 text-md-end">
        <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12437.179911665256!2d-77.0516895!3d38.8027939!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe7cfb8282e5da515!2sAngle%20Incorporated!5e0!3m2!1sen!2s!4v1672476386700!5m2!1sen!2s" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div> */}
        </div>
        <div className="row mb-2 mt-5">
          <div className="col-lg-6 col-md-8 text-center text-md-start">
            <p className="fs_18 text-primary">LET'S TALK US</p>
            <h5>Drop A Message</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="container gap-3">
                <div className="row table table-responsive">
                  <table className="table-borderless">
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
        <div className="row mb-5">
          <div className="col-md-4 d-flex justify-content-center justify-content-md-start ">
            <div className=" d-flex">
              <div>
                <img
                  src={require("../../assets/ContactUs/place.png")}
                  className="Place_imag_size"
                  alt=""
                />
              </div>
              <div className="pt-1 ms-2">
                <h6>Office</h6>
                <p>33 Walker Road, Suite A, North Andover, MA 01845</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center justify-content-md-start ">
            <div className=" d-flex">
              <div>
                <img
                  src={require("../../assets/ContactUs/tel.png")}
                  className="imag_size"
                  alt=""
                />
              </div>
              <div className="pt-1 ms-2">
                <h6>Call Us</h6>
                <p className="mb-0">+978 258 1332</p>
                {/* <p>+33 6 99 16 51 37</p> */}
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center justify-content-md-start ">
            <div className=" d-flex">
              <div>
                <img
                  src={require("../../assets/ContactUs/email.png")}
                  className="imag_size"
                  alt=""
                />
              </div>
              <div className="pt-1 ms-2">
                <h6>Email</h6>
                <p className="mb-0">info@isentcare.com</p>
                {/* <p>userone@gail.com</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
