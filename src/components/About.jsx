const skills = [
  'JavaScript (ES2024)',
  'TypeScript',
  'React',
  'Node.js',
  'Rust',
  'SQL / PostgreSQL',
]

export default function About() {
  return (
    <section id="about">
      <div className="section-inner">
        <div className="section-heading">
          <div>
            <p className="section-num">01.</p>
            <h2>About Me</h2>
          </div>
        </div>

        <div className="about-body">
          <div className="about-text">
            <p>
              Hey! I&rsquo;m [Name], a developer with a passion for building
              things that live on the internet. I enjoy working across the stack
              and have a particular interest in systems programming and developer
              tooling.
            </p>
            <p>
              When I&rsquo;m not writing code, you&rsquo;ll find me [hobby /
              interest], [hobby / interest], or diving deep into [something you
              love].
            </p>
            <p>Here are a few technologies I&rsquo;ve been working with:</p>
            <ul className="about-skills">
              {skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div className="about-photo">
            {/* Replace with: <img src={yourPhoto} alt="Your Name" /> */}
            <span>photo here</span>
          </div>
        </div>
      </div>
    </section>
  )
}
