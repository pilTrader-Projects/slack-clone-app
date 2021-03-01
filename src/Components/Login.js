import React from 'react'
import styled from 'styled-components'
import {auth, provider} from '../firebase'



function Login(props) {

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {

            const newUser = {
                name: result.user.displayName,
                photo: result.user.photoURL,
            }
            localStorage.setItem('user', JSON.stringify(newUser))
            props.setUser(newUser);
            // console.log(newUser);
        })
            .catch((error) => {
                alert(error.message)
            })
    }
    
    return (
        <Container>
            <Content>
                <SlackImg src = "https://cdn.icon-icons.com/icons2/2201/PNG/512/slack_logo_icon_134008.png" /> 
                You are not signed-in.
                <h3> Sign-in </h3>
                <SignInButton onClick = {()=> signIn()}>
                    Sign-in with Google
                </SignInButton>
            </Content>
            <Footnote>
                This is a Slack Clone Application built using ReactJS. The #5Day-ReactJS-Challenge!
            </Footnote>
        </Container>
    )
}

export default Login

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Content = styled.div`
    background: rgb(32,144,30);
    background: linear-gradient(58deg, rgba(32,144,30,1) 12%, rgba(52,150,95,1) 50%, rgba(0,212,255,1) 89%);
    padding: 60px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 3px white, 0 1px 4px gray;    
`

const SlackImg = styled.img`
    height : 100px;

`
const SignInButton = styled.button`
    margin-top: 10px;
    height: 40px;
    background-color: #0a8d58;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
    :focus{
        outline: none;
        background: #20901e;
    }
    :hover{
        background: #20901e;
        color: black;
    }
`
const Footnote = styled.div`
    padding-bottom: 10px;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;;
    font-size: 12px;
    color: gray;
` 