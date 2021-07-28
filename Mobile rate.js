Your old mobile phone gets broken and so you want to purchase a new smartphone
and decide to go through all the online websites to find out which dealer has
the best offer for a particular model. You document the prices of N dealers.
Dealer ids start from 0 and go up to N.  Find out which dealer has the best
price for you.

Constraints:

1 <= N <= 100

1 <= A[] <= 100000

 

Input Description:
Number of dealers followed by the price offered by each dealer

Output Description:
Dealer offering the best price.

Sample Input :
3
10000 11200 12030

Sample Output :
Dealer0






// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
 var n= userInput[0];
 var price=  userInput[1].split(" ");
 price.length=n;
 var arr=[];
 for(var i=0;i<n;i++){
     var obj ={};
     obj["dealer"] =i ;
     obj["price"]= parseInt(price[i]);
     arr.push(obj);
 }
 var min= Infinity;
  for( var j=0;j<arr.length;j++){
     if( arr[j].price<min){
         min=price[j];
     }
 }
 for(var c=0;c<arr.length;c++){
 if(min==arr[c].price){
     console.log("Dealer"+c);
 }    
 }
});
