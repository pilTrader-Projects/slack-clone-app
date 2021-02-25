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
                    <InfoIcon />
                    <ChannelDetailsLabel>
                        Channel Details
                    </ChannelDetailsLabel>
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
    background: gray;
    color : white;
    padding-right: 19px;
    padding-left: 19px;
`

const TopPortion = styled.div`
    height: 28px;
    display: grid;
    align-items: space-between;
`
const ChannelName = styled.div`
    // font-size: 100%;
    // padding-bottom: 4px;
`

const ChannelDetailsInfo = styled.div`
    position: absolute;
    display: grid;
    padding-right: 16px;
    justify-items: center;
    right: 0;
    cursor: pointer;
`
const ChannelDetailsLabel = styled.div``
const ChannelDescription = styled.div`
    font-size: 90%;
    color: black;
    padding-bottom: 8px;  
`


