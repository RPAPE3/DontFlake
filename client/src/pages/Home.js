import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

import UserProfile from "../components/UserProfile";
import UserFeed from "../components/UserFeed";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import logo from "../assets/img/logo.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import Button from "react-bootstrap/Button";
import { color } from "@mui/system";

const Home = () => {
  return (
    <Container fluid="true">
      <Row className="row justify-content-between">
        {Auth.loggedIn() ? (
          <>
            <Col
              sm={2}
              style={{
                background: "white",
                minHeight: "90vh",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              className="d-flex flex-grow-1"
            >
              <div>
                <div>
                  <Image
                    style={{
                      width: "13vh",
                      height: "300px",
                      marginLeft: "10%",
                      marginBottom: "1vh",
                      marginTop: "1vh",
                    }}
                    fluid="true"
                    src={logo}
                  />
                </div>
                <div style={{ marginTop: "10%", textAlign: "center" }}>
                  <div>
                    <Button
                      style={{
                        width: "20vh",
                        borderStyle: "solid",
                        marginTop: "2vh",
                        backgroundColor: "purple",
                        boxShadow: "5px 5px grey",
                      }}
                    >
                      Events
                    </Button>
                  </div>
                  <div>
                    <Button
                      style={{
                        width: "20vh",
                        borderStyle: "solid",
                        marginTop: "2vh",
                        backgroundColor: "purple",
                        boxShadow: "5px 5px grey",
                      }}
                    >
                      Friends
                    </Button>
                  </div>
                  <div>
                    <Button
                      style={{
                        width: "20vh",
                        borderStyle: "solid",
                        marginTop: "2vh",
                        backgroundColor: "purple",
                        boxShadow: "5px 5px grey",
                      }}
                    >
                      Groups
                    </Button>
                  </div>
                </div>
              </div>

              <div className=" mt-auto" style={{ marginBottom: "10%" }}>
                <button
                  type="button"
                  className="btn  mt-4"
                  style={{
                    width: "20vh",
                    borderStyle: "solid",
                    backgroundColor: "purple",
                    boxShadow: "5px 5px grey",
                  }}
                >
                  {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                  <a href="/" onClick={() => Auth.logout()}>
                    Logout
                  </a>
                </button>
              </div>
            </Col>

            <Col
              sm={8}
              style={{ background: "white" }}
              className="d-flex flex-grow-1"
            >
              <UserFeed />
            </Col>

            <Col
              sm={2}
              style={{ background: "white" }}
              className="d-flex flex-grow-1"
            >
              <UserProfile />
            </Col>
          </>
        ) : (
          <>
            <Col
              sm={2}
              style={{
                background: "white",
                minHeight: "90vh",
                marginLeft: "50px",
              }}
            >
              <div>
                <Image
                  style={{
                    width: "12vh",
                    marginLeft: "22%",
                    marginBottom: "1vh",
                    marginTop: "1vh",
                  }}
                  fluid="true"
                  src={logo}
                />
              </div>

              <div style={{ marginTop: "25%" }} className="text-center">
                <h1> Welcome to WYD!</h1>
                <br />
                <h6>
                  Whatever you’re looking to do this year, WYD can help. For
                  years, people have turned to WYD to meet people, make friends,
                  find support, and explore their interests. Thousands of events
                  are happening every day—join in on the fun!
                </h6>
              </div>
            </Col>

            <Col
              sm={9}
              style={{ background: "white" }}
              className="text-center d-flex justify-content-center"
            >
              <div style={{ marginTop: "10%" }}>
                {" "}
                <Login />{" "}
              </div>
              <br />
              <div style={{ marginTop: "10%" }}>
                {" "}
                <Signup />{" "}
              </div>
            </Col>
          </>
        )}
        <footer className="footer" style={{ backgroundColor: "#F5F3F4" }}>
          <div className="container">
            <div className="row">
              <div className="footer-col col">
                <h4>Team</h4>
                <ul>
                  <li>
                    <a href="https://github.com/BrandtDavidson">Brandt</a>
                  </li>
                  <li>
                    <a href="https://github.com/dvtipei">Denis</a>
                  </li>
                  <li>
                    <a href="https://github.com/matthewtlarson">Matthew</a>
                  </li>
                  <li>
                    <a href="https://github.com/maximus-cristian">Maximus</a>
                  </li>
                  <li>
                    <a href="https://github.com/RPAPE3">Robby</a>
                  </li>
                  <li>
                    <a href="https://github.com/ryrathb">Ryan</a>
                  </li>
                  <li>
                    <a href="https://github.com/sheinen22">Stephen</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col col">
                <h4>Learn More</h4>
                <ul>
                  <li>
                    <a href="#">Manifesto</a>
                  </li>
                  <li>
                    <a href="#">Works</a>
                  </li>
                  <li>
                    <a href="#">Stories</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col col">
                <h4>Meet Us</h4>
                <ul>
                  <li>
                    <a href="#">Studio</a>
                  </li>
                  <li>
                    <a href="#">Community</a>
                  </li>
                  <li>
                    <a href="#">Workshops</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col col">
                <h4>Contact Us</h4>
                <div className="social-links">
                  <a href="https://twitter.com/GroupWyd">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://github.com/RPAPE3/WYD">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.instagram.com/groupwyd/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Row>
    </Container>
  );
};

export default Home;
