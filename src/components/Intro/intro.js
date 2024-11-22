import React from "react";
import './intro.css';
import bg from '../../assets/image.png';
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png';

const Intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Simran Naik</span> <br />Aspiring Web Developer</span>
                <p className="introPara">I’m a third-year Information Technology student at SIES Nerul, passionate about <br />creating innovative web applications and solving real-world problems with technology.</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire Me" className="btnImg"/>Hire Me</button></Link>
            </div>
            <img src={bg} alt="profile" className="bg"/>
        </section>
    )
}

export default Intro;