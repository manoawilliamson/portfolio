import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  padding: 5rem 2rem;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #333;
`;

const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 3rem;
  color: #666;
  font-size: 1.2rem;
`;

const ContactForm = styled.form`
  background-color: white;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(135deg, #000000ff, #69676bff);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
`;

const Contact = () => {
  return (
    <ContactSection>
      <Container>
        <Title>Get In Touch</Title>
        <Subtitle>Have a project in mind? Let's work together!</Subtitle>
        
        <ContactForm>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" placeholder="Your Name" />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Your Email" />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input type="text" id="subject" placeholder="Subject" />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Your Message"></Textarea>
          </FormGroup>
          
          <SubmitButton
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
          >
            Send Message
          </SubmitButton>
        </ContactForm>
      </Container>
    </ContactSection>
  );
};

export default Contact;