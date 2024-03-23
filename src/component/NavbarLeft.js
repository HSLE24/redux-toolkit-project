import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from'@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import { useState } from 'react'

const NavbarLeft = ({ menus }) => {
    
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const changeSidebar=()=>{
        setSidebarOpen(!sidebarOpen);
    }

  return (
    <div>
        <div className="nav-btn">
            <Button onClick={changeSidebar} variant="outline-secondary"><FontAwesomeIcon icon={faBars} /></Button>
        </div>
        <div className={`menu-list-left-area ${sidebarOpen ? 'sidebar' : ''}`}>
            <CloseButton className="close-btn" onClick={changeSidebar}/>
            <ul className="menu-list-left">
                {
                    menus && menus.map((item, index)=>(
                        <li key={index}>{ item }</li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default NavbarLeft