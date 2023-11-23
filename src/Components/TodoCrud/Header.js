import { useState } from "react";
import Crud from "./Crud";
import Form from "./Form";
import List from "./List";

function Header(){
    const[input,setInput]=useState("");
    const [todos,setTodos] = useState([])
    return(
        <div>
<Crud />
<Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} />
<List todos={todos} setTodos={setTodos} />
        </div>
    )
}
export default Header;