import React from 'react'
import { CDN_URL } from '../const/url';
import { addItem } from '../const/cartSlice';
import { useDispatch } from 'react-redux';

const ItemList = ({ item }) => {
    const dispatch = useDispatch();
    const handleCart = (item) => {
        dispatch(addItem(item))
    }
    return (
        <div>
            {item?.map((data) =>
                <div data-testid='fooditems' key={data?.card?.info?.id} className='p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between'>
                    <div className='w-9/12'>
                        <div className='py-2'>
                            <span>{data?.card?.info?.name}</span>
                            <span> - ₹ {data?.card?.info?.price ? data?.card?.info?.price / 100 : data?.card?.info?.defaultPrice / 100}</span>
                        </div>
                        <p className='text-xs'>{data?.card?.info?.description}</p>
                    </div>
                    <div className='w-3/12 p-4'>
                        <img className='rounded-lg' src={CDN_URL + data?.card?.info?.imageId} alt='food' />
                        <div className='absolute mt-[-30px]'>
                            <button className='bg-white px-5 py-2 shadow-lg mx-5 rounded-lg font-semibold text-sm' onClick={() => handleCart(data)}>ADD +</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ItemList