import React, { useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  Grid,
  Typography,
} from "@mui/material";

export default function EducationBackgroundTable() {
  const [educationDetails, setEducationDetails] = useState([
    {
      schoolName: "",
      yearCompleted: "",
      courseOfStudy: "",
      graduated: "",
    },
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedDetails = [...educationDetails];
    updatedDetails[index][field] = value;
    setEducationDetails(updatedDetails);
  };
  return (
    <Grid className="my-4 py-1">
      <Grid sx={{ backgroundColor: "gray" }}>
        <Typography
          variant="h5"
          color="initial"
          className="px-2"
          sx={{ textDecoration: "underline" }}
        >
          EDUCATIONAL BACKGROUND
        </Typography>
      </Grid>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name of School and Location</TableCell>
              <TableCell>Year Completed</TableCell>
              <TableCell>Course of Study</TableCell>
              <TableCell>Graduated</TableCell>
            </TableRow>
          </TableHead>
          {educationDetails.map((detail, index) => (
            <TableBody key={index}>
              <TableRow>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={detail.schoolName}
                    onChange={(e) =>
                      handleInputChange(index, "schoolName", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={detail.yearCompleted}
                    onChange={(e) =>
                      handleInputChange(index, "yearCompleted", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={detail.courseOfStudy}
                    onChange={(e) =>
                      handleInputChange(index, "courseOfStudy", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={detail.graduated}
                    onChange={(e) =>
                      handleInputChange(index, "graduated", e.target.value)
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow key={index}>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={detail.schoolName}
                    onChange={(e) =>
                      handleInputChange(index, "schoolName", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={detail.yearCompleted}
                    onChange={(e) =>
                      handleInputChange(index, "yearCompleted", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={detail.courseOfStudy}
                    onChange={(e) =>
                      handleInputChange(index, "courseOfStudy", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={detail.graduated}
                    onChange={(e) =>
                      handleInputChange(index, "graduated", e.target.value)
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow key={index}>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={detail.schoolName}
                    onChange={(e) =>
                      handleInputChange(index, "schoolName", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={detail.yearCompleted}
                    onChange={(e) =>
                      handleInputChange(index, "yearCompleted", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={detail.courseOfStudy}
                    onChange={(e) =>
                      handleInputChange(index, "courseOfStudy", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={detail.graduated}
                    onChange={(e) =>
                      handleInputChange(index, "graduated", e.target.value)
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow key={index}>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={detail.schoolName}
                    onChange={(e) =>
                      handleInputChange(index, "schoolName", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={detail.yearCompleted}
                    onChange={(e) =>
                      handleInputChange(index, "yearCompleted", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={detail.courseOfStudy}
                    onChange={(e) =>
                      handleInputChange(index, "courseOfStudy", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={detail.graduated}
                    onChange={(e) =>
                      handleInputChange(index, "graduated", e.target.value)
                    }
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </TableContainer>
    </Grid>
  );
}
