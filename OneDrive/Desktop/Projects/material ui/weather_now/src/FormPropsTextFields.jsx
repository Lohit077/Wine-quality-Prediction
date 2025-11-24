import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function FormPropsTextFields({ updateinfo }) {
  const API_CALL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "0ab94cbe7ca9ec4c28389266163811b8";

  const [city, setCity] = useState("");

  const getWeatherInfo = async () => {
    let response = await fetch(
      `${API_CALL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();
    console.log(jsonResponse);

    let ans = {
      city: city,
      temp: jsonResponse.main.temp,
      tempmin: jsonResponse.main.temp_min,
      tempmax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelslike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    console.log(ans);
    return ans;
  };

  const change = (event) => {
    setCity(event.target.value);
  };

  const submitting = async (event) => {
    event.preventDefault();
    let newinfo = await getWeatherInfo();
    setCity(""); 
    updateinfo(newinfo);
  };

  return (
    <Box
      component="form"
      onSubmit={submitting}
      sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        label="City name"
        placeholder="Enter a city"
        value={city}
        onChange={change}
      />
      <br /><br />
      <Button type="submit" variant="contained">
        Search
      </Button>
    </Box>
  );
}
