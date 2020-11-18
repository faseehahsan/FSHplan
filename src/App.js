import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import signIn from './components/auth/signIn';
import signUp from './components/auth/signUp';
import createproject from './components/projects/createProject';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/signin' component={signIn} />
            <Route exact path='/signup' component={signUp} />
            <Route exact path='/create' component={createproject} />
            <Route exact path='/project/:id' component={ProjectDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;