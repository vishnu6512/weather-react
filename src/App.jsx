import { useState } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import mistImage from './assests/mist.jpg';
import clearImage from './assests/clear.jpg';
import cloudsImage from './assests/clouds.jpg';
import snowImage from './assests/snow.jpg';
import rainImage from './assests/rain.jpg';
import drizzleImage from './assests/drizzle.jpg';
import thunderstormImage from './assests/thunderstorm.jpg';
import fogImage from './assests/fog.jpg';






function App() {
  const [userInput, setUserInput] = useState("");
  const [weatherDetails, setWeatherDetails] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState("");

  const getWeather = async () => {
    if (userInput.trim()) {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`
        );
        if (response.status === 200) {
          const data = await response.json();
          setWeatherDetails(data);
          updateBackground(data.weather[0].main.toLowerCase());
        } else {
          setWeatherDetails(null);
        }
      } catch (error) {
        setWeatherDetails(null);
      }
    } else {
      setWeatherDetails(null);
    }
  };

  const updateBackground = (weatherCondition) => {
    switch (weatherCondition) {
      case "mist":
        setBackgroundImage(`url(${mistImage})`);
        break;
      case "clouds":
        setBackgroundImage(`url(${cloudsImage})`);
        break;
        case "clear":
          setBackgroundImage(`url(${clearImage})`);
        break;
      case "snow":
        setBackgroundImage(`url(${snowImage})`);
        break;
      case "rain":
        setBackgroundImage(`url(${rainImage})`);
        break;
      case "drizzle":
        setBackgroundImage(`url(${drizzleImage})`);
        break;
      case "thunderstorm":
        setBackgroundImage(`url(${thunderstormImage})`);
        break;
      case "fog":
        setBackgroundImage(`url(${fogImage})`);
        break;
      default:
        setBackgroundImage("");
    }
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: "fit",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
      }}
    >
      <div className="m-2 p-5">
        <Container>
          <Row>
            <Col md={3} className="left-section">
              <Row className="mb-3">
                <Col className="d-flex">
                  <input
                    type="text"
                    placeholder="Enter location"
                    onChange={(e) => setUserInput(e.target.value)}
                    value={userInput}
                    className="form-control mb-2"
                  />
                  <button onClick={getWeather} className="btn btn-primary">
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </Col>
              </Row>
              {weatherDetails && (
                <div className="text-center mt-4">
                  <h1 style={{ fontSize: "80px", fontWeight: "bold" }}>
                    {weatherDetails.main.temp}°C
                  </h1>
                  <h5>Wind Speed: {weatherDetails.wind.speed} km/h</h5>
                  <h5>Humidity: {weatherDetails.main.humidity}%</h5>
                </div>
              )}
            </Col>
            {weatherDetails && (
              <Col md={9} className="right-section">
                <Row className="text-center">
                  <Col md={6} className="mb-3">
                    <h4>Feels Like</h4>
                    <p style={{ fontSize: "20px" }}>
                      {weatherDetails.main.feels_like}°C
                    </p>
                  </Col>
                  <Col md={6} className="mb-3">
                    <h4>Min / Max</h4>
                    <p style={{ fontSize: "20px" }}>
                      {weatherDetails.main.temp_min}°C /{" "}
                      {weatherDetails.main.temp_max}°C
                    </p>
                  </Col>
                  <Col md={6} className="mb-3">
                    <h4>Visibility</h4>
                    <p style={{ fontSize: "20px" }}>
                      {weatherDetails.visibility / 1000} km
                    </p>
                  </Col>
                  <Col md={6} className="mb-3">
                    <h4>Clouds</h4>
                    <p style={{ fontSize: "20px" }}>
                      {weatherDetails.clouds.all}%
                    </p>
                  </Col>
                  <Col md={6} className="mb-3">
                    <h4>Sunrise</h4>
                    <p style={{ fontSize: "20px" }}>
                      {formatTime(weatherDetails.sys.sunrise)}
                    </p>
                  </Col>
                  <Col md={6} className="mb-3">
                    <h4>Sunset</h4>
                    <p style={{ fontSize: "20px" }}>
                      {formatTime(weatherDetails.sys.sunset)}
                    </p>
                  </Col>
                </Row>
              </Col>
            )}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
