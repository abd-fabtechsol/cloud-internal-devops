import { Grid, TextField, Typography } from "@mui/material";
import React from "react";

export default function StatementSection() {
  return (
    <Grid container className="my-4">
      <Grid item>
        <Typography variant="h4" color="initial">
          STATEMENT OF ACCURACY AND RELEASE
        </Typography>
      </Grid>
      <Grid item className="py-4">
        <Typography variant="p" color="initial">
          I certify that any omission or any misleading or untrue statement or
          answer in this application may jeopardize my employment opportunities
          with IsentCare and may also result in my termination, if employed.
        </Typography>
      </Grid>
      <Grid item className="py-4">
        <Typography variant="p" color="initial">
          I authorized IsentCare to investigate all the references and to secure
          information about me from any other person, company or organization
          without liability in such person, company or organization or IsentCare
        </Typography>
      </Grid>
      <Grid item className="py-4">
        <Typography variant="p" color="initial">
          I I understand that if any offer of employment is made, it will be
          conditioned upon passing a pre-employment physical indicating that I
          can perform all essential job functions without reasonable
          accommodations.
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
          Name and Signature of Applicant
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
        <Typography variant="subtitle1">
          Date
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
