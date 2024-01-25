import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, InputLabel, MenuItem, Select, Step, StepLabel, Stepper, TextField } from "@mui/material";
import React from "react";
import react, { useState } from "react";
import { Helmet } from "react-helmet";

const JobType = () => {

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const steps = [
        'Job Type',
        'Contact Information',
        'Employment History',
    ];

    const [discpiline, setDiscpiline] = React.useState('');

    const handleChange = (event) => {
        setDiscpiline(event.target.value);
    };
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
    });

    const handleChange1 = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const { gilad, jason, antoine } = state;
    const error = [gilad, jason, antoine].filter((v) => v).length !== 2;
    return (
        <>
            <Helmet>
                <title>Apply Type</title>
            </Helmet>
            <div className='container-fluid bg-info mb-30' style={{ paddingTop: '4rem', paddingBottom: '5rem' }}>
                <Box ml={5} pb={5}
                    sx={{
                        width: '90%',
                        height: '100%',
                        backgroundColor: 'grey.A100',
                        borderRadius: 10,
                        // '&:hover': {
                        //     opacity: [0.9, 0.8, 0.7],
                        // },
                    }}
                >
                    <Box sx={{ width: '100%' }} style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
                        <Stepper activeStep={activeStep} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === 0 && (
                            <div>
                                <div className="d-flex flex-row justify-content-center">
                                    <h4 style={{ paddingTop: "1rem" }}>I'm a</h4>
                                    <  div><FormControl sx={{ m: 1, width: 300 }}>
                                        <InputLabel id="demo-simple-select-label">
                                            Select Discipline</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={discpiline}
                                            label="Age"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl></div>

                                </div><div className="d-flex flex-row justify-content-center">
                                    <h4 style={{ paddingTop: "1rem" }}>with current experience in</h4>
                                    <div><FormControl sx={{ m: 1, width: 300 }}>
                                        <InputLabel id="demo-simple-select-label">
                                            Select Area</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={discpiline}
                                            label="descpiline"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl></div>

                                </div>
                                <div className="d-flex flex-row justify-content-center">

                                    <div>
                                        <Box sx={{ justifyContent: 'flex-start' }}>
                                            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                                                <FormLabel component="legend">Interested In</FormLabel>
                                                <FormGroup sx={{ position: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                                    <FormControlLabel
                                                        control={
                                                            <Checkbox checked={gilad} onChange={handleChange1} name="gilad" />
                                                        }
                                                        label="Direct Hire"
                                                    />
                                                    <FormControlLabel
                                                        control={
                                                            <Checkbox checked={jason} onChange={handleChange1} name="jason" />
                                                        }
                                                        label="Per Diem"
                                                    />
                                                    <FormControlLabel
                                                        control={
                                                            <Checkbox checked={antoine} onChange={handleChange1} name="antoine" />
                                                        }
                                                        label="Travel"
                                                    />
                                                    <FormControlLabel
                                                        control={
                                                            <Checkbox checked={antoine} onChange={handleChange1} name="antoine" />
                                                        }
                                                        label="Local Contracts"
                                                    />
                                                </FormGroup>
                                                <FormHelperText>Be careful</FormHelperText>
                                            </FormControl>
                                        </Box>
                                        <Button style={{float:'right'}} onClick={handleNext} variant="contained">Next</Button>
                                    </div>
                                </div>

                            </div>
                        )}
                        {activeStep === 1 && (
                            <Box sx={{ padding: '40px', paddingLeft: '200px', paddingRight: '200px', justifyContent: 'flex-start' }}>
                                <TextField style={{ paddingRight: "20px" }} size={'medium'} id="standard-basic" label="First Name" variant="standard" />
                                <TextField style={{ paddingRight: "20px" }} id="standard-basic" label="M.I" variant="standard" />
                                <TextField style={{ paddingRight: "20px" }} id="standard-basic" label="Last Name" variant="standard" />
                                <TextField fullWidth={true} id="standard-basic" label="Email" variant="standard" />
                                <TextField fullWidth={true} id="standard-basic" label="Confirm Email" variant="standard" />
                                <TextField style={{ paddingRight: "20px" }} id="standard-basic" label="Zip Code" variant="standard" />
                                <TextField style={{ paddingRight: "20px" }} id="standard-basic" label="Phone" variant="standard" />
                                <TextField style={{ paddingRight: "20px" }} id="standard-basic" label="Password" variant="standard" />
                                <TextField style={{ paddingRight: "20px" }} id="standard-basic" label="Confirm Password" variant="standard" />
                                <p style={{paddingTop:'40px'}}>Password must:</p>
                                <p>Be at least 8 characters long.

                                    <br /> Be no more than 16 characters long.

                                    <br />Contain at least one lowercase character.

                                    <br />Contain at least one uppercase character.

                                    <br />Contain at least one number.

                                    <br />Contain at least one special character.</p>

                                    <Button style={{float:'right'}} onClick={handleNext} variant="contained">Next</Button>
                            </Box>
                        )}
                        {activeStep === 2 && (
                            <div>
                                This is the content for step 3.
                            </div>
                        )}
                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </Box>
            </div>
        </>
    );
}

export default JobType;