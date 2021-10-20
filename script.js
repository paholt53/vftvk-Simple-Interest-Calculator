function compute()
{
    p = document.getElementById("principal").value;
    line1 = "If you deposit ";
    line2 = ",\<br\> at an interest rate of ";
    lime3 = "%\<br\> You will receive an amount of ";
    line4 = ",\<br\> in the year ";
    endline = "\<br\>";
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    interest = principal * years * rate / 100;
    year =  new Date().getFullYear() + parseInt(years);
    
    If(number(years)) // if years is numeric
    {  If (years > 1900 && years < 2500) 
     {  document.getElementById("result").innerHTML=line1+principal+limne2+rate+line3+interest+line4+year+endline;
     }
    }
}    
function updateRate()
{
    rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
            
    
}
        
