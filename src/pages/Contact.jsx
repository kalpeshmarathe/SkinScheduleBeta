import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '@/components/Navbar.jsx'



export default function Contact() {
	const onSubmit = (e) => { e.preventDefault(); alert('Thanks! We will reach out soon.')} 
   
	return (
		<>
			<Navbar />
			<section className="newsletter site-gradient">
				<div className="container">
					<h2>Contact Us</h2>
					<p>Have questions about our pink collection? Send us a message.</p>
					<form className="news-form" onSubmit={onSubmit}>
						<input className="input" placeholder="Your email" type="email" required />
						<button className="subscribe-btn" type="submit">Send</button>
					</form>
				</div>
			</section>

			<section>
				<div className="container">
					<h3 className="section-title">Where to find us</h3>
					<p className="section-sub">We’re online-first and ship worldwide.</p>
				</div>
			</section>

			<footer className="footer">
				<div className="container bottom-bar">
					<div>© {new Date().getFullYear()} SkinSchedule.</div>
					<div className="footer-links">
						<Link to="/">Home</Link>
						<Link to="/products">Products</Link>
						<Link to="/about">About</Link>
					</div>
				</div>
			</footer>
		</>
	)
}



