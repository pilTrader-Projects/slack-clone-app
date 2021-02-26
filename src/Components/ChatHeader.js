import React from 'react'
import styled from 'styled-components'

import InfoIcon from '@material-ui/icons/Info';

function ChatHeader() {
    return (
        <Container>
            <TopPortion>
                <ChannelName>
                    #CleverProgrammer
                </ChannelName>
                <ChannelDetailsInfo>
                    <ChannelDetailsLabel>
                        Channel Details
                    </ChannelDetailsLabel>
                    <InfoIcon />
                </ChannelDetailsInfo>
            </TopPortion>
            <ChannelDescription>
                The 5Day ReactJS Challenge - SLACK Clone Project
            </ChannelDescription>
       </Container>
    )
}

export default ChatHeader

const Container = styled.div`
    background: #071942;
    padding-left: 20px;
    color : white;
    border: 1px solid #030e29;
    border-radius: 5px;
`

const TopPortion = styled.div`
    height: 28px;
    display: flex;
    align-items: center;
`
const ChannelName = styled.div`
    font-weight: 700;
`

const ChannelDetailsInfo = styled.div`
    position: absolute;
    right: 0;
    display: flex;
    padding-right: 14px;
    align-items: center;
    :hover{
        cursor: pointer;
        color: yellow;
    } 
`
const ChannelDetailsLabel = styled.div`
    font-weight: 200;
    font-size: 14px;
    padding-right: 8px;

`
const ChannelDescription = styled.div`
    color: gray;
    padding-bottom: 8px;  
`