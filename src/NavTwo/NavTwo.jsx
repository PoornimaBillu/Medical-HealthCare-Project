
import { Routes, Route, useLocation } from "react-router-dom";
import {Container} from "react-bootstrap";
import Register from "../ComponentPages/Register/Register";
import Services from "../ComponentPages/Services/Services";
import About from "../ComponentPages/About/About";
import Contact from "../ComponentPages/Contact/Contact";
import Home from "../ComponentPages/Home/Home";
import Tests from "../ComponentPages/Tests/Tests";
import Header from "../ComponentsHeader/Header";
import KnowMore from "../ComponentPages/KnowMore/KnowMore";
import Login from "../ComponentPages/Login/Login";
import { AnimatePresence } from "framer-motion";




function NavTwo(){
    const location = useLocation();
    return(
        <>
        
            
            <Header />
            <Container>
            <AnimatePresence>
            <Routes location={location} key={location.pathname}> 
                <Route path="/" element={<Home></Home>} />
                <Route path="/register" element={<Register></Register>} />
                <Route path="/about" element={<About></About>} />
                <Route path="/services" element={<Services></Services>} />
                <Route path="/tests" element={<Tests></Tests>} />
                <Route path="/contact" element={<Contact></Contact>} />
                <Route path="/knowmore" element={<KnowMore></KnowMore>} />
                <Route path="/login" element={<Login></Login>} />
            </Routes>
            </AnimatePresence>
           

        </Container>
        </>
    )
}
export default NavTwo;