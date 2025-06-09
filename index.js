
 async function loadComponent(route, id) {
     await fetch(route)
        .then(response => response.text())
        .then(data => {

            const ee =document.getElementById(id).innerHTML = data;
            
        })
        .catch(error => console.error('Error al cargar el componente:', error));
}

// Llama a la función para cargar el componente
loadComponent("./components/header/header.html", "component-header");
loadComponent("./page/home/home.html", "component-main");
loadComponent("./components/main/hero/hero.html", "component-hero");
loadComponent("./components/main/services/services.html", "component-serives");
loadComponent("./components/main/about/about.html", "component-about");
loadComponent("./components/main/download/download.html", "component-download");
loadComponent("./components/footer/footer.html", "component-footer");
loadComponent("./components/main/testimonials/testimonials.html", "component-testimonials");
