// import React from 'react'
// import {useState} from 'react'; 
// import Graph from './Graph'
// import Search from './Search'
// import SearchResult from './SearchResult'

// function SearchBox(props) {
//   const [click, setClick] = useState(false);
//   // const [stocks, setStocks] = useState([]);
//   // const [symbol, setSymbol] = useState('');
//   // const [quantity, setQuantity] = useState(1);
//   // const [stockPrice, setStockPrice] = useState('');
//   // const [stockName, setStockName] = useState(0);

// //   const onChange = (event) => {
// //     setSymbol(event.currentTarget.value);
// //   }
  
// //   const handleClick = async () => {
// //     setClick(!click);
// //     console.log('This is where we make an API call to the backend to fetch the price and other information about the stock')
// //     console.log('Once the information comes back from the backend API, display it on the UI')
// //     console.log('the user typed in this symbol', symbol)
// //     let res = await fetch(`http://localhost:3001/api/search/${symbol}`)
// //     res = await res.json()
// //     setStockName(symbol)
// //     setStockPrice(res)
// //     setSymbol('')
// //     console.log('res returned back from the backend API is',res)
// // };
  
// // const buyStock = async () => {
// //   let res = await fetch('http://localhost:3001/api/portfolio', {
// //       method: 'POST',
// //       headers: {
// //           'Content-Type': 'application/json'
// //           // 'Content-Type': 'application/x-www-form-urlencoded',
// //       },
// //     body: JSON.stringify({ stockName, stockPrice, quantity })
     
// //   })
// //   updateStocks(stockName);
// //   console.log(stocks);
// // };
  
// //   const updateStocks = (stockName) => { 
// //     let stockObj = { stockName: stockName, quantity: quantity, price: stockPrice};
// //     console.log(stockObj);
// //     setStocks([...stocks, stockObj]);
// //     console.log(stocks);
// //   }
  
//   return (
//     <>
//       <div className={'w-3/5 h-full border-r-2 border-gray-900'}>
//         <Search stocks={stocks} handleClick={handleClick} click={click} setSymbol={setSymbol} onChange={onChange}/>
//         {click && <SearchResult setQuantity={setQuantity} stokePrice={stockPrice} stockName={stockName} updateStocks={updateStocks} buyStock={buyStock}/>}
//         {click && <Graph />}
//       </div>          
//     </>
//   )
// }

// export default SearchBox

//         {/* {stocks && stocks.map((item, idx) => {  
                                
//                                 return <SearchResult key={idx} item={item} 
//                                     />
//         })} */}