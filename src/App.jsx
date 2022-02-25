import {Switch} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login'
import Register from './Pages/register/Regster';
import Queue from './Pages/users/User';


import Public from './Routes/Public';
import Private from './Routes/Private';

function App() {

 

  return (
    <>

    <Switch>
      <Public path="/registratsiya" component={Register} exact/>
    <Public path="/login" component={Login} exact/>
      <Public path="/" component={Home} exact/>
        <Private path="/ocherd" component={Queue} exact/>
    </Switch>
    
   </>
  );
}

export default App;
