import React from "react";
import ReactDOM from "react-dom";

import src1 from "./assets/1.jpg"; //react中不能直接书写路径，因为，一打包，图片的路径会变化
import src2 from "./assets/2.jpg";
import src3 from "./assets/3.jpg";

import "./index.css";

const srcs = [src1, src2, src3];
let index = 0;
// 根据index值，限制某张图片
const container = document.getElementById("root");

let timer = null;

function render() {
  ReactDOM.render(<img src={[srcs[index]]} alt="" />, container);
}
// 启动计时器。每隔一段时间，切换时间
function start() {
  stop();
  timer = setInterval(() => {
    index = (index + 1) % 3;
    render();
  }, 2000);
}

function stop() {
  clearInterval(timer);
}

render();
start();

container.onmouseenter = function() {
  stop();
};
container.onmouseleave = function() {
  start();
};
