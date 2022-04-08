import React from 'react'
import Graph from './Graph'
import Search from './Search'
import SearchResult from './SearchResult'

function SearchBox() {
  return (
    <>
      
      <div className={'w-3/5 h-full border-r-2 border-gray-900'}>
      <Search/>
        <SearchResult stockName={'Stock Name'} />
        <Graph/>
      </div>          
    </>
  )
}

export default SearchBox
