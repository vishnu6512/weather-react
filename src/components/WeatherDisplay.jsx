function WeatherDisplay({ temp, windSpeed, humidity }) {
    return (
      <div className="text-center mt-4">
        <h1 style={{ fontSize: "80px", fontWeight: "bold" }}>{temp}°C</h1>
        <h5>Wind Speed: {windSpeed} km/h</h5>
        <h5>Humidity: {humidity}%</h5>
      </div>
    );
  }
  
  export default WeatherDisplay;
  