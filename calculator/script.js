 function clearscreen()//clears the value
{
    document.getElementById("result").value="";
}
function display(value)//fetching from html
{
    document.getElementById("result").value +=value;//appending and printing
}
function calculate()
{
    let a=document.getElementById("result").value//fetching value
//    /\function to calculate result
    document.getElementById("result").value= eval(a);//apppending it to display again
}
function deleteone()
{
   let tem=document.getElementById("result").value;
  let res=tem.slice(0,-1);
  document.getElementById("result").value=res;
}