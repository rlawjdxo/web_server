var express = require('express');
var router = express.Router();

/* 도서검색 page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '도서검색' , pageName:'books/search.ejs'});
});

// 장바구니 page이동
router.get('/cart', function(req, res) {
  res.render('index', {title:'장바구니', pageName:'books/cart.ejs'});
});

module.exports = router;
