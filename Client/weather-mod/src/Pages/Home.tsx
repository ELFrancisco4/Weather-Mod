import Metrics from "../components/Home/atoms/Metrics";
import Search from "../components/Home/atoms/Search";
import Location from "../components/Home/atoms/Location";
import axios from "axios";
import "../styles/pages/Home.scss";
import { useState } from "react";

const Home = () => {
  const [data, setData] = useState<any>({});
  const [cityName, setCityName] = useState("");

  const fetchData = async () => {
    const result = await axios.get(`https://weather-mod.onrender.com/api/${cityName}`);
    setData(result.data);
  };

  const searchLocation = (event: any) => {
    if (event.key === "Enter") {
      fetchData();
      setCityName("");
    }
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const dateString = `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;

    return dateString;
  };

  let { name, main, weather, wind } = data;

  return (
    <div className={"container clouds"}>
      <div className="logo_and_search">
        <Search
          onChange={(e: any) => setCityName(e.target.value)}
          onKeyUp={searchLocation}
          value={cityName}
        />
        <div>
          <img
            src={require("../Assets/weather-icon-illustration03-Graphics-10205167-1.jpg")}
            alt="Logo"
          />{" "}
         <p>Weather-Mod</p> 
        </div>
      </div>

      <div className="metrics">
        <Metrics
          temperature={main ? main.temp : 0}
          description={weather ? weather[0].description : "Something"}
          humidity={main ? main.humidity : 0}
          pressure={main ? main.pressure : 0}
          wind={wind ? wind.speed : 0}
        />
        <div>
          <Location /> <h1>{name ? name : "City Name"}</h1>
          <p>{getCurrentDate()}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
