// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Portfolio1 from './pages/Portfolio1';
import Portfolio2 from './pages/Portfolio2';
import Contact from './pages/Contact';
import { Switch, Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
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
