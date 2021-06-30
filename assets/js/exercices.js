function handleSave() {
  Swal.fire({
    title: 'Sucesso',
    text: 'Exercício adicionado com sucesso',
    icon: 'success',
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.reload();
    }
  });
}
