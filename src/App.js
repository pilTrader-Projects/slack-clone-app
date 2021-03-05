// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Components/Header'
import Chat from './Components/Chat'
import Login from './Components/Login'
import Components from 'styled-components'
import styled from 'styled-components'
import Sidebar from './Components/Sidebar'
import db from './firebase'
import {auth, provider} from './firebase'


function App(){
  const [channels, setChannels] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  
  const getChannels = () => {
    db.collection('channels').onSnapshot
      ((snapshot) => {
        setChannels(snapshot.docs.map((doc) => {
            // console.log(doc.data());
            return {id: doc.id, name: doc.data().Name}
          })
        )
      })
  }
  
  const signOut = () => {
    auth.signOut().then(() => {
        localStorage.removeItem('user');
        setUser (null);
    })
  }
  // signOut();
  useEffect(() => {
    getChannels();
  }, [])
  // End of getChannels = ()

  // console.log(user.name);

    return (
      <div className="App">
        <Router>
          {
            !user ?
              <Login setUser={ setUser}/>
            :
            <Container>
              <Header signOut={signOut}
                      user={user} />
              <Main>
                <SidebarComponent>  
                  <Sidebar channels={channels} />
                </SidebarComponent>
                
                <Route path="/about">
                    About Us
                </Route>
                <Switch> {/* Router Section */}
                  <Route path="/chat/:channelId">
                    <Chat user = { user }/>
                  </Route>
                  <Route path='/'>
                    <NoChannelSelectedMsg>
                      You have not selected a Channel. Please select a channel.
                    </NoChannelSelectedMsg>
                  </Route>
                </Switch> {/* Router Section */}
              </Main>
            </Container>
          }
        </Router>
      </div>
    );
  }

export default App;

const NoChannelSelectedMsg = styled.div`
  color: white;
  font-weight: 100;
`
const SidebarComponent = styled.div`
  display: grid; 
  grid-template-rows: 92vh minmax(0, 1fr);
  overflow-y: scroll;
  border: 1px solid gray;
  border-radius: 5px;
  // border-radius: 6px;
  background: #030e29; 
  border: 1px solid gray;
    border-radius: 5px;;

`

const Container = styled.div`
  width: 100%; 
  background: #030e29;
  

`
const Main = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  border: 1px solid gray;

`  