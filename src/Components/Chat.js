import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import db from '../firebase'
import { useParams } from 'react-router-dom'
import firebase from 'firebase'

function Chat({user}) {

    let {channelId} = useParams();
    const [channel, setChannel] = useState();
    const [ChatMessages, setChatMessages] = useState([])

    const sendMessage = (text) =>{
        if(channelId) {
            let payload = {
                chatmessage: text,
                username: user.name,
                useravatar: user.photo,
                timestamp: firebase.firestore.Timestamp.now()
            }
            db.collection("channels").doc(channelId).collection('messages').add(payload);
            console.log(payload);
        }
    }
    
    const GetChatMessages = ()=> { 
        db.collection('channels')
        .doc(channelId)
        .collection("messages")
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) => {
           let ChatMessages = snapshot.docs.map((doc) => doc.data());
            setChatMessages(ChatMessages);
        })
    }
    const getChannelName = () => {
        db.collection('channels')
        .doc(channelId)
        .onSnapshot((snapshot) => {
            setChannel(snapshot.data());
        })
        return(channelId);
    }
    // console.log(channel);
    
    useEffect(()=> {
        getChannelName(channelId);
        GetChatMessages();
    }, [channelId])

    return (
        <ChatAreaContainer>
            <ChatHeader channel={channel} />    
            <ChatMessagesArea> 
                <MessageContainer>
                    {
                        ChatMessages.length > 0 &&
                        ChatMessages.map((data, index)=>(
                            <ChatMessage 
                                chatUserName            = {data.username}
                                chatUserAvatar          = {data.useravatar}
                                chatMessage             = {data.chatmessage}
                                chatTimeStamp           = {data.timestamp}
                                chatReaction            = {data.reaction}
                            />                        
                        ))
                    }
                </MessageContainer>
            </ChatMessagesArea>
            <ChatInput sendMessage = { sendMessage }/>
        </ChatAreaContainer>
    )
}

export default Chat

const ChatAreaContainer = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: 64px auto min-content;
`
const ChatMessagesArea = styled.div`
    height : 100%;
    display: grid;
    grid-template-rows: 64px minmax(0, 1fr);
    overflow-y: scroll;
    background: #d0f7c3;
    // background: #97d190;
    border: 1px solid #030e29;
    border-radius: 6px;
`

const MessageContainer = styled.span`
    // display: flex;
    // flex-direction: column;
    height: 100%;
    padding-left: 5px;
    padding-right: 10px;  
    // color: white;
   
`