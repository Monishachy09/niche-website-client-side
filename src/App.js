import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Contact from './Pages/Home/Contact/Contact';
import Services from './Pages/Home/Services/Services';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import SingleService from './Pages/SingleServices/SingleService';
import AuthProvider from './Pages/Contexts/AuthProvider';
import PrivateRoute from '../src/Pages/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>
     <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/home"><Home /></Route>
          <Route path="/services"><Services/></Route>
          <Route path="/contact"><Contact/></Route>
          <PrivateRoute path="/dashboard"><DashBoard/></PrivateRoute>
          <PrivateRoute path="/purchase/:Id"><SingleService/></PrivateRoute>
          <Route path="/login"><Login/></Route>
          <Route path="/signUp"><Signup/></Route>
          <Route path="*"> <NotFound/></Route>
        </Switch>
     </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
