import React, { Component } from 'react';
import './App.css';

// create artificial data that we will model realistically later
const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: 'Jake Rules',
    url: 'https://github.com/jifunks/',
    author: 'Jake Funke',
    num_comments: 20,
    points: 50,
    objectID: 2,
  }
]

// App extends from Component (inheritance)
// Components have useful methods like render() etc. Building block for a React app.

function isSearched(searchTerm) {
  return function(item) {
    // some condition which returns true or false
    return !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());

  }
}

class App extends Component {

  constructor(props) {
    super(props); // mandatory bc it calls constructor of extended Component class.

    this.state = { // initial state is list of items we created above
      list,
      searchTerm: '',
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }
  onSearchChange(event) {
    // define what happens on search change
    this.setState({ searchTerm: event.target.value });
  }
  onDismiss(id) {
    // will fill in with a way to remove the clicked item from list
    // will use built in array filter

    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="App">
        <form>
          <input
            type="text"
            onChange={this.onSearchChange}
          />
        </form>

        { this.state.list.filter(isSearched(this.state.searchTerm)).map(item =>
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span><button
                      onClick={() => this.onDismiss(item.objectID)}
                      type = "button"
                    >
                    Dismiss
                    </button>
              </span>
            </div>
          )}
      </div>
    );
  }
}

export default App;
