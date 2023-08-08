import CRUDService from "../services/CRUDService";

let showForm = (req, res) => {
    return res.render('restapi/crud.ejs');
}

let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send('form server');
}

let getCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    return res.render('restapi/getCRUD', {
        data: data
    });
}

export default {
    showForm,
    postCRUD,
    getCRUD
}