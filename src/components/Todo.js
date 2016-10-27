import React from 'react';
import {observer} from 'mobx-react';

const Todo = observer(['store'],
  class Todo extends React.Component {

    render() {
      return (
        <p onClick={()=>this.props.store.remove(this.props.todo)}>
          <span>{this.props.todo.text}</span>
        </p>
      );
    }
  }
)

export default Todo;
