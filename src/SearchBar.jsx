import React, {useState} from 'react';

function SearchBar({ handleChange, search }){
   return(<>
<label htmlFor='search'>Search for song</label>
<input name='search' id='search' type = 'text' onChange={handleChange} value={search} />
          </>
   )
}

export default SearchBar;