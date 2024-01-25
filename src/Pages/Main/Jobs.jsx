import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
import apiClient from "../../api/apiClient";
import Paginate from "../../components/Paginate";
import useApi from "../../hooks/useApi";
import "./styles/Jobs.css";
import JobSearch from "./JobSearch";
import { useSelector } from "react-redux";
import { TableMui } from "../../components/mui";
import Typography from "@mui/material/Typography";
import PositionSidebar from "../../components/sidebar/PositionSidebar";
import { Button, Box, Grid } from "@mui/material";

let limit = 10;

function Jobs(props) {
  const location = useLocation();
  const { userType: role } = useSelector((state) => state.auth);
  const queryParams = new URLSearchParams(location.search);

  // Access the query parameters
  const stateData = {
    speciality: queryParams.get("speciality"),
    location: queryParams.get("location"),
  };
  const [position, setPosition] = useState(false);
  const [current1, setCurrent1] = useState();
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);

  const { isLoggedIn } = useSelector((state) => state.auth);

  const [state, setState] = useState(stateData);

  const [sortBy, setSortBy] = useState();
  const [FilterData, setFilterData] = useState({
    status: "",
    type: "",
    speciality: "",
    location: "",
  });
  const handleChange = (key, value) => {
    setFilterData({ ...FilterData, [key]: value });
  };

  useEffect(() => {
    setState(stateData);
    if (!location.search) resetData();
  }, [location.search]);
  useEffect(() => {
    if (state?.speciality || state?.location) fetchData();
  }, [state]);
  useEffect(() => {
    fetchData();
  }, [sortBy]);

  const { request, data, loading } = useApi((route) => apiClient.get(route));

  async function fetchData(page = 1) {
    if (page == 1 && count) setCount(0);

    let query = `/positions/?page=${page}&type=${FilterData.type || ""}
    &status=${"OP"}
    &ordering=${sortBy || ""}
    &location=${
      FilterData.location || state?.location?.split(",").join(" ") || ""
    }
    &${"speciality"}=${FilterData.speciality || state?.speciality || ""}`;

    const result = await request(query);
    if (!result.ok) return;
    //console.log(result);
    if (!count || page == 1) setCount(result.data.count);
  }
  async function resetData(page = 1) {
    if (page == 1 && count) setCount(0);

    let query = `/positions/?page=${page}`;

    const result = await request(query);
    if (!result.ok) return;
    //console.log(result);
    if (!count || page == 1) setCount(result.data.count);
  }
  const handlePageChange = (event, value) => {
    fetchData(value);
  };

  const clearFilter = () => {
    setFilterData("");
    setState("");
    resetData();
  };


 // ...

const dummyData = [
  {
    id: 1,
    title: "Sample Job 1",
    company: "Sample Company 1",
    type: "Full-Time",
    company_location: "Sample City, Sample State",
    speciality: "Sample Speciality 1",
    date: "2023-12-20",
    time: "9:00am to 5:00pm",
  },
  {
    id: 2,
    title: "Sample Job 2",
    company: "Sample Company 2",
    type: "Part-Time",
    company_location: "Sample City, Sample State",
    speciality: "Sample Speciality 2",
    date: "2023-12-21",
    time: "10:00am to 6:00pm",
  },
  // Add more dummy data as needed
  {
    id: 3,
    title: "Sample Job 3",
    company: "Sample Company 3",
    type: "Full-Time",
    company_location: "Sample City, Sample State",
    speciality: "Sample Speciality 3",
    date: "2023-12-22",
    time: "8:00am to 4:00pm",
  },
  {
    id: 4,
    title: "Sample Job 4",
    company: "Sample Company 4",
    type: "Part-Time",
    company_location: "Sample City, Sample State",
    speciality: "Sample Speciality 4",
    date: "2023-12-23",
    time: "11:00am to 7:00pm",
  },
  // Add more dummy data as needed
];

// ...

  return (
    <div>
      <Helmet>
        <div>Shift</div>
      </Helmet>

      <div className="pt-3">
        <div className="bg-job d-flex align-items-center justify-content-center">
          <Typography variant="h4" className="text-light fw-bold">
          Shifts
          </Typography>
        </div>
      </div>

      <div className="container px-5" style={{ marginTop: "8rem" }}>
        <div className="d-flex align-items-center justify-content-center mb-5">
          <Typography variant="h3" sx={{ textAlign: "center" }}>
            IsentCare Your Staffing Agency
          </Typography>
        </div>

        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            style={{
              maxWidth: "1200px",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              style={{
                maxWidth: "600px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              md={12}
              lg={6}
              // className="align-items-md-center"
            >
              <div className="p-4">
                <p style={{ lineHeight: "2", textAlign: "justify" }}>
                  We will help you find the right fit with your schedule and
                  your professional goals. Whether you are looking for a
                  flexible way to make extra money in addition to your primary
                  job or looking for Temporary or Permanent placement. IsentCare
                  offers outstanding employment opportunities for our applicants
                  while providing quality temporary and permanent employees for
                  our Client Companies. All shifts availability. Full-Time or
                  Part-Time.
                </p>
                <p style={{ lineHeight: "2", textAlign: "justify" }}>
                  We view our candidates as more than just employees. With that
                  in mind, we provide competitive wages. We are W2 employees,
                  meaning we contribute to payroll taxes, provide workers
                  compensation insurance and professional Liability insurance.
                </p>
              </div>
            </Grid>
            <Grid
              item
              style={{
                maxWidth: "600px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              md={12}
              lg={6}
            >
              <div className="p-4">
                <img
                  src="https://isentcare.com/wp-content/uploads/2022/01/shutterstock_127670099.jpg"
                  style={{ width: "100%" }}
                />
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>

      <div
        className="w-100%"
        style={{
          marginTop: "8rem",
          marginBottom: "5rem",
          backgroundColor: "#eee",
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="d-flex align-items-center justify-content-center mb-5">
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            We Offer These Types Of Employment Solutions
          </Typography>
        </div>

        <div className="d-flex align-items-center justify-content-center gap-4 flex-wrap px-5">
          <div className="">
            <div
              className="d-flex align-items-start justify-content-center gap-1 flex-column rounded-3 text-light bg-primary px-4 mb-4"
              style={{height: "155px" }}
            >
              <Typography variant="h5">
                Temporary On Demand Or Per Diem
              </Typography>
              <Typography variant="body1">
                We provide Per Diem assignment to nurses and allied health
                professionals in various healthcare facilities
              </Typography>
            </div>
            <div
              className="d-flex align-items-start justify-content-center gap-1 flex-column rounded-3 text-light bg-primary px-4"
              style={{ height: "155px" }}
            >
              <Typography variant="h5">Temp-To-Hire</Typography>
              <Typography variant="body1">
                Get Your foot in the door. The healthcare facility has the
                option to offer you a permanent role
              </Typography>
            </div>
          </div>

          <div className="">
            <div
              className="bg-primary d-flex align-items-start justify-content-center gap-1 flex-column rounded-3 text-light px-4 mb-4"
              style={{height: "127px" }}
            >
              <Typography variant="h5">Temp Fixed Term Contracts</Typography>
              <Typography variant="body1">
                We provide temporary fixed contract 13 weeks’ long
              </Typography>
            </div>
            <div
              className="d-flex align-items-start justify-content-center gap-1 flex-column rounded-3 text-light bg-primary px-4"
              style={{height: "127px" }}
            >
              <Typography variant="h5">Direct Hire</Typography>
              <Typography variant="body1">
                We will help you with direct employment to a healthcare
                facilities
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <div className="px-2 ">
        <JobSearch
          values={{
            fetchData,
            loading,
            FilterData,
            handleChange,
            state,
            clearFilter,
          }}
        />
      </div>
      {position && (
        <PositionSidebar
          values={{ current: current1, show: position, setShow: setPosition }}
        />
      )}
      <div className=" container py-5 ">
        <div className="row my-5">
          <div className="col-md-6">
            <h5 className="text-primary text-md-start text-center mb-5 mb-md-0">
Shifts
            </h5>
          </div>
        </div>

        <div>
          <TableMui
            onSort={(field, direction) => {
              let value = direction == "asc" ? field : "-" + field;
              setSortBy(value);
            }}
            styleTableTh={{
              color: "#ffffff",
              backgroundColor: "#0D6EFD",
              fontWeight: "bold",
              whiteSpace: "nowrap",
            }}
            th={{
              title: "Title",
              company: "Company",
              type: "Type",
              company_location: "Location",
              speciality: "Speciality",
              date: "Date",
              time: "Time",

              ...(!["AD", "HO"].includes(role) ? { actions: "Action" } : {}),
            }}
            // sortDisable={["status","worksite"]}
            loading={loading}
            td={dummyData}
            // link={"/admin/new-job-detail/"}

            customFields={[
              {
                name: "actions",
                data: (value, item) => (
                  <Link
                    to={
                      // isLoggedIn
                        // ? 
                        "/apply"
                        //  + item.id
                        // : "/employee/login"
                    }
                    state={"/jobs/apply-now/" + item.id}
                  >
                    <button
                      className="white_space btn btn-primary px-4"
                      title="Apply Now"
                    >
                      <small>Apply Now</small>
                    </button>
                  </Link>
                ),
              },
              {
                name: "title",
                data: (value, item) => (
                  <Button
                    style={{
                      textDecoration: "underline",
                      color: "#000000",
                      fontWeight: "bold",
                    }}
                    onClick={() => {
                      setCurrent1(item.id);
                      setPosition(true);
                    }}
                    title={value}
                  >
                    {value}
                  </Button>
                ),
              },
              {
                name: "company",
                data: (value, { company }) => <>{company?.company}</>,
              },
              {
                name: "company_location",
                data: (value, { company }) => (
                  <>
                    {company?.address},{company?.state}
                  </>
                ),
              },
              {
                name: "date",
                data: (value, { company }) => (
                  <>
                    {/* {company?.address},{company?.state} */}
                    12-11-2023
                  </>
                ),
              },
              {
                name: "time",
                data: (value, { company }) => (
                  <>
                    {/* {company?.address},{company?.state} */}
                    9:00am to 5:00pm 
                  </>
                ),
              },
            ]}
          />
        </div>
        <Paginate count={count} onChange={handlePageChange} />
      </div>

      {/* <div className=' row mb-3'>
    <div className='col-md-6 p-3 '>
      <h2 className='text-center text_color'>
      Search Jobs
      </h2>
      <p className='text-center fw-bold text-muted'>
      Our Newest Healthcare Jobs
      </p>
      <div className=' d-flex justify-content-center'>
        <img src={require("../../assets/job-search.png")} alt="" />
      </div>

    </div>
    <div className='col-md-6 '>
      <div className='col-md-8 p-3 rounded shadow '>
      <h2>
      Take Control of Your Career
      </h2>
      <p>
      What kind of job are you looking for with IsentCare?
      </p>

      <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Select Type</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          // MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>

    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Select State</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={Country}
          onChange={handleChange_2}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          // MenuProps={MenuProps}
        >
          {countries.map((country) => (
            <MenuItem key={country} value={country}>
              <Checkbox checked={Country.indexOf(country) > -1} />
              <ListItemText primary={country} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>

    <div>
    <TextField sx={{ m: 1, width: 300 }} id="outlined-basic" label="Choose a City" variant="outlined" />
    </div>

    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Select Discipline</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={Discipline}
          onChange={handleChange_3}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          // MenuProps={MenuProps}
        >
          {disciplines.map((discipline) => (
            <MenuItem key={discipline} value={discipline}>
              <Checkbox checked={Discipline.indexOf(discipline) > -1} />
              <ListItemText primary={discipline} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>

    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Select Discipline</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={Speccility}
          onChange={handleChange_4}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          // MenuProps={MenuProps}
        >
          {medicalSpecialties.map((speccility) => (
            <MenuItem key={speccility} value={speccility}>
              <Checkbox checked={Speccility.indexOf(speccility) > -1} />
              <ListItemText primary={speccility} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>

    <div className='d-flex justify-content-end gap-2'>
      <button type="button" class="btn btn-outline-secondary">Reset</button>
     <button type="button" class="btn btn-primary">Search</button>
    </div>
      </div>
      
    </div>
  </div> */}
    </div>
  );
}

export default Jobs;
