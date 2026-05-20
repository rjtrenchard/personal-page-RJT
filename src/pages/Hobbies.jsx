const hobbies = [
  {
    icon: '🎮',
    title: 'Classic Games',
    description:
      'From old-school JRPGs to retro PC titles, I have a deep appreciation for games that prioritized creativity within hardware constraints. Final Fantasy XI holds a special place — it\'s where a lot of my earliest programming projects came from.',
    tags: ['Final Fantasy XI', 'Retro', 'Emulation'],
  },
  {
    icon: '🍺',
    title: 'Homebrewing',
    description:
      'I brew my own beer at home — ales mostly, with the occasional experiment into lagers or sours. There\'s something satisfying about the process from grain to glass, and every batch teaches you something new.',
    tags: ['Ales', 'Lagers', 'Fermentation'],
  },
  {
    icon: '🍄',
    title: 'Mushroom Foraging',
    description:
      'The Pacific Northwest is an incredible place to forage. I spend time in the field identifying and collecting wild fungi. It\'s part nature walk, part puzzle — and it directly inspired my FungalHabitatML project.',
    tags: ['Pacific Northwest', 'Identification', 'Mycology'],
  },
  {
    icon: '🎣',
    title: 'Fishing',
    description:
      'Freshwater fishing, mostly. There\'s a meditative quality to it that\'s hard to find elsewhere — good for decompressing after a long sprint or a tough debugging session.',
    tags: ['Freshwater', 'Fly Fishing', 'PNW'],
  },
]

export default function Hobbies() {
  return (
    <main>
      <div className="section-inner hobbies-page">
        <div className="page-header">
          <p className="section-num">// hobbies</p>
          <h1>Outside the Terminal</h1>
          <p className="page-subtitle">
            What I get up to when I&rsquo;m not writing code.
          </p>
        </div>

        <div className="hobbies-grid">
          {hobbies.map((h) => (
            <div key={h.title} className="hobby-card">
              <span className="hobby-icon">{h.icon}</span>
              <h2>{h.title}</h2>
              <p>{h.description}</p>
              <ul className="project-tech">
                {h.tags.map((t) => (
                  <li key={t} className="tech-badge">{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
