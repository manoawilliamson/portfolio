// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // Menu tabs
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuSections = document.querySelectorAll('.menu-section');
    
    // Reservation form
    const reservationForm = document.querySelector('#reservation-form');
    
    // Scroll event for navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            navbar.style.padding = '0.7rem 5%';
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            navbar.style.padding = '1rem 5%';
        }
    });
    
    // Mobile menu toggle
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Animate hamburger to X
        const bars = document.querySelectorAll('.bar');
        if (menuToggle.classList.contains('active')) {
            bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });
    
    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                menuToggle.click();
            }
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Menu tabs functionality
    menuTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            menuTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show corresponding menu section
            const targetCategory = this.getAttribute('data-category');
            
            menuSections.forEach(section => {
                if (section.getAttribute('data-category') === targetCategory) {
                    section.style.display = 'grid';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });
    
    // Initialize menu (show first category by default)
    if (menuTabs.length > 0) {
        menuTabs[0].click();
    }
    
    // Reservation form submission
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const phone = document.querySelector('#phone').value;
            const date = document.querySelector('#date').value;
            const time = document.querySelector('#time').value;
            const guests = document.querySelector('#guests').value;
            const message = document.querySelector('#message').value;
            
            // Simple validation
            if (!name || !email || !phone || !date || !time || !guests) {
                alert('Please fill in all required fields');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For demo purposes, we'll just show a success message
            alert(`Thank you, ${name}! Your reservation for ${guests} guests on ${date} at ${time} has been received. We'll contact you at ${email} or ${phone} to confirm your reservation.`);
            
            // Reset form
            reservationForm.reset();
        });
    }
    
    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    };
    
    // Initial check for elements in view
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Gallery image modal
    const galleryItems = document.querySelectorAll('.gallery-item');
    const body = document.body;
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').getAttribute('src');
            
            // Create modal elements
            const modal = document.createElement('div');
            modal.classList.add('gallery-modal');
            
            const modalContent = document.createElement('div');
            modalContent.classList.add('gallery-modal-content');
            
            const modalImg = document.createElement('img');
            modalImg.setAttribute('src', imgSrc);
            
            const closeBtn = document.createElement('span');
            closeBtn.classList.add('gallery-modal-close');
            closeBtn.innerHTML = '&times;';
            
            // Append elements
            modalContent.appendChild(modalImg);
            modalContent.appendChild(closeBtn);
            modal.appendChild(modalContent);
            body.appendChild(modal);
            
            // Prevent body scrolling
            body.style.overflow = 'hidden';
            
            // Close modal on click
            modal.addEventListener('click', function() {
                body.removeChild(modal);
                body.style.overflow = 'auto';
            });
            
            // Prevent propagation when clicking on image
            modalContent.addEventListener('click', function(e) {
                e.stopPropagation();
            });
            
            // Close button functionality
            closeBtn.addEventListener('click', function() {
                body.removeChild(modal);
                body.style.overflow = 'auto';
            });
        });
    });
    
    // Add CSS for gallery modal
    const style = document.createElement('style');
    style.textContent = `
        .gallery-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1001;
        }
        
        .gallery-modal-content {
            position: relative;
            max-width: 90%;
            max-height: 90%;
        }
        
        .gallery-modal-content img {
            max-width: 100%;
            max-height: 90vh;
            display: block;
        }
        
        .gallery-modal-close {
            position: absolute;
            top: -40px;
            right: 0;
            color: white;
            font-size: 40px;
            font-weight: bold;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);
});