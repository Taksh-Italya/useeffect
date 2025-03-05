import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let [count,setcounst]=useState(0);

  function update(){
    count ++;
    setcounst(count);
  }

  return (
    <>
      <center>
          <h1>Counter = 0{count}</h1>
          <button className="btn btn-success" onClick={update}>➕</button>
          <button className="btn btn-danger ms-3" onClick={update}>➖</button>
      </center>
    </>
  )
}

export default App
