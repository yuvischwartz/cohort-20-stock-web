import React from 'react'
import Table from './Table'

function PortfolioBox() {
    return (
      <>
        <div className={'w-2/5 h-full'}>
          <h2 className={'text-left m-10 text-xl font-semibold'}>Protfolio</h2>
          <Table/>
        </div>
      </>
  )
}

export default PortfolioBox
