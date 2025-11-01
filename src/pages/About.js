import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 5rem 2rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const AboutContent = styled.div``;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #6e8efb;
`;

const Description = styled.p`
  margin-bottom: 1.5rem;
  color: #666;
  line-height: 1.8;
`;

const SkillsSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f9f9f9;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCard = styled(motion.div)`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #6e8efb;
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const SkillDescription = styled.p`
  color: #666;
`;

const About = () => {
  return (
    <>
      <AboutSection>
        <Container>
          <AboutGrid>
            <AboutImage src="https://via.placeholder.com/600x800" alt="Manoa Williamson" />
            <AboutContent>
              <Title>About Me</Title>
              <Subtitle>Web Designer & Developer</Subtitle>
              <Description>
                Hello! I'm Manoa Williamson, a passionate web designer and developer with over 5 years of experience creating beautiful, functional websites and applications.
              </Description>
              <Description>
                I specialize in creating responsive, user-friendly interfaces that not only look great but also provide an exceptional user experience. My approach combines creative design thinking with technical expertise to deliver solutions that exceed client expectations.
              </Description>
              <Description>
                When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or enjoying outdoor activities to recharge my creative energy.
              </Description>
            </AboutContent>
          </AboutGrid>
        </Container>
      </AboutSection>
      
      <SkillsSection>
        <Container>
          <Title style={{ textAlign: 'center', marginBottom: '3rem' }}>My Skills</Title>
          <SkillsGrid>
            <SkillCard whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
              <SkillIcon><i className="fas fa-code"></i></SkillIcon>
              <SkillTitle>Web Development</SkillTitle>
              <SkillDescription>
                HTML, CSS, JavaScript, React, Node.js, Express, MongoDB
              </SkillDescription>
            </SkillCard>
            
            <SkillCard whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
              <SkillIcon><i className="fas fa-paint-brush"></i></SkillIcon>
              <SkillTitle>UI/UX Design</SkillTitle>
              <SkillDescription>
                Figma, Adobe XD, Sketch, User Research, Wireframing, Prototyping
              </SkillDescription>
            </SkillCard>
            
            <SkillCard whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
              <SkillIcon><i className="fas fa-mobile-alt"></i></SkillIcon>
              <SkillTitle>Responsive Design</SkillTitle>
              <SkillDescription>
                Mobile-First Approach, Cross-Browser Compatibility, Adaptive Layouts
              </SkillDescription>
            </SkillCard>
            
            <SkillCard whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
              <SkillIcon><i className="fas fa-server"></i></SkillIcon>
              <SkillTitle>Backend Development</SkillTitle>
              <SkillDescription>
                API Development, Database Design, Authentication, Cloud Services
              </SkillDescription>
            </SkillCard>
          </SkillsGrid>
        </Container>
      </SkillsSection>
    </>
  );
};

export default About;