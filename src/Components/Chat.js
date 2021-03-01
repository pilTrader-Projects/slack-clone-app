import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import db from '../firebase'
import { useParams } from 'react-router-dom'


function Chat() {

    let {channelId} = useParams();
    const [channel, setChannel] = useState();
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
    }, [channelId])
    

    return (
        <Container>
            <ChatHeader channel={channel} />    
            <MessageContainer>
                <ChatMessage />
            </MessageContainer>
            <ChatInput />
            
        </Container>
    )
}

export default Chat

const Container = styled.div`
    // height: 100%;
    display: grid;
    grid-template-rows: 64px auto min-content;
  

`
const MessageContainer = styled.div`
    background: #97d190;
    // padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;    
    height: auto;
    color: white;
    border: 1px solid #030e29;
    border-radius: 6px;
`
