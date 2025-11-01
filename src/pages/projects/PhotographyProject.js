import React from 'react';
import ProjectDetail from '../../components/ProjectDetail';

const PhotographyProject = () => {
  const projectData = {
    title: "Luminance Photography Portfolio",
    category: "Web Design & Photography",
    description: "A stunning photography portfolio landing page designed to showcase the work of Luminance Photography, a professional photography studio specializing in landscape and portrait photography. The site emphasizes visual storytelling with a minimalist design that puts the focus on the imagery.",
    heroImage: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
    features: [
      "Fullscreen image gallery with smooth transitions",
      "Category filtering for different photography styles",
      "Masonry grid layout for optimal image display",
      "Lightbox functionality for detailed image viewing",
      "Client testimonials and project descriptions",
      "Contact form for booking inquiries",
      "Instagram feed integration"
    ],
    technologies: [
      "HTML5", "CSS3", "JavaScript", "React", "Styled Components", 
      "Framer Motion", "Masonry Layout", "Lightbox", "Responsive Design"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1510797215324-95aa89f43c33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1435&q=80",
      "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      "https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80"
    ],
    liveUrl: "/apps/photography/index.html"
  };

  return <ProjectDetail project={projectData} />;
};

export default PhotographyProject;