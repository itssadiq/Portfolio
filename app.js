// Projects Data
const projects = [
  {
    title: "SHT International",
    description:
      "WordPress website built for a supplement brand, focused on clean design, responsiveness, and product visibility.",
    image: "assets/sht-international.jpg",
    technologies: ["WordPress"],
    link: "https://shtinternational.com/",
  },
  {
    title: "Students Dashboard",
    description:
      "A students dashboard where students can sign up create accounts, login, submit applications and can view thier application's status. Applications data will be saved in Supabase",
    image: "assets/students-dashboard.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "Supabase"],
    link: "https://itssadiq.github.io/Students-Dashboard/index.html",
  },
  {
    title: "Admin Dashboard",
    description:
      "Admin Dashboard featuring Supabase as backend. Admins can view and update students applications and can update status. Master Admin has a right to add/delte other admins.",
    image: "assets/admin-dashboard.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "Supabase"],
    link: "https://itssadiq.github.io/Admin-Dashboard/index.html",
  },
  {
    title: "Tech Web",
    description: "A fully responsive website built with collaboration.",
    image: "assets/Tech-web.jpg",
    technologies: ["HTML", "CSS", "Bootstrap", "Figma"],
    link: "https://tech-joint.netlify.app/",
  },
  {
    title: "Notes App",
    description: "Notes App featuring CRUD operations with localStorage.",
    image: "assets/Notes-App.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "DayJS"],
    link: "https://itssadiq.github.io/Notes-App/",
  },
  {
    title: "Todo List App",
    description:
      "Todo List app built for mobiles only with bundles of features like double-tap for delete/mark complete, automatic category generation and much more.",
    image: "assets/Todo-list-app.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "DayJS"],
    link: "https://itssadiq.github.io/Todo-list-app/",
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
// const contactForm = document.getElementById("contactForm");

// contactForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   alert("Thank you for your message! I will get back to you soon.");
//   contactForm.reset();
// });

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
