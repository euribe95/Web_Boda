document.getElementById('rsvp-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // Aquí puedes conectar con un backend, Google Forms o Email si lo necesitas.
  document.getElementById('rsvp-form').style.display = 'none';
  document.getElementById('mensaje-exito').style.display = 'block';
});
