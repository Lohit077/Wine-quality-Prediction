// Weatherinfo.jsx
import { useState } from "react";
import FormPropsTextFields from "./FormPropsTextFields";
import ImgMediaCard from "./ImgMediaCard";

export default function Weatherinfo() {
    const [weatherinfo, setweatherinfo] = useState({
        city: "wonderland",
        feelslike: 24.04,
        temp: 25.05,
        tempmin: 25.05,
        tempmax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    let updateinfo = (info) => { // ✅ accept the argument
        setweatherinfo(info);
    };

    return (
        <div>
            <FormPropsTextFields updateinfo={updateinfo} />
            <ImgMediaCard info={weatherinfo} />
        </div>
    );
}
