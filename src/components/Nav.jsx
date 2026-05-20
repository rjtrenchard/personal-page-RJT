import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">RJ</Link>
      <ul className="nav-links">
        <li><a href="/#about">About</a></li>
        <li><a href="/#projects">Projects</a></li>
        <li>
          <NavLink
            to="/hobbies"
            className={({ isActive }) => isActive ? 'nav-active' : ''}
          >
            Hobbies
          </NavLink>
        </li>
        <li><a href="/#contact">Contact</a></li>
      </ul>
    </nav>
  )
}
