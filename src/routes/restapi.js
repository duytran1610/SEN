import express from "express";
import restapiController from "../controllers/restapiController";

let router = express.Router();

router.get('/crud', restapiController.getCRUD);
router.post('/post-crud', restapiController.postCRUD);

export default router;