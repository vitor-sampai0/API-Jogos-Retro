import prisma from "../../prisma/prisma.js";

class GameModel {
    //obter todos os jogos
    async findAll() {
        const games = await prisma.game.findMany()

        return {
            total: games.length,
            games,
        };
    }



}
export default new GameModel();
