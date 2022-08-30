import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import logo from "../../assets/img/logo.png"

import { QUERY_USER_DATA } from '../../utils/queries';

import Auth from '../../utils/auth';

const Profile = () => {

  const profile = Auth.getProfile()
  const { loading, data } = useQuery(QUERY_USER_DATA, {
    variables: { email: profile.data.email }
  })

  const user = data?.me || data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.email) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <div style={{textAlign: 'center'}}>
        <Image style={{width: '12vh', marginBottom: '1vh', marginTop: '1vh'}} fluid="true" src={logo}/>
        <Button style={{ width: '20vh', borderStyle: 'solid', marginTop: '2vh', borderColor:'black', backgroundColor: "#a64dff", boxShadow: '5px 5px grey', marginBottom: '15px', color: 'white' }} variant="warning">Full Profile</Button>{' '}
      </div>
      <div style={{borderWidth: '5px', borderStyle: 'solid', borderColor:'white', marginRight: '10px'}}>
        <h1 style={{textAlign: 'center'}}> {user.username} </h1>
        <ul style={{listStyleType: 'none'}}>
          <li style={{color: 'white'}}>Friends: { user.connections.length} </li>
          <li style={{color: 'white'}}>Connections: </li>
          <li style={{color: 'white'}}>Events: {user.events.length} </li>
          <li style={{color: 'white'}}>Flake Rating: </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
