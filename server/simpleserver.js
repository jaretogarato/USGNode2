var cookieSession = require('cookie-session')
var express = require('express');

var cors = require('cors')

var app = express();

const log = console.log;



app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
app.use(cors())



app.use(cookieSession({
    name: 'session',
    secret: "thisisatest",

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))



//app.use('/', express.static('public'));


const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)


db.defaults({ purchaseRequests: [], functionCalls:  [], leads: [], usgPrice: 0}).write()

app.post('/api/purchase', (req, res)=>{


    let key = makeid(15);

    req.body.complete = false;
    req.body.key = key;
    db.get('purchaseRequests')
        .push(req.body)
        .write();


    res.send({key:key})
});


app.post('/api/redeem', (req, res)=>{

    console.log("qq");
    req.body.complete = false;
    db.get('functionCalls')
        .push(req.body)
        .write();


    res.send("OK")
});

app.post('/api/leads', (req, res)=>{

    console.log("qq");
    req.body.complete = false;
    db.get('leads')
        .push(req.body)
        .write();


    res.send("OK")
});


const Web3 = require("web3");

function makeid(length) {
    var text = "";
    var possible = "BCDFGHJKLMPQRTVWX123456789";

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

const appOwner = {};

let dDev ="0x61c5A2b1CC16f728D19cc80Fa73ea81C14C7E720";
let dProd ="0xa7BbE6d680Dce1a0c15Ea74c8A69E8b4059C02B9";
let mProd = "0x5C07bF92E903c3cEbEcCabFf2A5138010a0545f3";
let lProd = "0x903ddD79a9579EcED571F88a424AA7B5156ec60C";
let ogProd = "0x602c788eb3eabbf43e3f129172e79f5142d12c87";
let jDev = "0x67cdc3D2D90aC5FEb6C55E0B1B36e72cC6b23Fc3";
let jProd = "0x2317B40d370d851d740aF95a4d1F1Fa55dBe3e11";

appOwner[dDev.toUpperCase()] = true;
appOwner[dProd.toUpperCase()] = true;
appOwner[mProd.toUpperCase()] = true;
appOwner[lProd.toUpperCase()] = true;
appOwner[ogProd.toUpperCase()] = true;

let web3 = new Web3();

/*

{ signature:
   { message: 'Fri Sep 14 2018 16:05:56 GMT-0600 (Mountain Daylight Time)',
     messageHash: '0x5b0ce4becefddf919640131dc72b3a8fe7667c75eec2d47cde13b8a6db519a2f',
     v: '0x1c',
     r: '0x40c76e0c91bd2156977525c3d88d086c9322dc62a391865ddee0d627d29222e4',
     s: '0x75505a4cd288014e825eeea325d3245b4a0425bab51e527f6ed99aeb7deee1cd',
     signature: '0x40c76e0c91bd2156977525c3d88d086c9322dc62a391865ddee0d627d29222e475505a4cd288014e825eeea325d3245b4a0425bab51e527f6ed99aeb7deee1cd1c' },

*/

app.post('/api/login', (req, res) => {

    console.log(req.body)

   // console.log(web3.eth)
    let recover = web3.eth.accounts.recover(req.body.signature.message,req.body.signature.signature);
    log("sender: ");
    log(recover);

    if( appOwner[recover.toUpperCase()] && new Date(req.body.signature.message) > Date.now() - (1000 * 60 * 5) ){
        //timestamp must be less than 5min old
        req.session.isAdmin = true;
        log("OK!");
    }
    else {
        log("nope");
    }

   // console.log(new Date(req.body.timestamp) )

    res.send("OK")
});



let usgPriceFile = './usgPrice.json'
app.post('/api/setusgprice', async (req, res)=>{
  //  console.log(req.body)


    let message = JSON.parse(req.body.message);

    if(req.session.isAdmin) {
            let price = message.price;
            console.log(message.price)
            //set price in usgPriceFile


            db.set('usgPrice',  Number(price)).write();

        }

    res.send("OK")
})


app.get('/api/usgprice', (req, res) => {


    //load price from usgPriceFile

    let price = Number(db.get('usgPrice'));
    console.log(price);
    res.send({ USG: price });
})

/*
app.get('/api/tableTest', (req, res)=>{

    let q = {
        draw:0,
        recordsTotal:0,
        data:[]
    };
    if(req.session.isAdmin) {
        //querystring.parse()
       // console.log(req.query)
        q = {
            draw: req.query.draw,
            recordsTotal:999,
            recordsFiltered:500,
            data:[
                {
                    name : "jyty",
                    nickname: "x"
                },
                {
                    name : "qcbmg",
                    nickname: "y"
                },{
                    name : "asd",
                    nickname: "z"
                }
            ]};
    }

    req.session.isAdmin = false;
    /*
    { draw: '1',
      columns:
       [ { data: 'name',
           name: '',
           searchable: 'true',
           orderable: 'true',
           search: [Object] },
         { data: 'nickname',
           name: '',
           searchable: 'true',
           orderable: 'true',
           search: [Object] } ],
      order: [ { column: '0', dir: 'asc' } ],
      start: '0',
      length: '10',
      search: { value: '', regex: 'false' },
      _: '1534953148233' }

     * /

    res.send(q)
});

*/

app.get('/api/purchaseList', (req,res)=> {

/*
    "ethereum_address": "0x602c788Eb3eaBbf43e3f129172e79f5142D12C87",
      "qty_to_purchase": "1",
      "email": "hollandcodeandgraphics@gmail.com",
      "complete": false,
      "key": "0xa7258e6f9e4f"
 */
    let q = {

    };

    if(req.session.isAdmin) {
        let purchaseRequests = db.get('purchaseRequests').value();
        //console.log(leads[0])
        q = {
            // draw:1,
            // recordsTotal:leads.length,
            data:purchaseRequests
        };
    }
    res.send(q);
})

app.get('/api/leadList', (req,res) => {


    /*
     title: "",
     first_name: "Daniel",
     last_name: "Holland",
     phone": "2084097056",
     email": "hollandcodeandgraphics@gmail.com",
     message": "",
     ethereum_address": "0x602c788Eb3eaBbf43e3f129172e79f5142D12C87",
     complete": false
     */


    let q = {

    };
    if(req.session.isAdmin) {
        //querystring.parse()
        // console.log(req.query)
        let leads = db.get('leads').value();
        //console.log(leads[0])
        q = {
           // draw:1,
           // recordsTotal:leads.length,
            data:leads
        };
    }

    /*
    { draw: '1',
      columns:
       [ { data: 'name',
           name: '',
           searchable: 'true',
           orderable: 'true',
           search: [Object] },
         { data: 'nickname',
           name: '',
           searchable: 'true',
           orderable: 'true',
           search: [Object] } ],
      order: [ { column: '0', dir: 'asc' } ],
      start: '0',
      length: '10',
      search: { value: '', regex: 'false' },
      _: '1534953148233' }

     */


res.send(q);
});


app.get('/api/redemptionList', (req,res) => {

/*
*
*
*   "functionCalls": [
    {
      "ethereum_address": "0x602c788Eb3eaBbf43e3f129172e79f5142D12C87",
      "qty_to_redeem": "1",
      "email": "hollandcodeandgraphics@gmail.com",
      "shipping_details": "2084097056",
      "complete": false
    }
*
*
* */


    let q = {

    };
    if(req.session.isAdmin) {
        //querystring.parse()
        // console.log(req.query)
        let functionCalls = db.get('functionCalls').value();
        //console.log(leads[0])
        q = {
            // draw:1,
            // recordsTotal:leads.length,
            data:functionCalls
        };
    }

    /*
    { draw: '1',
      columns:
       [ { data: 'name',
           name: '',
           searchable: 'true',
           orderable: 'true',
           search: [Object] },
         { data: 'nickname',
           name: '',
           searchable: 'true',
           orderable: 'true',
           search: [Object] } ],
      order: [ { column: '0', dir: 'asc' } ],
      start: '0',
      length: '10',
      search: { value: '', regex: 'false' },
      _: '1534953148233' }

     */


    res.send(q);
});


app.listen(3001);





/*


app.get('/sandbox', (req,res)=>{
    let r = db.get('requests')
        .filter({'complete': false})
        .value();





    let result = Object.keys(r).map(function(key) {
        return [r[key]];
    });

    res.send({

        data:result
    });
});

app.get('/getRequests', (req,res)=>{
    let z = db.get('requests')
        //.find({})
        .value();

    for(let reqIdx = 0; reqIdx < z.length; reqIdx++){
        console.log(z[reqIdx]);
    }

    res.send(z);
});

app.get('/getFunctionCalls', (req,res)=>{
    let z = db.get('functionCalls')
        //.find({})
        .value();
    for(let callIdx = 0; callIdx < z.length; callIdx++){
        console.log(z[callIdx]);

    }



    res.send(z);
});


app.post('/recordRequest', (req, res) => {
    console.log(req.body);

    req.body.complete = false;
    db.get('requests')
        .push(req.body)
        .write();


    res.send("OK")
});

app.post('/recordFunctionCall', (req, res)=>{
    console.log(req.body);
    req.body.complete = false;
    db.get('functionCalls')
        .push(req.body)
        .write();


    res.send("OK")
});

*/
