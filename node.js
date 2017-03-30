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
        states = fs.statSync(path+'/'+file);
        if(states.isDirectory()){
            readFile(path+'/'+file,filesList);
        }else{
            //创建一个对象保存信息
            var obj = new Object();
            obj.name = file; //文件名
            obj.path = path+'/'+file;  //文件绝对路径
            filesList.push(obj);
        }
    }
}


/*
 * 写入文件 utf-8格式
 * @param fileName 文件名
 * @param data 文件内容
 */
function writeFile(fileName,data) {
    fs.writeFile(fileName,data,'utf-8',complete);
    function complete(){
        console.log("数据文件生成成功");
    }
}


var filesList = geFileList(path.resolve(__dirname, 'src/step1'));
var str='';
for(var i=0;i<filesList.length;i++) {
    var item = filesList[i];
    var desc ="文件名:"+item.name + "  "
        +"路径:"+item.path;
    str+=desc +"\n"
}


writeFile("test.txt",str);