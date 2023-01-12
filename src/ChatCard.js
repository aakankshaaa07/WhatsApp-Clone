import React from 'react'
import './ChatCard.css'
import { Avatar } from '@material-ui/core'
import { contactList } from './Contacts'

const ChatCard = (props) => {
  const { userData } = props;
  return (
    <div className="chatcard">
      <Avatar src={userData.profilePic}/>
      <div className="chat-info">
        <div className="info-top">
          <p className="name">{userData.name}</p>
          <p className="time">{userData.timeStamp}</p>
        </div>
        <p className="last-message">{userData.lastText}</p>
      </div>
    </div>
  )
}

export default ChatCard