import {motion} from "framer-motion";
import "./initialTransition.css"

const blackBox = {
    initial: {
        height: "100vh",
        bottom: 0
    },
    animate: {
        height: 0,
        transition: {
            duration: 1.5,
            ease: [0.87, 0, 0.13, 1],
        },
    }
}



const InitialTransition = (props) => {
   return (
       <div>
       <div className="container-transition">
           <motion.div
               className="bigSquare"
               initial="initial"
               animate="animate"
               variants={blackBox}/>
           <motion.svg>

           </motion.svg>
       </div>
           {props.children}
       </div>
   )
}

export { InitialTransition }