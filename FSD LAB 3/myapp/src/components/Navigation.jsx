import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Navigation() {
  return (
    <Navbar bg="dark" expand="lg" sticky="top" className="mb-4">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold text-primary">
          MyPortfolio
        </Navbar.Brand>
        <Nav className="ms-auto d-flex gap-3">
          <Nav.Link href="#hero" className="text-light">
            Home
          </Nav.Link>
          <Nav.Link href="#projects" className="text-light">
            Projects
          </Nav.Link>
          <Nav.Link href="#contact" className="text-light">
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
