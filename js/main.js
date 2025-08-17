    // Mobile menu toggle
        document.getElementById('mobile-menu-btn').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });

        // Smooth scrolling
        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Gem filtering
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                const gems = document.querySelectorAll('.gem-card');
                
                gems.forEach(gem => {
                    if (filter === 'all' || gem.classList.contains(filter)) {
                        gem.style.display = 'block';
                    } else {
                        gem.style.display = 'none';
                    }
                });
            });
        });

        // Search functionality
        document.getElementById('gemSearch').addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const gems = document.querySelectorAll('.gem-card');
            
            gems.forEach(gem => {
                const title = gem.querySelector('h3').textContent.toLowerCase();
                const description = gem.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    gem.style.display = 'block';
                } else {
                    gem.style.display = 'none';
                }
            });
        });

        // Modal functions
        function openGemModal(gemId) {
            const modal = document.getElementById('gemModal');
            const content = document.getElementById('gemModalContent');
            
            // Sample gem data (in real application, this would come from a database)
            const gemData = {
                ruby1: {
                    name: 'Premium Ruby',
                    price: '$15,500',
                    weight: '5.2 Carats',
                    origin: 'Burma',
                    clarity: 'VVS',
                    cut: 'Brilliant',
                    treatment: 'Heat treated',
                    description: 'This exceptional ruby displays a vivid red color with excellent clarity. The gemstone originates from the famous Mogok mines in Burma and has been heat treated to enhance its natural beauty.',
                    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d1955f06-0970-43b7-a6c4-d88324a76b22.png'
                },
                sapphire1: {
                    name: 'Royal Blue Sapphire',
                    price: '$12,800',
                    weight: '4.8 Carats',
                    origin: 'Kashmir',
                    clarity: 'VVS1',
                    cut: 'Oval',
                    treatment: 'Unheated',
                    description: 'A rare Kashmir sapphire with the coveted velvety blue color. This unheated stone represents the pinnacle of sapphire quality.',
                    image: 'https://placehold.co/500x400'
                }
                // Add more gem data as needed
            };
            
            const gem = gemData[gemId] || gemData.ruby1;
            
            content.innerHTML = `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <img src="${gem.image}" alt="${gem.name} gemstone with detailed view showing color and clarity" class="w-full rounded-lg shadow-lg" />
                    </div>
                    <div>
                        <h2 class="text-3xl font-bold mb-4">${gem.name}</h2>
                        <div class="text-2xl font-bold text-purple-600 mb-6">${gem.price}</div>
                        <div class="space-y-3 mb-6">
                            <div class="flex justify-between"><span class="font-medium">Weight:</span><span>${gem.weight}</span></div>
                            <div class="flex justify-between"><span class="font-medium">Origin:</span><span>${gem.origin}</span></div>
                            <div class="flex justify-between"><span class="font-medium">Clarity:</span><span>${gem.clarity}</span></div>
                            <div class="flex justify-between"><span class="font-medium">Cut:</span><span>${gem.cut}</span></div>
                            <div class="flex justify-between"><span class="font-medium">Treatment:</span><span>${gem.treatment}</span></div>
                        </div>
                        <p class="text-gray-600 mb-6">${gem.description}</p>
                        <div class="space-y-3">
                            <button class="btn-primary w-full">Add to Cart</button>
                            <button class="w-full bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-all">Request Certificate</button>
                        </div>
                    </div>
                </div>
            `;
            
            modal.style.display = 'block';
        }

        function openSellModal() {
            document.getElementById('sellModal').style.display = 'block';
        }

        function openLandSellModal() {
            document.getElementById('landSellModal').style.display = 'block';
        }

        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                if (event.target == modal) {
                    modal.style.display = 'none';
                }
            });
        }

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add scroll effect to navigation
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.classList.add('shadow-lg');
            } else {
                nav.classList.remove('shadow-lg');
            }
        });

        // Form submissions
        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your submission! We will contact you soon.');
                closeModal('sellModal');
                closeModal('landSellModal');
                this.reset();
            });
        });

        // Initialize animations on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all gem cards for animation
        document.querySelectorAll('.gem-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });