import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  
`;

const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(Link)`
  margin-left: 2rem;
  text-decoration: none;
  color: #000000ff;
  font-weight: 500;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #000000ff;
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: flex;
  }
  
  span {
    width: 25px;
    height: 3px;
    background: #000000ff;
    margin-bottom: 4px;
    border-radius: 5px;
    transition: all 0.3s ease;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: white;
    padding: 2rem;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`;

const MobileNavItem = styled(Link)`
  margin-bottom: 1.5rem;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 1.2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Nav>
      <Logo to="/"></Logo>
      
      <NavItems>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </NavItems>
      
      <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </MobileMenuButton>
      
      {isOpen && (
        <MobileMenu
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <MobileNavItem to="/" onClick={() => setIsOpen(false)}>Home</MobileNavItem>
          <MobileNavItem to="/projects" onClick={() => setIsOpen(false)}>Projects</MobileNavItem>
          <MobileNavItem to="/about" onClick={() => setIsOpen(false)}>About</MobileNavItem>
          <MobileNavItem to="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavItem>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;