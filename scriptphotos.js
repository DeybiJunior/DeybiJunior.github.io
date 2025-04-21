document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeModal = document.querySelector('.close-modal');
    const prevBtn = document.querySelector('.modal-prev');
    const nextBtn = document.querySelector('.modal-next');
    
    let currentIndex = 0;
    
    // Abrir el modal con la imagen seleccionada
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            const img = item.querySelector('.gallery-img');
            const caption = item.querySelector('.gallery-caption').textContent;
            
            currentIndex = index;
            openModal(img.src, caption);
        });
    });
    
    // Función para abrir el modal
    function openModal(src, caption) {
        modalImg.src = src;
        modalCaption.textContent = caption;
        modal.style.display = 'flex';
        
        // Animar la aparición del modal
        modal.style.opacity = 0;
        setTimeout(() => {
            modal.style.opacity = 1;
            modal.style.transition = 'opacity 0.3s ease';
        }, 10);
        
        // Deshabilitar el desplazamiento del cuerpo
        document.body.style.overflow = 'hidden';
    }
    
    // Cerrar el modal
    closeModal.addEventListener('click', () => {
        modal.style.opacity = 0;
        setTimeout(() => {
            modal.style.display = 'none';
            // Restaurar el desplazamiento del cuerpo
            document.body.style.overflow = 'auto';
        }, 300);
    });
    
    // También cerrar si hacen clic fuera de la imagen
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal.click();
        }
    });
    
    // Navegación dentro del modal
    function showImage(index) {
        if (index < 0) {
            currentIndex = galleryItems.length - 1;
        } else if (index >= galleryItems.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        
        const img = galleryItems[currentIndex].querySelector('.gallery-img');
        const caption = galleryItems[currentIndex].querySelector('.gallery-caption').textContent;
        
        // Animar el cambio de imagen
        modalImg.style.opacity = 0;
        setTimeout(() => {
            modalImg.src = img.src;
            modalCaption.textContent = caption;
            modalImg.style.opacity = 1;
        }, 200);
    }
    
    prevBtn.addEventListener('click', () => {
        showImage(currentIndex - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        showImage(currentIndex + 1);
    });
    
    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'flex') {
            if (e.key === 'ArrowRight') {
                showImage(currentIndex + 1);
            } else if (e.key === 'ArrowLeft') {
                showImage(currentIndex - 1);
            } else if (e.key === 'Escape') {
                closeModal.click();
            }
        }
    });
    
    
    // Touch events for modal swiping
    let touchStartX = 0;
    let touchEndX = 0;
    
    modal.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    modal.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left
            showImage(currentIndex + 1);
        } else if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right
            showImage(currentIndex - 1);
        }
    }
});