import "./Contact.css"
import {changeLetterRandom, reverseChangeLetterRandom} from "/src/utils/letterChangeHover.js";
const Contact = () => {

    return(
        <div className="contact">
            <h1>Work with me</h1>

            <div className="contact-project">

                <div onMouseLeave={(ev) => reverseChangeLetterRandom(ev, "Request your Web Project")}
                     onMouseEnter={(ev) => changeLetterRandom(ev, "Request your Web Project")}
                className="contact-project-text">Request your Web Project</div>

                <button className="button-project"> {">"} </button>
            </div>
        </div>
    )
}

export default Contact;