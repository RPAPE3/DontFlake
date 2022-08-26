import React from "react";
import { Link } from "react-router-dom";
import UserProfile from "../components/UserProfile";
import UserFeed from "../components/UserFeed";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Auth from "../utils/auth";

const Home = () => {
  return (
    <Container fluid="true">
      <Row className="row justify-content-between">
        <Col
          sm={2}
          style={{
            background: "#e0c2f2",
            minHeight: "90vh",
            marginLeft: "30px",
          }}
        >
          Test This sidebar out
        </Col>
        {Auth.loggedIn() ? (
          <>
            <Col
              sm={3}
              style={{ background: "#6F3096" }}
              className="d-flex flex-grow-1"
            >
              <UserFeed />
            </Col>
            <Col sm={2} style={{ background: "#e0c2f2", marginRight: "50px" }}>
              <UserProfile />
            </Col>
          </>
        ) : (
          <Col
            sm={8}
            style={{ background: "purple", marginTop: 25 }}
            className="text-center d-flex justify-content-center"
          >
            <div style={{ marginTop: "15%" }}>
              {" "}
              <Login />{" "}
            </div>
            <br />
            <div style={{ marginTop: "15%" }}>
              {" "}
              <Signup />{" "}
            </div>
          </Col>
        )}
        <footer className="footer">
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
