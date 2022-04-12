import React from 'react'
import {useState} from 'react'; 
import Graph from './Graph'
import Search from './Search'
import SearchResult from './SearchResult'

function SearchBox() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    console.log('clicked')
  }
  return (
    <>
      
      <div className={'w-3/5 h-full border-r-2 border-gray-900'}>
      <Search handleClick={handleClick} click={click}/>
        {click && <SearchResult stockName={'Stock Name'} />}
        {click && <Graph />}
      </div>          
    </>
  )
}

export default SearchBox
