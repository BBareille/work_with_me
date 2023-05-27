import {Link} from "react-router-dom";
import React from "react";
import {motion} from "framer-motion";
import Navbar from "/src/components/Navbar/Navbar.jsx";
import {FollowRound} from "/src/components/FollowRound/FollowRound.jsx";

const Project = () => {


    return (
        <motion.div exit={{opacity : 0}}>
            <FollowRound>
                <div>
                    <Navbar>
                        <Link to="/">Go back</Link>
                    </Navbar>
                </div>
            </FollowRound>
        </motion.div>
    )
}

export { Project }