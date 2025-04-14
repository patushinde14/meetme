"use strict";

// Grab elements from the DOM
const projectContainer = document.getElementsByClassName("projects-container");

// Major Projects Array
const projects = [
  {
    title: "Photography Website",
    description:
      "A modern photography website crafted using HTML, CSS, and JavaScript, showcasing immersive galleries and stunning visuals. Built for photographers who want to present their portfolio with elegance and interactivity. Fully responsive design ensures a seamless viewing experience across all devices.",
    hasLiveLink: true,
    hasCheckRepositoryButton: false,
    liveLink: "https://graphicsphotostudio.netlify.app/",
    technologiesUsed: ["HTML", "CSS", "JS"],
    icons: ["icomoon-free:html-five", "vscode-icons:file-type-scss", "mdi:language-javascript"],
    screenshotSrc: "./images/Photography.jpeg",
  },
  {
    title: "Expense Tracker",
    description:
      "Expense Tracker is a clean and user-friendly web application built using HTML, CSS, and JavaScript that helps users manage and track their daily expenses effortlessly. With an intuitive interface, users can add income, expenses, and view their balance in real-time.",
    hasLiveLink: true,
    hasCheckRepositoryButton: false,
    liveLink: "https://moneymap0.netlify.app/",
    technologiesUsed: ["HTML", "CSS", "JS"],
    icons: ["icomoon-free:html-five", "vscode-icons:file-type-scss", "mdi:language-javascript"],
    screenshotSrc: "./images/Expense.jpeg",
  },
  {
    title: "Cafe Shop Management System",
    description:
      "A stylish and responsive cafe website built with HTML and CSS, designed to brew a perfect blend of visuals and vibes—ideal for showcasing menus, ambiance, and contact info with a warm, welcoming touch.",
    hasLiveLink: true,
    hasCheckRepositoryButton: false,
    liveLink: "https://hotcupofctrl.netlify.app/",
    technologiesUsed: ["HTML", "CSS"],
    icons: ["icomoon-free:html-five", "vscode-icons:file-type-scss", "mdi:language-javascript"],
    screenshotSrc: "./images/cafeshop.jpeg",
  },

  {
    title: "Student Management System",
    description:
      "A Spring Boot-based Student Management System using Hibernate and MySQL for performing CRUD operations on student data, offering efficient and scalable database interaction.",
    hasLiveLink: false,
    hasCheckRepositoryButton: false,
    technologiesUsed: ["Java", "Spring Boot", "Hibernate", "MySQL", "HTML", "CSS"],
    icons: ["simple-icons:java", "simple-icons:springboot", "simple-icons:hibernate", "la:mysql", "icomoon-free:html-five", "vscode-icons:file-type-css"],
    screenshotSrc: "./images/Student_Management.jpeg",
  },

  {
    title: "Inventory Management System",
    description:
      "A Spring Boot-based Inventory Management System using Hibernate and MySQL to efficiently handle stock tracking, product updates, and inventory-level monitoring through seamless CRUD operations.",
    hasLiveLink: false,
    hasCheckRepositoryButton: false,
    technologiesUsed: ["Java", "Spring Boot", "Hibernate", "MySQL", "HTML", "CSS"],
    icons: ["simple-icons:java", "simple-icons:springboot", "simple-icons:hibernate", "la:mysql", "icomoon-free:html-five", "vscode-icons:file-type-css"],
    screenshotSrc: "./images/Inventory.jpeg",
  },

  {
    title: "Hostel Management System",
    description:
      "A modern Hostel Management System developed using HTML, CSS, and JavaScript, designed to streamline hostel operations with user-friendly interfaces and interactive features. It allows efficient management of room allocations, student records, and bookings. Fully responsive design ensures smooth access and functionality across all devices",
    hasLiveLink: false,
    hasCheckRepositoryButton: false,
    technologiesUsed: ["HTML", "CSS", "JS"],
    icons: ["icomoon-free:html-five", "vscode-icons:file-type-scss", "mdi:language-javascript"],
    screenshotSrc: "./images/hostel.jpeg",
  },

];


 

// Function to render Major Projects
(function () {
  let htmlCode = ``;
  projects.forEach((project, index) => {
    const aosAttr = index % 2 === 0 ? "fade-left" : "fade-right";

    const liveBtn = project.hasLiveLink
      ? `<button class="live-link" aria-label="Live Link"><a target="_blank" rel="noopener" href="${project.liveLink}"><span class="iconify" data-inline="false" data-icon="mdi:web"></span></a></button>`
      : ``;

    const repoBtn = project.hasCheckRepositoryButton
      ? `<button class="check-repo" aria-label="Github Link"><a target="_blank" rel="noopener" href="${project.githubLink}">Check Repository</a></button>`
      : ``;

    let techIcons = ``;
    project.technologiesUsed.forEach((tech, i) => {
      techIcons += `<div title="${tech}" class="technology-used">
                      <span class="iconify" data-inline="false" data-icon="${project.icons[i]}"></span>
                    </div>`;
    });

    htmlCode += `<div class="project-card" data-aos="${aosAttr}" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <header class="screenshot-container">
          <img src="${project.screenshotSrc}" alt="Screenshot of ${project.title}">
        </header>
        <main>
          <h1>${project.title}</h1>
          <p>${project.description}</p>
        </main>
        <footer class="card-footer">
          <div class="left-side">
            ${repoBtn}
            ${liveBtn}
          </div>
          <div class="right-side">
            <div class="icons-container">${techIcons}</div>
          </div>
        </footer>
      </div>`;
  });

  // Inject into major project container
  projectContainer[0].innerHTML += htmlCode;
})();
