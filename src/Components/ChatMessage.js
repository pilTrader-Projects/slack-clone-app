import React from 'react'
import styled from 'styled-components'


function ChatMessage() {
    return (
        <Container>
            <UserAvatar>
                <img src = "https://randomuser.me/api/portraits/women/64.jpg"/>
            </UserAvatar>
            <UserContainer>
                <FirstLine>
                    <UserName>
                        Debra Montgomery
                    </UserName>
                    <TimeStamp>
                        2/27/2020 11:13:55 PM
                    </TimeStamp>
                </FirstLine>
                <MsgText>
                    Hello guys!! Happy Coding #CleverProgrammer Team the quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog
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
    border: 4px solid transparent;
    border-radius: 10px;
    img{
        height: 100%;
    }
    :hover{
        cursor: pointer;
    }
    
`

const UserName = styled.div`
    padding-right: 10px;
    font-weight: 700;
    color: black;
    :hover{
        cursor: pointer;
        text-decoration: underline;
    }
`
const MsgText = styled.div`
    font-weight: 450;
    font-size: 14px;
    color: #13164f;
`

