
   
    const SignIn = document.querySelector('.js-login1')
    const SignIn2 = document.querySelector('.js-login2')
    const modal1 = document.querySelector('.js-modal1')
    const modal2 = document.querySelector('.js-modal2')

    const modalClose = document.querySelector('.js-close')
    const modalClose2 = document.querySelector('.js-close2')
    const modalInner = document.querySelector('.js-modal-inner')
    const signMobile = document.querySelector('a.js-nav-moblie__account')
    function open_modal1() {
        modal1.classList.add('open')
    }
    function close_modal() {
        modal1.classList.remove('open') 
    }
    
    

    SignIn.addEventListener('click',open_modal1)
    signMobile.addEventListener('click',open_modal1)
    modalClose.addEventListener('click',close_modal)
    modal1.addEventListener('click',close_modal)
    modalInner.addEventListener('click',function(event){
      event.stopPropagation()
    })
    SignIn2.onclick = function(){
        modal2.classList.add('open');
    }
    modalClose2.onclick =function(){
        modal2.classList.remove('open');
    }

function checkEmail(){
    
}
function Formvalidate(){
    var dem=0;
    var email = document.getElementById('aaaaaa').value;
    var errorEmail = document.getElementById('errorEmail');
    var regexEmail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regexEmail.test(email)){
        errorEmail.innerHTML="* Email khong hop le !";
        dem=1;
    }
    else 
        errorEmail.innerHTML='';
        
    var password = document.getElementById('aaaaaa1').value;
    var errorPassword = document.getElementById('errorPassword');
    var regexPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if(!regexPassword.test(password)){
        errorPassword.innerHTML="*Tối thiểu tám ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường và một số!";
        dem=1;
    }
    else 
        errorPassword.innerHTML='';

    var againPassword = document.getElementById('aaaaaa2').value;
    var againErrorPassword = document.getElementById('again-errorPassword');
    if(againPassword != password){
        againErrorPassword.innerHTML="* mật khẩu nhập lại không đúng!";
        dem=1;
    }
    else 
        againErrorPassword.innerHTML='';

    if(!dem){
        alert("Đăng kí thành công v:");
       
    }
    return false;
}



    

