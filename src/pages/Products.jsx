import React from 'react'
import { Link } from 'react-router-dom'

const PinkCard = ({ title, price }) => (
	<div className="prod-card">
		<div className="prod-img" />
		<div className="prod-body">
			<h4>{title}</h4>
			<p className="muted">Brightening • Antioxidant • Vegan</p>
			<div className="prod-bottom">
				<span className="price">${price}</span>
				<button className="add-to-cart">Add to Cart</button>
			</div>
		</div>
	</div>
)

export default function Products() {
	return (
		<>
			<header className="navbar">
				<div className="container navbar-inner">
					<Link to="/" className="brand" aria-label="Home">
						<img className="brand-img" src="/logo.png" alt="SkinSchedule logo" />
					</Link>
					<nav className="nav-links">
						<Link to="/">Home</Link>
						<Link className="active" to="/products">Products</Link>
						<a href="/#about">About</a>
						<a href="/#reviews">Reviews</a>
						<a href="/#contact">Contact</a>
					</nav>
				</div>
			</header>

			<section className="hero">
				<div className="container">
					<h1 style={{textAlign:'center'}}>Our Products</h1>
					<p className="section-sub">Pink-themed collection designed for radiance.</p>
				</div>
			</section>

			<section>
				<div className="container products-grid">
					<PinkCard title="Glow-Up Glutathione" price={59.99} />
					<PinkCard title="Radiance Complex" price={39.99} />
					<PinkCard title="Bright Skin Set" price={89.99} />
					<PinkCard title="Night Repair Serum" price={29.99} />
				</div>
			</section>

			<footer className="footer">
				<div className="container bottom-bar">
					<div>© {new Date().getFullYear()} SkinSchedule.</div>
					<div className="footer-links">
						<Link to="/">Home</Link>
						<Link to="/products">Products</Link>
					</div>
				</div>
			</footer>
		</>
	)
}


