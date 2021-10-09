import React from "react";

const Todo = ({ todo }) => {
  return (
    <div
      style={{
        borderBottom: "solid 1px #666",
        background: "#efefef",
        padding: "10px"
      }}
      key={todo.key}
    >
      <h2>{todo.title}</h2>
    </div>
  );
};

export default Todo;
