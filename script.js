function loadComponent(id, file, cssFile = null, jsFile = null){
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
            script.onload = function() {
                    const buttons = document.querySelectorAll(".option-btn");

                    buttons.forEach(button => {
                        button.addEventListener("click", function() {
                            const target = this.getAttribute("data-target");
                            const content = document.getElementById(target);

                            document.querySelectorAll(".option-content").forEach(item => {
                                if(item !== content){
                                    item.style.display = "none";
                                }else{
                                    item.style.display = "visible";
                                }
                            });

                            content.style.display = content.style.display === "block" ? "none" : "block";
                        });
                    });
                
            };
        }
    })
    .catch(error => console.error(`Erro ao carregar ${file}:`, error));
}

document.addEventListener("DOMContentLoaded", function(){
    loadComponent("header", "components/header/header.html", "components/header/header.css", "components/header/header.js");
    loadComponent("about", "components/about/about.html", "components/about/about.css", "components/about/about.js");
    loadComponent("benefits", "components/benefits/benefits.html", "components/benefits/benefits.css","components/benefits/benefits.js");
    loadComponent("options", "components/options/options.html", "components/options/options.css", "components/options/options.js");
    loadComponent("products", "components/products/products.html", "components/products/products.css", "components/products/products.js");
    loadComponent("contact", "components/contact/contact.html", "components/contact/contact.css", "components/contact/contact.js");
});