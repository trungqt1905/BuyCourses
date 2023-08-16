// Quản lí những routes liên quan tới news
const express = require('express');
const router = express.Router();

//Cấu hình news
const courseController = require('../app/controllers/CourseController');
// newController.index //Truy xuất
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit); // SỬa
router.put('/:id', courseController.update);   //Sửa
router.patch('/:id/restore', courseController.restore);//Khôi phục
router.delete('/:id', courseController.destroy); //Xóa
router.delete('/:id/force', courseController.forceDestroy); //Xóa

router.get('/:slug', courseController.show);
// đảo tuyến đường chính xuống dưới để trình duyệt lướt qua và xuất đúng
module.exports = router;
