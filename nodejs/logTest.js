//node logTest.js 1 > flyku.log
console.log('flyku is very useing!');
//node logTest.js 2 > flyku.log
console.error('flyku is error!');

//运行文件打印日志  1代表重定向标准输出流
//运行文件打印日志  2代表重定向标准错误输出流



//转化成字符串输出
console.log('%s', "flyku1", "flyku2");
//转化成数字输出
console.log('%d', "1", "2");
//输出%号
console.log('%%', "1", "2");


console.dir() //查看对象信息



console.time("start");
for (var i = 1000000; i >= 0; i--) {;
}
console.timeEnd("start");


console.trace() //对表达式进行评估，返回true和false


console.log(require.cache) //代表缓存了所有已被加载的木块文件


console.log("filename", __filename)
console.log("diename", __dirname)


console.log(module.children)