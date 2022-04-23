import React from 'react'
import './Footer.css';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid, Slider } from '@mui/material';
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
function Footer() {
  return (
    <div className='footer'>
      <div className="footer-left">
        <img className="footer-img" src="https://i.scdn.co/image/ab67616d0000b273d9bcf5565005950b353bc9cf" alt=""></img>
        <div className='footer-songInfo'>
          <h4>Smack That</h4>
          <p>Akon</p>
        </div>
      </div>
      <div className="footer-center">
        <ShuffleIcon className='footer-green' />
        <SkipPreviousIcon className='footer-icon' />
        <PlayCircleOutlineIcon fontSize='large' className='footer-icon' />
        <SkipNextIcon className='footer-icon' />
        <RepeatIcon className='footer-green' />
      </div>
      <div className="footer-right">
      <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer