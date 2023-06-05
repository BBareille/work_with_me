import Navbar from "/src/components/Navbar/Navbar.jsx";
import Container from "/src/components/Container/Container.jsx";
import Contact from "/src/components/Contact/Contact.jsx";
import Menu from "/src/components/Menu/Menu.jsx";
// eslint-disable-next-line no-unused-vars
import React from "react";
import {FollowRound} from "/src/components/FollowRound/FollowRound.jsx";
import {InitialTransition} from "/src/transition/initialTransition/InitialTransition.jsx";
import {motion} from "framer-motion";
import {containerBackGround, textBackGround} from "/src/utils/backgroundTransition.js";
import "./mainMenu.css"
import {menuItems} from "/src/components/Menu/MainMenuItems.js";

const MainMenu = () => {

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
                    <Menu menuItems={menuItems}/>
                </Container>
            </FollowRound>
        </InitialTransition>
        </div>
    )
}

export default MainMenu