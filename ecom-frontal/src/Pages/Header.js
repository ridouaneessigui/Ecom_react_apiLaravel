import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link,useHistory } from "react-router-dom";
function Header() {
    let user=JSON.parse(localStorage.getItem('user-info'))
    const history = useHistory()
    function Dec() {
        localStorage.clear();
        history.push('/register')
    }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="fontg" href="/">
            R-Ecome
          </Navbar.Brand>
          <Nav className="me-auto navbar_warpper">
            {
            localStorage.getItem('user-info')  ?
              <strong>
                <Link className="navbar_warpper" to="/">Liste des produits</Link>
                <Link className="navbar_warpper" to="/Modifier/M">MODIFIER</Link>
                <Link className="navbar_warpper" to="/ajouter">AJOUTER</Link>
              </strong>
            :
              <strong>
                <Link className="navbar_warpper" to="/login">LOGIN</Link>
                <Link className="navbar_warpper" to="/register">REGISTRE</Link>
              </strong>
            }
          </Nav>
          {localStorage.getItem('user-info') ?
        <Nav>
            <NavDropdown title={user && user.nom_complet}>
                <NavDropdown.Item onClick={Dec}> Deconnexion</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        :null
        }
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;
