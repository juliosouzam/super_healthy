(async () => {
  const user = JSON.parse(localStorage.getItem('@health:user'));

  const { profile } = document.forms;

  const { email, password } = profile;

  email.value = user.email;
  password.value = '';

  profile.addEventListener('submit', (event) => {
    event.preventDefault();
    let validated = true;
    if (!profile.checkValidity()) {
      event.stopPropagation();
      validated = false;
    }
    profile.classList.add('was-validated');

    if (validated) {
      localStorage.setItem(
        '@health:user',
        JSON.stringify({
          email: email.value,
          password: password.value,
        })
      );

      window.location.reload();
    }
  });
})();
