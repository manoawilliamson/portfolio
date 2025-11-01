import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #fff;
  padding: 3rem 0;
  text-align: center;
`;

const Copyright = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  margin: 0 1rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #0070f3;
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </SocialLink>
        <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </SocialLink>
        <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </SocialLink>
      </SocialLinks>
      <Copyright>© {year} Manoa Williamson. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;