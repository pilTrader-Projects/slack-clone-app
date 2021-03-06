import React, { useState } from 'react'
import styled from 'styled-components'
import FlashOnIcon from '@material-ui/icons/FlashOn';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import StrikethroughSIcon from '@material-ui/icons/StrikethroughS';
import CodeIcon from '@material-ui/icons/Code';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import SendIcon from '@material-ui/icons/Send';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import AttachFileIcon from '@material-ui/icons/AttachFile';


function ChatInput( {sendMessage } ) {

    const [inputContent, setinputContent] = useState('');
    const send = (e) => {
        e.preventDefault();
        if(!inputContent) return;
        sendMessage(inputContent) ; //get the message being tracked
        setinputContent("");
        
    }
    // console.log(input);
    return (
        <Container>
            <ChatInputPrompt>
                <form>
                    <input 
                        onChange = {(e)=> setinputContent(e.target.value)}
                        value = { inputContent }
                        type = "text" 
                        placeholder = "Type your Message here..."/>
                </form>
            </ChatInputPrompt>
            <ChatInputIcons>
                <FormatGrpIcons>
                    <FlashOnIcon />
                    <FormatBoldIcon />
                    <FormatItalicIcon />
                    <StrikethroughSIcon />
                    <CodeIcon />
                    <FormatListNumberedIcon />
                    <FormatListBulletedIcon />
                    <MoreHorizIcon />   
                </FormatGrpIcons>
                <EmojGrpIcons>  
                    <AlternateEmailIcon />
                    <EmojiEmotionsIcon />
                    <AttachFileIcon />
                    <SendButton 
                        type = "submit"
                        onClick = { send }>
                        <SendIcon />
                    </SendButton>
                </EmojGrpIcons>
            </ChatInputIcons>
        </Container>
    )
}

export default ChatInput

const ChatInputPrompt = styled.div`
    padding-left: 10px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    background: white;
    border-radius: 6px;
    form {
        display: flex;
        height: 42px;
        input{
            flex: 1;
            border: none;
            :focus {
                outline: none;
            }
        }
    }
`
const SendButton = styled.button`
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 20px;
    margin-right: 4px;
    margin-left: 4px;
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    // cursor: pointer;
    :hover{
        background: green;
        color: white;
        border-radius: 4px;
    }
    :onSubmit{
        {send}
    }
    .MuiSvgIcon-root{
        width: 20px;        
    }
`
const ChatInputIcons = styled.div`
    padding-top: 10px;
    display: flex;
    align-items: center;
    margin-left: 4px;
    margin-right: 4px;
    display: flex;
    align-items: center;
    cursor: pointer;
    
    FlashOnIcon:hover{
            background: green;
            color: white;
            border-radius: 4px;
        }
    }
    <FormatBoldIcon />
    <FormatItalicIcon />
    <StrikethroughSIcon />
    <CodeIcon />
    <FormatListNumberedIcon />
    <FormatListBulletedIcon />
    <MoreHorizIcon />   
`
const FormatGrpIcons = styled.div`
    position: relative;
`
const EmojGrpIcons = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    right:0;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #d1d6d0;
    padding-bottom: 10px;
    border: 1px solid #030e29;
    border-radius: 6px;
    font-weight: 500;
    color: gray;
`
