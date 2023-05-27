function followMouse(ev)
{
    if(ev.currentTarget.firstChild){
        let round = ev.currentTarget.firstChild
        round.style.left = ev.clientX-20+"px"
        round.style.top = ev.clientY-20+"px"
    }


}

export { followMouse }