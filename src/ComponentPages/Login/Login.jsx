import { Link } from "react-router-dom";
function Login(){
    
    return(
        <div className="regMain">
            <h1>Login Here</h1>
            <form className="formfield">
               
                <input type="text" placeholder="enter your email" size="30" className="inputFields" /><br></br><br></br>
                <input type="password" placeholder="Type your password here" size="30"  className="inputFields"/><br></br><br></br>
                <button type="submit" id="rbtn" className="btn btn-primary">Login</button>

            </form>
            <p>Dont You have account Register Here <Link to="/register"> Register</Link></p>
        </div>
    )
}
export default Login;