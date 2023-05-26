import {changeLetterRandom, reverseChangeLetterRandom} from "/src/utils/letterChangeHover.js";
import "./menu.css"


const Menu = () => {

    let menuName = ["Projects", "Github","About me", "Contact"]

    return (

        <ul className="menu">
            {menuName.map((name, id) => {
                return(
                    <li key={id}><p className='menu-number'> 0{id+1} </p>
                        <span className="menu-item"
                              onMouseLeave={(ev) => reverseChangeLetterRandom(ev, name)}
                              onMouseEnter={(ev) => changeLetterRandom(ev, name)}>
                            {name}</span></li>
                )
            })}
            {/*<li><p>( 01 )</p><span className="menu-item" onMouseEnter={(ev) => changeLetterRandom(ev, "Home")}>Home</span></li>*/}
            {/*<li><p>( 02 )</p><span className="menu-item" onMouseEnter={(ev) => changeLetterRandom(ev, "Projects")}>Projects</span></li>*/}
            {/*<li><p>( 03 )</p><span className="menu-item" onMouseEnter={(ev) => changeLetterRandom(ev, "Github")}>Github</span></li>*/}
            {/*<li><p>( 04 )</p><span className="menu-item" onMouseEnter={(ev) => changeLetterRandom(ev, "Contact")}>Contact</span></li>*/}
        </ul>
    )
}

export default Menu;