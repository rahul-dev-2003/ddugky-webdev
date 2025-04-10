// print the Digit in aa Given number

// 12614 % 10 = 4 , 12614 /10 = 1261.4 - 1261
// 1261 % 10 = 1, 1261 / 10  = 126.1  - 126
// 126 % 10 = 6,  126  /10 = 12..6  - 12
// 12 % 10 = 2, 12/ 10  = 1.2 -1
// 1 % 10 = 1,  1/10 = 0.1 - 0

num = 22345;
while(num>0) {
    let Digit = num % 10;
    console.log(Digit);
    num = Math.floor(num / 10);


}