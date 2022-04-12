import React from 'react'

function Table(props) {
    return (
      <>
    <div>
        <table className={'min-w-full'}>
            <tr className={'bg-white border-b'}>
                <th className={'font-medium text-md px-6 py-4 text-left'}>Stock</th>
                <th className={'font-medium text-md px-6 py-4 text-left'}>Quantity</th>
                <th className={'font-medium text-md px-6 py-4 text-left'}>Value</th>
                <th className={'font-medium text-md px-6 py-4 text-left'}>Buy/Sell</th>
            </tr>
            <tr className={'bg-gray-100 border-b'}>
                <td className={'px-6 py-4 text-sm font-medium text-gray-900'}>StockName</td>
                <td className={'px-6 py-4 text-sm text-gray-800'}>50</td>
                <td className={'px-6 py-4 text-sm text-gray-800'}>200.00</td>
                        <td className={'px-6 py-4 text-sm text-gray-800'}><input onClick={props.handleClick}type="checkbox" id=''name='' value=''/></td>
            </tr>
            <tr>
                <td className={'px-6 py-4 text-sm font-medium text-gray-900'}>StockName2</td>
                <td className={'px-6 py-4 text-sm text-gray-800'}>50</td>
                <td className={'px-6 py-4 text-sm text-gray-800'}>200.00</td>
                <td className={'px-6 py-4 text-sm text-gray-800'}><input onClick={props.handleClick} type="checkbox" id=''name='' value=''/></td>
            </tr>
            <tr className={'bg-gray-100 border-b'}>
                <td className={'px-6 py-4 text-sm font-medium text-gray-900'}>StockName</td>
                <td className={'px-6 py-4 text-sm text-gray-800'}>50</td>
                <td className={'px-6 py-4 text-sm text-gray-800'}>200.00</td>
                <td className={'px-6 py-4 text-sm text-gray-800'}><input onClick={props.handleClick} type="checkbox" id=''name='' value=''/></td>
            </tr>
        </table>
            </div>
        </>
  )
}

export default Table
