import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  useEffect(() => {
    // Inject custom CSS for hover animations
    const style = document.createElement('style');
    style.innerHTML = `
      .project-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .project-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2) !important;
      }

      .transition-effect {
        cursor: pointer;
      }

      section {
        scroll-behavior: smooth;
      }

      body {
        scroll-behavior: smooth;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Projects />
      <Contact />
      <footer className="bg-dark text-light py-4 text-center mt-5">
        <p className="mb-0">
          &copy; 2024 My Portfolio. All rights reserved. Built with React & Bootstrap.
        </p>
      </footer>
    </div>
  );
}

export default App;
