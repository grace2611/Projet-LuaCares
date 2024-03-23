// NAVBAR
function showSection(sectionId) {
    var sections = document.querySelectorAll('.container');
    sections.forEach(function (section) {
        section.style.display = 'none';
    });
    var selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}
//Funcionamiento del nombre
document.addEventListener('DOMContentLoaded', function() {
    const nombre = localStorage.getItem('nombre');
    const saludo1Element = document.getElementById('saludo1');
    const saludo2Element = document.getElementById('saludo2');
  
    if (nombre) {
      saludo1Element.innerText = 'Bienvenido(a)';
      saludo2Element.innerText = `${nombre}!`;
    } else {
      saludo1Element.innerText = 'Bienvenido(a)!';
      saludo2Element.innerText = '';
    }
  
    const text1Animation = saludo1Element.animate(
      [
        { transform: 'translateX(0%) scale(0.9)', opacity: 1 },
        { transform: 'translateX(0%) scale(1)', opacity: 1 },
        { transform: 'translateX(0%) scale(1)', opacity: 1 }
      ],
      { duration: 1000, fill: 'forwards' }
    );
  
    text1Animation.onfinish = () => {
      const text2Animation = saludo2Element.animate(
        [
          { transform: 'translateX(-50%) scale(1)', opacity: 0 },
          { transform: 'translateX(0%) scale(1)', opacity: 1 }
        ],
        { duration: 990, fill: 'forwards' }
      );
    };
  });
  
  function guardarNombre() {
    const nombre = document.getElementById('nombre').value;
    localStorage.setItem('nombre', nombre);
    window.location.href = 'test.html'; 
  }