const { Router }=require('express');
const Data = require('../model/user');
const SellBook = require('../model/book_model');
const fs=require('fs');
const multer = require('multer');
var path = require('path');
 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});
 
var upload = multer({ storage: storage });

const routes =Router();

routes.get('/',(req,res)=>{
    SellBook.find({},function(err, books) {
        if(err) throw err;
        res.json(books);
})

routes.post('/user',(req,res)=>{
    let blogs_array=[];
    console.log(req.body)
    const {id, mailid,password}=req.body;   
    res.status(202).json({id:id});
})


routes.post('/sell',upload.single('image'),(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    const UserId = req.body.UserId;
    const BookName = req.body.BN;
    var obj={
       UserId:req.body.UserId,
       FirstName:req.body.FN,
       LastName:req.body.LN,
       BookName:req.body.BN,
       Textarea:req.body.TA,
       Price:req.body.PR,
       Select:req.body.SL,
       image:{
        data: fs.readFileSync('D:/mern/server/uploads/'+req.file.filename),
        contentType: 'image/png'
       }
    }

    SellBook.find({UserId,BookName},function(err,book){
        console.log(book)
        if(book.length==0){
            SellBook.create(obj,(err,item)=>{
                if(err){
                    console.log(err);
                    res.status(500).json({error:"Error"})
                }else{
                    res.status(202).json({status:"Done"});
                }
            })
        }else{
            res.status(200).json({book:"Alredy Book Uplaoded"});
        }
    })
   
})

routes.get('/cart',(req,res)=>{

})

routes.post('/cart',(req,res)=>{

})

routes.get('/images/:userid/:bookname', function (req, res) {
    const UserId=req.params.userid;
    const BookName=req.params.bookname;
    SellBook.findOne({UserId,BookName}, function (err, image) {
        // console.log(image);
    if (err) { 
        res.status(500) ;
    }
    // res.contentType('image/png');
    res.send(image.image.data); 
});    
});


module.exports =routes;
