import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const URL = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=61f4b640e8354b9cb17ad3d54caf8980';
        fetch(URL)
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    },[])
    return (
        <div>
            <h1>Top Headlines: {articles.length}</h1>
            {
                articles.map(article => <News article = {article}></News>)
            }
        </div>
    );
};

export default TopHeadline;