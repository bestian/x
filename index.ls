window.bindAll = !->

	d = $(\#x).val!
#	console.log d

	$(\#latex).html(toLatex d)

	url = 'http://chart.apis.google.com/chart?chs=60&cht=tx&chl=' + toLatex d
	$(\#view).html('<img class ="tex" src = "' + url + '" />' )

$(\#x).on(\keypress,window.bindAll!)
$(\#x).on(\change,window.bindAll!)