import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let [count,setcounst]=useState(0);

  function update(){
    count ++;
    setcounst(count);
  }

  function dec(){
    if(count == 0){return false}
    count --;
    setcounst(count);
  }

  return (
    <>
      <center>
          <h1>Counter = 0{count}</h1>
          <button className="btn btn-success" onClick={update}>➕</button>
          <button className="btn btn-danger ms-3" onClick={dec}>➖</button>
      </center>
    </>
  )
}

export default App
