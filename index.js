const amountPaid = document.querySelector("#amount-paid");
const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");

const denominations = [2000, 500, 200, 100, 50, 20, 10]
// console.log("Amount Paid", amountEntered.value);
// console.log("Bill amount", billAmount.value);
// console.log(checkButton.value);

checkButton.addEventListener("click", function validateBillAndCashAMount(){
    if(amountPaid.value > 0){
        if(amountPaid.value >= billAmount.value){
            const changeToBeGiven = amountPaid.value - billAmount.value;
            calculateNotes(changeToBeGiven)
        }else{
            showMessage("Wash Plates");
        }
    }else{ 
        showMessage("Amount cannot be less than 0")
    }
});


function calculateNotes(change){
    for(i=0; i<denominations.length; i++){

    }
}


function hideMessage(){
    message.style.display = "none"
}

function showMessage(msg){
    message.style.display = "block"
    message.innerHTML = msg;
}