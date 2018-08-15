import React, { Component } from 'react';
import { Header, Container, Grid, Card, Image, Segment } from 'semantic-ui-react';


const baseUrl = "https://widgets.cryptocompare.com/";
var scripts = document.getElementsByTagName("script");
var embedder = scripts[ scripts.length - 1 ];
(function (){
var appName = encodeURIComponent(window.location.hostname);
if(appName==""){appName="local";}
var s = document.createElement("script");
s.type = "text/javascript";
s.async = true;
var theUrl = baseUrl+'serve/v2/coin/chart?fsym=ETH&tsym=USD&period=1Y';
s.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
embedder.parentNode.appendChild(s);
})();

class EthereumChart extends Component {
  render() {
    return (
      <Container fluid id={0}>
        yo
      </Container>
    )
  }
}

export default EthereumChart;
