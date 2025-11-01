import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;
  background: #f5f5f5;
  color: black;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CTA = styled(motion(Link))`
  padding: 1rem 2rem;
  background-color: black;
  color: #ffffffff;
  border: none;
  border-radius: 0;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectsSection = styled.section`
  padding: 5rem 2rem;
  background-color: #fff;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #000;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
  background-color: white;
  border-radius: 0;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #000;
`;

const ProjectDescription = styled.p`
  color: #333;
  margin-bottom: 1rem;
`;

const ProjectLink = styled.a`
  color: #000;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px solid #000;
  
  &:hover {
    opacity: 0.7;
  }
`;

const Home = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Manoa Williamson
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Web Designer & Developer
          </Subtitle>
          <CTA
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            to="/projects"
          >
            View My Work
          </CTA>
        </HeroContent>
      </HeroSection>
      
      
    </>
  );
};

export default Home;