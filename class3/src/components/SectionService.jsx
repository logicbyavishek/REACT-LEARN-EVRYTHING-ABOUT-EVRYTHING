import React from 'react'

const SectionService = () => {
    return (
        <section className="services" id="services">
        <div className="services-container">
            <div className="services-grid">
            <article className="services-intro">
                <h2>Your Path to Tennis Excellence</h2>
                <p>Whether you're picking up a racket for the first time or training for your next championship, we have everything you need to succeed.</p>
                <a href="#book" className="cta-btn">
                Get started today
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
                </a>
            </article>
            <article className="service-card">
                <img src="https://images.unsplash.com/photo-1599586120429-48281b6f0ece?w=800&q=80" alt="Training Programs"/>
                <div className="service-card-content">
                <h3>Training Programs</h3>
                <p>From beginner fundamentals to advanced competitive training, our structured programs help you develop your skills systematically.</p>
                </div>
            </article>
            <article className="service-card">
                <img src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&q=80" alt="Court Access"/>
                <div className="service-card-content">
                <h3>Court Access</h3>
                <p>Easy online booking system for court reservations. Members enjoy priority access and flexible scheduling.</p>
                <div className="service-nav">
                    <button aria-label="Previous">
                    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M19 12H5M5 12L12 19M5 12L12 5"/>
                    </svg>
                    </button>
                    <button aria-label="Next">
                    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19"/>
                    </svg>
                    </button>
                </div>
                </div>
            </article>
            </div>
        </div>
        </section>
    )
}

export default SectionService