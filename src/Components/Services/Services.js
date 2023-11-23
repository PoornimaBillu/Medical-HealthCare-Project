import { useState } from "react";
import ServicesAdd from "./ServicesAdd";

function Services(){
    const[task,setTask] = useState("");
    const[todos,setTodos] = useState([])
    const eventHandler = (e) =>{
       setTask(e.target.value)
       

    }
    const clickHandler =(e)=>{
        e.preventDefault();
        console.log(task)
        const newTodo = [...todos,task]
        setTodos(newTodo)
        setTask("");



    }
    const ServicesAdd = ({todosList}) => {
        return(
            <div>
    {todosList.map((todo,index)=>{
        <h4 key={index}>{todo}&nbsp;&nbsp;&nbsp; <button>Delete</button></h4>
    })}
            </div>
        )
    
        
    }

    return(
        <div>
            <h1>Add Todo Mangement</h1>

            <div>
                <form onSubmit={clickHandler}>
                    <input type="text" value={task} onChange={eventHandler} size="40" placeholder="enter product name" />&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="submit" value="AddProduct" name="AddProduct" onClick={ServicesAdd}/>
                </form>
                <ServicesAdd todosList={todos} />
            </div>
        </div>
    )
}
export default Services;