const meRouter = require('./me');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
function route(app) {
    app.use('/me', meRouter); //me -> stored-courses 
    app.use('/courses', coursesRouter);
    /* 
        courses -> create(tạo khóa học) -> edit(Sửa,Xóa) -> show(Show ra chi tiết khóa học) 
    */
    app.use('/', siteRouter); //
}
module.exports = route;
