import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import { sidebarItems } from '../Data/SidebarData'
import { sidebarChannel } from '../Data/SidebarData'
import { getChannels } from '../App'
import db from '../firebase'
import {useHistory} from 'react-router-dom'

function Sidebar(props) {
    const history = useHistory();

    const goToChannel = (id) => {
        if (id) {
            history.push(`/chat/${id}`)
        }
    }
    
    const addChannel = () => {
        const promptName = prompt("Type the name of the New Channel to add ");
        if (promptName) {
            db.collection('channels').add({
                Name: promptName
            })   
        }
    }

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
                        User's Channels
                    </Name>
                    <AddNewChannelIcon>
                        <AddIcon onClick = {addChannel} />
                    </AddNewChannelIcon>
                </NewChannelContainer>
                <ChannelsLists>
                    {
                        props.channels.map(item => (
                        <Channel onClick={() => goToChannel(item.id)}>
                            {item.name}
                        </Channel>))
                    }

                </ChannelsLists>
            </UserChannelContainer>

        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    // background: #3f0e40; //Original Mode
    background: #071942;  //Dark Mode
    color: white;
    border: 1px solid #030e29;
    border-radius: 5px;
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
const Name = styled.div` 
    border: 3px;
`
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
    :hover{
        background: #071942;
        color: yellow;
    }
`
const MainChannels = styled.div``
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
const UserChannelContainer = styled.div``
const NewChannelContainer = styled.div`
    color: rgb(188, 171, 188);
    height: 28px;
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
    :hover {
        // background: gray;
        color: yellow;
    }
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