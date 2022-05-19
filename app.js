function stringToFloat(a)
{
    a=parseFloat(a);
    return a;
}
function total(quantity,t)
{
    var total=document.getElementById(t).innerHTML;
    total = stringToFloat(total);
    if(t=='phn_total')
    {
        total=1219*quantity;
        document.getElementById(t).innerHTML=total;
    }
    else if(t=='cse_total')
    {
        total=59*quantity;
        document.getElementById(t).innerHTML=total;
    }
    subTotal('phn_total','cse_total');
}
function subTotal(a,b)
{
    a=document.getElementById(a).innerHTML;
    b=document.getElementById(b).innerHTML;
    a=stringToFloat(a);
    b=stringToFloat(b);
    s=a+b;
    t=s*(10/100);
    s1=s+t;
    document.getElementById('sub-total').innerHTML=s;
    document.getElementById('tax').innerHTML=t.toFixed(2);
    document.getElementById('sub-total2').innerHTML=s1;
}
function get_qnty(operator,qnty){
    document.querySelector(operator).addEventListener('click',function(){
        var quantity = document.querySelector(qnty).value;
        quantity = stringToFloat(quantity);
        if(operator=='.phn-plus' || operator=='.cse-plus')
        {
            quantity = quantity+1;
            if(operator=='.phn-plus')
            {
                total(quantity,'phn_total');
            }
            else
            {
                total(quantity,'cse_total');
            }
        }
        else if(operator=='.phn-minus' || operator=='.cse-minus')
        {
            if(quantity>0)
            {
                quantity = quantity-1;
                if(operator=='.cse-minus')
                {
                    total(quantity,'cse_total');
                }
                else
                {
                    total(quantity,'phn_total');
                }
            }
        }
        document.querySelector(qnty).value = quantity;
        
    })
}
get_qnty('.phn-plus','.quantity_one');
get_qnty('.phn-minus','.quantity_one');
get_qnty('.cse-plus','.quantity_two');
get_qnty('.cse-minus','.quantity_two');
