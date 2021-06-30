const { login } = document.forms;

login.addEventListener('submit', (event) => {
  event.preventDefault();
  let validated = true;
  if (!login.checkValidity()) {
    event.stopPropagation();
    validated = false;
  }
  login.classList.add('was-validated');

  if (validated) {
    const { email, password } = login;

    localStorage.setItem(
      '@health:user',
      JSON.stringify({
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
