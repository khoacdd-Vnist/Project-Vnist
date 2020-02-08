const mongoose = require('mongoose');

const mySchema = new mongoose.Schema(
    {ten: String, tuoi: Number},
    // {collection: 'mycollect'}//set name for collecttion 
                                //or add param collection as the below method
);
// mongoose.model('modelName',mySchema,'CollectionName')
module.exports = mongoose.model('myModel', mySchema, 'mycollect'); 






//if( dont have param of collection) --> set name as default
// DEFAULT: name collection = 'name' + 's' => eg: define : "hihi" -> collection's name: "hihis"

//Mongoose by default produces a collection name by passing the model name 
//to the utils.toCollectionName method. This method pluralizes the name.

//FIX:  You can fix it by setting below option in your scheme:

// var userSchema = new Schema({..}, { collection: 'user' });

//sau khi fix thì name khai báo trong hàm mongoose.model() là gì cũng đc