import React, { useContext, useEffect } from "react";
import { TodoContext } from "../contexts/TodoContext";
import TodoItems from "./TodoItems";
import TodoForm from "./TodoForm";
import { AuthContext } from "../contexts/AuthContext";
import { GET_TODOS } from "../reducers/types";

const Todos = () => {
  //Load Todo context
  const { todos } = useContext(TodoContext);

  // // useEffect
  // useEffect(() => {
  //   dispatch({
  //     type: GET_TODOS,
  //     payload: null,
  //   });
  // }, [dispatch]);

  //Load Auth Context
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="todo-list">
      <TodoForm />
      {isAuthenticated ? (
        <ul>
          {todos.map((todo) => (
            <TodoItems todo={todo} key={todo.id} />
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: "center" }}>Not authorised</p>
      )}
    </div>
  );
};

export default Todos;
