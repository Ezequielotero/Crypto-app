import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom";
import Loading from './Components/Loading/Loading'
import Landing from './Components/Landing/Landing'
function App() {
  return (
    <div>
   {/* <Route path='/'><Loading/></Route> */}
   <Route path='/'><Landing/></Route>
    </div>
  )
}

export default App;
