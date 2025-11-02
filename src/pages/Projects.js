import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectsSection = styled.section`
  padding: 5rem 2rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: #333;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: white;
  border-radius: 0;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  
  @media (max-width: 768px) {
    height: 180px;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #000;
`;

const ProjectCategory = styled.span`
  display: inline-block;
  background-color: #f5f5f5;
  padding: 0.3rem 0.8rem;
  border-radius: 0;
  font-size: 0.8rem;
  margin-bottom: 1rem;
  color: #000;
`;

const ProjectDescription = styled.p`
  color: #333;
  margin-bottom: 1.5rem;
`;

const ProjectLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px solid #000;
  
  &:hover {
    opacity: 0.7;
  }
`;

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Gourmet Haven Restaurant Website',
      category: 'Web Development',
      description: 'A fully responsive restaurant website designed to showcase the menu, ambiance, and reservation system for an upscale dining establishment.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      link: '/projects/restaurant'
    },
    {
      id: 2,
      title: 'ModernWear E-commerce Landing Page',
      category: 'Web Design & Development',
      description: 'A high-converting e-commerce landing page for a contemporary fashion brand with engaging visuals and optimized user experience.',
      image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      link: '/projects/ecommerce'
    },
    {
      id: 3,
      title: 'Luminance Photography Portfolio',
      category: 'Web Design & Photography',
      description: 'A stunning photography portfolio landing page designed to showcase professional photography work with a focus on visual storytelling.',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80',
      link: '/projects/photography'
    }
  ];

  return (
    <ProjectsSection>
      <Container>
        <Title>My Projects</Title>
        <ProjectsGrid>
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <ProjectCategory>{project.category}</ProjectCategory>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectLink to={project.link}>View Project</ProjectLink>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;