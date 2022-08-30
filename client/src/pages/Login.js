import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";


function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
<<<<<<< HEAD
    <div className="container my-1" style={{color: 'black', border: '5px solid black', boxShadow: '5px 5px grey'}}>
      <div style={{color: 'black'}}>
      <h2 style={{marginRight: '145px', marginBottom: '30px', fontStyle: 'italic'}}>Login</h2>
=======
    <div
      className="container my-1"
      style={{
        color: "black",
        border: "5px solid black",
        boxShadow: "5px 5px grey",
      }}
    >
      <div style={{ color: "black" }}>
        <h2
          style={{
            marginRight: "145px",
            marginBottom: "30px",
            fontStyle: "italic",
          }}
        >
          Login
        </h2>
>>>>>>> 355f3a0c2dfc3cb921f76d683557a0497c72e063
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
          <input
<<<<<<< HEAD
          style={{boxShadow: '5px 5px grey'}}
=======
            style={{ boxShadow: "5px 5px grey" }}
>>>>>>> 355f3a0c2dfc3cb921f76d683557a0497c72e063
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
<<<<<<< HEAD
          style={{boxShadow: '5px 5px grey'}}
=======
            style={{ boxShadow: "5px 5px grey" }}
>>>>>>> 355f3a0c2dfc3cb921f76d683557a0497c72e063
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div>
<<<<<<< HEAD
          <button type="submit" className="glow-on-hover" style={{backgroundColor: '#023e7d', borderRadius: '10px', marginTop: '20px', marginLeft: '30px'}}>Submit</button>
=======
          <button
            type="submit"
            className="glow-on-hover"
            style={{
              backgroundColor: "#023e7d",
              borderRadius: "10px",
              marginTop: "20px",
              marginLeft: "30px",
            }}
          >
            Submit
          </button>
>>>>>>> 355f3a0c2dfc3cb921f76d683557a0497c72e063
        </div>
      </form>
    </div>
  );
}

export default Login;
