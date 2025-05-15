import GameModel from "../models/game.model.js";

class GameController {
  async finAll(req, res) {
    const {name, platform} = req.query;
    // console.log("nome", name);
    // console.log("plataforma", platform);

    try {
      const games = await GameModel.findAll(name, platform);

      return res.status(200).json(games);
    } catch (error) {
      console.error("Error finding all games", error);
      return res
        .status(500)
        .json({ message: "Error finding all games", error });
    }
  }

  async create(req, res) {
    try {
      const { name, platform } = req.body;

      if (!name || !platform) {
        return res
          .status(400)
          .json({ error: "Name and Platfrom fields are required" });
      }

      const data = {
        name,
        platform,
      };

      const newGame = await GameModel.create(data);

      return res.status(201).json({
        message: "New game successufully created, Duoingo Singing! ",
        newGame
      });
    } catch (error) {
      console.error("Erro creating a new game:", error);
      res.status(500).json({ error: "Error creating a new game" });
    }
  }
}

export default new GameController();
