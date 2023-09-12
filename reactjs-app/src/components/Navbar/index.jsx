import React from "react"
import { 
    Navbar as BootstrapNavbar, 
    Nav, 
    Container, 
    Button, 
    Stack 
} from "react-bootstrap"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import styles from "./styles.module.scss"

const Navbar = (props) => {
    return (
        <div className={styles.navbarContainer} >
            <BootstrapNavbar 
                className={`${styles.fixed} p-2`} 
                bg="light" 
                fixed="top"
            >
                <Button 
                    onClick={() => props.visibleSidebar((visible) => !visible)}
                >
                    <FontAwesomeIcon icon={faBars} />
                </Button>

                <BootstrapNavbar.Brand href="#" className="ms-2">
                    Coodesh Challenge
                </BootstrapNavbar.Brand>
                
                    <Container className="justify-content-center">
                        <Stack gap={2} direction={'horizontal'}>
                        </Stack>
                    </Container>
                    <Nav>
                        <Nav.Link >
                            <Link to={'/'} 
                                className="link-secondary link-offset-2 link-underline link-underline-opacity-0"
                            >
                                Login
                            </Link>
                        </Nav.Link>
                    </Nav>
            </BootstrapNavbar>
        </div>
    )
}

export default Navbar