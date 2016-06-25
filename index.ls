window.bindAll = !->

	d = $(\#x).val!
#	console.log d

	$(\#latex).html(toLatex d)

	url = 'http://chart.apis.google.com/chart?chs=60&cht=tx&chl=' + toLatex d
	$(\#view).html('<img class ="tex" src = "' + url + '" />' )

$(\#x).on(\keypress,bindAll!)
$(\#x).on(\change,bindAll!)

$(\#x).focus!




window.copyToClipboard = !->
	$temp = $("<input>")
	$("body").append($temp)

	$temp.val($(\#latex).text!).select!
	document.execCommand("copy")
	$temp.remove!

	if clipboardData
		clipboardData.setData("Text", $(\#latex).text!)

	$(\#latex).text('Well Done!')


ua = navigator.userAgent.toLowerCase!
if (ua.indexOf('safari') != -1 and ua.indexOf('chrome') == -1) 
	$(\#copy).hide!


$('.browse')
	.popup({
		popup : $('.popup'),
		inline   : true,
		hoverable: true,
		position : 'bottom left',
		delay: {
			show: 150,
			hide: 300
		}
	})


for k in examples
	$(\#examples).append('<li><a onclick = "pick(this)">' + k + \</a></li>)


window.pick = (o)->
	$(\#x).val($(o).text!)
	bindAll!