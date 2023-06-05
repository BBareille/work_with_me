import {changeLetterRandom, reverseChangeLetterRandom} from "/src/utils/letterChangeHover.js";
import "./menu.css"
import {Link, useLocation} from "react-router-dom";
import {useEffect} from "react";


const Menu = (props) => {

    let { updateCurrentDescription } = props;

    const locate = useLocation();

    console.log(locate)

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


    if(locate.pathname == "/"){
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
    else {
        return (

            <ul className="project-menu">
                {menuItems.map((item, id) => {
                    return(
                        <li key={id}><p className='project-menu-number'> 0{id+1} </p>
                            <Link to={item.linkTo} className="project-menu-item"
                                  onMouseLeave={(ev) => reverseChangeLetterRandom(ev, item.menuName)}
                                  onMouseEnter={(ev) => mouseEnter(ev, item)}>
                                {item.menuName}</Link>
                        </li>
                    )
                })}
            </ul>
        )

    }


}

export default Menu;