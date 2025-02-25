import React from "react";
import styled from "styled-components";

const TodoListWrapper = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 8px;
`;

const TodoText = styled.span`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

const TodoCheckbox = styled.input`
  margin-right: 10px;
`;

const TodoList = ({ todos, onDelete, onToggleComplete }) => {
  return (
    <TodoListWrapper>
      {todos.map((todo) => (
        <TodoItem key={todo.id}>
   
            <TodoCheckbox 
              type="checkbox" 
              checked={todo.completed} 
              onChange={() => onToggleComplete(todo.id)} 
            />
            <TodoText completed={todo.completed}>
              {todo.text}
            </TodoText>
          <button onClick={() => onDelete(todo.id)}>Видалити</button>
        </TodoItem>
      ))}
    </TodoListWrapper>
  );
};

export default TodoList;
