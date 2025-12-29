
(function(){
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  setTheme(initialTheme);

  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', ()=>{
    const next = document.body.classList.contains('theme-dark') ? 'light' : 'dark';
    setTheme(next);
  });

  function setTheme(theme){
    document.body.classList.remove('theme-dark','theme-light');
    document.body.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light');
    themeToggle.textContent = theme === 'dark' ? '🌙' : '☀️';
    themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
    localStorage.setItem('theme', theme);
  }

  const navToggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('primary-menu');
  navToggle.addEventListener('click',()=>{
    const open = menu.style.display === 'flex';
    menu.style.display = open ? 'none' : 'flex';
    navToggle.setAttribute('aria-expanded', String(!open));
  });

  try{
    const KEY='vn-visits';
    const visits = parseInt(localStorage.getItem(KEY) || '0', 10) + 1;
    localStorage.setItem(KEY, String(visits));
    document.getElementById('visitorCount').textContent = Intl.NumberFormat().format(visits);
  }catch(e){
    document.getElementById('visitorCount').textContent = '—';
  }

  // Fill this with your exact details.
  const profileData = {
    name: 'Vivek Chudasama',
    title: 'ServiceNow Developer',
    location: 'Bangalore, India',
    email: 'vivek.chudasama1993@gmail.com',
    yearsExperience: 8,

    headline: 'ServiceNow Developer focused on ITSM, CSM and HRSD automation. I design reliable workflows, integrations, and user-friendly experiences that reduce manual effort and improve service outcomes.',

    links: [
      {label:'LinkedIn', url:'#'},
      {label:'GitHub', url:'#'},
      {label:'ServiceNow Community', url:'#'}
    ],

    quickFacts: [
      {text:'8+ years building & supporting enterprise workflows (update with exact).'},
      {text:'Core domains: ITSM, CSM, HRSD; strong scripting & integration mindset.'},
      {text:'Projects include AI triage automation via MID, and HRSD onboarding role/class logic.'}
    ],

    about: [
      'I am a ServiceNow Developer who builds outcome-driven solutions across ITSM, CSM, and HRSD. My approach emphasizes clean UX, strong security (ACLs/roles), and maintainable automation.',
      'I work across the platform stack—catalog/portal experiences, server-side scripting, Flow Designer orchestration, and integrations—while ensuring traceability, monitoring, and safe rollbacks.',
      '<strong>Note:</strong> Replace placeholders (company names/dates/certifications) with your exact information before publishing.'
    ],

    strengths: ['Automation mindset','Troubleshooting','Stakeholder communication','Secure by design','Reusable scripting patterns'],
    domains: ['ITSM','CSM','HRSD','Platform','Integrations','Virtual Agent'],

    experience: [
      {
        role: 'ServiceNow Developer',
        company: 'Your Company Name (replace)',
        dates: 'YYYY — Present',
        highlights: [
          'Delivered platform automations using Business Rules, Script Includes, Flow Designer and integrations.',
          'Implemented AI case automation notifications and disengage patterns for human-in-the-loop operations.',
          'Built onboarding experiences (Record Producers, ACLs, notifications) to reduce manual effort.'
        ]
      },
      {
        role: 'ServiceNow Developer / Analyst',
        company: 'Previous Company (replace)',
        dates: 'YYYY — YYYY',
        highlights: [
          'Supported ITSM/CSM processes: incident, request, knowledge and case management.',
          'Improved reliability by standardizing scripts and adding guardrails/validations.',
          'Partnered with operations teams to measure impact and improve user experience.'
        ]
      }
    ],

    projects: [
      {
        id:'ai-case-automation',
        title:'AI Case Automation (MID + Human-in-the-loop)',
        category:'AI',
        level:'Intermediate',
        duration:'Phase 1: 3–4 weeks (example)',
        description:'Integration pattern where only case sys_id is sent to external AI via MID. AI fetches details via API, triages, requests missing info via comments, and routes to humans when needed. Includes success/failure tracking checkboxes.',
        badges:['MID','REST','Business Rules','HITL'],
        link:'#',
        details:[
          'Outbound REST notify on create and user comments when AI engaged.',
          'Disengage logic when assignment moves away from AI Agents.',
          'Designed for password reset cases (Okta/VMS) in Phase 1.'
        ]
      },
      {
        id:'hrsd-onboarding-role-class',
        title:'HRSD Onboarding Role/Class Logic (Contingent workers)',
        category:'HRSD',
        level:'Advanced',
        duration:'Ongoing',
        description:'Ensured contingent workers created via VMS/PeopleSoft/GSO receive correct HR roles initially, then removed/converted post-onboarding via transform map + script include + post-onboarding automation.',
        badges:['Transform Map','Script Include','Flow/BR'],
        link:'#',
        details:[
          'Logic spans VMS HR Profile Transform Map, VMSProfileTransformUtil, and post-onboarding updates.',
          'Prevents incorrect access by cleaning up roles after onboarding completion.'
        ]
      },
      {
        id:'onboarding-portal',
        title:'Employee Onboarding Portal Experience (Record Producer)',
        category:'Platform',
        level:'Intermediate',
        duration:'15 days target (example)',
        description:'Automated ticket creation from SharePoint-like data; manager completes onboarding via secure Record Producer link; employee details shown as read-only variables populated via GlideAjax.',
        badges:['Service Portal','GlideAjax','ACLs','Notifications'],
        link:'#',
        details:[
          'Dynamic link delivery via BR + event + notification.',
          'Approvals and task creation staged for later phases.'
        ]
      }
    ],

    skills: [
      {group:'ServiceNow Platform', items:['Business Rules','Script Includes','GlideAjax','ACLs/Roles','Catalog & Record Producers','Flow Designer']},
      {group:'Domains', items:['ITSM','CSM','HRSD','Virtual Agent','Knowledge','Service Portal']},
      {group:'Integration & Automation', items:['Outbound REST','MID Server patterns','Human-in-the-loop approvals','RPA (concept)','Monitoring & logging']}
    ],

    certifications: [
      {name:'Add certification (e.g., CSA)', org:'ServiceNow', date:'YYYY', credentialUrl:'#'},
      {name:'Add certification (e.g., CIS-ITSM)', org:'ServiceNow', date:'YYYY', credentialUrl:'#'}
    ],

    resumeUrl: '#'
  };

  document.getElementById('profileName').textContent = profileData.name;
  document.getElementById('profileMeta').textContent = `${profileData.location} · ${profileData.title}`;
  document.getElementById('yearsExp').textContent = `${profileData.yearsExperience}+`;
  document.getElementById('heroSummary').textContent = profileData.headline;

  const heroLinks = document.getElementById('heroLinks');
  heroLinks.innerHTML = profileData.links.map(l=> `<a class="btn ghost" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join('');

  const quickList = document.getElementById('quickList');
  quickList.innerHTML = profileData.quickFacts.map(f=> `<li><span class="bullet"></span><span>${f.text}</span></li>`).join('');

  const aboutBody = document.getElementById('aboutBody');
  aboutBody.innerHTML = profileData.about.map(p=> `<p>${p}</p>`).join('');

  document.getElementById('strengthTags').innerHTML = profileData.strengths.map(t=>`<span class="tag">${t}</span>`).join('');
  document.getElementById('domainTags').innerHTML = profileData.domains.map(t=>`<span class="tag">${t}</span>`).join('');

  const timeline = document.getElementById('experienceTimeline');
  timeline.innerHTML = profileData.experience.map(exp=>`
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
        <ul class="tl-bullets">${exp.highlights.map(h=>`<li>${h}</li>`).join('')}</ul>
      </div>
    </div>
  `).join('');

  const projectsGrid = document.getElementById('projectsGrid');
  document.getElementById('projectCount').textContent = String(profileData.projects.length);

  function renderProjects(list){
    projectsGrid.innerHTML = '';
    list.forEach(p=>{
      const el = document.createElement('article');
      el.className = 'card card-compact';
      el.innerHTML = `
        <div class="title">${p.title}</div>
        <div class="meta">${p.category} · ${p.level} · ${p.duration}</div>
        <p class="muted" style="margin:0">${p.description}</p>
        <div class="badges">${(p.badges||[]).map(b=>`<span class="badge">${b}</span>`).join('')}</div>
        <div class="actions">
          <button class="btn ghost" data-id="${p.id}" data-action="details">Details</button>
          <a class="btn primary" href="${p.link}" target="_blank" rel="noopener">Open</a>
        </div>
      `;
      projectsGrid.appendChild(el);
    });
  }
  renderProjects(profileData.projects);

  const chips = Array.from(document.querySelectorAll('.chip'));
  let currentFilter = 'all';
  chips.forEach(ch=>ch.addEventListener('click',()=>{
    chips.forEach(c=>c.classList.remove('active'));
    ch.classList.add('active');
    currentFilter = ch.dataset.filter;
    updateProjects();
  }));

  const searchInput = document.getElementById('searchInput');
  let q = '';
  searchInput.addEventListener('input', ()=>{ q = searchInput.value.toLowerCase(); updateProjects(); });

  function updateProjects(){
    const filtered = profileData.projects.filter(p=>{
      const passFilter = currentFilter==='all' || p.category===currentFilter;
      const text = `${p.title} ${p.description} ${(p.badges||[]).join(' ')} ${p.category}`.toLowerCase();
      const passSearch = !q || text.includes(q);
      return passFilter && passSearch;
    });
    renderProjects(filtered);
  }

  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalPrimary = document.getElementById('modalPrimary');

  function openModal(p){
    modalTitle.textContent = p.title;
    modalBody.innerHTML = `
      <p class="muted" style="margin-top:0">${p.category} · ${p.level} · ${p.duration}</p>
      <p>${p.description}</p>
      ${(p.details && p.details.length) ? `<h4 style="margin:14px 0 8px">What I built</h4><ul>${p.details.map(d=>`<li>${d}</li>`).join('')}</ul>` : ''}
      ${(p.badges && p.badges.length) ? `<div class="badges" style="margin-top:12px">${p.badges.map(b=>`<span class="badge">${b}</span>`).join('')}</div>` : ''}
    `;
    modalPrimary.href = p.link || '#';
    modal.setAttribute('open','');
    modal.setAttribute('aria-hidden','false');
  }

  function closeModal(){
    modal.removeAttribute('open');
    modal.setAttribute('aria-hidden','true');
  }

  modal.addEventListener('click', (e)=>{
    if(e.target.matches('[data-close]')) closeModal();
  });

  projectsGrid.addEventListener('click', (e)=>{
    const btn = e.target.closest('button[data-action="details"]');
    if(!btn) return;
    const id = btn.dataset.id;
    const p = profileData.projects.find(x=>x.id===id);
    if(p) openModal(p);
  });

  const skillsGrid = document.getElementById('skillsGrid');
  skillsGrid.innerHTML = profileData.skills.map(s=>`
    <div class="card skill">
      <h3>${s.group}</h3>
      <ul>${s.items.map(i=>`<li>${i}</li>`).join('')}</ul>
    </div>
  `).join('');

  const certGrid = document.getElementById('certGrid');
  certGrid.innerHTML = profileData.certifications.map(c=>`
    <div class="card card-compact">
      <div class="title">${c.name}</div>
      <div class="meta">${c.org} · ${c.date}</div>
      <div class="actions">
        <a class="btn primary" href="${c.credentialUrl}" target="_blank" rel="noopener">Credential</a>
      </div>
    </div>
  `).join('');

  const emailLink = document.getElementById('emailLink');
  emailLink.textContent = profileData.email;
  emailLink.href = `mailto:${profileData.email}`;
  document.getElementById('mailtoBtn').href = `mailto:${profileData.email}?subject=ServiceNow%20Opportunity`;
  document.getElementById('location').textContent = profileData.location;

  const resumeBtn = document.getElementById('resumeBtn');
  resumeBtn.href = profileData.resumeUrl || '#';
  if(!profileData.resumeUrl || profileData.resumeUrl==='#'){ resumeBtn.style.display='none'; }

  function copyEmail(){
    navigator.clipboard.writeText(profileData.email).then(()=>toast('Email copied')).catch(()=>toast('Copy not available'));
  }
  document.getElementById('copyEmail').addEventListener('click', copyEmail);
  document.getElementById('copyEmail2').addEventListener('click', copyEmail);

  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('backToTop').addEventListener('click', ()=>window.scrollTo({top:0, behavior:'smooth'}));

  let toastTimer;
  function toast(msg){
    clearTimeout(toastTimer);
    let el = document.getElementById('toast');
    if(!el){
      el = document.createElement('div');
      el.id = 'toast';
      el.style.position='fixed';
      el.style.left='50%';
      el.style.bottom='22px';
      el.style.transform='translateX(-50%)';
      el.style.padding='10px 12px';
      el.style.borderRadius='12px';
      el.style.background='rgba(0,0,0,.75)';
      el.style.color='#fff';
      el.style.fontWeight='700';
      el.style.zIndex='9999';
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.style.opacity='1';
    toastTimer = setTimeout(()=>{ el.style.opacity='0'; }, 1600);
  }
})();
