import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar className="header">
        <Container>
          <Navbar.Brand>
            <Link className="nav-link" to="/">
              Resonate
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Contacts
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
