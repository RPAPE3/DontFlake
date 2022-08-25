import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Login from '../../pages/Login';
import Signup from "../../pages/Signup";

// TODO: Can use this as left side

function LeftSide() {
  return (
    <div className="container">
      <div className="card-deck mb-3 text-center">
        <div className="card mb-4 box-shadow">
        </div>
        <div className="card mb-4 box-shadow">
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
