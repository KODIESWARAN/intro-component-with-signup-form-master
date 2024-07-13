
    const firstname = document.getElementById("first");
    const lastname = document.getElementById("last");
    const email = document.getElementById("email");
    const password = document.getElementById("pass");
    const firstnameError = document.getElementById("firstname-error");
    const lastnameError = document.getElementById("lastname-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
  
    const errorIconFirstname = document.querySelector(".errorIcon-firstname");
    const errorIconLastname = document.querySelector(".errorIcon-lastname");
    const errorIconEmail = document.querySelector(".errorIcon-email");
    const errorIconPassword = document.querySelector(".errorIcon-password");


  const validateEmail = function (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleSubmit = function (e) {
    e.preventDefault();
    
   

    if (firstname.value === ""){
      firstnameError.textContent = "firstname cannot be empty";
      errorIconFirstname.classList.remove("hidden");

    } else {
      firstnameError.textContent = " ";
      errorIconFirstname.classlist.add("hidden");
    }
    if (lastname.value === "") {
      lastnameError.textContent = "lastname cannot be empty";
      errorIconLastname.classList.remove("hidden");
      
    } else {
      lastnameError.textContent = " ";
      errorIconLastname.classList.add("hidden");
    }
    if (!validateEmail(email.value)) {
      emailError.textContent = "email cannot be empty";
      errorIconEmail.classList.remove("hidden");
     
    } else {
      emailError.textContent = " ";
      errorIconEmail.classList.add("hidden");
    }
    if (password.value === "") {
      passwordError.textContent = "password cannot be empty";
      errorIconPassword.classList.remove("hidden");
      
    } else {
      passwordError.textContent = " ";
      errorIconPassword.classList.add("hidden");
    }

    
    
  };
  
  const form = document.getElementById("form");
  form.addEventListener("submit", handleSubmit);
  