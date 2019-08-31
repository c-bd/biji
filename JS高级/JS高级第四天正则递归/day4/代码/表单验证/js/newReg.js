// JS代码
window.onload = function () {


	// 获取元素
	var tel = document.getElementById('tel');
	var qq = document.getElementById('qq');
	var nc = document.getElementById('nc');
	var msg = document.getElementById('msg');
	var pwd = document.getElementById('pwd');
	var surepwd = document.getElementById('surepwd');
	var over = document.querySelector('.over');
	var inps = document.querySelectorAll('.inp');

	
	// 正则表达式【1XXXXXXXXXX】
	var regtel = /^1[3-9][0-9]{9}$/;
	var regqq = /^[1-9][0-9]{4,}$/;
	var regnc = /^[\u4e00-\u9fa5]{2,8}$/;
	var regmsg = /^[0-9]{6}$/;
	var regpwd = /^[a-z0-9_-]{6,18}$/;

	// 封装函数
	function regTest (ele, reg) {
		// 注册事件
		ele.onblur = function () {
			// 看看用户输入的是否否则规则
			if (reg.test(this.value)) {// 正确
				this.nextElementSibling.className = 'success';
				this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 输入正确';
				return true;
			} else {
				this.nextElementSibling.className = 'error';
				this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 输入错误';
				return false;
			}

		}
	}


	// 确认密码
	surepwd.onblur = function () {

		if (surepwd.value == pwd.value && surepwd.value.length > 0) {
			this.nextElementSibling.className = 'success';
			this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 输入正确';
		} else {
			this.nextElementSibling.className = 'error';
			this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 输入错误';
		}

	}



	regTest(tel, regtel);
	regTest(qq, regqq);
	regTest(nc,regnc);
	regTest(msg,regmsg);
	regTest(pwd,regpwd);


	// 点击事件
	over.onclick = function () {

		// 假设都允许提交
		var flag = true;

		// 遍历调用onblur
		for (var i = 0; i < inps.length; i++) {

			var result = inps[i].onblur();

			if (result == false) {
				flag = false;
			}

		}

		// 判断flag【onsubmit==>true,fasle】
		if (flag) {
			// location.href：获取地址栏信息
			location.href = 'http://www.baidu.com';
		} else {
			alert('你好好的写啊别乱来');
		}


	}
}

