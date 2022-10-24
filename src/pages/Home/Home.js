import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Shared/NewsCard/NewsCard';

const Home = () => {
    const allnews = useLoaderData();
    // console.log(news)
    return (
        <div>
            <h2>Dragon News Home : {allnews.length} news</h2>
            {
                allnews.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default Home;