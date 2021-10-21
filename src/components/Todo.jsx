import React from "react";

const Todo = ({entry, removeItem}) => {
    return(
        <li>
            <p>{entry}</p>
            &nbsp;<button
            onClick= {() => {
                removeItem(entry)
            }}
            >x</button>

            
        </li>
       
           
        
    )
}

export default Todo;