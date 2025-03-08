function loadComponent(id, file){
    fetch(file)
    .then(response => response.text())
    .then(data => {
        document.getElementById(id).innerHTML = data;
       
        if (cssFile) {
            let link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = cssFile;
            document.head.appendChild(link);
        }

        // Carregar o JS correspondente
        if (jsFile) {
            let script = document.createElement("script");
            script.src = jsFile;
            script.defer = true;
            document.body.appendChild(script);
        }
    })
    .catch(error => console.error(`Erro ao carregar ${file}:`, error));
}

document.addEventListener("DOMContentLoaded", function(){
    loadComponent("header", "components/header/header.html");
    loadComponent("about", "components/about/about.html");
    loadComponent("benefits", "components/benefits/benefits.html");
    loadComponent("options", "components/options/options.html");
    loadComponent("products", "components/products/products.html");
    loadComponent("contact", "components/contact/contact.html");
});