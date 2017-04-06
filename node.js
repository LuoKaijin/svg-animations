/**
 * Created by zourong on 3/30/17.
 */

var fs = require('fs');
var path = require('path');

/*
 * 遍历文件夹，获取所有文件夹里面的文件信息
 * @param path 文件路径
 */

function geFileList(path) {
    var filesList = [];
    readFile(path,filesList);
    return filesList;
}


/*
 * 遍历读取文件
 * @param path 文件路径
 * @param filesList 文件列表
 */
function readFile(path,filesList) {
    files = fs.readdirSync(path);//需要用到同步读取
    files.forEach(walk);

    function walk(file){
        var filePath = path+'/'+file;
        states = fs.statSync(filePath);

        if(states.isDirectory()){
            readFile(filePath,filesList);
        }else{
            var fileContent = fs.readFileSync(filePath, "utf8"),
                titleStartIndex = fileContent.indexOf('<title>') + 7,
                titleEndIndex = fileContent.indexOf('</title>'),
                fileTitle = fileContent.substring(titleStartIndex,titleEndIndex),
                pathStartIndex = filePath.indexOf('/src') + 4;
            if(filePath.indexOf('.html') > -1){
                //创建一个对象保存信息
                var obj = new Object();
                obj.name = file; //文件名
                obj.title = fileTitle||'无标题';
                obj.path = filePath.substr(pathStartIndex);  //文件绝对路径
                if(filePath.indexOf('/step1') > -1){
                    obj.type = 1;
                }else if(filePath.indexOf('/step2') > -1){
                    obj.type = 2;
                }else{
                    obj.type = 3;
                }
                filesList.push(obj);
            }
        }
    }
}


/*
 * 写入文件 utf-8格式
 * @param fileName 文件名
 * @param data 内容
 */
function writeFile(fileName,data) {
    fs.writeFile(fileName,data,'utf-8',complete);
    function complete(){
        console.log("数据文件生成成功");
    }
}


var filesList = geFileList(path.resolve(__dirname, 'src/pages'));
var dataStr = JSON.stringify({
    data:filesList.reverse()
});
dataStr = 'module.exports = ' + dataStr;
//当build目录没有时新建build目录
fs.stat(path.resolve(__dirname, 'build'), function(err, stat) {
    var isExist;
    if(err == null) {
        if(stat.isDirectory()) {
            isExist = true;
        }
    }
    if(!isExist) fs.mkdirSync("build");
    writeFile("build/data.js",dataStr);
});