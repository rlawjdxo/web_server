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


module.exports = router;