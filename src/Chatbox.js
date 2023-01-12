import React, { useState } from 'react'
import { Avatar } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SearchIcon from '@material-ui/icons/Search';
import VideocamIcon from '@material-ui/icons/VideocamOutlined';
import CallIcon from '@material-ui/icons/CallOutlined';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import SendIcon from '@material-ui/icons/Send';
import messagesList from './Message.json';
import contactList from './Contacts.json';
import profilePic from './yashwanth.png';
import "./Chatbox.css"


const Chatbox = () => {

  const [messages, setMessages] = useState(messagesList);

  // const [lastMessages, setlastMessages] = useState(contactList);

  const [addMessage, setAddMessage] = useState({
    messageSent: '',
  });

  const addMessageChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;

    setAddMessage(message => ({
      ...message,
      [name]: value
    }));
  };

  const addMessageSubmit = (event, contact) => {
    event.preventDefault();

    var today = new Date(),
    time = today.getHours() + ":" + today.getMinutes();
    const newMessage = {
      id: 18,
      sender: "Aakanksha Mantri",
      text: addMessage.messageSent,
      sentbyUser: true,
      time: time,
    };

    const newLastMessage = {
      id: 1,
      name: "Yashwanth Reddy",
      profilePic: "/assets/yashwanth.png",
      lastText: addMessage.messageSent,
      timeStamp: time
    }

    event.target.reset();

    // setlastMessages(lastMessages => [...lastMessages, newLastMessage]);
    // console.log(newLastMessage);
    setMessages(messages => [...messages, newMessage]);
    addMessage.messageSent = "";
  };

  return (
    <div className="chatbox-grid">
      <div className="chat-header">
        <div className="chat-header-left">
          <Avatar src={profilePic}/>
          <p class="chat-name">Yashwanth Reddy</p>
        </div>
        <div className="chat-header-right">
          <VideocamIcon style={{ color: "grey", cursor: "pointer", padding:"0px 5px" }}/>
          <CallIcon style={{ color: "grey", cursor: "pointer", padding:"0px 15px 0px 5px", borderRight:"1px solid #D3D3D3" }}/>
          <SearchIcon style={{ color: "grey", cursor: "pointer", padding:"0px 5px 0px 15px" }}/>
          <MoreHorizIcon style={{ color: "grey", cursor: "pointer", padding:"0px 5px" }}/>
        </div>
      </div>
      <div className="chat-body">
        {messages.map((messageData) => (
          <div key={messageData.id} className={messageData.sentbyUser ? 'message-received' : 'message-sent'}>
            <p className="message-name">{messageData.sender}</p>
            {messageData.text} <span className="message-time">{messageData.time}</span>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <InsertEmoticonOutlinedIcon style={{ color: "grey", cursor: "pointer" }}/>
        <AttachFileOutlinedIcon style={{ color: "grey", cursor: "pointer", padding: "0px 10px" }}/>
        <form contact={"Yashwanth Reddy"} onSubmit={addMessageSubmit}>
          <div className="message-input">
            <input type="text" placeholder="Type a message" name="messageSent" onChange={addMessageChange} required></input>
            <button type="submit" className="send-btn"><SendIcon/></button>
          </div>
        </form>
        <MicNoneOutlinedIcon style={{ color: "grey", cursor: "pointer", padding: "0px 0px 0px 10px" }}/>
      </div>
    </div>
  )
}

export default Chatbox