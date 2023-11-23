import "./About.css";
import {Row, Col} from "react-bootstrap";
import about from "../Assets/aboutimg.jpg";
import abt1 from "../Assets/ab1.jpg";
// import { motion,useScroll, useSpring } from "framer-motion";

function About(){
    // const { scrollYProgress } = useScroll();
    // const scaleX = useSpring(scrollYProgress, {
    //   stiffness: 200,
    //   damping: 90,
    //   restDelta: 100.001,
    // });
    return(
        // <motion.div className="aboutMain" style={{ scaleX: scrollYProgress }}
        // >
        <>
        <h1 className="heading">Know More About Us</h1>
        <Row>
            <Col>
            <h2 class="p1">Website, Blog, Video Script, and Other Services Tailored to Your Needs</h2>
            <p className="ap">Content is the foundation of any healthcare website, blog, or marketing campaign. Keep your online and offline presence up-to-date and fully SEO-optimized. Since 2003, Medical Web Experts has been providing medical content writing services for a comprehensive range of channels for hospitals, pharmacies, and other healthcare businesses.</p>
            <p className="ap">Whether you’re building a website or managing a healthcare internet marketing campaign marketing campaign, our medical content writers’ knowledge and experience gives your healthcare organization a competitive edge that you won’t find anywhere else.</p>
       
            </Col>
            <Col>
<img src={about} alt="About Image" class="abt" />
            </Col>
        </Row>
        <Row>
            <Col>
            <img src={abt1} alt="About Health care image" class="abt" />
            </Col>
            <Col>
            <h2 className="ah">Website, Blog, Video Script, and Other Services Tailored to Your Needs</h2>
            <p className="ap">Content is the foundation of any healthcare website, blog, or marketing campaign. Keep your online and offline presence up-to-date and fully SEO-optimized. Since 2003, Medical Web Experts has been providing medical content writing services for a comprehensive range of channels for hospitals, pharmacies, and other healthcare businesses.</p>
            <p className="ap">Whether you’re building a website or managing a healthcare internet marketing campaign marketing campaign, our medical content writers’ knowledge and experience gives your healthcare organization a competitive edge that you won’t find anywhere else.</p>
            </Col>
            </Row>
            <Row>
                <Col>
        <h2 className="ah">Experts in Medical Content Writing for the Healthcare Industry</h2>
        <p className="ap">Whether you need plain language patient education materials, high level content for physicians, a script for medical video production, or a healthcare email marketing strategy, we have the experience for it. Whether you need ten pages or one hundred, we can take it on.

The members of our medical content writing services team have backgrounds in communications or the healthcare industry, in addition to years of experience producing medical content for a variety of channels. Trained in communications for patients, writing about research, marketing content, educational content, and SEO optimization, they are ready to make your content project a success.</p>
</Col>
<Col>
   <h2 className="ah">Experts in Content for the Medical Industry</h2>

<p className="ap">Your healthcare organization may be considering an external medical content writing company because you have a high volume of new content that you need to produce, because you need experts for a variety of marketing channels, or because you want to update what you already have to improve readability and SEO. Whatever your goals, the experienced writers, editors, and content strategy professionals at Medical Web Experts will be able to create the high quality content your healthcare organization needs, thoroughly researched and tailored to the right style, length, audience, and channel.

For each project, our medical content writing team meets with the client to better understand audience, vision, and messages. We then set up a content generation and approval process that fits your timeline.</p>
</Col>
</Row>
        </>
    )
}
export default About;