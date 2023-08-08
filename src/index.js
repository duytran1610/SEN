import express from "express";
import viewEngine from "./config/configViewEngine.js";
import Route from "./routes/web.js";
import connectDB from "./config/connectDB.js";
import methodOverride from "method-override";

// run file .env
import { config } from "dotenv";
config();

const app = express();

// get port
const port = process.env.PORT || 8080;

// create middleware (req.body) for request method POST, that allows the server to get and process data from the user
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// override request method POST (override with POST having ?_method=DELETE)
app.use(methodOverride('_method'));

// connect DB
connectDB();


// config app
viewEngine(app);

// Route init
Route(app);

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});
