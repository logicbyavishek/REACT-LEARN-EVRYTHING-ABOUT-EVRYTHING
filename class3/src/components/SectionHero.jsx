import React from 'react'

const SectionHero = () => {
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-card">
                    <img src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1920&q=80" alt="Professional tennis court"/>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Unleash Your Inner Champion Today.<br/>All In One Place.</h1>
                    <p>Join the ultimate tennis experience — where passion meets performance, and every swing brings you closer to victory.</p>
                    <a href="#start" className="hero-cta">Start your own journey</a>
                </div>
                <div className="hero-bottom">
                    <div className="hero-professionals">
                        <p>Train with real professionals.<br/>Get the real results.</p>
                    <div className="avatar-group">
                        <div className="avatar"></div>
                        <div className="avatar"></div>
                        <div className="avatar"></div>
                    </div>
                    </div>
                    <div className="hero-social">
                    <a href="#">
                        Instagram
                        <svg className="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M7 17L17 7M17 7H7M17 7V17"/>
                        </svg>
                    </a>
                    <a href="#">
                        Facebook
                        <svg className="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M7 17L17 7M17 7H7M17 7V17"/>
                        </svg>
                    </a>
                    <a href="#">
                        TikTok
                        <svg className="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M7 17L17 7M17 7H7M17 7V17"/>
                        </svg>
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default SectionHero