import React from "react";
import CenterViewLoggedOut from "../components/CenterViewLoggedOut";
import CenterView from "../components/CenterViewLoggedOut";
import LeftSide from '../components/LeftSide';
import Login from '../pages/Login';
import Auth from '../utils/auth';

const Home = () => {

 if (Auth.loggedIn()) {
    return (
        <body className="display-flex justify-content-center align-items-center">
            <CenterView />
        </body>
    )
    } else {
        return (
            <body className="d-flex justify-content-center">
                <CenterViewLoggedOut/>
            </body>
        )
    }   
}

export default Home;