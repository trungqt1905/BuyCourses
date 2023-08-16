const Course = require('../models/Courses'); //Kết nối vào cơ sở dữ liẹu
const {
    mongooseTObject,
    mutipleMongooseToObject,
} = require('../../until/mongoose');
class meController {
    // Get /me/stored/Courses
    storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) =>
                res.render('me/stored-courses', {
                    deletedCount,
                    courses: mutipleMongooseToObject(courses),
                }))
            .catch(next)
    }

    //Promise

    // Get /me/trash/courses
    trashCourses(req, res, next) {
        Course.findWithDeleted({ deleted: true })
            .then((courses) => {
                res.render("me/trash-courses",
                    { courses: mutipleMongooseToObject(courses), });
            })
            .catch(next);
    }
}
module.exports = new meController(); //New để khởi tạo NewsController
// (Tạo ra 1 đối tượng và xuất ra ngoài )
// Khi xuất ra thì phải require vào
