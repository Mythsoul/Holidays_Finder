

import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 4000;


app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs"); // Set EJS as the view engine


app.get("/", (req, res) => {
    res.render("index.ejs"); // Render your form view (index.ejs)
});

app.post("/holidays", async (req, res) => {
    try {
        const location = req.body.country;
        const year = req.body.year;

        
        const response = await axios.get(`https://calendarific.com/api/v2/holidays`, {
            params: {
                api_key: "tbgR3OdaYZvVU4kF6wrYELJNOUAQqmwM", 
                country: location,
                year: year
            }
        });

        const holidays = response.data.response.holidays;
        res.render("holidays.ejs", { holidays }); // Render the holidays.ejs template with holiday data
    } catch (error) {
        console.error("Error fetching holiday data:", error.message);
        res.status(500).send('Error fetching holiday data');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
