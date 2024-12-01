document.addEventListener('DOMContentLoaded', () => {
    // Validación del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
  
        if (name === '' || email === '' || message === '') {
          alert('Por favor, rellena todos los campos');
          return;
        }
  
        if (!isValidEmail(email)) {
          alert('Por favor, introduce un email válido');
          return;
        }
  
        // Aquí iría la lógica para enviar el formulario
        console.log('Formulario enviado:', { name, email, message });
        contactForm.reset();
      });
    }
  
    // Función para validar email
    function isValidEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  
    // Animación simple para las tarjetas de mascotas
    const petCards = document.querySelectorAll('.pet-card');
    petCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
      });
    });
  
    // Función para cargar y mostrar las mascotas
    function loadPets() {
      fetch('/api/pets')
        .then(response => response.json())
        .then(pets => {
          const petList = document.getElementById('petList');
          if (petList) {
            petList.innerHTML = '';
            pets.forEach(pet => {
              const petElement = document.createElement('div');
              petElement.className = 'pet-card';
              petElement.innerHTML = `
                <h3>${pet.name}</h3>
                <p>Tipo: ${pet.type}</p>
                <p>Edad: ${pet.age} años</p>
              `;
              petList.appendChild(petElement);
            });
          }
        })
        .catch(error => console.error('Error:', error));
    }
  
    // Cargar mascotas cuando se carga la página
    loadPets();
  });