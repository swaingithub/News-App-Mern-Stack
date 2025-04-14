import React, { useEffect, useState, useContext } from 'react';
import { NewsContext } from '../context/NewsContext';

const NewsList = () => {
    const { newsArticles, fetchNews } = useContext(NewsContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadNews = async () => {
            await fetchNews();
            setLoading(false);
        };
        loadNews();
    }, [fetchNews]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>News Articles</h2>
            <ul>
                {newsArticles.map(article => (
                    <li key={article._id}>
                        <h3>{article.title}</h3>
                        <p>{article.content}</p>
                        <p><em>By {article.author} on {new Date(article.date).toLocaleDateString()}</em></p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsList;