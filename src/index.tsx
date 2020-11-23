import React from "react";
import ReactDOM from "react-dom"
import Test1 from "@/test/test1"

function a(){
  console.log('abc');

  let arr = [];
  let arr2 = new Array(10);
}

function getAge(num: number): Number {
  return num + 10;
}
let dom: HTMLElement | null = document.getElementById("root");
ReactDOM.render(<Test1 />, dom);
