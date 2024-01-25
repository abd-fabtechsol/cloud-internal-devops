import React, { useRef, useState } from "react";
import { TiTick } from "react-icons/ti";
import {
  Button,
  IconButton,
  Box,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  Switch,
  Radio,
  RadioGroup,
  FormLabel,
  FormControl,
  Container,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  InputAdornment,
  OutlinedInput,
  styled,
} from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import InfoIcon from "@mui/icons-material/Info";
import { TfiUpload } from "react-icons/tfi";
import { Link } from "react-router-dom";
import useApi from "../../hooks/useApi";
import apiClient from "../../api/apiClient";
import { toast } from "react-toastify";
import Tooltip from "@mui/material/Tooltip";
import DateField from "../../components/mui/DateField";
import { AdminButton, SelectOption } from "../../components/mui";
import { useEffect } from "react";
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  useFormik,
  useFormikContext,
} from "formik";
import * as yup from "yup";
import Table from 'react-bootstrap/Table';
import FormFieldInput from "../../components/form/FormFieldInput";
import AppErrorMessage from "../../components/form/AppErrorMessage";
import handleErrors from "../../modules/handleErrors.js";
import { useContext } from "react";
import { SocketContext } from "../../socket/SocketProvider";
import { tooltipClasses } from "@mui/material/Tooltip";
import { OnInputPhone } from "../../modules/FormHelpers";
import pdffile from "../../assets/pdffile.pdf";
const AG = process.env.REACT_APP_ANGLED_AGENCY;
const validationSchemas = [
  yup.object({
    current_title: yup.string().required().label("Current Title"),
    // area:yup.string().required(),
    interest: yup.string().required(),
  }),
  yup.object({
    first_name: yup.string().required().label("First Name"),
    last_name: yup.string().required("Last name is required"),
    skill: yup.string().required("skill list in required field"),
    email: yup.string().email("Invalid email").required("Email is required"),

    password: yup.string().required().min(6),

    phone: yup.string().required().label("Phone Number").min(10).max(12),
    confirm_email: yup
      .string()
      .required()
      .label("Confirm Email")
      .oneOf([yup.ref("email"), null], "Email must match"),
    confirm_password: yup
      .string()
      .required()
      .min(6)
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .label("Confirm Password"),
  }),
  yup.object({
    // role: yup.string().required(),
    // company: yup.string().required(),
    // address:yup.string().required(),
    // status:yup.string().required(),

    // class:yup.string().required(),

    zip: yup.number().required(),
    resume: yup.string().required().label("Resume"),
  
    tax_id: yup.string().required().min(10).max(10).label("Tax id"),
    dob: yup
      .date()
      .required("Date of birth is a required field")
      .max(
        new Date(new Date().setFullYear(new Date().getFullYear() - 18)),
        "You must be at least 18 years old"
      )
      .label("Date of Birth"),
    c_city: yup.string().required("City is a required field"),
    license_no: yup.string().required("License Number is a required field"),
    license_state: yup.string().required("State is a required field"),
    license_expiry: yup.string().required("Expiry date is a required field"),
    c_type: yup.string().required("Addresss type is a required field"),
    c_address: yup.string().required("Address is a required field"),
    c_country: yup.string().required("Country is a required field"),
  }),

  yup.object({
    bank_name: yup.string().required().label("Bank Name is required"),
    b_number: yup.string().required().label("Bank Number").min(14).max(16),
    b_city: yup.string().required("City is required"),
    b_state: yup.string().required("State is required"),
    b_zip: yup.number().required(),
    
  }),
];

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

const Register = () => {
  const initialValues = [
    {
      current_title: "",
      interest: "CON",
    },
    {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      phone: "",
      skill:"",
      confirm_email: "",
      confirm_password: "",
      zip: "",
    },
    
    {
      role: "CA",
      company: "",
      address: "",
      state: "",
      class: "",
      area: "",
      A_file:"",
      resume: "",
      tax_id: "",
      dob: "",
      varify_license_no:"",
      license_no:"",
      license_state:"",
      license_expiry:"",
      c_city: "",
      c_type: "",
      c_address: "",
      c_country: "",
    },
    {
      
      bank_name: "",
      b_number: "",
      b_city: "",
      b_state: "",
      b_zip: "",
    },
  ];
  const [emp, setEmp] = useState();
  const [reg, setReg] = useState();
  const [valid, setValid] = useState(false);
  const [message, setMessage] = useState({ text: "", color: "" });
  const { socket, isConnected, listener } = useContext(SocketContext);
  const verifyTaxId = async (data) => {
    const result = await apiClient.post("/Tax/", data);
    if (!result.ok) return toast.error("error");
    //console.log(result);
    setValid(!result.data.status);
    if (result.data.status)
      setMessage({ text: "exist already", color: "danger" });
  };

  const { request, error, loading } = useApi((data) =>
    apiClient.post("/register/", data)
  );
  const apiCandidate = useApi((data) => apiClient.post("/candidates/", data));

  const handleSubmit = async (values) => {
    //console.log(values,"values........");
    let formdata = new FormData();
    formdata.append("first_name", values.first_name);
    formdata.append("last_name", values.last_name);
    formdata.append("email", values.email);
    formdata.append("password", values.password);
    formdata.append("skill", values.skill);
    formdata.append("phone", values.phone);
    formdata.append("first_name", values.first_name);
    formdata.append("role", values.role);
    formdata.append("zip", values.zip);
    formdata.append("current_title", values.current_title);
    // formdata.append("area", values.area);
    formdata.append("looking_for", values.interest);
    formdata.append("resume", values.resume);
    formdata.append("A_file", values.A_file);
    // formdata.append("status", values.status);
    formdata.append("tax_id", values.tax_id.replace("-", ""));
    formdata.append("phone_number", values.phone);
    formdata.append("dob", values.dob);
    formdata.append("candidate_attachments", values.resume);
    formdata.append("candidate_attachments.A_file", values.A_file);
    formdata.append("candidate_address.state", values.first_name);
    formdata.append("candidate_address.city", values.c_city);
    formdata.append("candidate_address.varify_license", values.varify_license_no);
    formdata.append("candidate_address.license", values.license_no);
    formdata.append("candidate_address.license_state", values.license_state);
    formdata.append("candidate_address.expiry", values.license_expiry);
    formdata.append("candidate_address.type", values.c_type);
    formdata.append("candidate_address.address_line_1", values.c_address);
    formdata.append("candidate_address.zip", values.zip);
    formdata.append("candidate_address.name", values.last_name);
    formdata.append("candidate_address.country", values.c_country);
    let result;
    if (!reg) {
      result = await request(formdata);

      if (!result.ok) {
        return toast.error("Can't register");
      }
      //console.log(result,"userdfgdgdfg");
      setReg(result?.data.user.id);
    }
    //console.log(result,"userdfgdgdfg");
    formdata.append("user", reg || result?.data.user.id);
    // login agency

    const result2 = await apiCandidate.request(formdata);
    //console.log(result2,"swsdsdfs");
    if (!result2.ok) return toast.error("Can't create Candidate");

    toast.success("Registration sucessfuly completed");

    socket.send(
      JSON.stringify({
        type: "Candidate_Created",
        User_Id: result?.data?.user?.id,
        User_Name: result2.data.first_name + " " + result2.data.last_name,
      })
    );
    setStep((prev) => prev + 1);
  };
  function resetErrors() {
    setMessage({ text: "", color: "" });
  }

  const form1 = useRef();
  const form2 = useRef();
  const form3 = useRef();
  const form4 = useRef();
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (isConnected && socket) {
      // Use the socket instance here
      // Add event listeners or send messages
      // Example:
      // handleSwitchChange()
    }
  }, [socket, isConnected]);

  // useEffect(() => {
  //   const handleSocketMessage = (data) => {
  //     //console.log(`Received message in MyComponent: ${data}`);
  //     // Handle the received message specifically in this component
  //   };

  //   if (socket) {
  //     listener(handleSocketMessage);
  //   }

  //   return () => {
  //     if (socket) {
  //       socket.removeEventListener('message', handleSocketMessage);
  //     }
  //   };
  // }, [socket, listener]);

  return (
    <div className="container py-5  d-flex justify-content-center">
      <Box className="p-3" component={Paper} style={{ minWidth: "350px" }}>
        <div className=" d-flex justify-content-between px-3">
          <div
            className={`rounded-circle border d-flex align-items-center justify-content-center ${
              step >= 1 && "bg-primary"
            }`}
            style={{ width: "2rem", height: "2rem" }}
          >
            {step >= 1 ? <TiTick /> : "1"}
          </div>
          <hr className="" />
          <div
            className={`rounded-circle border d-flex align-items-center justify-content-center ${
              step >= 2 && "bg-primary"
            }`}
            style={{ width: "2rem", height: "2rem" }}
          >
            {step >= 2 ? <TiTick /> : "2"}
          </div>
          <hr className="border" />
          <div
            className={`rounded-circle border d-flex align-items-center justify-content-center ${
              step >= 3 && "bg-primary"
            }`}
            style={{ width: "2rem", height: "2rem" }}
          >
            {step >= 3 ? <TiTick /> : "3"}
          </div>
          <hr className="border" />
          <div
            className={`rounded-circle border d-flex align-items-center justify-content-center ${
              step >= 4 && "bg-primary"
            }`}
            style={{ width: "2rem", height: "2rem" }}
          >
            {step >= 4 ? <TiTick /> : "4"}
          </div>
          <div
            className={`rounded-circle border d-flex align-items-center justify-content-center ${
              step == 5 && "bg-primary"
            }`}
            style={{ width: "2rem", height: "2rem" }}
          >
            {step >= 5 ? <TiTick /> : "5"}
          </div>
        </div>

        <div className=" d-flex justify-content-between ">
          <div>
            <p className="fs_14">Job Type</p>
          </div>
          <div style={{ marginLeft: "50px" }}>
            <p className="fs_14  ">Contact Information</p>
          </div>
          
          <div>
            <p className="fs_14 text-center">Employement</p>
          </div>
          <div >
            <p className="fs_14  "> Account Details</p>
          </div>
         
         
          <div>
            <p className="fs_14 text-center">profile</p>
          </div>
        </div>

        {/* <div className=" row justify-content-between px-3">
            <div className='col-3 align-items-center'>

            <div
              className={`rounded-circle border  d-flex align-items-center justify-content-center ${step >= 1 && "bg-primary"}`}
              style={{ width: "2rem", height: "2rem" }}
            >

              {step >= 1 ? <TiTick /> : "1"}
            </div>
              <p className="fs_14">Job Type</p>
            </div>
            <div className='col-3 align-items-center'>

            <div
              className={`rounded-circle border  d-flex align-items-center justify-content-center ${step >= 1 && "bg-primary"}`}
              style={{ width: "2rem", height: "2rem" }}
            >

              {step >= 2 ? <TiTick /> : "2"}
            </div>
            <div>

              <p className="fs_14">Contact Information</p>
            </div>
            </div>
            <div className='col-3 align-items-center'>

            <div
              className={`rounded-circle border  d-flex align-items-center justify-content-center ${step >= 1 && "bg-primary"}`}
              style={{ width: "2rem", height: "2rem" }}
            >

              {step >= 3 ? <TiTick /> : "3"}
            </div>
              <p className="fs_14">Employement</p>
            </div>
            <div className='col-3 align-items-center'>

            <div
              className={`rounded-circle border  d-flex align-items-center justify-content-center ${step >= 1 && "bg-primary"}`}
              style={{ width: "2rem", height: "2rem" }}
            >

              {step >= 4 ? <TiTick /> : "4"}
            </div>
              <p className="fs_14">Profile</p>
            </div>
        
          </div> */}
        <Box className="px-3 " maxWidth="md" style={{}}>
          <div
            className={`candidate-detail check ${
              step == 1 ? "d-block" : "d-none"
            }`}
          >
            <Form1
              values={{ step, setStep, initial: initialValues[0], emp, setEmp }}
            />
          </div>
          <div
            className={`candidate-info mt-2 ${
              step == 2 ? "d-block" : "d-none"
            }`}
          >
            <Form2
              values={{ step, setStep, initial: initialValues[1], emp, setEmp }}
            />
          </div>
        
          <div
            className={`candidate-info mt-2 ${
              step == 3 ? "d-block" : "d-none"
            }`}
          >
            <Form3
              values={{
                step,
                setStep,
                initial: initialValues[2],
                // handleSubmit,
                emp,
                setEmp,
                // loading,
                // apiCandidate,
              }}
            />
          </div>
          <div
            className={`candidate-info mt-2 ${
              step == 4 ? "d-block" : "d-none"
            }`}
          >
            <Form4
              values={{ step, setStep, initial: initialValues[3], emp, setEmp ,loading,
               apiCandidate,  handleSubmit,}}
            />
          </div>
        
          
        </Box>
      </Box>
    </div>
  );
};

export default Register;

// const data=[
//   { 
//     ListA:[
//       "documents" , "pssport", "cv"
//     ]
//   },{ 
//     ListB:[
//       "documents" , "pssport", "cv"
//     ]
//   },{ 
//     ListC:[
//       "documents" , "pssport", "cv"
//     ]
//   },
  

// ]

function Form1({ values }) {
  const { step, setStep, emp, initial, setEmp } = values;
  return (
    <Formik
      initialValues={initial}
      // validationSchema={validationSchemas[0]}
      onSubmit={async (values, { setErrors }) => {
        //console.log(values);
        setErrors({});
        setEmp({ ...emp, ...values });

        if (step <= 5) return setStep((prev) => prev + 1);
      }}
    >
      {({
        handleSubmit,
        handleChange,
        setFieldTouched,
        values,
        errors,
        touched,
      }) => (
        <Form onSubmit={handleSubmit} autoComplete="off">
          <div style={{ height: 250, maxHeight: 400, overflowX: "hidden" }}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                display={"flex"}
                style={{ marginTop: 10, width: "60%" }}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Typography style={{ marginRight: "10px" }}>I'm a</Typography>
                {/* <FormFieldInput  fullWidth  name='current_title' type='text'variant="outlined" label="Title" /> */}
                <div className="d-flex  flex-column">
                  <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                    <InputLabel
                      htmlFor="outlined-adornment-password"
                      name="current_title"
                      required
                    >
                      Title{" "}
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      onBlur={() => setFieldTouched("current_title")}
                      onChange={handleChange("current_title")}
                      endAdornment={
                        <InputAdornment
                          position="end"
                          style={{ cursor: "pointer" }}
                        >
                          {/* <IconButton
                  edge="end"
                  title="Your position, designation or job title etc"
                >
                   <InfoIcon/> 
                </IconButton> */}
                          <HtmlTooltip
                            title={
                              <React.Fragment>
                                <Typography color="inherit">
                                  Your position, designation or job title etc
                                </Typography>
                              </React.Fragment>
                            }
                          >
                            <InfoIcon />
                          </HtmlTooltip>
                        </InputAdornment>
                      }
                      label="Title"
                    />
                  </FormControl>

                  <AppErrorMessage name={"current_title"} />
                </div>
              </Grid>

              <Grid
                item
                xs={12}
                spacing={2}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                title="your interest"
              >
                <Typography style={{ marginRight: "10px" }}>
                  Interested in:
                </Typography>
                <FormControl>
                  <RadioGroup
                    row
                    required
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="interest"
                    defaultValue={"CON"}
                    onBlur={() => setFieldTouched("interest")}
                    onChange={handleChange("interest")}
                  >
                    <FormControlLabel
                      value="CON"
                      control={<Radio />}
                      label="Flexiable on demand"
                    />
                    {/*
                    <FormControlLabel
                  value="PRM"
                  control={<Radio />}
                  label="Per Diem Staffing"
                />
                    <FormControlLabel
                      value="CON"
                      control={<Radio />}
                      label="Flexiable on demand"
                    />
                    <FormControlLabel
                      value="CTP"
                      control={<Radio />}
                      label="Temp to Hire"
                    />
                    <FormControlLabel
                      value="PRM"
                      control={<Radio />}
                      label="Permanent Placement"
                    />
                    */ }
                    
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </div>

          <ButtonHandlers values={{ step, setStep, handleSubmit }} />
        </Form>
      )}
    </Formik>
  );
}
function Form2({ values }) {
  const { step, setStep, initial, emp, setEmp } = values;
  return (
    <Formik
      initialValues={initial}
      // validationSchema={validationSchemas[1]}
      onSubmit={async (values, { setErrors }) => {
        //console.log(values);
        setErrors({});
        setEmp({ ...emp, ...values });

        if (step <= 5) return setStep((prev) => prev + 1);
      }}
    >
      {({
        handleSubmit,
        setFieldValue,
        handleChange,
        setFieldTouched,
        values,
        errors,
        touched,
      }) => (
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Grid container spacing={2} className=" p-3">
            <Grid item xs={12} display={"flex"} className="gap-3">
              <FormFieldInput
                containerClass={"w-100"}
                fullWidth
                name="first_name"
                type="text"
                label="First Name"
                title="Enter your first name"
              />
              <FormFieldInput
                containerClass={"w-100"}
                fullWidth
                name="last_name"
                type="text"
                label="Last Name"
                title="Enter your last name"
              />
            </Grid>


           


            <Grid item xs={12} display={"flex"} className="gap-3">
              <FormFieldInput
                containerClass={"w-100"}
                fullWidth
                name="email"
                type="email"
                label="Email"
                title="Enter your email "
              />
              <FormFieldInput
                containerClass={"w-100"}
                fullWidth
                name="confirm_email"
                type="email"
                label="Confirm Email"
                title="confirm your email "
              />
            </Grid>
            <Grid item xs={12} display={"flex"} className="gap-3">
              {/* <FormFieldInput containerClass={"w-100"} fullWidth name='zip' type='number' label="ZIP Code" /> */}
              <FormFieldInput
                containerClass="w-100"
                fullWidth
                name="phone"
                onInput={OnInputPhone}
                type="text"
                label="Phone"
                title="Enter phone number"
              />
            </Grid>

            <Grid item xs={12} >
                  <SelectOption
                    title="select skills"
                    required
                    label="select skills"
                    name="skill"
                    className="py-2 align-center"
                    inputProps={{ maxLength: 150 }}
                    id="outlined-name"
                    data={[
                      { id: "skills 1", name: "skilled Nursing facility" },
                      { id: "skill 2", name: "Nursing Home" },
                      { id: "skill 3", name: "Assigne Living facility" },
                      { id: "skill 4", name: "Hospital" },
                      { id: "skill 5", name: "diagnostic center" },
                      { id: "skill 6", name: "School " },
                      { id: "skill 7", name: "Other " },

                     
                    ]}
                    value={values["skill"]}
                    onChange={(e) => setFieldValue("skill", e.target.value)}
                    fullWidth
                    size={"small"}
                    style={{ marginBottom: "5px", width: "100%" }}
                  />
                  <ErrorMessage name={"skill"}>
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                </Grid>
            <Grid item xs={12} display={"flex"} className="gap-3">
              <FormFieldInput
                containerClass={"w-100"}
                fullWidth
                name="password"
                type="password"
                label="Password"
                title="Enter Password"
              />
              <FormFieldInput
                containerClass={"w-100"}
                fullWidth
                name="confirm_password"
                type="password"
                label="Confirm Password"
                title="confirm Password"
              />
            </Grid>
          </Grid>
          <ButtonHandlers values={{ step, setStep, handleSubmit }} />
        </Form>
      )}
    </Formik>
  );
}
function Form3({ values }) {
  const { step, setStep, initial, emp, setEmp } = values;
  // const {
  //   step,
  //   setStep,
  //   initial,
  //   emp,
  //   setEmp,
  //   handleSubmit: handleSubmitData,
  //   loading,
  //   apiCandidate,
  // } = values;
  // const [status, setStatus] = useState([]);

  // const [count, setcount] = useState(0);
  // const [page, setPage] = useState(1);
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // async function fetchData() {
  //   //   const result3=await apiClient.get(`/GetAT/${AG}`)
  //   // //console.log(result3);
  //   // if(!result3.ok) return toast.error("error")
  //   // const authToken=result3.data?.token
  //   // //console.log(authToken);
  //   //  apiClient.setHeader('Authorization', `Token ${authToken}`)
  //   // const result = await apiClient.get(`/CandidateStatus/?page=${page}`)
  //   // if (!result.ok) return
  //   // //console.log(result, "fetch")
  //   // if (!count)
  //   // setcount(result.data.count)
  //   // setStatus([...status, ...result.data?.results])
  //   // setPage(page + 1)
  // }
  // const handleScroll = (event) => {
  //   const { scrollTop, clientHeight, scrollHeight } = event.target;
  //   if (scrollTop + clientHeight >= scrollHeight - 1) {
  //     if (count > status.length) fetchData();
  //   }
  // };

  return (
    // <Formik
    //   initialValues={initial}
    //   validationSchema={validationSchemas[2]}
    //   onSubmit={async (values) => {
    //     setEmp({ ...emp, ...values });
    //     let data = { ...emp, ...values };
    //     //console.log(emp,values,data,"values");
    //     handleSubmitData(data);
    //   }}
    // >
    <Formik
    initialValues={initial}
    // validationSchema={validationSchemas[2]}
    onSubmit={async (values, { setErrors }) => {
      //console.log(values);
      setErrors({});
      setEmp({ ...emp, ...values });

      if (step <= 5) return setStep((prev) => prev + 1);
    }}
  >
      {({
        handleSubmit,
        handleChange,
        setFieldValue,
        setFieldError,
        setFieldTouched,
        values,
        errors,
        touched,
      }) => {
        const eighteenYearsAgo = new Date();
        eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
        const maxDateValue = `${eighteenYearsAgo.getFullYear()}-${(
          eighteenYearsAgo.getMonth() + 1
        )
          .toString()
          .padStart(2, "0")}-${eighteenYearsAgo
          .getDate()
          .toString()
          .padStart(2, "0")}`;
        return (
          <Form onSubmit={handleSubmit} autoComplete="off">
            <Box style={{ width: "100%" }}>
              <Grid container spacing={2}>
                <label
                  htmlFor="resumeUp"
                  className=" d-flex justify-content-center align-items-center m-3 rounded"
                  style={{
                    height: "300px",
                    width: "100%",
                    borderStyle: "dotted",
                  }}
                >
                  <div
                    className="d-flex flex-column align-items-center gap-1"
                    title="upload CV"
                  >
                    <label style={{ fontWeight: "500" }}>
                      Professional degree <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                    <label>Must be a PDF, DOCX or DOC file type</label>

                    <TfiUpload size={50} />

                    <div className="d-flex justify-content-center">
                      <p className="w-75">{values["resume"].name || ""}</p>
                    </div>
                  </div>
                </label>
                <div className="d-flex w-100 justify-content-center">
                  <ErrorMessage name={"resume"}>
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                </div>
                <input
                  type="file"
                  onChange={(e) =>
                    setFieldValue("resume", e.currentTarget.files[0])
                  }
                  name=""
                  id="resumeUp"
                  hidden
                />

                <Grid item xs={12} md={6} title="Enter your Tax id">
                  <TaxId name={"tax_id"} />
                </Grid>
                <Grid item xs={12} md={6}>
                  {/* <input type="date" id="datemin" name="dob" max={maxDateValue} onBlur={() => setFieldTouched("dob")}
            onChange={handleChange("dob")}/>
              <AppErrorMessage name={"dob"}/> */}
                  {/* <FormFieldInput fullWidth name='dob' defaultValue={maxDateValue} type='date' max={maxDateValue} label="DOB" title="Enter date of birth "/> */}

                  <TextField
                    fullWidth
                    name="dob"
                    required
                    type="date"
                    label="DOB"
                    placeholder=""
                    onBlur={() => setFieldTouched("dob")}
                    onChange={handleChange("dob")}
                    variant="outlined"
                    inputProps={{ max: maxDateValue }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <AppErrorMessage name={"dob"} />
                </Grid>
                {/* <Grid item xs={12} md={6}>


<SelectOption
title="select status"
fieldNames={null}
                      label="Status"
                      name="position"
                     className="py-2 align-center"
                      required
                      // defaultSelected={current.status}
                      inputProps={{ maxLength: 150 }}
                      id="outlined-name"
                      value={values["status"]}
                      onChange={(e) => setFieldValue("status",e.target.value)}
                      data={status}
                      fullWidth
                      size={"small"}
                      style={{ marginBottom: "25px", width: "100%" }}
                      MenuProps={{
                        PaperProps: {
                          onScroll: (e) => handleScroll(e, "status"),
                          style: {
                            maxHeight: "100px",
                            overflowY: "auto",
                          },
                        },
                      }}
                    />





</Grid> */}

                <Grid item xs={12} md={6}>
                  <SelectOption
                    title="select address"
                    required
                    label="Address Type"
                    name="position"
                    className="py-2 align-center"
                    inputProps={{ maxLength: 150 }}
                    id="outlined-name"
                    data={[
                      { id: "Billing Address", name: "Billing Address" },
                      { id: "Main Address", name: "Main Address" },
                      { id: "Home Address", name: "Home Address" },
                      { id: "Business Address", name: "Business Address" },
                      { id: "Other Address", name: "Other Address" },
                    ]}
                    value={values["c_type"]}
                    onChange={(e) => setFieldValue("c_type", e.target.value)}
                    fullWidth
                    size={"small"}
                    style={{ marginBottom: "25px", width: "100%" }}
                  />
                  <ErrorMessage name={"c_type"}>
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                </Grid>
                <Grid item xs={12}>
                  <FormFieldInput
                    fullWidth
                    name="c_address"
                    type="text"
                    label="Street"
                    title="Enter  street name"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormFieldInput
                    fullWidth
                    name="varify_license_no"
                    type="text"
                    label="License No"
                    title="Enter License number"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormFieldInput
                    fullWidth
                    name="license_no"
                    type="text"
                    label="Verify Licence Number"
                    title="verify License number"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormFieldInput
                    fullWidth
                    name="license_state"
                    type="text"
                    label="License State"
                    title="Enter Stete of license"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormFieldInput
                    fullWidth
                    name="license_expiry"
                    type="text"
                    label="Expiry Date"
                    title="Enter Expire date"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormFieldInput
                    fullWidth
                    name="c_city"
                    type="text"
                    label="City"
                    title="Enter city name"
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <FormFieldInput
                    fullWidth
                    name="c_country"
                    type="text"
                    label="State"
                    title="Enter state name"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormFieldInput
                    containerClass={"w-100"}
                    onInput={(e) => {
                      e.target.value = Math.max(0, parseInt(e.target.value))
                        .toString()
                        .slice(0, 5);
                    }}
                    fullWidth
                    name="zip"
                    type="number"
                    label="ZIP Code"
                    title="Enter zip code"
                  />
                </Grid>

                <label
                  htmlFor="FileUp"
                  className=" d-flex justify-content-center align-items-center m-3 rounded"
                  style={{
                    height: "200px",
                    width: "100%",
                    borderStyle: "dotted",
                  }}
                >
                  <div
                    className="d-flex flex-column align-items-center gap-1"
                    title="upload additional documents"
                  >
                    <label style={{ fontWeight: "500" }}>
                      Additional documents <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                    <label>Physical exam, X-ray, HB, Covid-19, Certificate, Training proof</label>

                    <TfiUpload size={50} />

                    <div className="d-flex justify-content-center">
                      <p className="w-75">{values["A_file"].name || ""}</p>
                    </div>
                  </div>
                </label>
                <div className="d-flex w-100 justify-content-center">
                  <ErrorMessage name={"A_file"}>
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                </div>
                <input
                  type="file"
                  onChange={(e) =>
                    setFieldValue("A_file", e.currentTarget.files[0])
                  }
                  name=""
                  id="FileUp"
                  hidden
                />
              </Grid>
              <div>
              <Table  bordered >
      <thead>
        <tr className="bg-white text-black align-items-start">
         
          <th>List A <br></br> Documents that Establish both identity and employement Authorization</th>
          <th className="">List B <br></br> Documents that Establish  identity </th>
          <th>List C <br></br> Documents that Establish  employement Authorization</th>
        </tr>
      </thead>
      <tbody>
       <tr>
        <td className="text-nowrap">U.S Passport or U.S Pssport Card </td>
        <td>Driver License or ID card issued by a state or outlying possession of the united state provided it contain a photograph or information such as name, gender,height, date-of-birth, color, eye, address</td>
        <td>A social security account number card, unless a card include a following number of instruction
          <ol>
            <li className="text-start">Not valid For employement</li>
            <li className="text-start">valid for work only with ins authorization</li>
            <li className="text-start">valid for work only with ins authorization</li>
          </ol>
        </td>
       </tr>
       <tr>
        <td>Permanent resident card</td>
        <td>School id card with photograph</td>
        <td>Certification report of birth issue by the department of state</td>
       </tr>
       <tr>
        <td>Foreign passport card</td>
        <td>Voter's registration card</td>
        <td>Original  or certified copy Certification report of birth issue by the department of state</td>
       </tr>
       <tr>
        <td>Employment Authorization Document that .ntains a phot,raph (Form 1-766) </td>
        <td>U.S militry card or draft card</td>
        <td>Native American tribal documents</td>
       </tr>
       <tr>
        <td> For an individual temporarily authorized to work for a specific employement because of his or her status:
          <ol>
            <li className="text-start">Foreign passport</li>
            <li className="text-start">Form I-94 or form I-94 A that has following:
              <ol>
                <li className="text-start">The same name as passportE</li>
                <li className="text-start">Endorsement of individual status or parrole as long as thta the period of Endorsement has not yet expired. </li>
              </ol>
            </li>
          </ol>
            </td>
        <td>Militry Dependents ID card
          
          <hr />
          <p>Driver License issued by a Canadian government authority</p>
          <hr />
          <p>U.S coast Guard Merchant Mariner card</p>
        </td>
        <td>U.S Citizen ID card </td>
       </tr>
       <tr>
        <td>Employment Authorization Document that .ntains a phot,raph (Form 1-766) </td>
        <td><b>For Person under age 18 who are unable to present document listed above:</b></td>
        <td>Identification card for use of resident Citizen in United state</td>
       </tr>
       <tr>
        <td>Passport From the federal states of Micronesia(FSM) or the republic of the marshal Island (RMI) with form I-94 or form I-94A indicating nonnimmigrant adimission under the comapct of free association between the United State and the FSM or RMI.</td>
        <td>school record or report card
          <hr></hr>
          <p className="mb-0 ">Clinical doctor or hospital record</p>
          <hr />
          <p>
            Day-care or nursery school record
          </p>
        </td>
        <td>Employement authorization documents issued by department of Homeland Security</td>
       </tr>
        
        
        
      </tbody>
    </Table>
              </div>
            </Box>
            <ButtonHandlers values={{ step, setStep, handleSubmit }} />
          </Form>
        );
      }}
    </Formik>
  );
}
function Form4({ values }) {
  //const { step, setStep, initial, emp, setEmp } = values;
   const {
    step,
    setStep,
    initial,
    emp,
    setEmp,
    handleSubmit: handleSubmitData,
    loading,
    apiCandidate,
  } = values;
  const [status, setStatus] = useState([]);

  const [count, setcount] = useState(0);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    //   const result3=await apiClient.get(`/GetAT/${AG}`)
    // //console.log(result3);
    // if(!result3.ok) return toast.error("error")
    // const authToken=result3.data?.token
    // //console.log(authToken);
    //  apiClient.setHeader('Authorization', `Token ${authToken}`)
    // const result = await apiClient.get(`/CandidateStatus/?page=${page}`)
    // if (!result.ok) return
    // //console.log(result, "fetch")
    // if (!count)
    // setcount(result.data.count)
    // setStatus([...status, ...result.data?.results])
    // setPage(page + 1)
  }
  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.target;
    if (scrollTop + clientHeight >= scrollHeight - 1) {
      if (count > status.length) fetchData();
    }
  };
  console.log(step,"atepppppp")
  return (
    // <Formik
    //   initialValues={initial}
    //   validationSchema={validationSchemas[3]}
    //   onSubmit={async (values, { setErrors }) => {
    //     //console.log(values);
    //     setErrors({});
    //     setEmp({ ...emp, ...values });

    //     if (step <= 4) return setStep((prev) => prev + 1);
    //   }}
    // >
     <Formik
      initialValues={initial}
      // validationSchema={validationSchemas[3]}
      onSubmit={async (values) => {
        setEmp({ ...emp, ...values });
        let data = { ...emp, ...values };
        //console.log(emp,values,data,"values");
        handleSubmitData(data);
      }}
    >
      {({
        handleSubmit,
        setFieldValue,
        handleChange,
        setFieldTouched,
        values,
        errors,
        touched,
      }) => (
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Grid container spacing={2} className=" p-3">
            <Grid item xs={12} display={"flex"} className="gap-3">
              <FormFieldInput
                containerClass={"w-100"}
                fullWidth
                name="bank_name"
                type="text"
                label="bank Name"
                title="Enter your bank name"
              />
             
            </Grid>
            <Grid item xs={12} display={"flex"} className="gap-3">
            <FormFieldInput
                containerClass={"w-100"}
                fullWidth
                name="b_number"
                type="text"
                label="Bank Number"
                title="Enter your Bank number"
              />

             </Grid>


            <Grid item xs={12} display={"flex"} className="gap-3">
              <FormFieldInput
                containerClass={"w-100"}
                fullWidth
                name="b_city"
                type="text"
                label="Bank City"
                title="Enter your Bank ciyt name "
              />
              <FormFieldInput
                containerClass={"w-100"}
                fullWidth
                name="b_state"
                type="text"
                label="State Name"
                title="Enter state name "
              />
               <FormFieldInput
                containerClass={"w-100"}
                fullWidth
                name="b_zip"
                type="number"
                label="zip code"
                title="Enter Zip code "
              />
            </Grid>
            
          </Grid>

          <div className="d-flex flex-row gap-4 ps-4 mt-2" >
         
          <Link to={pdffile} target="_blank" rel="noopener noreferrer" className="bg-color btn-padding button ">pdf File</Link>
          <a href={pdffile} className="bg-color4 btn-padding button " download>Download</a>
          <div>
  
    
 
</div>

          </div>
          <ButtonHandlers values={{ step, setStep, handleSubmit }} />
        </Form>
      )}
    </Formik>
  );
}

const TaxId = () => {
  const {
    values,
    errors,
    touched,
    setFieldValue,
    setFieldError,
    setFieldTouched,
  } = useFormikContext();
  const [taxId, setTaxId] = useState(values.tax_id || "");

  const verifyTaxId = async (data) => {
    const result = await apiClient.post("/Tax/", {
      tax_id: data.replace("-", ""),
    });
    if (!result.ok) {
      setFieldError("tax_id");
    } else if (result.data.status) {
      setFieldError("tax_id", "Tax ID already exists");
    } else {
      setFieldError("tax_id", "");
    }
  };

  useEffect(() => {
    if (taxId.length > 2) {
      const valueWithoutHyphen = taxId.replace(/-/g, "");
      setTaxId(
        valueWithoutHyphen.slice(0, 2) + "-" + valueWithoutHyphen.slice(2)
      );
    }
    if (taxId.length === 10) {
      verifyTaxId(taxId);
    }
  }, [taxId]);
  useEffect(() => {
    //console.log(errors,"errors")
  }, [errors]);
  const name = "tax_id";
  // useEffect(() => {
  //   if (taxId.length === 3) {
  //     setTaxId(prevTaxId => prevTaxId + '-');
  //   }
  // }, [taxId]);

  // const handleInputChange = (e) => {
  //   const inputValue = e.target.value.replace(/-/g, ''); // Remove existing hyphens
  //   if (!isNaN(inputValue)) {
  //     const formattedValue = inputValue.slice(0, 3) + '-' + inputValue.slice(3);
  //     setTaxId(formattedValue);
  //     setFieldValue('tax_id', formattedValue);
  //   }
  // };
  return (
    <div>
      <TextField
        fullWidth
        name={name}
        required
        type=""
        label="Tax ID"
        value={taxId}
        variant="outlined"
        onBlur={() => setFieldTouched(name)}
        onInput={(e) => {
          e.target.value = e.target.value.slice(0, 10).replace(/[^\d-]/g, "");
        }}
        onChange={(e) => {
          const value = e.target.value;
          if (value !== taxId) {
            setTaxId(value);
            setFieldValue(name, value);
          }
        }}
      />
      {touched.tax_id && <span style={{ color: "red" }}>{errors.tax_id}</span>}
    </div>
  );
};

const ButtonHandlers = ({ values }) => {
  const { step, setStep, handleSubmit, loading, apiCandidate } = values;
  console.log(step,"")
  return (
    <div
      className="gap-2"
      style={{
        display: "flex",
        marginTop: "10px",
        justifyContent: "flex-end",
        paddingBottom: "10px",
      }}
    >
      {/* <button className="btn btn-outline-primary" onClick={()=>step>1&&setStep(step-1)}>
        Previous
        </button> */}
      {step > 1 && (
        <AdminButton
          name={"Back"}
          disabled={loading || apiCandidate?.loading}
          variant="contained"
          onClick={() => {
            setStep(step - 1);
          }}
        />
      )}
      {
        <AdminButton
          loading={loading || apiCandidate?.loading}
          variant="contained"
          type="submit"
          onClick={handleSubmit}
          name={step == 4 ? "Create" : "Next"}
        />
      }
    </div>
  );
};
