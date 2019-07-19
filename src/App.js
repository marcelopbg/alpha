import React from 'react';
import UserRegister from './user/UserRegister';

const appStyle = {
  width: 800,
  height: 800,
  padding: '350px',
}

function App() {
  return (
    <div style={appStyle}  className="App">
      <UserRegister />
    </div>
  );
}


export default App;
