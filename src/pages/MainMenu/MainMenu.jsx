import Navbar from "/src/components/Navbar/Navbar.jsx";
import Container from "/src/components/Container/Container.jsx";
import Contact from "/src/components/Contact/Contact.jsx";
import Menu from "/src/components/Menu/Menu.jsx";
// eslint-disable-next-line no-unused-vars
import React from "react";
import {FollowRound} from "/src/components/FollowRound/FollowRound.jsx";
import {InitialTransition} from "/src/transition/InitialTransition.jsx";
import {motion} from "framer-motion";

const MainMenu = () => {

    const containerBackGround = {
        initial : {y : -20, opacity: 0},
        animate : {y:0, opacity: 1,
            transition : {
                duration: 0.7,
                delayChildren : 1.9,
                staggerChildren : 0.4,
                ease: [0.6, -0.05,0.01,0.99]
            }
        }
    }
    const textBackGround = {
        initial : {y : -20, opacity: 0},
        animate : {y:0, opacity: 1}
    }

    return(
        <div>
        <InitialTransition>
            <FollowRound>
                <Navbar/>
                <motion.section
                    initial="initial"
                    animate="animate"

                    variants={containerBackGround}
                >
                    <motion.div
                        variants={textBackGround}
                        className="name">Baptiste Bareille
                    </motion.div>
                    <motion.div
                        variants={textBackGround}
                        className="title">Web Developer
                    </motion.div>
                </motion.section>
                <Container >
                    <Contact />
                    <Menu/>
                </Container>
            </FollowRound>
        </InitialTransition>
        </div>
    )
}

export default MainMenu