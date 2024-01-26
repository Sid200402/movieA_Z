import React from 'react'
import Trending from './trending/Trending';


import "./style.scss"

import HeroBanner from './heroBanner/HeroBanner';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';
HeroBanner
const Home = () => {
    return (
        <div className='homepage'>
            <HeroBanner />
            <Trending />
            <Popular />
            <TopRated />
        </div>
    )
}

export default Home