const Course = require('../models/Courses');
const { mongooseTObject } = require('../../until/mongoose');
class CourseController {
    // [GET] /courses/html/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', { course: mongooseTObject(course) });
            })
            .catch(next);
    }
    //[GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }
    //[POST] /courses/store 
    store(req, res, next) {
        req.body.image = `https://i.ytimg.com/vi/AX9k9bjCBD0/hqdefault.jpg?sqp=${req.body.videoId}=&rs=AOn4CLChLNkdqH8IkMjzUmjDy7-OFAF7pQ`;
        const course = new Course(req.body);
        course
            .save()
            .then(() => res.redirect(`/me/stored/courses`)) //thêm mới và load lại trang home
            .catch((err) => {
                alert('không thành công');
            });
    }
    // [GET] /course/:id/edit 
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) =>
                res.render('courses/edit', {
                    course: mongooseTObject(course),
                }),
            )
            .catch(next);
    }
    //[PUT]/course/:id/
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
    //[DELETE]/course/:id/
    destroy(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    //[PATCH]/course/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    //[DELETE]/course/:id/force
    forceDestroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    };
}
module.exports = new CourseController(); //New để khởi tạo NewsController
// (Tạo ra 1 đối tượng và xuất ra ngoài )
// Khi xuất ra thì phải require vào
