const projects = [
  {
    name: "SoulShare Blog",
    description:
      "A full-stack blogging platform with post creation, user authentication, profile features, subscriptions, and real-time notifications.",
    registerUrl: "https://soulshare-blog.vercel.app/",
    accent: "#ff7437",
    icon: "bi bi-person-arms-up",
    tags: ["Full-stack Blog", "React", "Node.js"],
  },
  {
    name: "FairShare",
    description:
      "An expense-splitting app for shared events, balances, settlements, and receipt capture, built with a React frontend and Express API.",
    registerUrl: "https://fairshare-6z2.pages.dev/",
    accent: "#b84f00",
    icon: "bi bi-cash-coin",
    tags: ["React", "TypeScript", "OCR flow"],
  },
  {
    name: "Perth CPI Tracker",
    description:
      "A data dashboard that transforms ABS CPI workbooks into Perth-only price movement insights with trend charts and category comparisons.",
    registerUrl: "https://perth-cost-tracker.chiamintwts.workers.dev/",
    githubUrl: "https://github.com/ChiaminTseng/perth-cost-tracker",
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
        <div class="project-card-top">
          <span class="project-icon" style="--icon-bg: ${project.accent}">
            ${project.icon ? `<i class="${project.icon}" style="font-size:1.25rem"></i>` : index + 1}
          </span>
          <div class="project-actions">
            ${
              project.githubUrl
                ? `<a class="project-open" href="${project.githubUrl}" target="_blank" rel="noreferrer" aria-label="Clone ${project.name} from GitHub">
                    <i class="bi bi-github"></i>
                  </a>`
                : ""
            }
            <a class="project-open" href="${project.registerUrl}" target="_blank" rel="noreferrer" aria-label="Open ${project.name}">
              <i class="bi bi-arrow-up-right"></i>
            </a>
          </div>
        </div>
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        ${
          project.tags
            ? `<div class="project-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>`
            : ""
        }
      </article>
    `,
  )
  .join("");
