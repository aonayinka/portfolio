import React from 'react'
import './Skills.css'
import resp from '../../assects/responsive-design.png'
import seo from '../../assects/google.png'
import innovation from '../../assects/innovation.png'

const Skills = () => {
  return (
    <div className='skills'>
        <div className='headerskills'> 
            <h2>Unlocking the Potential of Web Development</h2>
            <p>With expertise in responsive design, SEO optimization, and modern technologies, I create stunning websites that drive results.</p>
              
        </div>
       <div className="skillsContainer">
        <div className="crad">
            <img src={resp} alt="" />
            <h1>Responsive Design</h1>
            <p>Crafting websites that look great on any device.</p>
        </div>
        <div className="crad">
            <img src={seo} alt="" />
            <h1>SEO Optimization</h1>
            <p>Improving website visibility and search engine rankings.</p>
        </div>
        <div className="crad">
            <img src={innovation} alt="" />
            <h1>Modern Technologies</h1>
            <p>Utilizing the latest tools and frameworks for cutting-edge websites.</p>
        </div>
       </div>
    </div>
  )
}

export default Skills
