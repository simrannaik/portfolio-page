import React from "react";
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';

const Works = () => {
    return(
        <section id="works">
            <h2 className="worksTitle">My Projects</h2>
            <span className="worksDesc">These are the Mini-Projects and the personal projects I have built.</span>
            <div className="worksImgs">
                <img src={Portfolio1} alt="Project 1" className="worksImg" />
                <img src={Portfolio2} alt="Project 2" className="worksImg" />
                <img src={Portfolio3} alt="Project 3" className="worksImg" />
                <img src={Portfolio4} alt="Project 4" className="worksImg" />
                <img src={Portfolio5} alt="Project 5" className="worksImg" />
            </div>
            <button className="worksBtn">See More</button>
        </section>
    )
}

export default Works;