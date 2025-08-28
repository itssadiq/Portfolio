// Projects Data
const projects = [
  {
    title: "shtinternational.com",
    description:
      "Developed a live E-Commerce site using WordPress and WooCommerce, ensuring mobile responsiveness and overall user experience with secure checkout.",
    image: "assets/sht-international.jpg",
    technologies: ["WordPress"],
    link: "https://shtinternational.com/",
  },
  {
    title: "unzil.com",
    description:
      "A WordPress based live E-Commerce website with responsive design, product listings, cart functionality and secure checkout, enhancing the client's online presence and customer experience.",
    image: "assets/unzil.jpg",
    technologies: ["WordPress"],
    link: "https://unzil.com/",
  },
  {
    title: "Students Dashboard",
    description:
      "Developed a web platform enabling students to sign up, log in, submit applications, and track their application status in real-time. Integrated with Supabase for secure data storage and management.",
    image: "assets/students-dashboard.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "Supabase"],
    link: "https://itssadiq.github.io/Students-Dashboard/index.html",
  },
  {
    title: "Admin Dashboard",
    description:
      "Built a robust admin panel powered by Supabase, enabling admins to view and update student applications and statuses. Master Admin has exclusive permissions to add or remove other admins, ensuring secure and efficient management.",
    image: "assets/admin-dashboard.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "Supabase"],
    link: "https://itssadiq.github.io/Admin-Dashboard/index.html",
  },
  {
    title: "Tech Web",
    description:
      "A fully responsive website built in collaboration with Talha(Fellow Developer).",
    image: "assets/Tech-web.jpg",
    technologies: ["HTML", "CSS", "Bootstrap", "Figma"],
    link: "https://tech-joint.netlify.app/",
  },
  {
    title: "Notes App",
    description:
      "Developed a Notes application with comprehensive note management features, allowing users to create, view and delete notes. Utilized localStorage for seamless data persistence in the browser.",
    image: "assets/Notes-App.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "DayJS"],
    link: "https://itssadiq.github.io/Notes-App/",
  },
  {
    title: "Todo List App",
    description:
      "Developed a mobile-optimized Todo List app with advanced features, including double-tap to delete or mark tasks complete and dynamic category generation. Built using HTML, CSS, and JavaScript for a seamless, feature-rich user experience.",
    image: "assets/Todo-list-app.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "DayJS"],
    link: "https://itssadiq.github.io/Todo-list-app/",
  },
  {
    title: "Weather App",
    description:
      "A fully responsive web application built using HTML, CSS, and JavaScript. It provides users with real-time weather data, including an 8-hour forecast for the current day and a 7-day outlook. Designed with a clean, user-friendly interface, the app adapts seamlessly across mobile and desktop devices. ",
    image: "assets/Weather-app.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "Weather API"],
    link: "https://weather-app-black-theta-59.vercel.app/",
  },
  {
    title: "Quiz App",
    description:
      "A fully responsive quiz application built with HTML, CSS, and JavaScript. It features multiple quiz categories, dynamic question loading using a free quiz API, and an intuitive user interface for an engaging experience across all devices.",
    image: "assets/Quiz-app.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "Quiz API"],
    link: "https://quizz-app-six-theta.vercel.app/",
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
