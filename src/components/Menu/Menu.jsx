import {changeLetterRandom, reverseChangeLetterRandom} from "/src/utils/letterChangeHover.js";
import "./menu.css"
import {Link} from "react-router-dom";


const Menu = (props) => {

    let {currentDescription, updateCurrentDescription} = props;

    let menuItems = props.menuItems;

    function mouseEnter(ev, item)
    {
        if(item.textDescription){
            updateCurrentDescription({
                textDescription : item.textDescription,
                image : item.image
            })
        }
        changeLetterRandom(ev, item.menuName)
    }


    return (

        <ul className="menu">
            {menuItems.map((item, id) => {
                return(
                    <li key={id}><p className='menu-number'> 0{id+1} </p>
                        <Link to={item.linkTo} className="menu-item"
                              onMouseLeave={(ev) => reverseChangeLetterRandom(ev, item.menuName)}
                              onMouseEnter={(ev) => mouseEnter(ev, item)}>
                            {item.menuName}</Link></li>
                )
            })}
           </ul>
    )
}

export default Menu;