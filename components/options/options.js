document.addEventListener("DOMContentLoaded", function() {
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
})
