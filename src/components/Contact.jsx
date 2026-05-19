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
          <a href="mailto:rjtrenchard@gmail.com " className="btn btn-outline contact-email">
            Say Hello
          </a>

          <ul className="contact-links">
            <li>
              <a href="https://github.com/rjtrenchard" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/rj-trenchard" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
