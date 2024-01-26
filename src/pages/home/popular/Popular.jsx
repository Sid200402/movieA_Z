
import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWeapper/ContentWrapper'
import SwitchTabs from '../../../components/switchtabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from "../../../components/carousel/Carousel";
ContentWrapper;
SwitchTabs;
useFetch


const Popular = () => {
    const [endpoint, setEndpoint] = useState("movie")
    const { data, loading } = useFetch(`/${endpoint}/popular`)
    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv")

    }

    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className='carouselTitle'>Popular Shows</span>
                <SwitchTabs data={["Movies", "Tv Shows"]} onTabChange={onTabChange} />


            </ContentWrapper>

            <Carousel data={data?.results} loading={loading} endpoint={endpoint} />

        </div>
    );
}

export default Popular