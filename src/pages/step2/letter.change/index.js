/**
 * Created by zourong on 6/4/17.
 */

var html = require("./readme.md"),
    nodes = document.getElementsByClassName('ztag'),
    svgWrap = nodes[0],
    letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    musicFlag = true;
    container = document.getElementById("mdcontent");

//字母切换
nodes[1].addEventListener('click', function(){
    var index = Math.floor(Math.random()*letters.length);
    svgWrap.innerHTML =
        '<svg version="1.2" xml:space="default">' +
            '<symbol id="letter">' +
                '<text x="38%" y="50%">' + letters[index] + '</text>' +
            '</symbol>' +
            '<g>'+
                '<use xlink:href="#letter" class="txt"></use>' +
            '</g>'+
        '</svg>';
});

//数字切换
nodes[2].addEventListener('click', function(){
    svgWrap.innerHTML =
        '<svg version="1.2" xml:space="default">' +
            '<path class="path" fill="none" stroke="#FFEB3B" stroke-width="2px" d="M0,0 L50,0 L50,50 L50,100 L0,100 L0,25 L0,0"></path>'+
        '</svg>';
});

//播放虫儿飞.mp3
nodes[3].addEventListener('click', function(){
    var bgMusic = nodes[4];
    if(musicFlag){
        bgMusic.play();
    }else{
        bgMusic.pause();
    }
    musicFlag = !musicFlag;
});

//将md内容写入页面
container.innerHTML = html;
