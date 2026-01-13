import React from 'react'

const SectionAbout = () => {
    return (
    <section className="about" id="about">
        <div className="about-container">
            <header className="about-header">
            <h2>About the Club</h2>
            <p>Where the love for tennis meets modern comfort. At Horizon, we've been serving excellence since 2005, building a community of passionate players of all skill levels.</p>
            </header>
            <div className="about-grid">
            <article className="about-card">
                <span className="tag">Court Features</span>
                <h3>Professional Courts</h3>
                <p>8 professional-grade courts with premium surfacing, LED lighting systems for evening play, and climate-controlled indoor options for year-round training.</p>
            </article>
            <article className="about-card image-card">
                <img src="https://images.unsplash.com/photo-1542144582-1ba00456b5e3?w=800&q=80" alt="Tennis lesson"/>
            </article>
            <article className="about-card">
                <span className="tag">Expert Team</span>
                <h3>Our Coaches</h3>
                <p>Our certified coaches bring decades of combined experience, from junior development to competitive tournament preparation.</p>
                <div className="coaches-stats">
                <div className="stat">
                    <div className="stat-value">12</div>
                    <div className="stat-label">Coaches</div>
                </div>
                <div className="stat">
                    <div className="stat-value">85%</div>
                    <div className="stat-label">Pro Level</div>
                </div>
                </div>
            </article>
            </div>
        </div>
        </section>
    )
}

export default SectionAbout