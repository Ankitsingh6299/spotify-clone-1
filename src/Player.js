import React from 'react'
import Body from './Body';
import Footer from './Footer';
import './Player.css';
import Sidebar from './Sidebar';
function Player() {
  return (
    <div className='player'>
        <div className='player-body'>
        <Sidebar />
        <Body />
        <Footer/>
        </div>
    </div>
  )
}

export default Player;