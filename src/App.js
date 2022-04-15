import { useState, useEffect } from 'react';
import './App.css';
import Login from './components/login/login';
import {getTokenFromUrl} from './components/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
function App() {
  const [token,setToken] = useState(null);
const spotify = new SpotifyWebApi();
  useEffect(()=>{
    const hash=getTokenFromUrl();
    window.location.hash="";
    const _token=hash.access_token;
    if(_token){
      setToken(_token);
      spotify.setAccessToken(_token);

      spotify.getMe().then((user)=>{
        console.log("User: ",user); 
      })
      console.log("The token is:",_token);
    }
  })
  return (
    <div className="app">
      {token?(<h1>Logged in</h1>):(<Login />)}
    
    </div>
    
  );
}

export default App;