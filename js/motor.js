var estadoLicuadora = "apagada";
var sonidoLicuadora = document.getElementById("blender-sound");
var buttonLicuadora = document.getElementById("blender-button-sound");
var licuadora = document.getElementById("blender");

function controlarLicuadora() {
   if (estadoLicuadora == "apagada") {
    estadoLicuadora = "encendida";
    hacerRuido();
    licuadora.classList.add("active");
    } else {
        estadoLicuadora = "apagada"
        hacerRuido();
        licuadora.classList.remove("active");
    }
}

    function hacerRuido(){
        if( sonidoLicuadora.paused ) {
            buttonLicuadora.play();
            sonidoLicuadora.play();
        } else {
            buttonLicuadora.play();
            sonidoLicuadora.pause();
            sonidoLicuadora.currentTime = 0;
        }
    }
