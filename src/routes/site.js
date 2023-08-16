// Quản lí những routes liên quan tới news
const express = require('express');
const router = express.Router();

//Cấu hình site
const siteController = require('../app/controllers/siteController');
// newController.index //Truy xuất
// router.get('/search', siteController.search);
router.get('/', siteController.index);
// đảo tuyến đường chính xuống dưới để trình duyệt lướt qua và xuất đúng
module.exports = router;
