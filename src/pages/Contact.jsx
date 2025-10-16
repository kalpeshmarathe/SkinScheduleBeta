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

export default function Contact() {
	const onSubmit = (e) => { e.preventDefault(); alert('Thanks! We will reach out soon.')} 
    const { count, toggle } = useCart()
    const [mobileOpen, setMobileOpen] = React.useState(false)
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
						<Link to="/about">About</Link>
						<Link className="active" to="/contact">Contact</Link>
					</nav>
                    <div className="nav-actions" style={{gap:12}}>
                        <button className="cart-btn" aria-label="Open cart" onClick={toggle}>
                            <IconCart/>
                            <span className="cart-badge">{count}</span>
                        </button>
                        <button className="nav-toggle" aria-label="Toggle menu" onClick={()=>setMobileOpen(v=>!v)}>
                            <span/>
                            <span/>
                            <span/>
                        </button>
                    </div>
				</div>
                {mobileOpen && (
                    <div className="mobile-menu">
                        <Link to="/" onClick={()=>setMobileOpen(false)}>Home</Link>
                        <Link to="/products" onClick={()=>setMobileOpen(false)}>Products</Link>
                        <Link to="/about" onClick={()=>setMobileOpen(false)}>About</Link>
                        <Link to="/contact" onClick={()=>setMobileOpen(false)}>Contact</Link>
                    </div>
                )}
			</header>

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



