import React from 'react'
import {useState} from 'react'; 
import Table from './Table'
import WhenStockSelected from './WhenStockSelected'

function PortfolioBox(props) {
  const [click, setClick] = useState(false);
  const [stockNameSelected, setStockNameSelected] = useState('');
  const [stockPriceSelected, setStockPriceSelected] = useState('');
  const [stockQuantitySelected, setStockQuantitySelected] = useState('');
  
  const handleClick = () => {
    setClick(!click);
    console.log('clicked')
  }
  const handleStockName = () => {
    setStockNameSelected(props.stokeName);
    setStockPriceSelected(props.price);
    setStockQuantitySelected(props.quantity);


    setClick(!click);
    console.log('clicked')
  }
  return (
      <>
        <div className={'w-2/5 h-full'}>
          <h2 className={'text-left m-10 text-xl font-semibold'}>Protfolio</h2>
        {/* <Table handleClick={handleClick} click={click} /> */}
        <table className={'my-5 min-w-full'}>
          <tr className={'bg-white border-b'}>
                <th className={'font-medium text-md px-6 py-4 text-left'}>Stock</th>
                <th className={'font-medium text-md px-6 py-4 text-left'}>Quantity</th>
                <th className={'font-medium text-md px-6 py-4 text-left'}>Price</th>
                <th className={'font-medium text-md px-6 py-4 text-left'}>Buy/Sell</th>
          </tr>
        {props.stocks && props.stocks.map((item, idx) => {
         return <tr className={idx%2==0?'bg-gray-100 border-b w-full':'bg-white border-b w-full'}>
                <td className={'px-6 py-4 text-sm font-medium text-gray-900 '}>{item.stockName}</td>
                <td className={'px-6 py-4 text-sm text-gray-800'}>{item.quantity}</td>
                <td className={'px-6 py-4 text-sm text-gray-800'}>{item.price}</td>
           <td className={'px-6 py-4 text-sm text-gray-800'}><input onClick={handleStockName} type="checkbox" id=''name='' value=''/></td>
         </tr>
           {/* {click && <WhenStockSelected stocks={props.stocks}/>} */}
            
        })}
        </table>
        {click && <WhenStockSelected buyStock={props.buyStock} stockNameSelected={stockNameSelected} stockPriceSelected={stockPriceSelected} stockQuantitySelected={stockQuantitySelected}/>}
        </div>
      </>
  )
}

export default PortfolioBox
 {/* {stocks && stocks.map((item, idx) => {  
                                
//                                 return <SearchResult key={idx} item={item} 
//                                     />
//         })} */}