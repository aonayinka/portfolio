import React, { useState } from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilter = (event) => {
    const searchWord = event.target.value.toLowerCase();
    setSearchTerm(searchWord);

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      const filtered = filterData(data, searchWord);
      setFilteredData(filtered);
    }
  };

  const filterData = (data, searchWord) => {
    return data.filter((profile) => {
      const lowerCasedSearch = searchWord.toLowerCase();
      const isMatch = (value) =>
        value.toLowerCase().includes(lowerCasedSearch);

      return (
        isMatch(profile.name) ||
        isMatch(profile.location) ||
        isMatch(profile.professionalSummary) ||
        profile.experience.some((exp) =>
          exp.responsibilities.some((resp) => isMatch(resp))
        )
      );
    });
  };

  const clearInput = () => {
    setFilteredData([]);
    setSearchTerm('');
  };

  return (
    <div className='search'>
      <div className='searchInputs'>
        <input
          type='text'
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleFilter}
        />
        <div className='searchIcon'>
          {filteredData.length === 0 ? <SearchIcon /> : <CloseIcon id='clearBtn' onClick={clearInput} />}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className='dataResult'>
          {filteredData.map(renderProfile)}
        </div>
      )}
    </div>
  );
}

function renderProfile(profile, key) {
  return (
    <div key={key} className='dataItem'>
      <p>
        Name: {profile.name} - Location: {profile.location}
      </p>
      <p>Summary: {profile.professionalSummary}</p>
      <p>
        Experience:
      </p>
      <ul>
        {profile.experience.map(renderExperience)}
      </ul>
    </div>
  );
}


function renderExperience(exp, key) {
  return (
    <div key={key}>
      {exp.company} ({exp.position}, {exp.date})
      <ul>
        {exp.responsibilities.map((resp, respKey) => (
          <li key={respKey}>{resp}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
