import React, { useState } from "react";
import Todo from "./Todo";




const TodoItems = () => {
     
    const [todoItems, setTodoItems] = useState([]);

    const [formValue, setformValue] = useState("");

    const removeFromTodo = (item) => {
        const updatedTodo = todoItems.filter((i) => i !== item)
        setTodoItems(updatedTodo);
    };

    return(
        <div className="todo-container" style={{color: "blue"}}>

            <form>
                <input type="text" value={formValue} 
                onChange={(event) => {setformValue(event.target.value)}}
                />
                <button type="button" onClick = {() => {
                    if (todoItems.includes(formValue)){
                        return;
                    }else{
                        setTodoItems([...todoItems, formValue]);
                        setformValue("")
                    }
                      
                      }}>
                          Add items</button>
            </form>


            <p>Number of items in todo: {todoItems.length}</p>
            <ul>
               {
                   todoItems.map((item) => {
                       return(
                           <Todo entry={item} removeItem={removeFromTodo} />
                       )
                   }
                   )
               }
            </ul>

            

        </div>
    )
}

export default TodoItems;