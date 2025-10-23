import React from 'react'
import CartSidebar from './components/CartSidebar.jsx';
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ProductSection from './components/ProductSection.jsx'
import AboutSection from './components/AboutSection.jsx'

export default function App() {
  

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

    

    return (
		<>
            <Navbar />
			<Hero />
			<ProductSection />
			
			
			<section id="reviews">
				<div className="container">
					<h2 className="section-title">Real Results, Real Stories</h2>
					<div className="cards">
						<div className="card">
							<div className="before-after">
								<div className="ba-tile">Before</div>
								<div className="ba-tile">After 6 Weeks</div>
							</div>
							<p className="quote"><strong>Sarah K.</strong> “My skin has never looked so even!”</p>
						</div>
						<div className="card">
							<div className="before-after">
								<div className="ba-tile">Before</div>
								<div className="ba-tile">After 4 Weeks</div>
							</div>
							<p className="quote"><strong>Becky O.</strong> “The glow is incredible!”</p>
						</div>
						<div className="card">
							<div className="before-after">
								<div className="ba-tile">Before</div>
								<div className="ba-tile">After 8 Weeks</div>
							</div>
							<p className="quote"><strong>John M.</strong> “Noticeably brighter tone.”</p>
						</div>
					</div>
				</div>
			</section>

			<AboutSection/>

			

			<section className="newsletter site-gradient" id="contact">
				<div className="container">
					<h2>Join The Schedule</h2>
					<p>Subscribe for exclusive offers, skincare tips, and new product announcements.</p>
					<form className="news-form" onSubmit={(e) => e.preventDefault()}>
						<input className="input" placeholder="Your email address" type="email" required />
						<button className="subscribe-btn" type="submit">Subscribe</button>
					</form>
				</div>
			</section>

			<footer className="footer">
				<div className="container footer-grid">
					<div>
						<div className="footer-brand">
							<h3>SkinSchedule</h3>
							<span className="badge">Glow Care</span>
						</div>
						<p className="muted">Beauty on a schedule. Your journey to radiant skin starts here.</p>
						<ul className="socials">
							<li><a className="social-btn" aria-label="Facebook" href="#">f</a></li>
							<li><a className="social-btn" aria-label="Twitter" href="#">t</a></li>
							<li><a className="social-btn" aria-label="Instagram" href="#">⌾</a></li>
						</ul>
					</div>
					<div>
						<h4>Shop</h4>
						<ul className="list">
							<li><a href="#products">All Products</a></li>
							<li><a href="#products">Glutathione Tablets</a></li>
							<li><a href="#">Skincare Sets</a></li>
						</ul>
					</div>
					<div>
						<h4>About</h4>
						<ul className="list">
							<li><a href="#about">Our Story</a></li>
							<li><a href="#contact">Contact Us</a></li>
							<li><a href="#">FAQ</a></li>
						</ul>
					</div>
					<div>
						<h4>Resources</h4>
						<ul className="list">
							<li><a href="#">Guides</a></li>
							<li><a href="#">Ingredients</a></li>
							<li><a href="#">Shipping & Returns</a></li>
						</ul>
					</div>
				</div>
				<div className="container bottom-bar">
					<div>© {new Date().getFullYear()} SkinSchedule. All rights reserved.</div>
					<div className="footer-links">
						<a href="#">Privacy</a>
						<a href="#">Terms</a>
						<a href="#">Cookies</a>
					</div>
				</div>
			</footer>
			<CartSidebar />
		</>
	)
}


