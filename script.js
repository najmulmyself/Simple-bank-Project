const submitClick = document.getElementById('submit');
submitClick.addEventListener('click',function (){
    const hideLoginArea = document.getElementById('login-area');
    hideLoginArea.style.display = 'none';
    const bankSectionShown = document.getElementById('bank-section');
    bankSectionShown.style.display = 'block';
});

const clickDepositButton = document.getElementById('deposit');
clickDepositButton.addEventListener('click',function(){
    const depositAmount = document.getElementById('depositAmount').value;
    const depositNumber = parseFloat(depositAmount);

    // const currentDepo = document.getElementById('depositText').innerText;
    // const currentDepoNumber = parseFloat(currentDepo);
    // const totalDepo  = depositNumber + currentDepoNumber;
    // document.getElementById('depositText').innerText = totalDepo;
    document.getElementById('depositAmount').value = "";
    updateSpanText('depositText',depositNumber)
    updateSpanText('balanceText',depositNumber)

});

function updateSpanText(id , depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total  = depositNumber + currentNumber;
    document.getElementById(id).innerText = total;
}
