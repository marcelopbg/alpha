import React from 'react';
import UserRegister from './user/UserRegister';
import Navbar from './navbar';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Navbar>
        <UserRegister to="/register" />
      </Navbar>
    </Router>
  );
}


export default App;
