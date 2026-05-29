const projects = [
  {
    name: "SoulShare Blog",
    description:
      "A full-stack blog post management website for creating, editing, and sharing posts.",
    status: "Live project",
    registerUrl: "https://soulshare-blog.vercel.app/",
    accent: "#0f766e",
  },
  {
    name: "Budget Tracker",
    description:
      "A clean personal finance dashboard for tracking spending categories and monthly saving targets.",
    status: "Private beta",
    registerUrl: "https://example.com/register-budget-tracker",
    accent: "#d35f4c",
  },
  {
    name: "Portfolio Builder",
    description:
      "A simple frontend tool for turning project notes, screenshots, and links into a shareable portfolio page.",
    status: "Waitlist available",
    registerUrl: "https://example.com/register-portfolio-builder",
    accent: "#c78c24",
  },
];

const projectGrid = document.querySelector("#projectGrid");

projectGrid.innerHTML = projects
  .map(
    (project, index) => `
      <article class="project-card">
        <span class="project-icon" style="--icon-bg: ${project.accent}">
          ${index + 1}
        </span>
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <span class="meta">${project.status}</span>
        <div class="card-actions">
          <a class="button primary" href="${project.registerUrl}" target="_blank" rel="noreferrer">
            View Project
          </a>
        </div>
      </article>
    `,
  )
  .join("");
