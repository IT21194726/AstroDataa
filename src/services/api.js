import axios from 'axios';


const apiKey = process.env.REACT_APP_NASA_API_KEY;



export const fetchAPOD = async () => {
    try {
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching APOD:", error);
    }
};



export const fetchEpicImages = async () => {
    try {
        const response = await axios.get(`https://api.nasa.gov/EPIC/api/natural/images?api_key=${apiKey}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching EPIC images:", error);
        return [];
    }
};


export const fetchNasaImages = async (searchQuery) => {
    const url = `https://images-api.nasa.gov/search?q=${encodeURIComponent(searchQuery)}&media_type=image`;
    try {
        const response = await axios.get(url, {
            headers: { 'Authorization': `Bearer ${apiKey}` } 
        });
        return response.data.collection.items;
    } catch (error) {
        console.error("Failed to fetch images:", error);
        return [];
    }
};

export const fetchMarsRoverPhotos = async (date) => {
    try {
        const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos`, {
            params: {
                earth_date: date, 
                api_key: apiKey
            }
        });
        return response.data.photos;
    } catch (error) {
        console.error("Error fetching Mars Rover Photos:", error);
        return [];
    }
};









