import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: [
        {
          name: 'Linda',
          age: 1
        },
        {
          name: 'Frank',
          age: 2
        },
        {
          name: 'Jacky',
          age: 3
        },
      ] 
    };
  }

  render () {
    return (
      <div className="App">
        {
          this.state.monster.map((monster) => {
            return (
              <div key={monster.age}>
                <h1>{monster.name}</h1>
                <p>{monster.age}</p>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
