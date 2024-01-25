import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "../../../redux/counterSlice";

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
import TabBars from "../../mui/TabBars";
import UserProfile from "../UserProfile";
import ModelShowNotification from "../../ag/Notifications";
import { buttonStyle, listItemStyle } from "../../../config/sidebarStyles";

const drawerWidth = 240;

function SideNav(props) {
  const { window } = props;
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const [newNTF, setNewNTF] = useState(0);
  const [open, setopen] = useState();
  const [file, setFile] = useState(require("../../../assets/profile.png"));
  const [modalShow, setModalShow] = useState(false);
  const [modalShowFeedback, setmodalShowFeedback] = useState(false);
  const [modalShowNotification, setmodalNotification] = useState(false);
  const [modalShowHistory, setmodalHistory] = useState(false);

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  const listItemData = [
    { label: "Dashboard", icon: <DashboardIcon />, link: "/hospitals/dashboard" },
    // {
    //   label: "Candidates",
    //   icon: <FaUserCircle size={23} />,
    //   link: "/hospitals/candidates",
    // },
    {
      label: "Shifts",
      icon: <FaShoppingBag size={23} />,
      link: "/hospitals/positions",
    },
    { label: "Matches ", icon: <FaUserCheck size={23} />, link: "/hospitals/matches" },
    // {
    //   label: "Credentials ",
    //   icon: <FaFolder size={23} />,
    //   link: "/hospitals/credentials",
    // },
    {
      label: "Timesheets ",
      icon: <BsStopwatchFill size={23} />,
      link: "/hospitals/time-sheets",
    },
    {
      label: "Reports ",
      icon: <TimelineOutlinedIcon size={23} />,
      link: "/hospitals/reports",
    },
    { label: "Control Center ", icon: <FaCog />, link: "/hospitals/profile" },
  ];

  const drawer = (
    <div className="">
      <div className="p-2 d-flex justify-content-center">
        <div style={{ width: "7rem" }}>
          <img width="100%" src={require("../../../assets/isent.png")} alt="img" />
        </div>
      </div>

    <UserProfile/>
      <div className=" d-flex gap-2 justify-content-center">
     {/* <RestoreOutlinedIcon fontSize="small"
          titleAccess="Recent records"
          onClick={() => setmodalHistory(true)}
        /> */}
        {/* <MessageOutlinedIcon fontSize="small"
          titleAccess="Leave Feedback"
          onClick={() => setmodalShowFeedback(true)}
          /> */}
        {/* <SmsFailedIcon fontSize="small"
          titleAccess="Click here to report a problem"
          onClick={() => setModalShow(true)}
        /> */}
         <div  onClick={() => setmodalNotification(true)} style={{cursor:"pointer"}}>
        <Badge color="primary" fontSize="small" badgeContent={newNTF} >
          <NotificationsNoneIcon className="myIconClass" style={{color:"#ffffff"}} fontSize="small"
            titleAccess="Click here to see notifications"
         
          />
        </Badge>
        </div>
      </div>
      <List>
        {listItemData.map((value, i) => (
          <ListItem
            key={i}
            component={NavLink}
            to={value.link}
            disablePadding
            sx={listItemStyle}
            className="list_text"
          >
            <ListItemButton    
         className="list-item "
         sx={buttonStyle}
       > 
              <ListItemIcon className="myIconClass " style={{color:"#ffffff"}}>{value.icon}</ListItemIcon>
              <ListItemText className="" primary={<Typography variant="body2" style={{ fontSize:14,color:"#ffffff" }} title={value.label}>{value.label}</Typography>} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding  className="list_text" onClick={()=>{
           dispatch(logout())
          navigate('/')
          }}>
          <ListItemButton   sx={buttonStyle} >
            <ListItemIcon className="myIconClass" style={{color:"#ffffff"}}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText  primary={<Typography variant="body2" style={{ fontSize:14,color:"#ffffff" }} title="logout">Logout</Typography> }  />
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
        bgcolor: "#40c25e",
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
            bgcolor: "#447BAB",
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
            bgcolor: "#447BAB",
            color: "#5e5c5c",
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
      {/* <ModalLeaveFeedback
        show={modalShowFeedback}
        onHide={() => setmodalShowFeedback(false)}
      /> */}
      <ModelShowNotification
      setNewNTF={setNewNTF}
        show={modalShowNotification}
        onHide={() => setmodalNotification(false)}
      />
      {/* <ModelShowHistory 
        show={modalShowHistory}
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


