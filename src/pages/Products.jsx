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

const PinkCard = ({ id, title, price }) => {
    const { addItem } = useCart()
    return (
        <div className="prod-card">
            <div className="prod-img" />
            <div className="prod-body">
                <h4>{title}</h4>
                <p className="muted">Brightening • Antioxidant • Vegan</p>
                <div className="prod-bottom">
                    <span className="price">${price}</span>
                    <button className="add-to-cart" onClick={()=>addItem({ id, name: title, price })}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default function Products() {
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
						<Link className="active" to="/products">Products</Link>
						<a href="/#about">About</a>
						<a href="/#reviews">Reviews</a>
						<a href="/#contact">Contact</a>
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
					<h1 style={{textAlign:'center'}}>Our Products</h1>
					<p className="section-sub">Pink-themed collection designed for radiance.</p>
				</div>
			</section>

			<section>
				<div className="container products-grid">
                    <PinkCard id="glow-pill" title="Glow-Up Glutathione" price={59.99} />
                    <PinkCard id="radiance-complex" title="Radiance Complex" price={39.99} />
                    <PinkCard id="bright-skin-set" title="Bright Skin Set" price={89.99} />
                    <PinkCard id="night-repair-serum" title="Night Repair Serum" price={29.99} />
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


