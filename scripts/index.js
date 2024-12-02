document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById("myApp");

    //Útvonal listák:
    //const frontendRoutes = ['/', '/posts']; //frontend routes
    //const apiRoutes = ['/api/posts']; //API routes

    const render = async (route) => {        
        app.innerHTML = `
            <nav>
                <a href="/" data-link>Home</a>
                <a href="/posts" data-link>Posts</a>
            </nav>
        `;

        if (route === '/') {
            app.innerHTML += `<h1>Üdvözöllek!</h1>`;
            return;
        }

        //Példa útvonal kezelés: TODO lehet kiszervezni
        if (route === '/posts') {
            try {
                const response = await fetch('/api/posts');
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const posts = await response.json();

                app.innerHTML += `
                    <h1>Posts</h1>
                    <ul>
                        ${posts.map(post => `<li>Cím: ${post.title} --> Dátum: ${post.created_at}</li>`).join('')}
                    </ul>
                `;
            } catch (error) {
                console.error(error);
                app.innerHTML += `
                    <h1>Error</h1>
                    <p>Hiba történt: ${error.message}</p>
                `;
            }
            return;
        }
        app.innerHTML += `<h1>404 - A keresett oldal nem található</h1>`;
    };

    document.body.addEventListener('click', (e) => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            const route = e.target.getAttribute('href');
            window.history.pushState({}, '', route);
            render(route);
        }
    });

    window.addEventListener('popstate', () => {
        render(window.location.pathname);
    });

    render(window.location.pathname);
});
