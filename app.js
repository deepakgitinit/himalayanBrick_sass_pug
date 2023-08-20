const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const nodemailer = require("nodemailer");

const port = 3000;

// =========================================================//
// MongoDB Initialization
// =========================================================//

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/himalayanbricks');
  console.log("connected...");
}

const proPrices = new mongoose.Schema({
    name: String,
    price: Number
});

const price = mongoose.model('price', proPrices);

const updateFn = async (na, pri) =>{
    await price.updateOne({name: na}, {$set: {price: pri}});
}

const proOrder = new mongoose.Schema({
    name: String,
    phoneno: String,
    material: String,
    quantity: String,
    address: String,
    date: String
});

const order = mongoose.model('order', proOrder);

const addOrderFn = async(obj) =>{
    const proOrder = new order(obj);
    await proOrder.save();
}


// =========================================================//
// Views Setups
// =========================================================//

app.use(express.static('/public'));
app.use('/public', express.static('public'));
app.use('/dist', express.static('dist'));

app.set('views', './views');
app.set('view engine', 'pug');


// =========================================================//
// Nodemailer
// =========================================================//

async function nodeMain(obj) {
    let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'deepakhomemail@gmail.com',
        pass: 'jygyolbzlsdlenos',
    },
    });

    await transporter.sendMail({
        from: `${obj.email}`,
        to: `deepakhomemail@gmail.com`,
        subject: `A new Message from ${obj.name} Recieved`,
        text: `Message:[${obj.message}] received from ${obj.email}! ${obj.phno}`
    });
};

// Inquiry Function

async function nodeInquiry(obj) {
    let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'deepakhomemail@gmail.com',
        pass: 'jygyolbzlsdlenos',
    },
    });

    await transporter.sendMail({
        from: `${obj.email}`,
        to: `deepakhomemail@gmail.com`,
        subject: `A new Order from ${obj.name} Recieved`,
        text: `Customer Name: ${obj.name},\nPhone Number:${obj.phoneno},\nMaterial: ${obj.material},\nQuantity ${obj.quantity}`
    });
};


// =========================================================//
// Requests & Responses
// =========================================================//


app.get('/', (req,res)=>{

    const runHome = async () =>{
        price.find({}).exec().then(data =>{
            dataPrice = {
                'brickPrice': data[0].price,
                'cementPrice': data[1].price,
                'steelPrice': data[2].price
            }
            res.render('home', dataPrice);
        });
    }

    runHome();
});


app.get('/contact', (req,res)=>{
    res.render('contact');
});

app.post('/contact', urlencodedParser, (req, res)=>{
    const obj = JSON.parse(JSON.stringify(req.body));
    // console.log(obj);
    nodeMain(obj).catch(console.error);
    res.render('contact-res');
});


app.get('/inquiry', (req,res)=>{
    res.render('inquiry');
});

app.post('/inquiry', urlencodedParser, (req,res)=>{
    const obj = JSON.parse(JSON.stringify(req.body));
    console.log(obj);
    nodeInquiry(obj).catch(console.error);
    addOrderFn(obj);
    res.render('inquiry-res');
});



app.get('/blog', (req,res)=>{
    res.render('blog');
});

app.get('/blog/cement-production-in-india', (req,res)=>{
    res.render('blog/cement-production-in-india');
});

app.get('/blog/bricks-production-and-types', (req,res)=>{
    res.render('blog/bricks-production-and-types');
});

app.get('/blog/steel-production-and-market', (req,res)=>{
    res.render('blog/steel-production-and-market');
});


// =========================================================//
// Admin Req & Res
// =========================================================//

app.get('/admin', (req,res)=>{
    
    const runAdmin = async () =>{
        price.find({}).exec().then(data =>{

            dataPrice = {
                'brickPrice': data[0].price,
                'cementPrice': data[1].price,
                'steelPrice': data[2].price
            }

            res.render('admin', dataPrice);
        });
    }

    runAdmin();

});

app.post('/admin', urlencodedParser, (req,res)=>{

    const reqBody = req.body;
    const idf = reqBody.name;
    const pr = reqBody.price;
    const num = Number.parseInt(pr);
    updateFn(idf, num);

    res.send('updated sucessfully...');

});


// 404 Page

app.get('*', (req, res)=>{
    res.render('404');
});

// =========================================================//
// Server Initialization
// =========================================================//

app.listen(port, ()=>{
    console.log(`App is listening on port ${port}...`);
});