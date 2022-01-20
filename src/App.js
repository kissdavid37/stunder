import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
/*import TinderCards from './Components/TinderCards';*/
import Questions from './Components/Questions';
import SwipeButtons from './Components/SwipeButtons';
import Chats from './Components/Chats';
import ChatScreen from './Components/ChatScreen';
import Profile from './Components/Profile';
import Login from './Login'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div className="App">
          {/*header */}  
          
          <Router className='router'> 
            <Switch>
            <Route path="/">
              <Redirect to="/login"/>
              {/* Login */}
            <Login/>
              </Route>
            <Route path="/profile">
              {/* chat */}
            <Header/>
              {/*profil */}
              <Profile/>
              </Route>
            <Route path="/chats/:person">
              {/* chat */}
            <Header backButton="/chats" />
                 <ChatScreen/>
              </Route>
              <Route path="/chats">
            <Header backButton="/" />
                <Chats/>
                 {/* chatek listája */}
              </Route>
                <Route path="/question">
                <Redirect to="/question"/>
            <Header/>
                {/* kérdések listája */}
                <Questions/>
                {/* lenti gombok */}
                <SwipeButtons/>
              </Route>
            </Switch>
          </Router>
          
         
          
          
          
        
    </div>
  );
}

export default App;
