"use strict";
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
function getData(url, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, true);
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(JSON.parse(xhttp.responseText), null);
      } else {
        callback(null, "Algo salio mal intente mas tarde");
      }
    }
  };
  xhttp.send();
}
getData(url, (data, error) => {
  console.log(data.forms, error);
});