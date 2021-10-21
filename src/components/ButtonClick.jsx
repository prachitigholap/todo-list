import React, { useState } from "react";

const ButtonClick = () => {
    const [number, setNumber] = useState(0);

    return(
        <div>
            <h1>{number}</h1>
            <br />

            <button 
            
            onClick = {() =>{
                setNumber(number + 1)
            }} >
                
                click me</button>

                <button 
            
            onClick = {() =>{
                setNumber(0)
            }} >
                
                set to 0</button>

        </div>
    )
};


export default ButtonClick;