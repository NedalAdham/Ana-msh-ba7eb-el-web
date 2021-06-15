var x ;

function dis(val)
{/*/
x = document.getElementsByName("input") ;
x[0].innerHTML =  val ;
alert(x[0].innerHTML);
val.preventDefault();
/*/
document.momo.input.value = document.momo.input.value+val ;
}

function solve()
{
let x = document.getElementById("lol").value
let y = eval(x)
document.getElementById("lol").value = y
}

function clr()
{
document.getElementById("lol").value = ""
}