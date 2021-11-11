import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'
function Header() {
    return(
        <div>
            
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand className="fontg" href="#home">R-Ecome</Navbar.Brand>
                <Nav className="me-auto navbar_warpper">

                    <Link className="navbar_warpper" to="/ajouter">AJOOUTER</Link>
                    <Link className="navbar_warpper" to="/Modifier">MODIFIER</Link>
                    <Link className="navbar_warpperL" to="/login">LOGIN</Link>
                    <Link className="navbar_warpperR" to="/register">REGISTRE</Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
    
}
export default Header