import prisma from "../../prisma/prisma.js";

class GameModel {
  //obter todos os jogos
  async findAll(name, platform) {
    const where = {};

    if (name) {
      where.name = {
        contains: name,
      };
    }

    if (platform) {
      where.platform = {
        contains: platform,
      };
    }

    const games = await prisma.game.findMany({where,});

    return {
      total: games.length,
      games,
    };
  }
  //criar um novo jogo
  async create(data) {
    const game = await prisma.game.create({ data });

    return game;
  }
}
export default new GameModel();
