
(function () {
  // =============================
  // 1) Theme (Light/Dark) toggle
  // =============================
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = localStorage.getItem("theme");
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

  const themeToggle = document.getElementById("themeToggle");

  function setTheme(theme) {
    document.body.classList.remove("theme-dark", "theme-light");
    document.body.classList.add(theme === "dark" ? "theme-dark" : "theme-light");
    if (themeToggle) {
      themeToggle.textContent = theme === "dark" ? "🌙" : "☀️";
      themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
    }
    localStorage.setItem("theme", theme);
  }
  setTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next = document.body.classList.contains("theme-dark") ? "light" : "dark";
      setTheme(next);
    });
  }

  // =============================
  // 2) Mobile nav
  // =============================
  const navToggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("primary-menu");
  if (navToggle && menu) {
    navToggle.addEventListener("click", () => {
      const open = menu.style.display === "flex";
      menu.style.display = open ? "none" : "flex";
      navToggle.setAttribute("aria-expanded", String(!open));
    });
  }

  // =============================
  // 3) Visitor count (per device)
  // =============================
  const visitorEl = document.getElementById("visitorCount");
  try {
    const KEY = "vn-visits";
    const visits = parseInt(localStorage.getItem(KEY) || "0", 10) + 1;
    localStorage.setItem(KEY, String(visits));
    if (visitorEl) visitorEl.textContent = Intl.NumberFormat().format(visits);
  } catch (e) {
    if (visitorEl) visitorEl.textContent = "—";
  }

  // =============================
  // 4) Auto-calc experience (updates over time)
  //    Your resume shows ServiceNow since Aug 2017.
  // =============================
  const careerStart = new Date("2017-08-01"); // <-- change if needed

  function yearsFrom(startDate) {
    const now = new Date();
    const diffMs = now - startDate;
    const years = diffMs / (1000 * 60 * 60 * 24 * 365.2425);
    // show 1 decimal after 2+ years, else show 1 decimal anyway
    return years;
  }

  function formatYears(y) {
    // e.g. 8.4 -> "8.4+"
    return `${(Math.max(0, y)).toFixed(1)}+`;
  }

  const yearsEl = document.getElementById("yearsExp");
  if (yearsEl) yearsEl.textContent = formatYears(yearsFrom(careerStart));

  // =========================================================
  // 5) ✅ YOUR REAL DATA (filled from your resumes)
  //    Update only links if you want (LinkedIn/GitHub)
  // =========================================================
  const profileData = {
    name: "Vivek M. Chudasama",
    title: "Senior ServiceNow Developer",
    location: "Bangalore, India",
    phone: "+91 94294 89811",
    email: "vivek.m.chudasama@gmail.com", // (From resume). Change if you prefer another.
    openTo: "Open to relocation or remote roles in Canada, UAE, and Australia.",

    headline:
      "Experienced and certified ServiceNow Developer with 8+ years of expertise across ITSM and CSM. Proven track record in scalable solutions, Virtual Agent, AI Search, NLU Workbench, and integrations (Microsoft Teams, Azure Translation, SAML). Strong Agile delivery and global client collaboration.",

    links: [
      // Replace # with your real profiles
      { label: "LinkedIn", url: "#" },
      { label: "GitHub", url: "#" },
      { label: "Email", url: "mailto:vivek.m.chudasama@gmail.com" },
    ],

    quickFacts: [
      { text: "8+ years in ServiceNow development across ITSM & CSM." },
      { text: "Virtual Agent rebuilds, live-agent routing, and CSM/Agent Workspace enablement." },
      { text: "AI Search + NLU Workbench, multilingual experiences via Localization + Azure Translation." },
      { text: "Integrations: Microsoft Teams, SAML authentication, CORS, custom URLs, Engagement Messenger." },
      { text: "Open to relocation/remote roles in Canada, UAE, and Australia." },
    ],

    about: [
      "I am a certified ServiceNow Developer focused on delivering high-impact solutions across ITSM and CSM. I specialize in building reliable automations and user-friendly experiences, especially around Virtual Agent, Workspace experiences, and platform integrations.",
      "I have hands-on expertise in AI Search and NLU Workbench, enabling smarter self-service and improving search relevance. I also implement multilingual experiences using the Localization Framework, Dynamic Translation, and Microsoft Azure Translation services.",
      "I work effectively in Agile environments, collaborate with global teams, and support end-to-end delivery—requirements, development, testing, demos, deployment, and post-production support.",
      "<strong>Global readiness:</strong> Open to remote or on-site opportunities in Canada, UAE, and Australia.",
      "<strong>Education:</strong> M.E. Applied Instrumentation (GTU, Ahmedabad) CGPA 8.07 • B.E. Instrumentation & Control (GTU, Ahmedabad) CPI 7.65",
    ],

    strengths: [
      "Virtual Agent & Conversational Design",
      "AI Search & NLU Workbench",
      "Integrations (Teams, Azure, SAML)",
      "CSM / Agent Workspace Enablement",
      "Agile Delivery & Client Collaboration",
      "Troubleshooting & Platform Stability",
    ],

    domains: ["ITSM", "CSM", "Virtual Agent", "Flow Designer", "Integration Hub", "AI Search", "NLU", "Workspaces"],

    experience: [
      {
        role: "Senior ServiceNow Developer",
        company: "Magnit Global India — Gandhinagar, Gujarat",
        dates: "Jan 2023 — Present",
        highlights: [
          "Rebuilt Virtual Agent experience with custom topics and end-to-end testing for improved self-service.",
          "Enabled live-agent routing and chat communication from Virtual Agent to agents in Agent Workspace and CSM Workspace for specific support groups.",
          "Led AI Search and NLU Workbench implementation; improved search relevance and user interaction.",
          "Implemented multilingual support using Localization Framework + Dynamic Translation + Microsoft Azure Translation service.",
          "Integrated Microsoft Teams with ServiceNow Virtual Agent to streamline support communication.",
          "Configured Engagement Messenger, CORS rules, SAML authentication, Identity Provider setup, and Custom URLs for secure access.",
          "Worked on CSM Configurable Workspace and Advanced Work Assignment.",
        ],
      },
      {
        role: "Technology Analyst",
        company: "Infosys Ltd. — Pune, Maharashtra",
        dates: "Sep 2019 — Jan 2023",
        highlights: [
          "Delivered ServiceNow solutions for global telecom clients (Singapore Telecom, Optus, Telstra).",
          "Worked across multiple instances and domains, supporting internal and external customers.",
          "Implemented Incident, Problem, Change Management and ITIL-aligned workflows/Flow Designer solutions.",
          "Integrated ServiceNow with third-party tools; managed development work using Agile methodology.",
          "Led requirement gathering, development, configuration, workflow administration, and stakeholder communication.",
          "Conducted end-user training and created clear technical/process documentation for adoption.",
        ],
      },
      {
        role: "Software Developer",
        company: "HCL Technologies Ltd. — Chennai, Tamil Nadu",
        dates: "Aug 2017 — Sep 2019",
        highlights: [
          "Led Service Portal development and customization for Telstra Wholesale (themes, widgets, advanced scripting).",
          "Managed requirement discussions with customers; provided solutions and clarifications on weekly calls.",
          "Coordinated team delivery, tracked progress, and provided technical assistance through daily standups.",
          "Managed deployments to production and post-production support for enhancements.",
        ],
      },
    ],

    projects: [
      // Magnit Global projects
      {
        id: "va-rebuild",
        title: "Virtual Agent Rebuild (Custom Topics + Live Agent Routing)",
        category: "CSM",
        level: "Advanced",
        duration: "Magnit Global (Jan 2023 — Present)",
        description:
          "Rebuilt the Virtual Agent experience by disabling legacy components and implementing custom topics with end-to-end testing, plus live-agent routing into Agent Workspace and CSM Workspace.",
        badges: ["Virtual Agent", "CSM Workspace", "Agent Workspace", "Routing"],
        link: "#",
        details: [
          "Custom VA topics + test scenarios and validation.",
          "Live-agent chat routing for specific support groups.",
          "Improved self-service and support handoff experience.",
        ],
      },
      {
        id: "ai-search-nlu",
        title: "AI Search + NLU Workbench Implementation",
        category: "AI",
        level: "Advanced",
        duration: "Magnit Global (Jan 2023 — Present)",
        description:
          "Implemented NLU Workbench and AI Search integration, tuned search result rules, and improved relevance to enhance user experience.",
        badges: ["AI Search", "NLU Workbench", "Search Rules"],
        link: "#",
        details: [
          "Managed intents, entities, vocabulary, and test cases in NLU Workbench.",
          "Enabled AI Search and optimized result rules for higher accuracy.",
        ],
      },
      {
        id: "localization-translation",
        title: "Multilingual Support (Localization + Dynamic Translation + Azure Translation)",
        category: "Platform",
        level: "Advanced",
        duration: "Magnit Global (Jan 2023 — Present)",
        description:
          "Delivered multilingual experiences by integrating Localization Framework and Dynamic Translation across Service Portal, Virtual Agent, Agent Workspace, catalog items and portal pages, backed by Azure Translation services.",
        badges: ["Localization", "Dynamic Translation", "Azure Translation"],
        link: "#",
        details: [
          "Configured translation for instance components and user experiences.",
          "Set up Microsoft Azure translation services end-to-end.",
        ],
      },
      {
        id: "teams-va",
        title: "Microsoft Teams Integration with Virtual Agent",
        category: "AI",
        level: "Intermediate",
        duration: "Magnit Global (Jan 2023 — Present)",
        description:
          "Integrated Microsoft Teams with ServiceNow Virtual Agent to enable seamless support communication and improved user engagement.",
        badges: ["MS Teams", "Virtual Agent", "Integration"],
        link: "#",
        details: ["Implemented end-to-end Teams integration with ServiceNow VA."],
      },

      // Infosys clients/projects
      {
        id: "singtel",
        title: "Singapore Telecom — ITIL Workflows + Flow Designer",
        category: "ITSM",
        level: "Intermediate",
        duration: "Infosys (Sep 2019 — Jan 2023)",
        description:
          "Built and supported ServiceNow solutions across instances/domains; implemented Incident/Problem/Change workflows and ITIL-aligned administration.",
        badges: ["ITSM", "Flow Designer", "ITIL"],
        link: "#",
        details: [
          "Requirement gathering through delivery and documentation.",
          "Lifecycle management and stakeholder demos/sign-offs.",
        ],
      },
      {
        id: "optus",
        title: "Optus (Australia) — Service Portal Delivery + Team Leadership",
        category: "Platform",
        level: "Intermediate",
        duration: "Infosys (Sep 2019 — Jan 2023)",
        description:
          "Designed and developed customized ServiceNow Service Portal, managed customer calls, team coordination, and production deployments with post-support ownership.",
        badges: ["Service Portal", "Client Calls", "Delivery"],
        link: "#",
        details: [
          "Weekly customer calls for requirements and clarifications.",
          "Daily team sync for progress tracking and technical support.",
        ],
      },
      {
        id: "telstra-invoice",
        title: "Telstra (Australia) — Invoice Process Solution Architecture",
        category: "ITSM",
        level: "Advanced",
        duration: "Infosys (Sep 2019 — Jan 2023)",
        description:
          "Designed solution architecture for Telstra invoice process including customer onboarding, catalog item placement, and break-fix requests; ensured request/task handling aligned to customer-specific needs.",
        badges: ["Architecture", "Catalog", "Process Design"],
        link: "#",
        details: [
          "Built architecture for onboarding + requests + break-fix flow.",
          "Led demos and obtained signoffs for requirements.",
        ],
      },

      // HCL project
      {
        id: "telstra-wholesale",
        title: "Telstra Wholesale — Service Portal Customization",
        category: "Platform",
        level: "Intermediate",
        duration: "HCL (Aug 2017 — Sep 2019)",
        description:
          "Customized Service Portal with themes and widgets; built scripts (Client Scripts, Business Rules, Script Includes, UI Policies, UI Scripts), notifications and email templates; configured roles, groups, and navigation.",
        badges: ["Service Portal", "Scripting", "ACLs", "Notifications"],
        link: "#",
        details: [
          "Workflow/approval flows, tasks and automation updates.",
          "Used ACLs for correct access and GlideRecord for server-side scripting.",
          "Incident + Change Management implementations per customer needs.",
        ],
      },
    ],

    skills: [
      {
        group: "ServiceNow Modules",
        items: ["ITSM", "CSM", "Virtual Agent", "Flow Designer", "Integration Hub", "CSM Configurable Workspace", "Advanced Work Assignment"],
      },
      {
        group: "AI & Automation",
        items: ["AI Search", "NLU Workbench", "AI Search Integration", "Dynamic Translation", "Localization Framework", "Engagement Messenger"],
      },
      {
        group: "Integrations & Security",
        items: ["Microsoft Teams Integration", "Azure Translation", "SAML Authentication", "CORS Configuration", "Custom URLs", "Identity Provider"],
      },
      {
        group: "Web & Platform",
        items: ["JavaScript", "HTML", "CSS", "Instance Upgrades", "Cloning", "Reporting/Dashboards", "KPIs & Custom Reports"],
      },
      {
        group: "Process (ITIL)",
        items: ["Incident Management", "Problem Management", "Change Management", "Workflow Administration", "Agile Delivery"],
      },
    ],

    certifications: [
      { name: "ServiceNow Certified System Administrator (CSA)", org: "ServiceNow", date: "", credentialUrl: "#" },
      { name: "ServiceNow Certified Application Developer (CAD)", org: "ServiceNow", date: "", credentialUrl: "#" },
    ],

    resumeUrl: "#", // Put a real file like 'resume.pdf' in your folder and set resumeUrl: 'resume.pdf'
  };

  // =============================
  // 6) Bind values to UI
  // =============================
  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  setText("profileName", profileData.name);
  setText("profileMeta", `${profileData.location} · ${profileData.title}`);
  setText("heroSummary", profileData.headline);

  // Links buttons under hero
  const heroLinks = document.getElementById("heroLinks");
  if (heroLinks) {
    heroLinks.innerHTML = profileData.links
      .map(
        (l) =>
          `<a class="btn ghost" href="${l.url}" target="${l.url.startsWith("mailto:") ? "_self" : "_blank"}" rel="noopener">${l.label}</a>`
      )
      .join("");
  }

  // Quick facts
  const quickList = document.getElementById("quickList");
  if (quickList) {
    quickList.innerHTML = profileData.quickFacts
      .map((f) => `<li><span class="bullet"></span><span>${f.text}</span></li>`)
      .join("");
  }

  // About text
  const aboutBody = document.getElementById("aboutBody");
  if (aboutBody) {
    aboutBody.innerHTML = profileData.about.map((p) => `<p>${p}</p>`).join("");
  }

  // Tags
  const strengthTags = document.getElementById("strengthTags");
  if (strengthTags) strengthTags.innerHTML = profileData.strengths.map((t) => `<span class="tag">${t}</span>`).join("");

  const domainTags = document.getElementById("domainTags");
  if (domainTags) domainTags.innerHTML = profileData.domains.map((t) => `<span class="tag">${t}</span>`).join("");

  // Experience timeline
  const timeline = document.getElementById("experienceTimeline");
  if (timeline) {
    timeline.innerHTML = profileData.experience
      .map(
        (exp) => `
      <div class="tl-item">
        <div class="tl-dot" aria-hidden="true"></div>
        <div class="card tl-card">
          <div class="tl-top">
            <div>
              <div class="tl-role">${exp.role}</div>
              <div class="tl-company">${exp.company}</div>
            </div>
            <div class="tl-dates">${exp.dates}</div>
          </div>
          <ul class="tl-bullets">${exp.highlights.map((h) => `<li>${h}</li>`).join("")}</ul>
        </div>
      </div>
    `
      )
      .join("");
  }

  // Project count
  const projectCount = document.getElementById("projectCount");
  if (projectCount) projectCount.textContent = String(profileData.projects.length);

  // Render Projects + filter/search
  const projectsGrid = document.getElementById("projectsGrid");
  const searchInput = document.getElementById("searchInput");
  const chips = Array.from(document.querySelectorAll(".chip"));
  let currentFilter = "all";
  let q = "";

  function renderProjects(list) {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = "";
    list.forEach((p) => {
      const el = document.createElement("article");
      el.className = "card card-compact";
      el.innerHTML = `
        <div class="title">${p.title}</div>
        <div class="meta">${p.category} · ${p.level} · ${p.duration}</div>
        <p class="muted" style="margin:0">${p.description}</p>
        <div class="badges">${(p.badges || []).map((b) => `<span class="badge">${b}</span>`).join("")}</div>
        <div class="actions">
          <button class="btn ghost" data-id="${p.id}" data-action="details">Details</button>
          <a class="btn primary" href="${p.link}" target="_blank" rel="noopener">Open</a>
        </div>
      `;
      projectsGrid.appendChild(el);
    });
  }

  function updateProjects() {
    const filtered = profileData.projects.filter((p) => {
      const passFilter = currentFilter === "all" || p.category === currentFilter;
      const text = `${p.title} ${p.description} ${(p.badges || []).join(" ")} ${p.category}`.toLowerCase();
      const passSearch = !q || text.includes(q);
      return passFilter && passSearch;
    });
    renderProjects(filtered);
  }

  renderProjects(profileData.projects);

  chips.forEach((ch) =>
    ch.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      ch.classList.add("active");
      currentFilter = ch.dataset.filter;
      updateProjects();
    })
  );

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      q = (searchInput.value || "").toLowerCase();
      updateProjects();
    });
  }

  // Modal
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const modalPrimary = document.getElementById("modalPrimary");

  function openModal(project) {
    if (!modal || !modalTitle || !modalBody || !modalPrimary) return;
    modalTitle.textContent = project.title;
    modalBody.innerHTML = `
      <p class="muted" style="margin-top:0">${project.category} · ${project.level} · ${project.duration}</p>
      <p>${project.description}</p>
      ${
        project.details && project.details.length
          ? `<h4 style="margin:14px 0 8px">What I delivered</h4><ul>${project.details.map((d) => `<li>${d}</li>`).join("")}</ul>`
          : ""
      }
      ${
        project.badges && project.badges.length
          ? `<div class="badges" style="margin-top:12px">${project.badges.map((b) => `<span class="badge">${b}</span>`).join("")}</div>`
          : ""
      }
    `;
    modalPrimary.href = project.link || "#";
    modal.setAttribute("open", "");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    if (!modal) return;
    modal.removeAttribute("open");
    modal.setAttribute("aria-hidden", "true");
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target.matches("[data-close]")) closeModal();
    });
  }

  if (projectsGrid) {
    projectsGrid.addEventListener("click", (e) => {
      const btn = e.target.closest('button[data-action="details"]');
      if (!btn) return;
      const id = btn.dataset.id;
      const project = profileData.projects.find((x) => x.id === id);
      if (project) openModal(project);
    });
  }

  // Skills
  const skillsGrid = document.getElementById("skillsGrid");
  if (skillsGrid) {
    skillsGrid.innerHTML = profileData.skills
      .map(
        (s) => `
      <div class="card skill">
        <h3>${s.group}</h3>
        <ul>${s.items.map((i) => `<li>${i}</li>`).join("")}</ul>
      </div>
    `
      )
      .join("");
  }

  // Certifications
  const certGrid = document.getElementById("certGrid");
  if (certGrid) {
    certGrid.innerHTML = profileData.certifications
      .map((c) => {
        const meta = [c.org, c.date].filter(Boolean).join(" · ");
        return `
        <div class="card card-compact">
          <div class="title">${c.name}</div>
          <div class="meta">${meta || "ServiceNow"}</div>
          <div class="actions">
            <a class="btn primary" href="${c.credentialUrl}" target="_blank" rel="noopener">Credential</a>
          </div>
        </div>
      `;
      })
      .join("");
  }

  // Contact section bindings
  const emailLink = document.getElementById("emailLink");
  if (emailLink) {
    emailLink.textContent = profileData.email;
    emailLink.href = `mailto:${profileData.email}`;
  }
  const locationEl = document.getElementById("location");
  if (locationEl) locationEl.textContent = profileData.location;

  const mailtoBtn = document.getElementById("mailtoBtn");
  if (mailtoBtn) mailtoBtn.href = `mailto:${profileData.email}?subject=ServiceNow%20Opportunity`;

  // Resume button
  const resumeBtn = document.getElementById("resumeBtn");
  if (resumeBtn) {
    resumeBtn.href = profileData.resumeUrl || "#";
    if (!profileData.resumeUrl || profileData.resumeUrl === "#") {
      resumeBtn.style.display = "none"; // hides if no resume configured
    }
  }

  // Copy email buttons
  function toast(msg) {
    let el = document.getElementById("toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "toast";
      el.style.position = "fixed";
      el.style.left = "50%";
      el.style.bottom = "22px";
      el.style.transform = "translateX(-50%)";
      el.style.padding = "10px 12px";
      el.style.borderRadius = "12px";
      el.style.background = "rgba(0,0,0,.75)";
      el.style.color = "#fff";
      el.style.fontWeight = "700";
      el.style.zIndex = "9999";
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.style.opacity = "1";
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => (el.style.opacity = "0"), 1500);
  }

  function copyEmail() {
    navigator.clipboard
      .writeText(profileData.email)
      .then(() => toast("Email copied"))
      .catch(() => toast("Copy not available"));
  }

  const copyEmail1 = document.getElementById("copyEmail");
  const copyEmail2 = document.getElementById("copyEmail2");
  if (copyEmail1) copyEmail1.addEventListener("click", copyEmail);
  if (copyEmail2) copyEmail2.addEventListener("click", copyEmail);

  // Footer year + back to top
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const backToTop = document.getElementById("backToTop");
  if (backToTop) backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
})();
