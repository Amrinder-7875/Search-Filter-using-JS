 const userArray = [
            {
                name: "Italy",
                bio: "A European country known for ancient history, delicious cuisine, art, fashion, and iconic cities like Rome, Venice, and Florence. Rich culture and scenic landscapes.",
                pic: "https://images.unsplash.com/photo-1528114039593-4366cc08227d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGl0YWx5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900"},
            {
                name: "Rome",
                bio: "Capital of Italy, famous for the Colosseum, Vatican City, Roman Empire history, classical architecture, and vibrant Italian lifestyle.",
                pic: "https://images.unsplash.com/photo-1555992828-ca4dbe41d294?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1364"},
            {
                name: "Morocco",
                bio: "A North African country with colorful markets, deserts, mountains, Islamic architecture, traditional cuisine, and cities like Marrakech and Fez.",
                pic: "https://plus.unsplash.com/premium_photo-1673415819362-c2ca640bfafe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071"},
            {
                name: "Dubai",
                bio: "A futuristic city in the UAE known for luxury, skyscrapers like Burj Khalifa, desert adventures, shopping malls, man-made islands, and global tourism.",
                pic: "https://images.unsplash.com/photo-1510665724063-f77a01074aa2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=988"
            },
            {
                name: "Mosques",
                bio: "Islamic places of worship featuring domes, minarets, calligraphy, and prayer halls. Centers for spiritual gathering and cultural architectural beauty.",
                pic: "https://images.unsplash.com/photo-1664645339724-d6dee79fdff1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1028"
            },
            {
                name: "Florida",
                bio: "A U.S. state famous for beaches, theme parks like Disney World, warm weather, Cuban influence, space center, nightlife in Miami, and ocean tourism.",
                pic: "https://images.unsplash.com/photo-1476984251899-8d7fdfc5c92c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3132"
            },
            {
                name: "France",
                bio: "A European nation known for romance, fashion, wine, the Eiffel Tower, art museums, beautiful countryside, and rich history from monarchy to modern culture.",
                pic: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJhbmNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900"
            },
        ];

        const wrapper = document.querySelector(".wrapper");
        const resultsCount = document.querySelector(".results-count");
        const input = document.querySelector(".inp");

        function showUser(arr) {
            wrapper.innerHTML = "";
            
            if (arr.length === 0) {
                wrapper.innerHTML = `
                    <div class="no-results" style="grid-column: 1 / -1;">
                        <div class="no-results-icon">🔍</div>
                        <div>No users found matching your search</div>
                    </div>
                `;
                resultsCount.textContent = "";
                return;
            }

            resultsCount.textContent = `Showing ${arr.length} ${arr.length === 1 ? 'user' : 'users'}`;

            arr.forEach((user, index) => {
                const card = document.createElement("div");
                card.classList.add("card");
                card.style.transitionDelay = `${index * 0.1}s`;
                
                card.innerHTML = `
                    <div class="card-image-wrapper">
                        <img src="${user.pic}" alt="${user.name}">
                    </div>
                    <div class="card-overlay"></div>
                    <div class="content">
                        <h4>${user.name}</h4>
                        <p>${user.bio}</p>
                    </div>
                `;
                
                wrapper.appendChild(card);
                
                requestAnimationFrame(() => {
                    setTimeout(() => {
                        card.classList.add("show");
                    }, 50);
                });
            });
        }

        function debounce(func, delay) {
            let timer;
            return function (...args) {
                clearTimeout(timer);
                timer = setTimeout(() => func.apply(this, args), delay);
            };
        }

        const handleSearch = function() {
            const searchValue = this.value.toLowerCase().trim();
            
            const filtered = userArray.filter(user => 
                user.name.toLowerCase().includes(searchValue)
            );
            
            showUser(filtered);
        };

        input.addEventListener("input", debounce(handleSearch, 300));

        showUser(userArray);