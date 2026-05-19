const projects = [
  {
    title: 'Project One',
    description:
      'A short description of what this project does and what problem it solves. Keep it to two or three sentences.',
    tech: ['React', 'TypeScript', 'Vite'],
    github: '#',
    live: '#',
  },
  {
    title: 'Project Two',
    description:
      'Another project highlight. What was interesting about building this? What did you learn or ship?',
    tech: ['Node.js', 'PostgreSQL', 'REST'],
    github: '#',
    live: null,
  },
  {
    title: 'Project Three',
    description:
      'A third featured project. Link to a live demo or repo so visitors can explore it themselves.',
    tech: ['Rust', 'WebAssembly'],
    github: '#',
    live: '#',
  },
]

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function FolderIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-inner">
        <div className="section-heading">
          <div>
            <p className="section-num">02.</p>
            <h2>Projects</h2>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.title} className="project-card">
              <div className="project-card-header">
                <span className="project-icon"><FolderIcon /></span>
                <div className="project-links">
                  {p.github && (
                    <a href={p.github} aria-label={`${p.title} GitHub`}>
                      <GithubIcon />
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} aria-label={`${p.title} live demo`}>
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <ul className="project-tech">
                {p.tech.map((t) => (
                  <li key={t} className="tech-badge">{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
