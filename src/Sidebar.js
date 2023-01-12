import React from 'react'
import './Sidebar.css'
import ChatCard from './ChatCard';
import { Avatar } from '@material-ui/core'
import GroupIcon from '@material-ui/icons/Group';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import AddIcon from '@material-ui/icons/Add';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import { grey } from '@material-ui/core/colors';
import contactList from './Contacts.json'
import profilePicture from './me.jpg'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sticky-parts">
        {/* Profile picture with buttons */}
        <div className="header">
          <div className="header-left">
            <Avatar src={profilePicture} style={{ cursor: "pointer" }} />
          </div>
          <div className="header-right">
            <GroupIcon style={{ color: "grey", cursor: "pointer" }}/>
            <DonutLargeIcon style={{ color: "grey", cursor: "pointer" }}/>
            <AddIcon style={{ color: "grey", cursor: "pointer" }}/>
            <MoreHorizIcon style={{ color: "grey", cursor: "pointer" }}/>
          </div>
        </div>
        {/* Search for contacts */}
        <div className="search-bar">
          <div className="search-box">
            <SearchIcon style={{ color: "grey" }}/>
            <input type="text" placeholder="Search or start new chat"></input>
          </div>
          <FilterListIcon style={{ color: "grey", padding: "20px 10px" }}/>
        </div>
      </div>
      {/* Contact cards with last message */}
      <div className="chatlist">
        {contactList.map((userData)=>(
        <ChatCard userData={userData}/>
        ))}
      </div>
    </div>
  )
}

export default Sidebar