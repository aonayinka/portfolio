import { useState } from 'react'
import {AccordionData} from './AccordionData'
import './accordion.css'
import { FiPlus, FiMinus} from 'react-icons/fi'



const Accordion = () => {

  const [clicked, setClicked] = useState(false)
  const toggle = index => {
    if(clicked === index) {
      return setClicked(null)
    }
    setClicked(index)

  }
  return (
   <div className='Ac_container'>
      <div className='faq_header'><h1>Frequently asked questions</h1></div>
      <div className='Ac_AccordionSection'>
        {AccordionData.map((item, index)=> {
        return(
          <div className='AccordionSection'>
            <div className='wrap' onClick={() => toggle(index)} key={index}>
              <h1>{item.question}</h1>
              <span >{clicked === index ? <FiMinus className='icon_fi'/> : <FiPlus className='icon_fi'/>}</span>
            </div>
            {clicked === index ? (<div className='dropDown'>
            <p>{item.answer}</p>
            </div>):null}
          </div>
        )})}
      </div>
   </div>
    
  )
}

export default Accordion
