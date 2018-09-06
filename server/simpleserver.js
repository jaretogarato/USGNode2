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


db.defaults({ purchaseRequests: [], functionCalls:  [], leads: []}).write()

app.post('/api/purchase', (req, res)=>{


    let key = web3.utils.randomHex(makeid);

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


const appOwner = "0x602c788eb3eabbf43e3f129172e79f5142d12c87";

let web3 = new Web3();

app.post('/api/login', (req, res) => {



   // console.log(web3.eth)
    let recover = web3.eth.accounts.recover(req.body.timestamp,req.body.signature);
    log("sender: ");
    log(recover);

    if(recover.toUpperCase() === appOwner.toUpperCase() && new Date(req.body.timestamp) > Date.now() - (1000 * 60 * 5) ){
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
    log("purchaseList")
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
    log("leadList")

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

