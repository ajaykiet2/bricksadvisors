const express = require("express");
const bodyParser = require("body-parser");

const HttpError = require('./errors/HttpError')

const locationRoutes = require("./routes/public/location.route");

const app = express();

app.get("/", (req, res, next) => {
    res.json({status: true, message: 'Welcome to Bricksadvisors App'});
});

app.use("/api/locations", locationRoutes);


/**
 * Handling 404 route
 */
app.use((req, res, next) => {
    throw new HttpError("API was not found!", 404);
})

/**
 * Catch exception for errors
 */
app.use((error, req, res, next) => {
    if (req.headerSent) {
       return next(error); 
    }

    /**
     * Sets response code and body for error
     */
    res.status(error.code || 500);
    res.json({
        status: false,
        message: error.message || 'Unknown error occurred!'
    });
})


app.listen(5000);