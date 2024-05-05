import React, { useState, useEffect } from 'react';
import { fetchMarsRoverPhotos } from '../services/api';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const MarsRoverPhotos = () => {
    const [photos, setPhotos] = useState([]);
    const [date, setDate] = useState('2022-01-01#');  // Default date or use a dynamic method to set today's date

    useEffect(() => {
        const loadPhotos = async () => {
            const fetchedPhotos = await fetchMarsRoverPhotos(date);
            setPhotos(fetchedPhotos);
        };
        loadPhotos();
    }, [date]);  // Dependency on date means it will refetch when date changes

    const handleDateChange = (event) => {
        setDate(event.target.value);  // Update the date when user selects a new date
    };

    return (
        <div className="container mt-4">
            <div className="text-center">
                <h1 className="mb-3">Mars Rover Photos</h1>
            </div>
            <div className="d-flex flex-column align-items-start">
                <label htmlFor="datePicker" className="form-label mb-1" style={{fontWeight: 'bold'}}>Select a date to view Mars Rover photos:</label>
                <input 
                    type="date" 
                    id="datePicker" 
                    value={date} 
                    onChange={handleDateChange} 
                    className="form-control mb-4" 
                    style={{width: '250px'}} // Adjust width as necessary
                />
            </div>
            <div className="row">
                {photos.map(photo => (
                    <div className="col-md-3 mb-4" key={photo.id}>
                        <div className="carde h-100">
                            <img src={photo.img_src} alt="Mars Rover" className="carde-img-top" />
                            <div className="carde-body">
                                <h6 className="carde-title">{photo.camera.full_name}</h6>
                                <p className="carde-text">Taken on {photo.earth_date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MarsRoverPhotos;
