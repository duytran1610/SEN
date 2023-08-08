import express from "express";
import restapiController from "../controllers/restapiController";

let router = express.Router();

router.get('/crud', restapiController.showForm);
router.post('/post-crud', restapiController.postCRUD);
router.get('/get-crud', restapiController.getCRUD);

export default router;