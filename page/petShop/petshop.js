
 async function loadComponent(route, id) {
     await fetch(route)
        .then(response => response.text())
        .then(data => {

            document.getElementById(id).innerHTML = data;
            
        })
        .catch(error => console.error('Error al cargar el componente:', error));
}

// Llama a la función para cargar el componente
loadComponent("../../components/header/header.html", "component-header");
loadComponent("../../components/footer/footer.html", "component-footer");
loadComponent("../../components/petShop/petShop.html", "component-petshop");