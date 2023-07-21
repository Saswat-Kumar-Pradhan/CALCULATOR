let x=document.getElementsByTagName('input')

function display(c)
{
    x[0].value+=c
}
function solution()
{
    x[0].value=eval(x[0].value);
}
function clean()
{
    x[0].value=""
}
function backspace()
{
    x[0].value=x[0].value.slice(0,-1);
}