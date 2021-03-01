import React from 'react'
import styled from 'styled-components' 
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';


function Header({user, signOut}) {
    // console.log({props.user})
    return (
        <Container>
            <Main>
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder = "Search..." />
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />
            </Main>
            <UserContainer>
                <UserName>
                    {user.name}
                </UserName>
                <UserImage onClick = {()=>  signOut()} >
                    <img src={user.photo} />                
                </UserImage>

            </UserContainer>
       </Container>
    )
   
}

export default Header
const Container = styled.div`
    // background: #350d36;
    background: #030e29;  //Dark Mode
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

const Main = styled.div`
    display: flex;
    padding-left: 16px;
    padding-right: 16px;
    margin-right: 16px;
    margin-left: 16px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    min-width: 200px;
    margin-left: 16px;
    margin-right: 16px;
`
const Search = styled.div`
    box-shadow: inset 0 0 0 1px rgb(104 74 104);
    width: 100%;
    border-radius: 6px;
    display: flex;
    align-items: center;
    // Format the search input bar
    input {
            background-color: transparent;
            color: white;
            border: none;
            padding-left: 8px;
            padding-right 8px;
            padding-top 4px;
            padding-bottom 4px;
        }
    input:focus{
            outline: none;
        }
`
const UserContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right:  16px;
    // padding-left: 16px;
    position: absolute;
    right: 0;
`

const UserName = styled.div`
    padding-right: 4px;
    padding-left: 4px;
`

const UserImage = styled.div`
    width: 28px;
    height: 28px;
    img {
        width: 100%;
        border: 1px solid white;
        border-radius: 25%;
        cursor: pointer;
    }
`