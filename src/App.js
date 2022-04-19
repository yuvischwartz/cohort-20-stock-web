import React from 'react'
import {useState} from 'react'; 
import './App.css';
import Topbar from './components/Topbar';
// import SearchBox from './components/SearchBox';
import PortfolioBox from './components/PortfolioBox';
import Search from './components/Search';
import SearchResult from './components/SearchResult';


function App() {
  const [click, setClick] = useState(false);
  const [stocks, setStocks] = useState([]);
  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState('');
  const [stockName, setStockName] = useState(0);
  const [buyClick, setBuyClick] = useState(false);
  const [sellClick, setSellClick] = useState(false);


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
    console.log('res returned back from the backend API is',res)
};
  
const buyStock = async () => {
  // let res = await fetch('http://localhost:3001/api/portfolio', {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json'
        
  //     },
  //   body: JSON.stringify({ stockName, stockPrice, quantity })
  // })
  updateStocks(stockName);
  console.log(stocks);
  console.log('button was clicked');
  setBuyClick(!buyClick);
};
  const sellStoke = async () => {
  
  };

// const openSellMessage = () => {
//   setSellClick(!sellClick);
// } 
  const updateStocks = (stockName) => { 
    let stockObj = { stockName: stockName, quantity: quantity, price: stockPrice};
    console.log(stockObj);
    setStocks([...stocks, stockObj]);
    console.log(stocks);
  }
  return (
    <>
       <Topbar/>
        <div className={'flex w-full h-screen'}>
        {/* <SearchBox updateStocks={updateStocks} buyStock={buyStock} handleClick={handleClick} onChange={onChange}/> */}
        <div className={'w-3/5 h-full border-r-2 border-gray-900'}>
          <Search handleClick={handleClick} stocks={stocks} onChange={onChange}/>
          <SearchResult stockName={stockName} stockPrice={stockPrice} buyStock={buyStock} buyClick={buyClick} sellClick={sellClick}/>
        </div>
        <PortfolioBox buyStock={buyStock} stocks={stocks} />
          
        </div>
    </>
  );
}

export default App;
