import React, { useState } from "react";
import "./images/LoginPage.css";
import { BsWallet2 } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.css";
import { Form, Button } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";

import Login_img from "../src/images/LoginPage.png";

const countryOptions = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  // Add more country options as needed
];

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (username && email && phone && password) {
      // Your form submission logic goes here
      // After successful form submission, redirect to the dashboard
      navigate("/dashboard");
    } else {
      alert("Please fill in all the fields.");
    }
  };

  return (
    <>
      <div className="container-fluid pt-5">
        <div className="row">
          <div className="col-lg-4 mb-5 offset-lg-1">
            <div className="form">
              <h4>
                {" "}
                <BsWallet2 /> Customer Portal
              </h4>
              <h4 className="title">
                Create <br /> <span> Customer Portal </span> Account
              </h4>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your full name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email address:</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Phone Number:</Form.Label>
                  <PhoneInput
                    country={"us"}
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Sign Up
                </Button>
              </Form>
            </div>
          </div>
          <div className="offset-lg-1 mb-5 col-lg-6">
            <div className="loginImg">
              <img className="" src={Login_img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
