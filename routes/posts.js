var express = require('express');
var router = express.Router();

/* posts 게시판 페이지 */
router.get('/', function(req, res) {
    res.render('index', { title: '게시판', pageName:'posts/list.ejs' });
});

/* posts 게시판 페이지 */
router.get('/insert', function(req, res) {
    res.render('index', { title: '글쓰기', pageName:'posts/insert.ejs' });
});

/* posts 게시판 페이지 */
router.get('/read', function(req, res, next) {
    const id=req.query.id;
    res.render('index', { title: '게시글정보', pageName:'posts/read.ejs', id });
});

/* posts 게시판 페이지 */
router.get('/update', function(req, res, next) {
    const id=req.query.id;
    res.render('index', { title: '게시글수정', pageName:'posts/update.ejs', id });
});

module.exports = router;