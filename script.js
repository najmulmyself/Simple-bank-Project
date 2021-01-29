const submitClick = document.getElementById('submit');
submitClick.addEventListener('click',function (){
    const hideLoginArea = document.getElementById('login-area');
    hideLoginArea.style.display = 'none';
    const bankSectionShown = document.getElementById('bank-section');
    bankSectionShown.style.display = 'block';
});