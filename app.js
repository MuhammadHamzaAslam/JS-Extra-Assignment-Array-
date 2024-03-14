var arr = [12,21,22,87,9,2,8,17,56,98,99,23]
var arr1 = arr.slice(3,11)
console.log(arr1);

var new1 = [25,19,76,98,74,56,92,91,53]
document.write("<h1>","Orignal Array: ",new1,"</h1>")
 new1.splice(2,4,4)
 document.write("<h2>","<br>","Value after adding splice:","</h2>");
 document.write("<h2>",new1,"</h2>");


 var new2 = [25,19,76,98,74,56,92,91,53]
new2.shift()
document.write("<h2>","<br>","Value after adding shift:","</h2>");
document.write("<h2>",new2,"</h2>");

var new3 = [25,19,76,98,74,56,92,91,53]
new3.unshift(95)
document.write("<h2>","<br>","Value after adding unshift:","</h2>");
document.write("<h2>",new3,"</h2>");

var new3 = [25,19,76,98,74,56,92,91,53]
new3.push(59)
document.write("<h2>","<br>","Value after adding push:","</h2>");
document.write("<h2>",new3,"</h2>");

var new4 = [25,19,76,98,74,56,92,91,53]
new4.pop()
document.write("<h2>","<br>","Value after adding pop:","</h2>");
document.write("<h2>",new4,"</h2>");



var new5 = [25,19,76,98,74,56,92,91,53]
var copy = new5.slice(2,6)
document.write("<h2>","<br>","Value after adding slice:","</h2>");
document.write("<h2>",copy,"</h2>");