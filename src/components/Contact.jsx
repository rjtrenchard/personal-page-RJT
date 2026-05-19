export default function Contact() {
  return (
    <section id="contact">
      <div className="section-inner">
        <div className="section-heading">
          <div>
            <p className="section-num">03.</p>
            <h2>Get In Touch</h2>
          </div>
        </div>

        <div className="contact-inner">
          <p>
            Whether you have a question, want to collaborate, or just want to
            say hi — my inbox is always open.
          </p>
          <a href="mailto:you@example.com" className="btn btn-outline contact-email">
            Say Hello
          </a>

          <ul className="contact-links">
            <li>
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
