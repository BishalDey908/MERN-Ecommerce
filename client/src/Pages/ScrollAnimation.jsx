
import {motion,useScroll} from "framer-motion"
const ScrollAnimation = () => {
    const {scrollYProgress}=useScroll()
  return (
    <motion.div
    style={{
        scaleX:scrollYProgress,
        position:"fixed",
        top:0,
        left:0,
        right:0,
        height:10,
        backgroundColor:" #00DBDE",
          backgroundImage: "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)",

        transformOrigin:"0%"
    }}
    >
      
    </motion.div>
  )
}

export default ScrollAnimation
