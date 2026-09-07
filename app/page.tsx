import Link from "next/link"

import { members } from "./data/members"
import styles from "./page.module.css"

const capabilities = [
  {
    number: "01",
    label: "Engineering consulting",
    title: "Better decisions for complex projects.",
    description:
      "Technical guidance for BIM implementation, digital delivery, construction planning and process improvement.",
    topics: ["BIM strategy", "Project controls", "Digital workflows"],
  },
  {
    number: "02",
    label: "Applied research",
    title: "Research designed for field use.",
    description:
      "Focused studies, technology assessments and proof-of-concept development for construction and infrastructure challenges.",
    topics: ["Field validation", "Technical studies", "Prototyping"],
  },
  {
    number: "03",
    label: "Industry solutions",
    title: "Working technology, not isolated demos.",
    description:
      "AI, computer vision, BIM automation, GIS and custom software connected to real engineering workflows.",
    topics: ["Computer vision", "Automation", "BIM + GIS"],
  },
  {
    number: "04",
    label: "Professional training",
    title: "Technical skills built around practice.",
    description:
      "Courses and tailored training for professionals, companies and academic teams working across the built environment.",
    topics: ["Technical courses", "Team training", "Workshops"],
  },
]

const researchAreas = [
  "Artificial intelligence",
  "Computer vision",
  "BIM and digital twins",
  "Geospatial systems",
  "Infrastructure management",
  "Construction technology",
]

const workflow = [
  {
    number: "01",
    title: "Frame the challenge",
    description:
      "We define the operational problem, constraints and measurable outcome with the project team.",
  },
  {
    number: "02",
    title: "Research and design",
    description:
      "We evaluate existing methods, select the right technical approach and design a focused solution.",
  },
  {
    number: "03",
    title: "Prototype and validate",
    description:
      "We test the concept with representative project data and document performance, limitations and value.",
  },
  {
    number: "04",
    title: "Implement and transfer",
    description:
      "We support adoption through practical tools, documentation and training for the people who will use it.",
  },
]

const courseAreas = [
  "BIM and digital construction",
  "Programming for engineers",
  "AI and computer vision",
  "GIS and infrastructure",
  "Construction management",
]

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label="AEC Applied Research Lab home">
          <span className={styles.brandMark}>AEC</span>
          <span className={styles.brandName}>
            Applied Research Lab
            <small>Built environment innovation</small>
          </span>
        </Link>

        <nav className={styles.navigation} aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#research">Research</a>
          <a href="#training">Courses</a>
          <Link href="/members">Team</Link>
        </nav>

        <a className={styles.headerCta} href="mailto:jisraelcorrea@live.com?subject=Project inquiry">
          Discuss a project
          <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Research · Consulting · Technology · Education</p>
          <h1>
            Research-driven solutions for the <span>built environment.</span>
          </h1>
          <p className={styles.heroDescription}>
            We combine engineering expertise, applied research and advanced technology to help construction organizations plan, build, inspect and manage infrastructure more effectively.
          </p>

          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#services">
              Explore our capabilities
              <span aria-hidden="true">↓</span>
            </a>
            <Link className={styles.secondaryButton} href="/members">
              Meet the team
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <aside className={styles.heroPanel} aria-label="Lab focus">
          <div className={styles.panelHeader}>
            <span>LAB / 001</span>
            <span>Applied R&amp;D</span>
          </div>

          <div className={styles.panelCore}>
            <span className={styles.axisLabel}>INDUSTRY NEED</span>
            <div className={styles.coreDiagram}>
              <span>ENGINEERING</span>
              <strong>+</strong>
              <span>RESEARCH</span>
              <strong>+</strong>
              <span>TECHNOLOGY</span>
            </div>
            <span className={styles.axisLabel}>FIELD-READY SOLUTION</span>
          </div>

          <div className={styles.panelFooter}>
            <span>Construction</span>
            <span>Infrastructure</span>
            <span>Digital delivery</span>
          </div>
        </aside>
      </section>

      <section className={styles.signalStrip} aria-label="What connects our work">
        <span>We investigate</span>
        <i aria-hidden="true" />
        <span>We build</span>
        <i aria-hidden="true" />
        <span>We validate</span>
        <i aria-hidden="true" />
        <span>We transfer knowledge</span>
      </section>

      <section className={styles.services} id="services">
        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.sectionNumber}>01</span>
            <p className={styles.sectionKicker}>Capabilities</p>
          </div>
          <div>
            <h2>From technical questions to practical implementation.</h2>
            <p>
              Four complementary ways to support organizations working across construction and infrastructure.
            </p>
          </div>
        </div>

        <div className={styles.capabilityGrid}>
          {capabilities.map((capability) => (
            <article className={styles.capabilityCard} key={capability.number}>
              <div className={styles.capabilityTop}>
                <span>{capability.number}</span>
                <p>{capability.label}</p>
              </div>
              <h3>{capability.title}</h3>
              <p className={styles.capabilityDescription}>{capability.description}</p>
              <div className={styles.topicList}>
                {capability.topics.map((topic) => (
                  <span key={topic}>{topic}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.research} id="research">
        <div className={styles.researchIntro}>
          <span className={styles.sectionNumber}>02</span>
          <p className={styles.sectionKicker}>Applied research</p>
          <h2>Advanced methods tested against real engineering conditions.</h2>
          <p>
            Our work connects emerging technology with domain knowledge, field constraints and measurable project outcomes.
          </p>
          <a href="mailto:jisraelcorrea@live.com?subject=Research collaboration">
            Propose a research challenge
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className={styles.researchBoard}>
          <div className={styles.boardHeader}>
            <span>RESEARCH DOMAINS</span>
            <span>2026 / ONGOING</span>
          </div>
          <div className={styles.researchList}>
            {researchAreas.map((area, index) => (
              <div key={area}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{area}</p>
                <i aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.sectionNumber}>03</span>
            <p className={styles.sectionKicker}>How we work</p>
          </div>
          <div>
            <h2>A direct path from problem definition to adoption.</h2>
          </div>
        </div>

        <div className={styles.processGrid}>
          {workflow.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.training} id="training">
        <div className={styles.trainingCopy}>
          <span className={styles.sectionNumber}>04</span>
          <p className={styles.sectionKicker}>Professional training</p>
          <h2>Knowledge built from engineering practice.</h2>
          <p>
            Practical courses and tailored workshops for professionals and teams adopting new digital methods in the built environment.
          </p>
          <a href="mailto:jisraelcorrea@live.com?subject=Training inquiry">
            Ask about training
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className={styles.courseList}>
          {courseAreas.map((course, index) => (
            <div key={course}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{course}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.team}>
        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.sectionNumber}>05</span>
            <p className={styles.sectionKicker}>The team</p>
          </div>
          <div>
            <h2>Engineering experience across disciplines.</h2>
            <p>
              A multidisciplinary team working across civil engineering, architecture, BIM, GIS, software and applied AI.
            </p>
          </div>
        </div>

        <div className={styles.teamGrid}>
          {members.map((member, index) => (
            <article className={styles.memberCard} key={member.slug}>
              <div className={styles.memberTop}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{member.location.split("·")[0]}</span>
              </div>
              <h3>{member.shortName}</h3>
              <p>{member.title}</p>
              <Link href={`/members/${member.slug}`}>
                View profile
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>

        <Link className={styles.teamLink} href="/members">
          Meet the complete team
          <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section className={styles.contact}>
        <p>Have a construction challenge worth investigating?</p>
        <h2>Let&apos;s turn it into a practical solution.</h2>
        <a href="mailto:jisraelcorrea@live.com?subject=Project inquiry">
          Discuss a project
          <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer className={styles.footer}>
        <div>
          <strong>AEC Applied Research Lab</strong>
          <span>Research · Consulting · Technology · Education</span>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#services">Services</a>
          <a href="#research">Research</a>
          <a href="#training">Courses</a>
          <Link href="/members">Team</Link>
        </nav>
        <span>© 2026 AEC Applied Research Lab</span>
      </footer>
    </main>
  )
}
