import React from 'react';
import './intro.css';
import btnimg from '../../assects/Introbtn.png'
import aboutimg from '../../assects/introimg.png'
import aws from '../../assects/awsSkillsimg.png'
import azure from '../../assects/azure Skillsimg.png'
import exchange from '../../assects/exchange Skillsimg.png'
import git from '../../assects/git Skillsimg.png'
import power from '../../assects/powershell Skillsimg.png'
import office from '../../assects/office Skillsimg.png'
import linux from '../../assects/linux Skillsimg.png'
import { TypeAnimation } from 'react-type-animation';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Intro = () => {

  const openPDF = () => {
    // Replace 'path_to_your_pdf' with the actual path to your PDF file
    const pdfPath = '/Users/casamigos/Documents/portfolio/src/assects/Ayodeji2024.pdf';
    window.open(pdfPath, '_blank');
    };

  return (
    <section id='intro'>
        <div className="introContent">
            <span className='hello'> 
            {/* Text Animationa from react-type-animation  */}
            <TypeAnimation
              sequence={[
               'Hello', // Types 'One'
                1000, // Waits 1s
               'Welcome', 
                2000,
                'Im Ayodeji',
                9000,
                () => {
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '2em', display: 'inline-block', color: 'red' }}
              />
            </span>
            <span className="intotext"> Cloud Engineer / Front-End Dev </span>
            <p className="intropar" >As a technical engineer, I have been keen to expand my skills and knowledge in the 
            field of web and cloud engineering. With the ever-increasing demand for websites and cloud applications, it has become
             evident that having expertise in this area is becoming more and more valuable. Throughout my journey, 
             I have been learning various programming languages such as HTML, CSS, and JavaScript, as well as familiarizing 
             myself with frameworks like ReactJs. I am excited to continue my growth as a web and cloud engineer and look 
             forward to the challenges and opportunities that lie ahead.</p>

              <button onClick={openPDF} className='btn'>
                  <img src={btnimg} alt='paper' className='btnimg'/>
                  Download RM
                 </button>
            
            <div className="skillsImg">
            <img src={aws}  alt="" />
            <img src={azure} alt="" />
            <img src={exchange} alt="" />
            <img src={git} alt="" />
            <img src={office} alt="" />
            <img src={linux} alt="" />
            <img src={power} alt="" />
            </div>
        </div>
        <img src={ aboutimg } alt="" className='aboutimg' />

        <div className='search-bar-container'>
          <div className='searchBar'>
            <h1>searchBar</h1>
          </div>
            <div>searchResults</div>
          
          
        </div>
    </section>
   
  )
}

export default Intro;
