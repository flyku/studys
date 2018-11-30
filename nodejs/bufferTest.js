var buffer = new Buffer("flyku");
var buffer1 = new Buffer("flyku1");
console.log(buffer)
console.log(buffer.toString("utf8",3,6));
console.log(Buffer.concat([buffer,buffer1]).toString());

//Buffer的方法
Buffer.isBuffer(obj);					//判断是否为buffer对象
Buffer.byteLength(string,[encoding]);	//计算指定字符串的字节数,第一个参数是字符串，第二个参数是编码格式
Buffer.concat([buffer1,buffer2...]);	//链接多个buffer对象
Buffer.isEncoding(obj);					//检查一个字符串是否为一个有效的编码格式字符串
