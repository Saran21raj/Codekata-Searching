Indian politics has an interesting trend in history.
A party which assumes that it is the undefeatable 
champion in elections has been defeated by other parties
in many instances.You are a data analyst in the Election
Commission. You are given a list containing a year and
 the party which won the election in that particular year. 
Your task is to analyse the trend and find the years in which,
 one party, which won many elections consecutively, was 
suddenly defeated by another.
Input Description:
Size of the array, followed by 2 arrays, one containing the year values and the other containing the party which won the election that year.

Output Description:
The year of transition from one party to another.

Sample Input :
5
2004 1999 2019 2009 2014
JDU JDU CON JDU CON

Sample Output :
2014

CODE:
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
 var year=  userInput[1].split(" ");
 year.length=n;
 var name=userInput[2].split(" ");
 name.length=n;
 var arr=[];
 for( var i=0;i<year.length;i++){
 var obj={};
 obj['year']=year[i];
 obj['partyname']=name[i];
 arr.push(obj);
 }
 arr.sort((a,b)=>a.year-b.year);
 var fina=[];
 
 for( var j=1;j<year.length;j++){
     if( arr[j].partyname!= arr[j-1].partyname){
        fina.push(arr[j].year);
     }
 }
 /*(console.log(arr);
 //console.log(year);
 console.log(name);*/
console.log(fina.join("\n")); 
});
