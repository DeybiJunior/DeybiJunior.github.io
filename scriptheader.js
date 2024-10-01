function toggleMenu() {
    const nav = document.getElementById('nav');
    const header = document.querySelector('header');

    nav.classList.toggle('show'); // Alterna la clase 'show' en el menú

    // Cambiar el color de fondo del encabezado al activar el menú
    if (nav.classList.contains('show')) {
        header.classList.add('active'); // Añadir clase 'active'
    } else {
        header.classList.remove('active'); // Quitar clase 'active'
    }
}

window.onscroll = function() {
  var header = document.getElementById("header");
  var hello = document.getElementById("hello");

  if (hello) {
      var helloPosition = hello.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;
      console.log(helloPosition, windowHeight);

      if (helloPosition <= windowHeight / 2) {
          header.style.backgroundColor = "black"; 
      } else {
          header.style.backgroundColor = "transparent"; 
      }
  }
};

