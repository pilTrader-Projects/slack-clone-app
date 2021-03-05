import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import db from '../firebase'

function ChatMessage({chatUserAvatar, chatUserName, chatTimeStamp, chatReaction, chatMessage }) {

    return (    
        <Container>
            <UserAvatar>
                <img src = {chatUserAvatar}/>
            </UserAvatar>
            <UserContainer>
                <FirstLine>
                    <UserName>
                        {chatUserName}
                    </UserName>
                    <TimeStamp>
                        {new Date(chatTimeStamp.toDate()).toUTCString()}
                    </TimeStamp>
                </FirstLine>
                <MsgText>
                    {chatMessage}
                </MsgText>
            </UserContainer>
        </Container>
    )
}

export default ChatMessage

const TimeStamp = styled.div`
    font-weight: 700;
    font-size: 12px;
`
const FirstLine = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 6px;
    font-weight: 700;
    color: gray;    
`
const Container = styled.div`
    display: flex;
    align-items: top;
    border 1px solid #d0f7c3;
    border-radius: 6px;
    padding-left: 10px;
    padding-bottom: 10px;
    margin-bottom: 3px;
    :hover{
        background: #d0f7c3;
    }
`
const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: bottom;    
`
const UserAvatar = styled.div`
    height: 40px;
    width: 40px;
    border: 2px solid transparent;
    img{
        height: 100%;
        border-radius: 5px;
    }
    :hover{
        cursor: pointer;
    }
    
`

const UserName = styled.div`
    padding-right: 10px;
    padding-left: 5px;
    font-weight: 700;
    color: blue;
    :hover{
        cursor: pointer;
        text-decoration: underline;
    }
`
const MsgText = styled.div`
    padding-left: 5px;
    font-weight: 650;
    font-size: 14px;
    color: #13164f;
`