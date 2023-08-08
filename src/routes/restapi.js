import express from "express";
import restapiController from "../controllers/restapiController";

let router = express.Router();

router.get('/crud', restapiController.showForm);
router.post('/post-crud', restapiController.postCRUD);
router.get('/get-crud', restapiController.getCRUD);
router.get('/edit-crud/:id', restapiController.getEditCRUD);
router.put('/put-crud/:id', restapiController.putCRUD);
router.delete('/delete-crud/:id', restapiController.deleteCRUD);

export default router;