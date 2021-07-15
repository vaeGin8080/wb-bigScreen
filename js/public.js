$(function() {
	let time = new Date().getTime()
	$('.head-time').html(parseTime(time,'{y}-{m}-{d} {h}:{i}:{s}'))
})