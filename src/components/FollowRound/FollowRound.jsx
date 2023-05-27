import {followMouse} from "/src/utils/followMouse.js";

const FollowRound = (props) => {


    return (
        <div className="scene" onMouseMove={(ev) => {followMouse(ev)}}>
            <div className="round"></div>
            {props.children}
        </div>

    )
}

export {FollowRound}