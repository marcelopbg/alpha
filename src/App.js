import React from 'react';
import UserRegister from './user/UserRegister';
import Navbar from './navbar';
import { BrowserRouter as Router } from 'react-router-dom';

const appStyle = {
  width: 800,
  height: 800,
  padding: '350px',
}

function App() {
  return (
    <Router>
      <Navbar>
      <div style={appStyle}  className="App">
        <UserRegister to="/register"/>
        </div>
      </Navbar>
    </Router>
  );
}


export default App;
