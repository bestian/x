bindAll = !->
  d = $(\#x).val!
  $(\#latex).html(toLatex d)

  url = 'http://chart.apis.google.com/chart?chs=60&cht=tx&chl=' + toLatex d
  $(\#view).html('<img class ="tex" src = "' + url + '" />' )

$(\#x).on(\keyup,bindAll!)
$(\#x).on(\change,bindAll!)