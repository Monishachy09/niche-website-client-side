import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import NavBar from './Pages/Home/NavBar/NavBar';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Contact from './Pages/Home/Contact/Contact';
import Services from './Pages/Home/Services/Services';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/home"><Home /></Route>
          <Route path="/services"><Services/></Route>
          <Route path="/contact"><Contact/></Route>
          <Route path="/dashboard"><DashBoard/></Route>
          <Route path="/login"><Login/></Route>
          <Route path="/signUp"><Signup/></Route>
          <Route path="*"> <NotFound/></Route>
        </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
