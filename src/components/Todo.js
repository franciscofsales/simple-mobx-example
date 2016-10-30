import React from 'react';
import {observer} from 'mobx-react';

const Todo = observer(['store'],
  class Todo extends React.Component {

    render() {
      let strikeThrough = this.props.todo.done ? 'line-through' : null;
      return (
        <p style={{textDecoration:strikeThrough}} onClick={()=>this.props.store.complete(this.props.todo)}>
          {this.props.todo.text}
        </p>
      );
    }
  }
)

export default Todo;
