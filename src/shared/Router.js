import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Join from "../pages/Join";
import Main from "../pages/main/Main";
import TodoList from "../pages/main/TodoList";
import Home from "../pages/main/Home";
import RecordTodo from "../pages/main/RecordTodo";
import Detail from "../pages/main/Detail";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/join" element={<Join />}></Route>
        <Route path="/main/:id" element={<Main />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="todolist" element={<TodoList />}></Route>
          <Route path="recordTodo" element={<RecordTodo />}></Route>
          <Route path="detail/:id" element={<Detail />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
