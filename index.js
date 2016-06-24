// Generated by LiveScript 1.5.0
(function(){
  var ua;
  window.bindAll = function(){
    var d, url;
    d = $('#x').val();
    $('#latex').html(toLatex(d));
    url = 'http://chart.apis.google.com/chart?chs=60&cht=tx&chl=' + toLatex(d);
    $('#view').html('<img class ="tex" src = "' + url + '" />');
  };
  $('#x').on('keypress', bindAll());
  $('#x').on('change', bindAll());
  $('#x').focus();
  window.copyToClipboard = function(){
    var $temp;
    $temp = $("<input>");
    $("body").append($temp);
    $temp.val($('#latex').text()).select();
    document.execCommand("copy");
    $temp.remove();
    if (clipboardData) {
      clipboardData.setData("Text", $('#latex').text());
    }
    $('#latex').text('Well Done!');
  };
  ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1) {
    $('#copy').hide();
  }
}).call(this);
