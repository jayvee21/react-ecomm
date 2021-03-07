import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Landing from './components/Landing';
import ProductList from './components/products/List';
import Header from './components/templates/Header';
import Footer from './components/templates/Footer';


class App extends Component{

  render() {
    return (
      <Router>
        <Header />
        <div className="container">
          <Switch>
            
              <Route exact path = "/react-ecomm/" component={Landing} />
              <Route path = "/react-ecomm/discover" component={ProductList} />
          
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
