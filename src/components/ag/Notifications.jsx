import { useContext, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Divider, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import apiClient from "../../api/apiClient";
import SideBarCandidate from "../sidebar/SideBarCandidate";
import PositionSidebar from "../sidebar/PositionSidebar";
import { SocketContext } from "../../socket/SocketProvider";
import { useNavigate } from "react-router-dom";
import downloadFile from "../../modules/downloadFile";

export default function ModelShowNotification({ show, onHide, setNewNTF }) {
  const { token, userType } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);

  const { socket, isConnected, subscribe, unsubscribe } =
    useContext(SocketContext);

  useEffect(() => {
    const handleSocketMessage = (response) => {
      console.log(`Received message in Notifications: ${response}`);
      let data = JSON.parse(response);
      console.log(data);

      if (data.type == "display_notification") {
        setData((prevData) => [data, ...prevData]);
        //console.log([...data, event.data]);
        fetchIsRead();
        // Handle the received message specifically in this component
      }
    };

    if (socket) subscribe(handleSocketMessage);

    return () => {
      unsubscribe(handleSocketMessage);
    };
  }, [socket, subscribe, unsubscribe]);

  useEffect(() => {
    fetchData();
    fetchIsRead();
  }, []);

  async function fetchData() {
    const result = await apiClient.get(`/Notification/?page=${page}`);
    if (!result.ok) return;
    //console.log(result,"ghfhfghfhfghfghgfh notification")
    if (!count) setcount(result.data.count);
    //console.log(result.data.count,"ghfhfghfhfghfghgfh notification")
    setData([...data, ...result.data.results]);
    setPage(page + 1);
    fetchIsRead();
  }
  async function fetchIsRead() {
    const result = await apiClient.get("/Notification/?count=False");
    if (!result.ok) return;
    setNewNTF(result?.data?.count);
  }
  async function handleRead(id) {
    const result = await apiClient.patch(`/Notification/${id}/`, {
      is_read: true,
    });
    if (!result.ok) return;
    setData(
      data.map((item) => {
        if (item.id == id) item.is_read = true;
        return item;
      })
    );
  }

  const [showSide, setShowSide] = useState(false);
  const [current, setCurrent] = useState();
  const [type, setType] = useState();
  const [count, setcount] = useState(0);
  const navigate = useNavigate();
  async function handleClick(item) {
    const { message, id, instance_id } = item;
    if (!id) return;
    onHide();
    if (message.toLowerCase().includes("position export")) {
      try {
        downloadFile(instance_id)
      } catch (error) {
        console.log(error);
      }
      console.log(item);
    } else if (message.toLowerCase().includes("candidate export")) {
      try {
        downloadFile(instance_id)
      } catch (error) {
        console.log(error);
      }
    } else if (message.toLowerCase().includes("position")) {
      setType("position");
      setCurrent(instance_id);
      setShowSide(true);
    } else if (
      message.toLowerCase().includes("candidate") &&
      userType == "AD"
    ) {
      navigate(`/manager/user-role/employee/?id=${instance_id}`);
    } else if (message.toLowerCase().includes("hospital") && userType == "AD") {
      navigate(`/manager/user-role/hospital/?id=${instance_id}`);
    } else if (message.toLowerCase().includes("agency") && userType == "AD") {
      navigate(`/manager/user-role/agency/?id=${instance_id}`);
    }
    await handleRead(id);

    await fetchIsRead();
  }
  const [page, setPage] = useState(1);
  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.target;
    if (scrollTop + clientHeight >= scrollHeight - 1) {
      if (count > data.length) fetchData();
    }
  };
  return (
    <>
      {type === "position" && showSide && (
        <PositionSidebar
          values={{ current, show: showSide, setShow: setShowSide }}
        />
      )}
      {type === "candidate" && showSide && (
        <SideBarCandidate
          values={{ current, show: showSide, setShow: setShowSide }}
        />
      )}

      <Modal
        show={show}
        onHide={onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="lg"
        style={{ zIndex: 1300 }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Newest</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ height: 300, overflowX: "hidden", overflowY: "auto" }}
          onScroll={(e) => handleScroll(e)}
        >
          {data.map((item) => (
            <>
              <Grid
                className=""
                container
                spacing={1}
                lineHeight={"3px"}
                style={{ overflowY: "auto", cursor: "pointer" }}
              >
                <Grid item>
                  <h5
                    onClick={() => handleClick(item)}
                    style={{
                      fontSize: "16px",
                      fontWeight: !item.is_read && "600",
                    }}
                  >
                    {item.message}
                  </h5>
                </Grid>
              </Grid>
              <Divider
                sx={{
                  borderBottomWidth: "2px",
                  marginTop: "5px",
                  backgroundColor: "black",
                }}
              />
            </>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
}
