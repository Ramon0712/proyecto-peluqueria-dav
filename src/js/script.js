 function criaImagem(){
    const div = document.getElementById("galeria");
    for (var i = 1; i < 10; i++) {
        const image = document.createElement("img");
        image.src = './src/img/card-gallery'+i+'.jpg';
        
        
        div.appendChild(image);

      

    }
   
}

criaImagem();


function cambiar(imagen) {
  window.location.href = "./galeria.html";
}







