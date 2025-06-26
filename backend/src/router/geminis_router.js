const express= require('express')
const router = express.Router()
const geminiController = require('../controllers/APIGeminis')


router.post('/',geminiController.generarRespuesta);
module.exports = router;