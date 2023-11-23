import "./Register.css";
function Register(){

    return(
        <div>
            <h1>Registration Form</h1>
            <form className="formfield">
                <input type="text" placeholder="enter Your name" size="30" className="inputFields" /><br></br><br></br>
                <input type="text" placeholder="enter your email" size="30" className="inputFields" /><br></br><br></br>
                <input type="password" placeholder="Type your password here" size="30"  className="inputFields"/><br></br><br></br>
                <button type="submit" id="rbtn" className="btn btn-primary">Register</button>

            </form>
        </div>
    )
}
export default Register;