import React, {useState} from "react";
import TodoItem from "./TodoItem.js";
function App()
{
    const [inputText,setInputText]=useState("");
    const [items,setItems]=useState([]);
    function handleevent(event)
    {
        const newvalue=event.target.value;
        setInputText(newvalue);
    }
    function additem()
    {
        setItems(previtems =>{return [...previtems , inputText];
        });
        setInputText("");
    }
    return (<div className="container">
        <center>
        <div className="heading">
            <h1>ToDo List</h1><br></br>
        </div>
        <div className="form">
            <input onChange={handleevent} type="text" value={inputText}/><br></br><br></br>
            <button onClick={additem}><span>Add</span></button>
        </div>
        <br></br>
        <div>
            <h3>
                {items.map(todoitem =><TodoItem text={todoitem}/>)}
            </h3>
        </div>
        </center>
    </div>)
}
export default App;