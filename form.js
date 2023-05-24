// const name = document.getElementById('clientName')
// const email = document.getElementById('clientEmail')
// const text = document.getElementById('emailText')

// const labelName = document.getElementById('clientNameL')
// const labelEmail = document.getElementById('clientEmailL')
// const labelText = document.getElementById('emailTextL')

// const showName = () => {
//   labelName.style.visibility = 'visible';
//   name.placeholder = '';
// }
// const showEmail = () => {
//   labelEmail.style.visibility = 'visible';
//   email.placeholder = '';
// }
// const showText = () => {
//   labelText.style.visibility = 'visible';
//   text.placeholder = '';
// }

// name.addEventListener('focus', showName);
// email.addEventListener('focus', showEmail);
// text.addEventListener('focus', showText);

// name.addEventListener('blur', () => {
//   if (name.value === '') {
//     name.placeholder = 'Name'
//     labelName.style.visibility = 'hidden'
//   } else {
//     return;
//   }
// });

// email.addEventListener('blur', () => {
//   if (email.value === '') {
//     email.placeholder = 'name@email.com'
//     labelEmail.style.visibility = 'hidden'
//   } else {
//     return;
//   }
// });

// text.addEventListener('blur', () => {
//   if (text.value === '') {
//     text.placeholder = 'Your message...'
//     labelText.style.visibility = 'hidden'
//   } else {
//     return;
//   }
// });

const inputElements = [
  { input: document.getElementById('clientName'), label: document.getElementById('clientNameL') },
  { input: document.getElementById('clientEmail'), label: document.getElementById('clientEmailL') },
  { input: document.getElementById('emailText'), label: document.getElementById('emailTextL') }
];

const handleFocus = (input, label) => {
  label.style.visibility = 'visible';
  input.placeholder = '';
};

const handleBlur = (input, label) => {
  if (input.value === '') {
    input.placeholder = label.textContent;
    label.style.visibility = 'hidden';
  }
};

inputElements.forEach(({ input, label }) => {
  input.addEventListener('focus', () => handleFocus(input, label));
  input.addEventListener('blur', () => handleBlur(input, label));
});
