import React from 'react'
import logoUrl from '@/assets/Images/logo.png'
import { useCart } from './CartContext.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/assets/css/Navbar.css'

// --- THIS IS THE FIX ---
// You must import the CSS file for the styles to apply
// (Assuming Navbar.css is in the same folder as Navbar.jsx)
// If it's in 'src/assets/css/', use: import '../assets/css/Navbar.css'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const { count, toggle } = useCart()
  const [activeHash, setActiveHash] = React.useState(
    typeof window !== 'undefined' ? window.location.hash || '#' : '#'
  )
  const [query, setQuery] = React.useState('')

  React.useEffect(() => {
    const onHash = () => setActiveHash(window.location.hash || '#')
    const onScroll = () => {
      const header = document.querySelector('.navbar')
      if (!header) return
      if (window.scrollY > 6) header.classList.add('scrolled')
      else header.classList.remove('scrolled')
    }
    window.addEventListener('hashchange', onHash)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => {
      window.removeEventListener('hashchange', onHash)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const handleNavClick = (id) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    window.location.hash = `#${id}`
  }

  const submitSearch = (e) => {
    e.preventDefault()
    if (!query.trim()) return
    alert(`Searching for: ${query}`)
  }

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a
          href="#"
          className="brand"
          aria-label="SkinSchedule home"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <img className="brand-img" src={logoUrl} alt="SkinSchedule logo" />
        </a>

        <nav className="nav-links">
          <a
            href="/"
          >
            Home
          </a>
          <a href="/products">Products</a>
          <a href="/about">About</a>
          <a
            className={activeHash === '#reviews' ? 'active' : ''}
            href="#reviews"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('reviews')
            }}
          >
            Reviews
          </a>
          <a href="/contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <button className="cart-btn" aria-label="Open cart" onClick={toggle}>
            <i className="bi bi-cart" aria-hidden />
          <span className="cart-badge">{count}</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          <form className="search" onSubmit={submitSearch}>
            <span className="search-icon" aria-hidden>
              <i className="bi bi-search" />
            </span>
            <input
              value={query}               onChange={(e) => setQuery(e.target.value)}
              aria-label="Search"
              placeholder="Search"
            />
          </form>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('root')
            }}
          >
            Home
          </a>
          <a href="/products">Products</a>
          <a href="/about">About</a>
          <a
            href="#reviews"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('reviews')
            }}
          >
            Reviews
          </a>
          <a href="/contact">Contact</a>
        </div>
      )}
    </header>
  )
}
 