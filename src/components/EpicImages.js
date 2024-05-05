import React, { useEffect, useState } from 'react';
import { fetchEpicImages } from '../services/api';

const EpicImages = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const loadImages = async () => {
            const data = await fetchEpicImages();
            console.log("Fetched EPIC data:", data);
            const updatedImages = data.map(img => {
                const dateStr = img.identifier; // Assuming it's like '20240427223432'
                const year = dateStr.substring(0, 4);
                const month = dateStr.substring(4, 6);
                const day = dateStr.substring(6, 8);
                const url = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${img.identifier}.png`;
                console.log("Constructed URL:", url); // Log the constructed URL
                return {...img, url}; // Append the URL to each image object
            });
            setImages(updatedImages);
        };

        loadImages();
    }, []);

    return (
        <div>
            <h1>EPIC Daily Images</h1>
            <div>
                {images.length > 0 ? (
                    images.map((image, index) => (
                        <img key={index} src={image.url} alt="EPIC Image of Earth" />
                    ))
                ) : (
                    <p>No images found or loading failed.</p>
                )}
            </div>
        </div>
    );
};

export default EpicImages;
