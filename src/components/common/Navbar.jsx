import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container nav-inner">

<div className="logo-container">

<img
  src={`${import.meta.env.BASE_URL}Images/ORK_Logo.png`}
  alt="Logo"
  className="logo-image"
/>


  <div className="logo-text">
    <h2>Omkar Kulkarni & Associates</h2>
    <span>Chartered Accountants</span>
  </div>
</div>


        {/* Desktop Menu */}
        <nav className="nav-links desktop-menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <Link to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>

          <Link to="/faq" onClick={() => setMenuOpen(false)}>
            FAQ
          </Link>

          <Link to="/blog" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}
