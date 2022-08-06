const ayeClosed = document.querySelector('.ayeClosed');
const ayeOpened = document.querySelector('.ayeOpened');
const passType = document.querySelector('.pass')

ayeClosed.onclick = () =>{
    ayeClosed.classList.toggle('hide');
    ayeOpened.classList.toggle('hide');
    passType.type='text'
}

ayeOpened.onclick = () =>{
    ayeClosed.classList.toggle('hide');
    ayeOpened.classList.toggle('hide');
    passType.type='password'
}





const rmCheck = document.getElementById("rememberMe"),
    emailInput = document.getElementById("email");

if (localStorage.checkbox && localStorage.checkbox !== "") {
  rmCheck.setAttribute("checked", "checked");
  emailInput.value = localStorage.username;
} else {
  rmCheck.removeAttribute("checked");
  emailInput.value = "";
}

function lsRememberMe() {
  if (rmCheck.checked && emailInput.value !== "") {
    localStorage.username = emailInput.value;
    localStorage.checkbox = rmCheck.value;
  } else {
    localStorage.username = "";
    localStorage.checkbox = "";
  }
}