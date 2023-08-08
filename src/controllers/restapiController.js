import CRUDService from "../services/CRUDService";

let getCRUD = (req, res) => {
    return res.render('restapi/crud.ejs');
}

let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send('form server');
}

export default {
    getCRUD,
    postCRUD
}