import React, { useState } from 'react';
// --- 1. IMPORT YOUR CSS FILES ---
import '@/assets/css/ProductSection.css'; 
import '@/assets/css/ProductModal.css';   

// Your images
import LGlutatheonTablet from '../assets/Images/L-Glutathione.png';
import collagen from '../assets/Images/collagen.png';

// --- 2. IMPORT THE MODAL COMPONENT & CART ---
import ProductModal from './ProductModal'; // Assumes it's in the same folder
import { useCart } from './CartContext'; // <-- IMPORT useCart

// --- Product Data (Price updated) ---
const products = [
    {
        id: 'collagen-powder',
        name: 'SKINSCHEDULE™ Hydrolysed Marine Collagen Powder',
        price: 1999,
        description: 'A science-backed formula to rebuild, renew, and radiate your skin, hair, and nails from within.',
        imageUrl: collagen,
        modalContent: {
            intro: "Our Hydrolysed Marine Collagen Powder is a next-generation, science-backed formula designed to rebuild, renew, and radiate your skin from within. Crafted for those who live on schedule yet never compromise on glow — this blend fuels your skin, hair, and nails with clinically proven marine actives and powerful antioxidants.",
            tagline: "Every scoop is a ritual — a promise of timeless skin, plump hydration, and luminous confidence.",
            sections: [
                {
                    title: "The Formulation That Defines SkinSchedule",
                    type: "list",
                    items: [
                        { name: "Hydrolysed Marine Collagen (Type I & III)", text: "Restores elasticity, strengthens skin structure, and smoothens fine lines for a youthful, firm glow." },
                        { name: "L-Glutathione (Reduced Form)", text: "A master antioxidant that brightens dull skin, reduces pigmentation, and supports detoxification." },
                        { name: "Vitamin C", text: "Boosts collagen synthesis and enhances the absorption of marine peptides, amplifying skin firmness." },
                        { name: "Hyaluronic Acid", text: "Deeply hydrates and plumps the skin barrier, locking in moisture for a supple, dewy finish." },
                        { name: "Biotin & Vitamin B3 (Niacinamide)", text: "Strengthen hair and nails while improving skin barrier health and smooth texture." },
                        { name: "Astaxanthin & Resveratrol", text: "Potent antioxidants that protect against oxidative stress, UV damage, and premature aging." },
                        { name: "Coenzyme Q10 & Zinc Citrate", text: "Re-energize skin cells and support collagen protection while reducing inflammation." },
                        { name: "Silica (Bamboo Extract)", text: "Encourages natural collagen formation, promotes firmness, and enhances skin’s natural radiance." }
                    ]
                },
                {
                    title: "Mechanism of Action",
                    type: "text",
                    text: "Each serving works synergistically through: \n1. Collagen Rebuilding: Marine peptides activate fibroblasts. \n2. Antioxidant Defence: Glutathione, Resveratrol, and Astaxanthin neutralize free radicals. \n3. Hydration & Repair: Hyaluronic Acid and Vitamin C restore elasticity. \n4. Glow Synchronization: Daily intake aligns your skin’s renewal cycle."
                }
            ],
            promise: "“Timeless glow, perfectly on schedule.” Our collagen is more than a supplement — it’s a ritual designed to sync your inner wellness with outer beauty."
        }
    },
    {
        id: 'radiant-fizz',
        name: 'SKINSCHEDULE™ Skin Radiant Fizz',
        price: 1499,
        description: 'A daily glow ritual to transform dull, tired skin into luminous radiance. Fuses antioxidants with skin-nourishing vitamins.',
       imageUrl: LGlutatheonTablet,
        modalContent: {
            intro: "Introducing Skin Radiant Fizz — a daily glow ritual by SkinSchedule™, designed to transform dull, tired skin into luminous radiance from within. Each effervescent tablet fuses science-backed antioxidants with skin-nourishing vitamins for a bright, hydrated, and youthful complexion that keeps up with your schedule.",
            tagline: "Glow Smarter. Radiate Brighter. Stay On Schedule.",
            sections: [
                {
                    title: "What Makes Skin Radiant Fizz Unique",
                    type: "list",
                    items: [
                        { name: "L-Glutathione (Reduced Form)", text: "The master antioxidant that detoxifies, brightens, and reduces melanin production." },
                        { name: "Vitamin C", text: "A glow amplifier that enhances Glutathione activity and boosts collagen synthesis." },
                        { name: "N-Acetyl L-Cysteine (NAC)", text: "A powerful precursor to Glutathione that strengthens your body’s natural antioxidant defense." },
                        { name: "Alpha Lipoic Acid", text: "A universal antioxidant that revitalizes skin at the cellular level." },
                        { name: "Selenium & Zinc Gluconate", text: "Essential trace minerals that regulate oil balance, prevent breakouts, and protect skin." },
                        { name: "Hyaluronic Acid", text: "Hydration hero that plumps, smoothens, and deeply moisturizes from the inside." },
                        { name: "Astaxanthin", text: "A super antioxidant 6000x stronger than Vitamin C — improves elasticity and fades fine lines." },
                        { name: "Biotin, Vitamin B6 & Vitamin B3", text: "The beauty vitamin trio that strengthens skin barrier and promotes healthy hair, skin, and nails." }
                  ]
                },
                {
                    title: "Mechanism of Action — How Your Glow Works",
                type: "text",
                    text: "Skin Radiant Fizz works through a 3-phase Radiance Cycle: \n1. DETOXIFY: Glutathione + NAC cleanse your body. \n2. REPAIR: Vitamin C, ALA, and Astaxanthin restore and regenerate. \n3. HYDRATE & PROTECT: Hyaluronic Acid, Biotin, and minerals lock in hydration."
                }
            ],
            promise: "We believe glowing skin shouldn’t depend on makeup filters. Skin Radiant Fizz is a refreshing step toward real radiance, designed for every skin type."
        }
    },
    {
        id: 'radiance-duo',
        name: 'The SkinSchedule™ Radiance Duo',
        // --- UPDATED PRICE ---
        price: 3299, 
        description: 'The 360° skin transformation system. Marine Collagen rebuilds structure while Radiant Fizz enhances cellular brightness.',
        imageUrl: collagen, 
        modalContent: {
            intro: "Your skin needs more than just nourishment — it needs coordination. When SkinSchedule’s Hydrolysed Marine Collagen Powder is paired with Skin Radiant Fizz, it creates a 360° skin transformation system.",
            tagline: "Marine Collagen + Skin Radiant Fizz — A Duo That Works on Schedule with Your Glow.",
            sections: [
                {
                    title: "The Science of Synergy",
                    type: "table",
                    headers: ["Step", "Marine Collagen Powder", "Skin Radiant Fizz", "Synergistic Effect"],
                    rows: [
                        ["1️⃣", "Rebuilds Collagen Type I & III", "Boosts Glutathione and Vitamin C", "Faster collagen regeneration"],
                        ["2️⃣", "Provides amino acids", "Detoxifies and reduces pigmentation", "Even tone + firm, bright complexion"],
                        ["3️⃣", "Deeply hydrates with Hyaluronic Acid", "Energizes skin cells with B Vitamins", "Smoother texture + sustained glow"],
                        ["4️⃣", "Protects with antioxidants", "Prevents oxidative stress", "Long-term anti-aging"]
              ]
                },
                {
                    title: "Visible Results — Your Skin On Schedule",
                 type: "list",
                    items: [
                        { name: "1st Month", text: "Noticeable hydration and soft suppleness. Skin feels smoother and looks more even-toned." },
                        { name: "2nd Month", text: "Collagen density increases. Fine lines and texture visibly reduce. Brighter, more radiant complexion." },
                        { name: "3rd Month", text: "Skin barrier becomes stronger. Glow looks consistent. Skin feels tighter, clearer, and nourished." }
                 ]
                },
                {
                    title: "Long-Term Benefits",
                    type: "text",
                    text: "✅ Boosts natural collagen synthesis \n✅ Improves skin elasticity \n✅ Fades pigmentation \n✅ Strengthens hair and nails \n✅ Reduces oxidative stress \n✅ Supports detoxification \n✅ Gives a healthy, confident glow"
                }
            ],
            promise: "The Ritual That Stays On Schedule. Drink your glow, daily. Because when your Marine Collagen and Radiant Fizz work in rhythm — your skin never misses its moment to shine."
        }
    }
];

// --- The Component with "ps-" Class Names ---
function ProductSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    // --- GET THE REAL FUNCTION FROM CONTEXT ---
    const { addItemToCart } = useCart(); 

    const handleKnowMore = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedProduct(null), 300); 
    };

    // --- This handler now calls the context function ---
    const handleAddToCart = (product) => {
        addItemToCart(product);
    };

    return (
        <>
            <section id="ps-section">
                <div className="ps-container">
                    <h2 className="ps-title">Featured Collection</h2>
                    <p className="ps-sub">The essentials for your new skin schedule.</p>

                    <div className="ps-grid">
                        {products.map((product, index) => (
                            <div
                                className="ps-card"
                                key={product.id}
                                // --- TYPO FIX 1: Removed '$' ---
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="ps-image-container">
                                    <img src={product.imageUrl} alt={product.name} />
                                </div>
                                
                                <div className="ps-content">
                                  <h3>{product.name}</h3>
                                    <p className="ps-description">{product.description}</p>
                                {/* --- TYPO FIX 2: Removed space --- */}
                                    <div className="ps-price">${product.price}</div>
                                    
                                    <div className="ps-footer">
                                        <button
                                            className="ps-btn ps-btn-add"
                                            // --- Connects to context ---
                                            onClick={() => handleAddToCart(product)}
                                        >
                                            Add to Cart
                                    </button>
                                        <button 
                                         className="ps-btn ps-btn-know-more"
                                       onClick={() => handleKnowMore(product)}
                                        >
                                            Know More
                                 </button>
                                    </div>
                     </div>
                            </div>
                   ))}
                    </div>
                </div>
            </section>

            <section id="ps-placeholder-section">
          <div className="ps-container">
                    <h2 className="ps-title">Our Commitment to You</h2>
                    <p className="ps-sub">
                        Update this section later with your content. You can talk about
                        your brand's philosophy, ingredient sourcing, or a special
                      Note  promotion. It's ready for you when you are.
                    </p>
                </div>
            </section>

            <ProductModal 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
            product={selectedProduct} 
                
                // --- Connects the modal's button to the context ---
             onAddToCart={() => handleAddToCart(selectedProduct)}
            />
        </>
    );
}

export default ProductSection;