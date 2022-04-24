import React from 'react'
import './Header.css';
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useStateValue } from "./StateProvider";
function Header() {
    const[{user},dispatch] = useStateValue();
  return <div className='header'>
      <div className='header-left'>
      <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className='header-right'>
        <Avatar alt={user?.display_name} src={user?.images[0].url}></Avatar>      
        <h4>{user?.display_name}</h4>
        </div>
  </div>
  
}

export default Header