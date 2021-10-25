// import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Portfolio1 from './pages/Portfolio1';
import Portfolio2 from './pages/Portfolio2';
import Contact from './pages/Contact';
import { Switch, Route, BrowserRouter } from "react-router-dom";
// import { useWeb3React }  from "@web3-react/core";



function App() {

  // const { active, account, library, connector, activate, deactivate } = useWeb3React()
  const [connected_status, connected_statusState] = useState(false);
  
 
  async function connect() {
      window.ethereum.enable();
     
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log(accounts,'sdfkhashdf');
      connected_statusState(true);
      document.getElementById('status_metamask').innerText = accounts[0];

  }



  return (
    <>
      <BrowserRouter>
        <Switch>
        <Route exact path='/'>
            <Home connected_status = {connected_status} connected_statusState = {connected_statusState} connect = {connect}/>
        </Route>
          {/* <Route exact path='/' component={Home} /> */}
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/portfolio1" component={Portfolio1}/>
          <Route path="/portfolio2" component={Portfolio2}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
