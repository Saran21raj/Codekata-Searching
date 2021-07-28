Ram and Sita are playing a game. There are N rounds for the game
 and the results are tabulated in a table of dimensions N x N. 
A ‘0’ in the table implies that Ram has won the game, while a ‘1’ denotes
 that Sita has won the game.You must compute the number of times Ram 
and Sita have won the game, individually.

Note : Elements in table can only be either 1 or 0.

Input Description:
First line contains two space separated integers M,N denoting the size of the 2d matrix . Then in the next lines are the space separated values of the matrix mat[ ] [ ] . Constraints: 1<=M,N<=50 ,0<=mat[][]<=1

Output Description:
The output will be the number of 0s and number of 1s, displayed separately.

Sample Input :
1 3
1 1 1

Sample Output :
RAM: 0
SITA: 3


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
  var first=userInput[0].split(" ");
  var row= first[0];
  var column=first[1];
  var arr=[];
  var ram=0,sita=0;
  for( var i=1;i<=row;i++){
      var inside= userInput[i].split(" ");
      for(var j=0;j<column;j++){
        arr.push(inside[j]);  
        if(inside[j]==0)
        {
            ram=ram+1;
        }
        else if(inside[j]==1)
        {
            sita=sita+1;
        }
      }
      
  }
  console.log("RAM: "+ram);
  console.log("SITA: "+sita);
  //console.log(arr);

  });