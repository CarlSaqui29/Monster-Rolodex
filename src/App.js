import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
          return {monsters: users};
        }, () => {
          console.log(this.state);
        }
      ))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  }

  render () {
    // Destructuring - removing the use of 'this' for shorter code and for easy code reading
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });


    return (
      <div className="App">
        {
          <input
            className='search-box' 
            type='search'
            placeholder='Search monster' 
            onChange={onSearchChange} />
        }
        {filterMonsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
