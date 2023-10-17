const form = document.querySelector('form');

const errorMessage = document.querySelector('.errorMessage');
const approveMessage = document.querySelector('.approveMessage');

errorMessage.style.display = 'none';
approveMessage.style.display = 'none';

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const nameInput = document.querySelector('#floatingInput1');
  const emailInput = document.querySelector('#floatingInput3');

  const checkboxInput = document.querySelector('.form-check-input');

  if (nameInput.value.trim() === '') {
    errorMessage.style.display = 'block';
    errorMessage.innerHTML =
      '<ul><li>Make sure to fill your name in the name field.</li></ul>';
  } else if (!isValidEmail(emailInput.value.trim())) {
    errorMessage.style.display = 'block';
    errorMessage.innerHTML =
      '<ul><li>Invalid or unrecognized email address.</li></ul>';
  } else if (!checkboxInput.checked) {
    errorMessage.style.display = 'block';
    errorMessage.innerHTML =
      '<ul><li>Click the check box to ensure you understand our privacy and terms & conditions.</li></ul>';
  } else {
    errorMessage.style.display = 'none';

    approveMessage.style.display = 'block';

    const successPopup = document.querySelector('#successPopup');
    successPopup.classList.add('active');

    successPopup.addEventListener('click', function () {
      successPopup.classList.remove('active');
      location.reload();
    });
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
