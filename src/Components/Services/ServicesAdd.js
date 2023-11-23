const ServicesAdd = ({todosList}) => {
    return(
        <div>
{todosList.map((todo,index)=>{
    <h4 key={index}>{todo}&nbsp;&nbsp;&nbsp; <button>Delete</button></h4>
})}
        </div>
    )

    
}
export default ServicesAdd;