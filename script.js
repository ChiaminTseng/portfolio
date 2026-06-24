const projects = [
  {
    name: "SoulShare Blog",
    description:
      "A full-stack blog post management website for creating, editing, and sharing posts.",
    status: "Live project",
    registerUrl: "https://soulshare-blog.vercel.app/",
    accent: "#ff7437",
    icon: "bi bi-person-arms-up",
    tags: ["Full-stack", "Blog CMS", "Deployment"],
  },
  {
    name: "FairShare",
    description:
      "A React and TypeScript app for recording shared expenses, tracking balances, and settling costs with others, with OCR-assisted receipt capture.",
    status: "Live project",
    registerUrl: "https://fairshare-6z2.pages.dev/",
    accent: "#b84f00",
    icon: "bi bi-cash-coin",
    tags: ["React", "TypeScript", "OCR flow"],
  },
  {
    name: "Perth CPI Tracker",
    description:
      "A data engineering dashboard that processes ABS CPI data, filters Perth-only series, calculates monthly and annual changes, and visualises cost-of-living trends.",
    status: "Live on Cloudflare",
    registerUrl: "https://perth-cost-tracker.chiamintwts.workers.dev/",
    accent: "#0f766e",
    icon: "bi bi-graph-up-arrow",
    tags: ["Python", "pandas", "Chart.js"],
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
        ${
          project.tags
            ? `<div class="project-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>`
            : ""
        }
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
