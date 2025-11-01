import React from 'react';
import ProjectDetail from '../../components/ProjectDetail';

const EcommerceProject = () => {
  const projectData = {
    title: "ModernWear E-commerce Landing Page",
    category: "Web Design & Development",
    description: "A high-converting e-commerce landing page for ModernWear, a contemporary fashion brand. This project focused on creating an engaging, visually appealing landing page that effectively showcases the brand's products while optimizing for conversions and user engagement.",
    heroImage: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    features: [
      "Hero section with featured product carousel",
      "Product category navigation with filtering options",
      "Featured collections with parallax scrolling effects",
      "Customer testimonials and reviews section",
      "Newsletter subscription with discount offer",
      "Social media integration and sharing capabilities",
      "Mobile-first responsive design with touch-friendly elements"
    ],
    technologies: [
      "HTML5", "CSS3", "JavaScript", "React", "Redux", "Styled Components", 
      "Framer Motion", "Responsive Design", "Shopify Integration"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1560243563-062bfc001d68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1571867424488-4565932edb41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1614771637369-ed94441a651a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ],
    liveUrl: "/apps/ecommerce/index.html"
  };

  return <ProjectDetail project={projectData} />;
};

export default EcommerceProject;