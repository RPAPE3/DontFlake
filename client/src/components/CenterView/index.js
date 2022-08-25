import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Login from '../../pages/Login';
import Signup from "../../pages/Signup";

// TODO: Can use this as left side

function CenterView() {
  return (
    <div className="mx-auto py-5 d-flex justify-content-center align-items-start">
    <card className="card-group">
      <div className="card">
          Test
      </div>
    </card>
    <card className='card-group'>
      <div class='card'>
        
      </div>
    </card>
    </div>
  );
}

export default CenterView;