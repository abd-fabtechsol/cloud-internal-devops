import { FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function MilitaryServiceSection() {
  const [contactedOption, setContactedOption] = useState("no");
  const handleContactChange = (event) => {
    setContactedOption(event.target.value);
  };
  return (
    <Grid container className="my-3">
      <Grid
        item
        display="flex"
        justifyContent="start"
        alignItems="center"
        xs={12}
      >
        <Typography variant="subtitle1">
          <b>Did you serve in the MILITARY SERVICE?</b>
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
      </Grid>
      <Grid itemm xs={12}>
        <Typography variant="h5" color="initial">
          If yes, complete the data below
        </Typography>
      </Grid>
      <Grid
        item
        display="flex"
        justifyContent="start"
        alignItems="center"
        xs={4}
      >
        <Typography variant="subtitle1">Branch of Service:</Typography>
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
        xs={4}
      >
        <Typography variant="subtitle1">From:</Typography>
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
        xs={4}
      >
        <Typography variant="subtitle1">To:</Typography>
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
        <Typography variant="subtitle1">Highest Rank Achieved:</Typography>
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
        <Typography variant="subtitle1">Are you in a reserve unit?</Typography>
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
        <Typography variant="subtitle1">
          Special schooling or duties:
        </Typography>
        <TextField
          variant="outlined"
          size="small"
          className="ms-2"
          sx={{ width: "40rem" }}
        />
      </Grid>
    </Grid>
  );
}
