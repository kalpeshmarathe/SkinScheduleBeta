import React from 'react'

const IconCheck = () => (
	<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
		<path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
	</svg>
)

const IconSearch = () => (
	<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
		<circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
		<path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
	</svg>
)

const IconCart = () => (
	<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
		<path d="M6 6h15l-1.5 8.5a2 2 0 0 1-2 1.6H9.2a2 2 0 0 1-2-1.6L6 6Zm0 0L5 3H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
		<circle cx="10" cy="20" r="1.5" fill="currentColor"/>
		<circle cx="18" cy="20" r="1.5" fill="currentColor"/>
	</svg>
)

export default function App() {
    const [mobileOpen, setMobileOpen] = React.useState(false)
    const [cartCount] = React.useState(2)
    const [activeHash, setActiveHash] = React.useState(typeof window !== 'undefined' ? window.location.hash || '#' : '#')
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
		<>
            <header className="navbar">
				<div className="container navbar-inner">
                    <a href="#" className="brand" aria-label="SkinSchedule home" onClick={(e)=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})}}>
                        <img className="brand-img" src="/logo.png" alt="SkinSchedule logo" />
                    </a>
                    <nav className="nav-links">
                        <a className={activeHash === '#' ? 'active' : ''} href="#" onClick={(e)=>{e.preventDefault();handleNavClick('root')}}>Home</a>
                        <a href="/products">Products</a>
                        <a href="/about">About</a>
                        <a className={activeHash === '#reviews' ? 'active' : ''} href="#reviews" onClick={(e)=>{e.preventDefault();handleNavClick('reviews')}}>Reviews</a>
                        <a href="/contact">Contact</a>
                    </nav>
                    <div className="nav-actions">
                        <form className="search show-md" onSubmit={submitSearch}>
                            <span className="search-icon"><IconSearch/></span>
                            <input value={query} onChange={(e)=>setQuery(e.target.value)} aria-label="Search products" placeholder="Search"/>
                        </form>
                        <button className="cart-btn" aria-label="Open cart">
                            <IconCart/>
                            <span className="cart-badge">{cartCount}</span>
                        </button>
                        <button className="nav-cta" onClick={()=>handleNavClick('products')}>Shop Now</button>
                        <button className="nav-toggle" aria-label="Toggle menu" onClick={()=>setMobileOpen(v=>!v)}>
                            <span/>
                            <span/>
                            <span/>
                        </button>
                    </div>
				</div>
                {mobileOpen && (
                    <div className="mobile-menu">
                        <form className="search" onSubmit={submitSearch}>
                            <span className="search-icon"><IconSearch/></span>
                            <input value={query} onChange={(e)=>setQuery(e.target.value)} aria-label="Search" placeholder="Search"/>
                        </form>
                        <a href="#" onClick={(e)=>{e.preventDefault();handleNavClick('root')}}>Home</a>
                        <a href="/products">Products</a>
                        <a href="/about">About</a>
                        <a href="#reviews" onClick={(e)=>{e.preventDefault();handleNavClick('reviews')}}>Reviews</a>
                        <a href="/contact">Contact</a>
                    </div>
                )}
			</header>

			<section className="hero">
				<div className="container hero-grid">
					<div>
						<div className="eyebrow">Unlock Your Inner Glow</div>
						<h1>Science-backed glow for your best skin</h1>
						<p>Discover radiant, healthy skin with premium glutathione tablets and curated skincare. Transform your skin with a routine that fits your schedule.</p>
						<button className="hero-cta" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
							<span>Shop Now</span>
						</button>
					</div>
					<div>
						<div className="product-card" aria-hidden></div>
					</div>
				</div>
			</section>

			<section id="products">
				<div className="container">
					<h2 className="section-title">Our Star Product</h2>
					<p className="section-sub">The foundation of your new skin schedule.</p>
					<div className="product-grid">
						<div>
							<div className="product-card" aria-hidden></div>
						</div>
						<div>
							<h3>Glow-Up Glutathione Tablets</h3>
							<div className="price">$59.99</div>
							<p className="muted">Each tablet is formulated to brighten your complexion, reduce oxidative stress, and support your skin’s natural glow.</p>
							<ul className="list">
								<li><span style={{color:'#10b981'}}><IconCheck/></span> Potent dose with enhanced uptake</li>
								<li><span style={{color:'#10b981'}}><IconCheck/></span> Powerful antioxidant protection</li>
								<li><span style={{color:'#10b981'}}><IconCheck/></span> Supports liver detoxification</li>
								<li><span style={{color:'#10b981'}}><IconCheck/></span> Vegan & cruelty‑free</li>
							</ul>
							<button className="add-to-cart">Add to Cart</button>
						</div>
					</div>
				</div>
			</section>

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

			<section id="about">
				<div className="container">
					<h2 className="section-title">Beauty on a Schedule</h2>
					<p className="section-sub">We blend clinical-grade ingredients with clean standards and delightful routines.</p>
					<div className="feature-row">
						<div className="feature">
							<div className="icon">✨</div>
							<h4>Visible Radiance</h4>
							<p className="muted">Target dullness and reveal a naturally luminous complexion.</p>
						</div>
						<div className="feature">
							<div className="icon">🛡️</div>
							<h4>Antioxidant Shield</h4>
							<p className="muted">Combat oxidative stress with daily support.</p>
						</div>
						<div className="feature">
							<div className="icon">⏰</div>
							<h4>Effortless Routine</h4>
							<p className="muted">A schedule-friendly approach that sticks.</p>
						</div>
					</div>
				</div>
			</section>

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
		</>
	)
}


