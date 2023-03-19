import * as express from "express";
import { Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";
import * as cors from "cors";
import * as request from "request";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.get("/api/:cityname", (req: Request, res: Response, next: NextFunction) => {
  const cityname = req.params.cityname;
  request(
    `${process.env.BASE_URI}?q=${cityname}&appid=${process.env.WEATHER_API_KEY}&units=metric`,
    (error, response, body) => {
      let data = JSON.parse(body);
      if (response.statusCode === 200) {
        res.send(data);
      } else {
        res.json({ err: error });
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
