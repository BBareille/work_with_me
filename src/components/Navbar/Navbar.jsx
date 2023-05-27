import "./Navbar.css"
import {changeLetterRandom, reverseChangeLetterRandom} from "/src/utils/letterChangeHover.js";
const Navbar = (props) => {

    return(
        <div className="navbar">
            {props.children}
            {/*<button className="button-navbar"*/}
            {/*        onMouseEnter={(ev) => changeLetterRandom(ev, "Baptiste Bareille")}*/}
            {/*        onMouseLeave={(ev) => reverseChangeLetterRandom(ev, "Baptiste Bareille")}*/}
            {/*>Baptiste Bareille</button>*/}
        </div>
    )
}

export default Navbar;