import { Button, Toolbar, Typography, Box, Grid } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { isMobile } from "react-device-detect";
import { Helmet } from "react-helmet";
import { useNavigate, useOutletContext, Link } from "react-router-dom";
import apiClient from "../../api/apiClient";
import { LoadingOverlaySmall } from "../../components/mui/LoadingOverlay";
import Paginate from "../../components/Paginate";
import { trimDates } from "../../components/trimDate";
import useApi from "../../hooks/useApi";
import "./styles/blogs.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
let limit = 6;
export default function Blogs() {
  const { formEnable, setFormEnable, open, setOpen } = useOutletContext();
  const [count, setCount] = useState(0);
  const [blogs, setBlogs] = useState([]);

  const { data, error, request } = useApi((endpoint) =>
    apiClient.get(endpoint)
  );
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  let Endpoint = `blogs/?limit=${limit}&offset=`;
  useEffect(() => {
    fetchData(Endpoint + offset);
  }, []);
  const fetchData = async (endpoint) => {
    setLoading(true);
    const response = await request(endpoint);
    if (error) return; //console.log("error while retrieve")
    if (!count) setCount(response.data.count);
    const afterTrimming = trimDates(response.data.results, "created_at");

    afterTrimming && setBlogs(afterTrimming);
    //console.log(afterTrimming);
    setLoading(false);
  };
  const handlePageChange = (event, value) => {
    value = (value - 1) * limit;
    fetchData(Endpoint + value);
    setOffset(value);
  };

  const blogDetail = (item) => {
    navigate("/blog/detail/" + item.id, { state: item });
  };
  return (
    <div style={{ minHeight: "60vh" }}>
      <Helmet>
        <title>Blogs</title>
      </Helmet>

      <div className="pt-3">
        <div className="bg-blog d-flex align-items-center justify-content-center">
          <Typography variant="h4" className="text-light fw-bold">
            BLOGS
          </Typography>
        </div>
      </div>

      <Box sx={{ flexGrow: 1 }} style={{ marginTop: "8rem" }}>
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
              <Typography variant="h4" className="mb-2 fw-bold">
                We Have Got You Covered
              </Typography>
              <p
                style={{
                  textAlign: "justify",
                  paddingBottom: "1rem",
                }}
              >
                We Hold Our Staff Members As Well As The Healthcare
                Professionals In Our Roster To A High Degree Of Professionalism.
                We Know Your Career Is Important To You, And We Strive To Be
                Efficient In Assisting You To Advance It. At IsentCare We Also
                Provide Home Care For Seniors And Others In The Privacy Of Their
                Own Homes And In Communities.
              </p>
              <Link
                to={"/contact-us"}
                className="text-decoration-none text-light fw-bold bg-primary px-5 py-3"
              >
                Contact Us
              </Link>
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
                src="https://isentcare.com/wp-content/uploads/2022/02/img3.jpg"
                style={{
                  width: "100%",
                  objectFit: "cover",
                  boxShadow:
                    "25px 25px 0px 0px  rgba(216.75, 215.33641304347827, 215.33641304347827, 0.5)",
                }}
              />
            </div>
          </Grid>
        </Grid>
      </Box>

      <div
        className="container px-5"
        style={{ marginTop: "8rem", marginBottom: "5rem" }}
      ></div>

      <div className="container">
        <h1 className="Hfs_16">Our Blogs</h1>
      </div>
      {/* <div className="container-fluid">
      <div className="row back_img my-3 mx-0 mx-sm-4">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 pt-3 ps-sm-5 my-auto"> */}

      {/* {!auth.isLoggedIn&&<button type="button"
        onClick={()=>{
          if(isMobile)
          setOpen(true)
          else
          window.scrollTo({
           top: 0,
           behavior: 'smooth',
         });
           navigate('/')
          setFormEnable(true)
         }}
        className="px-4 py-2 mt-3 Contact_btn" >Sign in to Apply</button>} */}
      {/* <img  src={require("../../assets/Blogs/play-circle.png")} alt="" className="play_img ms-3" />
        </div>
      </div>
    </div> */}
      <div className="container ">
        <div className="row">
          <LoadingOverlaySmall open={loading} />
          {!loading &&
            blogs.map((item) => (
              <div
                className="col-lg-4 col-md-6 mb-4"
                onClick={() => blogDetail(item)}
              >
                <div className="card">
                  <img
                    className="card-img-top"
                    src={item.image}
                    alt="Card image"
                    style={{ width: "100%", height: "16rem" }}
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-2">
                      <h5 className="card-title">{item.title}</h5>
                      <div className="ms-1" style={{ fontSize: "13px" }}>
                        <div className="my-auto mx-2 ">
                          <div className="text_hidden">
                            <h6 className="mb-0">{item.author}</h6>
                          </div>
                        </div>
                        <div className="my-auto ms-2">
                          <p className="mb-0">{item.created_at}</p>
                        </div>
                      </div>
                    </div>
                    <div id="section">
                      <div className="article">
                        <p className="mb-0 fs_12">
                          {item.description.length > 10
                            ? item.description.slice(0, 20) + "..."
                            : item.description}
                        </p>
                      </div>
                      <Button
                        variant="contained"
                        type="button"
                        className="btn mt-2 btn-link moreless-button"
                        onClick={() => blogDetail(item)}
                      >
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {count == 0 && (
            <div className="d-flex justify-content-center">
              <p className="text-muted">No Blogs Available</p>
            </div>
          )}
          <Paginate count={count} limit={limit} onChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
}
