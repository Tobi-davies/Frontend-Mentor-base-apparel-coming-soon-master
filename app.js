
const form = document.querySelector('#forms');
const mail = document.querySelector('input');
const one = document.querySelector('.mail');
const two = document.querySelector('.user');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (mail.value === '') {
    mail.parentElement.classList.add('error');
  }else {
    mail.parentElement.classList.remove('error');
    if(mail.type === 'email'){
      if (validateEmail(mail.value)) {
        mail.parentElement.classList.remove('error');
      }else {
        mail.parentElement.classList.add('error');
      }
    }
  }
})


two.addEventListener('submit', (e) => {
  e.preventDefault();

  if (one.value === '') {
    one.parentElement.classList.add('error');
  }else {
    one.parentElement.classList.remove('error');
    if(one.type === 'email'){
      if (validateEmail(one.value)) {
        one.parentElement.classList.remove('error');
      }else {
        one.parentElement.classList.add('error');
      }
    }
  }
})

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
} 










// press.addEventListener('click', onClick);
// function onClick(e) {
//   console.log(e.target.tagName);
//   e.preventDefault();
//   if(mail.value === '') {
//     mssg.innerHTML = 'Please provide a valid email';
//     mail.innerHTML = '<img src="./images/icon-error.svg" alt="">';
//     setTimeout(() => mssg.remove(), 3000);
//   } else if(mail.value.includes('@')) {
//     mail.style.borderColor = '';
//   } else {
//     mssg.innerHTML = 'Please provide a valid email';
//     mail.style.borderColor = '#f96262';
//     mail.style.borderWidth = '2px';
//     setTimeout(() => mssg.remove(), 3000);
//   }
// }











//  {
//   console.log(e.target.tagName);
//   e.preventDefault();
//   if(mail.value.includes('@')) {
//     document.getElementById('email').
//   } else {
//     mail.style.borderColor = 'red';
//   }
// });