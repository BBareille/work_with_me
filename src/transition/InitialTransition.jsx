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
            delay : 1,
            duration: 2,
            ease: [0.87, 0, 0.13, 1],
        },
    }
}

const textContainer = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 0,
        transition: {
            delay: 1,
            duration: 2,
            ease: [0.87, 0, 0.13, 1],
        }
    },
};

const text = {
    initial: {
        opacity: 1,
        background :"orange"
    },
    animate: {
        opacity: 0,
        transition: {
            delay: 0,
            duration: 3,
            ease: [0.87, 0, 0.13, 1],
        },
    },
};



const InitialTransition = (props) => {
   return (
       <div>
       <div className="container-transition">
           <motion.div
               className="bigSquare"
               variants={blackBox}
               initial="initial"
               animate="animate"
           />
            <motion.div variants={textContainer}
                        initial="initial"
                        animate="animate" className="container-transition-text"
                        onAnimationComplete={() => {
                            let div = document.querySelector(".container-transition-text")
                                div.remove()
                        }}
            >

                    <motion.rect className="text-transition"
                                 variants={text}
                                 initial="initial"
                                 animate="animate"
                    >
                        Baptiste Bareille - Web Developer
                    </motion.rect>
            </motion.div>
       </div>
           {props.children}
       </div>
   )
}

export { InitialTransition }