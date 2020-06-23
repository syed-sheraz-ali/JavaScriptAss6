//Task 1 

var firstName = prompt("Enter your first name ");
var LastName = prompt("Enter your last name");
 var fullName = firstName + " " + LastName 

 alert("Hello and Good Luck " + fullName);

//TASk 2 

var yourfav = prompt("Enter about your favourite phone")
var l = yourfav.length;
document.write("Your favourite phoe is " + yourfav + "<br/>");

document.write("length of the string is : " + l );


//TASK 3
var str = "Pakistani"
var n = str.indexOf("n")
document.write("<br/>Index of 'n' :" + n)

//TASK 4
var str1 = "Hello World"
var s = str1.lastIndexOf("l")
document.write("<br/>Index of 'l' :" + s)

//TASK 5 
var str2 = "Pakistan"
var a = str2.charAt(3)
document.write("<br/> " + a)

//TASK 6 

var firstName1 = prompt("Enter your first name ");
var LastName1 = prompt("Enter your last name");

var C = firstName1.concat( " " , LastName1)

alert(C);


TASK 7


var City = "Hyderabad"
var rep = City.replace("Hyder" , "Islam");
document.write("City = " + City)
document.write("<br/>After Replacement = " + rep)


//TASK 8 
var text = "Ali and Sami are best friends. They play cricket and football together";
 var replace = text.replace(/and/g , "&")
 document.write("<br/> Before Replacement "  + text)
 document.write("<br/> After Replacement "  +replace)

//TASK 9

var num = "472";
document.write("<br/> Value :" + num)
document.write("<br/> Type : "+ typeof(num))
num1 = parseInt(num);
document.write("<br/> Value :" + num1)
var new1 = typeof(num1)
document.write("<br/> Type : " +new1)

//TASK 10
 
var pea = prompt("write any word in lower case")
document.write("</br>User Input : " +pea)
pea = pea.toUpperCase();
document.write("</br>Upper case : " +pea)

//TASK 11

var str = prompt("enter the word to change intitle case")
document.write("<br/>User input  : " + str)
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
     
  document.write("<br/>Title case : " + str)