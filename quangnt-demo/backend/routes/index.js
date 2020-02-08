var express = require('express');
var router = express.Router();

var myCol = require('../model/mycollection');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home page' });
});


/* GET home page. */
router.get('/xem', function(req, res, next) {  

  myCol.find(function(err, dulieu){
    if(err) return console.log(err);
    console.log(dulieu);
    res.send(dulieu);
    // res.render('xem', {title : 'xem dữ liệu', data: dulieu})
  });


});

/* GET xoa dlieu. */
router.get('/xoa.:idxoa', function(req, res) {
  var id = req.params.idxoa;
  myCol.findByIdAndRemove(id).exec();
  
  // res.send('da xoa thanh cong id: ' + id);
  res.redirect('/xem')
});


/* GET sua dlieu. */
router.get('/sua.:idsua', function(req, res, next) {
  var id = req.params.idsua;
  
  myCol.find({_id : id}, function(err, dulieu){
    res.send(dulieu);
    // res.render('sua', {title: 'Sua du lieu', data: dulieu});
  })
});

/* POST sua dlieu. */
router.post('/sua.:idsua', function(req, res, next) {
  var id = req.params.idsua;
  // var dataSua = {
  //   "ten" : req.body.ten,
  //   "tuoi" : req.body.tuoi
  // }
  //dựa vào id, tên , tuoi từ view để nhập vào dữ liệu luôn
  myCol.findById(id, function(err, dulieu){
    if(err) return handleError(err);
    
    dulieu.ten = req.body.ten;
    dulieu.tuoi = req.body.tuoi;
    dulieu.save();

    res.send('da sua thanh cong, dulieu moi: ' + dulieu);
    // res.redirect('/xem');
  });
});

/* GET them dlieu. */
router.get('/them', function(req, res, next) {
  res.render('them', {title: 'Them du lieu'});
});

/* POST them dlieu. */
router.post('/them', function(req, res, next) {
  var newItem = {
    'ten' : req.body.ten,
    'tuoi' : req.body.tuoi
  }
  console.log(newItem);
  
  var dulieu = new myCol(newItem);
  dulieu.save();

  res.send('da add thanh cong' + dulieu);//dulieu nay duoc lay tu frontend dulieu = response trả về trong hàm then() của handleClick
  // res.redirect('/xem');
});

module.exports = router;
