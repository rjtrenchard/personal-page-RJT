import { Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import Hobbies from './pages/Hobbies'

export default function App() {
  return (
    <div className="site-wrapper">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes>
      <footer className="footer">
        <p>Built with React &amp; Vite + ThreeJS</p>
      </footer>
    </div>
  )
}
