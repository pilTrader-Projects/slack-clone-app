import React from 'react'
import styled from 'styled-components'


function ChatMessage() {
    return (
        <Container>
            <UserAvatar>
                <img src = "https://randomuser.me/api/portraits/women/64.jpg"/>
            </UserAvatar>
            <UserContainer>
                <UserName>
                    Debra Montgomery
                </UserName>
                <MsgText>
                    Hello guys!! Happy Coding #CleverProgrammer Team the quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog
                </MsgText>
            </UserContainer>
        </Container>
    )
}

export default ChatMessage

const Container = styled.div`
    display: flex;
    align-items: top;
    // flex-direction: row;
    :hover{
        background: #d0f7c3;
        // border 2px solid gray;
        border-radius: 10px;
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
    border: 4px solid transparent;
    border-radius: 10px;
    img{
        height: 100%
    }
    :hover{
        cursor: pointer;
    }
    
`

const UserName = styled.div`
    font-weight: 700;
    color: black;
    :hover{
        cursor: pointer;
        text-decoration: underline;
    }
`
const MsgText = styled.div`
    font-weight: 400;
    font-size: 14px;
    color: #13164f;
`

