import React, { useEffect, useState } from "react";
import Hoc from "../HOC/Hoc";

const TodoList = ({ data }) => {
  let renderTodos = data.map((todo) => {
    return (
      <div key={todo.id}>
        <p>{todo.title}</p>
      </div>
    );
  });
  return <div>{renderTodos}</div>;
};

const SearchTitle = Hoc(TodoList, "todos");

export default SearchTitle;
