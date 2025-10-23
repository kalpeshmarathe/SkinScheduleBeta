import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '@/components/Navbar.jsx'


export default function About() {
    
	return (
		<>
			<Navbar />
				

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



