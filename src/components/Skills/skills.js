import React from "react";
import './skills.css';
import WebDesign from '../../assets/webdesign.png';
import BackEnd from '../../assets/bedesign.png';
import DbDesign from '../../assets/dbdesign.png';

const Skills = () => {
    return(
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I enjoy building intuitive, user-friendly interfaces and efficient backend systems. Currently, I’m honing my skills in modern frameworks and exploring new opportunities in the tech industry. When I’m not coding, you’ll find me sharing my love for poetry, exploring the latest in AI, or brainstorming ideas for my next project.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                        <p>HTML, CSS, JavaScript, React</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={BackEnd} alt="Backend Design" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Backend Development</h2>
                        <p>Python, Django, Node.js</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={DbDesign} alt="Db Design" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Database</h2>
                        <p>PostgreSQL, MangoDb</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;