const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

module.exports = {
    async listarFuncionarios(req,res){
        try {
            const funcionarios = await prisma.funcionario.findMany();
            res.status(200).json(funcionarios);

        }catch(error){
            res.status(500).json({ error: "Erro ao listar os funcionarios"})
        }
    }



};