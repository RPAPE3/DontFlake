import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Friends from './pages/Friends';
import NoMatch from './pages/NoMatch';
import FullProfile from './pages/FullProfile'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
            {/* <Nav /> */}
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/friends" 
                element={<Friends />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route
                path="/fullProfile"
                element={<FullProfile />}
              />
              <Route 
                path="*" 
                element={<NoMatch />} 
              />
            </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
