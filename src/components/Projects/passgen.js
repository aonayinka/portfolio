// I installed react Tostify this is for notification.


import{toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {COPY_SUCCESS} from './message'

import React, { useState } from 'react'
import './passgen.css'
import copyic from "../../assects/copyIcon.png"
import {number, upperCaseLetters,lowerCaseLetters, specialCharacters} from './characters'

// react installed search-icon
import {FaSearch} from "react-icons/fa";




const Passgen = () => {
    const [password, setPassword] = useState('')
    const [passwordLenght, setPasswordLenght] = useState(20)
    const [includeUppercase,setIncludeUppercase] = useState(false)
    const [includeLowercase,setIncludeLowercase] = useState(false)
    const [includeNumbers,setIncludeNumbers] = useState(false)
    const [includSymbols, setIncludSymbols] = useState(false)

    const handleGenetartePassword = (e) => {
        let characterslist = ''
        
        if (!includeUppercase && !includeLowercase && !includeNumbers && !includSymbols)
            notify('You must Select atleast one option',true)
        if(includeLowercase) {
            characterslist = characterslist + lowerCaseLetters
        }
        if (includeUppercase) {
            characterslist = characterslist + upperCaseLetters
        }
        if (includeNumbers) {
            characterslist = characterslist + number
        }
        if (includSymbols) {
            characterslist = characterslist + specialCharacters
        }
        setPassword (createPassord(characterslist))
    }

    const createPassord = (characterslist) => {
        let password = ''
        const characterslistLength = characterslist.length
        for(let i=0; i < passwordLenght; i++){
            const charactersIndex = Math.round (Math.random() * characterslistLength)
            password = password + characterslist.charAt(charactersIndex)
        }
        return password

    }
// copy function  on Button 
    const copyToClipboard = () => {
        const newTextArea = document.createElement('textarea')
        newTextArea.innerText = password
        document.body.appendChild(newTextArea)
        newTextArea.select()
        document.execCommand('copy')
        newTextArea.remove()
    }
// copy notifyicat from tosty 
    const notify = (message, hasError) => {
        if(hasError){
            toast.error(message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

        } else{
            toast(message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
       
    }
// we added the notification to the copy function 

    const handleCopyPassword = (e) => {
        if (password === ''){
            notify('Please Generate a Password', true)
        } else{
            copyToClipboard()
        notify(COPY_SUCCESS)
        }
    }
    // end of copy function  




// start of searchBar

const [input, setinput] = useState("")
const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json())
    .then((json) => {
        const results = json.filter((user) => {
            return (value && user && user.name && user.name.toLowerCase().includes(value)) 
        });
        console.log(results);
    });
}
const handleChange = (value) => {
    setinput(value)
    fetchData(value)
}
// To need to finish off 





  return (
    <section id='projects'>
        {/* Search Bar Porject Start */}
         <div className='search-bar-container'>
        <div className='input-wrap'>
            <FaSearch id='search-icon'/>
            <input placeholder='Search Here...'value={input} onChange={(e) => handleChange(e.target.value)}/>
        </div>
        
        <div></div>
    </div>



            <div className='contatiner'>
        <div className="generator">
            <h2 className='generator_header'>Password Generator</h2>
            <div className="generator_password">
                <h3>{password}</h3>
                <button onClick={handleCopyPassword} className='copy_btn'>
                    <img src={copyic} alt="" />
                </button>
            </div>

            <div className="form-group">
                <label htmlFor="password-length">Password length </label>
                <input 
                defaultValue={passwordLenght}
                onChange={(e) => setPasswordLenght(e.target.value)}
                type="number" id='password-length' name='password-length' max={20} min={10} />
            </div>
            <div className="form-group">
                <label htmlFor="uppercase-letters">Include Uppercase Letters </label>
                <input 
                checked={includeUppercase} onChange={(e) => setIncludeUppercase(e.target.checked)} 
                type="checkbox" id='uppercase-letters' name='uppercase-letters' />
            </div>
            <div className="form-group">
                <label htmlFor="lowercase-letters">Include Lowercase Letters </label>
                <input 
                checked={includeLowercase} onChange={(e) => setIncludeLowercase(e.target.checked)}
                type="checkbox" id='lowercase-letters' name='lowercase-letters'/>
            </div>
            <div className="form-group">
                <label htmlFor="include-numbers">Include Numbers </label>
                <input 
                checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)}
                type="checkbox" id='include-numbers' name='include-numbers'/>
            </div>
            <div className="form-group">
                <label htmlFor="include-symbols">Include Symbols </label>
                <input 
                checked={includSymbols} onChange={(e) => setIncludSymbols(e.target.checked)}
                type="checkbox" id='include-symbols' name='include-symbols'/>
            </div>
            <button onClick={handleGenetartePassword}  className='generator_btn'>Generate Password</button>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    </div>
   



    </section>   
  )
}

export default Passgen
