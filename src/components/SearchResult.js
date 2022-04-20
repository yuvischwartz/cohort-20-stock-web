import React from 'react'
import {useState} from 'react'; 

function SearchResult(props) {
  const [click, setClick] = useState(false);
  const [buyClick, setBuyClick] = useState(false);
  const [sellClick, setSellClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  }

  const openBuyMessage = () => {
    setBuyClick(!buyClick);
  }
  const openSellMessage = () => {
    setSellClick(!sellClick);
  }
  // const closeBuySection = () => {
  //   setBuySellClick(!buySellclick);
  //   setClick(!click);
    
  // }

  return (
    <>

      
    <div className={'flex flex-row justify-center m-10'}>
      <h1 className={'text-md border-2 border-green-500 px-6 py-2 mx-1'}>{props.stockName}</h1>
      <h2 className={'border-2 border-green-500 px-6 py-2 mx-1'}>${props.stockPrice}</h2>
        
    <div>
        <button onClick={props.buyStock} className={'bg-blue-700 text-white rounded text-md px-6 py-3 mx-1'}>Buy</button>
        <button className={'bg-green-500 text-white rounded text-md px-6 py-3 mx-1'}>Sell</button>
        
        </div>
        
      </div>
      {buyClick && <h1 className={'text-green-500 m-10 text-center'}>The stoke has been added to your portfolio!</h1>}
      {sellClick && <h1 className={'text-green-500 m-10 text-center'}>The stoke has been added to your portfolio!</h1>}
      </>
  )
}

export default SearchResult



// {buySellclick && <div className={'flex flex-row justify-center w-full my-5'}>
// <div className={'pl-2 py-0'}>
//   <input className={' px-4 py-2 text-gray-800 focus:outline-none text-md border border-gray rounded'}
//     type="text"
//     value={props.quanitity}
//     onChange={props.onChangeQuantity} 
//     type={'quantity'}
//     placeholder={'Quantity'}
//   /></div>
      
// <div className={'px-2'}>
//   <button onClick={handleClick}
//     className={'bg-blue-700 text-white rounded text-md px-6 py-0.5 mx-1'}><i className={'fa-solid fa-caret-down text-white pl-1'}></i></button>
//   {click && <div className={'bg-white mx-3 my-2'}>
//     <ul className={'w-full'}>
//       <li  onClick={props.buyStock} className={'mb-2 cursor-pointer hover:bg-gray-200 py-1 px-1'}>Buy</li>
//       <li onClick={closeBuySection} className={'mb-2 cursor-pointer hover:bg-gray-200 py-1 px-1'}>Sell</li>
//     </ul>
//     {/* {!click && !buySellclick && < h1 > succes!</h1>} */}
//   </div>}
// </div>
// </div>}