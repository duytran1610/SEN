import homeRouter from "./home.js";

const Route = (app) => {
    app.use('/', homeRouter);
}

export default Route;