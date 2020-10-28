import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './components/Header';
import Home from './components/Home';
import User from './components/User';

import './App.css'
import Stream from './components/Stream';

function App() {
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 70){
        setBlackHeader(true)            
      }else{
        setBlackHeader(false) 
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  },[])

  return (
    <div className="page">
      <Router>
        <Header black={blackHeader} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user" exact component={User} />
          <Route path={`/stream/:type/:id`} exact component={Stream} />
        </Switch>
      </Router>
      
      <footer>
        Droits à l'image à Netflix<br/>
        Fait avec <span role="img" aria-label="coeur">❤</span> par Christophe François Correia<br/>
        Données récupérées sur le site <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">Themoviedb.org</a>
      </footer>
      
    </div>
  );
}

export default App;
