import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Shared/NewsCard/NewsCard';

const Home = () => {
    const allnews = useLoaderData();
    console.log(allnews)
    return (
        <div>
            <h2>Dragon News Home : {allnews.length} news</h2>
            {
                allnews.map((news) => (
                   <NewsCard news={news} key={news._id}></NewsCard>
                ))
            }
        </div>
    );
};

export default Home;