function compute()
{
    p =Number( document.getElementById("principal").value);
    r= Number(document.getElementById("rate").value);
    y= Number(document.getElementById("years").value);
    if(p<=0)
    {
        alert("please enter a positive value")
    }
    else{
        var amt = p*(1+ r*y);
        var intrest= amt -p;
        var year = new Date().getFullYear();
        var ele = document.getElementById("result");
        var newele= document.createElement("p")
        var data =`If you deposit ${p},<br>
        at an interest rate of ${r}%.<br>
        You will receive an amount of ${intrest},<br>
        in the year ${Number(year+y)}<br>`
        newele.innerHTML=data;
        ele.appendChild(newele);

    }
    
}
        
