import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React from "react";
import { styled } from '@mui/system';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import colors from "../../config/colors";
import CaptchaButton from "../../components/mui/CaptchaButton";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
// Create a custom theme with modified asterisk color
const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          height: "40px", // Change the input height to 40px
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "black",
          fontWeight: "bold", // Change the label color to blue
        },
        asterisk: {
          color: "red", // Change the asterisk color to red
        },
      },
    },
    
   
  },
});
const PartnerWithUs = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <div className="d-flex justify-content-center">
          <p
            className="w-75 text-center "
            style={{ fontSize: "3rem", fontWeight: "bold", color: "#071641" }}
          >
            Affiliate Vendor Screening Questionnaire
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div>
              <label className="d-flex">
                <p>
                  <strong>
                    Have you been in business for at least 12 months?
                  </strong>
                </p>
                <p className="hs-form-required ">*</p>{" "}
              </label>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Yes"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>} />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>} />} label="No" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <label className="d-flex">
                <p>
                  <strong>
                    Do you assume sole responsibility as the employer of record
                    for the payment of wages to your temporary employees (W2)
                    and for the withholding of applicable federal, state and
                    local income taxes, the making of required Social Security
                    tax contributions, and the meeting of all other statutory
                    employer responsibilities (including, but not limited to,
                    unemployment and worker’s compensation insurance, payroll
                    excise taxes, etc.)?
                  </strong>
                </p>
                <p className="hs-form-required ">*</p>{" "}
              </label>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Yes"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>} />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>} />} label="No" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <label className="d-flex">
                <p>
                  <strong>
                    Do you maintain general liability insurance and professional
                    liability insurance with limits equal to or greater than
                    $1,000,000 per occurrence and $3,000,000 aggregate and will
                    provide certificates of insurance naming IsentCare Healthcare
                    Staffing, Inc. as an additional insured?
                  </strong>
                </p>
                <p className="hs-form-required ">*</p>{" "}
              </label>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Yes"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>} />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>} />} label="No" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <TextField
                id="name"
                label="Company Legal Name"
                variant="standard"
                className="w-100"
              />
              <TextField
                id="name"
                label="DBA"
                variant="standard"
                className="w-100"
              />
              <TextField
                id="name"
                label="Street address"
                variant="standard"
                required
                className="w-100"
              />
              <TextField
                id="name"
                label="City"
                variant="standard"
                className="w-100"
                required
              />
              <TextField
                id="name"
                label="AL"
                variant="standard"
                className="w-100"
              />
              <TextField
                id="name"
                label="Zip"
                variant="standard"
                required
                className="w-100"
              />
              <TextField
                id="name"
                label="Federal ID #"
                variant="standard"
                className="w-100"
              />
              <TextField
                id="name"
                label="Date Company Started"
                variant="standard"
                className="w-100"
                required
              />
              <select
                style={{
                  lineHeight: 1.3,
                  fontSize: "1.2rem",
                  color: "#071641",
                  fontFamily: "Montserrat, serif",
                  padding: "10px 0px",
                  height: 60,
                  border: 0,
                  borderBottom: "1px solid grey",
                  fontWeight: "bold",
                }}
                class="w-100"
              >
                <option disabled selected value="">
                  Type of Business
                </option>
                <option value="Corporation">Corporation</option>
                <option value="Partnership">Partnership</option>
                <option value="Limited Liability Company">
                  Limited Liability Company
                </option>
                <option value="Limited Liability Partnership">
                  Limited Liability Partnership
                </option>
                <option value="Limited Partnership">Limited Partnership</option>
                <option value="Sole Proprietorship">Sole Proprietorship</option>
              </select>
              <TextField
                id="name"
                label="Parent/Affiliate Company"
                variant="standard"
                className="w-100"
              />
              <select
                style={{
                  lineHeight: 1.3,
                  fontSize: "1.2rem",
                  color: "#071641",
                  fontFamily: "Montserrat, serif",
                  padding: "10px 0px",
                  height: 60,
                  border: 0,
                  borderBottom: "1px solid grey",
                  fontWeight: "bold",
                }}
                class="w-100"
              >
                <option disabled selected value="">
                  State Incorporated In
                </option>
                <option value="SC">SC</option>
                <option value="SD">SD</option>
                <option value="TN">TN</option>
                <option value="TX">TX</option>
                <option value="UT">UT</option>
                <option value="VT">VT</option>
                <option value="VA">VA</option>
                <option value="WA">WA</option>
                <option value="WV">WV</option>
                <option value="WI">WI</option>
                <option value="WY">WY</option>
                <option value="AL">AL</option>
                <option value="AK">AK</option>
                <option value="AZ">AZ</option>
                <option value="AR">AR</option>
                <option value="CA">CA</option>
                <option value="CO">CO</option>
                <option value="CT">CT</option>
                <option value="DE">DE</option>
                <option value="DC">DC</option>
                <option value="FL">FL</option>
                <option value="GA">GA</option>
                <option value="HI">HI</option>
                <option value="ID">ID</option>
                <option value="IL">IL</option>
                <option value="IN">IN</option>
                <option value="IA">IA</option>
                <option value="KS">KS</option>
                <option value="KY">KY</option>
                <option value="LA">LA</option>
                <option value="ME">ME</option>
                <option value="MD">MD</option>
                <option value="MA">MA</option>
                <option value="MI">MI</option>
                <option value="MN">MN</option>
                <option value="MS">MS</option>
                <option value="MO">MO</option>
                <option value="MT">MT</option>
                <option value="NE">NE</option>
                <option value="NV">NV</option>
                <option value="NH">NH</option>
                <option value="NJ">NJ</option>
                <option value="NM">NM</option>
                <option value="NY">NY</option>
                <option value="NC">NC</option>
                <option value="ND">ND</option>
                <option value="OH">OH</option>
                <option value="OK">OK</option>
                <option value="OR">OR</option>
                <option value="PA">PA</option>
                <option value="RI">RI</option>
              </select>

              <TextField
                id="name"
                label="Website URL"
                variant="standard"
                className="w-100"
                required
              />
              <TextField
                id="name"
                label="Primary Contact Name"
                variant="standard"
                className="w-100"
                required
              />
              <TextField
                id="name"
                label="Primary Title"
                variant="standard"
                className="w-100"
                required
              />
              <TextField
                id="name"
                label="Primary Phone #"
                variant="standard"
                className="w-100"
                required
              />
              <TextField
                id="name"
                label="Primary Email"
                variant="standard"
                className="w-100"
                required
              />

              <TextField
                id="name"
                label="Owner's Name"
                variant="standard"
                className="w-100"
                required
              />
              <TextField
                id="name"
                label="Owner's Phone"
                variant="standard"
                className="w-100"
                required
              />
              <TextField
                id="name"
                label="Owner's Email Address"
                variant="standard"
                className="w-100"
                required
              />
              <TextField
                id="name"
                label="Owner's Address (if different from above)"
                variant="standard"
                className="w-100"
              />
              <TextField
                id="name"
                label="Owner's City"
                variant="standard"
                className="w-100"
              />
              <select
            style={{
                lineHeight: 1.3,
                fontSize: "1.2rem",
                color: "#071641",
                fontFamily: "Montserrat, serif",
                padding: "10px 0px",
                height: 60,
                border: 0,
                borderBottom: "1px solid grey",
                fontWeight: "bold",
              }}
              class="w-100"
          
              >
                <option disabled selected value="">
                  Owner's State
                </option>
                <option value="SC">SC</option>
                <option value="SD">SD</option>
                <option value="TN">TN</option>
                <option value="TX">TX</option>
                <option value="UT">UT</option>
                <option value="VT">VT</option>
                <option value="VA">VA</option>
                <option value="WA">WA</option>
                <option value="WV">WV</option>
                <option value="WI">WI</option>
                <option value="WY">WY</option>
                <option value="AL">AL</option>
                <option value="AK">AK</option>
                <option value="AZ">AZ</option>
                <option value="AR">AR</option>
                <option value="CA">CA</option>
                <option value="CO">CO</option>
                <option value="CT">CT</option>
                <option value="DE">DE</option>
                <option value="DC">DC</option>
                <option value="FL">FL</option>
                <option value="GA">GA</option>
                <option value="HI">HI</option>
                <option value="ID">ID</option>
                <option value="IL">IL</option>
                <option value="IN">IN</option>
                <option value="IA">IA</option>
                <option value="KS">KS</option>
                <option value="KY">KY</option>
                <option value="LA">LA</option>
                <option value="ME">ME</option>
                <option value="MD">MD</option>
                <option value="MA">MA</option>
                <option value="MI">MI</option>
                <option value="MN">MN</option>
                <option value="MS">MS</option>
                <option value="MO">MO</option>
                <option value="MT">MT</option>
                <option value="NE">NE</option>
                <option value="NV">NV</option>
                <option value="NH">NH</option>
                <option value="NJ">NJ</option>
                <option value="NM">NM</option>
                <option value="NY">NY</option>
                <option value="NC">NC</option>
                <option value="ND">ND</option>
                <option value="OH">OH</option>
                <option value="OK">OK</option>
                <option value="OR">OR</option>
                <option value="PA">PA</option>
                <option value="RI">RI</option>
              </select>
              <TextField
                id="name"
                label="Owner's Zip"
                variant="standard"
                className="w-100"
              />
            </div>
            <div>
              <label className="d-flex">
                <p>
                  <strong>
                  Are you Joint Commission certified?
                  </strong>
                </p>
                <p className="hs-form-required ">*</p>{" "}
              </label>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Yes"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>} />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>} />} label="No" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
      
       
              <TextField
           sx={{"&::before":{content:"none"}}}
                id="name"
                label="Date Certified"
                type="date"
                variant="standard"
                className="w-100"
                placeholder="dfdf"
                InputLabelProps={{
                    shrink: true,
                  }}
                 
               
              />
              
            </div>
            <div>
              <label className="d-flex">
                <p>
                  <strong>
                  If not certified, are you going to become certified?</strong>
                </p>
              </label>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Yes"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>} />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>} />} label="No" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
      
       
      <TextField
        label="Annual Sales by Per Diem"
        type="number"
        variant="standard"
        className="w-100"
        required
         
       
      />
      <TextField
        label="Annual Sales by Travel"
        type="number"
        variant="standard"
        className="w-100"
        required
         
       
      />
      
    </div>
 <CheckList/>
 <div>
      
       
      <TextField
        label="Current Mix of Staff (Class/Area)"
        type="number"
        variant="standard"
        className="w-100"
      />
      <TextField
        label="Hiring Practices"
        type="number"
        variant="standard"
        className="w-100"
      />
      <TextField
        label="Client Reference 1 Name"
        type="number"
        variant="standard"
        className="w-100"
        required
      />
      <TextField
        label="Client Reference 1 Title"
        type="number"
        variant="standard"
        className="w-100"
        required
      />
      <TextField
        label="Client Reference 1 Company Name"
        type="number"
        variant="standard"
        className="w-100"
        required
      />
      <TextField
        label="Client Reference 1 Phone #"
        type="number"
        variant="standard"
        className="w-100"
        required
      />
      <TextField
        label="Client Reference 2 Name"
        type="number"
        variant="standard"
        className="w-100"
        required
      />
      <TextField
        label="Client Reference 2 Title"
        type="number"
        variant="standard"
        className="w-100"
        required
      />
      <TextField
        label="Client Reference 2 Company Name"
        type="number"
        variant="standard"
        className="w-100"
        required
      />
      <TextField
        label="Client Reference 2 Phone #"
        type="number"
        variant="standard"
        className="w-100"
        required
      />
 
    
      
    </div>
    <div>

    <div>
              <label className="d-flex">
                <p>
                  <strong>
                  Are you Certified small business?</strong>
                </p>
                <p className="hs-form-required ">*</p>{" "}
              </label>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Yes"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>} />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>} />} label="No" />
                </RadioGroup>
              </FormControl>
            </div>
    <div>
              <label className="d-flex">
                <p>
                  <strong>
                  Service-disabled-veteran-owned small business?</strong>
                </p>
                <p className="hs-form-required ">*</p>{" "}
              </label>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Yes"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>} />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>} />} label="No" />
                </RadioGroup>
              </FormControl>
            </div>
    <div>
              <label className="d-flex">
                <p>
                  <strong>
                  Veteran-owned small business?</strong>
                </p>
                <p className="hs-form-required ">*</p>{" "}
              </label>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Yes"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>} />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>} />} label="No" />
                </RadioGroup>
              </FormControl>
            </div>
    <div>
              <label className="d-flex">
                <p>
                  <strong>
                  Women-owned business?</strong>
                </p>
                <p className="hs-form-required ">*</p>{" "}
              </label>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Yes"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>} />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>} />} label="No" />
                </RadioGroup>
              </FormControl>
            </div>
    <div>
              <label className="d-flex">
                <p>
                  <strong>
                  Women-owned small business?</strong>
                </p>
                <p className="hs-form-required ">*</p>{" "}
              </label>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Yes"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>} />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>} />} label="No" />
                </RadioGroup>
              </FormControl>
            </div>
    <div>
              <label className="d-flex">
                <p>
                  <strong>
                  HUBZone small business owned?</strong>
                </p>
                <p className="hs-form-required ">*</p>{" "}
              </label>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Yes"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>} />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>} />} label="No" />
                </RadioGroup>
              </FormControl>
            </div>
    <div>
              <label className="d-flex">
                <p>
                  <strong>
                  Minority-owned business?</strong>
                </p>
                <p className="hs-form-required ">*</p>{" "}
              </label>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Yes"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>} />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>} />} label="No" />
                </RadioGroup>
              </FormControl>
            </div>
    <div>
              <label className="d-flex">
                <p>
                  <strong>
                  Minority-owned small business?</strong>
                </p>
                <p className="hs-form-required ">*</p>{" "}
              </label>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Yes"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>} />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>} />} label="No" />
                </RadioGroup>
              </FormControl>
            </div>
    <div>
              <label className="d-flex">
                <p>
                  <strong>
                  Disadvantaged-owned business?</strong>
                </p>
                <p className="hs-form-required ">*</p>{" "}
              </label>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Yes"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>} />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>} />} label="No" />
                </RadioGroup>
              </FormControl>
            </div>
    <div>
              <label className="d-flex">
                <p>
                  <strong>
                  Disadvantaged-owned small business?</strong>
                </p>
                <p className="hs-form-required ">*</p>{" "}
              </label>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Yes"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>} />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>} />} label="No" />
                </RadioGroup>
              </FormControl>
            </div>
    <div>
              <label className="d-flex">
                <p>
                  <strong>
                  Interested in a Quick Pay Program?</strong>
                </p>
                <p className="hs-form-required ">*</p>{" "}
              </label>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Yes"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>} />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>} />} label="No" />
                </RadioGroup>
              </FormControl>
            </div>
    </div>

    <div>
    <div>
          
             <p style={{fontSize:"13px",color:colors.medium}}>IsentCare Healthcare Staffing is committed to protecting and respecting your data and <span style={{color:"blue",textDecoration:"underline"}}>privacy</span>. You may unsubscribe at any time.</p>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Yes"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>} />}
                    label="I agree to receive other communications from IsentCare Healthcare Staffing."
                  />
                  </RadioGroup>
              </FormControl>
            </div>
            <CaptchaButton name={"Submit"} color="warning" className="px-4" style={{borderRadius:10}}/>
    </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default PartnerWithUs;

const CheckList = () => {
  const data1=["Nurses","Allied"]
  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
  ];
  
    return (
      <div>
  <div>
  <label className="d-flex">
                <p>
                  <strong>
                  States you staff for per diem</strong>
                </p>
              </label>
            <FormControl component="fieldset">

  {data1.map(item=>(<FormControlLabel
    htmlFor="checkbox1"
    control={<Checkbox icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>}/>}
    label={item}
  />))}


</FormControl>
        </div>
  <div>
  <label className="d-flex">
                <p>
                  <strong>States you staff for travel</strong>
                </p>
                <p className="hs-form-required ">*</p>{" "}
              </label>
            <FormControl component="fieldset">

  {states.map(item=>(<FormControlLabel
    htmlFor="checkbox1"
    control={<Checkbox icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>}/>}
    label={item}
  />))}


</FormControl>
        </div>
  <div>
  <label className="d-flex">
                <p>
                  <strong>Staff you can provide</strong>
                </p>
              </label>
            <FormControl component="fieldset">

  {states.map(item=>(<FormControlLabel
    htmlFor="checkbox1"
    control={<Checkbox icon={<CircleOutlinedIcon color="primary"/>} checkedIcon={<CheckCircleIcon color="primary"/>}/>}
    label={item}
  />))}


</FormControl>
        </div>
      </div>
      
    );
};
