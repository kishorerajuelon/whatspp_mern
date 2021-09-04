import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar,IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert'
import {SearchOutlined} from '@material-ui/icons';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className='sidebar'>
        
         <div className='sidebar__header'>
             <Avatar src='https://i1.sndcdn.com/avatars-WkE5GMA4emXpyxH1-R0GQ6A-t500x500.jpg'/>
             <div className='sidebar__headerRight'>
                 <IconButton>
                 <DonutLargeIcon/>
                 </IconButton>
                 <IconButton>
                <ChatIcon/>
                 </IconButton>
                 <IconButton>
                 <MoreVertIcon/>
                 </IconButton>
             </div>
             </div>  
             <div className='sidebar__search'>
                 <div className='sidebar__searchContainer'>
                 <SearchOutlined/>
                 <input type='text' placeholder="Search or start new chat"/>
                 
        </div>
        </div>
        <div className='sidebar__chats'>
                    <SidebarChat/>
                    <SidebarChat/> 
                    <SidebarChat/>
                 </div>
        
        </div>
    );
}

export default Sidebar
