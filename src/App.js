import React from 'react';
import Sidebar from './components/sidebar/Sidebar.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/login.tsx';

const App = () => {
  return (
    <Sidebar>
      
    
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        {/* Otras rutas y componentes */}
      </Switch>
    </Router>
    </Sidebar>
  );
};

export default App;