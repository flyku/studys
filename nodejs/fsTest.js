var fs = require('fs');
/*fs.readFile('./about.txt', function(err, data) {
	if (err) {
		console.log("读取文件错误！")
	} else {
		console.log(data.toString());
	}
});

fs.readFile('./about.txt', "utf8",function(err, data) {
	if (err) {
		console.log("读取文件错误！")
	} else {
		console.log(data.toString());
	}
});


fs.readFileSync('./about.txt', function(err, data) {
	if (err) {
		console.log("读取文件错误！")
	} else {
		console.log(data.toString());
	}
});

fs.readFileSync('./about.txt', "utf8",function(err, data) {
	if (err) {
		console.log("读取文件错误！")
	} else {
		console.log(data.toString());
	}
});
*/

/*fs.mkdir("./test", "0777", function(err) {//0777指定权限，默认0777
	if (err) {
		console.log("创建目录失败！")
	} else {
		console.log("创建目录成功！");
	}
})
fs.readdir("../nodejs", function(err, files) {
	if (err) {
		console.log("读取目录失败！")
	} else {
		console.log("读取目录成功！", files);
	}
})*/


/*fs.stat("../nodejs", function(err, stats) {
	if (err) {
		console.log("查看目录失败！")
	} else {
		console.log("查看目录成功！", stats);
	}
})

fs.lstat("../nodejs", function(err, stats) {
	if (err) {
		console.log("查看目录失败！")
	} else {
		console.log("查看目录成功！", stats);
	}
})*/

/*fs.exists("../nodejs", function(exists) {
	console.log("查看目录或者文件是否存在！", exists);
})


fs.realpath("../nodejs", function(err, realpath) {
	if (err) {
		console.log("查看目录或者文件的绝对路径失败！")
	} else {
		console.log("查看目录或者文件的绝对路径！", realpath);
	}
})*/

fs.chmod("../nodejs", "0777",function(err) {
	if (err) {
		console.log("修改目录或者文件的权限失败！")
	} else {
		console.log("修改目录或者文件的权限成功！");
	}
})