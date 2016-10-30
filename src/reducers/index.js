import {action, extendObservable} from 'mobx';

let _nextId = 0
const nextId = () => {
  return _nextId++;
};

export class Todo {
    constructor(text){
      this.id = nextId();
      extendObservable(this, {
        text: text,
        done: false
      });
      return this;
    }
}

export class TodoStore {
  constructor(text){
    extendObservable(this, {
      todos: [],
      add: action(text => {
          const newTodo = new Todo(text);
          this.todos.push(newTodo);
          return newTodo;
        }),
      remove: action(todo => {
          const index = this.todos.indexOf(todo);
          if(index > -1){
              this.todos.splice(index, 1);
          }
        }),
      complete: action( todo => {
        const index = this.todos.indexOf(todo);
        this.todos[index].done = true;
      })
    });
    return this;
  }
}

export default new TodoStore();
