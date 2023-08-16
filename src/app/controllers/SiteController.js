const Course = require('../models/Courses');
const { mutipleMongooseToObject } = require('../../until/mongoose');
class SiteController {
    // [GET] /news
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                // courses = courses.map((course) => course.toObject());
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    } 

    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController(); //New để khởi tạo NewsController
// (Tạo ra 1 đối tượng và xuất ra ngoài )
// Khi xuất ra thì phải require vào
