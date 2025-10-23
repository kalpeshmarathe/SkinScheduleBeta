import React from 'react';

// This is a new component to render the "Synergy Table" as cards
const SynergySteps = ({ headers, rows }) => {
    return (
        <div className="ps-modal-synergy-steps">
            {rows.map((row, rowIndex) => (
                <div className="ps-modal-synergy-step" key={rowIndex}>
                    <h4>{row[0]} {headers[1]}</h4>
                    <p>{row[1]}</p>
                    
                    <h4>{headers[2]}</h4>
                    <p>{row[2]}</p>
                    
                    <h4>{headers[3]}</h4>
                    <p>{row[3]}</p>
                </div>
            ))}
        </div>
    );
};


// The main modal component
function ProductModal({ isOpen, onClose, product, onAddToCart }) {
    if (!product) return null; // Don't render if no product is selected

    const { name, imageUrl, price, modalContent } = product;

    return (
        <div 
            className={`ps-modal-overlay ${isOpen ? 'open' : ''}`} 
            onClick={onClose}
        >
            <div 
                className={`ps-modal-content ${isOpen ? 'open' : ''}`} 
                onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
            >
                <button className="ps-modal-close-btn" onClick={onClose}>&times;</button>
                
                <div className="ps-modal-layout">
                    
                    {/* --- NEW Left Column (Product Card) --- */}
                    <div className="ps-modal-product-card">
                        <div className="ps-modal-image-container">
                            <img src={imageUrl} alt={name} />
                        </div>
                        <h2 className="ps-modal-title">{name}</h2>
                        <div className="ps-modal-price">${price}</div>
                        <button 
                            className="ps-modal-btn-add" 
                            onClick={onAddToCart}
                        >
                            Add to Cart
                        </button>
                    </div>

                    {/* --- Right Column (Details) --- */}
                    <div className="ps-modal-details">
                        {modalContent.tagline && <p className="ps-modal-tagline">"{modalContent.tagline}"</p>}
                        
                        <p className="ps-modal-intro">{modalContent.intro}</p>
                        
                        {modalContent.sections.map(section => (
                            <div className="ps-modal-section" key={section.title}>
                                <h3>{section.title}</h3>
                                
                                {section.type === 'list' && (
                                    <ul className="ps-modal-list">
                                        {section.items.map(item => (
                                            <li key={item.name}>
                                                <strong>{item.name}</strong>
                                                <span>{item.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                
                                {section.type === 'text' && (
                                    <p className="ps-modal-text">{section.text}</p>
                                )}
                                
                                {section.type === 'table' && (
                                    <SynergySteps headers={section.headers} rows={section.rows} />
                                )}
                            </div>
                        ))}
                        
                        {modalContent.promise && <p className="ps-modal-promise">{modalContent.promise}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductModal;