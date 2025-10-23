import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '@/components/CartContext.jsx'
import Navbar from '@/components/Navbar.jsx'


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
    const [mobileOpen, setMobileOpen] = React.useState(false)
	return (
		<>
			<Navbar/>
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


