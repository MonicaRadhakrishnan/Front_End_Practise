//find Hypotenous of A Right Angled Triangle
//Fornuma = sqrt(a2 + b2)

/*let a,b,c;
a = window.prompt("Enter Value of A");
b = window.prompt("Enter Value of B");

a = Number(a);
b = Number(b);

c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
console.log("Hypotenouse of A Triangle : C = ", c); */

let a,b,c;
document.getElementById("btn").onclick = function(){
 a = document.getElementById("aText").value; 
 a = Number(a);
 b = document.getElementById("bText").value;
 b = Number(b);   
 c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
 document.getElementById("displayC").innerHTML = "Hypotenuse of A Right-Angled Triangle, C = " +c;
}