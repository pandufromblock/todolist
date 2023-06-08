import React , {useState} from "react";
function TodoItem(props)
{
    const [isdone,setdone]=useState(false);
    function handlevent()
    {
        setdone((previous)=>{
            return !previous;
        });
    }
    return <div onClick={handlevent} >
        <li style={{textDecoration: isdone?"line-through":"none"}}>{props.text}</li>
    </div>
}
export default TodoItem;