// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Portfolio1 from './pages/Portfolio1';
import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/portfolio1" component={Portfolio1}/>
      </Switch>
    </>
  );
}

export default App;
