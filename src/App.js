import React from "react";
import Header from "./components/Header";
import TodoItems from "./components/TodoItems";
import "./components/App.css"

function App() {
  return (
    <div className="App">
      
        <p>
         <Header />
         <br />
         <TodoItems />
          
        </p>
    </div>   
      
  );
}

export default App;
