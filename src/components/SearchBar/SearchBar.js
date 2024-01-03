// import { useState } from "react";
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
import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.company.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div className="dataItem">
                <p>{value.company} </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;