import "./styles.css";
import SearchUsers from "./components/UserList/UserList";
import SearchTitle from "./components/TodoList/TodoList";

export default function App() {
  return (
    <div className="App">
      <h1>Higher order component</h1>

      <SearchUsers />
      <h2>Todo List</h2>
      <SearchTitle />
    </div>
  );
}
