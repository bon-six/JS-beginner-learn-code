let income = 100000;
const INTEREST_RATE = 0.08;
income += 50000 // mutable
console.log("changed income value is ",income);
//INTEREST_RATE = 0.09;  //Error: cannot re-assign
//INTEREST_RATE += 0.01;   //Error: not mutable
console.log("changed rate is ",INTEREST_RATE); 