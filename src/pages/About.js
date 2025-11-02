import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AboutImageFile from '../assets/picture.JPG'; // ✅ Correct relative path

const AboutSection = styled.section`
  padding: 5rem 2rem;
  background-color: #fff;
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

// ✅ Responsive image styling
const AboutImage = styled(motion.img)`
  width: 500%;
  max-width: 500px;
  height: 500px;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  margin: 0 auto;
`;

const AboutContent = styled.div``;

const Title = styled.h2`
  font-size: clamp(2rem, 4.5vw, 2.5rem);
  margin-bottom: 1.5rem;
  color: #000;
`;

const Subtitle = styled.h3`
  font-size: clamp(1.1rem, 3.5vw, 1.5rem);
  margin-bottom: 1rem;
  color: #0a192f;
`;

const Description = styled.p`
  margin-bottom: 1.5rem;
  color: #444;
  line-height: 1.8;
`;

const SkillsSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f9f9f9;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.25rem;
  }
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
  color: #0a192f;
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #000;
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
            {/* ✅ Image now fixed to 600x800 */}
            <AboutImage
              src={AboutImageFile}
              alt="Manoa Williamson"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            />

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

      {/* Skills Section */}
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
