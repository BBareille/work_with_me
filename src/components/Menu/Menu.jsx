import {changeLetterRandom, reverseChangeLetterRandom} from "/src/utils/letterChangeHover.js";
import "./menu.css"
import {Link} from "react-router-dom";


const Menu = () => {

    let menuName = ["Projects", "Github","About me", "Contact"]
    let linkTo = ["/projects", "https://github.com/BBareille" , "", ""]

    return (

        <ul className="menu">
            {menuName.map((name, id) => {
                return(
                    <li key={id}><p className='menu-number'> 0{id+1} </p>
                        <Link to={linkTo[id]} className="menu-item"
                              onMouseLeave={(ev) => reverseChangeLetterRandom(ev, name)}
                              onMouseEnter={(ev) => changeLetterRandom(ev, name)}>
                            {name}</Link></li>
                )
            })}
           </ul>
    )
}

export default Menu;