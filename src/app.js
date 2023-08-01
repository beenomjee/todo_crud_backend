const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
// const config = require("./config/config");
const logRequest = require("./middlewares/logRequest");
const routes = require("./routes");
const ApiError = require("./utils/ApiError");
const {
    errorConverter,
    errorHandler,
    customErrorMessage,
} = require("./middlewares/error");

const app = express();

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());
app.use(express.urlencoded({ limit: "500mb", extended: true }));

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options("*", cors());

app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

app.use(express.static("public"));
app.use(logRequest);

// v1 api routes
app.use(routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    next(new ApiError(httpStatus.BAD_REQUEST, "API Not found"));
});

// convert error to ApiError, if needed
app.use(errorConverter);
app.use(customErrorMessage);
// handle error
app.use(errorHandler);

module.exports = app;
