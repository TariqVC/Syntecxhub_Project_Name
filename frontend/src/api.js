export const getWeatherData = async (cityName) => {
    const response = await fetch(
        `http://localhost:5000/api/weather?city=${cityName}`
    );

       if (!response.ok) {
        throw new Error(`Failed to fetch weather data: ${response.status}`);
    }

    const data = await response.json();
    return data; 
};

