import express from "express";
import GameController from "../controllers/game.controller.js";

const GameRouter = express.Router();

GameRouter.get("/", GameController.finAll)
GameRouter.post("/", GameController.create)

export default GameRouter;