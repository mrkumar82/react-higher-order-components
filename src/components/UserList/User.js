import React from "react";

const User = ({ user }) => {
  return (
    <div
      style={{
        borderBottom: "solid 1px #666",
        background: "#eee",
        padding: "10px"
      }}
      key={user.key}
    >
      <h2>{user.name}</h2>
      <h3>{user.username}</h3>
      <h4>{user.email}</h4>
    </div>
  );
};

export default User;
