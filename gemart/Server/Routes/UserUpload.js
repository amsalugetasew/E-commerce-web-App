const { upload } = require('@testing-library/user-event/dist/upload');
const express =require('express');
const { uploadImage } = require('../Controller/UploadController')
const router = express.Router();

// localhost:5000/user/uploads
router.route("/uploads").post(uploadImage, upload); 
// router.post('/uploads',uploadImage, upload);
module.exports =router;