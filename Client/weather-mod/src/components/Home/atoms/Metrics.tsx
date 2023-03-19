import Thermostat from "./Thermostat";
import styles from "../styles/home.module.scss";
type MetricsProps = {
  temperature: number;
  pressure: number;
  humidity: number;
  description: string;
  wind: number;
};

const Metrics = ({
  temperature,
  pressure,
  humidity,
  description,
  wind,
}: MetricsProps) => {
  return (
    <div className={styles.metrics}>
      <div className={styles.temperature}>
        <Thermostat />
        <h1>{temperature} &#8451;</h1>
      </div>
      <div className={styles.metrics__data}>
        <p>
          Pressure: <span>{pressure}</span>mm
        </p>
        <p>
          Humidity: <span>{humidity}</span>%
        </p>
        <p>
          Description: <span>{description}</span>
        </p>
        <p>
          Wind: <span>{wind}</span>m/s
        </p>
      </div>
    </div>
  );
};

export default Metrics;
