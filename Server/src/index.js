"use strict";
exports.__esModule = true;
var express = require("express");
var dotenv = require("dotenv");
var cors = require("cors");
var request = require("request");
dotenv.config();
var app = express();
var PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.get("/api/:cityname", function (req, res, next) {
    var cityname = req.params.cityname;
    request("".concat(process.env.BASE_URI, "?q=").concat(cityname, "&appid=").concat(process.env.WEATHER_API_KEY, "&units=metric"), function (error, response, body) {
        var data = JSON.parse(body);
        if (response.statusCode === 200) {
            res.send(data);
        }
        else {
            res.json({ err: error });
        }
    });
});
app.listen(PORT, function () {
    console.log("App is listening on port ".concat(PORT));
});
