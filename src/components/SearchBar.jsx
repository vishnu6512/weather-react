function SearchBar({ userInput, setUserInput, getWeather }) {
    return (
      <div className="d-flex">
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
      </div>
    );
  }
  
  export default SearchBar;
  