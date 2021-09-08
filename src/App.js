// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About';
import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </>
  );
}

export default App;
