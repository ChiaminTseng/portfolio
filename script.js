const projects = [
  {
    name: "SoulShare Blog",
    description:
      "A full-stack blog post management website for creating, editing, and sharing posts.",
    status: "Live project",
    registerUrl: "https://soulshare-blog.vercel.app/",
    accent: "#ff7437",
    icon: "bi bi-person-arms-up",
  },
  {
    name: "FairShare",
    description:
      "A React and TypeScript expense-splitting app for groups, with balances, settlement suggestions, and receipt scanning.",
    status: "Live project",
    registerUrl: "https://fairshare-6z2.pages.dev/",
    accent: "#2563eb",
    icon: "bi bi-receipt",
  },
  {
    name: "Project 3 -- Coming Soon",
    description:
      "Coming Soon...",
    status: "Live project",
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
          ${project.icon ? `<i class="${project.icon}" style="font-size:1.4rem"></i>` : index + 1}
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
