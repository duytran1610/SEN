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
    return res.render('restapi/getCRUD', { data });
}

let getEditCRUD = async (req, res) => {
    let userID = req.params.id;

    let data = await CRUDService.getUserInfoById(userID);

    if (data) {
        return res.render('restapi/editCRUD.ejs', { data });
    }

    return res.sendStatus(404);
}

let putCRUD = async (req, res) => {
    let user = req.body;
    let userID = req.params.id;
    try {
        let message = await CRUDService.updateUserInfo(user, userID);
        console.log(message);
        return res.redirect('/restapi/get-crud');
    }
    catch(e) {
        console.log('update errol!');
        return res.redirect('back');
    }
}

let deleteCRUD = async (req, res) => {
    let userID = req.params.id;
    try {
        await CRUDService.deleteUser(userID);
        return res.redirect('back');
    }
    catch(e) {
        console.log(e);
        return res.status(400).json('deleted errol!');
    }
}

export default {
    showForm,
    postCRUD,
    getCRUD,
    getEditCRUD,
    putCRUD,
    deleteCRUD
}