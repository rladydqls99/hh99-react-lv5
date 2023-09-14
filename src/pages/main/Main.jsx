import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const logoutBtn = () => {
    navigate("/");
  };

  return (
    <div>
      <header>
        <p>🏠</p>
        <button onClick={logoutBtn}>로그아웃</button>
        <hr />
      </header>
      <Outlet />
    </div>
  );
}

export default Main;
