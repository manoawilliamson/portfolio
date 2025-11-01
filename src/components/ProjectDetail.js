import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectContainer = styled.div`
  padding: 5rem 2rem;
`;

const ProjectContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-bottom: 2rem;
  color: #333;
  font-weight: 500;
  text-decoration: none;
  
  &:hover {
    color: #6e8efb;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Category = styled.span`
  display: inline-block;
  background-color: #f0f0f0;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: 1rem;
  margin-bottom: 2rem;
  color: #666;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: #666;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin: 3rem 0 1.5rem;
  color: #333;
`;

const FeaturesList = styled.ul`
  margin-bottom: 2rem;
  padding-left: 1.5rem;
  
  li {
    margin-bottom: 0.8rem;
    color: #666;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const TechItem = styled.span`
  background-color: #f5f5f5;
  color: #000;
  padding: 0.5rem 1rem;
  border-radius: 0;
  font-size: 0.9rem;
  font-weight: 500;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
  padding: 1rem 2rem;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  margin-top: 2rem;
`;

const ProjectDetail = ({ project }) => {
  return (
    <ProjectContainer>
      <ProjectContent>
        <BackButton to="/projects">
          <i className="fas fa-arrow-left" style={{ marginRight: '0.5rem' }}></i> Back to Projects
        </BackButton>
        
        <HeroImage src={project.heroImage} alt={project.title} />
        
        <Title>{project.title}</Title>
        <Category>{project.category}</Category>
        
        <Description>{project.description}</Description>
        
        <SectionTitle>Project Features</SectionTitle>
        <FeaturesList>
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </FeaturesList>
        
        <SectionTitle>Technologies Used</SectionTitle>
        <TechStack>
          {project.technologies.map((tech, index) => (
            <TechItem key={index}>{tech}</TechItem>
          ))}
        </TechStack>
        
        <SectionTitle>Project Gallery</SectionTitle>
        <Gallery>
          {project.gallery.map((image, index) => (
            <GalleryImage key={index} src={image} alt={`${project.title} - Image ${index + 1}`} />
          ))}
        </Gallery>
        
        {project.liveUrl && (
          <CTAButton 
            as="a"
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Live Project
          </CTAButton>
        )}
      </ProjectContent>
    </ProjectContainer>
  );
};

export default ProjectDetail;