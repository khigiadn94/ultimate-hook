import React, { createContext, useEffect, useReducer, useState } from "react";
import { todoReducer } from "../reducers/TodoReducer";
import { GET_TODOS, SAVE_TODOS } from "../reducers/types";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  // State
  // const [todos, setTodos] = useState([]);

  const [todos, dispatch] = useReducer(todoReducer, []);

  // Get todos from local storage
  useEffect(() => {
    dispatch({
      type: GET_TODOS,
      payload: null,
    });
  }, []);

  // Save todos to local storage
  useEffect(() => {
    if (todos.length > 0) {
      dispatch({
        type: SAVE_TODOS,
        payload: { todos },
      });
    }
  }, [todos]);

  // const addTodo = (todo) => {
  //   setTodos((prevTodos) => [...prevTodos, todo]);
  // };

  // const deleteTodo = (id) => {
  //   setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  // };

  const todoContextData = {
    todos,
    dispatch,
  };

  // return
  return (
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
