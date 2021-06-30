const { registration } = document.forms;

registration.addEventListener('submit', (event) => {
  event.preventDefault();
  let validated = true;
  if (!registration.checkValidity()) {
    event.stopPropagation();
    validated = false;
  }
  registration.classList.add('was-validated');

  if (validated) {
    const { name, email, password } = registration;

    localStorage.setItem(
      '@health:user',
      JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    localStorage.setItem(
      '@health:logged',
      JSON.stringify({
        logged: true,
      })
    );

    window.location.href = 'dashboard.html';
  }
});
