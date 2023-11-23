import {v4 as uuidV4} from "uuid"

const Form=({input,setInput,todos,setTodos})=>{
    const inputChange=(event)=>{
        setInput(event.target.value)

    }
    const onSubmitHandler = (event) => {
        event.preventDefault();
        setTodos([...todos , {id:uuidV4(),title:"input" ,completed:"false"}])

    }
    return(
        <div>
<form onSubmit={onSubmitHandler}>
    <input type ="text" placeholder="enter a todo .." value={input} required onChange={inputChange} />
    <button type="submit">Add</button>
</form>
        </div>
    )
}
export default Form;