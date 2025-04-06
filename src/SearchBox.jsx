import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "c1d9d24874691ca8e6309ecdc60f8a56";

  let getweatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();

      if (!response.ok) {
        throw new Error(jsonResponse.message);
      }

      let result = {
        city: jsonResponse.name,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };

      setError(""); // Clear any previous error
      return result;
    } catch (error) {
      setError("City not found. Please enter a valid city name.");
      return {
        city: "",
        temp: 0,
        tempMin: 0,
        tempMax: 0,
        humidity: 0,
        feelsLike: 0,
        weather: "",
      };
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    console.log("City name is: " + city);
    let newInfo = await getweatherInfo();
    updateInfo(newInfo);
    setCity("");
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br /> <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
      {error && <p style={{ color: "red" }}>No such place exists</p>}
    </div>
  );
}
