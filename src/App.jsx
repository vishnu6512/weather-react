import { useState } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import mistImage from './assets/mist.jpg';
import clearImage from './assets/clear.jpg';
import cloudsImage from './assets/clouds.jpg';
import snowImage from './assets/snow.jpg';
import rainImage from './assets/rain.jpg';
import drizzleImage from './assets/drizzle.jpg';
import thunderstormImage from './assets/thunderstorm.jpg';
import fogImage from './assets/fog.jpg';
import hazeImage from './assets/haze.jpg'
import smokeImage from './assets/smoke.jpg'
import logoImage from './assets/logo.png'

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
      case "haze":
        setBackgroundImage(`url(${hazeImage})`);
        break;
      case "smoke":
        setBackgroundImage(`url(${smokeImage})`)
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
        backgroundSize: "cover",  // Adjust background size
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2",
          backdropFilter: "blur(1px)",
        }}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="d-flex align-items-center mt-3 flex-column flex-md-row">
          <h1 style={{ fontSize: "80px", marginRight: "15px", textAlign: "center" }}>CloudNine</h1>
          <img
            src={logoImage}
            style={{ height: "100px", width: "auto", marginTop: "10px" }}
            alt="CloudNine Logo"
          />
        </div>
        <p style={{ color: "black", fontSize: '20px', textAlign: "center", marginTop: "10px" }}>
          Forecast your day, your way
        </p>
      </div>

      {/* The m-2 p-5 container is placed here to float above the background image */}
      <div className="m-5 p-5">
        <Container>
          <Row>
            <Col xs={12} md={3} className="left-section">
              <Row className="mb-3">
                <Col xs={8} md={8} className="d-flex">
                  <input
                    type="text"
                    placeholder="Enter location"
                    onChange={(e) => setUserInput(e.target.value)}
                    value={userInput}
                    className="form-control mb-2"
                  />
                </Col>
                <Col xs={4} md={4} className="d-flex">
                  <button onClick={getWeather} className="btn btn-primary w-100">
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
                  <h5>{weatherDetails.weather[0].main}</h5>
                </div>
              )}
            </Col>
            {weatherDetails && (
              <Col xs={12} md={9} className="right-section">
                <Row className="text-center">
                  <Col xs={6} md={6} className="mb-3">
                    <h4>Feels Like</h4>
                    <p style={{ fontSize: "20px", color:'rgb(255, 255, 255) ',textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}>
                      {weatherDetails.main.feels_like}°C
                    </p>
                  </Col>
                  <Col xs={6} md={6} className="mb-3">
                    <h4>Min / Max</h4>
                    <p style={{ fontSize: "20px", color:'rgb(255, 255, 255) ',textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                      {weatherDetails.main.temp_min}°C /{" "}
                      {weatherDetails.main.temp_max}°C
                    </p>
                  </Col>
                  <Col xs={6} md={6} className="mb-3">
                    <h4>Visibility</h4>
                    <p style={{ fontSize: "20px", color:'rgb(255, 255, 255) ',textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                      {weatherDetails.visibility / 1000} km
                    </p>
                  </Col>
                  <Col xs={6} md={6} className="mb-3">
                    <h4>Clouds</h4>
                    <p style={{ fontSize: "20px", color:'rgb(255, 255, 255) ',textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                      {weatherDetails.clouds.all}%
                    </p>
                  </Col>
                  <Col xs={6} md={6} className="mb-3">
                    <h4>Sunrise</h4>
                    <p style={{ fontSize: "20px", color:'rgb(255, 255, 255) ',textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                      {formatTime(weatherDetails.sys.sunrise)}
                    </p>
                  </Col>
                  <Col xs={6} md={6} className="mb-3">
                    <h4>Sunset</h4>
                    <p style={{ fontSize: "20px", color:'rgb(255, 255, 255) ',textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
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
