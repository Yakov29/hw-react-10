import React, { useState } from "react";
import styled from "styled-components";

const TodoEditorWrapper = styled.div`
  margin-bottom: 20px;
`;

const TodoInput = styled.input`
  padding: 10px;
  font-size: 14px;
  width: 100%;
  max-width: 300px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const AddButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  background-color:rgb(58, 174, 0);
  color: white;
  border: none;
  border-radius: 4px;
  margin-left: 10px;
`;

const TodoEditor = ({ onAddTodo }) => {
  const [textValue, setTextValue] = useState("");

  const handleAdd = () => {
    if (textValue) {
      const newTodo = {
        id: Date.now(),
        text: textValue,
        completed: false,
      };
      onAddTodo(newTodo);
      setTextValue('');
    }
  };

  return (
    <TodoEditorWrapper>
      <TodoInput 
        type="text" 
        value={textValue} 
        onChange={(e) => setTextValue(e.target.value)} 
        placeholder="Додати задачу" 
      />
      <AddButton onClick={handleAdd}>Додати</AddButton>
    </TodoEditorWrapper>
  );
};

export default TodoEditor;
