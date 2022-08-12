const pswrd = document.getElementById('pswrd');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.onclick = () =>{
  if(pswrd.type === 'password') {
    pswrd.setAttribute('type', 'text');
    toggleBtn.classList.toggle('hide');
  } else {
    pswrd.setAttribute('type', 'password');
    toggleBtn.classList.toggle('hide');
  } 
}

let lowerCase = document.getElementById('lower');
let upperCase = document.getElementById('upper');
let digit = document.getElementById('number');
let specialChar = document.getElementById('special');
let minLength = document.getElementById('length');

function checkPassword(data) {
  const lower = new RegExp('(?=.*[a-z, а-я])');
  const upper = new RegExp('(?=.*[A-Zб А-Я])');
  const number = new RegExp('(?=.*[0-9])')
  const special = new RegExp('(?=.*[!@#\$%\^&\*])');
  const length = new RegExp('(?=.{8,})');

  if(lower.test(data)) {
    lowerCase.classList.add('valid');
  } else {
    lowerCase.classList.remove('valid');
  };

  if(upper.test(data)) {
    upperCase.classList.add('valid');
  } else {
    upperCase.classList.remove('valid');
  };

  if(number.test(data)) {
    digit.classList.add('valid');
  } else {
    digit.classList.remove('valid');
  };

  if(special.test(data)) {
    specialChar.classList.add('valid');
  } else {
    specialChar.classList.remove('valid');
  };

  if(length.test(data)) {
    minLength.classList.add('valid');
  } else {
    minLength.classList.remove('valid');
  };
} 