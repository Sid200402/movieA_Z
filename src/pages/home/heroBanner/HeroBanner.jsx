import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";
import useFetch from '../../../hooks/useFetch';
import Img from '../../../components/lazyLordImage/Img';
import ContentWrapper from '../../../components/contentWeapper/ContentWrapper';


const HeroBanner = () => {

    const [background, setbackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const { url } = useSelector((state) => state.home)
    const { data, loading } = useFetch("/trending/movie/day");


    useEffect(() => {
        const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setbackground(bg);
    }, [data])

    const searchQueryHandler = (event) => {
        if (event.key == "Enter" && query.length > 0) {
            navigate(`/search/${query}`)
        }

    };

    return (
        <div className='heroBanner'>

            {!loading && <div className="backdrop-img">
                <Img src={background} />
            </div>}
            <div className="opacity-layer"></div>

            <ContentWrapper>

                <div className='heroBannerContent'>
                    <span className='title'>Welcome</span>
                    <span className='subTitle'>Millions of movies, TV show and people to discover.
                        Explore now.</span>

                    <div className="searchInput">
                        <input type='text'
                            placeholder='Search for movie or TV show..'
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                        />
                        <button>Search</button>
                    </div>

                </div>

            </ContentWrapper>

        </div>
    );
}

export default HeroBanner