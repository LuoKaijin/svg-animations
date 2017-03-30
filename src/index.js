/**
 * Created by zourong on 3/30/17.
 */
'use strict';

var Nunjucks = require('nunjucks'),
    Data = require('./data.js');


function init(){
    var body = document.getElementById('page');

    Nunjucks.configure({
        autoescape: true
    });
    body.innerHTML = Nunjucks.render('template.html',Data);
}

init();