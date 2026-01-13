import React from 'react'

const Header = () => {
    return (
    <header>
        <nav>
            <a href="#" className="logo">Horizon Courts</a>
            <ul className="nav-links">
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#coaches">Coaches</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#contact">Contacts</a></li>
            </ul>
            <a href="#book" className="book-btn">
                Book now
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
            </a>
        </nav>
    </header>
    )
}

export default Header