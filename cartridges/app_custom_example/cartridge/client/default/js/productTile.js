'use strict';

var processInclude = require('base/util');

$(document).ready(function () {
    console.log('Hola');
    processInclude(require('base/product/quickView'));
})