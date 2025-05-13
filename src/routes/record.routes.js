import express from "express";
import RecordController from "../controllers/record.controller.js";

const RecordRouter = express.Router();

RecordRouter.get("/", RecordController.finAll)
RecordRouter.post("/", RecordController.create)

export default RecordRouter;