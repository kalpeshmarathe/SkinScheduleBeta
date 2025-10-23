import React from 'react';
// --- Import the new CSS file ---
import '@/assets/css/AboutSection.css';
// Make sure you have bootstrap-icons imported, which you do in your Navbar
import 'bootstrap-icons/font/bootstrap-icons.css';

function AboutSection() {
    return (
        // --- NEW ID and Class Names ---
        <section id="sk-about-section" className="sk-about-section">
            <div className="sk-about-container">
                
                {/* --- 1. NEW, more professional copy --- */}
                <h2 className="sk-about-title">Your Skin, On Schedule</h2>
                <p className="sk-about-sub">
                    Our philosophy is simple: create science-backed, synergistic formulas
                    that fit your daily ritual and deliver a visible, inside-out glow.
                </p>

                {/* --- 2. NEW Grid layout --- */}
                <div className="sk-about-grid">
                    
                    {/* --- 3. NEW Feature 1 (for Glutathione/Fizz) --- */}
                    <div className="sk-about-feature-card">
                        <div className="sk-about-icon">
                            <i className="bi bi-gem"></i>
                        </div>
                        <h4>Cellular Brightening & Detox</h4>
                        <p>
                            We use master antioxidants like L-Glutathione and NAC to help
                            detoxify cells and reduce pigmentation, revealing an even, luminous glow.
                        </p>
                    </div>

                    {/* --- 4. NEW Feature 2 (for Collagen/HA) --- */}
                    <div className="sk-about-feature-card">
                        <div className="sk-about-icon">
                            <i className="bi bi-droplet-half"></i>
                        </div>
                        <h4>Structural Repair & Hydration</h4>
                        <p>
                            Powered by Type I & III Marine Collagen and Hyaluronic Acid to
                            rebuild your skin's matrix, smooth lines, and lock in deep hydration.
                        </p>
                    </div>

                    {/* --- 5. NEW Feature 3 (for The Duo/Brand) --- */}
                    <div className="sk-about-feature-card">
                        <div className="sk-about-icon">
                            <i className="bi bi-layers-fill"></i>
                        </div>
                        <h4>Science-Backed Synergy</h4>
                        <p>
                            Each ingredient is clinically-dosed to work *together*,
                            enhancing absorption and amplifying results for a 360° approach to skin health.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;