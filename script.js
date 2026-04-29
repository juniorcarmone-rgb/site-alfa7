const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const year = document.getElementById('year');
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

year.textContent = new Date().getFullYear();

menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  menu?.classList.toggle('open');
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    formMessage.textContent = 'Preencha todos os campos obrigatórios para enviar a solicitação.';
    formMessage.style.color = '#b42318';
    return;
  }

  formMessage.textContent = 'Solicitação recebida. Nossa equipe retornará em breve.';
  formMessage.style.color = '#0a5d2c';
  form.reset();
});
