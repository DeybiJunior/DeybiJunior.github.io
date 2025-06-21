 document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.getElementById('menuToggle');
            const navLinks = document.getElementById('navLinks');
            
            // Toggle del menú móvil
            menuToggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                navLinks.classList.toggle('active');
                menuToggle.classList.toggle('active');
            });
            
            // Cerrar menú al hacer click en un enlace
            const navLinksItems = navLinks.querySelectorAll('a');
            navLinksItems.forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    menuToggle.classList.remove('active');
                });
            });
            
            // Cerrar menú al hacer click fuera
            document.addEventListener('click', function(e) {
                if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                    navLinks.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            });
            
            // Smooth scroll para los enlaces
            navLinksItems.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        const headerHeight = document.querySelector('header').offsetHeight;
                        const targetPosition = targetElement.offsetTop - headerHeight - 20;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });