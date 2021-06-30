(async () => {
  const isLogged = localStorage.getItem('@health:logged');
  if (!isLogged) {
    window.location.href = 'index.html';
  }
})();
