import React from 'react';
import './intro.css';
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

  // const openPDF = () => {
  //   // Replace 'path_to_your_pdf' with the actual path to your PDF file
  //   const pdfPath = '/Users/casamigos/Documents/portfolio/src/assects/Ayodeji2024.pdf';
  //   window.open(pdfPath, '_blank');
  //   };

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
            <span className="intotext">Focusing on Cloud Engineering,<br />Web Development. </span>
            <p className="intropar" >With over 7 years of experience in IT, 
                    I specialize in creating visually stunning and user-friendly websites that 
                    leave a lasting impression..</p>

              <button className='btn'>Contact Me </button>
            
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
    </section>
   
  )
}

export default Intro;
