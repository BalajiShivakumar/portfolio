import { useState } from "react";

const topLinks = [
  { label: "ABOUT", target: "about" },
  { label: "EXPERIENCE", target: "experience" },
  { label: "EDUCATION", target: "education" },
  { label: "SKILLS", target: "skills" },
  { label: "PROJECTS", target: "projects" },
  { label: "CONTACT", target: "contact" },
];

const featureCards = [
  {
    title: "Introducing Stripe Workflows",
    description:
      "A practical showcase of intelligent automation patterns I use when building product-grade workflows.",
    highlights: [
      "ROLE: Full Stack Engineer",
      "STACK: React, Node.js, PostgreSQL",
      "IMPACT: Reduced operational overhead by automating repetitive workflows",
    ],
    moreInfo: ["DURATION: 6 months", "TEAM: 4 Engineers", "STATUS: Production Live"],
  },
  {
    title: "Join a local Developer Meetup",
    description:
      "A curated developer gathering where I share systems design, product strategy, and implementation details.",
    highlights: [
      "ROLE: Community Organizer",
      "FOCUS: Technical talks and networking",
      "IMPACT: Built a stronger local developer ecosystem",
    ],
    moreInfo: ["EVENTS: 12 Sessions", "AUDIENCE: 300 Developers", "FORMAT: Bi-monthly"],
  },
  {
    title: "Decomposition of Monolith to Microservices and Security Analysis",
    description:
      "This research addresses the security challenges encountered during the decomposition of monolithic applications into microservices.",
    highlights: [
      "STACK: SECURITY",
      "FOCUS: SECURITY ANALYSIS AND DECOMPOSITION",
      "IMPACT: Improved performance and scalability for production systems",
    ],
    moreInfo: ["YEAR: 2024","OWNERSHIP: End-to-end", "Focusing on vulnerabilities highlighted by the OWASP Top 10 and standard security metrics. Using automated tools like Mono2Micro for system decomposition and SonarQube, Snyk, and Docker Scout for comprehensive security analysis, vulnerabilities were identified and mitigated in both architectural styles. The study further implemented a deep learning-based solution, VulDeepScannerMonoMicro, which enhanced the detection of complex security issues. This approach integrated deep learning models with automated analysis tools, significantly improving vulnerability detection accuracy. The findings underscore the importance of prioritizing security as a core consideration in architectural transitions from monolithic to microservices"],
  },
  {
    title: "Clinical Management System using ASP.NET MVC (NET 6.0)",
    description:
      "The Clinical Management System is a web application built with ASP.NET MVC",
    highlights: [
      "STACK: UX-Focused Developer",
      "FOCUS: Accessibility and conversion optimization",
      "IMPACT: Improved usability and task completion rates",
    ],
    moreInfo: ["A/B TESTS: 8 Iterations", "ACCESSIBILITY: WCAG-oriented", "RESULT: Better Engagement", "The Clinical Management System is a web application built with ASP.NET MVC, Entity Framework Core, and MS SQL that streamlines clinic operations by enabling patients to view doctor availability and book appointments accordingly. Utilizing MVC architecture, the system organizes features like authentication and role-based access with ASP.NET Core Identity, ensuring secure access for both administrators and patients. A central dashboard, crafted with Bootstrap, HTML, CSS, and JavaScript, offers a responsive interface where patients can manage bookings and administrators oversee clinic resources. The MS SQL database is seeded with physician schedules, enabling quick appointment bookings aligned with doctor availability. Entity Framework Core manages data interactions, while JavaScript enhances dashboard interactivity."],
  },
];

const experienceRows = [
  {
    title: "Software Engineer - Azure Physical Networking",
    body: "Built frontend features, optimized API integrations, and improved app performance across responsive devices.",
    links: [
      "COMPANY: MICROSOFT",
      "TEAM: AZURE HYPERSCALE NETWORKING",
      "DURATION: MARCH 2025 - PRESENT",
    ],
    contribution:
      "Contributed to the design and implementation of backend components that support Azure’s physical network (reliability, scalability, and operational efficiency), partnering closely with senior engineers and PM/SRE counterparts.Part of a greenfield effort in Azure Physical Networking, building products from the ground up using advanced technologies and modern engineering practices. Build production-quality code with robust unit/integration testing, CI/CD hygiene, and telemetry-first instrumentation; analyze operational data using Kusto/ADX to validate health and drive improvements.Participate in design and code reviews, write technical documentation, and drive clarity from problem statement, initial version, iteration plan (MVP-first, versioned deliverables). Collaborate across teams within Azure Networking/APN to align on interfaces, dependencies, and rollout plans; proactively document risks, challenges, and mitigations. Building and contributing to Artificial Intelligence project which makes ease for the new and existing developers to understand the dependencies, functionalities and flow of the project “",
  },
  {
    title: "Software Developer",
    body: "Delivered internal dashboards, authentication flows, and deployment pipelines for production-ready systems.",
    links: [
      "COMPANY: ZINIER TECHNOLOGIES",
      "TEAM: FULL STACK ENGINEERING",
      "DURATION: SEPT 2021 - AUG 2023",
    ],
    contribution:
      "Maintained web application front-end and back-end services, ensuring security, scalability, and performance for real-time payment processing. Orchestrated CI/CD pipelines with Git CI, streamlining development and ensuring continuous integration.I’ve developed and maintained web applications for a fast-growing field service automation company using ASP.NET Framework and React. With good time management, I expedited product delivery by 40%, enabling early project start, client onboarding, and best user experience. Developed REST APIs for service automation, using ReactJS, JavaScript, Redux, and asynchronous technologies.Achieved maintainable code with reusable components, reducing debugging time by 25%. Led the team, demonstrated analytical thinking, and embraced flexibility to meet customer expectations, delivering 5 applications on time using Agile Project Management Methodology. Crafted unit test cases and integrated open-source automation frameworks for web application testing. Resolved conflicts and ensured smooth communication within the technical team using strong problem-solving and critical thinking skills. Excelled in collaboration and relationship building with external teams like Toshiba, Black and Decker, Community Fibre Limited, and Compugen.",
  },
  {
    title: "Software Developer",
    body: "Designed and built portfolio and business websites with SEO, accessibility, and smooth UI interactions.",
    links: [
      "COMPANY: SOFTURA TECHNOLOGIES",
      "TEAM: WEB DEVELOPMENT PERFORMANCE",
      "DURATION: 2020 SEPT - 2021 AUG",
    ],
    contribution:
      "Acquired end-to-end ownership of 10+ applications, where I designed and developed React components, ASP.NET MVC for entire workflows, and MS-SQL Management Studio. Showcased strong capacity to learn and master new technologies quickly.  Development teams are responsible for planning, task management, and progress reporting. They also contributeto architectural design, strategic decision-making for performance and security, and integrating third-party APIs and SDKs for system interoperability. Enhanced software code quality through problem-solving and adherence to coding standards. Eliminated obstacles and facilitated comprehension among project teams. Proficiently delivered over 10 applications using JIRA within a Scrum framework, resulting in a 25% enhancement in application performance. Designed fast and reliable Web Applications with route-based code splitting for improved performance and security. Achieved an 18% reduction in crash rates and doubled update deployment speed after technology stack upgrades.",
  },
];

const educationRows = [
  {
    title: "Masters in Computing (Secure Software Engineering)",
    body: "COURSE WORKS: Secure Programming, Concurrent Programming, Formal Programming, Network Security, Software Process Quality, Cryptography, Blockchain.",
    links: [
      "INSTITUTION: DUBLIN CITY UNIVERSITY",
      "LOCATION: DUBLIN, IRELAND",
      "YEAR: 2023 SEPT - 2024 OCT",
    ],
  },
  {
    title: "Bachelor of Engineering in Computer Science",
    body: "COURSE WORKS: Object Oriented Programming(C++), Data Structures and Algorithms, Java Programming, DBMS (Database Management System), Web Technology, Mobile App Development, Software Engineering, Software Quality Assurance, Network Programming, Machine Learning, Cloud Computing, Artificial Intelligence",
    links: [
      "INSTITUTION: KONGU ENGINEERING COLLEGE",
      "LOCATION: TAMILNADU,INDIA",
      "YEAR: 2017 AUG - 2021 MAY",
    ],
  },
];

const feedItems = [
  {
    date: "2026.2.09",
    title: "AWS Cloud Practitioner Certification",
    type: "CERTIFICATION",
    topic: "Cloud",
  },
  {
    date: "2026.2.06",
    title: "React and TypeScript Frontend Engineering",
    type: "SKILL",
    topic: "Frontend",
  },
  {
    date: "2026.2.01",
    title: "Google UX Design Professional Certificate",
    type: "CERTIFICATION",
    topic: "UI/UX",
  },
  {
    date: "2026.1.30",
    title: "Node.js API Design and Security",
    type: "SKILL",
    topic: "Backend",
  },
  {
    date: "2026.1.27",
    title: "Docker and CI/CD Deployment Pipelines",
    type: "SKILL",
    topic: "DevOps",
  },
  {
    date: "2025.12.17",
    title: "Microsoft Azure Fundamentals Certification",
    type: "CERTIFICATION",
    topic: "Cloud",
  },
  {
    date: "2025.12.15",
    title: "Full Stack System Design",
    type: "SKILL",
    topic: "Full Stack",
  },
];

function ChipButton({ label, target }) {
  const scrollToSection = () => {
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <button type="button" className="chip chip-btn" onClick={scrollToSection}>
      {label}
    </button>
  );
}

function App() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [typeFilters, setTypeFilters] = useState({
    CERTIFICATION: true,
    SKILL: true,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setContactForm({ name: "", email: "", message: "" });
  };

  const handleResumeDownload = async () => {
    try {
      const fileUrl = `${import.meta.env.BASE_URL}BalajiSivakumar_resume.pdf`;
      const response = await fetch(fileUrl);
      if (!response.ok) {
        throw new Error("Resume file not found");
      }
      const blob = await response.blob();
      const headerText = await blob.slice(0, 5).text();
      if (!headerText.startsWith("%PDF-")) {
        throw new Error("Downloaded file is not a valid PDF");
      }
      const downloadUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "BalajiSivakumar_resume.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      window.alert("Resume download failed. Please verify public/BalajiSivakumar_resume.pdf exists.");
    }
  };

  const toggleTypeFilter = (typeKey) => {
    setTypeFilters((prev) => ({ ...prev, [typeKey]: !prev[typeKey] }));
  };

  const clearFilters = (event) => {
    event.preventDefault();
    setTypeFilters({ CERTIFICATION: false, SKILL: false });
  };

  const activeTypeFilters = Object.entries(typeFilters)
    .filter(([, isEnabled]) => isEnabled)
    .map(([type]) => type);

  const filteredFeedItems = feedItems.filter((item) => {
    const typeMatch = activeTypeFilters.length > 0 && activeTypeFilters.includes(item.type);
    return typeMatch;
  });

  const openProjectPrompt = (card) => {
    setActiveProject(card);
  };

  const closeProjectPrompt = () => {
    setActiveProject(null);
  };

  return (
    <div className="page">
      <header className="top-bar">
        <div className="chip-row">
          <span className="chip chip-square">&#9632;</span>
          {topLinks.map((item) => (
            <ChipButton key={item.label} label={item.label} target={item.target} />
          ))}
        </div>
        <div className="top-actions">
          <button type="button" className="chip chip-btn resume-download" onClick={handleResumeDownload}>
            <span className="download-icon" aria-hidden="true">
              ↓
            </span>
            <span>DOWNLOAD RESUME</span>
          </button>
        </div>
      </header>

      <section className="hero" id="about">
        <div className="hero-main">
          <h1>
            BALAJI <br />
            SIVAKUMAR<span className="pixel">  -  Software Engineer</span>
          </h1>
          <p>
            Software Engineer on the Azure Physical Networking team,focuses on building reliable, secure, and scalable software systems that support large‑scale Azure infrastructure and delivered reliable backend components and internal tooling. Has strong hands‑on experience in software development and system design, with skills spanning Azure Cloud, Virtual Networks, Network Architecture, CI/CD pipelines, automation engineering, and incident management. Skilled at transforming ambiguous problem statements into measurable MVPs, instrumenting changes end-to-end, and standardizing build readiness for faster, safer releases. Actively working on AI security agents and service intelligence platforms, focusing on secure LLM integration.
          </p>
        </div>
        <div className="hero-icons">
          <span className="circle">◎</span>
          <span className="circle">DEV</span>
        </div>
      </section>

      <section className="topics" id="experience">
        <div className="mono-title">/ EXPERIENCE</div>
        {experienceRows.map((row) => (
          <article key={row.title} className="topic-row experience-row">
            <div className="topic-left">
              <h2>{row.title}</h2>
              <p>{row.body}</p>
              <div className="topic-right experience-links-inline">
                {row.links.map((link) => (
                  <a key={link} href="#">
                    <span className="bullet">&#9632;</span>
                    <span>{link}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="topic-right experience-right">
              <div className="about-box">
                <p className="mono-title-sm">ABOUT THIS ROLE</p>
                <ul className="about-text about-points">
                  {row.contribution
                    .split(/(?<=[.!?])\s+/)
                    .filter((point) => point.trim().length > 0)
                    .map((point) => (
                      <li key={point}>{point.trim()}</li>
                    ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="topics" id="education">
        <div className="mono-title">/ EDUCATION</div>
        {educationRows.map((row) => (
          <article key={row.title} className="topic-row">
            <div className="topic-left">
              <h2>{row.title}</h2>
              <p>{row.body}</p>
            </div>
            <div className="topic-right">
              {row.links.map((link) => (
                <a key={link} href="#">
                  <span className="bullet">&#9632;</span>
                  <span>{link}</span>
                </a>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="feed" id="skills">
        <div className="mono-title">/ SKILLS</div>
        <div className="feed-table">
          <aside className="filters">
            <div className="filter-head">
              <span>/ FILTER</span>
              <a href="#" onClick={clearFilters}>
                CLEAR_FILTERS
              </a>
            </div>
            <div className="filter-block">
              <p className="mono-title-sm">Type</p>
              <label>
                <input
                  type="checkbox"
                  checked={typeFilters.CERTIFICATION}
                  onChange={() => toggleTypeFilter("CERTIFICATION")}
                />
                Certification
              </label>
              <label>
                <input type="checkbox" checked={typeFilters.SKILL} onChange={() => toggleTypeFilter("SKILL")} />
                Skills
              </label>
            </div>
          </aside>
          <div className={`feed-list ${filteredFeedItems.length > 6 ? "is-scrollable" : ""}`}>
            <div className="feed-head-row">
              <span>/ DATE</span>
              <span>/ NAME</span>
              <span>/ TYPE</span>
            </div>
            {filteredFeedItems.map((item) => (
              <div key={item.title} className="feed-row">
                <span className="feed-date">&#9632; {item.date}</span>
                <span className="feed-name">{item.title}</span>
                <span className="feed-type">{item.type}</span>
              </div>
            ))}
            {filteredFeedItems.length === 0 && (
              <div className="feed-row">
                <span className="feed-date">&#9632; --</span>
                <span className="feed-name">No results found for selected filters.</span>
                <span className="feed-type">-</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="feature-wrap" id="projects">
        <div className="mono-title">/ PROJECTS</div>
        <div className="feature-grid">
          {featureCards.map((card) => (
            <article key={card.title} className="feature-card">
              <div className="wireframe" />
              <div className="feature-copy">
                <h3>
                  <button
                    type="button"
                    className="project-title-trigger"
                    aria-label={`Open details for ${card.title}`}
                    onClick={() => openProjectPrompt(card)}
                  >
                    {card.title}
                  </button>{" "}
                  <button
                    type="button"
                    className="project-title-arrow"
                    aria-label={`Show more info about ${card.title}`}
                    onClick={() => openProjectPrompt(card)}
                  >
                    ↗
                  </button>
                </h3>
                <p>{card.description}</p>
                <div className="project-content-box">
                  {card.highlights.map((item) => (
                    <p key={item} className="project-highlight">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {activeProject && (
        <div className="project-prompt-overlay" onClick={closeProjectPrompt}>
          <div className="project-prompt-window" onClick={(event) => event.stopPropagation()}>
            <div className="project-prompt-header">
              <button type="button" className="project-prompt-close" onClick={closeProjectPrompt}>
                × CLOSE
              </button>
              <p className="mono-title">/ PROJECT DETAILS</p>
            </div>
            <div className="project-prompt-body">
              <h4>{activeProject.title}</h4>
              <p>{activeProject.description}</p>
              {activeProject.moreInfo.map((item) => (
                <p key={item} className="project-info-line">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      <footer className="footer" id="contact">
        <div className="footer-main">
          <div className="contact-block">
            <p className="mono-title">/ CONTACT</p>
            <h3>Explore my work, learn about my process, and connect for collaborations.</h3>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <label htmlFor="name">
                NAME
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={contactForm.name}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label htmlFor="email">
                MAIL ID
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={contactForm.email}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label htmlFor="message">
                MESSAGE
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={contactForm.message}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <button type="submit" className="pill-btn contact-submit">
                SUBMIT
              </button>
              {isSubmitted && <p className="submit-note">Thanks. Your message has been submitted.</p>}
            </form>
          </div>
        </div>
        <div className="footer-links footer-links-bottom">
          <div>
            <p className="mono-title">/ SOCIAL</p>
            <div className="chip-row">
              <ChipButton label="LINKEDIN" target="experience" />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="brand">
            <span className="circle">◎</span>
            <span className="circle">DEV</span>
            <span className="copyright">© 2026 YOUR NAME. ALL RIGHTS RESERVED.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
