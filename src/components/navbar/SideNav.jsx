import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import SmsFailedIcon from "@mui/icons-material/SmsFailed";
import Badge from "@mui/material/Badge";
import AlarmOutlinedIcon from "@mui/icons-material/AlarmOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import VerifiedIcon from "@mui/icons-material/Verified";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { NavLink, useNavigate } from "react-router-dom";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import AppsIcon from "@mui/icons-material/Apps";
import FolderIcon from "@mui/icons-material/Folder";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { mediaURL } from "../../api/apiClient";
import {
  FaUserCircle,
  FaShoppingBag,
  FaUserCheck,
  FaFolder,
  FaCog,
} from "react-icons/fa";
import { BsStopwatchFill } from "react-icons/bs";
import AttachmentOutlinedIcon from "@mui/icons-material/AttachmentOutlined";
import Modal from "react-bootstrap/Modal";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Button from "react-bootstrap/Button";
import { Divider, Grid, Paper, Stack } from "@mui/material";
import TabBars from "../mui/TabBars";
import {login} from '../../redux/counterSlice'
import { useDispatch, useSelector } from "react-redux";
import {logout} from '../../redux/counterSlice'
import FeedBack from "../ag/FeedBack";
import apiClient from "../../api/apiClient";
import UserProfile from "./UserProfile";
import ModelShowNotification from "../ag/Notifications";
import { buttonStyle, listItemStyle } from "../../config/sidebarStyles";

const drawerWidth = 240;

function SideNav(props) {
  const { window } = props;
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const [open, setopen] = useState();
  const [modalShow, setModalShow] = useState(false);
  const [modalShowFeedback, setmodalShowFeedback] = useState(false);
  const [modalShowNotification, setmodalNotification] = useState(false);
  const [newNTF, setNewNTF] = useState(0);


  const listItemData = [
    { label: "Dashboard", icon: <DashboardIcon />, link: "/dashboard" },
    {
      label: "User",
      // icon: <FaUserCircle size={23} />,
      link: "/user",
    },
    {
      label: "Cars",
      // icon: <FaShoppingBag size={23} />,
      link: "/cars",
    },
    { label: "Bids ", link: "/bids" },
    {
      label: "Pending User ",
     
      link: "/pending-user",
    },
    // {
    //   label: "Timesheets ",
    //   icon: <BsStopwatchFill size={23} />,
    //   link: "/agencies/time-sheets",
    // },
    // {
    //   label: "Reports ",
    //   icon: <TimelineOutlinedIcon size={23} />,
    //   link: "/agencies/reports",
    // },
    { label: "Control Center ", icon: <FaCog />, link: "/agencies/profile" },
  ];

  const drawer = (
    <div className="">
      <div className=" p-2 d-flex justify-content-center">
        <div style={{ width: "7rem" }}>
          <img width="100%" src={require("../../assets/logo.png")} alt="img" />
        </div>
      </div>
<UserProfile/>
    
      <div className="d-flex gap-2 justify-content-center">
        {/* <RestoreOutlinedIcon fontSize="small"
          titleAccess="Recent records"
          onClick={() => setmodalHistory(true)}
        /> */}
         {/* <div className="test">
        <MessageOutlinedIcon fontSize="small" style={{cursor:"pointer"}}
          titleAccess="Leave Feedback"
          onClick={() => setmodalShowFeedback(true)}
          />
          </div> */}
        {/* <SmsFailedIcon fontSize="small"
          titleAccess="Click here to report a problem"
          onClick={() => setModalShow(true)}
        /> */}
        
      </div>
      <List>
        {listItemData.map((value, i) => (
          <ListItem
            key={i}
            component={NavLink}
            to={value.link}
            disablePadding
            sx={listItemStyle}
          >
            <ListItemButton    
         className="list-item list_text"
         sx={buttonStyle}
       > 
              {/* <ListItemIcon className="myIconClass" sx={{color:"#FFFFFF"}}>{value.icon}</ListItemIcon> */}
              <ListItemText className="" primary={<Typography variant="body2" style={{ fontSize:14,color:"#FFFFFF", }} title={value.label}>{value.label}</Typography>} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding  className=" list_text" onClick={()=>{
           dispatch(logout())
           navigate('/')
          }}>
          <ListItemButton className=" list_text"   >
            {/* <ListItemIcon sx={{color:"#FFFFFF"}} >
              <LogoutIcon  />
            </ListItemIcon> */}
            <ListItemText className="" primary={<Typography variant="body2" style={{fontSize:14,color:"#ffffff"}} title='logout'>Logout</Typography> }/>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{
        width: { md: drawerWidth },
        flexShrink: { md: 0 },
        bgcolor: "#000E30",
      }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={props.mobileOpen}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            bgcolor: "#C24E6E",
            color: "#AFB7BE",
            zIndex: { md: 1000, xs: 1200 },
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            bgcolor: "#C24E6E",
            color: "#AFB7BE",
            width: drawerWidth,
            zIndex: { md: 1100, xs: 1200 },
          },
        }}
        open
      >
        {drawer}
      </Drawer>
      {/* <ModalReportPeroblem
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}
      {/* <FeedBack
        show={modalShowFeedback}
        onHide={() => setmodalShowFeedback(false)}
      /> */}
      <ModelShowNotification
      setNewNTF={setNewNTF}
        show={modalShowNotification}
        onHide={() => setmodalNotification(false)} 
      />
      {/* <ModelShowHistory
        show={setNewNTF}
        onHide={() => setmodalHistory(false)}
      /> */}
    </Box>
  );
}

SideNav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SideNav;

function ModalReportPeroblem(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ zIndex: 1300 }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Report a Problem
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label htmlFor="">Subject</label>
        <input
          className="form-control"
          type="text"
          name=""
          id=""
          placeholder="Wilbert Lacy (43824)"
        />
        <div>
          <label htmlFor="">Description</label>
        </div>
        <textarea
          className="form-control"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <div className="mt-2">
          <label
            className="border p-1 border-primary rounded"
            htmlFor="attchFile"
          >
            Attach files <AttachmentOutlinedIcon />{" "}
          </label>
          <input hidden type="file" name="" id="attchFile" />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button>Submit</Button>
        <button className="btn btn-outline-primary" onClick={props.onHide}>
          Cancel
        </button>
      </Modal.Footer>
    </Modal>
  );
}

// function ModalLeaveFeedback(props) {
//   const [value, setValue] = useState(2);
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//       style={{ zIndex: 1300 }}
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Vendor Portal Feedback
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <p>Let us know how we can make things better for you.</p>
//         <Typography component="legend">
//           {" "}
//           How would you rate the new experience ? *
//         </Typography>
//         <Rating
//           name="simple-controlled"
//           value={value}
//           onChange={(event, newValue) => {
//             setValue(newValue);
//           }}
//         />

//         <div>
//           <label htmlFor="">How can we improve your experience ? *</label>
//           <textarea
//             className="form-control"
//             name=""
//             id=""
//             cols="20"
//             rows="5"
//           ></textarea>
//         </div>
//         <div className="col-md-6 mt-2">
//           <label htmlFor="answer">How important is this to you ?</label>
//           <select
//             class="form-select"
//             aria-label="Default select example"
//             id="answer"
//           >
//             <option selected>Select Your Answer</option>
//             <option value="1">Answer One</option>
//             <option value="2">Answer Two</option>
//             <option value="3">Answer Three</option>
//           </select>
//         </div>

//         <div className="mt-2">
//           <label htmlFor="">Include an optional attachment</label>
//           <div>
//             <label className="btn btn_bg" htmlFor="file_upload">
//               Upload File
//             </label>
//             <input hidden type="file" name="" id="file_upload" />
//           </div>
//         </div>

//         <div className="col-md-6 mt-2">
//           <label htmlFor="answer">How important is this to you ?</label>
//           <select
//             class="form-select"
//             aria-label="Default select example"
//             id="answer"
//           >
//             <option selected>Select Your Answer</option>
//             <option value="1">Answer One</option>
//             <option value="2">Answer Two</option>
//             <option value="3">Answer Three</option>
//           </select>
//         </div>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button>Submit</Button>
//         <button className="btn btn-outline-primary" onClick={props.onHide}>
//           Cancel
//         </button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// function ModelShowHistory({ show, onHide }) {
//   const historyTab = [
//     {
//       label: "tab1",
//       icon: <AppsIcon style={{ marginTop: "15px" }} />,
//     },
//     {
//       label: "tab2",
//       icon: <PersonIcon style={{ marginTop: "15px" }} />,
//     },
//     {
//       label: "tab3",
//       icon: <GroupAddIcon style={{ marginTop: "15px" }} />,
//     },
//     {
//       label: "tab4",
//       icon: <FolderIcon style={{ marginTop: "15px" }} />,
//     },
//     {
//       label: "tab5",
//       icon: <AlarmOnIcon style={{ marginTop: "15px" }} />,
//     },
//     {
//       label: "tab6",
//       icon: <AccountCircleIcon style={{ marginTop: "15px" }} />,
//     },
//   ];
//   const ContentData = () => {
//     const data = [
//       {
//         message:
//           "Travel-Munster-RxpressCare RN has been changed from open to pending Approved",
//         date: "2/15/2022",
//         icon: <WorkIcon style={{ marginTop: "15px" }} />,
//       },
//       {
//         message:
//           "Travel-Munster-RxpressCare RN has been changed from open to pending Approved",
//         date: "2/15/2022",
//         icon: <WorkIcon style={{ marginTop: "15px" }} />,
//       },
//       {
//         message:
//           "Travel-Munster-RxpressCare RN has been changed from open to pending Approved",
//         date: "2/15/2022",
//         icon: <WorkIcon style={{ marginTop: "15px" }} />,
//       },
//       {
//         message:
//           "Travel-Munster-RxpressCare RN has been changed from open to pending Approved",
//         date: "2/15/2022",
//         icon: <WorkIcon style={{ marginTop: "15px" }} />,
//       },
//       {
//         message:
//           "Travel-Munster-RxpressCare RN has been changed from open to pending Approved",
//         date: "2/15/2022",
//         icon: <WorkIcon style={{ marginTop: "15px" }} />,
//       },
//       {
//         message:
//           "Travel-Munster-RxpressCare RN has been changed from open to pending Approved",
//         date: "2/15/2022",
//         icon: <WorkIcon style={{ marginTop: "15px" }} />,
//       },
//       {
//         message:
//           "Travel-Munster-RxpressCare RN has been changed from open to pending Approved",
//         date: "2/15/2022",
//         icon: <PersonIcon style={{ marginTop: "15px" }} />,
//       },
//       {
//         message:
//           "Travel-Munster-RxpressCare RN has been changed from open to pending Approved",
//         date: "2/15/2022",
//         icon: <VerifiedIcon style={{ marginTop: "15px" }} />,
//       },
//     ];
//     return (
//       <Box sx={{ marginBottom: "20px", padding: "20px" }}>
//         {data?.map((item, index) => (
//           <>
//             <Grid container spacing={1} lineHeight={"3px"}>
//               <Grid item sx={{ color: "#8E93A4" }}>
//                 {item.icon}
//               </Grid>

//               <Grid item>
//                 <Typography
//                   sx={{ fontSize: "16px", fontWeight: "500px", color: "blue" }}
//                 >
//                   {item.message}
//                 </Typography>

//                 <Box
//                   style={{ display: "flex" }}
//                   alignContent={"center"}
//                   spacing={2}
//                 >
//                   <Typography style={{ marginLeft: "5px" }}>
//                     {item.date}
//                   </Typography>
//                 </Box>
//               </Grid>
//             </Grid>
//             <Divider
//               sx={{
//                 borderBottomWidth: "2px",
//                 marginTop: "5px",
//                 backgroundColor: "black",
//               }}
//             />
//           </>
//         ))}
//       </Box>
//     );
//   };
//   return (
//     <Modal
//       show={show}
//       onHide={onHide}
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//       size="lg"
//       style={{ zIndex: 1300 }}
//     >
//       <Modal.Header closeButton></Modal.Header>
//       <Modal.Body style={{ height: "80vh", overflowY: "auto" }}>
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-around",
//           }}
//         >
//           <TabBars CustomTitles={historyTab} Contents={[ContentData]} />
//         </Box>
//         <ContentData />
//       </Modal.Body>
//     </Modal>
//   );
// }
