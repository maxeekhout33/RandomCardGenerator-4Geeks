window.onload = () => {
    //write your code here
    let valor = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let pinta = ["♥", "♦", "♠", "♣"];

    //Escoge un valor aleatorio del arreglo "valor"
    let randomValor = Math.floor(Math.random() * valor.length);
    console.log(valor[randomValor]);

    //Escoge una pinta aleatoria del arreglo "pinta"
    let randomPinta = Math.floor(Math.random() * pinta.length);
    console.log(pinta[randomPinta]);

    //Si la carta es de corazon o diamante, que sea color rojo
    if (pinta[randomPinta] === "♥" || pinta[randomPinta] === "♦") {
        let cambio = document.body;
        cambio.style.color = 'red';
    }

    //Generando la carta
    let divCard = document.createElement("div");
    divCard.className = "card";
    divCard.id = "xCard";
    document.body.appendChild(divCard);

    let divPintaUp = document.createElement("div");
    divPintaUp.className = "pintaUp";
    divPintaUp.id = "xPintaUp";
    document.getElementById("xCard").appendChild(divPintaUp);

    let divValor = document.createElement("div");
    divValor.className = "valor";
    divValor.id = "xValor";
    document.getElementById("xCard").appendChild(divValor);

    let divPintaDown = document.createElement("div");
    divPintaDown.className = "pintaDown";
    divPintaDown.id = "xPintaDown";
    document.getElementById("xCard").appendChild(divPintaDown);

    //Crea el valor de la carta:
    let newValor = document.createElement("p");
    newValor.innerHTML = valor[randomValor];
    document.getElementById("xValor").appendChild(newValor);

    //Crea la pinta de la carta:
    let newPintaUp = document.createElement("p");
    newPintaUp.innerHTML = pinta[randomPinta];
    document.getElementById("xPintaUp").appendChild(newPintaUp);

    //Crea la pinta de la carta:
    let newPintaDown = document.createElement("p");
    newPintaDown.innerHTML = pinta[randomPinta];
    document.getElementById("xPintaDown").appendChild(newPintaDown);



    // //LLAMANDO A LA CARTA CREADA EN HTML:

    // //Crea el valor de la carta:
    // let oldValor = document.createElement("p");
    // oldValor.innerHTML = valor[randomValor];
    // document.getElementById("idvalor").appendChild(oldValor);

    // //Crea la pinta de la carta:
    // let oldPintaUp = document.createElement("p");
    // oldPintaUp.innerHTML = pinta[randomPinta];
    // document.getElementById("idpintaUp").appendChild(oldPintaUp);

    // //Crea la pinta de la carta:
    // let oldPintaDown = document.createElement("p");
    // oldPintaDown.innerHTML = pinta[randomPinta];
    // document.getElementById("idpintaDown").appendChild(oldPintaDown);

}

