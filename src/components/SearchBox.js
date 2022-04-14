import React from 'react'
import {useState} from 'react'; 
import Graph from './Graph'
import Search from './Search'
import SearchResult from './SearchResult'

function SearchBox() {
  const [click, setClick] = useState(false);
  const [portfolio, setPortfolio] = useState([]);
  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [value, setValue] = useState(0);
  const [id, setId] = useState(0);

  // {symbol:AAPL , price:7878 , ...}

  const handleClick = () => {
    setClick(!click);
    setId(id + 1);
    let portfolioObj = { symbol: symbol, id: id, quantity: quantity, value: value };
    console.log(portfolioObj);
    setPortfolio([...portfolio, portfolioObj]);
    console.log(portfolio);
    console.log(symbol);
    console.log(id);
    console.log(quantity);
    setSymbol = '';
  }

    const onChange = (event) => {
    setSymbol(event.currentTarget.value);
  }

  return (
    <>
      <div className={'w-3/5 h-full border-r-2 border-gray-900'}>
        <Search portfolio={portfolio} handleClick={handleClick} click={click} setSymbol={setSymbol} onChange={onChange}/>
        {/* {click && <SearchResult portfolio={portfolio}/>} */}
       

        {portfolio && portfolio.map((item, idx) => {  
                                
                                return <SearchResult key={idx} item={item} 
                                    />
        })}
         {click && <Graph />}
      </div>          
    </>
  )
}

export default SearchBox
