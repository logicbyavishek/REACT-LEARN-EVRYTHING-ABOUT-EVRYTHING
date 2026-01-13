import React from 'react'
import SectionHero from './SectionHero'
import SectionAbout from './SectionAbout'
import SectionStats from './SectionStats'
import SectionService from './SectionService'

const Main = () => {
    return (
        <main>
            <SectionHero/>
            <SectionAbout/>
            <SectionStats/>
            <SectionService/>
        </main>
    )
}

export default Main