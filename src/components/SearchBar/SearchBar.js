// import React from 'react';
// import "./SearchBar.css";
// import SearchIcon from '@mui/icons-material/Search';
// import CloseIcon from '@mui/icons-material/Close';

// function SearchBar({placeholder, data}) {
//     const [filterData, setFilterData] = useState([]);
//     const [wordEntered, setWordEntered] = useState("");

//     const handleFilter = (event) => {
//         const searchWord = event.target.value;
//         setWordEntered(searchWord);
//         const newFilter = data.filter((value) => {
//             return value.responsibilities.toLowerCase().includes(searchWord.toLowerCase());
//         });
//         if (searchWord === "") {
//             setFilterData([]);
//         } else{
//         setFilterData(newFilter);}
//     };

//     const clearInput = () => {
//         setFilterData([])
//         setWordEntered("")
//     }

//   return (
//     <div className='search'>
//         <div className="searchInputs">
//             <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
//             <div className="searchIcon">
//                 {filterData.length === 0 ? ( <SearchIcon/> ) : ( <CloseIcon id="clearBtn" onClick={clearInput} />
//                 )}
//                 </div>
//         </div>

//         {filterData.length !== 0 &&(
//             <div className="dataResult">
//             {filterData.slice(0, 15).map((value, key) => {
//                 return <div key={key} className='dataItem'> 
//                 <p>{value.responsibilities}</p> 
//                 </div>
//             })}
//         </div>)}
//     </div>
//   )
// }

// export default SearchBar
import React, { useState } from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');

  const handleFilter = (event) => {
    const searchWord = event.target.value.toLowerCase();
    setWordEntered(searchWord);

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      const newFilter = data.filter((profile) => {
        return (
          profile.name.toLowerCase().includes(searchWord) ||
          profile.location.toLowerCase().includes(searchWord) ||
          profile.professionalSummary.toLowerCase().includes(searchWord) ||
          profile.experience.some((exp) =>
            exp.responsibilities.some((resp) =>
              resp.toLowerCase().includes(searchWord)
            )
          )
        );
      });

      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered('');
  };

  return (
    <div className='search'>
      <div className='searchInputs'>
        <input
          type='text'
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className='searchIcon'>
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id='clearBtn' onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className='dataResult'>
          {filteredData.map((value, key) => {
            return (
              <div key={key} className='dataItem'>
                <p>
                  Name: {value.name} - Location: {value.location}
                </p>
                <p>Summary: {value.professionalSummary}</p>
                <p>
                  Experience:
                  {value.experience.map((exp, expKey) => (
                    <div key={expKey}>
                      {exp.company} ({exp.position}, {exp.date})
                      <ul>
                        {exp.responsibilities.map((resp, respKey) => (
                          <li key={respKey}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
