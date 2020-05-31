
document.getElementById("date").innerHTML=new Date()
function totalAmount(){
    var price=document.getElementById("price").value
    
    var qty=document.getElementById("qty").value
    
    var totalPrice=price*qty
    var taxPer=document.getElementById("tax%").value
    
    var taxAmount=(taxPer/100)*totalPrice
    document.getElementById("taxAmount").value=taxAmount
    var tip=document.getElementById("tip").value
    
    var discountPer=document.getElementById("discount%").value
    var discountAmount=(discountPer/100)*totalPrice
    document.getElementById("discount").value=discountAmount
    
    total=Number(totalPrice)+Number(taxAmount)+Number(tip)-Number(discountAmount)
    var total=document.getElementById("total").value=total
}