import { Link } from "react-router-dom";
import "./Contact.css";
import { Button, Col, Form, FormControl, FormGroup, FormLabel, ListGroup, ListGroupItem, Row } from "react-bootstrap";

function Contact(){
    const handleSubmit =(event) => {

    }
    return(
        <div className="contactMain">
           <h2 className="subh">Contact</h2>
           <Row>
            <Col>
            <div className="contact-form">
                <Form onSubmit={handleSubmit}>
                    <FormGroup className="mb-3" controlId="validationCustom01 ">
                        <FormLabel>Name:</FormLabel>
                        <FormControl required type="text" placeholder="name" />

                    </FormGroup>
                    <FormGroup className="mb-3" controlId="validationCustom02 ">
                        <FormLabel>Email:</FormLabel>
                        <FormControl required type="email" placeholder="email" />

                    </FormGroup>
                    <FormGroup className="mb-3" controlId="validationCustom02 ">
                        <FormLabel>Message:</FormLabel>
                        <FormControl required as="textarea" placeholder="text" />

                    </FormGroup>
                    <Button type="submit">Submit</Button>

                </Form>

            </div>
            </Col>
            <Col>
            <div className="contact-data">
                <p>if you have any queries email-me on &nbsp;&nbsp; <span className="mail">billu.poornima@gmail.com</span> feel free to mail. </p>&nbsp;&nbsp;&nbsp;
                <p>Detail-oriented frontend developer in creating responsive and user-intuitive web applications. I am currently looking for a job opportunity to leverage my foundation skills in HTML, CSS, JavaScript & React to work with a dynamic engineering team. I am committed towards delivering high-quality code with exceptional user experiences by collaborating with growth mindset.</p>
            <p>
                <ListGroup horizontal>
                    <ListGroupItem><Link to="">Mail: </Link></ListGroupItem>
                    <ListGroupItem><Link to="">Mobile: </Link></ListGroupItem>
                    <ListGroupItem><Link to="">LinkedIn: </Link></ListGroupItem>
                    <ListGroupItem><Link to="">Github: </Link></ListGroupItem>

                </ListGroup>
            </p>
            </div>
            </Col>
           </Row>
        </div>
    )
}
export default Contact;