import React from 'react'
import styled from 'styled-components'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'

function Chat() {
    return (
        <Container>
            <ChatHeader/>    
            <MessageContainer>
                Chat Section (Chat.js)
            </MessageContainer>
            <ChatInput />
            
        </Container>
    )
}

export default Chat

const Container = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: 64px auto min-content;
    // ChatHeader{
    //     padding-left: 20px;
    // } 
`

const MessageContainer = styled.div`
    // background: gray;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    
    height: auto;
    color: white;
`