var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("Submit-error");

//function for Name validation
function validateName(){
   var name = document.getElementById ('contact-name').value;

   if(name.length==0){
    nameError.innerHTML = 'Name is required';
    return false;
   }
   if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = 'Write full name';
    return false;
   }
   nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
   return true;
}

//function for phone validation
function validatePhone(){

    var phone = document.getElementById('contact-phone').value;
    
    if(phone.length == 0){
    phoneError.innerHTML = 'Phone no is required';
    return false;
    }
    
    if(phone.length !== 10){
    phoneError.innerHTML = 'Phone no should be 10 digits'; 
    return false;
    }
    
    if(!phone.match(/^[0-9]{10}$/)){
    phoneError.innerHTML = 'Only digits please.';
    return false;
    }
    
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>'; 
    return true;
    }

  
//function for Email validation
    function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
    emailError.innerHTML = 'Email is required';
    return false;
    }

    if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
    emailError.innerHTML = 'Email Invalid';
    return false;
    }

    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
    }
//function for message validation
    function validateMessage(){
      var message = document.getElementById("contact-message").value;
      var required = 30;
      var left = required-message.length;

      if(left>0){
         messageError.innerHTML = left +' characters more required';
         return false;
      }
      messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
      return true;
    }
  // function for form validation
  function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
      submitError.style.display = 'block';
      submitError.innerHTML = 'Please fix error to submit';
      setTimeout(function(){submitError.style.display = 'none';}, 3000);
      return false; 
    }
  }

    //storing Data on Google Sheet and alert Submition
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzFKB_UpfNTL0iwGurtKBVQNJ2fqzcYgpQTBi25USjhGy0sQx7vwh9ZyDnlUEOzTdozOw/exec'
    const form = document.forms['contact-form']

    form.addEventListener('submit', e => {
      e.preventDefault();
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})   
      .then(() => {
        swal("Successfull", "Your form has been submitted.🎉", "success")//send typing message
        .then(() => {
          setTimeout(() => { window.location.reload(); }, 10); // Adds delay for the message
        });
      })    
      .catch(error => console.error('Error!', error.message)); // Fixed typo
    });
    

