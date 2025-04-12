let tituloOriginal = document.title;
    
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    document.title = "¡No te vayas 😢!";
  } else {
    document.title = tituloOriginal;
  }
});