import "./Services.css";
import {Row, Col} from "react-bootstrap";
import s1 from "../Assets/ser1.jpg";
import wh from "../Assets/wh.jpg";
import pd1 from "../Assets/pd1.jpg";
import or from "../Assets/or.jpg";
import ca from "../Assets/ca.jpg";
import mh from "../Assets/mh.jpg"
function Services(){
    return(
        <div>
            <h2 className="sh">Medical Services</h2>
            <p className="sp"> we are dedicated to providing comprehensive and compassionate medical care for patients of all ages. Our team of highly skilled and experienced healthcare professionals is committed to your well-being. From routine check-ups to managing chronic conditions, we prioritize personalized care to meet your unique health needs.</p>
           <Row>
           <Col>
           <img src={s1} alt="Service One" className="imgs" />
            </Col>
            <Col>
            <h3 className="psh">Family Medicine</h3>
            <h6 className="psh6">Description</h6>
            <p className="ps1">Our Family Medicine services focus on caring for your entire family, from infants to seniors. Our board-certified physicians offer a wide range of services, including preventive care, vaccinations, and the management of acute and chronic illnesses.</p>
            </Col>
           <Col>
           <img src={wh} alt="Service Two" className="imgs" />

           </Col>
           <Col>
           <h3 className="psh">Womens Health</h3>
            <h6 className="psh6">Description</h6>
            <p className="ps1">Empowering women to prioritize their health is our mission Our dedicated team of women's health specialists provides comprehensive care, including gynecological exams, family planning, prenatal care, and menopause management.</p>
             
           </Col>
            </Row> 
            &nbsp;&nbsp;
            <Row>
              
                <Col>
                <img src={pd1} alt="Services Three" className="imgs" />
                </Col>
                <Col>
                <h3 className="psh">Pediatrics</h3>
            <h6 className="psh6">Description</h6>
            <p className="ps1">we understand the importance of nurturing the health and well-being of your little ones. Our pediatricians are passionate about providing expert care for infants, children, and adolescents.</p>
             
                </Col>
                <Col>
                <img src={or} alt="Services Four" className="imgs" />
                </Col>
                <Col>
                <h3 className="psh">Orthopedic Services</h3>
            <h6 className="psh6">Description</h6>
            <p className="ps1"> Our team of orthopedic specialists is committed to diagnosing and treating musculoskeletal conditions. Whether you're seeking joint replacement, sports medicine, or rehabilitation, we offer advanced and personalized solutions to get you back on your feet.</p>
             
                </Col>
            </Row>
            &nbsp;&nbsp;
            <Row>
                <Col>
                <img src={ca} alt="Cardiology" className="imgs" />
                </Col>
                <Col>
                <h3 className="psh">Cardiology</h3>
            <h6 className="psh6">Description</h6>
            <p className="ps1"> Heart health is at the core of our Cardiology services Our board-certified cardiologists specialize in the diagnosis and treatment of cardiovascular conditions.</p>
             
                </Col>
                
                <Col>
                <img src={mh} alt="Mental Health & Counselling" className="imgs" />
                </Col>
                <Col>
                <h3 className="psh">Mental Health and Counseling</h3>
            <h6 className="psh6">Description</h6>
            <p className="ps1"> we recognize the integral connection between mental and physical well-being. Our compassionate team of mental health professionals provides counseling and therapy services for individuals and families.</p>
             
                </Col>
                

            </Row>
        </div>
    )
}
export default Services;