import React from 'react'
import {useState} from 'react'; 

function WhenStockSelected() {
    
    const [click, setClick] = useState(false);

    const handleClick = () => {
      setClick(!click);
      console.log('clicked')
    }

    return (
    <>
       <div className={'m-8'}>
            <h2>-StockName-: You have -StockNumber- shares at $-StockPrice-.00 per share.</h2>
            <div className={'flex flex-row justify-start w-full my-5'}>
            <div className={'pl-2'}>
                <input className={'px-4 py-2 text-gray-800 focus:outline-none text-md border border-gray rounded'}
                type={'Quantity'}
                placeholder={'Quantity'}
              /></div>
              
              <div className={'px-2'}>
                <button onClick={handleClick}
                    className={'bg-blue-700 text-white rounded text-md px-6 py-2 mx-1'}>Buy / Sell <i className={'fa-solid fa-caret-down text-white pl-1'}></i></button>
                        {click && <div className={'bg-white mx-3 my-2'}>
                            <ul className={'w-full'}>
                                <li className={'mb-2 cursor-pointer hover:bg-gray-200 py-1 px-1'}>Buy</li>
                                <li className={'mb-2 cursor-pointer hover:bg-gray-200 py-1 px-1'}>Sell</li>
                            </ul>
                        </div>}
                </div>
              
              <div>
                <button className={'bg-green-500 text-white rounded text-md px-6 py-2 mx-1'}>Ok</button>
              </div>
            </div>  
          </div>   
    </>
  )
}

export default WhenStockSelected
