import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import apiClient from "../../api/apiClient";
import { AdminButton } from "../../components/mui";
import colors from "../../config/colors";
import useApi from "../../hooks/useApi";
import { Modal, ModalFooter } from 'react-bootstrap'
import CaptchaButton from "../../components/mui/CaptchaButton";
import { LoadingOverlaySmall } from "../../components/mui/LoadingOverlay";
import { OnInputPhone } from "../../modules/FormHelpers";

const AddUserModal = ({ current, show, onHide, fetchData, role }) => {
  //console.log(current, "mycurrent");
  const initial = {
    first_name: current?.first_name || "",
    last_name: current?.last_name || "",
    email: current?.email || "",
    password: current?.password || "",
    password2: current?.password2 || "",
    phone: current?.phone || "",
    role: current?.role||role || "",
    company: current?.company || "",
    address: current?.address || "",
    state: current?.state || "",
    is_active:true

  }
  //console.log(current, "currrent")
  const [data, setData] = useState(initial)

  const [message, setMessage] = useState({ text: "", color: "" });

  const navigate = useNavigate()
  function handleChange(key, value) {
    setData({ ...data, [key]: value })
  }
  const apiUser = useApi((data) => apiClient.post('/user/', data))
  const apiUser2 = useApi((route, data) => apiClient.patch(route, data))

  async function handleSubmit(e) {
    e.preventDefault();

    if (current && data.password) {

      if (data.password != data.password2)
        return setMessage({ text: "Password doesn't match please enter again", color: "danger" })
      if (data.password.length < 6)
        return setMessage({ text: "Password should be atleast 6 characters", color: "danger" })
    }
    const { password2, ...data2 } = data
    //console.log(data)
    let result
    if (current) {
      let { password, password2, ...currentData } = data
      if (password)
        currentData = { ...currentData, password }
      result = await apiUser2.request(`/user/${current.id}/`, currentData)
    }
    else
      result = await apiUser.request(data2)
    if (!result.ok) return toast.error(current ? "Failed to Update" : "Failed to Add new User")
    toast.success(current ? "Updated User" : "Successfully added new user")
    onHide()
    fetchData()


  }

  function resetErrors() {
    setMessage({ text: "", color: "" })
  }
  function emptyForm() {
    handleChange(initial)
  }
  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ zIndex: "1300" }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">

            {current ? "Update" : " Add"} User

          </Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <div style={{ height: 400, maxHeight: 400,paddingTop:10, overflowX: "hidden" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    onFocus={resetErrors}
                    required

                    fullWidth
                    size="small"
                    id="fname"
                    label="First Name"
                    name="firstname"
                    autoComplete="firstname"
                    value={data.first_name}
                    onChange={(e) => handleChange("first_name", e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    onFocus={resetErrors}
                    required
                    fullWidth
                    size="small"
                    name="Last Name"
                    type="text"
                    label="Last Name"
                    id="lname"
                    autoComplete="lastname"
                    value={data.last_name}
                    onChange={(e) => handleChange("last_name", e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    onFocus={resetErrors}
                    required
                    fullWidth
                    size="small"
                    id="phone"
                    label="Phone"
                    name="phone"
                    autoComplete="phone"
                    value={data.phone}
                    onInput={OnInputPhone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                  />
                </Grid>
                {/* {!current && <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={data.role}
                      label="Age"
                      onChange={(e) => handleChange("role", e.target.value)}
                      sx={{ height: "40px", display: "flex", alignItems: "center", justifyContent: "flex-start" }}
                    >
                      <MenuItem value={"AG"}>Agency</MenuItem>
                      <MenuItem value={"HO"}>hospital</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>} */}
                <Grid item xs={12} md={6}>
                  <TextField
                    onFocus={resetErrors}
                    required
                    fullWidth
                    size="small"
                    name="email"
                    label="Email"
                    type="email"
                    id="email"
                    value={data.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    onFocus={resetErrors}
                    required={current ? false : true}
                    fullWidth
                    size="small"
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={data.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    onFocus={resetErrors}
                    required={current ? false : true}
                    fullWidth
                    size="small"
                    name="confirm-password"
                    label="Confirm Password"
                    type="password"
                    id="confirm-password"
                    autoComplete="new-password"
                    value={data.password2}
                    onChange={(e) => handleChange("password2", e.target.value)}
                  />
                </Grid>
                {role !== "CA" && <>

                  <Grid item xs={12} md={6}>
                    <TextField
                      onFocus={resetErrors}
                      required
                      fullWidth
                      size="small"
                      name="company"
                      label="Company"
                      value={data.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      onFocus={resetErrors}
                      required
                      fullWidth
                      size="small"
                      name="address"
                      label="Address"
                      value={data.address}
                      onChange={(e) => handleChange("address", e.target.value)}
                    />

                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      onFocus={resetErrors}
                      required
                      fullWidth
                      size="small"
                      name="state"
                      label="State"
                      value={data.state}
                      onChange={(e) => handleChange("state", e.target.value)}
                    />
                  </Grid>
                </>}
              </Grid>
              {apiUser.loading || apiUser2.loading ? <LoadingOverlaySmall open={apiUser.loading || apiUser2.loading} /> :
                <CaptchaButton name={current ? "Update" : "Add"}
                  type="submit"
                  size="large"
                  style={{
                    backgroundColor: colors.primary,
                    "&:hover": { backgroundColor: "#002370" },
                    whiteSpace: "nowrap",
                    mt: 3,
                    mb: 2,
                  }} />}
            </div>
          </Modal.Body>
          {/* <ModalFooter>
                <Button type="submit" variant="contained">{current?"Edit":"Submit"}</Button>
            </ModalFooter> */}
        </form>
      </Modal>
    </>
  )
}

export default AddUserModal