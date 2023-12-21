import React, { Fragment, useState } from 'react'
import ItemList from './ItemList'

const ResCategory = ({ data, showItems }) => {
    return (
        <Fragment>
            <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer'>
                <div className='flex justify-between'>
                <span className='font-bold text-lg'>{data?.title} ({data?.itemCards?.length})</span>
                <span>⬇</span>
                </div>
                {showItems && <ItemList item={data?.itemCards} />}
            </div>
        </Fragment>
    )
}

export default ResCategory