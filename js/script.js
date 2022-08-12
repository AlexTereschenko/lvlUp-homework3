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

