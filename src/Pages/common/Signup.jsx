import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import {InputLabel} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import apiClient from "../../api/apiClient";
import { AdminButton } from "../../components/mui";
import colors from "../../config/colors";
import useApi from "../../hooks/useApi";
import { Helmet } from "react-helmet";
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  useField,
  useFormikContext,
} from "formik";
import * as yup from "yup";
import PhoneInput from "react-phone-number-input/input";
import "react-phone-number-input/style.css";
import FormFieldInput from "../../components/form/FormFieldInput";
import { SocketContext } from "../../socket/SocketProvider";
import { OnInputPhone } from "../../modules/FormHelpers";
import { Input } from "@mui/material";

const validationSchema = yup.object({
  first_name: yup.string().required().label("First Name"),
  last_name: yup.string().required("Last name is required"),
  city: yup.string().required("city is required"),
  zip: yup.string().required("zip is required"),
  photo: yup.mixed().test("fileSize", "File size is too large", (value) => {
    if (!value) {
      return true; // Photo is optional
    }
    return value.size <= 1024 * 1024; // 1 MB
  }),

  state: yup.string().required("State is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required().min(6),
  phone: yup.string().required("Phone is required"),
  password2: yup
    .string()
    .required()
    .min(6)
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .label("Confirm Password"),
});

export default function Signup({ role }) {
  const initial = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: "",
    phone: "",
    role: "",
    photo: null,
    city: "",
    zip: "",
    state: "",
  };
  const { socket, isConnected, listener } = useContext(SocketContext);
  const [next, setNext] = useState(false);
  const [data, setData] = useState(initial);
  const [value, setValue] = useState();
  const [message, setMessage] = useState({ text: "", color: "" });
  const navigate = useNavigate();

  function handleChange(key, value) {
    setData({ ...data, [key]: value });
  }

  // const { request, error, loading } = useApi((data) => apiClient.post('/register/', data));

  async function handleformSubmit(data) {
    // const result = await request(data);
    //console.log(result.ok);

    // if (!result.ok) {
    //   //console.log(result.data.email);
    //   if (result.data.email[0].search("Email") !== -1)
    //     toast.error("Already exists with this email");
    //   else
    //     toast.error("Failed to create");
    //   return;
    // }

    toast.success("Account created. Log in now");
    // if(result.data.user.role=="AG")
    // {socket.send(JSON.stringify({"type":"Agency_Created","Agency_Id":result.data.user.id,"Agency_Name":result.data.user.first_name+" "+result.data.user.last_name}))};
    // if(result.data.user.role=="HO")
    // {socket.send(JSON.stringify({"type":"Hospital_Created","Hospital_Id":result.data.user.id,"Hospital_Name":result.data.user.first_name+" "+result.data.user.last_name}))};
    setNext(true);
  }

  function resetErrors() {
    setMessage({ text: "", color: "" });
  }

  function emptyForm() {
    handleChange(initial);
  }

  function getUserRoute() {
    if (role === "AG") return "/agencies/";
    else if (role === "HO") return "/hospitals/";
    else if (role === "AD") return "/manager/";
  }

  const [routeType] = useState(getUserRoute());
  const { isLoggedIn, userType } = useSelector((state) => state.auth);

  useEffect(() => {
    //console.log(isLoggedIn);
    if (isLoggedIn) {
      if (userType === "HO") {
        navigate("/hospitals");
      } else if (userType === "AG") {
        navigate("/agencies");
      } else if (userType === "AD") {
        navigate("/manager");
      }
    }
  }, []);

  if (isLoggedIn) {
    return null;
  }
  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <Container
        style={{ minHeight: "100vh" }}
        className="d-flex align-items-center"
      >
        <Grid container spacing={2} className="justify-content-center">
          {!next ? (
            <Grid xs={9} sm={7} md={6} lg={4} component={Paper}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                className="p-4"
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box className="text-start w-100">
                    <Typography
                      component="h1"
                      variant="h5"
                      sx={{ color: colors.primary, fontWeight: "bold" }}
                    >
                      Register Now
                    </Typography>
                    {message.text && (
                      <div className={`bg-${message.color} p-1 m-1`}>
                        <span>{message.text}</span>
                      </div>
                    )}
                  </Box>
                  <Formik
                    initialValues={initial}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setErrors, resetForm }) => {
                      handleformSubmit(values);
                      resetForm();
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
                      <Box
                        component="form"
                        id="myForm"
                        onSubmit={handleSubmit}
                        sx={{ mt: 3 }}
                      >
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <FormFieldInput
                              fullWidth
                              size="small"
                              id="fname"
                              label="Firstname"
                              name="first_name"
                              type="text"
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <FormFieldInput
                              fullWidth
                              size="small"
                              name="last_name"
                              type="text"
                              label="Last name"
                              id="lname"
                              autoComplete="lastname"
                            />
                          </Grid>
                          <Grid item xs={12}>
                            {/* <PhoneInput
  placeholder="Enter phone number"
  name="phone"
  label="Phone Number"
  /> */}
                            <FormFieldInput
                              name="phone"
                              fullWidth
                              onInput={OnInputPhone}
                              size="small"
                              placeholder="Enter phone number"
                            />
                          </Grid>

                          <Grid item xs={12}>
                            <FormFieldInput
                              onFocus={resetErrors}
                              fullWidth
                              size="small"
                              name="email"
                              label="Email"
                              type="email"
                              id="password"
                              autoComplete="new-password"
                            />
                          </Grid>
                          {/* <Grid item xs={12}>
                          <FormFieldInput
                            onFocus={resetErrors}
                          
                            fullWidth
                            size="small"
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <FormFieldInput
                            onFocus={resetErrors}
                          
                            fullWidth
                            size="small"
                            name="password2"
                            label="Confirm Password"
                            type="password"
                            id="confirm-password"
                            autoComplete="new-password"
                          />
                        </Grid> */}

                          <Grid item xs={12}>
                          <InputLabel htmlFor="photo">Upload Image</InputLabel>
                            <FormFieldInput
                              onFocus={resetErrors}
                              fullWidth
                              size="small"
                              name="photo"
                             
                              type="file"
                              id="photo"
                              accept="image/*"
                              onChange={(e) =>
                                handleChange("photo", e.target.files[0])
                              }
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <FormFieldInput
                              onFocus={resetErrors}
                              fullWidth
                              size="small"
                              name="city"
                              label="City"
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <FormFieldInput
                              onFocus={resetErrors}
                              fullWidth
                              size="small"
                              name="state"
                              label="State"
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <FormFieldInput
                              onFocus={resetErrors}
                              fullWidth
                              size="small"
                              name="zip"
                              label="zip"
                            />
                          </Grid>
                        </Grid>

                        <AdminButton
                          name="Register"
                          type="submit"
                          size="medium"
                          fullWidth={true}
                          style={{
                            backgroundColor: colors.primary,
                            "&:hover": { backgroundColor: "#002370" },
                            whiteSpace: "nowrap",
                            mt: 3,
                            mb: 2,
                          }}
                          onClick={() => {
                            //console.log("clicked");
                            navigate(routeType + "login");
                          }}
                        />
                        <Grid container justifyContent="space-around">
                          <Grid item>
                            <AdminButton
                              onClick={() => navigate(routeType + "login")}
                              variant="body2"
                              name="Already have an account? Sign in"
                              style={{
                                color: colors.blue,
                                "&:hover": {
                                  color: colors.light,
                                  backgroundColor: "transparent",
                                },
                              }}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                    )}
                  </Formik>
                </Box>
              </Box>
            </Grid>
          ) : (
            <div className=" candidate-info mt-2">
              <Grid
                container
                style={{ minHeight: "90vh", width: "392px" }}
                component={Paper}
              >
                <Grid
                  item
                  xs={12}
                  className="d-flex justify-content-center flex-column align-items-center"
                >
                  <div>
                    <p className="mb-1">
                      Account created succesfully and in review.
                    </p>
                    <p className="d-flex justify-content-center">
                      You will be soon get confirmation email.
                    </p>
                    <div className="d-flex justify-content-center">
                      <Link to={"/"}>
                        <Button variant="contained">Home</Button>
                      </Link>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          )}
        </Grid>
      </Container>
    </div>
  );
}

const CustomPhoneInput = ({ name, ...rest }) => {
  const {
    handleChange,
    errors,
    values,
    touched,
    setFieldTouched,
    setFieldValue,
  } = useFormikContext();
  //console.log(name,"dfsdsfdfsdfsdf");
  return (
    <>
      <PhoneInput
        name={name}
        value={values[name]}
        {...rest}
        onChange={(e) => setFieldValue(name, e)}
        fullWidth
        className="MuiInputBase-input MuiOutlinedInput-input w-100 py-2"
        style={{
          borderRadius: "5px",
          border: "1px solid rgba(0, 0, 0, 0.23)",
          padding: "8px",
          "::placeholder": {
            color: "rgba(0, 0, 0, 0.54)",
          },
        }}
      />
      <ErrorMessage name={name}>
        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
      </ErrorMessage>
    </>
  );
};
