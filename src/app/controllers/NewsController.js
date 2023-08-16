class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }
    // Xử lí những controller liên quan tới news
    // Viết method đại diện cho funtion handorler là index

    // GET /news/:slug
    show(req, res) {
        res.send('NEW DETAIL');
    }
}
module.exports = new NewsController(); //New để khởi tạo NewsController
// (Tạo ra 1 đối tượng và xuất ra ngoài )
// Khi xuất ra thì phải require vào
