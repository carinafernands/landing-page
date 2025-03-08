document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".option-btn");

    buttons.forEach(button => {
    button.addEventListener("click", function(){
        const target = this.getAttribute("data-target");
        const content = document.getElementById(target);

        if(content.style.display === "block"){
            content.style.display = "none";
        }else{
            document.querySelectorAll(".option-content").forEach(item =>{
                item.style.display = "none";
            });
            content.style.display = "block";
        }
    });    
    });
});