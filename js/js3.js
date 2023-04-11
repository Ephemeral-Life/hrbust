var box = document.getElementById('box');
var list = document.getElementById('list');

// 复制多一遍所有的li
list.innerHTML += list.innerHTML;
// 全局变量，表示当前list的left值
var left = 0;
// 定时器，全局变量
var slider_timer;
move();
// 动画封装成函数
function move() {
	// 设表先关，防止动画积累
	clearInterval(slider_timer);
	slider_timer = setInterval(function() {
		left -= 1;
		if(left <= -1260)
		{
			left = 170;
		}
		// 每张图宽200px，加上缝隙为1260px
		list.style.left = left + 'px';
		console.log(left);
	}, 20);
}

// 鼠标进入停止定时器
box.onmouseenter = function() {
	clearInterval(slider_timer);
};
// 鼠标离开继续定时器
box.onmouseleave = function() {
	move();
};