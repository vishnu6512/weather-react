import { Row, Col } from "react-bootstrap"; 


function WeatherDetails({ feelsLike, tempMin, tempMax, visibility, clouds, sunrise, sunset }) {
    return (
      <Row className="text-center">
        <Col md={6} className="mb-3">
          <h4>Feels Like</h4>
          <p style={{ fontSize: "20px" }}>{feelsLike}°C</p>
        </Col>
        <Col md={6} className="mb-3">
          <h4>Min / Max</h4>
          <p style={{ fontSize: "20px" }}>
            {tempMin}°C / {tempMax}°C
          </p>
        </Col>
        <Col md={6} className="mb-3">
          <h4>Visibility</h4>
          <p style={{ fontSize: "20px" }}>{visibility / 1000} km</p>
        </Col>
        <Col md={6} className="mb-3">
          <h4>Clouds</h4>
          <p style={{ fontSize: "20px" }}>{clouds}%</p>
        </Col>
        <Col md={6} className="mb-3">
          <h4>Sunrise</h4>
          <p style={{ fontSize: "20px" }}>{sunrise}</p>
        </Col>
        <Col md={6} className="mb-3">
          <h4>Sunset</h4>
          <p style={{ fontSize: "20px" }}>{sunset}</p>
        </Col>
      </Row>
    );
  }
  
  export default WeatherDetails;
  