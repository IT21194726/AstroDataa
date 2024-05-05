import React, { useState, useEffect } from 'react';
import { fetchNasaImages } from '../services/api';

const NasaImageGallery = () => {
    const [images, setImages] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        if (searchQuery !== '') {
            fetchImages();
        }
    }, [searchQuery]);

    const fetchImages = async () => {
        const fetchedImages = await fetchNasaImages(searchQuery);
        setImages(fetchedImages);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="vh-100 d-flex flex-column">
            <div className="px-3 py-2 text-white" style={{background: 'linear-gradient(to right, #5a3f73, #9a85d3, #d7b9e8)'}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center">
                            <h2 className="mb-3" style={{ display: 'block' }}>Search and Explore Images</h2>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                placeholder="Search images"
                                style={{ maxWidth: '300px', margin: '0 auto' }}  // Adjusted for better alignment
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 flex-grow-1">
                <div className="row">
                    {images.map((image, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card h-100">
                                <img className="card-img-top" src={image.links[0].href} alt={image.data[0].title} />
                                <div className="card-body">
                                    <h5 className="card-title">{image.data[0].title}</h5>
                                    <p className="card-text">{image.data[0].description || "No description available."}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NasaImageGallery;
