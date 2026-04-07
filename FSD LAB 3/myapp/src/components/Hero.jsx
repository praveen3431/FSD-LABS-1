import { Container, Badge } from 'react-bootstrap';

export default function Hero() {
  return (
    <section id="hero" className="py-5 text-center">
      <Container>
        <Badge bg="info" className="mb-3">
          Welcome
        </Badge>
        <h1 className="display-4 fw-bold mb-4">
          Hi, I'm a Full-Stack Developer
        </h1>
        <p className="lead text-muted mb-4">
          I create beautiful, responsive web applications with modern technologies.
          I specialize in React, Bootstrap, and building scalable web solutions.
        </p>
        <button className="btn btn-primary btn-lg">
          View My Work
        </button>
      </Container>
    </section>
  );
}
