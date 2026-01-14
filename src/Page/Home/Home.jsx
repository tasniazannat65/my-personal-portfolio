import React from 'react';
import Banner from '../../Components/Home/HeroBanner/Banner';
import AboutMe from '../../Components/Home/AboutMe/AboutMe';
import SkillSection from '../../Components/Home/Skill/SkillSection';
import Education from '../../Components/Education/Education';
import ContactSection from '../../Components/Home/ContactSection/ContactSection';
import ProjectsSection from '../../Components/Home/ProjectSection/ProjectsSection';

const Home = () => {
    return (
        <div>
            <section>
                <Banner/>
            </section>
            <section>
                <AboutMe/>
            </section>
            <section>
                <SkillSection/>
            </section>
            <section>
                <Education/>
            </section>
            <section>
                <ProjectsSection/>
            </section>
            <section>
                <ContactSection/>
            </section>
            
        </div>
    );
};

export default Home;