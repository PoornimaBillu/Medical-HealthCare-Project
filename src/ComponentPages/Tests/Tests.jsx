// import { useState } from "react";
// import "./Tests.css";

// import imageOne from "../Assets/health.jpg";
// import imageTwo from "../Assets/health1.jpg";
// import imageThree from "../Assets/img1.png";
// import imageFour from "../Assets/img11.jpg";
// import imageFive from "../Assets/img12.png";
// import { Link } from "react-router-dom";
// import { Row, Col } from "react-bootstrap";


// function Tests(){

//     const imgs = [{
//         id:0, 
//         value:imageOne

//     },
//     {
//         id:1, value:imageTwo

//     },

//     {
// id:2, value:imageThree
//     },
//     {
// id:3, value:imageFour
//     },
//     {
//         id:4, value:imageFive
//     }
// ]

// const[sliderData, setSliderData] = useState(imgs[0]);
// const handlerEvent = (index) => {
//     console.log(index);
//     const slider = imgs[index]
//     setSliderData(slider);
// }
//     return(
//         <div>

// <Row>
//     <Col>
//         <div className="main">
//             <img src={sliderData.value} height="400" width="400" />
//             <div className="flex-row">
//             {
//                 imgs.map((img,i) => 
//                 <div className="thumbnail">
//                 <img key={img.id} className={sliderData.id == i ? "clicked" : ""} src={img.value} onClick={() => handlerEvent(i)} height="70" width="90" />
//                  </div>
//                 )
//             }
//             </div>
//         </div>

//       <Link to="/knowmore">KnowMore</Link>
//       <div>
      
      
       
//       </div>
//       </Col>
//       <Col>
//       <p className="para">Health care is the process of maintaining or improving health through the <strong></strong> prevention, diagnosis, and treatment of disease, illness, injury, and other physical and mental impairments. It can also include efforts to promote someone's physical, mental, or emotional well-being. 
//  </p>
//  <p className="para1">Health care can help prevent and treat diseases that can impact individuals' quality of life as well as the length of their life. It can also contribute to a significant part of a country's economy, development, and industrialization when efficient. 
// </p>
     
//       </Col>
//       </Row>
//       </div>
//     )
// }
// export default Tests;
import bloodTest from "../Assets/bloodtest01.jpg";
import xrays from "../Assets/x-ray.jpg";
import biopsy from "../Assets/biopsy.jpg";
import endoscopy from "../Assets/endoscopy.jpg";
import ecg from "../Assets/ecg.jpg";

import { useState } from "react";
// import imageOne from "../Assets/health.jpg";
// import imageTwo from "../Assets/health1.jpg";
// import imageThree from "../Assets/img1.png";
// import imageFour from "../Assets/img11.jpg";
// import imageFive from "../Assets/img12.png";
import { Link } from "react-router-dom";
import {Row, Col} from "react-bootstrap";
function Tests(){
    const imgs = [{
                id:0, 
                value:bloodTest,
                name:"Blood Test"
        
            },
            {
                id:1, value:xrays,
                name:"X-Rays"
        
            },
        
            {
        id:2, value:biopsy,
        name:"Biopsy"
            },
            {
        id:3, value:endoscopy,
        name:"Endoscopy"
            },
            {
                id:4, value:ecg,
                name:"ECG"
            }
        ]
        
        const[sliderData, setSliderData] = useState(imgs[0]);
        const handlerEvent = (index) => {
            console.log(index);
            const slider = imgs[index]
            setSliderData(slider);
        }
    return(
        <>
        <Row>
            <Col>
            
            <div className="main">
           <img src={sliderData.value} alt="Images" height="400" width="400" />
             <div className="flex-row">
            {
                imgs.map((img ,i) => 
                <div className="thumbnail">

                <img key={img.id} className={sliderData.id == i ? "clicked" : ""} src={img.value}  onClick={() => handlerEvent(i)} height="70" width="90" />
            
                  </div>
                )
            }
            </div>
            </div>
            </Col>
            <Col>
            <p style={{ marginTop: "150px", color:"lightgreen",fontSize:"30px",textDecoration:"underline",fontStyle:"italic"}} className="par">
      {sliderData.name}
   </p>
   <p className="parat1">
      {/* Add your dynamic content here */}
      {/* For example, you can add a description for each type of test */}
      {sliderData.id === 0 && `A blood test is a lab analysis of things that may be found in your blood. You may have blood tests to keep track of how well you are managing a condition such as diabetes or high cholesterol. You may also have them for routine checkups or when you are ill. Blood tests are very common.`}
      {sliderData.id === 1 && `X-rays are a form of electromagnetic radiation, similar to visible light. Unlike light, however, x-rays have higher energy and can pass through most objects, including the body. Medical x-rays are used to generate images of tissues and structures inside the body.`}
      {sliderData.id === 2 && `A biopsy is a procedure that removes cells or tissue from your body. A doctor called a pathologist looks at the cells or tissue under a microscope to check for damage or disease. The pathologist may also do other tests on it.`}
      {sliderData.id === 3 && `An endoscopy is a test to look inside your body. A long, thin tube with a small camera inside, called an endoscope, is passed into your body through a natural opening such as your mouth. Your GP may refer you for an endoscopy if you're having certain symptoms.`}
      {sliderData.id === 4 && `An electrocardiogram (ECG or EKG) records the electrical signal from the heart to check for different heart conditions. Electrodes are placed on the chest to record the heart's electrical signals, which cause the heart to beat.`}
   </p>
   </Col>
            {/* <Col>
            <p style={{marginTop:"200px"}} className="parat">Health care is the process of maintaining or improving health through the <strong></strong> or emotional well-being. 
  </p>
  <p className="parat1">Health care can help prevent and treat diseases that can impact individuals' quality of life as well as the length of their life. It can also contribute to a significant part of a country's economy, development, and industrialization when efficient. 
 </p>
            </Col> */}
        </Row>
</>
    )
}
export default Tests;