const usgAddr = "0x187d34bf93d6be78cb2f9f0bec269a01be70a9ca";
const usgOwner = "0x602c788Eb3eaBbf43e3f129172e79f5142D12C87";

let jsonRPC = "https://ropsten.infura.io/";
//let jsonRPC = "https://mainnet.infura.io/";

let web3;

function checkForAccount() {
  setTimeout(async () => {
    window.acct = (await window.web3js.eth.getAccounts())[0];
    if (window.acct === undefined) {
      checkForAccount();
    } else {
      location.reload();
    }
  }, 1000)
}
/*
function checkForWeb3() {
  setTimeout(async () => {
    window.acct = (await window.web3js.eth.getAccounts())[0];
    if (web3 === undefined) {
      checkForWeb3();
    } else {
      location.reload();
    }
  }, 1000)
}
*/
function closeNote(){
    let note = document.getElementById("walletNote");
    note. parentNode. removeChild(note);
}

window.addEventListener('load', async function() {


  window.web3js  = new Web3(jsonRPC);


  if(localStorage.getItem('hasAccount')) {
    if(localStorage.getItem('hasPW')) {
        window.wallet = window.web3js.eth.accounts.wallet.load(localStorage.getItem('pw'));
    }
    else {
        let fragment = create("<h2 id='walletNote'  style='background-color: rgb(251,217,49);position: fixed; padding:15px;margin:0;bottom: 0;left:0;right:0;z-index: 99999;'>Please unlock your wallet to see your balance and enable features" +
            "<button style='float:right;' onclick='closeNote()'>x</button>"+
            "</h2>");
        document.body.insertBefore(fragment, document.body.childNodes[0]);
    }

  }
  else {
      let fragment = create("<h2 id='walletNote' style='background-color: rgb(251,217,49);position: fixed; padding:15px;margin:0;bottom: 0;left:0;right:0;z-index: 99999;'>Please create a wallet by clicking on the <a href='/wallet'>wallet tab</a>, then clicking 'Create' or 'Restore' and following the instructions"
          + "<button  style='float:right;'  onclick='closeNote()'>x</button>"
          + "</h2>");
      document.body.insertBefore(fragment, document.body.childNodes[0]);
  }




  //console.log(await web3.eth.getBalance("0x222316e1ade8c200c14dec921bc48f07713c0d94"));

  if(window.wallet === null || window.wallet === undefined) {

      //checkForWeb3();
  }
  else {
      window.acct = window.wallet[0].address;
      console.log(window.wallet)
  }
    window.usg = new window.web3js.eth.Contract(usgAbi, usgAddr, {
        from: window.acct,
        gas: 1000000,
        gasPrice: 9000000000
    });
    window.bal = await window.usg.methods.balanceOf(acct).call();

    let eve = new Event('web3Complete');
    window.dispatchEvent(eve);
  return;



















  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    window.web3js = new Web3(web3.currentProvider);

    window.acct = (await window.web3js.eth.getAccounts())[0];
    if (window.acct === undefined) {
      window.needsAccount = true;

      let fragment = create("<h2 style='background-color: orangered;position: fixed; padding:15px;margin:0;bottom: 0;left:0;right:0;z-index: 99999;'>Please unlock metamask by clicking the 🦊 fox icon in the upper-right of your screen then either register or login then refresh this page</h2>");
      document.body.insertBefore(fragment, document.body.childNodes[0]);
      checkForAccount();
    }



  } else {
    console.log('No web3? You should consider trying MetaMask!')
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    // web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

    window.needsMetamask = true;

    let fragment = create("<h2 style='background-color: orangered;position: fixed; padding:15px;margin:0;bottom: 0;left:0;right:0;z-index: 99999;'>Using the Chrome, Firefox, or Opera browser, please install the <a  target='_blank' href='https://metamask.io/'>MetaMask extension</a> then refresh this page</h2>");
    document.body.insertBefore(fragment, document.body.childNodes[0]);

    checkForWeb3();
  }

  // Now you can start your app & access web3 freely:
  // startApp()


});

function create(htmlStr) {
  var frag = document.createDocumentFragment(),
    temp = document.createElement('div');
  temp.innerHTML = htmlStr;
  while (temp.firstChild) {
    frag.appendChild(temp.firstChild);
  }
  return frag;
}

window.formStore = {};

async function runFunction(formName, stateMutability, callback, reporting) {
  //callback(formJson, formHash, txReceipt, err)
  //console.log("function: " + name);
  //web3js.eth.getAccounts().then(console.log);

  let fd = new FormData(document.forms[name]);
  let contractParams = [];

  let formJson = CreateFormJson(fd);
  let formHash = CreateFormHash(formJson);

  if (reporting) {
    //TODO: send formJSON and form hash to server
    let d = {};

    d.formJson = formJson;
    d.formHash = formHash;

    post("/recordFunctionCall", d);
  }

  for (var pair of fd.entries()) {
    // console.log(pair[0])
    if (pair[0].indexOf('INPUTPARAM') > -1) {
      //console.log(pair[0]+ ', '+ pair[1]);

      switch (document.getElementById(pair[0]).getAttribute("dataType")) {
        case "bytes32":
          contractParams.push(pair[1]);
          break;
        default:
          contractParams.push(pair[1]);
          break;
      }
    }
  }

  //console.log(usg.methods[name]);
  //console.log(web3js.eth.methods);
  if (stateMutability === "view") {

    //console.log(contractParams);
    let out = document.getElementById(name + "OUTPUTPARAMETER0");
    out.value = await usg.methods[name](...contractParams).call();
    out.onchange();
  } else {
    let out = document.getElementById(name + "OUTPUTPARAMETER0");

    let formName = name;

    usg.methods[name](...contractParams).send().then((tx) => {
      showReceipt();
      callback(formJson, formHash, tx, null);

      //out.value = d;
      //out.onchange();
    }).catch((err) => {
      console.log(err);
      callback(null, null, null, err);
      showError();
    });
    showWait();
  }
}

function CreateFormJson(formData) {
  let formParams = {};

  for (var pair of formData.entries()) {
    if (pair[0].indexOf('OUTPUTPARAMETER') > -1 || document.getElementById(pair[0]).getAttribute("ignoreHash") != null) {
      continue;
    }
    formParams[pair[0]] = pair[1];
  }
  return JSON.stringify(formParams);
}

function CreateFormHash(formJson) {
  let formHash = web3js.utils.sha3(formJson);
  return formHash;
}

async function getTransactions() {
  let acct = (await web3js.eth.getAccounts())[0];
  let from = (await usg.getPastEvents("Transfer", {
    fromBlock: 0,
    toBlock: "latest",
    filter: {
      _from: acct
    }
  }));

  let to = await usg.getPastEvents("Transfer", {
    fromBlock: 0,
    toBlock: "latest",

    filter: {
      _to: acct
    }
  });

  console.log(from);
  console.log(to);
}
