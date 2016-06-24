
"1+1=2"               , "1+1=2" // True
"1+1=2.tex"           , "1+1=2" // True
"1+1=2.txt"           , "1+1=2" // True
"1+1=2.json"          , "1+1=2" // True
"12+12=24"            , "12+12=24" // True
"1+1~2"               , "1+1 \sim 2" // True
"x1+y1"               , "x_1+y_1" 						// True
"12rt2~~1.0595"       , "\sqrt[12]{2} \approx 1.0595"  // True
"1+2/3"               , "1+\frac{2}{3}"   // True
"(1+2)/3"             , "\frac{1+2}{3}" // True
"5+[x+(1+2)]/3+y"     , "5+\frac{x+(1+2)}{3}+y"  // True
"(1+2)+(1+2)/3"       , "(1+2)+\frac{1+2}{3}"  // True

"xxx+yy"              , "x^3+y^2" // True

"sum X"               , "\sum X" // True
"\sum X"              , "\sum X" // True
"sum0_10i X_i"        , "\sum_{i=0}^{10} X_i"  // True
"sum0_ki X_i"         , "\sum_{i=0}^{k} X_i"    // True
"sumj_infi X_i"       , "\sum_{i=j}^{\infty} X_i"    // True
"prod1_10i a_i"       , "\prod_{i=1}^{10} a_i"        // True
"prod1_infi a_i"      , "\prod_{i=1}^{\infty} a_i"   // True

"/x/%20%20%20%20%20%20%20%20%20%20xx+yy=zz%20%20%20%20%20%20%20%20aaa%20%20%20%20%20%20bbbz.tex"				,"x^2+y^2=z^2 <br/><br/> a^3 <br/><br/> b^3z" // True

"/x/%20%20%20%20%20%20%20%20%20%20xx+yy=zzaa%20aa.tex" ,"x^2+y^2=z^2a^2 <br/><br/> a^2"