import React from 'react';
import ProjectDetail from '../../components/ProjectDetail';

const RestaurantProject = () => {
  const projectData = {
    title: "Gourmet Haven Restaurant Website",
    category: "Web Development",
    description: "A fully responsive restaurant website designed to showcase the menu, ambiance, and reservation system for Gourmet Haven, an upscale dining establishment. The website features a modern, elegant design that reflects the restaurant's sophisticated atmosphere while providing an intuitive user experience for customers.",
    heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    features: [
      "Interactive menu with filtering options by dietary preferences",
      "Online reservation system with real-time availability",
      "Photo gallery showcasing the restaurant's interior and signature dishes",
      "Chef profiles and restaurant story section",
      "Contact form and Google Maps integration",
      "Mobile-responsive design for optimal viewing on all devices",
      "Special events and promotions section"
    ],
    technologies: [
      "HTML5", "CSS3", "JavaScript", "React", "Styled Components", "Framer Motion", 
      "Firebase", "Google Maps API", "Responsive Design"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80",
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ],
    liveUrl: "/apps/restaurant/index.html"
  };

  return <ProjectDetail project={projectData} />;
};

export default RestaurantProject;