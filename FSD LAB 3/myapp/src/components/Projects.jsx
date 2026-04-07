import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React and Node.js',
      image: 'https://via.placeholder.com/300x200?text=E+Commerce',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task manager with real-time updates',
      image: 'https://via.placeholder.com/300x200?text=Task+Manager',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather application using OpenWeather API',
      image: 'https://via.placeholder.com/300x200?text=Weather+App',
    },
    {
      id: 4,
      title: 'Social Media Feed',
      description: 'Interactive social platform with user authentication',
      image: 'https://via.placeholder.com/300x200?text=Social+Feed',
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'Content management system for blogging',
      image: 'https://via.placeholder.com/300x200?text=Blog+Platform',
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Responsive portfolio showcasing my projects',
      image: 'https://via.placeholder.com/300x200?text=Portfolio',
    },
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5 fw-bold">My Projects</h2>
        <Row className="g-4">
          {projects.map((project) => (
            <Col key={project.id} lg={4} md={6} xs={12}>
              <Card className="project-card h-100 shadow-sm transition-effect">
                <Card.Img 
                  variant="top" 
                  src={project.image} 
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">{project.title}</Card.Title>
                  <Card.Text className="text-muted">{project.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white border-top">
                  <button className="btn btn-sm btn-outline-primary">
                    Learn More
                  </button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
