// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Portfolio1 from './pages/Portfolio1';
import Portfolio2 from './pages/Portfolio2';
import Contact from './pages/Contact';
import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/about_us" component={About} />
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/portfolio1" component={Portfolio1}/>
        <Route path="/portfolio2" component={Portfolio2}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
    </>
  );
}

export default App;
