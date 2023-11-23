import { Container, Navbar , Nav} from "react-bootstrap";
import { Link } from "react-router-dom";

function Header(){
    let activeStyle = {
        color:"#a7a7b8"
    }

    return(
        <div className="header">
            <Navbar expand="lg" fixed="top">
                <Container>
<Navbar.Brand>Poornima</Navbar.Brand>
<Navbar.Toggle />
<Navbar.Collapse className="justify-content-end" >
    <Nav className="ml-auto">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/register" className="nav-link">Register</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/tests" className="nav-link">Tests</Link>
        <Link to="/contact" className="nav-link">Contact</Link>


    </Nav>
</Navbar.Collapse>
                </Container>

            </Navbar>

        </div>
    )
}
export default Header;