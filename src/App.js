import { Component } from "react";
import { todo } from "./db/todo";

import TodoList from "./components/TodoList/TodoList";

class App extends Component {
  state = {
    todos: todo,
    filter: "",
  };

  listRender = (e) => {
    console.log("render")
  }

  render() {
    return <TodoList method={this.listRender}/>;
  }
}
export default App;
