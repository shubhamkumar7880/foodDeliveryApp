import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../const/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className='text-center m-4 p-4'>
            <h1 className='text-2xl font-bold'>Cart</h1>
            {cartItems.length === 0
                ? <h1 className='p-2 m-2 font-bold'>No food found!</h1>
                : <div>
                    <button className='bg-black text-white rounded-lg p-2 m-2' onClick={handleClearCart}>Clear Cart</button>
                    <div className='w-6/12 m-auto mt-2 bg-gray-50 shadow-lg'>
                        <ItemList item={cartItems} />
                    </div>
                </div>}
        </div>
    )
}

export default Cart