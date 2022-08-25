import React from "react";
import { Link } from 'react-router-dom';
import UserProfile from "../components/UserProfile"

import Auth from '../utils/auth';

const Home = () => {
    return (
        <div>
            <h1>This div stays across all pages regardless if you are logged in or not.</h1>

            {Auth.loggedIn() ? (
        <>
          <UserProfile />
        </>
      ) : (
        <p>
          You need to be logged in to view your profile. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
      <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <h4>Team</h4>
            <ul>
              <li><a href="https://github.com/BrandtDavidson">Brandt</a></li>
              <li><a href="https://github.com/dvtipei">Denis</a></li>
              <li><a href="https://github.com/matthewtlarson">Matthew</a></li>
              <li><a href="https://github.com/maximus-cristian">Maximus</a></li>
              <li><a href="https://github.com/RPAPE3">Robby</a></li>
              <li><a href="https://github.com/ryrathb">Ryan</a></li>
              <li><a href="https://github.com/sheinen22">Stephen</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Learn More</h4>
            <ul>
              <li><a href="#">Manifesto</a></li>
              <li><a href="#">Works</a></li>
              <li><a href="#">Stories</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Meet Us</h4>
            <ul>
              <li><a href="#">Studio</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Workshops</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact Us</h4>
            <div class="social-links">
              <a href="https://twitter.com/GroupWyd"
                ><i class="fab fa-twitter"></i
              ></a>
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/groupwyd/"
                ><i class="fab fa-instagram"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
      </footer>
    </div>
    )
}

export default Home;