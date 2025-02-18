import React from "react";
import { Component } from "react";
import styled from "styled-components";
import { todo } from "../../db/todo";

const List =  styled.ul``

const TodoList = (method) => {
  
  return <List>
    
    {
          todo.map((elem) => {
            return   <li className="todo__item">
            <p className="todo__text">{elem.text}</p>
          
        </li>
        })
    }
  </List>
};

export default TodoList;
