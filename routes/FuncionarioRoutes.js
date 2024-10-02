const express = require('express')
const FuncionarioController = require('../controllers/FuncionarioController')

const router = express.Router()
router.get('/funcionarios',FuncionarioController.listarFuncionarios)

module.exports = router
