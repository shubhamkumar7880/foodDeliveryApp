import React, { useEffect, useRef } from 'react'
import ResturantCard, { withPromotedLabel } from './ResturantCard';
import { useState } from 'react';
import Shimmer from '../components/Shimmer';
import useDebounce from '../const/useDebouce';
import useOnlineStatus from '../const/useOnlineStatus';

const Body = () => {
  const [restaurants, setResturants] = useState([]);
  const restoData = useRef([]);
  const debouce = useDebounce()
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    fetchData();
  }, [])

  const ResturantCardPromoted = withPromotedLabel(ResturantCard);

  const fetchData = async () => {
    // https://proxy.cors.sh/
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.57702930000001&lng=88.48880990000004&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING").catch((err) => console.log('err',err));
    const json = await data?.json();
    const resList = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setResturants(resList);
    restoData.current = resList;
  }

  const filterResturant = () => {
    const topResturant = restaurants.filter((item) => item?.info?.avgRating >= 4.4);
    setResturants(topResturant);
  }

  const searchRest = (e) => {
    const results = e?.target?.value?.toLowerCase();
      if (results?.length !== 0) {
        const searchResults = restoData.current?.filter((item) => {
          const itemList = item?.info?.name.toLowerCase();
          return itemList.includes(results);
        });
        setResturants(searchResults);
      } else {
        setResturants(restoData.current);
      }
  }
  if(!onlineStatus) return<h1>You are offline! Please check your internet connection!</h1>
  return (
    <div className="body mt-6">
      {restaurants?.length === 0 ? <Shimmer /> :
        <div>
          <div className='filter'>
            <div className='search'>
              <input data-testid='searchBar' className='search-box' type='text' onChange={e => debouce(searchRest.bind(null, e))} placeholder='Search By Resturant Name'/>
            </div>
            <button className='filter-btn' onClick={filterResturant}>Top Rated Resturant</button>
          </div>
          <div className="res-container mt-5">
            {restaurants?.map((item) => (
              (item?.info?.aggregatedDiscountInfoV3?.header ? <ResturantCardPromoted item={item} key={item?.info?.id} /> :
             <ResturantCard item={item} key={item?.info?.id} />
              )
            ))}
          </div>
        </div>
      }
    </div>
  );
};

export default Body