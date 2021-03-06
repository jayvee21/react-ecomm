import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Landing from './components/Landing';
import Header from './components/templates/Header';
import Footer from './components/templates/Footer';
class App extends Component{

  render() {
    return (
      <Router>
        <Header />

        <Switch>
          <Route exact path = "/" component={Landing} />
        </Switch>

        <Footer />
      </Router>
    );
  }
}

export default App;
