const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'ThreeJS',
  'Unity',
  // 'Rust',
  'C#',
  'C++',
  'C',
  // 'Go',
  'SQL',
  'AWS'
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
              Hello! I&rsquo;m R.J., this is a personal page to test out AI
              driven development. It seems pretty easy so far! I work across the
              stack but I have a keen interest in lower level development.
              I got a taste for soldering and arduino and I've been
              enjoying embedded development. From the cloud to the bare metal
              circuits, I like to learn it.
            </p>
            <p>
              Of course, I'm not just a software developer. I'm into classic games,
              brewing, mushroom foraging, and fishing. I'm always down to talk about
              these subjects!
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
            {/* <img src={aboutMe} alt="R.J. Trenchard photo" /> */}

          </div>
        </div>
      </div>
    </section>
  )
}
