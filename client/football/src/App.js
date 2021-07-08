import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom";
import Loading from './Components/Loading/Loading'
import Landing from './Components/Landing/Landing'
import Home  from '../src/Components/Home/Home'
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div>
   <Route path='/'><NavBar/></Route>
   <Route exact path='/'><Landing/></Route>
   <Route path='/home'><Home/></Route>
    </div>
  )
}

export default App;
