import React, {Component} from 'react';
import './App.css';
import Routes from './routes';

class App extends Component {
  
    render() { 
      return (
        <div className="App">
          <div>Sim 2</div>
          {Routes}
        </div>
      )
    }
  }
  
export default App; 
