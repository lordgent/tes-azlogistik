import React from 'react'
import styled from './search.module.css'

const Search = ({handleSearch,onSearch}) => {
  return (
    <div className={styled.bodySearch}>
        <input placeholder='search...'  className={styled.input} name='search' onChange={handleSearch} />
        <img src='/assets/icons/search.svg' alt='search-icon' height="20" onClick={onSearch} />
    </div>
  )
}

export default Search