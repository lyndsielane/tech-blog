//Login Functions
const loginFormFunction = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#log-email').value.trim();
    const password = document.querySelector('#log-password').value.trim();

    if (email && password) {

        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('profile');
        } else {
            alert(response.statusText);
        }
    }
};

//Login Form Script 
$(function () {
  var showClass = "show";

  $("input")
    .on("checkval", function () {
      var label = $(this).prev("label");
      if (this.value !== "") {
        label.addClass(showClass);
      } else {
        label.removeClass(showClass);
      }
    })
    .on("keyup", function () {
      $(this).trigger("checkval");
    });
});

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormFunction);

//Signup Functions