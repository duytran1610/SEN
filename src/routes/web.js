import homeRouter from "./home.js";
import restapiRouter from "./restapi.js";

const Route = (app) => {
    app.use('/restapi', restapiRouter);

    app.use('/', homeRouter);
}

export default Route;