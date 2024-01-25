import { Box, Button, Drawer, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, Switch, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import DateField from "../components/mui/DateField";
import { TiTick } from "react-icons/ti";
import TableMui from "../components/mui/TableMui";
import { AiOutlineSearch } from "react-icons/ai";
import TabBars from "../components/mui/TabBars";
import { RxCross2 } from "react-icons/rx";
import { BsArrowsFullscreen, BsThreeDots } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import Divider from "@mui/material/Divider";
import { SelectOption } from "../components/mui";
import { TfiUpload } from "react-icons/tfi";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import apiClient from '../api/apiClient';
import useApi from "../hooks/useApi";
import Paginate from "../components/Paginate";
import MyVerticallyCenteredModal from "../components/Matches/MyVerticallyCenteredModal";
import PositionSidebar from "../components/sidebar/PositionSidebar";
import SideBarCandidate from "../components/sidebar/SideBarCandidate";
import { useOutletContext } from "react-router-dom";
import getThemeColor from "../modules/getThemeColor";
import SearchHome from "../components/mui/SearchBar";
import MatchStatusForm from "../components/Matches/MatchStatusForm";
import { Helmet } from "react-helmet";
import downloadFile from "../modules/downloadFile";


export default ({ user }) => {

  const [count, setCount] = useState(0)
  const [car, setCar] = useState([])
  
 
const fetchCar=async()=>{
  
  const result =await apiClient.get("/car/")
  console.log(result)
  setCar(result?.data?.results)
}
  useEffect(()=>{
    fetchCar()
  },[])

  return (
    <div>
      <Helmet>
        <title>
          Cars
        </title>
      </Helmet>

      {/* <Button onClick={() => setShow(true)}>Data</Button> */}

     <Box className="" component={Paper} sx={{ marginBottom: "20px", padding: "10px", }}>
     
      

        <Box className="" component={Paper} sx={{ marginBottom: "20px", padding: "20px", }}>
          <Typography color={"black"} variant="h5" sx={{ marginBottom: "10px" }}>
            Cars
          </Typography>

          <Box className="">
            <TableMui
              onSort={(field, direction) => {
                let value = direction == "asc" ? field : "-" + field
                
              }}

              styleTableTh={{
                color: "#ffffff",
                fontWeight: "bold",
                whiteSpace: "nowrap",
                // bgcolor:getThemeColor(type,"primary")
              }}
              th={{
                name: "Car",
                model: "Model",
                price: "Price",
                launch_year: "Launch Year",
                power: "Power",
                // position_type: "Position Type",
                // projected_start_date: "Start Date",
                // projected_end_date: "End Date",
                // created_at: "Date Created",
                // position_owner: "Working Position Owner",
                // status_since: "Status Since",
              }}
              td={car}
              // link={"/admin/new-job-detail/"}

              customFields={[
                {
                  name: "position_title",
                  data: (value, item) => (
                    <Button
                      style={{ textDecoration: "underline", color: "#000000", fontWeight: "bold" }}
                      onClick={() => {
                        
                      }}
                      title={value}
                    >
                      {value}
                    </Button>
                  ),
                },
                // {
                //   name: "status",
                //   data: (value, item) => (
                //     <Button
                //     style={{ textDecoration: "underline", color:"#000000", fontWeight:"bold" }}
                //       onClick={() => {
                //         setCurrent(item);
                //         setMatchStatus(true);
                //       }}
                //     >
                //       {value}
                //     </Button>
                //   ),
                // },
                {
                  name: "candidate_name",
                  data: (value, item) => (
                    <Button
                      style={{ textDecoration: "underline", color: "#000000", fontWeight: "bold" }}
                      onClick={() => {
                        
                      }}
                      title={value}
                    >
                      {value}
                    </Button>
                  ),
                },
                {
                  name: "created_at",
                  data: (value, { schedule }) => (
                    <>
                      {value.split("T")[0]}
                    </>

                  ),
                },
              ]}
            />

          </Box>
          {/* <Paginate count={count} onChange={handlePageChange} /> */}
        </Box>
      </Box>

    </div>
  );
};

