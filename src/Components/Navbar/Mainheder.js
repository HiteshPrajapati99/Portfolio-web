import React from "react";
import { Outlet } from "react-router-dom";
import Heder from "../Heder";

function Mainheder() {
  return (
    <>
      <Heder />
      <Outlet />
    </>
  );
}

export default Mainheder;
