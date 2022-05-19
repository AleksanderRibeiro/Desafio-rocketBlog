onload = () => {
  inscrever.onsubmit = () => {
    if (email.value == 0) {
      alert('Email não válido')
    } else alert('Obrigado por se inscrever')
  }
}
