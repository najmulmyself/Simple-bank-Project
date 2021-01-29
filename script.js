const clicked =document.getElementById('click');
clicked.addEventListener('click',function(){
    const ifClicked = document.getElementById('login-area');
    ifClicked.style.display = 'none';
    const transactionArea = document.getElementById('bank-section');
    transactionArea.style.display = 'block';
});
const addDeposit = getElementById('clickDeposit');
addDeposit.addEventListener('click',function(){
    console.log('Hello');
});