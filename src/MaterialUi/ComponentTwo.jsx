import { useState } from "react";
import "./ComponentTwo.css";

function ComponentTwo(){

    const imgs = [{
        id:0, value:"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/r/e/-original-imaghxeeme2n7hy7.jpeg?q=70"

    },
    {
        id:1, value:"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/g/p/6/-original-imaghxem3utgrtyg.jpeg?q=70"

    },

    {
id:2, value:"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/s/p/d/-original-imaghxemhgfzjgja.jpeg?q=70"
    },
    {
id:3, value:"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/z/m/l/-original-imaghxejxzzzkqr7.jpeg?q=70"
    },
    {
        id:4, value:"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/a/d/t/-original-imaghxembperu9hb.jpeg?q=70"
    }
]

const[sliderData, setSliderData] = useState(imgs[0]);
const handlerEvent = (index) => {
    console.log(index);
    const slider = imgs[index]
    setSliderData(slider);
}
    return(

        <div className="main">
            <img src={sliderData.value} height="400" width="400" />
            <div className="flex-row">
            {
                imgs.map((img,i) => 
                <div className="thumbnail">
                <img key={img.id} className={sliderData.id == i ? "clicked" : ""} src={img.value} onClick={() => handlerEvent(i)} height="70" width="90" />
                </div>
                )
            }
            </div>
        </div>
    )
}
export default ComponentTwo;