// Quản lí những routes liên quan tới me
const express = require('express');
const router = express.Router();

//Cấu hình me
const meController = require('../app/controllers/MeController');
// newController.index //Truy xuất
//index.js duyệt qa me từ me sẽ đảo tuyến đường duyệt qa stored/courses
router.get('/stored/courses', meController.storedCourses);
router.get('/trash/courses', meController.trashCourses);


// đảo tuyến đường chính xuống dưới để trình duyệt lướt qua và xuất đúng
module.exports = router;
