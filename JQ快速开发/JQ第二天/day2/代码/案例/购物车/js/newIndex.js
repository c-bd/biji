$(function () {

// #############################################################################################################################
// 1、全选或者全不选
	// 思路：当checkall发生改变，会影响三个小按钮也会选择或者不选择
	// 当checkall发生改变的时候，获取checkall的checked属性，查看checked是否选中，设置小的按钮
	$('.checkall').change(function () {

		// 1、获取当前checkll选中没有选择的状态
		var flag = $(this).prop('checked');
		$('.j-checkbox,.checkall').prop('checked',flag);

		// 判断flag
		if (flag) {
			$('.cart-item').addClass('check-cart-item');
		} else {
			$('.cart-item').removeClass('check-cart-item');
		}

		// 判断
		// if (flag) {
		// 	$('.j-checkbox').prop('checked',true);
		// } else {
		// 	$('.j-checkbox').prop('checked',false);
		// }

	});
// ####################################################################################################################################
// 2、小按钮全选不全选
	// 思路：选中的个数和总个数，如果相等，说明都选中了，checkall就应该选中，否则就不选中
	$('.j-checkbox').change(function () {
		// 1、总共有几个
		var len1 = $('.j-checkbox').length;
		// 2、选中有几个
		var len2 = $('.j-checkbox:checked').length;

		$('.checkall').prop('checked',len1 == len2);

		// 得知道当前小按钮是否选中，选中加背景否则删背景
		if ( $(this).prop('checked') ) {//选中
			$(this).parents('.cart-item').addClass('check-cart-item');
		} else {
			$(this).parents('.cart-item').removeClass('check-cart-item');
		}

		// 判断
		// if (len1 == len2) {
		// 	$('.checkall').prop('checked',true);
		// } else {
		// 	$('.checkall').prop('checked',false);
		// }

	});

// ###########################################################################################################
// 3、点击数量增加
	// 思路：点击increment，让前面input里面的内容增加
	// 先获取原来input里面的数量，在让这个数量加1，最后设置给input
	$('.increment').click(function () {
		// 获取数量
		var n = $(this).siblings('.itxt').val();
		// 数量增加
		n++;
		// 设置给input
		$(this).siblings('.itxt').val(n);


		// 小计【数量 * 单价 == 小计】
		// 获取单价
		var p = $(this).parent().parent().siblings('.p-price').text();
		// 截取字符串
		p = p.substr(1);
		// 相乘计算
		var re = n * p;
		// 放入到页面上
		$(this).parent().parent().siblings('.p-sum').text('￥' + re.toFixed(2));

		getSum();

	});
// ###########################################################################################
// 4、点击数量减少
	// 思路：同加量
	$('.decrement').click(function () {
		// 获取数量
		var n = $(this).siblings('.itxt').val();
		if (n == 1) {
			return;
		}
		// 数量增加
		n--;
		// 设置给input
		$(this).siblings('.itxt').val(n);


		// 小计【数量 * 单价 == 小计】
		// 获取单价
		var p = $(this).parent().parent().siblings('.p-price').text();
		// 截取字符串
		p = p.substr(1);
		// 相乘计算
		var re = n * p;
		// 放入到页面上
		$(this).parent().parent().siblings('.p-sum').text('￥' + re.toFixed(2));

		getSum();

	});
// ##########################################################################################################
// 5、直接输入商品数量问题
	// 思路：当输入框发生改变之后，我们再用数量*单价计算出小计，在放到页面
	$('.itxt').change(function () {
		// 获取数量
		var n = $(this).val();
		// 数量*单价
		// 获取单价
		var p = $(this).parent().parent().siblings('.p-price').text();
		// 截取字符串
		p = p.substr(1);
		// 相乘计算
		var re = n * p;
		// 放入到页面上
		$(this).parent().parent().siblings('.p-sum').text('￥' + re.toFixed(2));

		getSum();

	});
// #############################################################################################################
// 6、求总件数和总钱
	// 思路：总件数：让所有输入框的数字相加既可，在放到页面上
	// 总钱数：把所有小计加起来，放到页面上
	// 因为很多地方都要计算总数量，所以我们最好封装一个函数
	getSum();
	function getSum () {
		// 总件数
		var count = 0;
		// 获取itxt的值
		$('.itxt').each(function (i, elm) {
			// 把每一个input里面的值获取的，都加到count里面
			count = count + parseInt( $(elm).val() );
		});
		// console.log( count );
		$('.amount-sum em').text(count);

		// 总钱数
		var sum = 0;
		// 获取小计
		$('.p-sum').each(function (i, elm) {
			// 获取内容
			var zhi = $(elm).text();
			// 截取内容
			zhi = zhi.substr(1);
			// 求和
			sum = sum + parseFloat(zhi);
		});
		$('.price-sum em').text('￥' + sum.toFixed(2));

	}
// ######################################################################################
// 7、点a删除功能
	// 思路：点击a一定要从当前a触发，找到cart-item删除
	$('.p-action a').click(function () {
		$(this).parents('.cart-item').remove();
		getSum();
	})
// #####################################################################################
// 8、删除选中商品
	// 思路：找到被选中的，再找到cart-item删除
	$('.remove-batch').click(function () {
		$('.j-checkbox:checked').parents('.cart-item').remove();
		getSum();
	});
// ####################################################################################
// 9、点击全部删除
	// 思路：把所有cart-item都删除
	$('.clear-all').click(function () {
		$('.cart-item').remove();
		getSum();
	})

});




