import React, { useContext } from 'react';
import { CDN_URL } from '../const/url';
import { Link } from 'react-router-dom';
import UserContext from '../const/UserContext';
const ResturantCard = ({ item }) => {

  const { name, cuisines, avgRating, cloudinaryImageId, sla, costForTwo } =
    item?.info;
    const {loggedInUser} = useContext(UserContext)

  return (
    <div data-testid="resCard" className="res-card mr-6" style={{ backgroundColor: "#e6d9cc" }}>
      <Link to={"/resturants/" + item?.info?.id} className='link'>
        <img
          className="res-logo"
          alt="res-logo"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{sla?.deliveryTime} mins</h4>
        <h4>{costForTwo}</h4>
        <h4>User: {loggedInUser}</h4>
      </Link>
    </div>
  );
};

export const withPromotedLabel = (ResturantCard) => {
  return ({item}) => {
    const {header, subHeader} = item?.info?.aggregatedDiscountInfoV3;
    return (
      <div>
        <label data-testid='promoted' className='absolute bg-black text-white m-2 p-2 rounded-lg'>{header}  {subHeader}</label>
        <ResturantCard item={item} />
      </div>
    )
  }
}


export default ResturantCard