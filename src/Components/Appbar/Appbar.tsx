import { Badge } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Appbar() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <h4>My Store</h4>
        </Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Button variant="primary">
            Cart: <Badge>0</Badge>
          </Button>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
        <Button variant="primary">Login</Button>
        <Button variant="primary">Regester</Button>
      </Container>
    </Navbar>
  );
}

export default Appbar;
