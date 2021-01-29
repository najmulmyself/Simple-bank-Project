const submitClick = document.getElementById('submit');
submitClick.addEventListener('click',function (){
    const hideLoginArea = document.getElementById('login-area');
    hideLoginArea.style.display = 'none';
    const bankSectionShown = document.getElementById('bank-section');
    bankSectionShown.style.display = 'block';
});

const clickDepositButton = document.getElementById('deposit');
clickDepositButton.addEventListener('click',function(){
    const getDepositAmount = document.getElementById('getNumber').value;
    const convertString = parseFloat(getNumber);
    console.log(convertString);
});