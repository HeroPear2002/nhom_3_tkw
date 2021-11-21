function checkName() {
	var name = document.getElementById('name').value;
	var errorName = document.getElementById('errorName');
	var regexName = /^[^\d+]*[\d+]{0}[^\d+]*$/;
	
	if (name == '' || name == null) {
		errorName.innerHTML = "Full Name không được để trống!";
	} else if(!regexName.test(name)){
		errorName.innerHTML = "Full Name không hợp lệ!";
	} else{
		errorName.innerHTML = 'Full Name';
		return name;
	}	
}

function checkMail() {
	var mail = document.getElementById('mail').value;
	var errorMail = document.getElementById('errorMail');
	var regexMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	if (mail == '' || mail == null) {
		errorMail.innerHTML = "Email không được để trống!";
	} else if(!regexMail.test(mail)){
		errorMail.innerHTML = "Email không hợp lệ!";
	} else{
		errorMail.innerHTML = 'Email';
		return mail;
	}	
}

function checkPhone() {
	var phone = document.getElementById('phone').value;
	var errorPhone = document.getElementById('errorPhone');
	var regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
	
	if (phone == '' || phone == null) {
		errorPhone.innerHTML = "Phone Number không được để trống!";
	} else if(!regexPhone.test(phone)){
		errorPhone.innerHTML = "Phone Number không hợp lệ!";
	} else{
		errorPhone.innerHTML = 'Phone Number';
		return phone;
	}	
}
function checkMassage() {
	var massage = document.getElementById('massage').value;
	var errorMassage = document.getElementById('errorMassage');
	
	if (massage == '' || massage == null) {
		errorMassage.innerHTML = "Massage không được để trống!";
	} else {
		errorMassage.innerHTML = "Type your Massage..."
	}
}