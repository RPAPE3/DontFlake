import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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
      <h2 style={{marginRight: '110px', marginBottom: '30px', fontStyle: 'italic'}}>Signup</h2>
=======
    <div
      className="container my-1"
      style={{
        color: "black",
        border: "5px solid black",
        boxShadow: "5px 5px grey",
      }}
    >
      <h2
        style={{
          marginRight: "110px",
          marginBottom: "30px",
          fontStyle: "italic",
        }}
      >
        Signup
      </h2>
>>>>>>> 355f3a0c2dfc3cb921f76d683557a0497c72e063
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="firstName">First Name:</label>
          <input
<<<<<<< HEAD
          style={{boxShadow: '5px 5px grey'}}
=======
            style={{ boxShadow: "5px 5px grey" }}
>>>>>>> 355f3a0c2dfc3cb921f76d683557a0497c72e063
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName">Last Name:</label>
          <input
<<<<<<< HEAD
          style={{boxShadow: '5px 5px grey'}}
=======
            style={{ boxShadow: "5px 5px grey" }}
>>>>>>> 355f3a0c2dfc3cb921f76d683557a0497c72e063
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="username">Username:</label>
          <input
<<<<<<< HEAD
          style={{boxShadow: '5px 5px grey'}}
=======
            style={{ boxShadow: "5px 5px grey" }}
>>>>>>> 355f3a0c2dfc3cb921f76d683557a0497c72e063
            placeholder="username"
            name="username"
            type="username"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
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

export default Signup;
