const express = require('express');
const checkAuth = require('../middleware/checkAuth');
const controller = require('../controllers/photoController')
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, path.join(__dirname,".",'../../assets/uploads/cars/'));
    },
    filename: function(req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname);
    }
  });
  
  const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
  });

router.post('/',upload.single('path'),controller.add),
router.get('/',controller.getList)
router.get('/:id',controller.getById)
router.put('/:id',controller.update)
router.delete('/:id',controller.remove)
module.exports = router;