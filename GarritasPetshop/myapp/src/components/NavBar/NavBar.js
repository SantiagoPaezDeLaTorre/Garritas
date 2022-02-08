import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div className="navbarContainer">
      <Navbar bg="light" expand="lg" className="navegacion">
        <Container>
          <Navbar.Brand href="#home" className="nav-link">
            GARRITAS PETSHOP
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navbar-toggler"
          />
          <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="nav-link">
                INICIO
              </Nav.Link>
              <NavDropdown
                className="nav-link"
                title="PERROS"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Estética e higiene
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Juguetes y snacks
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Alimentos
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="nav-link"
                title="GATOS"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Estética e higiene
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Juguetes y snacks
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Alimentos
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="nav-link"
                title="SERVICIOS"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Guardería
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Peluqueria canina
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Atención veterinaria
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link" className="nav-link">
                CONTACTO
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <CartWidget />
    </div>
  );
};

export default NavBar;
