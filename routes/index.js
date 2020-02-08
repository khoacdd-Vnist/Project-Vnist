var express = require('express');
var router = express.Router();
const mongoClient =require('mongodb').MongoClient;
const assert = require('assert');
var convertToObjectId =require('mongodb').ObjectID;
const url = 'mongodb://localhost:27017';
const dbName = 'patient';

 


  /* GET home page. */
 router.get('/', function(req, res, next) {
  res.render('index', { title: 'Them du lieu' });
   
    
 });


 
 router.get('/add', function(req, res, next) {
   res.render('add', { title: 'Them du lieu' });
 });

  /* Post home page. */
  router.post('/add', function(req, res, next) {
   var data ={
     "ten": req.body.ten,
     "virus" : req.body.virus,
     "condition" : req.body.condition
   }
 const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('virus');
  // Insert some documents
  collection.insert(data, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted data into the collection");
    callback(result);
  
  });
}
res.redirect('/');
  

//connect to database
 // Use connect method to connect to the server
mongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  insertDocuments(db, function() {
    client.close();
  });
});
});


 /* GET View page. */
 router.get('/view', function(req, res, next) {
  
  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('virus');
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      callback(docs);
    });
  }

  mongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
  
    const db = client.db(dbName);
  
      findDocuments(db, function(dulieu) {
       
         res.send(dulieu);
        client.close();
    });
  });

});

//Xoa du lieu

  router.get('/delete/:id', function(req, res, next) {
    var id =convertToObjectId(req.params.id);
  //cau lenh xoa
  const removeDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('virus');
    // Delete document where a is 3
    collection.deleteOne({ _id : id }, function(err, result) {
      assert.equal(err, null);

      console.log("Removed the document with the field a equal to 3");
      callback(result);
    });
  }
  mongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
  
  
    const db = client.db(dbName);
  
    
        removeDocument(db, function() {
          client.close();
        });
  });

    console.log(id);
    res.redirect('/view');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    //res.render('index', { title: 'World Health Organization ^^' });
  });
// module.exports = router;
module.exports = router;
