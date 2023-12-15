import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';
import btnimg from '../../assects/Introbtn.png'
import aboutimg from '../../assects/introimg.png'
import aws from '../../assects/awsSkillsimg.png'
import azure from '../../assects/azure Skillsimg.png'
import exchange from '../../assects/exchange Skillsimg.png'
import git from '../../assects/git Skillsimg.png'
import power from '../../assects/powershell Skillsimg.png'
import office from '../../assects/office Skillsimg.png'
import linux from '../../assects/linux Skillsimg.png'

const Intro = () => {
  return (
    <section id='intro'>
        <div className="introContent">
            <span className='hello'>Hello,</span>
            <span className="intotext">Im <span className="intorname">Ayodeji</span> <br /> Cloud Engineer </span>
            <p className="intropar">A reliable customer-focused IT Analyst with a broad range of 
            <br />operational and IT support skills.Regular contribution of ideas <br />
            and solutions for changes to IT helpdesk processes and quality <br />
            procedures brings about significant progress within <br />
            the Technical Support Team. A good team player with an excellent <br />
            proactive approach to problem-solving and very focused on 
            implementing the team's collective goals. Currently seeking new career 
            challenges to make significant contributions in a goal-driven environment which offers responsibility with 
            scope for further development.</p>
            <Link><button className='btn'><img src={ btnimg } alt="" className='btnimg'/>Download RM</button></Link>

            <div className="skillsImg">
            <a href=""><img src={ aws} alt="" /></a>
            <a href=""><img src={azure} alt="" /></a>
            <a href=""><img src={exchange} alt="" /></a>
            <a href=""><img src={git} alt="" /></a>
            <a href=""><img src={office} alt="" /></a>
            <a href=""><img src={linux} alt="" /></a>
            <a href=""><img src={power} alt="" /></a>
            </div>
        </div>
        <img src={ aboutimg } alt="" className='aboutimg' />
    </section>
   
  )
}

export default Intro;
