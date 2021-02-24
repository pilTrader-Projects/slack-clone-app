import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import { sidebarItems } from '../Data/SidebarData'
import {sidebarChannel} from  '../Data/SidebarData'
function Sidebar() {
    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    #5Day ReactJSChallenge
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon/>
                </NewMessage>
            </WorkspaceContainer>
            {/* ----------------------------------------------------- */}
            <MainChannels>
                {
                    sidebarItems.map(item => (
                        <MainchannelItem>
                            {item.icon}
                            {item.text}        
                        </MainchannelItem>))
                }
            </MainChannels>
            {/* ------------------------------------------------------- */}
            <UserChannelContainer>
                <NewChannelContainer>
                    <Name>
                        User's Channel
                    </Name>
                    <AddNewChannelIcon>
                        <AddIcon/>
                    </AddNewChannelIcon>

                </NewChannelContainer>
                <ChannelsLists>
                    {
                        sidebarChannel.map(item => (
                            <Channel>
                                {item.ChannelName}        
                            </Channel>))
                    }
                </ChannelsLists>
            </UserChannelContainer>

        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    // background: #3f0e40;
    background: #071942;  //Dark Mode
    color: white;
`
const WorkspaceContainer = styled.div`
    color: white;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    padding-right: 19px;
    justify-content: space-between;
`
const Name = styled.div`  `
const NewMessage = styled.div`
    width: 24px;
    height: 24px;
    background: white;
    color: #3F0e40;
    fill: 3F0e40;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    mrgin-right: 20px;
    cursor: pointer;
`
const MainChannels = styled.div`
 
`
const MainchannelItem = styled.div`
    color: rgb(188, 171, 188);
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover {
        background: blue;
        color: yellow;
    }
`
const UserChannelContainer = styled.div`
`
const NewChannelContainer = styled.div`
    color: rgb(188, 171, 188);
    height: 18px;
    align-items: center;
    justify-content: space-between;
    margin-top: 18px;
    margin-bottom: 15px;
    padding-left: 19px;
    padding-right: 19px;
    display: flex;    
`
const AddNewChannelIcon = styled.div`
    width: 24px;
    height: 24px;
    cursor: pointer;
`
const ChannelsLists = styled.div`
    color: rgb(188, 171, 188);
    display: grid;
    cursor: pointer;
`
const Channel = styled.div`
    color: rgb(188, 171, 188);
    display: grid;
    // grid-template-columns: 15% auto;
    height: 28px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover {
        background: blue;
        color: yellow;
    }

`