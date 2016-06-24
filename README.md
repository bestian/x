# x.js - a Simplified Latex that compiles to Latex


##UI

There a simple UI that can test and compile x formula online.
[https://bestian.github.io/x/](https://bestian.github.io/x/)



##API

you may run serve.js to create an x API.

		node server.js

user can send GET request to YOUR_SERVER/x/FORMULA.tex, to compile their x formula to Latex fomula.


##Test


To test your new formula, simply type your test formula into test.tex, then enter

		node x.js


you'll see the resualt logged in console.


##TODO and Bugs

This is only a MVP now,if you find any bug or want any feature, feel free to write an isuue.