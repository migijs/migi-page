require('es5-shim');
require('es6-shim');
require('migi');

var MigiPage = require('../src/MigiPage.jsx');

migi.render(<MigiPage total="10"/>, '#test');