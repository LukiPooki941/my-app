import React, {useState} from 'react';

function SearchBar(){
    const[search, setSearch] =  useState('')
   function handleChange({ target }){
      const user_input = target.value
      setSearch(user_input)
   }
   return(<>
<label htmlFor='search'>Search for song</label>
<input name='search' id='search' type = 'text' onChange={handleChange} value={search} />
          </>
   )
}

export default SearchBar;