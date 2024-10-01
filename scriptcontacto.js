
document.getElementById('formularioContacto').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que el formulario se envíe de manera convencional

    // Capturamos los valores del formulario
    const nombres = document.getElementById('nombres').value;
    const proyecto = document.getElementById('proyecto').value;
    const interes = document.getElementById('interes').value;
    const detalle = document.getElementById('detalle').value;

    // Tu número de WhatsApp (código de país y número sin espacios ni guiones)
    const numeroWhatsapp = '51921352415'; // Cambia este número por tu número de WhatsApp

    // Construimos el mensaje que será enviado a WhatsApp (sin incluir el número de teléfono)
    const mensaje = `Hola, mi nombre es ${nombres}. 
    Me gustaría obtener más información sobre: ${proyecto}. 
    Mi interés es: ${interes}.
    Aquí está el detalle: ${detalle}.`;

    // Codificar el mensaje para incluirlo en la URL de WhatsApp
    const mensajeCodificado = encodeURIComponent(mensaje);

    // URL de WhatsApp con el mensaje predefinido
    const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${mensajeCodificado}`;

    // Abrir WhatsApp en una nueva pestaña o ventana
    window.open(urlWhatsapp, '_blank');
});