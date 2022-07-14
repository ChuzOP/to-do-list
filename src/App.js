import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import CreateTodoButtom from "./components/CreateTodoButtom ";
import TodoCounter from "./components/TodoCounter";
import Todoitem from "./components/Todoitem";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";
import darkTheme from "./styles/DarkTheme";
import useLocalStorage from "./hooks/useLocalStorage";

const App = (setItem, item) => {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = useState("");

  let searchTodos = [];

  if (!searchTodos >= 1) {
    searchTodos = todos;
  } else {
    searchTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completedTodo = todos.filter((todo) => !!todo.completed).length;
  const countTodo = todos.length;

  const completeTodo = (text, completed) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const addTodo = (text, completed) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    })
    saveTodos(newTodos);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <TodoCounter completedTodo={completedTodo} countTodo={countTodo} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchTodos.map((todo) => (
          <Todoitem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButtom text={todos.text} addTodo={addTodo} />
    </ThemeProvider>
  );
};

export default App;
