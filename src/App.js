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


function App(){
  const [channels, setChannels] = useState([]);

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
  

  useEffect(() => {
    getChannels();
  }, [])
  // End of getChannels = ()

  // console.log(channels);

    return (
      <div className="App">
        <Router>
          <Container>
            <Header /> 
            <Main>
              <Sidebar channels = {channels} />
              
              <Switch> {/* Router Section */}            
                <Route path="/chat">
                  <Chat />
                </Route>

                <Route path="/about">
                  About Us
                </Route>

                <Route path="/">
                  <Login/>
                </Route>
              </Switch> {/* Router Section */}           
            </Main>
          </Container>
        </Router>
      </div>
    );
  }

export default App;

const Container = styled.div`
  background: #030e29;
  width: 100%; 
  height: 100vh;
  display: grid;
  grid-template-rows:38px auto;

`
const Main = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
`