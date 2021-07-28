

Ramesh is a student and wants to find out if there is any other student
in his class who has got the same marks as his, in maths. Help him to find 
out.
 
Input Description:
First line contains the number of students in the class followed by Ramesh’s
mark. Second line contains the marks of all students in the class.

Output Description:
Index of student who got mark same as Ramesh’s mark. If no such mark exists,
return -1.

Sample Input :
2 10
1 2

Sample Output :
-1


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
  var school=userInput[0].split(" ");
  var students=school[0];
  var rmark=school[1];
  var mark=userInput[1].split(" ");
  var markarr=[];
  for(var i=0;i<students;i++){
      markarr.push(mark[i]);
  }
  function compare(arr,ramesh){
      for(let j=0;j<arr.length;j++){
          if(arr[j]==ramesh){
              return j;
          }
          
      }
      return -1;
  }
  var final=  compare(markarr,rmark);
  console.log(final);
  });