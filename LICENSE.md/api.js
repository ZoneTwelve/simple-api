var request = require('request');

var index = (msg) => {
    var res = new Object()
    res.status = 200;
    res.contentType = { 'content-type': 'text/plain' };
    res.data = 'hello world!';
    return res;
}

var user = () => {
    var res = new Object()
    res.status = 200;
    res.contentType = { 'content-type': 'text/plain' };
    res.data = { name: "tester", id: "tester01" };
    return res;
}

var result = () => {
    var res = new Object()
    res.status = 200;
    res.contentType = { 'content-type': 'text/plain' };
    res.data = 100;
    return res;
}

exports.index = index;
exports.user = user;
exports.result = result;