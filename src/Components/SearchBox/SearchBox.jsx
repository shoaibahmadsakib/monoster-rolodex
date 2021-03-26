import React from 'react'
import '../SearchBox/SearchBox.css'
function SearchBox({   handleChange }) {
    return (
        <div className="Header_style">
            <input
            className='search_here'
            type="search"
            placeholder="search here"
            onChange={handleChange}
            />
        </div>
    )
}

export default SearchBox
