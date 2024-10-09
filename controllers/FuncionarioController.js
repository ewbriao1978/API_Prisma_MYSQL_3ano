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
    },

    async criarFuncionarios(req,res){
        try {
            const {
                matricula, nome, email, salario_bruto  
            } = req.body;

            const novoFuncionario = await prisma.funcionario.create({
                data: {
                    matricula, nome, email, salario_bruto
            }})

            res.status(201).json(novoFuncionario);

        }catch(error){
            res.status(500).json({ error: "Erro ao criar o funcionário" });

        }
    },
    async deletarFuncionario(req,res){
        try {
            //const id = req.params.id;
            const { id } = req.params;
            await prisma.funcionario.delete(

                {
                    where: { id: Number(id) }


                }


            )
            res.status(204).json({ message: "Funcionário removido com sucesso." } )

        }catch(error){
            res.status(500).json({ error: "Erro ao remover o funcionário" });
        }
    }



};