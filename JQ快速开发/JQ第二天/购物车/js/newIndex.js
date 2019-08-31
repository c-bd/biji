$(function () {

// #########################################################################################
// 1、全选或者全不选
	// 思路：当checkall发生改变，会影响三个小按钮也会选择或者不选择
	// 当checkall发生改变的时候，获取checkall的checked属性，查看checked是否选中，设置小的按钮
	$('.checkall').change(function () {

		// 1、获取当前checkll选中没有选择的状态
		var flag = $(this).prop('checked');
		$('.j-checkbox,.checkall').prop('checked',flag);

		// 判断
		// if (flag) {
		// 	$('.j-checkbox').prop('checked',true);
		// } else {
		// 	$('.j-checkbox').prop('checked',false);
		// }

	});














});