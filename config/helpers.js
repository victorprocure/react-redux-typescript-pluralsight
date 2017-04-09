var path = require('path');
var _root = path.resolve(__dirname, '..');

function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    var p = path.join.apply(path, [_root].concat(args));
    console.log('PATH: ', p);
    return p;
}

exports.root = root;