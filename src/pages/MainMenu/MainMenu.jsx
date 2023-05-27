import Navbar from "/src/components/Navbar/Navbar.jsx";
import Container from "/src/components/Container/Container.jsx";
import Contact from "/src/components/Contact/Contact.jsx";
import Menu from "/src/components/Menu/Menu.jsx";
// eslint-disable-next-line no-unused-vars
import React from "react";
import {FollowRound} from "/src/components/FollowRound/FollowRound.jsx";
import {InitialTransition} from "/src/transition/InitialTransition.jsx";

const MainMenu = () => {

    return(
        <div>
        <InitialTransition>
            <FollowRound>
                <Navbar/>
                <div className="name">Baptiste Bareille</div>
                <div className="title">Web Developer</div>
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