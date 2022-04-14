import React from 'react'

function SearchResult(props) {
  return (
    
    <div className={'flex flex-row justify-center m-10'}>
      <h2 className={'text-lg mx-4 my-1'}>
        {props.item.symbol}
      </h2>
         <div>
              <button className={'bg-blue-500 text-white rounded text-md px-6 py-2 mx-1'}>Buy</button>
              <button className={'bg-red-500 text-white rounded text-md px-6 py-2 mx-1'}>Sell</button>
          </div>
    </div>
  )
}

export default SearchResult
