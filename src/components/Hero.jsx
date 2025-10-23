import React, { useEffect, useRef, useState } from "react";
import HeroBanner from "../assets/Images/SkinScheduleBanner.png";
import "@/assets/css/Hero.css";

function Hero() {
  return (
    // This .hero element is the main section with the gradient and rounded corners
    <section className="hero">
      <div className="container hero-grid">
        
        <div className="hero-text-content">
          <div className="eyebrow animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Unlock Your Inner Glow
          </div>
          <h1 className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {/* Updated H1 to match your screenshot */ }
            <span className="text-gradient">Science-backed</span><br />
            <span className="text-gradient">glow for your</span><br />
            best skin
          </h1>
          <p className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Discover radiant, healthy skin with premium glutathione tablets and curated skincare. Transform your skin with a routine that fits your schedule.
          </p>
          <button
            className="hero-cta animate-fade-in"
            style={{ animationDelay: '0.8s' }}
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Shop Now</span>
          </button>
        </div>

        {/* This is just a wrapper for the image now, not a "card" */ }
        <div className="hero-image-wrapper animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <img 
            className="hero-image" 
            src={HeroBanner} 
            alt="Woman holding SkinSchedule product" 
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;