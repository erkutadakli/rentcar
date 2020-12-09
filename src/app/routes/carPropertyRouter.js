const express = require('express');
const checkAuth = require('../middleware/checkAuth');
const controller = require('../controllers/carPropertyController')
const router = express.Router();

router.post('/',controller.add),
router.get('/',controller.getList)
router.get('/:id',controller.getById)
router.put('/:id',controller.update)
router.delete('/:id',controller.remove)
module.exports = router;