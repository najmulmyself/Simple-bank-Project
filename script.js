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

const clickWithdrawButton = document.getElementById('withdraw');
clickWithdrawButton.addEventListener('click',function(){
    const withdrawAmount = document.getElementById('withdrawAmount').value;
    const withdrawNumber = parseFloat(withdrawAmount);
    // const currentWithdraw = document.getElementById('withdrawText').innerText;
    // const currentWithdrawNumber = parseFloat(currentWithdraw);
    // const totalWithdraw = withdrawNumber + currentWithdrawNumber;
    // document.getElementById('withdrawText').innerText = totalWithdraw;
    document.getElementById('withdrawAmount').value = "";
    updateSpanText('withdrawText',withdrawNumber);
    updateSpanText('balanceText',-1 * withdrawNumber)
});

function updateSpanText(id , depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total  = depositNumber + currentNumber;
    document.getElementById(id).innerText = total;
}

