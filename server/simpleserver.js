var express = require('express');

var cors = require('cors')

var app = express();

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
app.use(cors())
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

