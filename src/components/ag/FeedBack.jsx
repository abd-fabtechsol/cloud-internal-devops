import { Button, Rating, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import apiClient from '../../api/apiClient';
import useApi from '../../hooks/useApi';

const FeedBack = (props) => {
    const [value, setValue] = useState("");
    
    
    
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const result=await apiClient.post("/FeedBack",{feed_back:value})
        if(!result.ok) return toast.error("error")
        toast.success("feedback Submitted")
        props.onHide()
        //console.log(value)
    }
    //console.log(value)
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
              Agency Portal Feedback
            </Modal.Title>
          </Modal.Header>
          <form onSubmit={handleSubmit}>
          <Modal.Body>
            {/* <p>Let us know how we can make things better for you.</p> */}
            {/* <Typography component="legend">
              {" "}
              How would you rate the new experience ? *
            </Typography> */}
            {/* <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            /> */}
    
            <div>
              <label htmlFor="">How can we improve your experience ? *</label>
              <textarea
                className="form-control"
                name=""
                value={value}
                onChange={(e)=>setValue(e.target.value)}
                id=""
                cols="20"
                rows="5"
              ></textarea>
            </div>
            {/* <div className="col-md-6 mt-2">
              <label htmlFor="answer">How important is this to you ?</label>
              <select
                class="form-select"
                aria-label="Default select example"
                id="answer"
              >
                <option selected>Select Your Answer</option>
                <option value="1">Answer One</option>
                <option value="2">Answer Two</option>
                <option value="3">Answer Three</option>
              </select>
            </div> */}
    
            {/* <div className="mt-2">
              <label htmlFor="">Include an optional attachment</label>
              <div>
                <label className="btn btn_bg" htmlFor="file_upload">
                  Upload File
                </label>
                <input hidden type="file" name="" id="file_upload" />
              </div>
            </div> */}
    
            {/* <div className="col-md-6 mt-2">
              <label htmlFor="answer">How important is this to you ?</label>
              <select
                class="form-select"
                aria-label="Default select example"
                id="answer"
              >
                <option selected>Select Your Answer</option>
                <option value="1">Answer One</option>
                <option value="2">Answer Two</option>
                <option value="3">Answer Three</option>
              </select>
            </div> */}
          </Modal.Body>
          <Modal.Footer>
            <Button type='submit'>Submit</Button>
            <Button className="btn btn-outline-primary" onClick={props.onHide}>
              Cancel
            </Button>
          </Modal.Footer>
          </form>
        </Modal>
      );
  
}

export default FeedBack

