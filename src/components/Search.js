import React from 'react'

function Search(props) {
    return (
    <>
        <div className={'flex justify-center flex-row max-w-md mx-auto bg-white rounded-full border-2 border-gray-500 mt-8'}>
          <button onClick={props.handleClick} className={'flex items-center justify-center w-16 text-gray-800 rounded-full'}>
                      <i className={'fa-solid fa-magnifying-glass'}/>
            </button> 
            <div className={'w-full'}>
                <input className={'w-96 px-4 py-2 text-gray-800 focus:outline-none rounded-full text-md'}
                type={'search'}
                placeholder={'Search...'}
              />
            </div> 
        </div>
    </>
  )
}

export default Search
