import React from 'react'
import './Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SidebarOption from './SidebarOption';
import { useStateValue } from './StateProvider';
function Sidebar() {
  const [{playlists},dispatch]=useStateValue();
  console.log(playlists);
  return (
    <div className='sidebar'>
     
      <img className='sidebar-logo' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""></img>
      
      <SidebarOption Icon={HomeIcon} title="Home"></SidebarOption>
      <SidebarOption Icon={SearchIcon} title="Search"></SidebarOption>
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library"></SidebarOption>
    <br />
    <strong className='sidebar-title'>PLAYLIST</strong>
  
    <hr />
    {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}

    </div>
  )
}

export default Sidebar