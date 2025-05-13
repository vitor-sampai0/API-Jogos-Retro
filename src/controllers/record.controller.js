import RecordModel from "../models/record.model.js";

class RecordController {
  async finAll(req, res) {
    try {
      const records = await RecordModel.findAll();

      return res.status(200).json(records);
    } catch (error) {
      console.error("Error finding all records", error);
      return res
        .status(500)
        .json({ message: "Error finding all records", error });
    }
  }

  async create(req, res) {
    try {
      const { score, screenshot, userId, gameId } = req.body;

      if (!score || !screenshot || !userId || !gameId) {
        return res
          .status(400)
          .json({ error: "All the fields are required" });
      }

      const data = {
        score,
        screenshot,
        userId, 
        gameId,
      };

      const newRecord = await RecordModel.create(data);

      return res.status(201).json({
        message: "New record successufully created! ",
        newRecord
      });
    } catch (error) {
      console.error("Erro creating a new record:", error);
      res.status(500).json({ error: "Error creating a new record    " });
    }
  }
}

export default new RecordController();
