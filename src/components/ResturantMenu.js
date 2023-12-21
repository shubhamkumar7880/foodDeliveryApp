import React, { useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useResturantMenu from '../const/useResturantMenu';
import ResCategory from './ResCategory';

const ResturantMenu = () => {
    const { resId } = useParams();
    const [categoryInd, setCategoryInd] = useState(0);
    const resturantData = useResturantMenu(resId);

    const handleClick = (e,ind) => {
        if(e.target.tagName === 'BUTTON') return;
        if(ind === categoryInd)
            setCategoryInd(null)
        else 
            setCategoryInd(ind)
    }

    if (resturantData?.length === 0) return <Shimmer />

    const { name, cuisines, costForTwoMessage } = resturantData?.cards[0]?.card?.card?.info;
    const categories = resturantData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((e) => e?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    return (
        <div className='text-center'>
            <div>
                <h1 className='font-bold my-6 text-2xl'>{name}</h1>
                <p className='font-bold text-lg'>{cuisines.join(", ")} - {costForTwoMessage}</p>
                {categories.map((item, ind) =>
                <div key={item?.card?.card?.title} onClick={(e) => handleClick(e,ind)}>
                    <ResCategory
                        data={item?.card?.card}
                        showItems={ind === categoryInd && true}
                    />
                </div>
                )}
            </div>
        </div>
    )
}

export default ResturantMenu