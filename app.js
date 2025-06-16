// Projects data - easily add new projects here
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with cart, payment processing, and admin dashboard.",
    category: "web",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image:
      "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Productivity application for managing tasks with drag & drop interface and real-time updates.",
    category: "mobile",
    tags: ["React Native", "Firebase", "Redux"],
    image:
      "https://images.unsplash.com/photo-1586282391129-76a746f25aa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 3,
    title: "Finance Dashboard",
    description:
      "Interactive dashboard for visualizing financial data with charts and customizable widgets.",
    category: "web",
    tags: ["Vue.js", "D3.js", "Express", "Chart.js"],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
  },
  {
    id: 4,
    title: "Travel Booking UI",
    description:
      "Modern UI design for a travel booking application with smooth animations and transitions.",
    category: "design",
    tags: ["Figma", "UI Design", "UX Research", "Prototyping"],
    image:
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 5,
    title: "Health Tracker Mobile App",
    description:
      "Mobile application for tracking health metrics, workouts, and nutrition plans.",
    category: "mobile",
    tags: ["Flutter", "Firebase", "Health API", "Bloc"],
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 6,
    title: "Real Estate Platform",
    description:
      "Comprehensive platform for property listings with advanced search and virtual tours.",
    category: "web",
    tags: ["React", "Google Maps API", "Node.js", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
];

// Function to render projects
function renderProjects(filter = "all") {
  const container = document.getElementById("projects-container");
  container.innerHTML = "";

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  filteredProjects.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.className = "project-card";
    projectElement.innerHTML = `
                    <div class="project-img">
                        <img src="${project.image}" alt="${project.title}">
                    </div>
                    <div class="project-info">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="project-tags">
                            ${project.tags
                              .map(
                                (tag) =>
                                  `<span class="project-tag">${tag}</span>`
                              )
                              .join("")}
                        </div>
                    </div>
                `;
    container.appendChild(projectElement);
  });
}

// Initialize projects
document.addEventListener("DOMContentLoaded", function () {
  renderProjects();

  // Filter functionality
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      this.classList.add("active");

      // Filter projects
      const filter = this.getAttribute("data-filter");
      renderProjects(filter);
    });
  });

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: "smooth",
      });

      // Close mobile menu if open
      navLinks.classList.remove("active");
    });
  });

  // Form submission handling
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      // In a real implementation, you would handle form submission to your backend
      // This example uses Formspree as mentioned in the form action
      // You can replace with your own endpoint

      // Show success message
      e.preventDefault();
      alert("Thank you for your message! I will get back to you soon.");
      contactForm.reset();
    });
  }

  // Back to top button
  const backToTop = document.querySelector(".back-to-top");
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTop.style.display = "inline-block";
    } else {
      backToTop.style.display = "none";
    }
  });
});
