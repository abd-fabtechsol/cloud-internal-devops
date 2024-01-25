import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { SelectOption } from '../../components/mui';

const ToolModal = ({show,onHide}) => {
    let empyFields = {
        position: "",
        Company: "",
        WorkSite: "",
        FacilityDepartment: "",
       
      };
      const [newPosition, setNewPosition] = useState(empyFields);
    
      const [positionType, setPositionType] = useState([{"id":2,"name":"Part Time"},{"id":1,"name":"Full Time"}]);
      const [shift, setShift] = useState([{"id":2,"name":"Night Shift"},{"id":1,"name":"Day Shift"}]);
      const [message, setMessage] = useState({text:"",color:""});
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setNewPosition({ ...newPosition, [name]: value });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        
      };
      function resetErrors(){
        setMessage({message:"",color:""})
      }
    
    return (
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
            Mass Ownership Change
            <Typography>This tool is used for mass candidate and match ownership change from one owner to the other</Typography>
          </Modal.Title>
          
        </Modal.Header>
        <Modal.Body>
        <Grid container>
            <Grid item xs={12}>
        <SelectOption
                
                required
                label="Current Owner"
                name="position"
                inputProps={{ maxLength: 150 }}
                id="outlined-name"
                onChange={handleChange}
                value={newPosition.position}
                onFocus={resetErrors}
                data={shift}
                fullWidth
                size={"small"}
                style={{ marginBottom: "25px", width:"100%" }}
              />
              </Grid>
            <Grid item xs={12}>
        <SelectOption
                
                required
                label="New Owner"
                name="position"
                inputProps={{ maxLength: 150 }}
                id="outlined-name"
                onChange={handleChange}
                value={newPosition.position}
                onFocus={resetErrors}
                data={shift}
                fullWidth
                size={"small"}
                style={{ marginBottom: "25px", width:"100%" }}
              />
              </Grid>
        </Grid>
        </Modal.Body>
        <Modal.Footer>
       
        <Button variant="secondary">close</Button>
        <Button variant="primary">Start</Button>
        </Modal.Footer>
      </Modal>
      );
}

export default ToolModal