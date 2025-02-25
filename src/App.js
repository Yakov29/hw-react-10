import { Component } from "react";
import TodoList from "./components/TodoList/TodoList";
import TodoEditor from "./components/TodoEditor/TodoEditor";
import Filter from "./components/Filter/Filter";
import Info from "./components/Info/Info";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
`;

const Container = styled.div`
  margin-bottom: 20px;
`;

class App extends Component {
  state = {
    todos: [
      
    ],
    filter: "",
  };

  handleAddTodo = (newTodo) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
    }));
  };

  handleDeleteTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  handleToggleComplete = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  getFilteredTodos = () => {
    const { todos, filter } = this.state;
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const filteredTodos = this.getFilteredTodos();
    const completedTodos = this.state.todos.filter(todo => todo.completed).length;
    const totalTodos = this.state.todos.length;

    return (
      <Wrapper>
        <Container>
          <TodoEditor onAddTodo={this.handleAddTodo} />
        </Container>
        <Container>
          <Filter value={this.state.filter} onChange={this.handleFilterChange} />
        </Container>
        <Container>
          <Info completed={completedTodos} total={totalTodos} />
        </Container>
        <Container>
          <TodoList
            todos={filteredTodos}
            onDelete={this.handleDeleteTodo}
            onToggleComplete={this.handleToggleComplete}
          />
        </Container>
      </Wrapper>
    );
  }
}

export default App;
