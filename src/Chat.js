import { Avatar } from '@material-ui/core';
import React from 'react';
import './Chat.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import {IconButton}  from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { AttachFile, InsertEmoticon, SearchOutlined } from '@material-ui/icons';
import MicIcon from "@material-ui/icons/Mic";
function Chat() {
    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar/>
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at ....</p>
                </div>
                <div className="chat__headerRight">
                <IconButton>
                 <SearchOutlined/>
                 </IconButton>
                 <IconButton>
                <AttachFile/>
                 </IconButton>
                 <IconButton>
                 <MoreVertIcon/>
                 </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">Krish</span>
                    Message is displayed
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                    </p>
                    
                    <p className="chat__message chat__reciever">
                    <span className="chat__name">Krish</span>
                    How are you?
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                    </p>

            </div>
            <div className="chat__footer">
                <InsertEmoticon/>
            <form>
               <input placeholder="Type a message" type="text"/>
               <button type="submit">Send</button> 
            </form>
            <MicIcon/>
            </div>
        </div>
    )
}

export default Chat
