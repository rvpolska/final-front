import React from 'react';
import Logout from './Logout';
import './App.css';
import Login from './Login';
import { useAuth0 } from '@auth0/auth0-react';
function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="app">
        <img alt='img'  src='https://64.media.tumblr.com/6b901a8095cd1e47d742c43c3496b9aa/ee413bdc604a4e32-ca/s500x750/38dd55f7fc9146aff6fafe055e3c5118a05d513f.gifv'/>
      </div>
    );
  }

  return (
    <div className='app'>
      <Logout/>
      <Login /> 
    </div>
  );
  
  

  
  
}

export default App;
