import prisma from "../../prisma/prisma.js";

class RecordModel {
    //obter todos os recordes
    async findAll() {
        const records = await prisma.record.findMany()

        return {
            total: records.length,
            records,
        };
    }

    //criar um novo jogo 
    async create(data) {
        const record = await prisma.record.create({data})

        return record;
    }

}
export default new RecordModel();
