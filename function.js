// 渲染模版underscore
renderUnderscore: function(utlId, nodeId, data) {
	var result = _.template(utlId, {
		variable: 'data'
	})(data);
	if (nodeId.indexOf(".") != -1) {
		if (typeof $ == "object") {
			$("#" + nodeId).html(result);
		} else {
			document.getElementsByClassName(nodeId)[0].innerHTML = result;
		};
	} else {
		if (typeof $ == "object") {
			$("#" + nodeId).html(result);
		} else {
			document.getElementById(nodeId).innerHTML = result;
		};
	}
}

var flyku = {
	getQueryString: function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return decodeURIComponent(r[2]);
		return null;
	},
	iphoneBlank: function() {
		if (window.navigator.appVersion.match(/iphone/gi)) {
			$('.hh-header').css('padding-top', '.58666rem')
		} else {
			$('body').css('padding-top', '1.12rem')
		}
	},
	gotop: function() {
			var clientHeight = $(window).height();
			$(window).on('scroll', function() {
				if ($(window).scrollTop() - clientHeight >= -100) {
					$('#gotop').addClass('gogo');
				} else {
					$('#gotop').removeClass('gogo');
				}
			})
			$('#gotop').on('click', function() {
				$(window).scrollTop(0)
			})

			$('.hh-header .left-group').on('click', function() {
				history.go(-1);
			})
		}，
		//防止滚动穿透事件
	stopTouchendPropagationAfterScroll: function() {
		var flag = false;
		window.addEventListener('touchmove', function(ev) {
			flag || (flag = true, window.addEventListener('touchend', stopTouchendPropagation, true));
		}, false);

		function stopTouchendPropagation(ev) {
			ev.stopPropagation();
			setTimeout(function() {
				window.removeEventListener('touchend', stopTouchendPropagation, true);
				flag = false;
			}, 50);
		}
	},
	/*如果是ios系统 添加样式*/
	iosORandroid: function() {
		var isIPhone = window.navigator.appVersion.match(/iphone/gi);
		if (isIPhone) {
			return "IOS";
		} else {
			return "android";
		}
	},
	IOS: function() {
		var u = navigator.userAgent,
			app = navigator.appVersion;
		if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
			return true;
		}; //ios终端
	},
	/*Array.prototype.deleteEle = function() {
		var newArr = this;
		for (var i = newArr.length - 1; i >= 0; i--) {
			var targetNode = newArr[i];
			for (var j = 0; j < i; j++) {
				if (targetNode == newArr[j]) {
					newArr.splice(i, 1);
					break;
				}
			}
		}
		return newArr;
	}*/
};

function getSameIndex(){
	Array.prototype.unique = function() {
		this.sort(); //先排序
		var res = [this[0]];
		for (var i = 1; i < this.length; i++) {
			if (this[i] !== res[res.length - 1]) {
				res.push(this[i]);
			}
		}
		return res;
	}
	var arr = ['1', '2', '3', '4', '5', '6', '6', '7', '8', '1', '1', '1'];
	var list = [];
	var nums = [];
	for (var i = 0; i < arr.length; i++) {
		var hasRead = false;
		for (var k = 0; k < list.length; k++) {
			if (i == list[k]) {
				hasRead = true;
			}
		}
		if (hasRead) {
			break;
		}
		var _index = i,
			haveSame = false;
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[i] == arr[j]) {
				list.push(j);
				nums.push(_index);
				_index += "," + j;
				haveSame = true;
				if (haveSame) {
					nums.push(j);
				}
			}
		}
		var sarr = nums.join(",").split(",");
		console.log("----------", sarr.unique())
			//return nums;
			// if (haveSame) {
			// 	console.log("数组中值为" + arr[i] + "相同元素的下标为" + _index);
			// }
	}
}