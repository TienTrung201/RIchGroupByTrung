var regexEmail = /^[\w-]+@[\w]+(\.[a-z0-9]{2,4}){1,3}$/;
var regexPhone = /^(\+84|0)[1-9][0-9]{8}$/;
var regexUsername = /^[A-Za-z0-9_]{1,20}$/;
var regexPassword = /^([A-Za-z0-9_@!#$%^&*]){6,20}/;

function checkNull(txt) {
    if(txt.value.length == 0)
        return true;
    else
        return false;
}

function stringMatch(txt, reg) {
    return reg.test(txt.value);
}

function checkPass(txt1, txt2) {
    if(txt1.value == txt2.value) 
        return true;
    else
        return false;
}

var sendButton=document.querySelector('.formSubmit')
sendButton.addEventListener('click',function(e){
    sendMessenge(document.forms.sendMessenge)
})
function sendMessenge(f){
    if(checkNull(f.name)) {
        alert('Vui lòng nhập Họ và tên !');
        return;
    }
    if(checkNull(f.email)) {
        alert('Vui lòng nhập email !');
        return;
    }

    if(!stringMatch(f.email, regexEmail)) {
        alert('Email sai định dạng !');
        f.email.value="";
        f.email.focus();
        return;
    }


    if(!stringMatch(f.phone, regexPhone)) {
        alert('Số điện thoại sai định dạng !');
        f.phone.value="";
        f.phone.focus();
        return;
    }

    alert('Thành công');
}