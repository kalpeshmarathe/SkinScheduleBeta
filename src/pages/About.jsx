import React from 'react'
import { Link } from 'react-router-dom'
import logoUrl from '../../logo.png'
import { useCart } from '../CartContext.jsx'

const IconCart = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M6 6h15l-1.5 8.5a2 2 0 0 1-2 1.6H9.2a2 2 0 0 1-2-1.6L6 6Zm0 0L5 3H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="10" cy="20" r="1.5" fill="currentColor"/>
        <circle cx="18" cy="20" r="1.5" fill="currentColor"/>
    </svg>
)

export default function About() {
    const { count, toggle } = useCart()
	return (
		<>
			<header className="navbar">
				<div className="container navbar-inner">
                    <Link to="/" className="brand" aria-label="Home">
                        <img className="brand-img" src={logoUrl} alt="SkinSchedule logo" />
					</Link>
					<nav className="nav-links">
						<Link to="/">Home</Link>
						<Link to="/products">Products</Link>
						<Link className="active" to="/about">About</Link>
						<Link to="/contact">Contact</Link>
					</nav>
                    <div className="nav-actions" style={{gap:12}}>
                        <button className="cart-btn" aria-label="Open cart" onClick={toggle}>
                            <IconCart/>
                            <span className="cart-badge">{count}</span>
                        </button>
                    </div>
				</div>
			</header>

			<section className="hero">
				<div className="container">
					<h1 style={{textAlign:'center'}}>Our Story</h1>
					<p className="section-sub">Science-backed skincare designed for real schedules.</p>
				</div>
			</section>

			<section>
				<div className="container feature-row">
					<div className="feature">
						<div className="icon">🔬</div>
						<h4>Clinically Inspired</h4>
						<p className="muted">We choose ingredients with research behind them—no fluff.</p>
					</div>
					<div className="feature">
						<div className="icon">🌱</div>
						<h4>Clean & Kind</h4>
						<p className="muted">Vegan, cruelty‑free formulas with thoughtful sourcing.</p>
					</div>
					<div className="feature">
						<div className="icon">📅</div>
						<h4>Made for Routines</h4>
						<p className="muted">Simple steps that fit mornings, nights, and everything between.</p>
					</div>
				</div>
			</section>

			<footer className="footer">
				<div className="container bottom-bar">
					<div>© {new Date().getFullYear()} SkinSchedule.</div>
					<div className="footer-links">
						<Link to="/">Home</Link>
						<Link to="/products">Products</Link>
						<Link to="/contact">Contact</Link>
					</div>
				</div>
			</footer>
		</>
	)
}


