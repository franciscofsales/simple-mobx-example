import React, { Component } from 'react';
import {observer} from 'mobx-react';
import '../styles/App.css';
import Todo from './Todo';
import TodoInput from './TodoInput';

const App = observer(['store'],
  class App extends Component {

    renderTodo(todo){
      return (<Todo key={todo.id} todo={todo} />);
    }

    render() {
      const { store } = this.props;

      return (
        <div className="App">
          <div className="App-header">
            <h2>Welcome to React & Mobx Todo App</h2>
          </div>
          <div className="App-intro">
            <TodoInput />
            {store.todos.map(this.renderTodo)}
          </div>
        </div>
      );
    }
  }
)

export default App;
