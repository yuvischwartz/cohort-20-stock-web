import React from 'react'
import {useState} from 'react'; 
import Table from './Table'
import WhenStockSelected from './WhenStockSelected'

function PortfolioBox() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    console.log('clicked')
  }
  return (
      <>
        <div className={'w-2/5 h-full'}>
          <h2 className={'text-left m-10 text-xl font-semibold'}>Protfolio</h2>
          <Table handleClick={handleClick} click={click}/>
          {click && <WhenStockSelected />}
        </div>
      </>
  )
}

export default PortfolioBox
