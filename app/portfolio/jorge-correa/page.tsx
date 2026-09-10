import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

const expertise = [
  {
    icon: "⌘",
    title: "BIM AUTOMATION",
    description: "Revit API, C# and automated model workflows.",
  },
  {
    icon: "</>",
    title: "COMPUTER VISION",
    description: "Turning field imagery into inspection data.",
  },
  {
    icon: "◇",
    title: "BUILT ENVIRONMENT",
    description: "Practical tools for construction projects.",
  },
  {
    icon: "↗",
    title: "RESEARCH & DEVELOPMENT",
    description: "Connecting engineering with emerging technology.",
  },
];

const projects = [
  {
    number: "01",
    category: "M.S. Thesis · Computer Vision",
    title: "AI for Temporary Traffic Control Inspection",
    description:
      "End-to-end computer vision framework for identifying, tracking and evaluating temporary traffic control devices in roadway work zones.",
    technologies:
      "YOLO · DINOv2 · BoT-SORT · OCR · GPS · PyTorch",
    result:
      "Detection and segmentation across 11 TTCD-related classes with georeferenced outputs for ALDOT C-25 documentation.",
  },
  {
    number: "02",
    category: "Independent Project · Web Application",
    title: "Construction Finance Toolkit",
    description:
      "Interactive financial analysis platform created to apply construction engineering economics through practical computational tools.",
    technologies:
      "Blazor · C# · .NET · Microsoft Azure",
    result:
      "Time value of money, loan amortization, refinancing and cash-flow analysis modules.",
  },
  {
    number: "03",
    category: "Independent Project · Artificial Intelligence",
    title: "Azure AI for Engineering Applications",
    description:
      "Integration of artificial intelligence services for processing engineering images, documents and technical information.",
    technologies:
      "Azure AI · Computer Vision · Document Intelligence · RAG",
    result:
      "Computer vision, document processing and generative AI workflows for engineering applications.",
  },
];

const experience = [
  {
    period: "FEB 2024 — JUL 2024",
    role: "C# & Revit API Instructor",
    company: "BIM Automation",
    description:
      "Delivered hands-on training in C# programming applied to Autodesk Revit API and BIM automation. Developed exercises for modifying Revit elements, parameters and model data programmatically.",
  },
  {
    period: "FEB 2022 — NOV 2023",
    role: "Construction Engineering Intern",
    company: "Las Loritas Building Project · Santa Cruz, Bolivia",
    description:
      "Supported construction inspections, quantity take-offs, material tracking and progress monitoring for reinforced concrete, masonry, architectural and finishing activities.",
  },
  {
    period: "FEB 2020 — NOV 2023",
    role: "Undergraduate Teaching Assistant",
    company: "Department of Civil Engineering · EMI",
    description:
      "Supported undergraduate engineering courses and guided students in engineering problem-solving, technical software and coursework.",
  },
];

const skillGroups = [
  {
    title: "Engineering & Construction",
    skills: [
      "AutoCAD",
      "Civil 3D",
      "Primavera P6",
      "On-Screen Takeoff",
      "CYPECAD",
      "PTC Mathcad",
    ],
  },
  {
    title: "BIM & Digital Construction",
    skills: [
      "Revit",
      "Revit API",
      "Navisworks Manage",
      "Bentley SYNCHRO 4D",
      "Autodesk Platform Services",
    ],
  },
  {
    title: "AI & Computer Vision",
    skills: [
      "PyTorch",
      "OpenCV",
      "Ultralytics YOLO",
      "DINOv2",
      "BoT-SORT",
      "EasyOCR",
      "scikit-learn",
    ],
  },
  {
    title: "Programming & Web",
    skills: [
      "Python",
      "C#",
      ".NET",
      "JavaScript",
      "React",
      "Blazor",
      "ASP.NET Core",
      "REST APIs",
    ],
  },
  {
    title: "Data & Geospatial",
    skills: [
      "SQL",
      "PostgreSQL",
      "SQL Server",
      "MongoDB",
      "Pandas",
      "NumPy",
      "GeoPandas",
      "Power BI",
    ],
  },
  {
    title: "Development & Cloud",
    skills: [
      "Git",
      "GitHub",
      "Microsoft Azure",
      "Visual Studio",
      "VS Code",
      "Jupyter Notebook",
    ],
  },
];

const certifications = [
  "OSHA 30-Hour Construction Safety and Health",
  "CITI Program — Responsible Conduct of Research",
  "UAB — Responsible Conduct of Research Training",
];

type KnowledgeModule = {
  title: string;
  href?: string;
};

type KnowledgeTrack = {
  code: string;
  title: string;
  description: string;
  modules: KnowledgeModule[];
};

const knowledgeTracks: KnowledgeTrack[] = [
  {
    code: "FIN",
    title: "Finance for Construction",
    description:
      "Core financial concepts translated into decisions for projects, contractors and construction organizations.",
    modules: [
      {
        title: "Depreciation",
        href: "/portfolio/jorge-correa/knowledge/finance-for-construction/depreciation",
      },
      {
        title: "Financial Statement Analysis",
      },
      {
        title: "Time Value of Money",
      },
      {
        title: "Cash Flow Analysis",
      },
    ],
  },
  {
    code: "AI",
    title: "AI for Construction",
    description:
      "Practical foundations for understanding and applying artificial intelligence across the built environment.",
    modules: [
      {
        title: "Computer Vision",
      },
      {
        title: "Object Detection & Segmentation",
      },
      {
        title: "Model Evaluation",
      },
      {
        title: "AI-Assisted Inspection",
      },
    ],
  },
];

export default function Home() {
  return (
    <main className={styles.notebook}>
      <div className={styles.notebookMargin} />

      <div className={styles.binderHoles} aria-hidden="false">
        {Array.from({ length: 15 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>

      <header className={styles.header}>
        <a href="#top" className={styles.identity}>
          <span className={styles.logo}>JC</span>

          <span className={styles.fullName}>
            JORGE ISRAEL CORREA
          </span>

          <span className={styles.profession}>
            CIVIL ENGINEER · AI BUILDER
          </span>
        </a>

        <nav className={styles.navigation}>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#knowledge">Knowledge</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.heroContent}>
          <p className={styles.handwritten}>
            Notes from an engineer →
          </p>

          <h1 className={styles.title}>
            I build at the intersection of{" "}
            <span className={styles.highlight}>
              infrastructure
            </span>{" "}
            and intelligence.
          </h1>

          <p className={styles.description}>
            Civil engineer and researcher creating computer vision
            systems, BIM automations and practical software for the
            built environment.
          </p>

          <div className={styles.heroActions}>
            <a href="#projects" className={styles.primaryButton}>
              Explore my work →
            </a>

            <a href="#about" className={styles.secondaryButton}>
              About me
            </a>
          </div>
        </div>

        <div className={styles.profileCard}>
          <div className={styles.tape} />

          <div className={styles.profileLabel}>
            ENGINEER PROFILE
          </div>

          <div className={styles.photoFrame}>
            <Image
              src="/jorge-correa.png"
              alt="Jorge Israel Correa, civil engineer and AI researcher"
              fill
              priority
              sizes="(max-width: 900px) 80vw, 35vw"
              className={styles.portrait}
            />
          </div>

          <div className={styles.profileDetails}>
            <strong>JORGE CORREA</strong>
            <span>CIVIL ENGINEERING · BIM · AI</span>
          </div>

          <p className={styles.profileNote}>
            People. Processes. Better infrastructure.
          </p>
        </div>
      </section>

      <section
        className={styles.expertiseStrip}
        aria-label="Areas of expertise"
      >
        {expertise.map((item) => (
          <article className={styles.expertiseItem} key={item.title}>
            <span className={styles.expertiseIcon}>
              {item.icon}
            </span>

            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.projects} id="projects">
        <div className={styles.sectionIntroduction}>
          <div>
            <span className={styles.sectionNumber}>01</span>
            <p className={styles.sectionKicker}>Selected work</p>
          </div>

          <div>
            <h2>Research and tools built to solve real problems.</h2>

            <p>
              Projects combining civil engineering knowledge with
              computer vision, BIM automation and software development.
            </p>
          </div>
        </div>

        <div className={styles.projectList}>
          {projects.map((project) => (
            <article
              className={styles.project}
              key={project.number}
            >
              <span className={styles.projectNumber}>
                {project.number}
              </span>

              <div className={styles.projectContent}>
                <p className={styles.projectCategory}>
                  {project.category}
                </p>

                <h3>{project.title}</h3>

                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                <p className={styles.projectResult}>
                  <strong>Outcome:</strong> {project.result}
                </p>
              </div>

              <div className={styles.projectSide}>
                <span>{project.technologies}</span>
                <span className={styles.projectArrow}>↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.experience} id="experience">
        <div className={styles.sectionIntroduction}>
          <div>
            <span className={styles.sectionNumber}>02</span>
            <p className={styles.sectionKicker}>
              Professional experience
            </p>
          </div>

          <div>
            <h2>
              From construction sites to digital engineering.
            </h2>

            <p>
              Experience in field execution, technical education and
              BIM automation.
            </p>
          </div>
        </div>

        <div className={styles.timeline}>
          {experience.map((item) => (
            <article className={styles.timelineItem} key={item.role}>
              <div className={styles.timelinePeriod}>
                {item.period}
              </div>

              <div className={styles.timelineContent}>
                <h3>{item.role}</h3>
                <p className={styles.company}>{item.company}</p>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.about} id="about">
        <div className={styles.sectionIntroduction}>
          <div>
            <span className={styles.sectionNumber}>03</span>
            <p className={styles.sectionKicker}>
              Education & background
            </p>
          </div>

          <div>
            <h2>
              Engineering judgment translated into working technology.
            </h2>

            <p>
              My work connects construction knowledge with automation,
              data and artificial intelligence.
            </p>
          </div>
        </div>

        <div className={styles.educationGrid}>
          <article className={styles.educationCard}>
            <span>2024 — 2026</span>
            <h3>M.S. in Civil Engineering</h3>
            <p>University of Alabama at Birmingham</p>
            <strong>GPA: 4.00 / 4.00</strong>
          </article>

          <article className={styles.educationCard}>
            <span>2019 — 2023</span>
            <h3>B.E. in Civil Engineering</h3>
            <p>Escuela Militar de Ingeniería</p>
            <strong>Santa Cruz, Bolivia</strong>
          </article>
        </div>

        <div className={styles.researchFeature}>
          <p className={styles.paperLabel}>M.S. THESIS</p>

          <h3>
            Automated Compliance Verification of Temporary Traffic
            Control Devices
          </h3>

          <p>
            Developed an AI-driven, multi-model computer vision pipeline
            for detecting, segmenting, tracking and assessing temporary
            traffic control devices according to MUTCD and ALDOT
            standards.
          </p>

          <div className={styles.researchTags}>
            <span>Object detection</span>
            <span>Segmentation</span>
            <span>Condition assessment</span>
            <span>Georeferenced reporting</span>
            <span>ALDOT C-25</span>
          </div>
        </div>
      </section>

      <section className={styles.skills}>
        <div className={styles.sectionIntroduction}>
          <div>
            <span className={styles.sectionNumber}>04</span>
            <p className={styles.sectionKicker}>
              Technical toolkit
            </p>
          </div>

          <div>
            <h2>Tools I use to move from idea to implementation.</h2>
          </div>
        </div>

        <div className={styles.skillsGrid}>
          {skillGroups.map((group) => (
            <article className={styles.skillGroup} key={group.title}>
              <h3>{group.title}</h3>

              <div className={styles.skillTags}>
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.knowledge} id="knowledge">
        <div className={styles.sectionIntroduction}>
          <div>
            <span className={styles.sectionNumber}>05</span>
            <p className={styles.sectionKicker}>Knowledge Studio</p>
          </div>

          <div>
            <h2>Practical modules for modern construction.</h2>
            <p>
              A growing collection of concise learning tracks connecting
              engineering judgment, finance and emerging technology.
            </p>
          </div>
        </div>

        <div className={styles.knowledgeGrid}>
          {knowledgeTracks.map((track) => (
            <article className={styles.knowledgeTrack} key={track.code}>
              <div className={styles.knowledgeTrackHeader}>
                <span>{track.code}</span>
                <span>
                  {String(track.modules.length).padStart(2, "0")} modules
                </span>
              </div>

              <h3>{track.title}</h3>
              <p>{track.description}</p>

              <ul className={styles.knowledgePills}>
                {track.modules.map((module, index) => (
                  <li key={module.title}>
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {module.href ? (
                      <Link
                        href={module.href}
                        className={styles.knowledgeLink}
                      >
                        {module.title} →
                      </Link>
                    ) : (
                      module.title
                    )}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.certifications}>
        <div>
          <p className={styles.sectionKicker}>
            Certifications
          </p>

          <h2>Professional development</h2>
        </div>

        <div className={styles.certificationList}>
          {certifications.map((certification, index) => (
            <div key={certification}>
              <span>0{index + 1}</span>
              <p>{certification}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className={styles.footer} id="contact">
        <p className={styles.footerNote}>
          Have an engineering problem worth solving?
        </p>

        <h2>Let&apos;s build it.</h2>

        <div className={styles.contactLinks}>
          <a href="mailto:jisraelcorrea@live.com">
            Email ↗
          </a>

          <a
            href="https://www.linkedin.com/in/cmjic"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>

        <div className={styles.footerBottom}>
          <span>Jorge Israel Correa</span>
          <span>Miami, FL · Open to relocation</span>
          <span>© 2026</span>
        </div>
      </footer>
    </main>
  );
}
