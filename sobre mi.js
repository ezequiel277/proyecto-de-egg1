window.addEventListener('resize', function() {
	var h = window.innerHeight;
	var w = window.innerWidth;
	document.querySelector('.background').style.height = h + 'px';
	document.querySelector('.background').style.width = w + 'px';
});

window.addEventListener('load', function() {
	var h = window.innerHeight;
	var w = window.innerWidth;
	document.querySelector('.background').style.height = h + 'px';
	document.querySelector('.background').style.width = w + 'px';
});
