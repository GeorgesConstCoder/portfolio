import styles from "./page.module.css";

const projects = [
  {
    number: "01",
    category: "Computer Vision · M.S. Thesis",
    title: "AI for safer work zones",
    description:
      "Sistema de inteligencia artificial para detectar, rastrear y evaluar dispositivos temporales de control de tráfico mediante YOLO, DINOv2, OCR y datos GPS.",
  },
  {
    number: "02",
    category: "Blazor · C# · Azure",
    title: "Construction Finance Toolkit",
    description:
      "Aplicación web para analizar valor del dinero en el tiempo, préstamos, refinanciamiento y flujos de caja.",
  },
  {
    number: "03",
    category: "Revit API · C# · BIM",
    title: "BIM Automation",
    description:
      "Herramientas para automatizar elementos, parámetros y datos de modelos de Autodesk Revit.",
  },
];

export default function Home() {
  return (
    <main className={styles.notebook}>
      <div className={styles.notebookMargin} />

      <div className={styles.binderHoles} aria-hidden="true">
        {Array.from({ length: 12 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>

      <header className={styles.header}>
        <a href="#" className={styles.logo}>
          JC
        </a>

        <nav className={styles.navigation}>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="mailto:jisraelcorrea@live.com">Contact</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <div>
          <p className={styles.smallTitle}>
            Civil Engineer · AI Builder
          </p>

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
            Civil engineer and researcher creating computer vision systems,
            BIM automations and practical software for the built environment.
          </p>

          <a href="#projects" className={styles.button}>
            Explore my work →
          </a>
        </div>

        <div className={styles.paperCard}>
          <div className={styles.tape} />

          <p className={styles.cardLabel}>CURRENT RESEARCH</p>

          <div className={styles.drawing}>
            <div
              className={`${styles.detectionBox} ${styles.boxOne}`}
            >
              <span>DRUM</span>
              <small>0.94</small>
            </div>

            <div
              className={`${styles.detectionBox} ${styles.boxTwo}`}
            >
              <span>TTC SIGN</span>
              <small>0.89</small>
            </div>

            <p className={styles.pipeline}>
              YOLO → DINOv2 → GPS → C-25
            </p>
          </div>

          <p className={styles.cardNote}>
            Computer vision for temporary traffic control inspections.
          </p>
        </div>
      </section>

      <section className={styles.projects} id="projects">
        <div className={styles.sectionTitle}>
          <p className={styles.sectionTitleText}>
            Selected work
          </p>

          <h2 className={styles.sectionHeading}>
            Research and tools built to solve real problems.
          </h2>
        </div>

        <div>
          {projects.map((project) => (
            <article
              className={styles.project}
              key={project.number}
            >
              <span className={styles.projectNumber}>
                {project.number}
              </span>

              <div>
                <p className={styles.projectCategory}>
                  {project.category}
                </p>

                <h3 className={styles.projectTitle}>
                  {project.title}
                </h3>

                <p className={styles.projectDescription}>
                  {project.description}
                </p>
              </div>

              <span className={styles.arrow}>↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.about} id="about">
        <p className={styles.smallTitle}>About me</p>

        <h2 className={styles.sectionHeading}>
          Engineering judgment translated into working technology.
        </h2>

        <p className={styles.aboutText}>
          M.S. in Civil Engineering from the University of Alabama at
          Birmingham, focused on construction, computer vision, BIM and
          engineering software development.
        </p>
      </section>

      <footer className={styles.footer}>
        <p className={styles.footerNote}>
          Have an engineering problem worth solving?
        </p>

        <a
          href="mailto:jisraelcorrea@live.com"
          className={styles.footerLink}
        >
          Let&apos;s build it →
        </a>
      </footer>
    </main>
  );
}