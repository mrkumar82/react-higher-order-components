import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "./User";
import Hoc from "../HOC/Hoc";

const UserList = ({ data }) => {
  const filterUser = data.map((user) => {
    return (
      <div key={user.id}>
        <p>{user.name}</p>
      </div>
    );
  });

  return <div>{filterUser}</div>;
};

const SearchUsers = Hoc(UserList, "users");

export default SearchUsers;
