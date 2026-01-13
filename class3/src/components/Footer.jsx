import React from 'react';

const Footer = () => {
    return (
        <footer id="contact">
        <div className="footer-container">
            <div className="footer-grid">
            
            <div className="footer-brand">
                <h3>Horizon Courts</h3>
                <p>
                Where passion meets performance. Join our community of tennis enthusiasts
                and take your game to the next level.
                </p>
            </div>

            <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#coaches">Coaches</a></li>
                <li><a href="#events">Events</a></li>
                </ul>
            </div>

            <div className="footer-section">
                <h4>Contact</h4>
                <address>
                123 Tennis Lane<br />
                Sports District, CA 90210<br />
                <a href="tel:+15551234567">(555) 123-4567</a><br />
                <a href="mailto:info@horizoncourts.com">info@horizoncourts.com</a>
                </address>
            </div>

            <div className="footer-section">
                <h4>Follow Us</h4>
                <div className="social-links">
                
                <a href="#" aria-label="Instagram">
                    <svg
                    className="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="18" cy="6" r="1" />
                    </svg>
                </a>

                <a href="#" aria-label="Facebook">
                    <svg
                    className="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                </a>

                <a href="#" aria-label="Twitter">
                    <svg
                    className="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                </a>

                </div>
            </div>
            </div>

            <div className="footer-bottom">
            <p>&copy; 2024 Horizon Courts. All rights reserved.</p>
            <nav>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
            </nav>
            </div>
        </div>
        </footer>
    )
}

export default Footer
