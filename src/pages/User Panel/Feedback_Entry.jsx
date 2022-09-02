import { Button, TextareaAutosize } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FeedbackEntry = () => {

  let navigate_to = useNavigate();

  const handleFeeedbackEntry = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token')
    if (token) {
      const feedback_details = {
        feedback: e.target.feedback.value,
        validation_status: false
      };
      const url = "http://127.0.0.1:5000/api/add_user_feedback";
      const init_ob = {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Authentication-Token": token
        },
        body: JSON.stringify(feedback_details),
      };
      const res1 = await fetch(url, init_ob);
      if (res1 && res1.ok) {
        alert("Feedback Submitted. Your feedback will appear after approval.");
        navigate_to("/view-testimonial-status")
      }
      else {

      }
    }
  };

  const handleLogout = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token')
    if (token) {
      const url = "http://127.0.0.1:5000/logout"
      const init_ob = {
        method: "GET",
        mode: 'cors',
      }
      await fetch(url, init_ob)
      localStorage.removeItem('token')
      navigate_to("/testimonials");
      console.log("Succesfully Logged Out")
    }
    else {
      console.log("You are not logged in 01.")
    }
  }
  useEffect(() => async () => {
    const token = localStorage.getItem('token')
    if (token) {
      const url = "http://127.0.0.1:5000/api/user_validation";
      const init_ob = {
        method: "GET",
        mode: "cors",
        headers: {
          "Authentication-Token": token,
        },
      };
      const res1 = await fetch(url, init_ob);
      if (res1 && res1.ok) {
        res1.json().catch(() => {
          navigate_to("/")
          console.log("You are not logged in 07.")
          localStorage.removeItem('token')
        }
        )
      }
      else {
        navigate_to("/")
        console.log("You are not logged in 02.")
      }
    }
    else {
      navigate_to("/")
      console.log("You are not logged in05.")
    }
  });
  return (
    <>
      <form action="" className="form_wrapper" onSubmit={handleFeeedbackEntry}>
        <TextareaAutosize
          minRows={3}
          className="FormInput"
          name="feedback"
          aria-label="empty textarea"
          placeholder="Enter your message here"
          style={{ width: 225, height: 260, border: "2px solid rgb(162, 90, 162)" }}
          required
        />
        <Button type="submit" color="warning" variant="contained">Submit</Button>
      </form>
      <Button type="submit" color="warning" variant="contained" onClick={handleLogout}>Logout</Button>
    </>
  );
};

export default FeedbackEntry;
