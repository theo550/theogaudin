import React from "react";
import Navbar from './Navigation/Navbar';
import Projects from './Projects/Projects';
import Project from './Project/Project'
import {Contact} from './Contact/Contact';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class App extends React.Component{

  render(){
    return <section>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/' exact component={Projects}/>
          <Route path='/contact' exact component={Contact}/>
          <Route path='/:id' exact component={Project}/>
          <Route path='/' component={() => <div>Bonjour</div>}/>
        </Switch>
      </Router>
    </section>
  }
}
export default App;