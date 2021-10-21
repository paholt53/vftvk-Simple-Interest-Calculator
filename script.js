function compute()
{
    alert("made it to compute()");
    
    
    p = document.getElementById("principal").value;
    line1 = "If you deposit ";
    line2 = ",\<br\> at an interest rate of ";
    line3 = "%\<br\> You will receive an amount of ";
    line4 = ",\<br\> in the year ";
    endline = "\<br\>";
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    interest = principal * years * rate / 100;
    year =  new Date().getFullYear() + parseInt(years);
    
    alert("interest=" + interest);
    alert("year=" + year);
    alert("interest rate=" + rate);
        
    result=line1+principal+line2+rate+line3+interest+line4+year+endline;
    
    alert("result=" + result);
    // document.getElementById("result").innerHTML=line1+principal+line2+rate+line3+interest+line4+year+endline; //
    
    alert("made it to here"); 
    return;
}    
function updateRate()
{
    rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    return;
            
    
}  
        
