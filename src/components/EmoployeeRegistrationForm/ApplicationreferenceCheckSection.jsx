import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export default function ApplicationreferenceCheckSection() {
  const [references, setReferences] = useState([
    {
      Excellent: "",
      Very_Good: "",
      Good: "",
      Good: "",
      Poor: "",
      Comments: "",
    },
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedReferences = [...references];
    updatedReferences[index][field] = value;
    setReferences(updatedReferences);
  };
  return (
    <Grid container>
      <Grid item xs={12} className="my-4 py-1">
        <Grid sx={{ backgroundColor: "gray" }}>
          <Typography variant="h5" color="initial" className="px-2 text-center">
            APPLICANT REFERENCE CHECK
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        display="flex"
        justifyContent="start"
        alignItems="center"
        xs={6}
      >
        <Typography variant="subtitle1">To (Former Employer):</Typography>
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
        <Typography variant="subtitle1">Title:</Typography>
        <TextField
          variant="outlined"
          size="small"
          className="ms-2"
          sx={{ width: "40rem" }}
        />
      </Grid>
      <Grid
        item
        className="my-4"
        display="flex"
        justifyContent="start"
        alignItems="center"
        xs={12}
      >
        <Typography variant="subtitle1">From:</Typography>
        <TextField
          variant="standard"
          size="small"
          className="ms-2"
          sx={{ width: "40rem" }}
        />
      </Grid>
      <Grid item>
        <Typography variant="p" color="initial">
          The following person has applied for a position in our firm and has
          given you as a former employer. Your evaluation would be sincerely
          appreciated and considered strictly confidential. Please respond
          promptly as employment is pending receipt of reference. Thank You.
        </Typography>
      </Grid>
      <Grid
        item
        className="my-4"
        display="flex"
        justifyContent="end"
        flexDirection="column"
        alignItems="end"
        xs={12}
      >
        <TextField
          variant="standard"
          value="IsentCare"
          size="small"
          className="ms-2"
          sx={{ width: "15rem" }}
        />
        <Typography variant="subtitle1">
          <b> (Prospective employer)</b>
        </Typography>
      </Grid>
      <Grid
        item
        display="flex"
        justifyContent="start"
        alignItems="center"
        xs={6}
      >
        <Typography variant="subtitle1">Applicant's Name:</Typography>
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
        <Typography variant="subtitle1">SSN:</Typography>
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
        <Typography variant="subtitle1">Position Applied For:</Typography>
        <TextField
          variant="outlined"
          size="small"
          className="ms-2"
          sx={{ width: "40rem" }}
        />
      </Grid>
      <Grid
        item
        className="my-2"
        display="flex"
        justifyContent="start"
        alignItems="center"
        xs={12}
      >
        <Typography variant="subtitle1">
          Position while in your Employ:
        </Typography>
        <TextField
          variant="outlined"
          size="small"
          className="ms-2"
          sx={{ width: "40rem" }}
        />
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h6" color="initial">
          <b>Employment Dates:</b>
        </Typography>
      </Grid>
      <Grid
        item
        xs={3}
        className="my-2"
        display="flex"
        justifyContent="start"
        alignItems="center"
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
        className="my-2"
        xs={3}
        display="flex"
        justifyContent="start"
        alignItems="center"
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
        className="my-2"
        xs={3}
        display="flex"
        justifyContent="start"
        alignItems="center"
      >
        <Typography variant="subtitle1">Salary:</Typography>
        <TextField
          variant="outlined"
          size="small"
          className="ms-2"
          sx={{ width: "40rem" }}
        />
      </Grid>
      <Grid
        item
        className="my-2"
        xs={12}
        display="flex"
        justifyContent="start"
        alignItems="center"
      >
        <Typography variant="subtitle1">Reason For Leaving:</Typography>
        <TextField
          variant="outlined"
          size="small"
          className="ms-2"
          sx={{ width: "40rem" }}
        />
      </Grid>
      <Grid
        item
        className="my-2"
        xs={12}
        display="flex"
        justifyContent="start"
        alignItems="center"
      >
        <TextField
          className="my-2"
          label="Would you rehire? If NO, why?"
          variant="outlined"
          multiline
          fullWidth
          rows={3}
        />
      </Grid>
      <Grid
        item
        className="my-2"
        xs={12}
        display="flex"
        justifyContent="start"
        alignItems="center"
      >
        <Typography variant="subtitle1">Other Remarks:</Typography>
        <TextField
          variant="outlined"
          size="small"
          className="ms-2"
          sx={{ width: "40rem" }}
        />
      </Grid>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Excellent</TableCell>
              <TableCell>Very Good</TableCell>
              <TableCell>Good</TableCell>
              <TableCell>Poor</TableCell>
              <TableCell>Comments</TableCell>
            </TableRow>
          </TableHead>
          {references.map((reference, index) => (
            <TableBody key={index}>
              <TableRow>
                <TableCell>
                  <Typography variant="p" color="initial">
                    Quality of Work
                  </Typography>
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.name}
                    onChange={(e) =>
                      handleInputChange(index, "name", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.title}
                    onChange={(e) =>
                      handleInputChange(index, "title", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.relationship}
                    onChange={(e) =>
                      handleInputChange(index, "relationship", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.telephone}
                    onChange={(e) =>
                      handleInputChange(index, "telephone", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.yearsKnown}
                    onChange={(e) =>
                      handleInputChange(index, "yearsKnown", e.target.value)
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="p" color="initial">
                    Conscientiousness
                  </Typography>
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.name}
                    onChange={(e) =>
                      handleInputChange(index, "name", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.title}
                    onChange={(e) =>
                      handleInputChange(index, "title", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.relationship}
                    onChange={(e) =>
                      handleInputChange(index, "relationship", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.telephone}
                    onChange={(e) =>
                      handleInputChange(index, "telephone", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.yearsKnown}
                    onChange={(e) =>
                      handleInputChange(index, "yearsKnown", e.target.value)
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="p" color="initial">
                    Attitude
                  </Typography>
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.name}
                    onChange={(e) =>
                      handleInputChange(index, "name", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.title}
                    onChange={(e) =>
                      handleInputChange(index, "title", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.relationship}
                    onChange={(e) =>
                      handleInputChange(index, "relationship", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.telephone}
                    onChange={(e) =>
                      handleInputChange(index, "telephone", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.yearsKnown}
                    onChange={(e) =>
                      handleInputChange(index, "yearsKnown", e.target.value)
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="p" color="initial">
                    Attendance
                  </Typography>
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.name}
                    onChange={(e) =>
                      handleInputChange(index, "name", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.title}
                    onChange={(e) =>
                      handleInputChange(index, "title", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.relationship}
                    onChange={(e) =>
                      handleInputChange(index, "relationship", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.telephone}
                    onChange={(e) =>
                      handleInputChange(index, "telephone", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.yearsKnown}
                    onChange={(e) =>
                      handleInputChange(index, "yearsKnown", e.target.value)
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="p" color="initial">
                    Cooperation
                  </Typography>
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.name}
                    onChange={(e) =>
                      handleInputChange(index, "name", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.title}
                    onChange={(e) =>
                      handleInputChange(index, "title", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.relationship}
                    onChange={(e) =>
                      handleInputChange(index, "relationship", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.telephone}
                    onChange={(e) =>
                      handleInputChange(index, "telephone", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.yearsKnown}
                    onChange={(e) =>
                      handleInputChange(index, "yearsKnown", e.target.value)
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="p" color="initial">
                    Appearance
                  </Typography>
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.name}
                    onChange={(e) =>
                      handleInputChange(index, "name", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.title}
                    onChange={(e) =>
                      handleInputChange(index, "title", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.relationship}
                    onChange={(e) =>
                      handleInputChange(index, "relationship", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.telephone}
                    onChange={(e) =>
                      handleInputChange(index, "telephone", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.yearsKnown}
                    onChange={(e) =>
                      handleInputChange(index, "yearsKnown", e.target.value)
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="p" color="initial">
                    Flexibility
                  </Typography>
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.name}
                    onChange={(e) =>
                      handleInputChange(index, "name", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.title}
                    onChange={(e) =>
                      handleInputChange(index, "title", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.relationship}
                    onChange={(e) =>
                      handleInputChange(index, "relationship", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.telephone}
                    onChange={(e) =>
                      handleInputChange(index, "telephone", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.yearsKnown}
                    onChange={(e) =>
                      handleInputChange(index, "yearsKnown", e.target.value)
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="p" color="initial">
                    Dependability
                  </Typography>
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.name}
                    onChange={(e) =>
                      handleInputChange(index, "name", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.title}
                    onChange={(e) =>
                      handleInputChange(index, "title", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.relationship}
                    onChange={(e) =>
                      handleInputChange(index, "relationship", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.telephone}
                    onChange={(e) =>
                      handleInputChange(index, "telephone", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.yearsKnown}
                    onChange={(e) =>
                      handleInputChange(index, "yearsKnown", e.target.value)
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="p" color="initial">
                    Health
                  </Typography>
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.name}
                    onChange={(e) =>
                      handleInputChange(index, "name", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.title}
                    onChange={(e) =>
                      handleInputChange(index, "title", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.relationship}
                    onChange={(e) =>
                      handleInputChange(index, "relationship", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.telephone}
                    onChange={(e) =>
                      handleInputChange(index, "telephone", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.yearsKnown}
                    onChange={(e) =>
                      handleInputChange(index, "yearsKnown", e.target.value)
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="p" color="initial">
                    Conduct
                  </Typography>
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.name}
                    onChange={(e) =>
                      handleInputChange(index, "name", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.title}
                    onChange={(e) =>
                      handleInputChange(index, "title", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.relationship}
                    onChange={(e) =>
                      handleInputChange(index, "relationship", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.telephone}
                    onChange={(e) =>
                      handleInputChange(index, "telephone", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={reference.yearsKnown}
                    onChange={(e) =>
                      handleInputChange(index, "yearsKnown", e.target.value)
                    }
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </TableContainer>

      <Grid
        item
        className="my-2"
        xs={4}
        display="flex"
        justifyContent="start"
        alignItems="center"
      >
        <Typography variant="subtitle1">Date:</Typography>
        <TextField
          variant="outlined"
          size="small"
          className="ms-2"
          sx={{ width: "20rem" }}
        />
      </Grid>
      <Grid
        item
        className="my-2"
        xs={4}
        display="flex"
        justifyContent="start"
        alignItems="center"
      >
        <Typography variant="subtitle1">Former Employer: </Typography>
        <TextField
          variant="outlined"
          size="small"
          className="ms-2"
          sx={{ width: "40rem" }}
        />
      </Grid>
      <Grid
        item
        className="my-2"
        xs={4}
        display="flex"
        justifyContent="start"
        alignItems="center"
      >
        <Typography variant="subtitle1">Title:</Typography>
        <TextField
          variant="outlined"
          size="small"
          className="ms-2"
          sx={{ width: "40rem" }}
        />
      </Grid>
      <Grid item className="my-2">
        <Typography variant="p" color="initial">
          hereby authorize the above firm to check my references and authorize
          my former employer to provide information about my work, skills,
          habits, and character.
        </Typography>
      </Grid>
      <Grid
        item
        className="my-2"
        xs={6}
        display="flex"
        justifyContent="start"
        alignItems="center"
      >
        <Typography variant="subtitle1">Date: </Typography>
        <TextField
          variant="outlined"
          size="small"
          className="ms-2"
          sx={{ width: "20rem" }}
        />
      </Grid>
      <Grid
        item
        className="my-2"
        xs={6}
        display="flex"
        justifyContent="start"
        alignItems="center"
      >
        <Typography variant="subtitle1">
          Applicants Name and Signature:
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
