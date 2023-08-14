document.addEventListener("DOMContentLoaded", ()=>{

    document.getElementById("but").addEventListener("click", function () {    
        alert("Hola!");
        event.stopPropagation()
    });

    document.getElementById("div").addEventListener("click", function() {
        alert("Hola, soy el Div");        
    });
});
