import React from 'react'
import {useState} from 'react'; 
import Graph from './Graph'
import Search from './Search'
import SearchResult from './SearchResult'

function SearchBox() {
  const [click, setClick] = useState(false);
  const [stock, setStock] = useState([]);
  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [stockPrice, setStockPrice] = useState(0);
  const [stockName, setStockName] = useState(0);

  // {symbol:AAPL , price:7878 , ...}

  // const handleClick = async () => {
  //   setClick(!click);
  //   let stockObj = { symbol: symbol, stockName: symbol, quantity: quantity, value: value };
  //   console.log(stockObj);
  //   setStock([...stock, stockObj]);
    
  //   let res = await fetch(`http://localhost:3000/api/search/${symbol}`)
  //       res = await res.json()
  //       setSymbol(symbol);
  //       setValue(res);
  //       console.log('the value is', value);
  //       console.log('res returned back from the backend API is', res)
  //       setSymbol('');
  // };

  // const buyStock = async () => {
  //   let res = await fetch('http://localhost:3000/api/portfolio', {
  //       method: 'POST',
  //       headers: {
  //           'Content-Type': 'application/json'
  //           // 'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //       body: JSON.stringify({buyValue, stockName, stockPrice})
  //   })

  // };
  
    const onChange = (event) => {
    setSymbol(event.currentTarget.value);
  }
  const handleClick = async () => {
    setClick(!click);
    console.log('This is where we make an API call to the backend to fetch the price and other information about the stock')
    console.log('Once the information comes back from the backend API, display it on the UI')
    console.log('the user typed in this symbol', symbol)
    let res = await fetch(`http://localhost:3001/api/search/${symbol}`)
    res = await res.json()
    setStockName(symbol)
    setStockPrice(res)
    setSymbol('')
    console.log('res returned back from the backend API is', res)
};
  return (
    <>
      <div className={'w-3/5 h-full border-r-2 border-gray-900'}>
        <Search stock={stock} handleClick={handleClick} click={click} setSymbol={setSymbol} onChange={onChange}/>
        {click && <SearchResult symbol={symbol}/>}
       

        {/* {stock && stock.map((item, idx) => {  
                                
                                return <SearchResult key={idx} item={item} 
                                    />
        })} */}
         {click && <Graph />}
      </div>          
    </>
  )
}

export default SearchBox
