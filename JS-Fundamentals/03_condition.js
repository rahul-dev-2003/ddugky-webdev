 var marks = 15;
 var grad 
 var condditiono = (marks>90) 
 var condditiong = (marks>=70 && marks<=90)
 var condditionf = (marks>50 && marks<=70)
 var condditionh = (marks>=30 && marks<=50)
 var condditioni = (marks>=20 && marks<=30)
 var condditionj = (marks<=20)

 if(condditiono) grad = "o";
 else if(condditiong) grad = "A+"
 else if(condditionf) grad = "A"
 else if (condditionh) grad = "B"
 else if(condditioni) grad = "PASS"   
 else if(condditionj) grad  =  "FAIL"

 console.log(grad)
 
    
 

