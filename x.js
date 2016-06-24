// x.js - fast latex that make you not late 
// ========

String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};



function toLatex(s) {

//  console.log(s);

  var ans = s || "";

  ans = ans.replace(/^\/(x\/)?/,"");
  ans = ans.replace(/^(%20)+/, "");
  ans = ans.replace(/(%20)+$/, "");
  ans = ans.replace(/(%20)+/g, " <br/><br/> ");
  ans = ans.replace(/\.(tex|txt|json)$/, "");

//  console.log(ans);

  // Fraction
  var frac_p = [
    "(\\s*\\w+\\s*)",
    "\\s*\\((?!.+\\(.+)(.+?)\\)+\\s*",
    "\\s*\\[(?!.+\\[.+)(.+?)\\]+\\s*",
    "\\s*\\{(?!.+\\{.+)(.+?)\\}+\\s*",
  ];

  var frac = [];
  
  for (var i = 0; i < frac_p.length; i++) {
    for (var j = 0; j < frac_p.length; j++) {
      frac.push(new RegExp(frac_p[i]+"\/"+frac_p[j], "gi"));
    };
  };

  for (var i = 0; i < frac.length; i++) {
    ans = ans.replace(frac[i], "\\frac{$1}{$2}");
  };


  // Runs
    function hasRun(s){
//        console.log(s);
      for (var i = 0; i < s.length-1; i++) {
        if (s[i] == s[i+1] && s[i].match(/[a-zA-Z]/)) {
          return s[i];
        };
      };
      return false;
    }

    function replaceRun(s,r){
//        console.log("rp:" + s +":"+ r);

      for (var i = 0; i < s.length; i++) {

//          console.log("rp:" + s +":"+ r);
//          console.log(s.length);
        if (s[i]==r){
          var count = 0;
          while(s[i+count] == r) {
            count++;
//              console.log("r:"+r);
          }
//            console.log("count:"+count);
//            console.log(s);
          if (count>1) s = s.splice(i, count, r+"^"+count);
//            console.log(s);
//            if (count>1) s = s.replace(new RegExp(r+"+"),r+"^"+count);   //bug <---- HERE
        } else {
//            console.log("bug");
        }
      }
      return s;
    };

  var r = "";
  while(r = hasRun(ans)) {
    ans = replaceRun(ans,r);
  }


  // Simple notes

  ans = ans.replace(/\*/g, " \\times ");
  ans = ans.replace(/\/\//g, " \\div ");
  ans = ans.replace(/~~/g, " \\approx ");
  ans = ans.replace(/~/g, " \\sim ");

  ans = ans.replace(/(\w+)rt(\w+)/g, "\\sqrt[$1]{$2}");
  ans = ans.replace(/rt(\w+)/g, "\\sqrt{$1}");

  // Sum and Products

  var sp ="(\\d+|-?inf|\\w)_(\\d+|-?inf|\\w)([a-zA-Z])";
  ans = ans.replace(new RegExp("sum"+sp,"g"), "\\sum_{$3=$1}^{$2}");
  ans = ans.replace(/(?!\\)sum/g, "\\sum");

  ans = ans.replace(new RegExp("prod"+sp,"g"), "\\prod_{$3=$1}^{$2}");
  ans = ans.replace(/(?!\\)prod/g, "\\prod");


  //Infinity

  ans = ans.replace(/inf/g,"\\infty");


  // Sub
  ans = ans.replace(/([a-zA-Z])(\d+)/gi, "$1_$2");
  ans = ans.replace(/\\\\/g, "\\");


  //Space { }

  ans = ans.replace(/\s+}/g, "}");
  ans = ans.replace(/{\s+/g, "{");

//    console.log(ans);

  return ans;
}



//TEST

function test_x(a,b){
  var a1 = toLatex(a);
  var b1 = b;
  console.log((a1 == b1 && " T ") || "\"" + b1 + "\"  is not  \"" + a1+"\"");
}



if (typeof(module) !== 'undefined' && module.exports) {
  module.exports = {
    toLatex: toLatex,
    fromLatex: function (l) {
      return "null";
    }
  };


  const fs = require('fs');
  fs.readFile('test.x', function(err, data){
    if (err) throw err;
    var d = data.toString("utf-8");
    var ls = d.split("\n")
      .map(function(l){
          return l.replace(/\s*\/\/.+$/g,"")
                  .replace(/"\s+,\s*"/g,"\",\"")
                  .replace(/"/g,"");
      })
      .filter(function(l){return l})
      .map(function(l){return l.split(",")});
   // console.log(ls);

    for (var i = 0; i < ls.length; i++) {
      test_x(ls[i][0],ls[i][1]);
    };
  });



}





