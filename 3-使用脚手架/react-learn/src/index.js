import React from "react";
import ReactDOM from "react-dom";
import MyFuncComp from "./MyFuncComp.js";
import MyClassComp from "./MyClassComp.js";

console.log(MyClassComp);
ReactDOM.render(
  <div>
    <p>
      <MyFuncComp number="2" age={20} />
      <MyFuncComp number={5} />
    </p>

    <p>
      <MyClassComp number="2" age={20} ennabel />
      <MyClassComp number="2" age={20} obj={{ name: "cmw", age: 18 }} ennabel />
    </p>
  </div>,
  document.getElementById("root")
);
