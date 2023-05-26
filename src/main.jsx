import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '/src/assets/fonts/fonts.css'
import Navbar from "/src/components/Navbar/Navbar.jsx";
import Menu from "/src/components/Menu/Menu.jsx";
import Contact from "/src/components/Contact/Contact.jsx";
import Container from "/src/components/Container/Container.jsx";

function followMouse(ev)
{
    if(ev.currentTarget.firstChild){
        let round = ev.currentTarget.firstChild
        round.style.left = ev.clientX-20+"px"
        round.style.top = ev.clientY-20+"px"
    }


}

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
      <div className="scene" onMouseMove={(ev) => {followMouse(ev)}}>
          <div className="round">

          </div>
    <Navbar/>
          <div className="name">Baptiste Bareille</div>
          <div className="title">Developer</div>
      <Container >
          <Contact />
          <Menu/>

      </Container>
      </div>
  </>,
)
