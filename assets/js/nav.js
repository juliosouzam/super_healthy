(async () => {
  const el = document.getElementById('user-logged');
  const user = JSON.parse(localStorage.getItem('@health:user'));
  el.append(user.email);

  const btnLogout = document.getElementById('logout');
  btnLogout.addEventListener('click', () => {
    localStorage.removeItem('@health:user');
    localStorage.removeItem('@health:logged');
    window.location.href = 'index.html';
  });
})();
