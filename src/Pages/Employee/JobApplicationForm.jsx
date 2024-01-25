import {
  Box,
  FormControlLabel,
  Grid,
  RadioGroup,
  TextField,
  Typography,
  Radio,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";
import logoImage from "../../assets/isent.png";
import EducationBackgroundTable from "../../components/EmoployeeRegistrationForm/EducationBackgroundTable";
import PersonalReferenceTable from "../../components/EmoployeeRegistrationForm/PersonalReferenceTable";
import MilitaryServiceSection from "../../components/EmoployeeRegistrationForm/MilitaryServiceSection";
import StatementSection from "../../components/EmoployeeRegistrationForm/StatementSection";
import ApplicationreferenceCheckSection from "../../components/EmoployeeRegistrationForm/ApplicationreferenceCheckSection";

const JobApplicationForm = () => {
  const [selectedOption, setSelectedOption] = useState("no");
  const [ageOption, setAgeOption] = useState("no");
  const [contactedOption, setContactedOption] = useState("yes");
  const [employmentDesigred, setEmploymentDesigred] = useState({
    fullTime: false,
    partTime: false,
    temporary: false,
    freelance: false,
  });
  const [desiredHours, setDesiredHours] = useState("");

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setEmploymentDesigred((prevemploymentDesigred) => ({
      ...prevemploymentDesigred,
      [name]: checked,
    }));
  };

  const handleDesiredHoursChange = (event) => {
    setDesiredHours(event.target.value);
  };
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleContactChange = (event) => {
    setContactedOption(event.target.value);
  };
  const handleAgeChange = (event) => {
    setAgeOption(event.target.value);
  };

  return (
    <Box className="container my-5">
      <Grid className="text-center" sx={{ marginTop: "100px" }}>
        <Typography variant="h4" color="blue" fontWeight="bold">
          ISENTCARE
        </Typography>
        <Typography variant="p" color="orange">
          DEDICATED CARE
        </Typography>
      </Grid>
      <Grid container>
        <Grid item>
          <img src={logoImage} className="img-fluid w-25" alt="Logo" />
        </Grid>
      </Grid>
      <Grid className="my-4 py-1">
        <Grid sx={{ backgroundColor: "gray" }}>
          <Typography
            variant="h5"
            color="initial"
            className="px-2"
            sx={{ textDecoration: "underline" }}
          >
            APPLICATION FOR EMPLOYMENT
          </Typography>
        </Grid>
        <Typography variant="p" color="initial">
          Please provide complete applicable data. Save after you fill out and
          attach to the employment form on this website.
        </Typography>
      </Grid>
      <Grid container spacing={2}>
        <Grid
          item
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={6}
        >
          <Typography variant="subtitle1">Position(s) applied for:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ width: "40rem" }}
          />
        </Grid>
        <Grid
          display="flex"
          justifyContent="start"
          alignItems="center"
          item
          xs={6}
        >
          <Typography variant="subtitle1">Date of application:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ width: "40rem" }}
          />
        </Grid>
        <Grid
          display="flex"
          justifyContent="start"
          alignItems="center"
          item
          xs={12}
        >
          <Typography variant="subtitle1">
            Name (Last, First, Middle) :
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ width: "70%" }}
          />
        </Grid>
        <Grid
          display="flex"
          justifyContent="start"
          alignItems="center"
          item
          xs={12}
        >
          <Typography variant="subtitle1">
            Address (Street Name, Apt. Number) :
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ width: "70%" }}
          />
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={4}
        >
          <Typography variant="subtitle1">City:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ width: "20rem" }}
          />
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={4}
        >
          <Typography variant="subtitle1">State:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ width: "20rem" }}
          />
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={4}
        >
          <Typography variant="subtitle1">Zip Code:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ width: "20rem" }}
          />
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={6}
        >
          <Typography variant="subtitle1">Home Phone:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ width: "40rem" }}
          />
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={6}
        >
          <Typography variant="subtitle1">Cell phone:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ width: "40rem" }}
          />
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
        >
          <Typography variant="subtitle1">SS Number:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ width: "5rem" }}
          />
          -
          <TextField variant="outlined" size="small" sx={{ width: "5rem" }} />
          -
          <TextField variant="outlined" size="small" sx={{ width: "5rem" }} />
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
        >
          <Typography variant="subtitle1">
            If you are under 18, and it is required, can you furnish a work
            permit?
          </Typography>
          <RadioGroup
            className="ms-auto"
            value={selectedOption}
            onChange={handleRadioChange}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          </RadioGroup>
          <RadioGroup value={selectedOption} onChange={handleRadioChange}>
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </Grid>
        <Grid
          display="flex"
          justifyContent="start"
          alignItems="center"
          item
          xs={12}
        >
          <Typography variant="subtitle1">If no, please explain:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ width: "90%" }}
          />
        </Grid>
        <Grid
          display="flex"
          justifyContent="start"
          alignItems="center"
          item
          xs={12}
        >
          <Typography variant="subtitle1">
            Have you ever been employed here before?
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ width: "90%" }}
          />
        </Grid>
        <Grid
          display="flex"
          justifyContent="start"
          alignItems="center"
          item
          xs={12}
        >
          <Typography variant="subtitle1">
            Are you legally eligible to be employed in U.S.?
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ width: "90%" }}
          />
        </Grid>
        <Grid
          display="flex"
          justifyContent="start"
          alignItems="center"
          item
          xs={12}
        >
          <Typography variant="subtitle1">
            Date of available for work:
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ width: "80%" }}
          />
        </Grid>
        <Grid item xs={12} container alignItems="center">
          <Typography variant="subtitle1" style={{ marginRight: "1rem" }}>
            Type of employment desired
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={employmentDesigred.fullTime}
                onChange={handleCheckboxChange}
                name="fullTime"
              />
            }
            label="Full-time"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={employmentDesigred.partTime}
                onChange={handleCheckboxChange}
                name="partTime"
              />
            }
            label="Part-time"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={employmentDesigred.temporary}
                onChange={handleCheckboxChange}
                name="temporary"
              />
            }
            label="Temporary"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={employmentDesigred.freelance}
                onChange={handleCheckboxChange}
                name="freelance"
              />
            }
            label="Freelance"
          />
          <TextField
            label="Desired weekly hours"
            variant="outlined"
            size="small"
            type="number"
            value={desiredHours}
            onChange={handleDesiredHoursChange}
          />
        </Grid>
        <Grid
          display="flex"
          justifyContent="start"
          alignItems="center"
          item
          xs={12}
        >
          <Typography variant="subtitle1">
            For which shifts are you applying?
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ width: "80%" }}
          />
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={6}
        >
          <Typography variant="subtitle1">
            Field Position. Do you have a car for work?
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ width: "40rem" }}
          />
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={6}
        >
          <Typography variant="subtitle1">Driver's License No:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ width: "40rem" }}
          />
        </Grid>
        <Grid
          display="flex"
          justifyContent="start"
          alignItems="center"
          item
          xs={12}
        >
          <Typography variant="subtitle1">
            How were you referred to Advanced Nursing Care?
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ width: "80%" }}
          />
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
        >
          <Typography variant="subtitle1">
            Have you ever plead "guilty" or "no contest" to, or been convicted
            of a felony?
          </Typography>
          <RadioGroup
            className="ms-auto"
            value={ageOption}
            onChange={handleAgeChange}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          </RadioGroup>
          <RadioGroup value={ageOption} onChange={handleAgeChange}>
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </Grid>
        <Grid
          display="flex"
          justifyContent="start"
          alignItems="center"
          item
          xs={12}
        >
          <Typography variant="subtitle1">
            If yes, provide date(s) and details
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ width: "80%" }}
          />
        </Grid>
      </Grid>
      {/* 1st page bottom part  */}
      <Grid container className="my-5">
        <Grid item xs={12}>
          <Typography variant="h5" color="initial">
            IsentCare will perform a CORI check on all applicants.
          </Typography>
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={6}
        >
          <Typography variant="subtitle1">
            Incase of emergency, notify:
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ width: "20rem" }}
          />
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={6}
        >
          <Typography variant="subtitle1">Relationship:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ width: "20rem" }}
          />
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={6}
        >
          <Typography variant="subtitle1">Home Phone #:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ width: "20rem" }}
          />
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={6}
        >
          <Typography variant="subtitle1">Work Phone #:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ width: "20rem" }}
          />
        </Grid>
        <Grid item>
          <Typography variant="p" color="initial">
            IsentCare is an equal opportunity employer. All applicants and
            employees are considered for employment, advancement, development,
            and earning based upon their skills performance and potential. No
            current or perspective employee is discriminated against because of
            race, creed, color, sex, age, national origin, handicap, or military
            status.
          </Typography>
        </Grid>
      </Grid>
      {/* 2nd page top part  */}
      <Grid container>
        <Grid className="my-4 py-1">
          <Grid sx={{ backgroundColor: "gray" }}>
            <Typography
              variant="h5"
              color="initial"
              className="px-2"
              sx={{ textDecoration: "underline" }}
            >
              SKILLS AND QUALIFICATIONS
            </Typography>
          </Grid>
          <Typography variant="p" color="initial">
            Summarize any training skills, licences and/or certificates that may
            qualify you as being able to perform job-related functions in the
            position for which you are applying.
          </Typography>
          <TextField
            className="my-2"
            label="Additional Comments"
            variant="outlined"
            multiline
            fullWidth
            rows={3}
          />
        </Grid>
      </Grid>
      {/* 2nd page bottom part  */}
      <Grid container className="my-3">
        <Grid className="my-4 py-1">
          <Grid sx={{ backgroundColor: "gray" }}>
            <Typography
              variant="h5"
              color="initial"
              className="px-2"
              sx={{ textDecoration: "underline" }}
            >
              EMPLOYMENT HISTORY
            </Typography>
          </Grid>
          <Typography variant="p" color="initial">
            Provide the following information of at least (3) employers,
            assignments, or volunteer activities, starting with the most recent.
            Give the complete addresses, telephone number, and full name of
            supervisors
          </Typography>
        </Grid>
      </Grid>
      {/* Employeer 1  */}
      <Grid container className="my-5">
        <Grid
          item
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={4}
        >
          <Typography variant="subtitle1">
            <b>Employer1:</b>
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ flexGrow: 1 }}
          />
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={4}
        >
          <Typography variant="subtitle1">From:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ flexGrow: 1 }}
          />
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={4}
        >
          <Typography variant="subtitle1">To:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ flexGrow: 1 }}
          />
        </Grid>
        <Grid
          item
          className="my-2"
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={6}
        >
          <Typography variant="subtitle1">Address:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ flexGrow: 1 }}
          />
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={6}
        >
          <Typography variant="subtitle1">Telephone:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ flexGrow: 1 }}
          />
        </Grid>
        <Grid
          item
          className="my-2"
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={4}
        >
          <Typography variant="subtitle1">City:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ flexGrow: 1 }}
          />
        </Grid>
        <Grid
          item
          className="my-2"
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={4}
        >
          <Typography variant="subtitle1">State:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ flexGrow: 1 }}
          />
        </Grid>
        <Grid
          item
          className="my-2"
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={4}
        >
          <Typography variant="subtitle1">Zip Code:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ width: "8rem" }}
          />
        </Grid>
        <Grid
          item
          className="my-2"
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={6}
        >
          <Typography variant="subtitle1">Job Title:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ flexGrow: 1 }}
          />
        </Grid>
        <Grid
          item
          className="my-2"
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={6}
        >
          <Typography variant="subtitle1">Supervisor:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ flexGrow: 1 }}
          />
        </Grid>
        <Grid
          item
          className="my-2"
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={6}
        >
          <Typography variant="subtitle1">Reason for Leaving:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ flexGrow: 1 }}
          />
        </Grid>
        <Grid
          item
          className="my-2"
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={6}
        >
          <Typography variant="subtitle1">Final Salary:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ flexGrow: 1 }}
          />
        </Grid>
      </Grid>

      {/* Employeer 2  */}
      <Grid container className="my-5">
        <Grid
          item
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={4}
        >
          <Typography variant="subtitle1">
            <b>Employer2:</b>
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ flexGrow: 1 }}
          />
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={4}
        >
          <Typography variant="subtitle1">From:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ flexGrow: 1 }}
          />
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={4}
        >
          <Typography variant="subtitle1">To:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ flexGrow: 1 }}
          />
        </Grid>
        <Grid
          item
          className="my-2"
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={6}
        >
          <Typography variant="subtitle1">Address:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ flexGrow: 1 }}
          />
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={6}
        >
          <Typography variant="subtitle1">Telephone:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ flexGrow: 1 }}
          />
        </Grid>
        <Grid
          item
          className="my-2"
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={4}
        >
          <Typography variant="subtitle1">City:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ flexGrow: 1 }}
          />
        </Grid>
        <Grid
          item
          className="my-2"
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={4}
        >
          <Typography variant="subtitle1">State:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ flexGrow: 1 }}
          />
        </Grid>
        <Grid
          item
          className="my-2"
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={4}
        >
          <Typography variant="subtitle1">Zip Code:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ width: "8rem" }}
          />
        </Grid>
        <Grid
          item
          className="my-2"
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={6}
        >
          <Typography variant="subtitle1">Job Title:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ flexGrow: 1 }}
          />
        </Grid>
        <Grid
          item
          className="my-2"
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={6}
        >
          <Typography variant="subtitle1">Supervisor:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ flexGrow: 1 }}
          />
        </Grid>
        <Grid
          item
          className="my-2"
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={6}
        >
          <Typography variant="subtitle1">Reason for Leaving:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ flexGrow: 1 }}
          />
        </Grid>
        <Grid
          item
          className="my-2"
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={6}
        >
          <Typography variant="subtitle1">Final Salary:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ flexGrow: 1 }}
          />
        </Grid>
      </Grid>

      {/* Employeer 3  */}
      <Grid container className="my-5">
        <Grid
          item
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={4}
        >
          <Typography variant="subtitle1">
            <b>Employer3:</b>
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ flexGrow: 1 }}
          />
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={4}
        >
          <Typography variant="subtitle1">From:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ flexGrow: 1 }}
          />
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={4}
        >
          <Typography variant="subtitle1">To:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ flexGrow: 1 }}
          />
        </Grid>
        <Grid
          item
          className="my-2"
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={6}
        >
          <Typography variant="subtitle1">Address:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ flexGrow: 1 }}
          />
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={6}
        >
          <Typography variant="subtitle1">Telephone:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ flexGrow: 1 }}
          />
        </Grid>
        <Grid
          item
          className="my-2"
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={4}
        >
          <Typography variant="subtitle1">City:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ flexGrow: 1 }}
          />
        </Grid>
        <Grid
          item
          className="my-2"
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={4}
        >
          <Typography variant="subtitle1">State:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ flexGrow: 1 }}
          />
        </Grid>
        <Grid
          item
          className="my-2"
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={4}
        >
          <Typography variant="subtitle1">Zip Code:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ width: "8rem" }}
          />
        </Grid>
        <Grid
          item
          className="my-2"
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={6}
        >
          <Typography variant="subtitle1">Job Title:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ flexGrow: 1 }}
          />
        </Grid>
        <Grid
          item
          className="my-2"
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={6}
        >
          <Typography variant="subtitle1">Supervisor:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ flexGrow: 1 }}
          />
        </Grid>
        <Grid
          item
          className="my-2"
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={6}
        >
          <Typography variant="subtitle1">Reason for Leaving:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ flexGrow: 1 }}
          />
        </Grid>
        <Grid
          item
          className="my-2"
          display="flex"
          justifyContent="start"
          alignItems="center"
          xs={12}
          sm={6}
          md={6}
        >
          <Typography variant="subtitle1">Final Salary:</Typography>
          <TextField
            variant="outlined"
            size="small"
            className="ms-2"
            sx={{ flexGrow: 1 }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        display="flex"
        justifyContent="start"
        alignItems="center"
        xs={12}
      >
        <Typography variant="subtitle1">
          May we contact these employers for reference?
        </Typography>
        <RadioGroup
          className="ms-auto"
          value={contactedOption}
          onChange={handleContactChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        <RadioGroup value={contactedOption} onChange={handleContactChange}>
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        <RadioGroup value={contactedOption} onChange={handleContactChange}>
          <FormControlLabel value="later" control={<Radio />} label="Later" />
        </RadioGroup>
      </Grid>
      {/* Education background table  */}
      <EducationBackgroundTable />
      {/* Personal reference  */}
      <PersonalReferenceTable />
      <Grid container>
        <Grid className="my-4 py-1">
          <Typography variant="p" color="initial">
            Please feel free to include any other information you think would be
            helpful to us in considering your application for employment, such
            as additional work experience, accomplishments, etc.
          </Typography>
          <TextField
            className="my-2"
            label="Additional Comments"
            variant="outlined"
            multiline
            fullWidth
            rows={3}
          />
          <TextField
            className="my-2"
            placeholder="Write down hobbies, talents, and other skills:"
            label="Additional Comments"
            variant="outlined"
            multiline
            fullWidth
            rows={3}
          />
        </Grid>
      </Grid>
      {/* military section  */}
      <MilitaryServiceSection />
      {/* statement section  */}
      <StatementSection />
      {/* Application Reference  */}
      <ApplicationreferenceCheckSection />
    </Box>
  );
};

export default JobApplicationForm;
