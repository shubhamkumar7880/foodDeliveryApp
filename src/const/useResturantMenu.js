import React, { useEffect, useState } from 'react'
import { MENU_API_URL } from '../const/url';


const useResturantMenu = (resId) => {
    const [resturantData, setResturantData] = useState([]);

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API_URL+resId);
        const json = await data.json();
        setResturantData(json?.data);
    }
    return resturantData;
}

export default useResturantMenu