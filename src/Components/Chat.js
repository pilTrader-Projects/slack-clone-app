import React from 'react'
import styled from 'styled-components'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'

function Chat() {
    return (
        <Container>
            <ChatHeader/>    
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
