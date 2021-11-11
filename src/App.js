import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Explore from './pages/Explore/Explore';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path='/dashboard'>
            <Dashboard></Dashboard>
          </Route>
          <Route path='/explore'>
            <Explore></Explore>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
