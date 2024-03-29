import express from "express";

const configViewEngine = (app) => {
    // static file
    app.use(express.static('./src/public'));

    // set views
    app.set('view engine', 'ejs');
    app.set('views', './src/views');

}

export default configViewEngine;