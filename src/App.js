import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Routing from './Router';
import  useAuth  from './Contexts/authContext'
import Menu from './Components/Menu'
import useRightClickMenu from './hooks/useRightClickMenu';
function App() {

    const {authed} = useAuth()

    return (
    <div className="App">

            {authed && <Header />}
        <React.Suspense fallback={<h1>Loading comp...</h1>}>
          <Routing/>
        </React.Suspense>

    </div>
  );
 
}

export default App;


