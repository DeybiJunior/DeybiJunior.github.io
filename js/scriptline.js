  document.addEventListener('DOMContentLoaded', function() {
            const timelineItems = document.querySelectorAll('.timeline-item');
            
            timelineItems.forEach(item => {
                item.addEventListener('click', function() {
                    const isExpanded = this.classList.contains('expanded');
                    
                    // Colapsar todos los elementos
                    timelineItems.forEach(otherItem => {
                        otherItem.classList.remove('expanded');
                    });
                    
                    // Si el elemento no estaba expandido, expandirlo
                    if (!isExpanded) {
                        this.classList.add('expanded');
                    }
                });
            });

            // Efecto de hover mejorado
            timelineItems.forEach(item => {
                item.addEventListener('mouseenter', function() {
                    if (!this.classList.contains('expanded')) {
                        this.style.transform = 'scale(1.02)';
                    }
                });
                
                item.addEventListener('mouseleave', function() {
                    if (!this.classList.contains('expanded')) {
                        this.style.transform = 'scale(1)';
                    }
                });
            });
        });