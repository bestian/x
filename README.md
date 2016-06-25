# x.js - a Simplified Latex that compiles to Latex


##UI 使用者介面

There a simple UI that can test and compile x formula online.
[https://bestian.github.io/x/](https://bestian.github.io/x/)




##API 程式介面

you may run serve.js to create an x API.

		node server.js

user can send GET request to YOUR_SERVER/x/FORMULA.tex, to compile their x formula to Latex fomula.


##Contribution and Testing 參與貢獻與測試


To test your new formula, simply type your test formula into test.tex, then enter

		node x.js


you'll see the resault logged in console.


##Bug Report and Feature Request 錯誤回報與功能請求

This is only a MVP now,if you find any bug or want any feature, feel free to write an isuue.



