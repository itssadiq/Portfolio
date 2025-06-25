// Projects Data
const projects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive dashboard for e-commerce analytics with real-time data visualization.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    technologies: ["React", "Chart.js", "Node.js"],
    link: "https://example.com/project1",
  },
  {
    title: "Travel Blog Platform",
    description:
      "A responsive travel blog platform with user authentication and content management.",
    image:
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    technologies: ["JavaScript", "Express", "MongoDB"],
    link: "https://example.com/project2",
  },
  {
    title: "Weather Forecast App",
    description:
      "Real-time weather application with 5-day forecast using weather API integration.",
    image:
      "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=775&q=80",
    technologies: ["JavaScript", "API Integration", "CSS"],
    link: "https://example.com/project3",
  },
  {
    title: "Task Management System",
    description:
      "A Kanban-style task management application with drag-and-drop functionality.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=815&q=80",
    technologies: ["React", "Redux", "Firebase"],
    link: "https://example.com/project4",
  },
  {
    title: "Restaurant Booking System",
    description:
      "Online reservation system for restaurants with table management and notifications.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    technologies: ["JavaScript", "Node.js", "MySQL"],
    link: "https://example.com/project5",
  },
  {
    title: "Fitness Tracker App",
    description:
      "Mobile-responsive fitness application with workout plans and progress tracking.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    technologies: ["React Native", "Firebase", "CSS"],
    link: "https://example.com/project6",
  },
];

// Generate projects
const projectsContainer = document.getElementById("projects-container");

projects.forEach((project) => {
  const projectElement = document.createElement("div");
  projectElement.className = "project-card";
  projectElement.innerHTML = `
                <img src="${project.image}" alt="${
    project.title
  }" class="project-img">
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="tech-stack">
                        ${project.technologies
                          .map((tech) => `<span class="tech">${tech}</span>`)
                          .join("")}
                    </div>
                    <a href="${
                      project.link
                    }" target="_blank" class="project-link">View Project <i class="fas fa-arrow-right"></i></a>
                </div>
            `;
  projectsContainer.appendChild(projectElement);
});

// Form submission
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message! I will get back to you soon.");
  contactForm.reset();
});

// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Navbar scroll animation
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    window.scrollTo({
      top: target.offsetTop - 80,
      behavior: "smooth",
    });
  });
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".timeline-item, .project-card").forEach((item) => {
  observer.observe(item);
});

// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Save theme preference
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
