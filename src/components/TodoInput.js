import React from 'react';
import {observer} from 'mobx-react';

const TodoInput = observer(['store'],
  class TodoInput extends React.Component {
    constructor(props){
      super(props);
      this.onChangeText = this.onChangeText.bind(this);
      this.onClickButton = this.onClickButton.bind(this);
      this.state = {
        text: ''
      };
    }
    onClickButton(e){
      this.props.store.add(this.state.text);
      this.setState({text:''});
    }
    onChangeText(event) {
      this.setState({text: event.target.value});
    }
    render() {
      return (
        <div>
          <input type="text" placeholder="new todo.." value={this.state.text} onChange={(text) => this.onChangeText(text)}/>
           <button onClick={this.onClickButton}>New Todo</button>
        </div>
      );
    }
  }
);

export default TodoInput;
