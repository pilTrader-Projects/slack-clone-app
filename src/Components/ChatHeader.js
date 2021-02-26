import React from 'react'
import styled from 'styled-components'

import InfoIcon from '@material-ui/icons/Info';

function ChatHeader() {
    return (
        <Container>
            <TopPortion>
                <ChannelName>
                    #Channel Name
                </ChannelName>
                <ChannelDetailsInfo>
                    <ChannelDetailsLabel>
                        Channel Details
                    </ChannelDetailsLabel>
                    <InfoIcon />
                </ChannelDetailsInfo>
            </TopPortion>
            <ChannelDescription>
                Companywide announcements and work related concerns.
            </ChannelDescription>
       </Container>
    )
}

export default ChatHeader

const Container = styled.div`
    background: #071942;
    padding-left: 20px;
    color : white;
    border: 1px solid gray;
    border-radius: 5px;

   
`

const TopPortion = styled.div`
    height: 28px;
    display: flex;
    align-items: center;
`
const ChannelName = styled.div`
    font-weight: 700;
    // padding-bottom: 4px;
`

const ChannelDetailsInfo = styled.div`
    position: absolute;
    display: flex;
    padding-right: 14px;
    align-items: center;
    right: 0;
    :hover{
        cursor: pointer;
        color: yellow;
    }
    // {
    //     infoIcon:hover{
    //         cursor: pointer;
    //     }
    // }
`
const ChannelDetailsLabel = styled.div`
    font-weight: 200;
    font-size: 14px;
    padding-right: 8px;

    `
const ChannelDescription = styled.div`
   
    color: #606060;
    padding-bottom: 8px;  
`