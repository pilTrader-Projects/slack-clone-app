import React from 'react'
import styled from 'styled-components'
import ChatHeader from './ChatHeader'

function Chat() {
    return (
        <Container>
            <ChatHeaderContainer>
                <ChatHeader/>
            </ChatHeaderContainer>
            <ChatMain>
                Chat Section (Chat.js)
            </ChatMain>
        </Container>
    )
}

export default Chat

const Container = styled.div`
// display: grid;
    
`
const ChatHeaderContainer = styled.div`
    background: gray;
    display: grid;
    align-items: center;
`

const ChatMain = styled.div`
background: white;
padding-top: 28px;
color: black;
`

