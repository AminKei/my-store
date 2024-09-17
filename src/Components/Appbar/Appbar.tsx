import { Badge } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Appbar() {
  return (
    <Navbar expand="lg" >
      <Container fluid>
        <Navbar.Brand href="#">
          <h4 onClick={()=>document.location = "/"}>My Store</h4>
        </Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Button variant="primary" onClick={()=>document.location = "/cart"}>
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
        <Button variant="primary" onClick={()=>document.location = "/login"}>Login</Button>
        <Button variant="primary" onClick={()=>document.location = "/register"}>Regester</Button>
      </Container>
    </Navbar>
  );
}

export default Appbar;
