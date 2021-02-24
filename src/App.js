// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Components/Header'
import Chat from './Components/Chat'
import Login from './Components/Login'
import Components from 'styled-components'
import styled from 'styled-components'
import Sidebar from './Components/Sidebar'


function App()
  {
    return (
      <div className="App">
        <Router>
          <Container>
            <Header /> 
            <Main>
              <Sidebar />
              
              <Switch> {/* Router Section */}            
                <Route path="/room">
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
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows:38px auto;

`
const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`