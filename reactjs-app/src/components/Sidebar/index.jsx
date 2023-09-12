import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'

import { paths } from "../../Paths";

import styles from './styles.module.scss'

const SideBar = ({ visible, setVisible }) => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(
        paths.find(path => (path.path === location.pathname)).label
    )

    const onClick = (link) => {
        setActiveLink(link)
    }

    return (
        <div className={`
            ${styles.NavBar} 
            ${visible ? 'd-block' : 
                typeof visible === 'undefined' ? 
                    'd-none d-md-block' : 'd-none'}
            `} 
        >
            <Nav 
                variant='pills'
                className="flex-column"
                activeKey={activeLink}
            >
                {paths.map((paths) => {
                    if (paths.path === "/") return [];
                    return (
                        <Nav.Link 
                            className={`${styles.navLink} m-1`} 
                            eventKey={paths.label}
                            onClick={() => onClick(paths.label)}
                        >
                            <Link className=' d-inline-block w-100' 
                                to={`${paths.path}`}
                            >
                                {paths.label}
                            </Link>
                        </Nav.Link>
                    )
                })}
            </Nav>
        </div>
    )
}

export default SideBar