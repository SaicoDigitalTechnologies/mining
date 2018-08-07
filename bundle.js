(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//Initialize GPU instance
var gpu = new GPU();
var num_threads = 500000;
var test_sha256 = gpu.createKernel(function(blockhash, initNonce) {
  var n =  (Math.round(Math.exp(31 * Math.log(2)))-1);
  var hash = (((blockhash * (this.thread.x*initNonce+1 ) )%n)+n)%n;
  return (hash);
}).setOutput([num_threads]);

var hashes = [];
var N_i = 5000;
var startGPU = window.performance.now();
var endGPU = window.performance.now();
var i = 0;
while(true) {
  var hashrate = (num_threads/(endGPU - startGPU))/1000;
  console.log("Hashrate: " + hashrate.toFixed(2) +" GH/s Min hash value for round: " + i + " is: " + min_elem);
  var startGPU = window.performance.now();
  var arr = test_sha256(12345, Math.round(Math.random()*N_i));
  var min_elem = Math.min.apply(null, arr);
  hashes.push(Math.min.apply(null, arr));
  var endGPU = window.performance.now();
  i++;
}

},{}]},{},[1]);
