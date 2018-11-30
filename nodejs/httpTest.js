//nodejs服务器的简单创建以及例子如下
//参数req是代表客户端请求对象
//参数res是代表服务器端相应对象
var http = require("http");
http.createServer(function(req, res) {
	res.writeHead(200,{'content-Type':'text/html'});
	res.write("welcome to use flyku!");
	res.end();
}).listen('8888',"127.0.0.1");
console.log("server running at http://127.0.0.1:8888/");