import { motion } from "framer-motion";
function Home(){
    return(
        <div className="home">
<motion.div className="name" initial={{
          x: -300,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          scale: 1,
        }}
        transition={{ duration: 1 }}>
    <font>Poornima</font> Billu</motion.div>
     <motion.div className="desc"
      initial={{
        x: 300,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        scale: 1,
      }}
      transition={{ duration: 1 }}>Frontend Developer</motion.div>

</div>
        
    )
}
export default Home;

// 1.Head Line (large heading with heading consist two colrs)
// 2.Sub Head Line (small/medium size headin wiht single or double color)
// 3.Call To Action (Button if you want to do any action need to give link tag with to path href)
// 4.Social Proof ( ratings with stars with text /content like 4.9 star need to add Testimonals/Review)
// 5.Product Image (need to and an attractive Image /show your product/service in action)