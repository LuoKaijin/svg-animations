/**
 * Created by zourong on 3/30/17.
 */
'use strict';

var Nunjucks = require('nunjucks');

function init(){
    Nunjucks.configure({
        autoescape: true
    });
    var string = Nunjucks.renderString('Hello {{ username }}', { username: 'James' });
    document.getElementById('page').innerHTML = string;
}

init();