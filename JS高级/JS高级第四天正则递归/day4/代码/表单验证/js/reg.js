window.onload = function () {

	var tel = document.getElementById('tel');
	var qq = document.getElementById('qq');
	var nc = document.getElementById('nc');
	var msg = document.getElementById('msg');
	var pwd = document.getElementById('pwd');
	var surepwd = document.getElementById('surepwd');
	var over = document.querySelector('.over');
	var inps = document.querySelectorAll('.inp');


	var regtel = /^1[3|4|5|7|8][0-9]{9}$/;
	var regqq = /^[1-9][0-9]{4,}$/;
	var regNickName = /^[\u4e00-\u9fa5]{2,8}$/;
	var regmsg = /^[0-9]{6}$/;
	var regpwd = /^[a-z0-9_-]{6,18}$/;


	function jiance (obj, reg) {
		obj.onblur = function () {
			if (reg.test(this.value)) {
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

	jiance(tel,regtel);
	jiance(qq,regqq);
	jiance(nc,regNickName);
	jiance(msg,regmsg);
	jiance(pwd,regpwd);

	surepwd.onblur = function () {

		if (surepwd.value == pwd.value && surepwd.value != '') {
			this.nextElementSibling.className = 'success';
			this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 输入正确';
			return true;
		}else {
			this.nextElementSibling.className = 'error';
			this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 输入错误';
			return false;
		}

	}

	over.onclick = function () {
		var flag = true;
		for (var i = 0; i < inps.length; i++) {
			var n = inps[i].onblur();
			if (n == false) {
				flag = false;
			}
		}

		if (flag) {
			location.href = 'http://www.baidu.com';
		} else {
			alert('好好填写好不啦');
		}

	}

}