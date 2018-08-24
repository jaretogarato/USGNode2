var cookieSession = require('cookie-session')
var express = require('express');

var cors = require('cors')

var app = express();

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
app.use(cors())



app.use(cookieSession({
    name: 'session',
    keys: ["thisisatest"],

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


    let key = 4;


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

app.post('/api/login', () => {
   //form should be
    //{ timestamp: , signature: }
    //if timestamp is within 1 min, AND the recovered addr is admin
    //add login to session
    //refresh page
});



app.get('/api/tableTest', (req, res)=>{
    if(req.session.isAdmin == true) {
        //querystring.parse()
        console.log(req.query)
    }
    else {
        req.session.isAdmin = true;
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
    let q ={
        draw: req.query.draw,
        recordsTotal:999,
        recordsFiltered:500,
        data:[
        {
            name : "xxx1",
            nickname: "x"
        },
        {
            name : "xxx2",
            nickname: "y"
        },{
        name : "xxx3",
        nickname: "z"
    }
    ]};


    res.send(q)
});


app.get('/api/leadList', (req,res) => {
   console.log(req);
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

