import React, { useEffect, useState } from 'react';
import { fetchAPOD } from '../services/api';
import '../AstronomyPicture.css'; 

const AstronomyPicture = () => {
    const [apod, setApod] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchAPOD();
            setApod(data);
        };
        getData();
    }, []);

    return (
        <div className="container">
            <div className="page-title">Astronomy Picture of the Day</div>
            {apod ? (
                <div className="content">
                    <img src={apod.url} alt="Astronomy Picture of the Day" className="image" />
                    <div className="text-container">
                        <h1 className="title">{apod.title}</h1>
                        <p className="description">{apod.explanation}</p>
                    </div>
                </div>
            ) : (
                <div className="spinner-container">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AstronomyPicture;
